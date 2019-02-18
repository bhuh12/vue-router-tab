// 路由页面混入
export default {
  // 创建前记录缓存
  created () {
    const { $route, $vnode } = this
    const $alive = $vnode && $vnode.data.routerAlive

    if (!$alive) return false

    const key = $alive.getAliveKey($route)

    // 更新缓存数据
    let cacheItem = $alive.set(key, {
      route: $route,
      vm: this
    })

    // 监听routerTab字段，更新页签信息
    this.$watch('routerTab', function (val, old) {
      cacheItem.tab = typeof val === 'string' ? { title: val } : val
      $alive.set(key, cacheItem)
    }, {
      deep: true,
      immediate: true
    })
  },

  // 解决webpack热加载后组件缓存不更新
  async activated () {
    const { $routerTab, $vnode } = this

    if (!($vnode && $vnode.data.routerAlive)) return false

    let ctorId = $vnode.componentOptions.Ctor.cid

    // 热加载后Ctor.cid改变
    if (this._ctorId && this._ctorId !== ctorId) {
      this.$destroy()
      $routerTab.refresh()
    }

    this._ctorId = ctorId
  }
}
