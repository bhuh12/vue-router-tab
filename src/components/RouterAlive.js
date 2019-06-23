import { emptyObj } from '../util'
import { getFirstComponentChild } from '../util/dom'

import rule from './RouterTab/rule'

export default {
  name: 'RouterAlive',
  mixins: [ rule ],

  created () {
    Object.assign(this, {
      cache: Object.create(null),
      lastRoute: this.$route
    })
  },

  render () {
    const slot = this.$slots.default
    const vnode = getFirstComponentChild(slot)
    const vmOpts = vnode && vnode.componentOptions

    if (vmOpts) {
      const { cache, $route, lastRoute } = this

      // 如果是transition组件，页面组件则为子元素
      const pageNode = vmOpts.tag === 'transition' ? vmOpts.children[0] : vnode

      if (pageNode && pageNode.componentOptions) {
        // 获取缓存
        const key = this.getAliveId()
        const cacheItem = cache[key]
        const { vm: cacheVm, route: cacheRoute } = cacheItem || emptyObj

        // 是否需要重载路由强制刷新页面组件
        let needReloadView = false

        // 路由是否改变
        let isRouteChange = lastRoute !== $route

        // 是否跟上次路由共用组件
        let isShareComp = isRouteChange &&
          !this.isAlikeRoute($route, lastRoute) &&
          this.getPageComp($route) === this.getPageComp(lastRoute)

        if (isRouteChange) {
          // 更新上次路由
          this.lastRoute = $route

          // 添加缓存
          this.set(key, { route: $route })
        }

        if (cacheVm) {
          // 缓存组件的路由地址匹配则取缓存的组件
          if (this.isAlikeRoute(cacheRoute, $route)) {
            pageNode.componentInstance = cacheVm
          } else {
            // 缓存组件路由地址不匹配则销毁缓存并重载路由
            cacheVm.$destroy()
            cacheItem.vm = null
            needReloadView = true
          }
        }

        // 共用组件的路由切换需重载路由
        if (isShareComp) needReloadView = true

        // 重载路由以强制更新页面
        needReloadView && this.$routerTab.reloadView()

        // 标记为 keepAlive和 routerAlive
        pageNode.data.keepAlive = true
        pageNode.data.routerAlive = this
      }
    }

    return vnode || (slot && slot[0])
  },

  methods: {
    // 设置缓存项
    set (key, item) {
      const { cache } = this
      const origin = cache[key]

      if (origin) {
        item = Object.assign(origin, item)
      }

      this.$emit('update', key, item)

      // 更新缓存数据
      return (cache[key] = item)
    },

    // 删除缓存项
    remove (key) {
      const { cache } = this
      const item = cache[key]

      // 销毁组件实例
      if (item) {
        item.vm && item.vm.$destroy()
        item.vm = null
        delete cache[key]
      }

      this.$emit('remove', [ key ])
    },

    // 清理缓存
    clear (key) {
      const item = this.cache[key]
      const vm = item && item.vm
      if (vm) {
        vm.$destroy()
        item.vm = null
      }
    }
  }
}
