import type { RouteLocationNormalized } from 'vue-router'

/** 内置 key 规则：规则名 → 从当前路由取值的函数 */
export const rules: Record<string, (route: RouteLocationNormalized) => string> = {
  /** 取路由 path */
  path: (route) => route.path,

  /** 取路由 fullPath */
  fullpath: (route) => route.fullPath
}
