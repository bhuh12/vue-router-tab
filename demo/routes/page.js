import { importPage } from '../utils'

// 页面路由
export default () => [{
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
}, {
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
}]
