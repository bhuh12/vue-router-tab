import { emptyObj } from '../util'

// 路由导航守卫
export const leaveGuard = router => (to, from, next) => {
  const { $tabs } = router.app

  if (!$tabs) {
    next()
    return
  }

  const toId = $tabs.getRouteKey(to)
  const { $alive } = $tabs
  const { alivePath } = ($alive && $alive.cache[toId]) || emptyObj
  const matched = $tabs.matchRoute(to)

  let id, type

  if (alivePath && alivePath !== matched.alivePath) {
    // 页签地址被替换：to 存在缓存但缓存路由不一致
    type = 'replace'
    id = toId
  } else if ($alive.basePath !== matched.basePath) {
    // 离开页签组件：to 不在当前页签组件路由下
    type = 'leave'
    id = $tabs.activeTabId
  }

  if (type) {
    $tabs
      .leavePage(id, type)
      .then(next)
      .catch(() => next(false))
  } else {
    next()
  }
}

// 页面离开
export default {
  created() {
    const { $router } = this

    if ($router._RouterTabInit) return

    // 初始化路由导航守卫
    $router.beforeEach(leaveGuard($router))
    $router._RouterTabInit = true
  },

  methods: {
    // 页面离开 Promise
    async leavePage(id, type) {
      let tab = this.items.find(item => item.id === id) // 当前页签
      let { vm } = this.$alive.cache[id] || emptyObj // 缓存数据
      let pageLeave =
        vm && vm.$vnode.componentOptions.Ctor.options.beforePageLeave

      if (typeof pageLeave === 'function') {
        // 页签关闭前
        return pageLeave.bind(vm)(tab, type)
      }
    }
  }
}
