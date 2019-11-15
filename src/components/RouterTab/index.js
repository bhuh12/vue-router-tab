import Vue from 'vue'

// 方法
import { emptyObj } from '../../util'

// 功能模块混入
import contextmenu from './contextmenu'
import i18n from './i18n'
import iframe from './iframe'
import operate from './operate'
import pageLeave from './pageLeave'
import rule from './rule'
import scroll from './scroll'
import restore from './restore'

// RouterTab 组件
export default {
  name: 'RouterTab',
  mixins: [ contextmenu, i18n, iframe, operate, pageLeave, rule, scroll, restore ],
  props: {
    // 初始页签数据
    tabs: {
      type: Array,
      default: () => []
    },

    // 页面刷新后是否恢复页签
    restore: {
      type: [ Boolean, String ],
      default: false
    },

    // 是否保留最后一个页签不被关闭
    keepLastTab: {
      type: Boolean,
      default: true
    },

    // 默认页面
    defaultPage: [ String, Object ],

    /**
     * 组件语言
     * - 为字符串时，可以设置为内置的语言 'zh-CN' (默认) 和 'en'
     * - 为对象时，可设置自定义的语言
     */
    language: {
      type: [ String, Object ],
      default: 'zh-CN'
    },

    // 页签国际化配置 i18n (key, [args])
    i18n: Function,

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
      loading: false, // 路由页面 loading
      items: [], // 页签项
      activedTab: null, // 当前激活的页签
      isViewAlive: true,
      isMounted: false // 是否挂载
    }
  },

  computed: {
    // 默认路径
    defaultPath () {
      return this.defaultPage || this.getBasePath()
    },

    // routerAlive
    $alive () {
      return this.isMounted ? this.$refs.routerAlive : null
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

  created () {
    // 添加到原型链
    Vue.prototype.$routerTab = this

    this.initTabs()
    this.updateActivedTab()
  },

  mounted () {
    this.isMounted = true
  },

  destroyed () {
    // 取消原型挂载
    if (Vue.prototype.$routerTab === this) {
      Vue.prototype.$routerTab = null
    }
  },

  methods: {
    // 初始页签数据
    initTabs () {
      if (this.restoreTabs()) return

      this.presetTabs()
    },

    // 预设页签
    presetTabs () {
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

          // 根据 id 去重
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

    // 更新 tab 数据
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
    getIdByPath (path, match = true) {
      if (!path) return

      let route = this.$router.match(path, this.$router.currentRoute)

      // 路由地址精确匹配页签
      if (match) {
        let matchPath = this.getPathWithoutHash(route)
        let matchTab = this.items.find(({ to }) => to.split('#')[0] === matchPath)

        if (matchTab) {
          return matchTab.id
        }
      } else {
        return this.getAliveId(route)
      }
    },

    // 从 route 中获取 tab 数据
    getRouteTab (route, matchRoutes = this.matchRoutes(route)) {
      let id = this.getAliveId(route)
      let { title, icon, tips } = matchRoutes.pageRoute.meta

      return { id, to: route.fullPath, title, icon, tips }
    },

    // 解析过渡配置
    getTransOpt (trans) {
      return typeof trans === 'string' ? { name: trans } : trans
    },

    // 重载路由视图
    async reloadView (ignoreTransition = false) {
      this.isViewAlive = false

      // 默认在页面过渡结束后会设置 isViewAlive 为 true
      // 如果过渡事件失效，则需传入 ignoreTransition 为 true 手动更改
      if (ignoreTransition) {
        await this.$nextTick()
        this.isViewAlive = true
      }
    },

    // 页签过渡结束
    onTabTransitionEnd () {
      this.adjust()
    },

    // 页面过渡结束
    onPageTransitionEnd () {
      if (!this.isViewAlive) this.isViewAlive = true
    },

    // 修复：当快速频繁切换页签时，旧页面离开过渡效果尚未完成，新页面内容无法正常 mount，内容节点为 comment 类型
    fixCommentPage () {
      if (this.$alive.$el.nodeType === 8) {
        this.reloadView(true)
      }
    }
  }
}
