import { describe, it, expect, vi } from 'vitest'
import { createRouter, createMemoryHistory } from 'vue-router'
import { useOperate } from '../composables/useOperate'
import { useState } from '../composables/useState'
import { withSetup } from './helpers'

const routes = [
  { path: '/', component: { render: () => null } },
  { path: '/a', component: { render: () => null } },
  { path: '/b', component: { render: () => null } }
]

function makeOps(overrides: any = {}) {
  const router = createRouter({ history: createMemoryHistory(), routes })
  const aliveRefresh = vi.fn()
  const removeTab = vi.fn().mockResolvedValue(undefined)
  const state = useState()
  state.items = [
    { id: '/a', to: '/a' },
    { id: '/b', to: '/b' }
  ]
  state.activeTabId = '/a'
  state.$alive = { refresh: aliveRefresh, evict: vi.fn(), aliveKeys: ['/a', '/b'] } as any
  // tabs 原语 mock 贴近真实签名：真实 getRouteKey/getIdByPath 走 router.resolve(...).key，
  // 简单路由下 key === path，用 resolve 而非直接回传入参，避免掩盖真实反查行为
  const tabs = {
    getRouteKey: (r: any) => router.resolve(r).path,
    getIdByPath: (p: any) => router.resolve(p).path,
    removeTab
  } as any
  const pageLeave = { leavePage: vi.fn().mockResolvedValue(undefined) } as any
  const restore = { clearTabsStore: vi.fn() } as any
  const { result: ops } = withSetup(
    () =>
      useOperate(
        state,
        { defaultPath: '/', initTabs: vi.fn(), ...overrides },
        tabs,
        pageLeave,
        restore
      ),
    router
  )
  return { ops, router, aliveRefresh, removeTab, state }
}

describe('useOperate', () => {
  it('refreshTab 走 leavePage 后调 alive.refresh', async () => {
    const { ops, aliveRefresh } = makeOps()
    await ops.refreshTab('/a')
    expect(aliveRefresh).toHaveBeenCalledWith('/a')
  })

  it('refresh(path) 按 path 反查 id 再刷新', async () => {
    const { ops, aliveRefresh } = makeOps()
    ops.refresh('/b')
    await Promise.resolve()
    expect(aliveRefresh).toHaveBeenCalledWith('/b')
  })

  it('refreshAll 遍历 aliveKeys 逐个刷新', async () => {
    const { ops, aliveRefresh } = makeOps()
    await ops.refreshAll()
    expect(aliveRefresh).toHaveBeenCalledWith('/a')
    expect(aliveRefresh).toHaveBeenCalledWith('/b')
  })

  it('reload 刷新当前页签', async () => {
    const { ops, aliveRefresh } = makeOps()
    ops.reload()
    await Promise.resolve()
    expect(aliveRefresh).toHaveBeenCalledWith('/a')
  })

  it('closeTab 委托 close → removeTab', async () => {
    const { ops, removeTab } = makeOps()
    await ops.closeTab('/b')
    expect(removeTab).toHaveBeenCalledWith('/b', false)
  })

  it('close 无参默认关当前页签', async () => {
    const { ops, removeTab } = makeOps()
    await ops.close()
    expect(removeTab).toHaveBeenCalledWith('/a', true)
  })

  it('open 跳转路由', async () => {
    const { ops, router } = makeOps()
    await ops.open('/b', false, false)
    expect(router.currentRoute.value.path).toBe('/b')
  })

  it('open 对象式 { to } 跳转路由', async () => {
    const { ops, router } = makeOps()
    await ops.open({ to: '/b', refresh: false })
    expect(router.currentRoute.value.path).toBe('/b')
  })

  it('open 对象式 { replace } 走 replace 导航', async () => {
    const { ops, router } = makeOps()
    const spy = vi.spyOn(router, 'replace')
    await ops.open({ to: '/b', replace: true, refresh: false })
    expect(spy).toHaveBeenCalled()
    expect(router.currentRoute.value.path).toBe('/b')
  })

  it('open 对象式 { isSameTab } 同页签时刷新当前页', async () => {
    // activeTabId '/a'，to '/a' → isSameTab 命中 → reload 刷新当前页
    const { ops, aliveRefresh } = makeOps()
    await ops.open({ to: '/a', isSameTab: true })
    expect(aliveRefresh).toHaveBeenCalledWith('/a')
  })

  it('open 同页签判定用 key 全等，自定义 key 差尾斜杠不误判', async () => {
    // key 是缓存标识非路径：'user/' 与 'user' 是两个不同页签，
    // 曾用 equalPath 忽略尾斜杠会误判同页签并触发多余 reload 刷掉页面状态
    const router = createRouter({ history: createMemoryHistory(), routes })
    const aliveRefresh = vi.fn()
    const state = useState()
    state.items = [{ id: 'user/', to: '/a' }]
    state.activeTabId = 'user/'
    state.$alive = { refresh: aliveRefresh, evict: vi.fn(), aliveKeys: [] } as any
    const tabs = {
      // 目标路由的 key 为 'user'（与 activeTabId 'user/' 仅差尾斜杠）
      getRouteKey: () => 'user',
      getIdByPath: () => 'user',
      removeTab: vi.fn().mockResolvedValue(undefined)
    } as any
    const { result: ops } = withSetup(
      () =>
        useOperate(
          state,
          { defaultPath: '/', initTabs: vi.fn() },
          tabs,
          { leavePage: vi.fn().mockResolvedValue(undefined) } as any,
          { clearTabsStore: vi.fn() } as any
        ),
      router
    )

    await ops.open({ to: '/b', isSameTab: true })
    // 非同页签 → 不应 reload 当前页
    expect(aliveRefresh).not.toHaveBeenCalledWith('user/')
  })

  it('close 返回时路由已跳转完成（await 内部 open）', async () => {
    const router = createRouter({ history: createMemoryHistory(), routes })
    const state = useState()
    state.items = [
      { id: '/a', to: '/a' },
      { id: '/b', to: '/b' }
    ]
    state.activeTabId = '/a'
    state.$alive = { refresh: vi.fn(), evict: vi.fn(), aliveKeys: [] } as any
    const tabs = {
      getRouteKey: (r: any) => router.resolve(r).path,
      getIdByPath: (p: any) => router.resolve(p).path,
      // 真实移除，使 close 内取「后一个页签」的逻辑生效
      removeTab: vi.fn(async (id: string) => {
        const i = state.items.findIndex((t) => t.id === id)
        if (i > -1) state.items.splice(i, 1)
      })
    } as any
    const { result: ops } = withSetup(
      () =>
        useOperate(
          state,
          { defaultPath: '/', initTabs: vi.fn() },
          tabs,
          { leavePage: vi.fn().mockResolvedValue(undefined) } as any,
          { clearTabsStore: vi.fn() } as any
        ),
      router
    )

    await ops.close()
    // close 返回瞬间路由必须已是 /b，此前未 await open 需再等约 50ms 才生效
    expect(router.currentRoute.value.path).toBe('/b')
  })
})
