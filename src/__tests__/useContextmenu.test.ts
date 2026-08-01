import { describe, it, expect, afterEach } from 'vitest'
import { h, nextTick, defineComponent } from 'vue'
import { mount } from '@vue/test-utils'
import { createRouter, createMemoryHistory, RouterView } from 'vue-router'
import RouterTab from '../components/RouterTab.vue'
import { useContextmenu } from '../composables/useContextmenu'
import { useRouterTab, clearAllRouterTab } from '../composables/useRouterTab'
import menuMap, { defaultMenu } from '../config/contextmenu'

afterEach(() => clearAllRouterTab())

describe('内置菜单配置', () => {
  it('defaultMenu 含 6 项且每项在 menuMap 有定义', () => {
    expect(defaultMenu).toHaveLength(6)
    defaultMenu.forEach((id) => expect(menuMap[id]).toBeTruthy())
  })

  it('每个内置项带 id', () => {
    expect(menuMap.refresh.id).toBe('refresh')
    expect(menuMap.closeOthers.id).toBe('closeOthers')
  })
})

describe('useContextmenu', () => {
  it('初始 contextData 为空态', () => {
    const cm = useContextmenu()
    expect(cm.contextData.id).toBe(null)
    expect(cm.contextData.index).toBe(-1)
  })

  it('showContextmenu 设定 id/index/坐标', () => {
    const cm = useContextmenu()
    cm.showContextmenu('/a', 2, { clientX: 100, clientY: 50 } as any)
    expect(cm.contextData.id).toBe('/a')
    expect(cm.contextData.index).toBe(2)
    expect(cm.contextData.left).toBe(100)
    expect(cm.contextData.top).toBe(50)
  })

  it('hideContextmenu 复位为空态', () => {
    const cm = useContextmenu()
    cm.showContextmenu('/a', 2, { clientX: 1, clientY: 1 } as any)
    cm.hideContextmenu()
    expect(cm.contextData.id).toBe(null)
    expect(cm.contextData.index).toBe(-1)
  })
})

describe('右键菜单外部点击关闭', () => {
  /** 挂 RouterTab 并打开右键菜单，返回实例与容器 */
  async function openMenu() {
    const router = createRouter({
      history: createMemoryHistory(),
      routes: [
        {
          path: '/d/',
          component: defineComponent({ render: () => h(RouterTab, { keepAlive: true }) }),
          children: [
            {
              path: 'page/:id',
              component: defineComponent({ render: () => h('div', 'P') }),
              meta: { routerTab: { title: 'P', key: 'path' } }
            }
          ]
        }
      ]
    })
    const wrapper = mount(
      { render: () => h(RouterView) },
      { attachTo: document.body, global: { plugins: [router] } }
    )
    await router.push('/d/page/1')
    await nextTick()
    await nextTick()

    const $tabs = useRouterTab()
    $tabs.showContextmenu('/d/page/1', 0, { clientX: 10, clientY: 10 } as any)
    await nextTick()

    return { $tabs, wrapper, router }
  }

  /** 派发一次冒泡到 document 的真实 click */
  function clickOn(el: Element) {
    el.dispatchEvent(new MouseEvent('click', { bubbles: true }))
  }

  it('点击菜单项后菜单关闭（closest 会把菜单项算作内部而不关闭）', async () => {
    const { $tabs, wrapper } = await openMenu()
    expect(wrapper.find('.router-tab__contextmenu').exists()).toBe(true)

    clickOn(wrapper.find('.router-tab__contextmenu-item[data-action="refresh"]').element)
    await nextTick()

    expect($tabs.contextData.id).toBe(null)
    wrapper.unmount()
  })

  it('点击菜单容器自身（菜单项之间的空白）不关闭', async () => {
    const { $tabs, wrapper } = await openMenu()

    clickOn(wrapper.find('.router-tab__contextmenu').element)
    await nextTick()

    expect($tabs.contextData.id).toBe('/d/page/1')
    wrapper.unmount()
  })

  it('keepLastTab 下剩最后一个页签时「关闭」项禁用（点了也关不掉，不该可点）', async () => {
    const { $tabs, wrapper } = await openMenu()

    expect($tabs.items.length).toBe(1)
    const close = wrapper.find('.router-tab__contextmenu-item[data-action="close"]')
    expect(close.attributes('disabled')).toBeDefined()

    wrapper.unmount()
  })

  it('页签多于一个时「关闭」项可用', async () => {
    const { $tabs, wrapper, router } = await openMenu()

    await router.push('/d/page/2')
    await nextTick()
    await nextTick()

    $tabs.showContextmenu('/d/page/2', 1, { clientX: 10, clientY: 10 } as any)
    await nextTick()

    expect($tabs.items.length).toBe(2)
    const close = wrapper.find('.router-tab__contextmenu-item[data-action="close"]')
    expect(close.attributes('disabled')).toBeUndefined()

    wrapper.unmount()
  })

  it('点击菜单外部元素关闭', async () => {
    const { $tabs, wrapper } = await openMenu()

    clickOn(wrapper.find('.router-tab__nav').element)
    await nextTick()

    expect($tabs.contextData.id).toBe(null)
    wrapper.unmount()
  })
})
