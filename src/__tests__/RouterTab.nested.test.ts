import { describe, it, expect, afterEach, vi } from 'vitest'
import { h, nextTick, defineComponent, KeepAlive } from 'vue'
import { mount } from '@vue/test-utils'
import { createRouter, createMemoryHistory, RouterView } from 'vue-router'
import RouterTab from '../components/RouterTab.vue'
import RouterTabRoutes from '../config/routes'
import { useRouterPage } from '../composables/useRouterPage'
import { useRouterTab, clearAllRouterTab } from '../composables/useRouterTab'

afterEach(() => clearAllRouterTab())

/** 导航并等渲染稳定（守卫拦截会 reject，此处按放行/拦截两种都继续断言） */
async function go(router: any, to: any) {
  try {
    await router.push(to)
  } catch {
    // 守卫 next(false) 时 push reject，属预期
  }
  await nextTick()
  await nextTick()
}

const Plain = (text: string) => defineComponent({ render: () => h('div', text) })

/**
 * frame 容器：外层 <router-view> 渲染它，它内部才是 <router-tab>。
 * 真实两层结构（router-view → frame → router-tab → router-alive）下
 * RouterTab 的 routeIndex 为 1，与 demo 一致；
 * 既有单测把 router-alive 直挂测试根组件，routeIndex 恒为 0，故三个缺陷全部漏检。
 */
const Frame = defineComponent({ render: () => h(RouterTab, { keepAlive: true }) })

/** 嵌套外层页：自身再套一层 <router-view> + 原生 keep-alive 渲染内层子页 */
const Nest = defineComponent({
  name: 'Nest',
  render() {
    return h(RouterView, null, {
      default: ({ Component }: any) =>
        h(KeepAlive, null, { default: () => Component && h(Component) })
    })
  }
})

/** 挂载两层结构的 app */
function mountFrames(routes: any[]) {
  const router = createRouter({ history: createMemoryHistory(), routes })
  const wrapper = mount({ render: () => h(RouterView) }, { global: { plugins: [router] } })
  return { router, wrapper }
}

describe('V-09/V-10 嵌套内层导航同步页签 to', () => {
  const nestRoutes = [
    {
      path: '/default/',
      component: Frame,
      children: [
        {
          path: 'nest/:nestId',
          component: Nest,
          meta: { routerTab: { title: '嵌套' } },
          children: [
            { path: 'page1', component: Plain('INNER1') },
            { path: 'page2', component: Plain('INNER2') }
          ]
        },
        {
          path: 'page/:id',
          component: Plain('P'),
          meta: { routerTab: { title: 'P', key: 'path' } }
        }
      ]
    }
  ]

  it('内层子页切换后 tab.to 跟随当前 fullPath（key 不变时也需 emit update）', async () => {
    const { router } = mountFrames(nestRoutes)
    await go(router, '/default/nest/1/page1')
    const $tabs = useRouterTab()

    expect($tabs.items.map((t) => t.to)).toEqual(['/default/nest/1/page1'])

    // 内层导航：RouterTab 层 key 取 matched[1]，page1→page2 不变，
    // 仅靠 watch(key) 则不 emit change → tab.to 冻结在 page1
    await go(router, '/default/nest/1/page2')
    expect($tabs.items.map((t) => t.to)).toEqual(['/default/nest/1/page2'])
  })

  it('切走再切回嵌套页签，回到内层最后停留的子页', async () => {
    const { router, wrapper } = mountFrames(nestRoutes)
    await go(router, '/default/nest/1/page1')
    await go(router, '/default/nest/1/page2')

    const $tabs = useRouterTab()
    const nestTab = $tabs.items.find((t) => t.id.includes('nest'))!

    // 切到别的页签再点回嵌套页签（走 tab.to，即 V-09/V-10 的手验路径）
    await go(router, '/default/page/1')
    await go(router, nestTab.to)

    expect(router.currentRoute.value.fullPath).toBe('/default/nest/1/page2')
    expect(wrapper.text()).toContain('INNER2')
    expect(wrapper.text()).not.toContain('INNER1')
  })

  it('页签数不因内层导航增长（update 覆盖而非新增）', async () => {
    const { router } = mountFrames(nestRoutes)
    await go(router, '/default/nest/1/page1')
    await go(router, '/default/nest/1/page2')
    await go(router, '/default/nest/1/page1')

    expect(useRouterTab().items.length).toBe(1)
  })
})

