// 页签规则
export default {
  // 地址，例如："/page/1?type=a#title" 则取 "/page/1"
  path (route) {
    return route.path
  },

  // 完整地址 (忽略hash)，例如："/page/1?type=a#title" 则取 "/page/1?type=a"
  fullpath (route) {
    return route.fullPath.replace(route.hash, '')
  }
}
