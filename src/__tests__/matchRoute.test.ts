import { describe, it, expect } from 'vitest'
import { createRouter, createMemoryHistory } from 'vue-router'
import { matchRoute } from '../composables/useRouteMatch'

function resolve(routes: any[], path: string) {
  const router = createRouter({ history: createMemoryHistory(), routes })
  return router.resolve(path)
}

const routes = [
  { path: '/', component: { render: () => null }, meta: { routerTab: { keepAlive: true } } },
  {
    path: '/user/:id',
    component: { render: () => null },
    meta: { routerTab: { keepAlive: true, key: (r: any) => `/user/${r.params.id}` } }
  },
  {
    path: '/list',
    component: { render: () => null },
    meta: { routerTab: { keepAlive: true } },
    children: [
      { path: ':tab', component: { render: () => null }, meta: { routerTab: { keepAlive: true } } }
    ]
  }
]

describe('matchRoute 纯函数', () => {
  it('顶层 key 用 meta.key 函数、basePath 为 /、alive 被 meta 覆盖', () => {
    const m = matchRoute(resolve(routes, '/user/1') as any, { keepAlive: false, reuse: false })
    expect(m.key).toBe('/user/1')
    expect(m.alive).toBe(true)
    expect(m.basePath).toBe('/')
    expect(m.nest).toBe(false)
    expect(m.alivePath).toBe('/user/1')
  })

  it('入参默认值在 meta 未指定时生效', () => {
    const r: any = resolve(routes, '/user/2')
    r.matched = [{ ...r.matched[0], meta: {} }]
    const m = matchRoute(r, { keepAlive: true, reuse: false })
    expect(m.alive).toBe(true)
  })

  it('嵌套路由 nest=true，子层 basePath 为父段填参路径', () => {
    const r = resolve(routes, '/list/a')
    expect(matchRoute(r as any, { keepAlive: false, reuse: false, routeIndex: 0 }).nest).toBe(true)
    expect(matchRoute(r as any, { keepAlive: false, reuse: false, routeIndex: 1 }).basePath).toBe(
      '/list'
    )
  })

  it('alivePath 去掉 hash 保留 query（对齐 v1，query 变化即页签地址被替换）', () => {
    const m = matchRoute(resolve(routes, '/user/1?x=1#h') as any, {
      keepAlive: false,
      reuse: false
    })
    expect(m.alivePath).toBe('/user/1?x=1')
  })
})
