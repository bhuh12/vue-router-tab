import { describe, it, expect, vi } from 'vitest'
import { usePageLeave } from '../composables/usePageLeave'
import { useState } from '../composables/useState'

function makePL() {
  const state = useState()
  state.items = [
    { id: '/a', to: '/a' },
    { id: '/b', to: '/b' }
  ]
  const pages = state.pages
  const pl = usePageLeave(state)
  return { pl, items: state.items, pages }
}

describe('usePageLeave', () => {
  it('leavePage 调用 registry 中该 id 的 beforePageLeave，返回其结果', async () => {
    const { pl, pages, items } = makePL()
    const hook = vi.fn().mockReturnValue('确定离开吗？')
    pages.set('/a', { beforePageLeave: hook })
    const res = await pl.leavePage('/a', 'close')
    expect(hook).toHaveBeenCalledWith(items[0], 'close')
    expect(res).toBe('确定离开吗？')
  })

  it('registry 无该 id 或无 hook 时 leavePage 静默返回', async () => {
    const { pl, pages } = makePL()
    await expect(pl.leavePage('/x', 'close')).resolves.toBeUndefined()
    pages.set('/b', {})
    await expect(pl.leavePage('/b', 'refresh')).resolves.toBeUndefined()
  })

  it('beforePageLeave reject 向上传播（供 removeTab 拦截关闭）', async () => {
    const { pl, pages } = makePL()
    pages.set('/a', { beforePageLeave: () => Promise.reject(new Error('拒绝关闭')) })
    await expect(pl.leavePage('/a', 'close')).rejects.toThrow('拒绝关闭')
  })
})
