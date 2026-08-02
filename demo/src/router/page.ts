import type { RouteRecordRaw } from 'vue-router'

/** 拼接子路径（去掉当前 path 尾斜杠，避免出现 //） */
function sub(to: { path: string }, p: string): string {
  return to.path.replace(/\/$/, '') + p
}

/** frame 公共子路由集（对照 v1 router/page.js，meta 聚合到 routerTab） */
export default function getPageRoutes(): RouteRecordRaw[] {
  return [
    {
      path: 'page/:id',
      component: () => import('../views/Page.vue'),
      meta: {
        routerTab: { title: (r: any) => `页面${r.params.id}`, icon: 'rt-icon-doc', key: 'path' }
      }
    },

    { path: 'no-cache', redirect: (to) => sub(to, '/1') },

    {
      path: 'no-cache/:id',
      component: () => import('../views/Page.vue'),
      meta: {
        routerTab: {
          title: (r: any) => `无缓存页面${r.params.id}`,
          icon: 'rt-icon-doc',
          key: 'path',
          keepAlive: false
        }
      }
    },

    { path: 'rule', redirect: (to) => sub(to, '/default/a/1') },

    { path: 'rule/default', redirect: (to) => sub(to, '/a/1') },

    {
      path: 'rule/default/:catalog/:type',
      component: () => import('../views/Rule.vue'),
      meta: {
        routerTab: {
          title: (r: any) => `规则:默认-${r.params.catalog}/${r.params.type}`,
          icon: 'rt-icon-log'
        }
      }
    },

    { path: 'rule/path', redirect: (to) => sub(to, '/a/1') },

    {
      path: 'rule/path/:catalog/:type',
      component: () => import('../views/Rule.vue'),
      meta: {
        routerTab: {
          title: (r: any) => `规则:path-${r.params.catalog}/${r.params.type}`,
          icon: 'rt-icon-log',
          key: 'path'
        }
      }
    },

    { path: 'rule/fullPath', redirect: (to) => sub(to, '/a/1') },

    {
      path: 'rule/fullPath/:catalog/:type',
      component: () => import('../views/Rule.vue'),
      meta: {
        routerTab: {
          title: (r: any) => `规则:fullPath-${r.params.catalog}/${r.params.type}`,
          icon: 'rt-icon-log',
          key: 'fullPath'
        }
      }
    },

    { path: 'rule/custom', redirect: (to) => sub(to, '/a/1') },

    {
      path: 'rule/custom/:catalog/:type',
      component: () => import('../views/Rule.vue'),
      meta: {
        routerTab: {
          title: (r: any) => `规则:自定义-${r.params.catalog}/${r.params.type}`,
          icon: 'rt-icon-log',
          key: (r: any) => '/rule/custom/' + r.params.catalog
        }
      }
    },

    {
      path: 'tab-dynamic',
      component: () => import('../views/TabDynamic.vue'),
      meta: { routerTab: { title: '动态页签', icon: 'rt-icon-log' } }
    },

    {
      path: 'page-leave',
      component: () => import('../views/PageLeave.vue'),
      meta: { routerTab: { title: '页面离开确认', icon: 'rt-icon-contact' } }
    },

    {
      path: 'nest/:nestId',
      component: () => import('../views/Nest.vue'),
      redirect: (to) => sub(to, '/page1'),
      meta: { routerTab: { title: '嵌套路由', icon: 'rt-icon-doc' } },
      children: [
        { path: 'page1', component: () => import('../views/Page1.vue') },
        { path: 'page2', component: () => import('../views/Page2.vue') }
      ]
    }
  ]
}
