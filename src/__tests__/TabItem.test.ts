import { describe, it, expect } from 'vitest'
import { reactive } from 'vue'
import { mount } from '@vue/test-utils'
import { createRouter, createMemoryHistory } from 'vue-router'
import TabItem from '../components/TabItem.vue'

/** mock $tabs：契约已去 Ref 化，字段一律裸值（reactive 聚合形态） */
function makeTabs(itemsData: any[], overrides: any = {}) {
  return reactive({
    items: itemsData,
    activeTabId: '/a',
    activeTab: itemsData.find((t) => t.id === '/a'),
    contextData: { id: null, index: -1 },
    keepLastTab: true,
    dragsort: true,
    onDragSort: false,
    langs: { tab: { untitled: '无标题' } },
    i18nText: (t: any) => t,
    closeTab: () => {},
    showContextmenu: () => {},
    ...overrides
  }) as any
}

function mountItem(tabs: any, data: any, index = 0) {
  const router = createRouter({
    history: createMemoryHistory(),
    routes: [
      { path: '/a', component: {} },
      { path: '/b', component: {} }
    ]
  })
  return mount(TabItem, { props: { tabs, data, index }, global: { plugins: [router] } })
}

describe('TabItem', () => {
  it('渲染标题', () => {
    const tabs = makeTabs([
      { id: '/a', to: '/a', title: 'A', closable: true },
      { id: '/b', to: '/b', title: 'B', closable: true }
    ])
    expect(mountItem(tabs, tabs.items[0]).text()).toContain('A')
  })

  it('多页签且 closable 渲染关闭按钮', () => {
    const tabs = makeTabs([
      { id: '/a', to: '/a', title: 'A', closable: true },
      { id: '/b', to: '/b', closable: true }
    ])
    expect(mountItem(tabs, tabs.items[0]).find('.router-tab__item-close').exists()).toBe(true)
  })

  it('keepLastTab 且仅剩 1 个时不可关', () => {
    const tabs = makeTabs([{ id: '/a', to: '/a', title: 'A', closable: true }])
    expect(mountItem(tabs, tabs.items[0]).find('.router-tab__item-close').exists()).toBe(false)
  })

  it('data.closable=false 恒不可关', () => {
    const tabs = makeTabs([
      { id: '/a', to: '/a', title: 'A', closable: false },
      { id: '/b', to: '/b', closable: true }
    ])
    expect(mountItem(tabs, tabs.items[0]).find('.router-tab__item-close').exists()).toBe(false)
  })

  it('无标题回退 untitled', () => {
    const tabs = makeTabs([
      { id: '/a', to: '/a', closable: true },
      { id: '/b', to: '/b', closable: true }
    ])
    expect(mountItem(tabs, tabs.items[0]).text()).toContain('无标题')
  })

  describe('拖拽排序索引校验', () => {
    const PREFIX = 'RouterTabDragSortIndex:'

    /** 造 dataTransfer stub，drop 时回传指定 raw */
    const dt = (raw: string) => ({
      getData: () => raw,
      setData: () => {},
      dropEffect: '',
      effectAllowed: ''
    })

    it('正常索引：交换页签顺序', async () => {
      const tabs = makeTabs([
        { id: '/a', to: '/a', closable: true },
        { id: '/b', to: '/b', closable: true }
      ])
      // 把 index 1 拖到 index 0
      const w = mountItem(tabs, tabs.items[0], 0)
      await w.trigger('drop', { dataTransfer: dt(PREFIX + '1') })
      expect(tabs.items.map((t: any) => t.id)).toEqual(['/b', '/a'])
    })

    it('索引越界：忽略，不把 undefined 插进页签数组', async () => {
      const tabs = makeTabs([
        { id: '/a', to: '/a', closable: true },
        { id: '/b', to: '/b', closable: true }
      ])
      const w = mountItem(tabs, tabs.items[0], 0)
      // 跨实例拖拽：源实例页签数多于本实例
      await w.trigger('drop', { dataTransfer: dt(PREFIX + '99') })
      expect(tabs.items.map((t: any) => t.id)).toEqual(['/a', '/b'])
      expect(tabs.items.includes(undefined)).toBe(false)
    })

    it('非数字索引：忽略，不静默搬错页签（NaN 会被转成 0）', async () => {
      const tabs = makeTabs([
        { id: '/a', to: '/a', closable: true },
        { id: '/b', to: '/b', closable: true }
      ])
      const w = mountItem(tabs, tabs.items[1], 1)
      await w.trigger('drop', { dataTransfer: dt(PREFIX + 'xx') })
      expect(tabs.items.map((t: any) => t.id)).toEqual(['/a', '/b'])
    })

    it('负数索引：忽略', async () => {
      const tabs = makeTabs([
        { id: '/a', to: '/a', closable: true },
        { id: '/b', to: '/b', closable: true }
      ])
      const w = mountItem(tabs, tabs.items[0], 0)
      await w.trigger('drop', { dataTransfer: dt(PREFIX + '-1') })
      expect(tabs.items.map((t: any) => t.id)).toEqual(['/a', '/b'])
    })
  })
})
