import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { defineComponent, h, nextTick, KeepAlive } from 'vue'
import { mount } from '@vue/test-utils'
import { useRouterPage } from '../composables/useRouterPage'
import { setRouterTab, clearAllRouterTab } from '../composables/useRouterTab'
import type { RouterTabInternal } from '../types'

/** 造一个最小 $tabs 实例并注册为默认实例，pageScroller 为 frame 级配置 */
function installTabs(pageScroller?: string) {
  const instance = {
    activeTabId: '/a',
    activeTab: { id: '/a', to: '/a' },
    items: [{ id: '/a', to: '/a' }],
    pages: new Map(),
    pageScroller
  } as unknown as RouterTabInternal
  setRouterTab(instance)
  return instance
}

/**
 * 挂载一个页面组件，其 setup 内调用 useRouterPage。
 * 页面根元素含若干可滚动子节点，通过 selector 匹配。
 * 返回 wrapper、暴露的 restoreScroll，以及 activate/deactivate 触发器。
 */
function mountPage(opts: {
  pageScroller?: string | string[]
  innerHtml?: string
  onSetup?: (api: { restoreScroll: () => void }) => void
}) {
  let api!: { restoreScroll: () => void }
  const Page = defineComponent({
    name: 'Page',
    setup() {
      api = useRouterPage({ pageScroller: opts.pageScroller })
      opts.onSetup?.(api)
      return () => h('div', { class: 'router-alive-page', innerHTML: opts.innerHtml ?? '' })
    }
  })
  // 用 KeepAlive 包裹以支持 activated/deactivated（通过切换 which 触发）
  const toggle = { value: true }
  const Host = defineComponent({
    setup() {
      return () =>
        h(KeepAlive, null, {
          default: () => (toggle.value ? h(Page) : h('div', 'other'))
        })
    }
  })
  const wrapper = mount(Host)
  const el = () => wrapper.find('.router-alive-page').element as HTMLElement
  return {
    wrapper,
    get api() {
      return api
    },
    el,
    async deactivate() {
      toggle.value = false
      wrapper.vm.$forceUpdate()
      await nextTick()
      await nextTick()
    },
    async activate() {
      toggle.value = true
      wrapper.vm.$forceUpdate()
      await nextTick()
      await nextTick()
    }
  }
}

beforeEach(() => clearAllRouterTab())
afterEach(() => clearAllRouterTab())

describe('useRouterPage 滚动位置记忆', () => {
  it('页面级单容器：失活保存、激活还原', async () => {
    installTabs()
    const p = mountPage({
      pageScroller: '.scroll-box',
      innerHtml: '<div class="scroll-box" style="height:100px;overflow:auto"></div>'
    })
    await nextTick()
    const box = p.el().querySelector('.scroll-box') as HTMLElement
    box.scrollTop = 120
    box.scrollLeft = 30
    await p.deactivate()
    // 失活后模拟被其它逻辑改动
    box.scrollTop = 0
    box.scrollLeft = 0
    await p.activate()
    expect(box.scrollTop).toBe(120)
    expect(box.scrollLeft).toBe(30)
  })

  it('多容器（逗号分隔）：分别保存还原', async () => {
    installTabs()
    const p = mountPage({
      pageScroller: '.a, .b',
      innerHtml: '<div class="a"></div><div class="b"></div>'
    })
    await nextTick()
    const a = p.el().querySelector('.a') as HTMLElement
    const b = p.el().querySelector('.b') as HTMLElement
    a.scrollTop = 10
    b.scrollTop = 20
    await p.deactivate()
    a.scrollTop = 0
    b.scrollTop = 0
    await p.activate()
    expect(a.scrollTop).toBe(10)
    expect(b.scrollTop).toBe(20)
  })

  it('多容器（数组）：分别保存还原', async () => {
    installTabs()
    const p = mountPage({
      pageScroller: ['.a', '.b'],
      innerHtml: '<div class="a"></div><div class="b"></div>'
    })
    await nextTick()
    const a = p.el().querySelector('.a') as HTMLElement
    const b = p.el().querySelector('.b') as HTMLElement
    a.scrollTop = 5
    b.scrollTop = 6
    await p.deactivate()
    a.scrollTop = 0
    b.scrollTop = 0
    await p.activate()
    expect(a.scrollTop).toBe(5)
    expect(b.scrollTop).toBe(6)
  })

  it('$ 前缀查 document（组件外部选择器）', async () => {
    installTabs()
    const ext = document.createElement('div')
    ext.id = 'ext-scroll'
    document.body.appendChild(ext)
    const p = mountPage({ pageScroller: '$#ext-scroll' })
    await nextTick()
    ext.scrollTop = 88
    await p.deactivate()
    ext.scrollTop = 0
    await p.activate()
    expect(ext.scrollTop).toBe(88)
    document.body.removeChild(ext)
  })

  it('frame 级 pageScroller（$tabs.pageScroller，自动当外部选择器）生效', async () => {
    installTabs('#frame-scroll')
    const frame = document.createElement('div')
    frame.id = 'frame-scroll'
    document.body.appendChild(frame)
    const p = mountPage({})
    await nextTick()
    frame.scrollTop = 77
    await p.deactivate()
    frame.scrollTop = 0
    await p.activate()
    expect(frame.scrollTop).toBe(77)
    document.body.removeChild(frame)
  })

  it('restoreScroll() 异步还原（页面加载完数据后自行调用）', async () => {
    installTabs()
    const p = mountPage({
      pageScroller: '.scroll-box',
      innerHtml: '<div class="scroll-box"></div>'
    })
    await nextTick()
    const box = p.el().querySelector('.scroll-box') as HTMLElement
    box.scrollTop = 200
    await p.deactivate()
    await p.activate()
    // 激活已还原，模拟异步数据渲染重置了滚动
    box.scrollTop = 0
    await p.api.restoreScroll()
    await nextTick()
    expect(box.scrollTop).toBe(200)
  })

  it('onMounted 重置 frame 级容器到顶部（新页面从顶部开始）', async () => {
    installTabs('#frame-scroll')
    const frame = document.createElement('div')
    frame.id = 'frame-scroll'
    frame.scrollTop = 500
    document.body.appendChild(frame)
    mountPage({})
    await nextTick()
    expect(frame.scrollTop).toBe(0)
    document.body.removeChild(frame)
  })
})
