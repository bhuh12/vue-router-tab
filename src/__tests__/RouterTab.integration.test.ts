import { describe, it, expect, afterEach } from 'vitest'
import { h, nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { createRouter, createMemoryHistory } from 'vue-router'
import RouterTab from '../components/RouterTab.vue'
import { useRouterTab, clearAllRouterTab } from '../composables/useRouterTab'

afterEach(() => clearAllRouterTab())

const go = async (router: any, p: string) => {
  await router.push(p)
  await nextTick()
  await nextTick()
}

function makeApp(props: any = {}) {
  const router = createRouter({
    history: createMemoryHistory(),
    routes: [
      {
        path: '/',
        component: { render: () => h('div', 'home') },
        meta: { routerTab: { title: '首页', keepAlive: true } }
      },
      {
        path: '/a',
        component: { render: () => h('div', 'a') },
        meta: { routerTab: { title: 'A', keepAlive: true } }
      },
      {
        path: '/b',
        component: { render: () => h('div', 'b') },
        meta: { routerTab: { title: 'B', keepAlive: true } }
      }
    ]
  })
  const wrapper = mount(RouterTab, {
    props: { keepAlive: true, ...props },
    global: { plugins: [router] }
  })
  return { router, wrapper }
}

describe('RouterTab 整合', () => {
  it('访问多路由增补 tab 并渲染 TabItem', async () => {
    const { router, wrapper } = makeApp()
    await go(router, '/a')
    await go(router, '/b')
    expect(wrapper.findAll('.router-tab__item').length).toBe(2)
  })

  it('close 关闭当前页签', async () => {
    const { router } = makeApp()
    await go(router, '/a')
    await go(router, '/b')
    const $tabs = useRouterTab()
    await $tabs.close()
    await nextTick()
    expect($tabs.items.some((t) => t.id === '/b')).toBe(false)
  })

  it('keepLastTab 保留最后一个', async () => {
    const { router } = makeApp({ keepLastTab: true })
    await go(router, '/a')
    const $tabs = useRouterTab()
    await $tabs.closeTab('/a').catch(() => {})
    await nextTick()
    expect($tabs.items.length).toBe(1)
  })

  it('暴露命令式 API 全集', () => {
    makeApp()
    const $tabs = useRouterTab() as any
    ;[
      'open',
      'close',
      'closeTab',
      'refresh',
      'refreshTab',
      'refreshAll',
      'reset',
      'reload'
    ].forEach((m) => expect(typeof $tabs[m]).toBe('function'))
  })

  it('keepLastTab 动态改动同步到 TabItem（props 响应性）', async () => {
    const { router, wrapper } = makeApp({ keepLastTab: true })
    await go(router, '/a')
    // 仅剩 1 个页签且 keepLastTab=true → 不可关闭
    expect(wrapper.find('.router-tab__item').classes()).not.toContain('is-closable')

    await wrapper.setProps({ keepLastTab: false })
    await nextTick()
    // 关掉 keepLastTab 后应立即可关闭（instance 需透传 prop 而非拷贝快照）
    expect(wrapper.find('.router-tab__item').classes()).toContain('is-closable')
  })

  it('dragsort 动态改动同步到 TabItem（props 响应性）', async () => {
    const { router, wrapper } = makeApp({ dragsort: true })
    await go(router, '/a')
    expect(wrapper.find('.router-tab__item').attributes('draggable')).toBe('true')

    await wrapper.setProps({ dragsort: false })
    await nextTick()
    expect(wrapper.find('.router-tab__item').attributes('draggable')).toBe('false')
  })

  it('暴露 adjust 主动重算页签滚动（缺口4）', () => {
    makeApp()
    const $tabs = useRouterTab()
    expect(typeof $tabs.adjust).toBe('function')
    // 可调用不抛错（debounce 包裹，实际滚动几何靠 demo 手验）
    expect(() => $tabs.adjust()).not.toThrow()
  })

  it(':contextmenu="false" 时右键页签不显示菜单', async () => {
    const { router, wrapper } = makeApp({ contextmenu: false })
    await go(router, '/a')
    // 触发 showContextmenu，菜单因 contextmenuEnabled=false 不应渲染
    useRouterTab().showContextmenu('/a', 0)
    await nextTick()
    expect(wrapper.find('.router-tab__contextmenu').exists()).toBe(false)
  })

  it('右键某 tab 后该 tab 高亮 is-contextmenu 且 contextData.id 正确', async () => {
    const { router, wrapper } = makeApp()
    await go(router, '/a')
    await go(router, '/b')
    const $tabs = useRouterTab()
    // contextData 为普通 reactive 对象（非 Ref），$tabs 契约与 TabItem 消费一致
    $tabs.showContextmenu('/a', 0)
    await nextTick()
    expect($tabs.contextData.id).toBe('/a')
    const tabA = wrapper.findAll('.router-tab__item').find((w) => w.text().includes('A'))
    expect(tabA?.classes()).toContain('is-contextmenu')
  })

  it('iframe 容器渲染时 emit iframe-mounted / iframe-loaded（缺口1）', async () => {
    const { wrapper } = makeApp()
    const url = 'https://example.com'
    // 直接向 iframes 数组注入 url，触发容器 <iframe> 渲染（等价 Iframe 页 onMounted）
    useRouterTab().iframes.push(url)
    await nextTick()

    // @vue:mounted：iframe DOM 挂载即 emit iframe-mounted(url, el)
    const mounted = wrapper.emitted('iframe-mounted')
    expect(mounted).toBeTruthy()
    expect(mounted![0][0]).toBe(url)
    expect(mounted![0][1]).toBeInstanceOf(HTMLIFrameElement)

    // @load：iframe 加载完 emit iframe-loaded(url, el)
    await wrapper.find('iframe').trigger('load')
    const loaded = wrapper.emitted('iframe-loaded')
    expect(loaded).toBeTruthy()
    expect(loaded![0][0]).toBe(url)
    expect(loaded![0][1]).toBeInstanceOf(HTMLIFrameElement)
  })

  it('iframeAttrs 透传自定义属性到 DOM 且不能覆盖库的 src', async () => {
    const url = 'https://example.com/'
    const { wrapper } = makeApp({
      iframeAttrs: () => ({ sandbox: 'allow-scripts', src: 'https://evil.com/' })
    })
    useRouterTab().iframes.push(url)
    await nextTick()

    const iframe = wrapper.find('iframe')
    // 用户自定义属性透传到 DOM
    expect(iframe.attributes('sandbox')).toBe('allow-scripts')
    // 用户试图传 src 无法劫持，库的 src 为准
    expect(iframe.attributes('src')).toBe(url)
  })

  it('对外实例不泄漏内部实现方法', () => {
    makeApp()
    const $tabs = useRouterTab() as any
    // getIframePath 属内部拼路径实现，不在 RouterTabPublic 契约内（曾因 ...toRefs(iframe) 整体展开外泄）
    ;['getIframePath', 'presetTabs', 'syncFromAlive', 'getRouteTab', 'initTabs'].forEach((m) =>
      expect($tabs[m]).toBeUndefined()
    )
    // 契约内的 iframe 字段仍在
    ;['openIframe', 'closeIframe', 'refreshIframe'].forEach((m) =>
      expect(typeof $tabs[m]).toBe('function')
    )
    expect(Array.isArray($tabs.iframes)).toBe(true)
  })

  it('iframeAttrs 传 onLoad 时用户回调与库 iframe-loaded emit 都触发', async () => {
    const url = 'https://example.com/'
    let userLoadCalled = false
    const { wrapper } = makeApp({
      iframeAttrs: () => ({
        onLoad: () => {
          userLoadCalled = true
        }
      })
    })
    useRouterTab().iframes.push(url)
    await nextTick()

    await wrapper.find('iframe').trigger('load')
    // 用户 onLoad 回调触发
    expect(userLoadCalled).toBe(true)
    // 库的 iframe-loaded emit 同时触发（mergeProps 合并成数组、互不覆盖）
    expect(wrapper.emitted('iframe-loaded')).toBeTruthy()
  })
})
