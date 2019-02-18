// 空对象和数组
export const emptyObj = Object.create(null)
export const emptyArray = []

function isDef (v) {
  return v !== undefined && v !== null
}

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (let i = 0; i < children.length; i++) {
      const c = children[i]
      if (
        isDef(c) &&
        (isDef(c.componentOptions) || isAsyncPlaceholder(c))
      ) {
        return c
      }
    }
  }
}

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

// 获取路由不带hash的路径
const getPathWithoutHash = route => route.hash
  ? route.fullPath.replace(route.hash, '')
  : route.fullPath

// 是否相似路由
export const isAlikeRoute = function isAlikeRoute (route1, route2) {
  return getPathWithoutHash(route1) === getPathWithoutHash(route2)
}

// 获取路由页面组件
const getRouteComponent = ({ matched }) => matched[matched.length - 1].components.default

// 路由是否共用组件
function isSameComponentRoute (route1, route2) {
  return getRouteComponent(route1) === getRouteComponent(route2)
}

export default {
  name: 'router-alive',
  props: {
    // 缓存key，如果为函数，则参数为route
    aliveKey: {
      type: [ String, Function ],
      default: 'path'
    }
  },

  beforeCreate () {
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
        const key = this.getAliveKey()
        const cacheItem = cache[key]
        const { vm: cacheVm, route: cacheRoute } = cacheItem || emptyObj

        // 是否需要重载路由强制刷新页面组件
        let needReloadRouter = false

        // 路由是否改变
        let isRouteChange = lastRoute !== $route

        // 是否跟上次路由共用组件
        let isSameComponent = isRouteChange && isSameComponentRoute($route, lastRoute)

        if (isRouteChange) {
          // 更新上次路由
          this.lastRoute = $route

          // 添加缓存
          if (!cacheItem) this.set(key, { route: $route })
        }

        if (cacheVm) {
          // 缓存组件的路由地址除hash外一致则取缓存的组件
          if (isAlikeRoute(cacheRoute, $route)) {
            pageNode.componentInstance = cacheVm
          } else {
            // 缓存组件路由地址不匹配则销毁缓存并重载路由
            cacheVm.$destroy()
            cacheItem.vm = null
            needReloadRouter = true
          }
        }

        // 路由改变后但组件相同需重载路由
        if (isSameComponent) needReloadRouter = true

        // 重载路由以强制更新页面
        needReloadRouter && this.$routerTab.reloadRouter()

        // 标记为keepAlive和routerAlive
        pageNode.data.keepAlive = true
        pageNode.data.routerAlive = this
      }
    }

    return vnode || (slot && slot[0])
  },

  methods: {
    // 获取缓存key
    getAliveKey (route = this.$route) {
      let aliveKey = (route.meta && route.meta.aliveKey) || this.aliveKey || 'path'
      if (typeof aliveKey === 'function') {
        return aliveKey.bind(this)(route)
      }
      return route[aliveKey]
    },

    // 设置缓存项
    set (key, item) {
      const { cache } = this

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
