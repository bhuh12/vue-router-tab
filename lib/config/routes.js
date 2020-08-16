import Iframe, { iframeMeta } from '../page/Iframe.vue'

// 注入的路由
export default [
  {
    // iframe 路由
    path: 'iframe/:src/:title?/:icon?',
    component: Iframe,
    props: true,
    meta: iframeMeta
  }
]

export { Iframe }
