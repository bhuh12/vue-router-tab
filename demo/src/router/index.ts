import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router'

import frameRoutes from './frames'

/** 全局 404 */
const globalRoute404: RouteRecordRaw = {
  path: '/404',
  component: () => import('../views/NotFound.vue'),
  meta: { routerTab: { title: '找不到页面', icon: 'rt-icon-warning' } }
}

const routes: RouteRecordRaw[] = [
  { path: '/', redirect: '/default/page/1' },
  ...frameRoutes,
  globalRoute404,
  {
    path: '/:pathMatch(.*)*',
    redirect: (to) => {
      const match = /^(\/[^/]+\/)/.exec(to.path)
      if (match) {
        const base = match[1]
        const hasParent = router.getRoutes().some((r) => r.path === base)
        // 子路由 404
        if (hasParent) return base + '404'
      }
      // 根路由 404
      return '/404'
    }
  }
]

const router = createRouter({ history: createWebHashHistory(), routes })

export default router
