import { warn } from '../../util/warn'

// 匹配路由链
export default {
  methods: {
    // 匹配路由
    matchRoutes(route = this.$route) {
      const { matched } = route

      // 页面所在路由 index
      let pageRouteIdx = matched.findIndex(
        ({ instances }) =>
          !instances.default || // instances 为空
          Object.values(instances).find(vm => vm && vm._isRouterPage) // mounted 时 instances 会包含路由页面实例
      )

      warn(pageRouteIdx > -1, '未能匹配到路由信息')

      return {
        baseRoute: matched[pageRouteIdx - 1], // 跟路由
        pageRoute: matched[pageRouteIdx], // 页面路由
        pageRouteIdx,
        isNest: pageRouteIdx !== matched.length - 1 // 是否嵌套路由
      }
    },

    // 解析匹配的路径
    parsePath(path, params) {
      for (const key in params) {
        path = path.replace(':' + key, params[key])
      }

      return path
    },

    // 获取 vnode 构造 id
    getCtorIdByNode(node) {
      let { componentOptions: opts } = node
      return opts ? opts.Ctor.cid : null
    },

    // 获取跟路径
    getBasePath() {
      let { path } = this.matchRoutes().baseRoute
      let { params } = this.$route

      return path && this.parsePath(path, params)
    },

    // 获取嵌套路由的页面路径
    getPagePath(route = this.$route, matchRoutes = this.matchRoutes(route)) {
      let { pageRoute, isNest } = matchRoutes

      // 页面嵌套路由
      if (isNest) {
        return this.parsePath(pageRoute.path, route.params)
      }
    },

    // 获取嵌套路由的页面组件
    getPageComp(route = this.$route) {
      let { pageRoute } = this.matchRoutes(route)
      return pageRoute ? pageRoute.components.default : null
    },

    // 获取路由不带hash的路径
    getPathWithoutHash(route) {
      return route.hash
        ? route.fullPath.replace(route.hash, '')
        : route.fullPath
    },

    // 是否相似路由
    isAlikeRoute(route1, route2) {
      const route1Path = this.getPagePath(route1)
      const route2Path = this.getPagePath(route2)

      return (
        this.getPathWithoutHash(route1) === this.getPathWithoutHash(route2) ||
        (route1Path && route2Path && route1Path === route2Path)
      )
    },

    // 是否嵌套路由
    isNestRoute(route, matchRoutes = this.matchRoutes(route)) {
      return matchRoutes.isNest
    }
  }
}
