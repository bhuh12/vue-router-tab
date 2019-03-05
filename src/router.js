import Vue from 'vue'
import Router from 'vue-router'

const importPage = view => () => import(/* webpackChunkName: "p-[request]" */ `./views/${view}.vue`)

const importLayout = view => () => import(/* webpackChunkName: "ly-[request]" */ `./components/layout/${view}.vue`)

Vue.use(Router)

// 路由页面
let pageRoutes = [{
  path: 'page/:id',
  component: importPage('Page'),
  meta: {
    title: '页面',
    icon: 'rt-icon-doc'
  }
}, {
  path: 'tab-operate',
  component: importPage('TabOperate'),
  meta: {
    title: '页签操作',
    icon: 'rt-icon-doc'
  }
}, {
  path: 'tab-dynamic',
  component: importPage('TabDynamic'),
  meta: {
    title: '动态页签',
    icon: 'rt-icon-log'
  }
}, {
  path: 'page-leave',
  component: importPage('PageLeave'),
  meta: {
    title: '页面离开提示',
    icon: 'rt-icon-contact'
  }
}]

export default new Router({
  routes: [{
    path: '/',
    redirect: '/default/page/1'
  }, {
    path: '/default/',
    component: importLayout('Default'),
    redirect: '/default/page/1',
    children: pageRoutes
  }, {
    path: '/initial-tabs/',
    component: importLayout('InitialTabs'),
    redirect: '/initial-tabs/page/1',
    children: pageRoutes
  }, {
    path: '/language/',
    component: importLayout('Language'),
    redirect: '/language/page/1',
    children: pageRoutes
  }, {
    path: '/language/custom/',
    component: importLayout('LanguageCustom'),
    redirect: '/language/custom/page/1',
    children: pageRoutes
  }, {
    path: '/slot/',
    component: importLayout('Slot'),
    redirect: '/slot/page/1',
    children: pageRoutes
  }]
})
