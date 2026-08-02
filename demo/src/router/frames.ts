import type { RouteRecordRaw } from 'vue-router'

import getPageRoutes from './page'
import { extendFrame } from './routeExtend'

/** PascalCase 转 kebab-case */
function pascal2Kebab(str: string): string {
  return str
    .replace(/([a-z])([A-Z])/g, (_, a, b) => a + '-' + b.toLowerCase())
    .replace(/^([A-Z])/, (_, a) => a.toLowerCase())
}

/**
 * 需自定义 redirect/children 的 frame
 * 注意：这里的 redirect 是**相对片段**（不含 frame 前缀），由下方 `path + (redirect || 'page/1')` 拼成绝对路径
 */
const frameRoutes: Record<string, { redirect?: string; children?: RouteRecordRaw[] }> = {
  Reuse: { redirect: 'rule/default/' },

  Iframe: {
    redirect: 'operate',
    children: [
      {
        path: 'operate',
        component: () => import('../views/IframeOperate.vue'),
        meta: { routerTab: { title: 'Iframe 页签' } }
      }
    ]
  },

  I18n: {
    redirect: 'lang',
    children: [
      {
        path: 'lang',
        component: () => import('../views/I18nPage.vue'),
        meta: { routerTab: { title: 'i18n:i18n', icon: 'rt-icon-doc' } }
      },
      {
        path: 'page/:id',
        component: () => import('../views/Page.vue'),
        meta: { routerTab: { title: 'i18n:page', icon: 'rt-icon-doc' } }
      }
    ]
  },

  PageScroller: {
    redirect: 'page/1',
    children: [
      {
        path: 'page/:id',
        component: () => import('../views/Page.vue'),
        meta: {
          routerTab: {
            title: (r: any) => `页面外部滚动${r.params.id}`,
            icon: 'rt-icon-doc',
            key: 'path'
          }
        }
      },
      {
        path: 'scroll-position',
        component: () => import('../views/ScrollPosition.vue'),
        meta: { routerTab: { title: '页面内部滚动', icon: 'rt-icon-doc' } }
      },
      {
        path: 'scroll-multi',
        component: () => import('../views/ScrollMulti.vue'),
        meta: { routerTab: { title: '多个滚动', icon: 'rt-icon-doc' } }
      },
      {
        path: 'scroll-async',
        component: () => import('../views/ScrollAsync.vue'),
        meta: { routerTab: { title: '异步滚动', icon: 'rt-icon-doc' } }
      }
    ]
  }
}

/** 扫描 frames/ 目录（Vite 等价 require.context） */
const modules = import.meta.glob('../frames/*.vue', { eager: true }) as Record<
  string,
  { default: any }
>

const routes: RouteRecordRaw[] = Object.entries(modules).map(([filePath, mod]) => {
  const frame = filePath.match(/(\w+)\.vue$/)![1]
  const path = '/' + pascal2Kebab(frame) + '/'
  const { redirect, children } = frameRoutes[frame] || {}

  return {
    path,
    component: mod.default,
    // path 前缀必须拼在外面（对齐 v1 frames.js:104）：redirect 写相对路径会被解析到根，
    // 如 /reuse/ + 'rule/default/' 会跳到 /rule/default/ 而非 /reuse/rule/default/
    redirect: path + (redirect || 'page/1'),
    children: children || getPageRoutes()
  }
})

routes.forEach(extendFrame)

export default routes
