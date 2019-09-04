// 路由页面混入
export default {
  // 创建前记录缓存
  created () {
    const { $route, $vnode } = this
    const $alive = $vnode && $vnode.data.routerAlive

    if (!$alive) return false

    // 标记为路由页面
    this._isRouterPage = true

    const key = $alive.getAliveId($route)

    // 更新缓存数据
    let cacheItem = $alive.set(key, {
      route: $route,
      vm: this
    })

    // 监听routerTab字段，更新页签信息
    this.$watch('routeTab', function (val, old) {
      cacheItem.tab = typeof val === 'string' ? { title: val } : val
      $alive.set(key, cacheItem)
    }, {
      deep: true,
      immediate: true
    })
  },

  // 销毁后清理数据
  destroyed () {
    if (this._isRouterPage) {
      this.$vnode.data.routerAlive = null
    }
  }
}
