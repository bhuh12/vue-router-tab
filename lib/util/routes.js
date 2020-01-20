import Iframe from '../page/Iframe.vue'

// 注入的路由
export default [{
  // iframe 路由
  path: 'iframe/:src/:title?/:icon?',
  component: Iframe,
  props: true,
  meta: {
    aliveId: route => `iframe-${route.params.src}`
  }
}]
