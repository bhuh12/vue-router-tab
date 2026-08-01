import { describe, it, expect } from 'vitest'
import { ref } from 'vue'
import { mount } from '@vue/test-utils'
import ContextmenuItem from '../components/ContextmenuItem.vue'
import type { ContextmenuContext, ContextmenuItemConfig } from '../types'

/** 构造最小 context（仅覆盖 title/icon 求值所需字段） */
function makeContext(overrides: Partial<ContextmenuContext> = {}): ContextmenuContext {
  return {
    $tabs: {
      langs: { contextmenu: { refresh: '刷新' } }
    },
    data: { id: 'refresh', index: 0, left: 0, top: 0 },
    target: { id: '/a', to: '/a' },
    lefts: [],
    rights: [],
    others: [],
    closeMulti: async () => {},
    ...overrides
  } as any
}

function mountItem(data: ContextmenuItemConfig, context = makeContext()) {
  return mount(ContextmenuItem, { props: { data, context } })
}

describe('ContextmenuItem 函数式 title/icon（缺口3）', () => {
  it('data.title 字符串优先于内置文案', () => {
    const w = mountItem({ id: 'refresh', title: '自定义刷新' })
    expect(w.text()).toContain('自定义刷新')
  })

  it('无 data.title 时回落内置语言文案', () => {
    const w = mountItem({ id: 'refresh' })
    expect(w.text()).toContain('刷新')
  })

  it('内置文案缺失时回落 id', () => {
    const w = mountItem({ id: 'custom' })
    expect(w.text()).toContain('custom')
  })

  it('data.title 函数入参 context、返回动态文案', () => {
    const fullscreen = ref(false)
    const data: ContextmenuItemConfig = {
      id: 'fullscreen',
      title: () => (fullscreen.value ? '退出全屏' : '全屏')
    }
    const w = mountItem(data)
    expect(w.text()).toContain('全屏')
    fullscreen.value = true
    return w.vm.$nextTick().then(() => expect(w.text()).toContain('退出全屏'))
  })

  it('icon 字符串直接作 class', () => {
    const w = mountItem({ id: 'close', icon: 'rt-icon-close' })
    expect(w.find('.router-tab__contextmenu-icon').classes()).toContain('rt-icon-close')
  })

  it('icon 函数入参 context、返回动态 class', () => {
    const fullscreen = ref(false)
    const data: ContextmenuItemConfig = {
      id: 'fullscreen',
      icon: () => (fullscreen.value ? 'rt-icon-fullscreen-exit' : 'rt-icon-fullscreen')
    }
    const w = mountItem(data)
    expect(w.find('.router-tab__contextmenu-icon').classes()).toContain('rt-icon-fullscreen')
    fullscreen.value = true
    return w.vm
      .$nextTick()
      .then(() =>
        expect(w.find('.router-tab__contextmenu-icon').classes()).toContain(
          'rt-icon-fullscreen-exit'
        )
      )
  })
})
