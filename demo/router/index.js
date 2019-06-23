import Vue from 'vue'
import Router from 'vue-router'
import { RouterTabRoutes } from '../../src'
import pageRoutes, { route404 } from './page'
import { importPage, importLayout } from '../utils'

Vue.use(Router)

// 根据 layout 组件名生成标准路由
function getStandardRoutes (comps) {
  return comps.map(comp => {
    // 路径由 'CompName' 转换为 'comp-name'
    const path = '/' + comp.replace(/([A-Z])/g, function (val, $1, index, str) {
      let lower = $1.toLowerCase()
      return index ? '-' + lower : lower
    }) + '/'

    return {
      path,
      component: importLayout(comp),
      redirect: path + 'page/1',
      children: pageRoutes
    }
  })
}

// 标准路由
const standardRoutes = getStandardRoutes([
  'Default',
  'Transition',
  'InitialTabs',
  'LangEn',
  'LangCustom',
  'Slot'
])

// Vue Router 实例
const $router = new Router({
  routes: [{
    path: '/',
    redirect: '/default/page/1'
  },
  ...standardRoutes,
  {
    path: '/default/:did/dd/:iid',
    component: importLayout('Default'),
    redirect: '/default/2/dd/gg/nest/67/page/1',
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
    path: '/global-rule/',
    component: importLayout('GlobalRule'),
    redirect: '/global-rule/rule/a/1',
    children: pageRoutes
  },

  // 根路由 404
  Object.assign({}, route404, {
    path: '/404'
  }),

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
