import Vue from 'vue'
import RouterAlive, { isAlikeRoute, emptyObj, emptyArray } from './RouterAlive'
import langs from '../lang'

// 滚动
function scrollTo ($el, left = 0, top = 0) {
  if ($el.scrollTo) {
    $el.scrollTo({ left, top, behavior: 'smooth' })
  } else {
    $el.scrollLeft = left
    $el.scrollTop = top
  }
}

// 防抖
function debounce (fn, delay = 200) {
  let timeout = null
  return function () {
    let context = this
    let args = arguments
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      fn.call(context, args)
    }, delay)
  }
}

// 队列执行promise
function promiseQueue (promises, isFinally = true) {
  let queue = Promise.resolve()
  const type = isFinally ? 'finally' : 'then'
  for (let item of promises) {
    queue = queue[type](item)
  }
  return queue
}

export default {
  name: 'router-tab',
  components: { RouterAlive },
  props: {
    // 缓存key，如果为函数，则参数为route
    aliveKey: RouterAlive.props.aliveKey,

    // 国际化
    // - 为字符串时，可以设置为内置的语言 'zh-CN' (默认) 和 'en'
    // - 为对象时，可设置自定义的语言
    i18n: {
      type: [ String, Object ],
      default: 'zh-CN'
    },

    // 初始页签数据
    tabs: {
      type: Array,
      default: () => []
    },

    // router-view组件配置
    routerView: Object,

    // 页签过渡效果
    tabTransition: {
      type: [ String, Object ],
      default: 'router-tab-zoom-lb'
    },

    // 页面过渡效果
    pageTransition: {
      type: [ String, Object ],
      default: () => ({
        name: 'router-tab-swap',
        mode: 'out-in'
      })
    }
  },

  data () {
    return {
      loading: false, // 路由页面loading
      items: [], // 页签项
      activedTab: null, // 当前激活的页签
      isRouterAlive: true,
      // 右键菜单
      contextmenu: {
        id: null,
        index: -1,
        left: 0,
        top: 0
      }
    }
  },

  computed: {
    // 语言内容
    lang () {
      let lang = null
      let i18n = this.i18n

      if (typeof i18n === 'string') {
        lang = langs[i18n]
      } else if (typeof i18n === 'object') {
        lang = i18n
      }

      // 找不到语言配置，则使用英文
      if (!lang) lang = langs['en']

      return lang
    },

    // 右键菜单是否当前页签
    isContextTabActived () {
      return this.contextmenu.id === this.activedTab
    },

    // 右键页签是否允许关闭
    isContextTabCanBeClosed () {
      let { items, contextmenu } = this
      let contextTab = items[contextmenu.index]
      return items.length > 1 && contextTab && contextTab.closable !== false
    },

    // 左侧可关闭的页签
    tabsLeft () {
      let { items, contextmenu: { id, index } } = this
      return id ? items.slice(0, index).filter(({ closable }) => closable !== false) : emptyArray
    },

    // 左侧可关闭的页签
    tabsRight () {
      let { items, contextmenu: { id, index } } = this
      return id ? items.slice(index + 1).filter(({ closable }) => closable !== false) : emptyArray
    },

    // 其他可关闭的页签
    tabsOther () {
      let { items, contextmenu: { id } } = this
      return id ? items.filter(({ closable, id: tid }) => closable !== false && id !== tid) : emptyArray
    }
  },

  watch: {
    // 路由切换更新激活的页签
    $route ($route) {
      this.loading = false
      this.hideContextmenu()
      this.updateActivedTab()
      this.fixCommentPage()
    },

    activedTab () {
      // 激活页签时，如果当前页签不在可视区域，则滚动显示页签
      this.$nextTick(() => {
        let $cur = this.$el.querySelector('.router-tab-nav .actived')
        let $scr = this.$el.querySelector('.router-tab-scroll')
        if ($cur) {
          let cLeft = $cur.offsetLeft
          let sLeft = $scr.scrollLeft
          if (cLeft < sLeft || cLeft + $cur.clientWidth > sLeft + $scr.clientWidth) {
            this.adjust()
          }
        }
      })
    },

    // 监听右键菜单显示关闭
    'contextmenu.id' (val, old) {
      if (!old && val) {
        // 显示右键菜单，绑定点击关闭事件
        document.addEventListener('click', this.onClick = (e) => {
          if (e.target !== this.$el.querySelector('.router-tab-contextmenu')) {
            this.hideContextmenu()
          }
        })
      } else if (old && !val) {
        // 隐藏右键菜单，移除点击关闭事件
        document.removeEventListener('click', this.onClick)
      }
    }
  },

  beforeCreate () {
    // 添加到原型链
    Vue.prototype.$routerTab = this
  },

  created () {
    this.getTabItems()
    this.updateActivedTab()

    this.$router.beforeEach(this.routerPageLeaveGuard)
  },

  mounted () {
    // 页面载入和浏览器窗口大小改变时调整Tab滚动显示
    window.addEventListener('resize', this.onResize = debounce(this.adjust))
  },

  destroyed () {
    // 销毁后移除监听事件
    window.removeEventListener('resize', this.onResize)
  },

  methods: {
    getAliveKey: RouterAlive.methods.getAliveKey,

    // 页面离开导航守卫
    routerPageLeaveGuard (to, from, next) {
      if (this._isDestroyed) {
        let hooks = this.$router.beforeHooks
        let idx = hooks.indexOf(this.routerPageLeaveGuard)

        // 移除已销毁的RouterTab实例注册的导航守卫
        if (idx > -1) hooks.splice(idx, 1)

        next()
      } else {
        const id = this.getAliveKey(to)
        const $alive = this.$refs.routerAlive
        const { route: cacheRoute } = ($alive && $alive.cache[id]) || emptyObj

        // 如果不是相同路由则检查beforePageLeave
        if (cacheRoute && !isAlikeRoute(to, cacheRoute)) {
          this.pageLeavePromise(id, 'replace')
            .then(() => next())
            .catch(() => next(false))
        } else {
          next()
        }
      }
    },

    // 根据初始页签数据生成页签列表
    getTabItems () {
      let { tabs, $router } = this
      let ids = {}

      this.items = tabs.map((item, index) => {
        let { to, closable } = typeof item === 'string'
          ? { to: item }
          : (item || emptyObj)
        let route = to && $router.match(to)

        if (route) {
          let tab = this.getRouteTab(route)
          let id = tab.id

          // 根据id去重
          if (!ids[id]) {
            return (ids[id] = Object.assign(tab, { closable: closable !== false }))
          }
        }
      }).filter(item => !!item)
    },

    // 更新激活的页签
    updateActivedTab () {
      this.activedTab = this.getAliveKey()
    },

    // 更新tab数据
    updateTab (key, { route, tab }) {
      let { items, getRouteTab } = this
      let matchIdx = items.findIndex(({ id }) => id === key)

      let item = Object.assign(getRouteTab(route), tab)

      if (matchIdx > -1) {
        let matchTab = items[matchIdx]
        item.closable = matchTab.closable !== false
        this.$set(items, matchIdx, item)
      } else {
        items.push(item)
      }
    },

    // 从route中获取tab数据
    getRouteTab (route) {
      let id = this.getAliveKey(route)
      let { fullPath: to, meta } = route
      let { title, icon, tips } = meta

      return { id, to, title, icon, tips }
    },

    // 页面离开Promise
    pageLeavePromise (id, type) {
      return new Promise((resolve, reject) => {
        let $alive = this.$refs.routerAlive
        let tab = this.items.find(item => item.id === id) // 当前页签
        let { vm } = $alive.cache[id] || emptyObj // 缓存数据
        let beforePageLeave = vm && vm.$vnode.componentOptions.Ctor.options.beforePageLeave

        if (typeof beforePageLeave === 'function') {
          // 页签关闭前
          beforePageLeave.bind(vm)(resolve, reject, tab, type)
        } else {
          resolve()
        }
      })
    },

    // 关闭tab项
    closeTabItem (id) {
      let { items } = this
      let $alive = this.$refs.routerAlive
      const idx = items.findIndex(item => item.id === id)

      return this.pageLeavePromise(id, 'close').then(function () {
        // 承诺关闭后移除页签和缓存
        $alive.remove(id)
        idx > -1 && items.splice(idx, 1)
      }).catch(e => {})
    },

    // 关闭页签
    close (id = this.activedTab) {
      let { activedTab, items, $router } = this
      const idx = items.findIndex(item => item.id === id)

      this.closeTabItem(id).then(() => {
        // 如果关闭当前页签，则打开后一个页签
        if (activedTab === id) {
          let nextTab = items[idx] || items[idx - 1]
          $router.replace(nextTab.to)
        }
      })
    },

    // 关闭多个页签
    closeMulti (tabs) {
      let { items, $router, contextmenu, closeTabItem } = this
      let nextTab = items.find(({ id }) => id === contextmenu.id)

      // 队列执行关闭promise
      promiseQueue(tabs.map(
        ({ id }) => () => { closeTabItem(id) }
      )).finally(() => {
        // 当前页签如已关闭，则打开右键选中页签
        if (items.findIndex(({ id }) => id === this.activedTab) === -1) {
          $router.replace(nextTab.to)
        }
      })
    },

    // 刷新指定页签
    refresh (id = this.activedTab) {
      this.pageLeavePromise(id, 'refresh').then(() => {
        this.$refs.routerAlive.clear(id)
        this.reloadRouter()
      })
    },

    /**
     * 刷新所有页签
     * @param {boolean} [force=false] 是否强制刷新，如果强制则忽略页面beforePageLeave
     */
    refreshAll (force = false) {
      const $alive = this.$refs.routerAlive
      const { cache } = $alive

      const promises = Object.keys(cache).map(id => () => {
        if (!force) {
          return this.pageLeavePromise(id, 'refresh').then(() => {
            $alive.clear(id)
          })
        } else {
          $alive.clear(id)
        }
      })

      promiseQueue(promises).finally(this.reloadRouter)
    },

    // 重载路由组件
    reloadRouter (ignoreTransition = false) {
      this.isRouterAlive = false

      // 默认在页面过渡结束后会设置 isRouterAlive 为 true
      // 如果过渡事件失效，则需传入 ignoreTransition 为 true 手动更改
      if (ignoreTransition) {
        this.$nextTick(() => {
          this.isRouterAlive = true
        })
      }
    },

    // 页签过渡结束
    onTabTransitionEnd () {
      this.adjust()
    },

    // 页面过渡结束
    onPageTransitionEnd () {
      if (!this.isRouterAlive) this.isRouterAlive = true
    },

    // 显示页签右键菜单
    showContextmenu (id, index, e) {
      // 菜单定位
      let { y: top, x: left } = e || emptyObj
      Object.assign(this.contextmenu, { id, index, top, left })
    },

    // 关闭页签右键菜单
    hideContextmenu () {
      this.showContextmenu(null, -1)
    },

    // Tab滚动
    tabScroll (direction) {
      let $tab = this.$el.querySelector('.router-tab-header')
      let $scr = $tab.querySelector('.router-tab-scroll')
      let space = $tab.clientWidth - 110

      scrollTo($scr, $scr.scrollLeft + (direction === 'left' ? -space : space))
    },

    // 调整Tab滚动显示
    adjust () {
      let $tab = this.$el.querySelector('.router-tab-header')
      let $scr = $tab.querySelector('.router-tab-scroll')
      let $nav = $scr.querySelector('.router-tab-nav')
      let $cur = $nav.querySelector('.actived')
      let isScroll = $nav.clientWidth > $scr.clientWidth // 判断是否需要滚动

      $tab.classList[isScroll ? 'add' : 'remove']('is-scroll')

      if ($cur && isScroll) {
        scrollTo($scr, $cur.offsetLeft + ($cur.clientWidth - $scr.clientWidth) / 2)
      }
    },

    // 修复：当快速频繁切换页签时，旧页面离开过渡效果尚未完成，新页面内容无法正常mount，内容节点为comment类型
    fixCommentPage () {
      if (this.$refs.routerAlive.$el.nodeType === 8) {
        this.reloadRouter(true)
      }
    }
  }
}
