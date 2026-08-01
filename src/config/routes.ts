import type { RouteRecordRaw } from 'vue-router'
import Iframe from '../page/Iframe.vue'

/** iframe 页面路由元 */
export const iframeMeta = {
  routerTab: {
    key: (route: any) => `iframe-${route.params.src}`,
    title: (route: any) => route.params.title,
    icon: (route: any) => route.params.icon
  }
}

/** 注入到 RouterTab 下的路由（iframe 页签） */
const RouterTabRoutes: RouteRecordRaw[] = [
  {
    path: 'iframe/:src/:title?/:icon?',
    component: Iframe,
    props: true,
    meta: iframeMeta
  }
]

export default RouterTabRoutes
export { Iframe }
