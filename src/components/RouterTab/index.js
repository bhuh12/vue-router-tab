import Vue from 'vue'

// 方法
import { emptyObj } from '../../util'
import { getPathWithoutHash } from '../../util/route'

// 子组件
import RouterAlive from '../RouterAlive'

// 功能模块混入
import contextmenu from './contextmenu'
import i18n from './i18n'
import iframe from './iframe'
import pageLeave from './pageLeave'
import rule from './rule'
import scroll from './scroll'

// RouterTab 组件
export default {
  name: 'RouterTab',
  components: { RouterAlive },
  mixins: [ contextmenu, i18n, iframe, pageLeave, rule, scroll ],
  props: {
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
      default: 'router-tab-zoom'
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
      isRouterAlive: true
    }
  },

  watch: {
    // 路由切换更新激活的页签
    $route ($route) {
      this.loading = false
      this.updateActivedTab()
      this.fixCommentPage()
    }
  },

  beforeCreate () {
    // 添加到原型链
    Vue.prototype.$routerTab = this

    // 获取跟路径
    let matched = this.$route.matched
    this.basePath = (matched[matched.length - 2] || {}).path
  },

  created () {
    this.getTabItems()
    this.updateActivedTab()
  },

  methods: {
    // 根据初始页签数据生成页签列表
    getTabItems () {
      let { tabs, $router } = this
      let ids = {}

      this.items = tabs.map((item, index) => {
        let { to, closable, title, tips } = typeof item === 'string'
          ? { to: item }
          : (item || emptyObj)
        let route = to && $router.match(to)

        if (route) {
          let tab = this.getRouteTab(route)
          let id = tab.id

          // 根据id去重
          if (!ids[id]) {
            // 初始 tab 数据
            if (title) tab.title = title
            if (tips) tab.tips = tips
            tab.closable = closable !== false

            return (ids[id] = tab)
          }
        }
      }).filter(item => !!item)
    },

    // 更新激活的页签
    updateActivedTab () {
      this.activedTab = this.getAliveId()
    },

    // 更新tab数据
    updateTab (key, { route, tab }) {
      let { items } = this
      let matchIdx = items.findIndex(({ id }) => id === key)

      let item = Object.assign(this.getRouteTab(route), tab)

      if (matchIdx > -1) {
        let matchTab = items[matchIdx]
        item.closable = matchTab.closable !== false
        this.$set(items, matchIdx, item)
      } else {
        items.push(item)
      }
    },

    // 从路由地址获取 aliveId
    getIdByLocation (location, fullMatch = true) {
      if (!location) return

      let $route = this.$router.match(location, this.$router.currentRoute)

      // 路由地址精确匹配页签
      if (fullMatch) {
        let matchPath = getPathWithoutHash($route)
        let matchTab = this.items.find(({ to }) => to.split('#')[0] === matchPath)

        if (matchTab) {
          return matchTab.id
        }
      } else {
        return this.getAliveId($route)
      }
    },

    // 从route中获取tab数据
    getRouteTab (route) {
      let id = this.getAliveId(route)
      let { fullPath: to, meta } = route
      let { title, icon, tips } = meta

      return { id, to, title, icon, tips }
    },

    // 移除tab项
    async removeTab (id) {
      let { items } = this
      let $alive = this.$refs.routerAlive
      const idx = items.findIndex(item => item.id === id)

      if (items.length === 1) {
        throw new Error(this.lang.msg.keepOneTab)
      }

      try {
        await this.pageLeavePromise(id, 'close')

        // 承诺关闭后移除页签和缓存
        $alive.remove(id)
        idx > -1 && items.splice(idx, 1)
      } catch (e) {}
    },

    // 通过路由地址关闭页签
    close (location, fullMatch = true) {
      if (location) {
        let id = this.getIdByLocation(location, fullMatch)
        if (id) {
          this.closeTab(id)
        }
      } else {
        this.closeTab()
      }
    },

    // 通过页签id关闭页签
    async closeTab (id = this.activedTab) {
      let { activedTab, items, $router } = this
      const idx = items.findIndex(item => item.id === id)

      try {
        await this.removeTab(id)

        // 如果关闭当前页签，则打开后一个页签
        if (activedTab === id) {
          let nextTab = items[idx] || items[idx - 1]
          $router.replace(nextTab.to)
        }
      } catch (e) {
        console.warn(e)
      }
    },

    // 通过路由地址刷新页签
    refresh (location, fullMatch = true) {
      if (location) {
        let id = this.getIdByLocation(location, fullMatch)
        if (id) {
          this.refreshTab(id)
        }
      } else {
        this.refreshTab()
      }
    },

    // 刷新指定页签
    async refreshTab (id = this.activedTab) {
      try {
        await this.pageLeavePromise(id, 'refresh')
        this.$refs.routerAlive.clear(id)
        if (id === this.activedTab) this.reloadRouter()
      } catch (e) {}
    },

    /**
     * 刷新所有页签
     * @param {boolean} [force=false] 是否强制刷新，如果强制则忽略页面beforePageLeave
     */
    async refreshAll (force = false) {
      const $alive = this.$refs.routerAlive
      const { cache } = $alive
      for (const id in cache) {
        if (!force) {
          try {
            await this.pageLeavePromise(id, 'refresh')
            $alive.clear(id)
          } catch (e) {}
        } else {
          $alive.clear(id)
        }
      }
      this.reloadRouter()
    },

    // 重载路由组件
    async reloadRouter (ignoreTransition = false) {
      this.isRouterAlive = false

      // 默认在页面过渡结束后会设置 isRouterAlive 为 true
      // 如果过渡事件失效，则需传入 ignoreTransition 为 true 手动更改
      if (ignoreTransition) {
        await this.$nextTick()
        this.isRouterAlive = true
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

    // 修复：当快速频繁切换页签时，旧页面离开过渡效果尚未完成，新页面内容无法正常mount，内容节点为comment类型
    fixCommentPage () {
      if (this.$refs.routerAlive.$el.nodeType === 8) {
        this.reloadRouter(true)
      }
    }
  }
}
