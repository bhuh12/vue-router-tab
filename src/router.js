import Vue from 'vue'
import Router from 'vue-router'

const importView = view => () => import(/* webpackChunkName: "v-[request]" */ `./views/${view}.vue`)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: importView('Home'),
      redirect: '/page/1',
      children: [{
        path: '/page/:id',
        component: importView('Page')
      }]
    }
  ]
})
