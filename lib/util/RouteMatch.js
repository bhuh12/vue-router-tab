import { prunePath } from './'
import rules from '../config/rules'

// 解析路由 key
function parseRouteKey($route, route, key) {
  const defaultKey = route.path

  if (!key) return defaultKey

  if (typeof key === 'string') {
    // 规则
    const rule = rules[key.toLowerCase()]
    return rule ? rule($route) : key
  }

  if (typeof key === 'function') {
    return parseRouteKey($route, route, key($route))
  }

  return defaultKey
}

// 解析匹配的路径
function parsePath(path, params) {
  return Object.entries(params).reduce((p, [key, val]) => {
    return p.replace(':' + key, val)
  }, path)
}

// 匹配路由数据
export default class RouteMatch {
  constructor(vm, $route) {
    this.vm = vm
    this.$route = $route
  }

  // 设置路由
  set $route($route) {
    if ($route && !$route.matched) {
      const { $router } = this.vm
      $route = $router.match($route, $router.currentRoute)
    }
    this._$route = $route
  }

  // 获取路由
  get $route() {
    return this._$route || this.vm.$route
  }

  // 页面路由索引
  get routeIndex() {
    return this.vm.routeIndex
  }

  // 下级路由
  get route() {
    return this.$route.matched[this.routeIndex]
  }

  // 根路径
  get basePath() {
    if (this.routeIndex < 1) return '/'

    const baseRoute = this.$route.matched[this.routeIndex - 1] || {}
    const { path } = baseRoute

    return (path && parsePath(path, this.$route.params)) || '/'
  }

  // 缓存路径，用于判断是否复用
  get alivePath() {
    const { $route } = this
    // 嵌套路由
    if (this.nest) {
      return parsePath(this.route.path, $route.params)
    }

    return prunePath($route.fullPath)
  }

  // 路由元
  get meta() {
    const {
      route,
      vm: { $nuxt }
    } = this

    // Nuxt 优先从页面配置获取 meta
    if ($nuxt) {
      try {
        const { meta: metas = [] } = $nuxt.context.route
        const meta = metas[this.routeIndex]
        if (meta && Object.keys(meta).length) {
          return meta
        }
      } catch (e) {
        console.error(e)
      }
    }

    return (route && route.meta) || {}
  }

  // 是否嵌套路由
  get nest() {
    return this.$route.matched.length > this.routeIndex + 1
  }

  // 路由 key
  get key() {
    if (!this.route) return ''

    return parseRouteKey(this.$route, this.route, this.meta.key)
  }

  // 是否缓存
  get alive() {
    const { keepAlive } = this.meta
    return typeof keepAlive === 'boolean' ? keepAlive : this.vm.keepAlive
  }

  // 是否复用组件
  get reusable() {
    const { reuse } = this.meta
    return typeof reuse === 'boolean' ? reuse : this.vm.reuse
  }
}
