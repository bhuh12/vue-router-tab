import Vue from 'vue'
import Router from 'vue-router'

import frameRoutes from './routes/frames'
import route404 from './routes/404'

Vue.use(Router)

// 全局 404 路由
const globalRoute404 = Object.assign({}, route404, {
  path: '/404'
})

// Vue Router 实例
const $router = new Router({
  routes: [{
    path: '/',
    redirect: '/default/page/1'
  },

  // 框架子路由
  ...frameRoutes,

  // 根路由 404
  globalRoute404,

  // 未匹配的路由 404
  {
    path: '*',
    redirect (to) {
      const match = /^(\/[^/]+\/)/.exec(to.path)

      if (match) {
        const base = match[1]
        const matchParent = $router.options.routes.find(item => item.path === base)

        // 子路由 404
        if (matchParent) return base + '404'
      }

      // 根路由 404
      return '/404'
    }
  }]
})

export default $router
