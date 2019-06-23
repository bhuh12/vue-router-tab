import { RouterTabRoutes } from '../../src'
import { importPage } from '../utils'

// 404 路由
export const route404 = {
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
    aliveId (route, pagePath) {
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

// 嵌套路由
const nestRoute = {
  path: 'nest/:nestId/',
  component: importPage('Nest'),
  meta: {
    title: '嵌套路由',
    icon: 'rt-icon-doc'
  },
  children: [{
    path: 'page1',
    component: importPage('Page1')
  }, {
    path: 'page2',
    component: importPage('Page2')
  }]
}

// 插入嵌套路由
pageRoutes.unshift(nestRoute)

// 页面路由
export default pageRoutes
