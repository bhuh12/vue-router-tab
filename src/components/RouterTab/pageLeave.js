import { emptyObj } from '../../util'

// 页面离开
export default {
  created () {
    this.$router.beforeEach(this.routerPageLeaveGuard)
  },

  methods: {
    // 页面离开导航守卫
    routerPageLeaveGuard (to, from, next) {
      if (this._isDestroyed) {
        let hooks = this.$router.beforeHooks
        let idx = hooks.indexOf(this.routerPageLeaveGuard)

        // 移除已销毁的 RouterTab 实例注册的导航守卫
        if (idx > -1) hooks.splice(idx, 1)

        next()
      } else {
        const id = this.getAliveId(to)
        const { $alive } = this
        const { route: cacheRoute } = ($alive && $alive.cache[id]) || emptyObj

        // 如果不是相同路由则检查 beforePageLeave
        if (cacheRoute && !this.isAlikeRoute(to, cacheRoute)) {
          this.pageLeavePromise(id, 'replace')
            .then(() => next())
            .catch(() => next(false))
        } else {
          next()
        }
      }
    },

    // 页面离开Promise
    pageLeavePromise (id, type) {
      return new Promise((resolve, reject) => {
        let tab = this.items.find(item => item.id === id) // 当前页签
        let { vm } = this.$alive.cache[id] || emptyObj // 缓存数据
        let beforePageLeave = vm && vm.$vnode.componentOptions.Ctor.options.beforePageLeave

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
