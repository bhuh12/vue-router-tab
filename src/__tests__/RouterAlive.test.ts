import { describe, it, expect, beforeEach } from 'vitest'
import { defineComponent, h, ref, nextTick, KeepAlive } from 'vue'
import { useRoute, RouterView } from 'vue-router'
import { mount } from '@vue/test-utils'
import { createRouter, createMemoryHistory } from 'vue-router'
import RouterAlive from '../components/RouterAlive.vue'

const log: Record<string, { mounted: number; unmounted: number }> = {}
const bump = (id: string, k: 'mounted' | 'unmounted') =>
  (log[id] ??= { mounted: 0, unmounted: 0 })[k]++

const User = defineComponent({
  name: 'User',
  setup() {
    const r = useRoute()
    const id = `User:${r.params.id}`
    bump(id, 'mounted')
    const count = ref(0)
    return { count, id }
  },
  unmounted() {
    bump((this as any).id, 'unmounted')
  },
  render() {
    return h('div', { class: 'user' }, `${(this as any).id}:${(this as any).count}`)
  }
})

function makeApp(extraProps = '') {
  const router = createRouter({
    history: createMemoryHistory(),
    routes: [
      {
        path: '/',
        name: 'home',
        component: { render: () => h('div', 'home') },
        meta: { routerTab: { keepAlive: true } }
      },
      {
        path: '/user/:id',
        component: User,
        meta: { routerTab: { keepAlive: true, key: (r: any) => `/user/${r.params.id}` } }
      }
    ]
  })
  const wrapper = mount(
    { components: { RouterAlive }, template: `<router-alive :keep-alive="true" ${extraProps} />` },
    { global: { plugins: [router] } }
  )
  return { router, wrapper }
}
const go = async (router: any, p: string) => {
  await router.push(p)
  await nextTick()
  await nextTick()
}

beforeEach(() => {
  for (const k of Object.keys(log)) delete log[k]
})