describe('A-12/A-13 leaveGuard 三分支（对齐 v1）', () => {
  const hook = vi.fn()

  /** 注册 beforePageLeave 的页面；默认 key → query 变化不改 key，用于触发 replace */
  const LeavePage = defineComponent({
    name: 'LeavePage',
    setup() {
      useRouterPage({ beforePageLeave: hook })
      return () => h('div', 'leave-page')
    }
  })

  const leaveRoutes = [
    {
      path: '/default/',
      component: Frame,
      children: [
        { path: 'page-leave', component: LeavePage, meta: { routerTab: { title: '离开确认' } } },
        {
          path: 'page/:id',
          component: Plain('P'),
          meta: { routerTab: { title: 'P', key: 'path' } }
        }
      ]
    },
    {
      path: '/other/',
      component: Frame,
      children: [
        {
          path: 'page/:id',
          component: Plain('O'),
          meta: { routerTab: { title: 'O', key: 'path' } }
        }
      ]
    }
  ]

  /** 本次导航传给 beforePageLeave 的类型列表 */
  const types = () => hook.mock.calls.map((c) => c[1])

  it('A-12 同页签改 query：触发 replace（v1 分支1，v2 曾因 prunePath 去 query 永不成立）', async () => {
    hook.mockClear()
    const { router } = mountFrames(leaveRoutes)
    await go(router, '/default/page-leave')
    await go(router, '/default/page-leave?id=1')

    expect(types()).toEqual(['replace'])
  })

  it('A-13 跨 frame 离开页签组件：触发 leave（v1 分支2）', async () => {
    hook.mockClear()
    const { router } = mountFrames(leaveRoutes)
    await go(router, '/default/page-leave')
    await go(router, '/other/page/1')

    expect(types()).toEqual(['leave'])
  })

  it('同 frame 内切到别的页签：不确认（与 v1 一致，缓存页签切换不打扰）', async () => {
    hook.mockClear()
    const { router } = mountFrames(leaveRoutes)
    await go(router, '/default/page-leave')
    await go(router, '/default/page/1')

    expect(types()).toEqual([])
  })

  it('切回已缓存页签：不确认', async () => {
    const { router } = mountFrames(leaveRoutes)
    await go(router, '/default/page-leave')
    await go(router, '/default/page/1')
    hook.mockClear()
    await go(router, '/default/page-leave')

    expect(types()).toEqual([])
  })

  it('beforePageLeave reject 时导航被中止，停在原页', async () => {
    hook.mockClear()
    hook.mockRejectedValueOnce(new Error('拒绝离开'))
    const { router } = mountFrames(leaveRoutes)
    await go(router, '/default/page-leave')
    await go(router, '/other/page/1')

    expect(types()).toEqual(['leave'])
    expect(router.currentRoute.value.fullPath).toBe('/default/page-leave')
  })
})

describe('F-02 iframe 刷新重建节点', () => {
  const src = 'https://example.com/'

  const iframeRoutes = [
    {
      path: '/default/',
      component: Frame,
      children: [
        {
          path: 'page/:id',
          component: Plain('P'),
          meta: { routerTab: { title: 'P', key: 'path' } }
        },
        ...(RouterTabRoutes as any)
      ]
    }
  ]

  /** 打开 iframe 页签的路由地址 */
  const iframePath = '/default/iframe/' + encodeURIComponent(src) + '/Demo'

  /** 记录 iframe 节点的 src 赋值次数（重载即重新赋值一次 src） */
  function watchSrcWrites(el: HTMLIFrameElement) {
    const writes: string[] = []
    const proto = Object.getOwnPropertyDescriptor(HTMLIFrameElement.prototype, 'src')!
    Object.defineProperty(el, 'src', {
      configurable: true,
      get: () => proto.get!.call(el),
      set: (v: string) => {
        writes.push(v)
        proto.set!.call(el, v)
      }
    })
    return writes
  }

  it('refreshIframe 触发 iframe 重新加载（src 被重新赋值，节点复用不重建）', async () => {
    const { router, wrapper } = mountFrames(iframeRoutes)
    await go(router, iframePath)

    const el = wrapper.find('iframe').element as HTMLIFrameElement
    const writes = watchSrcWrites(el)

    useRouterTab().refreshIframe(src)
    await nextTick()
    await nextTick()

    // 重载靠重置 src；节点本身必须复用（改 key 重建会让 transition-group
    // 的离场节点因 display:none 收不到 transitionend 而永久泄漏）
    expect(writes.length).toBeGreaterThan(0)
    expect(wrapper.find('iframe').element).toBe(el)
    expect(wrapper.findAll('iframe').length).toBe(1)
  })

  it('refreshTab 刷新 iframe 页签也重新加载（右键菜单刷新走此路径，不经 refreshIframe）', async () => {
    const { router, wrapper } = mountFrames(iframeRoutes)
    await go(router, iframePath)

    const el = wrapper.find('iframe').element as HTMLIFrameElement
    const writes = watchSrcWrites(el)

    const $tabs = useRouterTab()
    await $tabs.refreshTab($tabs.activeTabId, true)
    await nextTick()
    await nextTick()

    expect(writes.length).toBeGreaterThan(0)
    expect(wrapper.findAll('iframe').length).toBe(1)
  })

  it('反复刷新不堆积 iframe 节点（离场节点泄漏回归）', async () => {
    const { router, wrapper } = mountFrames(iframeRoutes)
    await go(router, iframePath)

    const $tabs = useRouterTab()
    for (let i = 0; i < 3; i++) {
      $tabs.refreshIframe(src)
      await nextTick()
      await nextTick()
    }

    expect(wrapper.findAll('iframe').length).toBe(1)
  })

  it('刷新后 iframe 仍指向原 src 且保持当前显示', async () => {
    const { router, wrapper } = mountFrames(iframeRoutes)
    await go(router, iframePath)

    const $tabs = useRouterTab()
    $tabs.refreshIframe(src)
    await nextTick()
    await nextTick()

    expect(wrapper.find('iframe').attributes('src')).toBe(src)
    expect($tabs.currentIframe).toBe(src)
    expect([...$tabs.iframes]).toEqual([src])
  })

  it('reloadIframe 属内部渲染实现，不在对外契约内', async () => {
    const { router } = mountFrames(iframeRoutes)
    await go(router, iframePath)

    // 首次打开时节点尚未存在，reloadIframe 需静默跳过而非抛错
    expect(() => (useRouterTab() as any).reloadIframe('https://not-mounted.example/')).not.toThrow()
  })
})

