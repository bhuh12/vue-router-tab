import { describe, it, expect, beforeEach, vi } from 'vitest'
import { useRestore } from '../composables/useRestore'
import { useState } from '../composables/useState'

function makeRestore(restore: any = true, basePath = '/app') {
  const state = useState()
  state.items = [
    { id: '/a', to: '/a' },
    { id: '/b', to: '/b' }
  ]
  const presetTabs = vi.fn((tabs?: any[]) => {
    state.items = tabs ?? []
  })
  const r = useRestore(
    state,
    {
      get restore() {
        return restore
      }
    } as any,
    {
      get basePath() {
        return basePath
      }
    },
    { presetTabs } as any
  )
  return { r, items: state.items, presetTabs }
}

describe('useRestore', () => {
  beforeEach(() => sessionStorage.clear())

  it('restore=false 时 restoreKey 为空、不存储', () => {
    const { r } = makeRestore(false)
    expect(r.restoreKey).toBe('')
    r.saveTabs()
    expect(sessionStorage.length).toBe(0)
  })

  it('restore=true 按 basePath 生成 key 并保存', () => {
    const { r } = makeRestore(true, '/app')
    expect(r.restoreKey).toBe('RouterTab:restore:/app')
    r.saveTabs()
    expect(JSON.parse(sessionStorage.getItem(r.restoreKey)!)).toHaveLength(2)
  })

  it('restore 字符串时 key 追加后缀', () => {
    const { r } = makeRestore('main', '/app')
    expect(r.restoreKey).toBe('RouterTab:restore:/app:main')
  })

  it('restoreTabs 命中存储则 presetTabs 并返回 true', () => {
    const { r, presetTabs } = makeRestore(true, '/app')
    sessionStorage.setItem('RouterTab:restore:/app', JSON.stringify([{ id: '/x', to: '/x' }]))
    expect(r.restoreTabs()).toBe(true)
    expect(presetTabs).toHaveBeenCalled()
  })

  it('restoreTabs 无存储返回 false', () => {
    const { r } = makeRestore(true, '/app')
    expect(r.restoreTabs()).toBe(false)
  })

  it('clearTabsStore 移除存储', () => {
    const { r } = makeRestore(true, '/app')
    r.saveTabs()
    r.clearTabsStore()
    expect(sessionStorage.getItem(r.restoreKey)).toBeNull()
  })
})
