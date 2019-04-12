// 获取路由不带hash的路径
export function getPathWithoutHash (route) {
  return route.hash
    ? route.fullPath.replace(route.hash, '')
    : route.fullPath
}

// 是否相似路由
export function isAlikeRoute (route1, route2) {
  return getPathWithoutHash(route1) === getPathWithoutHash(route2)
}

// 获取路由页面组件
export function getRouteComponent ({ matched }) {
  return matched[matched.length - 1].components.default
}

// 路由是否共用组件
export function isSameComponentRoute (route1, route2) {
  return getRouteComponent(route1) === getRouteComponent(route2)
}
