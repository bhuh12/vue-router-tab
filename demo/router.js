import Vue from 'vue'
import Router from 'vue-router'
import { RouterTabRoutes } from '../src'

const importPage = view => () => import(/* webpackChunkName: "p-[request]" */ `./views/${view}.vue`)

const importLayout = view => () => import(/* webpackChunkName: "ly-[request]" */ `./components/layout/${view}.vue`)

Vue.use(Router)

// 404 路由
const route404 = {
  path: '404',
  component: importPage('404'),
  meta: {
    title: '找不到页面',
    icon: 'rt-icon-warning'
  }
}

// 页面路由
const pageRoutes = [{
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
}, route404, ...RouterTabRoutes]

// Vue Router 实例
const $router = new Router({
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
    path: '/i18n/',
    component: importLayout('I18n'),
    redirect: '/i18n/lang',
    children: [{
      path: 'lang',
      component: importPage('I18n'),
      meta: {
        title: 'i18n:i18n',
        icon: 'rt-icon-doc'
      }
    }, {
      path: 'page/:id',
      component: importPage('Page'),
      meta: {
        title: 'i18n:page',
        icon: 'rt-icon-doc'
      }
    }, route404, ...RouterTabRoutes]
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
  }, Object.assign({}, route404, {
    path: '/404'
  }), {
    path: '*',
    redirect (to) {
      const match = /^(\/[^/]+\/)/.exec(to.path)

      if (match) {
        const base = match[1]
        const matchParent = $router.options.routes.find(item => item.path === base)

        // 跳转子路由 404
        if (matchParent) {
          return base + '404'
        }
      }

      // 全局 404
      return '/404'
    }
  }]
})

export default $router
