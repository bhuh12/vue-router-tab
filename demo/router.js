import Vue from 'vue'
import Router from 'vue-router'
import { RouterTabRoutes } from '../src'

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
  path: 'rule/:catalog/:type',
  component: importPage('Rule'),
  meta: {
    title: '默认规则',
    icon: 'rt-icon-log'
  }
}, {
  path: 'route-rule/:catalog/:type',
  component: importPage('Rule'),
  meta: {
    title: '路由规则',
    icon: 'rt-icon-log',
    aliveId (route) {
      return `route-rule/${route.params.catalog}`
    }
  }
}, {
  path: 'tab-dynamic',
  component: importPage('TabDynamic'),
  meta: {
    title: '动态更新页签',
    icon: 'rt-icon-log'
  }
}, {
  path: 'page-leave',
  component: importPage('PageLeave'),
  meta: {
    title: '页面离开确认',
    icon: 'rt-icon-contact'
  }
}, ...RouterTabRoutes]

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
    path: '/transition/',
    component: importLayout('Transition'),
    redirect: '/transition/page/1',
    children: pageRoutes
  }, {
    path: '/initial-tabs/',
    component: importLayout('InitialTabs'),
    redirect: '/initial-tabs/page/1',
    children: pageRoutes
  }, {
    path: '/lang-en/',
    component: importLayout('LangEn'),
    redirect: '/lang-en/page/1',
    children: pageRoutes
  }, {
    path: '/lang-custom/',
    component: importLayout('LangCustom'),
    redirect: '/lang-custom/page/1',
    children: pageRoutes
  }, {
    path: '/slot/',
    component: importLayout('Slot'),
    redirect: '/slot/page/1',
    children: pageRoutes
  }, {
    path: '/global-rule/',
    component: importLayout('GlobalRule'),
    redirect: '/global-rule/rule/a/1',
    children: pageRoutes
  }, {
    path: '/404',
    component: importPage('404'),
    meta: {
      title: '找不到页面',
      icon: 'rt-icon-warning'
    }
  }, {
    path: '*',
    redirect: '/404'
  }]
})
