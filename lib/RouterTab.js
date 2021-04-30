// 方法
import { emptyObj, prunePath, getTransOpt } from './util'

// 功能模块混入
import contextmenu from './mixins/contextmenu'
import i18n from './mixins/i18n'
import iframe from './mixins/iframe'
import operate from './mixins/operate'
import pageLeave from './mixins/pageLeave'
import scroll from './mixins/scroll'
import restore from './mixins/restore'

// 子组件
import RouterAlive from './components/RouterAlive.vue'
import TabItem from './components/TabItem'
import TabScroll from './components/TabScroll.vue'
import TabContextmenu from './components/Contextmenu.vue'

// RouterTab 组件
// @vue/component
const RouterTab = {
  name: 'RouterTab',
  components: { RouterAlive, TabItem, TabScroll, TabContextmenu },
  mixins: [contextmenu, i18n, iframe, operate, pageLeave, scroll, restore],

  // 注入子组件
  provide() {
    return { $tabs: this }
  },

  props: {
    // 初始页签数据
    tabs: {
      type: Array,
      default: () => []
    },

    // 页面刷新后是否恢复页签
    restore: {
      type: [Boolean, String],
      default: false
    },

    // 是否监听 restoreKey 变化自动还原页签
    restoreWatch: {
      type: Boolean,
      default: false
    },

    // 页面滚动元素选择器
    pageScroller: {
      type: String,
      default: '.router-tab__container'
    },

    // 默认页面
    defaultPage: [String, Object],

    // 页签过渡效果
    tabTransition: {
      type: [String, Object],
      default: 'router-tab-zoom'
    },

    // 页面过渡效果
    pageTransition: {
      type: [String, Object],
      default: () => ({
        name: 'router-tab-swap',
        mode: 'out-in'
      })
    },

    /**
     * 自定义右键菜单
     * 1. 为 false 时禁用
     * 2. 为数组时可自定义右键菜单
     */
    contextmenu: {
      type: [Boolean, Array],
      default: true
    },

    // 是否支持页签拖拽排序
    dragsort: {
      type: Boolean,
      default: true
    },

    // 新页签插入位置，last 末尾，next 下一个
    append: {
      type: String,
      default: 'last'
    },

    // 是否保留最后一个页签不被关闭
    keepLastTab: {
      type: Boolean,
      default: true
    },

    // 默认是否缓存，可通过路由 meta.keepAlive 重置
    keepAlive: {
      type: Boolean,
      default: true
    },

    // 最大缓存数，0 则不限制
    maxAlive: {
      type: Number,
      default: 0
    },

    // 是否复用路由组件，可通过路由 meta.reuse 重置
    reuse: {
      type: Boolean,
      default: false
    },

    // 页签国际化配置 i18n (key, [args])
    i18n: Function,

    /**
     * 组件语言
     * - 为字符串时，可选值： 'zh'-中文，'en'-英文
     * - 为对象时，可设置自定义的语言
     * - 默认值：'auto'。根据浏览器语言自动识别组件语言。
     */
    lang: {
      type: [String, Object],
      default: 'auto'
    }
  },

  data() {
    return {
      items: [], // 页签项
      onDragSort: false, // 拖拽排序中
      aliveReady: false // RouterAlive 初始化
    }
  },

  computed: {
    // routerAlive
    $alive() {
      return this.aliveReady ? this.$refs.routerAlive : null
    },

    // 当前激活的页签 id
    activeTabId() {
      return this.$alive ? this.$alive.key : null
    },

    // 当前激活的页签索引
    activeTabIndex() {
      return this.items.findIndex(item => item.id === this.activeTabId)
    },

    // 当前激活的页签
    activeTab() {
      return this.items[this.activeTabIndex]
    },

    // 根路径
    basePath() {
      return this.$alive ? this.$alive.basePath : '/'
    },

    // 默认路径
    defaultPath() {
      return this.defaultPage || this.basePath || '/'
    },

    // 页签过渡
    tabTrans() {
      return getTransOpt(this.tabTransition)
    },

    // 页面过渡
    pageTrans() {
      return getTransOpt(this.pageTransition)
    }
  },

  created() {
    // 添加到原型链
    RouterTab.Vue.prototype.$tabs = this
  },

  destroyed() {
    const proto = RouterTab.Vue.prototype
    // 取消原型挂载
    if (proto.$tabs === this) {
      proto.$tabs = null
    }
  },

  methods: {
    // RouterAlive 组件就绪
    onAliveReady($alive) {
      // 获取 keepAlive 组件实例
      this.$refs.routerAlive = $alive
      this.aliveReady = true
      this.initTabs()
    },

    // 初始页签数据
    initTabs() {
      if (this.restoreTabs()) return

      this.presetTabs()
    },

    // 预设页签
    presetTabs(tabs = this.tabs) {
      let ids = {}

      this.items = tabs
        .map(item => {
          item = typeof item === 'string' ? { to: item } : item || emptyObj

          const matched = item.to && this.matchRoute(item.to)

          if (matched) {
            const tab = this.getRouteTab(matched)
            const id = tab.id

            // 根据 id 去重
            if (!ids[id]) {
              // id 不允许更改
              delete item.id

              // 初始 tab 数据
              return (ids[id] = Object.assign(tab, item))
            }
          }
        })
        .filter(item => !!item)
    },

    // RouterAlive 缓存更新时同步更改页签
    onAliveChange(type, matched) {
      const { items, lastMatchedKey } = this
      const { key } = matched
      const matchIdx = items.findIndex(({ id }) => id === key)
      const item = this.getRouteTab(matched)

      // 页签已存在
      if (matchIdx > -1) {
        if (
          type === 'create' || // 创建缓存
          (type === 'update' && items[matchIdx].to !== matched.$route.fullPath) // 更新缓存且地址更改
        ) {
          // 替换原页签
          this.$set(items, matchIdx, item)
        }
      } else {
        // 新增页签
        if (this.append === 'next' && lastMatchedKey !== undefined) {
          const lastIndex = this.items.findIndex(
            item => item.id === lastMatchedKey
          )
          items.splice(lastIndex + 1, 0, item)
        } else {
          items.push(item)
        }
      }

      // 上次缓存 key
      this.lastMatchedKey = key
    },

    // 从 route 中获取 tab 配置
    getRouteTab({ key, $route, meta }) {
      const tab = { ...meta }

      // 支持根据路由函数返回的页签属性
      const props = ['title', 'tips', 'icon', 'closable']

      for (let i in tab) {
        if (props.includes(i)) {
          const val = tab[i]
          if (typeof val === 'function') {
            tab[i] = val($route)
          }
        }
      }

      return Object.assign(tab, {
        id: key,
        to: $route.fullPath
      })
    },

    // 重载路由视图
    async reload() {
      this.$alive.reload()
    },

    // 匹配路由信息
    matchRoute($route) {
      return this.$alive.matchRoute($route)
    },

    // 获取路由缓存 key
    getRouteKey(route = this.$route) {
      return this.matchRoute(route).key
    },

    // 从路由地址匹配页签 id
    getIdByPath(path, match = true) {
      if (!path) return

      const matched = this.matchRoute(path)
      const { key } = matched

      if (match) {
        // 路由地址精确匹配页签
        const matchTab = this.items.find(
          ({ to }) => prunePath(to) === prunePath(matched.$route.fullPath)
        )

        if (matchTab) {
          return key
        }
      }

      return key
    }
  }
}

export default RouterTab
