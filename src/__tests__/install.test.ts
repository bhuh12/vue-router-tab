import { describe, it, expect, afterEach } from 'vitest'
import { createApp, h } from 'vue'
import { mount } from '@vue/test-utils'
import { createRouter, createMemoryHistory } from 'vue-router'
import RouterTab, { RouterAlive, useRouteMatch, useTabs, useRouterTab } from '../index'
import { setRouterTab, clearRouterTab, clearAllRouterTab } from '../composables/useRouterTab'

describe('插件 install', () => {
  it('app.use 后全局注册 RouterTab 与 RouterAlive', () => {
    const app = createApp({ render: () => h('div') })
    app.use(RouterTab)
    expect(app.component('RouterTab')).toBeTruthy()
    expect(app.component('RouterAlive')).toBeTruthy()
  })

  it('具名导出可用', () => {
    expect(RouterAlive).toBeTruthy()
    expect(useRouteMatch).toBeTypeOf('function')
    expect(useTabs).toBeTypeOf('function')
    expect(useRouterTab).toBeTypeOf('function')
  })
})

describe('useRouterTab 单例', () => {
  // 确保每条用例后清空所有实例，隔离跨测试污染
  afterEach(() => clearAllRouterTab())

  it('未挂载 RouterTab 时 useRouterTab 抛错', () => {
    expect(() => useRouterTab()).toThrow()
  })

  it('挂载 RouterTab 后 useRouterTab 返回实例', async () => {
    const router = createRouter({
      history: createMemoryHistory(),
      routes: [{ path: '/', component: { render: () => h('div') } }]
    })
    await router.push('/')
    const wrapper = mount(RouterTab, { global: { plugins: [router] } })
    expect(() => useRouterTab()).not.toThrow()
    expect(useRouterTab().items).toBeDefined()
    wrapper.unmount()
  })

  it('A 卸载后不清空 B 的单例（多实例场景）', () => {
    const instanceA = {
      items: null as any,
      activeTabId: null as any,
      activeTab: null as any,
      $alive: null as any
    }
    const instanceB = {
      items: null as any,
      activeTabId: null as any,
      activeTab: null as any,
      $alive: null as any
    }
    setRouterTab(instanceA as any)
    setRouterTab(instanceB as any) // B 后挂载，覆盖 A
    clearRouterTab(instanceA as any) // A 卸载，不应清掉 B
    expect(useRouterTab()).toBe(instanceB)
  })
})