describe('RouterAlive 缓存核心', () => {
  it('缓存命中：切走切回不重挂载、状态保留', async () => {
    const { router, wrapper } = makeApp()
    await go(router, '/user/1')
    ;(wrapper.findComponent(User).vm as any).count = 7
    await nextTick()
    await go(router, '/')
    await go(router, '/user/1')
    expect(log['User:1'].mounted).toBe(1)
    expect(wrapper.text()).toContain('User:1:7')
  })

  it('evict 关闭后台页：立即 unmount，当前页不受影响', async () => {
    const { router, wrapper } = makeApp()
    await go(router, '/user/1')
    await go(router, '/user/2')
    ;(wrapper.findComponent(RouterAlive).vm as any).evict('/user/1')
    await nextTick()
    expect(log['User:1'].unmounted).toBe(1)
    expect(log['User:2'].unmounted ?? 0).toBe(0)
  })

  it('refresh 当前页：重挂载、状态清空', async () => {
    const { router, wrapper } = makeApp()
    await go(router, '/user/1')
    ;(wrapper.findComponent(User).vm as any).count = 9
    await nextTick()
    ;(wrapper.findComponent(RouterAlive).vm as any).refresh('/user/1')
    await nextTick()
    await nextTick()
    expect(log['User:1'].mounted).toBe(2)
    expect(wrapper.text()).toContain('User:1:0')
  })

  it('max=1：打开第二页时按 FIFO 驱逐第一页', async () => {
    const { router } = makeApp(':max="1"')
    await go(router, '/user/1')
    await go(router, '/user/2')
    await nextTick()
    expect(log['User:1'].unmounted).toBe(1)
  })

  it('ready 事件在首次路由就绪时派发一次', async () => {
    const router = createRouter({
      history: createMemoryHistory(),
      routes: [
        {
          path: '/',
          component: { render: () => h('div', 'home') },
          meta: { routerTab: { keepAlive: true } }
        }
      ]
    })
    let readyCount = 0
    mount(
      {
        components: { RouterAlive },
        template: '<router-alive :keep-alive="true" @ready="onReady" />',
        methods: {
          onReady() {
            readyCount++
          }
        }
      },
      { global: { plugins: [router] } }
    )
    await go(router, '/')
    expect(readyCount).toBe(1)
  })

  it('RA-06 同组件不同 params 各自独立缓存，互不 unmount', async () => {
    const { router } = makeApp()
    await go(router, '/user/1')
    await go(router, '/user/2')
    expect(log['User:1'].mounted).toBe(1)
    expect(log['User:2'].mounted).toBe(1)
    expect(log['User:1'].unmounted ?? 0).toBe(0)
  })

  it('RA-07 reuse=false 嵌套页内层子段变化时外层保持缓存（对齐 v1 per-child 语义）', async () => {
    // v1 语义：嵌套路由 alivePath 取父段填参路径（parsePath(route.path, params)），
    // 内层子段变化不改变外层 alivePath → 外层缓存身份不变 → 外层保持缓存、不重挂。
    // 此前实现回退用 fullPath 做 alivePath，子段变化误刷新外层，本用例即针对该回退回归。
    const Outer = defineComponent({
      name: 'Outer',
      setup() {
        bump('Outer', 'mounted')
      },
      unmounted() {
        bump('Outer', 'unmounted')
      },
      render() {
        return h(RouterView)
      }
    })
    const Child = defineComponent({
      name: 'Child',
      setup() {
        const r = useRoute()
        const id = `List:${r.params.tab ?? 'root'}`
        bump(id, 'mounted')
        return { id }
      },
      unmounted() {
        bump((this as any).id, 'unmounted')
      },
      render() {
        return h('div', { class: 'child' }, (this as any).id)
      }
    })
    const router = createRouter({
      history: createMemoryHistory(),
      routes: [
        {
          path: '/list',
          component: Outer,
          meta: { routerTab: { keepAlive: true, key: () => '/list', reuse: false } },
          children: [
            {
              path: ':tab',
              component: Child,
              meta: { routerTab: { keepAlive: true, key: () => '/list' } }
            }
          ]
        }
      ]
    })
    mount(
      {
        components: { RouterAlive },
        template: '<router-alive :keep-alive="true" :reuse="false" />'
      },
      { global: { plugins: [router] } }
    )
    await go(router, '/list/a')
    await go(router, '/list/b')
    // 外层 alivePath 恒为 /list（父段无 param），子段 a→b 不改缓存身份 → 外层不重挂
    expect(log['Outer'].mounted).toBe(1)
    expect(log['Outer'].unmounted ?? 0).toBe(0)
  })

  it('N-03 嵌套页内层原生 keep-alive：内层切换与外层 tab 切换均保留子页状态', async () => {
    const Page1 = defineComponent({
      name: 'Page1',
      setup() {
        bump('Page1', 'mounted')
        const count = ref(0)
        return { count }
      },
      unmounted() {
        bump('Page1', 'unmounted')
      },
      render() {
        return h('div', { class: 'page1' }, `page1:${(this as any).count}`)
      }
    })
    const Page2 = defineComponent({
      name: 'Page2',
      setup() {
        bump('Page2', 'mounted')
      },
      unmounted() {
        bump('Page2', 'unmounted')
      },
      render() {
        return h('div', { class: 'page2' }, 'page2')
      }
    })
    // 外层页内含原生 <keep-alive><router-view/></keep-alive>，模拟真实 per-child 缓存
    const Nest = defineComponent({
      name: 'Nest',
      render() {
        return h(RouterView, null, {
          default: ({ Component }: any) =>
            h(KeepAlive, null, { default: () => Component && h(Component) })
        })
      }
    })
    const router = createRouter({
      history: createMemoryHistory(),
      routes: [
        {
          path: '/list',
          component: Nest,
          meta: { routerTab: { keepAlive: true, key: () => '/list', reuse: false } },
          children: [
            { path: 'page1', component: Page1, meta: { routerTab: { keepAlive: true } } },
            { path: 'page2', component: Page2, meta: { routerTab: { keepAlive: true } } }
          ]
        },
        {
          path: '/other',
          component: { render: () => h('div', 'other') },
          meta: { routerTab: { keepAlive: true } }
        }
      ]
    })
    const wrapper = mount(
      {
        components: { RouterAlive },
        template: '<router-alive :keep-alive="true" :reuse="false" />'
      },
      { global: { plugins: [router] } }
    )
    // 进 page1 并写入可观测状态
    await go(router, '/list/page1')
    ;(wrapper.findComponent(Page1).vm as any).count = 5
    await nextTick()
    // 内层切 page2 再切回 page1：page1 未重挂、状态保留
    await go(router, '/list/page2')
    await go(router, '/list/page1')
    expect(log['Page1'].mounted).toBe(1)
    expect(wrapper.text()).toContain('page1:5')
    // 切走整个外层 tab 再切回 page2：内层实例存活、状态保留，且显示子页与当前 fullPath 一致
    await go(router, '/other')
    await go(router, '/list/page2')
    // Vue3 KeepAlive 激活时子组件响应式自动重渲染，无需 v1 的 nestForceUpdate/$forceUpdate 等价物
    expect(wrapper.text()).toContain('page2')
    expect(wrapper.text()).not.toContain('page1')
    expect(log['Page2'].mounted).toBe(1)
    // 再切回 page1：状态仍在（自始至终未重挂）
    await go(router, '/list/page1')
    expect(log['Page1'].mounted).toBe(1)
    expect(wrapper.text()).toContain('page1:5')
  })

  it('RA-07b I-2 reuse=false 常量 key：旧 path 实例驱逐、新 path 实例跨页命中缓存', async () => {
    // 常量 key + reuse=false：/user/1 与 /user/2 共用 key '/user' 但 alivePath 不同
    const router = createRouter({
      history: createMemoryHistory(),
      routes: [
        {
          path: '/user/:id',
          component: User,
          meta: { routerTab: { keepAlive: true, key: () => '/user', reuse: false } }
        },
        {
          path: '/other',
          component: { render: () => h('div', 'other') },
          meta: { routerTab: { keepAlive: true } }
        }
      ]
    })
    mount(
      {
        components: { RouterAlive },
        template: '<router-alive :keep-alive="true" :reuse="false" />'
      },
      { global: { plugins: [router] } }
    )
    await go(router, '/user/1')
    await go(router, '/user/2')
    // alivePath 变化 → 旧 /user/1 实例被驱逐重挂
    expect(log['User:1'].unmounted).toBe(1)
    // I-2 修复：切到别的 key 再切回 /user/2，命中缓存不重挂载（旧实现漏登记 → 会重挂为 2）
    await go(router, '/other')
    await go(router, '/user/2')
    expect(log['User:2'].mounted).toBe(1)
  })

  it('RA-07c reuse=false 常量 key 访问多个 alivePath 后 wrapCache 有界不泄漏', async () => {
    const router = createRouter({
      history: createMemoryHistory(),
      routes: [
        {
          path: '/user/:id',
          component: User,
          meta: { routerTab: { keepAlive: true, key: () => '/user', reuse: false } }
        }
      ]
    })
    const wrapper = mount(
      {
        components: { RouterAlive },
        template: '<router-alive :keep-alive="true" :reuse="false" />'
      },
      { global: { plugins: [router] } }
    )
    const ra = wrapper.findComponent(RouterAlive)
    await go(router, '/user/1')
    await go(router, '/user/2')
    await go(router, '/user/3')
    // 缓存身份含 alivePath，若旧 wrapper 不删则 size 随访问次数涨到 3；有界性要求恒为 1
    expect((ra.vm.$.setupState as any).wrapCache.size).toBe(1)
  })

  it('RA-08 transition 组合切换不报错、页面正常渲染', async () => {
    const { router, wrapper } = makeApp('transition="fade"')
    await go(router, '/user/1')
    expect(wrapper.text()).toContain('User:1')
    await go(router, '/')
    expect(wrapper.text()).toContain('home')
  })
})