describe('右键菜单可用性与关闭最后页签', () => {
  /** keepLastTab=false 的 frame（对照 demo CloseLastTab） */
  const LastTabFrame = defineComponent({
    render: () => h(RouterTab, { keepAlive: true, keepLastTab: false })
  })

  /** 根路径 redirect 回子页：关掉唯一页签后 close 会 replace 到此，构成重复导航 */
  const lastTabRoutes = [
    {
      path: '/close-last-tab/',
      component: LastTabFrame,
      redirect: '/close-last-tab/page/1',
      children: [
        {
          path: 'page/:id',
          component: Plain('P'),
          meta: { routerTab: { title: 'P', key: 'path' } }
        }
      ]
    }
  ]

  it('未配置 enable 的菜单项不带 disabled 属性（Vue3 传 false 会渲染成 disabled="false"）', async () => {
    const { router, wrapper } = mountFrames(lastTabRoutes)
    await go(router, '/close-last-tab/page/1')

    useRouterTab().showContextmenu('/close-last-tab/page/1', 0)
    await nextTick()

    const attrOf = (action: string) =>
      wrapper.find(`.router-tab__contextmenu-item[data-action="${action}"]`).attributes('disabled')

    // refresh/refreshAll 无 enable 配置、close 的页签可关 → 都应可用
    // 属性只要存在（哪怕值为 "false"）就会被 [disabled] 样式的 pointer-events: none 挡住
    expect(attrOf('refresh')).toBeUndefined()
    expect(attrOf('refreshAll')).toBeUndefined()
    expect(attrOf('close')).toBeUndefined()
  })

  it('enable 为 false 的菜单项仍带 disabled 属性', async () => {
    const { router, wrapper } = mountFrames(lastTabRoutes)
    await go(router, '/close-last-tab/page/1')

    useRouterTab().showContextmenu('/close-last-tab/page/1', 0)
    await nextTick()

    // 仅一个页签 → 左侧/右侧/其他均无可关页签
    for (const action of ['closeLefts', 'closeRights', 'closeOthers']) {
      const el = wrapper.find(`.router-tab__contextmenu-item[data-action="${action}"]`)
      expect(el.attributes('disabled')).toBeDefined()
    }
  })

  it('关闭唯一页签后回到默认页并重建页签（默认页 redirect 回原路由属重复导航）', async () => {
    const { router } = mountFrames(lastTabRoutes)
    await go(router, '/close-last-tab/page/1')
    const $tabs = useRouterTab()

    await $tabs.close()
    await nextTick()
    await nextTick()
    await nextTick()

    // 路由未变 → 两个 watch 均不触发，须靠 refresh 补发 change 才能重建页签
    expect(router.currentRoute.value.fullPath).toBe('/close-last-tab/page/1')
    expect($tabs.items.map((t) => t.id)).toEqual(['/close-last-tab/page/1'])
  })

  it('带 redirect 的父路由地址能解析出正确 key（vue-router 4/5 的 resolve 不跟随 redirect）', async () => {
    const { router } = mountFrames(lastTabRoutes)
    await go(router, '/close-last-tab/page/1')
    const $tabs = useRouterTab()

    // 父路由 resolve 后 matched 只有一层，不跟随 redirect 则 matched[routeIndex=1]
    // 为 undefined → key 退化成空串，defaultPage/basePath 相关判定全部失准
    expect($tabs.getRouteKey('/close-last-tab/')).toBe('/close-last-tab/page/1')
    expect($tabs.getIdByPath('/close-last-tab/')).toBe('/close-last-tab/page/1')
  })

  it('预设页签写带 redirect 的父路由地址也能建出页签', async () => {
    const router = createRouter({
      history: createMemoryHistory(),
      routes: [
        {
          path: '/preset/',
          component: defineComponent({
            render: () => h(RouterTab, { keepAlive: true, tabs: ['/preset/'] })
          }),
          redirect: '/preset/page/1',
          children: [
            {
              path: 'page/:id',
              component: Plain('P'),
              meta: { routerTab: { title: 'P', key: 'path' } }
            }
          ]
        }
      ]
    })
    mount({ render: () => h(RouterView) }, { global: { plugins: [router] } })
    await go(router, '/preset/page/1')

    expect(useRouterTab().items.map((t) => t.id)).toEqual(['/preset/page/1'])
  })
})
