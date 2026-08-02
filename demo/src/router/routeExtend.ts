import type { RouteRecordRaw } from 'vue-router'

import { RouterTabRoutes } from 'vue-router-tab'

/** 子路由 404（meta.routerTab 格式） */
const route404: RouteRecordRaw = {
  path: '404',
  component: () => import('../views/NotFound.vue'),
  meta: { routerTab: { title: '找不到页面', icon: 'rt-icon-warning' } }
}

/** 给 frame 路由追加 404 与 iframe 内置路由 */
export function extendFrame(route: RouteRecordRaw): void {
  route.children = route.children || []
  route.children.push(route404, ...RouterTabRoutes)
}
