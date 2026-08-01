import { describe, it, expect, vi } from 'vitest'
import { createRouter, createMemoryHistory } from 'vue-router'
import { useTabs } from '../composables/useTabs'
import { useState } from '../composables/useState'
import { matchRoute } from '../composables/useRouteMatch'
import { withSetup } from './helpers'

const routes = [
  {
    path: '/',
    component: { render: () => null },
    meta: { routerTab: { title: '首页', keepAlive: true } }
  },
  {
    path: '/user/:id',
    component: { render: () => null },
    meta: {
      routerTab: {
        keepAlive: true,
        key: (r: any) => `/user/${r.params.id}`,
        title: (r: any) => `用户${r.params.id}`,
        closable: (r: any) => r.params.id !== '0'
      }
    }
  }
]

function makeTabs(options: any = {}) {
  const router = createRouter({ history: createMemoryHistory(), routes })
  const evict = vi.fn()
  const leavePage = vi.fn().mockResolvedValue(undefined)
  const state = useState()
  // $alive 提供 evict + routeMatch（useTabs 内部经 state.$alive 消费）
  state.$alive = { evict, routeMatch: { routeIndex: 0, alive: true, reusable: false } } as any
  const pageLeave = { leavePage } as any
  const { result: tabs } = withSetup(
    () =>
      useTabs(
        state,
        { keepLastTab: true, append: 'last', ...options } as any,
        { langs: { msg: { keepLastTab: '至少应保留1个页签' } } } as any,
        pageLeave
      ),
    router
  )
  return { tabs, state, router, evict, leavePage }
}

describe('useTabs 底层原语', () => {
  it('getRouteTab 解析 meta 函数字段', () => {
    const { tabs, router } = makeTabs()
    const r = router.resolve('/user/1')
    const info = matchRoute(r as any, { keepAlive: true, reuse: false })
    const tab = tabs.getRouteTab(info, r as any)
    expect(tab.id).toBe('/user/1')
    expect(tab.to).toBe('/user/1')
    expect(tab.title).toBe('用户1')
    expect(tab.closable).toBe(true)
  })

  it('getRouteTab: meta.closable 函数返回 false 时不可关', () => {
    const { tabs, router } = makeTabs()
    const r = router.resolve('/user/0')
    const info = matchRoute(r as any, { keepAlive: true, reuse: false })
    expect(tabs.getRouteTab(info, r as any).closable).toBe(false)
  })

  it('getIdByPath 按 path 反查 id', () => {
    const { tabs } = makeTabs()
    expect(tabs.getIdByPath('/user/5')).toBe('/user/5')
  })

  it('presetTabs 生成初始页签、按 id 去重', () => {
    const { tabs, state } = makeTabs()
    tabs.presetTabs(['/user/1', '/user/1', '/'])
    expect(state.items.map((t: any) => t.id)).toEqual(['/user/1', '/'])
  })

  it('removeTab 调 alive.evict 并移除 items', async () => {
    const { tabs, state, evict } = makeTabs()
    state.items = [
      { id: '/user/1', to: '/user/1' },
      { id: '/user/2', to: '/user/2' }
    ]
    await tabs.removeTab('/user/1')
    expect(evict).toHaveBeenCalledWith('/user/1')
    expect(state.items.map((t: any) => t.id)).toEqual(['/user/2'])
  })

  it('keepLastTab: 仅剩 1 个时 removeTab 抛错', async () => {
    const { tabs, state } = makeTabs()
    state.items = [{ id: '/user/1', to: '/user/1' }]
    await expect(tabs.removeTab('/user/1')).rejects.toThrow('至少应保留1个页签')
  })

  it('keepLastTab: force=true 可关最后一个', async () => {
    const { tabs, state, evict } = makeTabs()
    state.items = [{ id: '/user/1', to: '/user/1' }]
    await tabs.removeTab('/user/1', true)
    expect(evict).toHaveBeenCalledWith('/user/1')
    expect(state.items).toEqual([])
  })

  it('syncFromAlive: closable 只存 meta.closable!==false（首个 tab 也可关）', () => {
    const { tabs, state, router } = makeTabs()
    const r = router.resolve('/user/1')
    const match = matchRoute(r as any, { keepAlive: true, reuse: false })
    tabs.syncFromAlive('create', match as any, r as any)
    expect(state.items[0].closable).toBe(true)
  })
})
