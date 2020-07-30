import { importPage } from '../utils'

// 页面路由
export default () => [
  {
    path: 'page/:id',
    component: importPage('Page'),
    meta: {
      title: route => `页面${route.params.id}`,
      icon: 'rt-icon-doc',
      key: 'path'
    }
  },
  {
    path: 'no-cache',
    redirect: 'no-cache/1'
  },
  {
    path: 'no-cache/:id',
    component: importPage('Page'),
    meta: {
      title: route => `无缓存页面${route.params.id}`,
      keepAlive: false,
      icon: 'rt-icon-doc',
      key: 'path'
    }
  },
  {
    path: 'rule',
    redirect: 'rule/default/a/1'
  },
  {
    path: 'rule/default',
    redirect: 'rule/default/a/1'
  },
  {
    path: 'rule/default/:catalog/:type',
    component: importPage('Rule'),
    meta: {
      title: route => `规则:默认-${route.params.catalog}/${route.params.type}`,
      icon: 'rt-icon-log'
    }
  },
  {
    path: 'rule/path',
    redirect: 'rule/path/a/1'
  },
  {
    path: 'rule/path/:catalog/:type',
    component: importPage('Rule'),
    meta: {
      title: route => `规则:path-${route.params.catalog}/${route.params.type}`,
      icon: 'rt-icon-log',
      key: 'path'
    }
  },
  {
    path: 'rule/fullPath',
    redirect: 'rule/fullPath/a/1'
  },
  {
    path: 'rule/fullPath/:catalog/:type',
    component: importPage('Rule'),
    meta: {
      title: route =>
        `规则:fullPath-${route.params.catalog}/${route.params.type}`,
      icon: 'rt-icon-log',
      key: 'fullPath'
    }
  },
  {
    path: 'rule/custom',
    redirect: 'rule/custom/a/1'
  },
  {
    path: 'rule/custom/:catalog/:type',
    component: importPage('Rule'),
    meta: {
      title: route =>
        `规则:自定义-${route.params.catalog}/${route.params.type}`,
      icon: 'rt-icon-log',
      key: route => '/rule/custom/' + route.params.catalog
    }
  },
  {
    path: 'tab-dynamic',
    component: importPage('TabDynamic'),
    meta: {
      title: '动态页签',
      icon: 'rt-icon-log'
    }
  },
  {
    path: 'page-leave',
    component: importPage('PageLeave'),
    meta: {
      title: '页面离开确认',
      icon: 'rt-icon-contact'
    }
  },
  {
    path: 'nest/:nestId',
    component: importPage('Nest'),
    redirect(route) {
      return route.fullPath + '/page1'
    },
    meta: {
      title: '嵌套路由',
      icon: 'rt-icon-doc'
    },
    children: [
      {
        path: 'page1',
        component: importPage('Page1')
      },
      {
        path: 'page2',
        component: importPage('Page2')
      }
    ]
  }
]
