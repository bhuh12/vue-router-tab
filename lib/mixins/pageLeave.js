import { emptyObj } from '../util'

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
    // 页面离开Promise
    pageLeavePromise(id, type) {
      return new Promise((resolve, reject) => {
        let tab = this.items.find(item => item.id === id) // 当前页签
        let { vm } = this.$alive.cache[id] || emptyObj // 缓存数据
        let beforePageLeave =
          vm && vm.$vnode.componentOptions.Ctor.options.beforePageLeave

        if (typeof beforePageLeave === 'function') {
          // 页签关闭前
          beforePageLeave.bind(vm)(resolve, reject, tab, type)
        } else {
          resolve()
        }
      })
    }
  }
}

// 路由导航守卫
export const leaveGuard = router => (to, from, next) => {
  const { $routerTab: tab } = router.app

  if (!tab) {
    next()
    return
  }

  const fromId = tab.activeTabId
  const toId = tab.getRouteKey(to)
  const { $alive } = tab
  const { alivePath } = ($alive && $alive.cache[toId]) || emptyObj
  const matched = tab.matchRoute(to)

  let id, type

  if (alivePath && alivePath !== matched.alivePath) {
    // 页签地址被替换：to 存在缓存但缓存路由不一致
    type = 'replace'
    id = toId
  } else if ($alive.basePath !== matched.basePath) {
    // 离开页签组件：to 不在当前页签组件路由下
    type = 'leave'
    id = fromId
  }

  if (type) {
    tab
      .pageLeavePromise(id, type)
      .then(() => next())
      .catch(() => next(false))
  } else {
    next()
  }
}
