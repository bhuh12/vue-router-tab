import { describe, it, expect, afterEach } from 'vitest'
import { h, nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { createRouter, createMemoryHistory } from 'vue-router'
import RouterTab from '../components/RouterTab.vue'
import { useRouterTab, clearAllRouterTab } from '../composables/useRouterTab'

afterEach(() => clearAllRouterTab())

function makeApp() {
  const router = createRouter({
    history: createMemoryHistory(),
    routes: [
      {
        path: '/',
        component: { render: () => h('div', 'home') },
        meta: { routerTab: { title: '首页', keepAlive: true } }
      },
      {
        path: '/user/:id',
        component: { render: () => h('div', 'user') },
        meta: {
          routerTab: { keepAlive: true, key: (r: any) => `/user/${r.params.id}`, title: '用户' }
        }
      }
    ]
  })
  const wrapper = mount(RouterTab, { props: { keepAlive: true }, global: { plugins: [router] } })
  return { router, wrapper }
}
const go = async (router: any, p: string) => {
  await router.push(p)
  await nextTick()
  await nextTick()
}

describe('RouterTab 骨架', () => {
  it('访问路由后 items 增补对应 tab', async () => {
    const { router } = makeApp()
    await go(router, '/user/1')
    const $tabs = useRouterTab()
    expect($tabs.items.some((t) => t.id === '/user/1')).toBe(true)
    expect($tabs.activeTabId).toBe('/user/1')
  })

  it('切换路由更新 activeTab，不重复登记同 key', async () => {
    const { router } = makeApp()
    await go(router, '/user/1')
    await go(router, '/')
    await go(router, '/user/1')
    const $tabs = useRouterTab()
    const count = $tabs.items.filter((t) => t.id === '/user/1').length
    expect(count).toBe(1)
    expect($tabs.activeTabId).toBe('/user/1')
  })

  it('打开第二 tab 后回到首 tab，首 tab.closable 为 true（静态可关性，keepLastTab 动态判定由 TabItem 负责）', async () => {
    const { router } = makeApp()
    await go(router, '/')
    await go(router, '/user/1')
    await go(router, '/')
    const $tabs = useRouterTab()
    const first = $tabs.items.find((t) => t.id === '/')
    // Task 3 修正：closable 只存 meta.closable !== false（静态）；仅剩1个不可关的动态判定移到 TabItem
    expect(first!.closable).toBe(true)
  })

  it('activeTab 反映当前 tab 的 meta.title', async () => {
    const { router } = makeApp()
    await go(router, '/')
    expect(useRouterTab().activeTab?.title).toBe('首页')
  })
})
