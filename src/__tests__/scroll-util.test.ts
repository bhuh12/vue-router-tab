import { describe, it, expect, vi } from 'vitest'
import { debounce, scrollTo } from '../util'

describe('debounce', () => {
  it('多次调用只在延迟后执行一次，用最后一次参数', () => {
    vi.useFakeTimers()
    const fn = vi.fn()
    const d = debounce(fn, 100)
    d(1)
    d(2)
    d(3)
    expect(fn).not.toHaveBeenCalled()
    vi.advanceTimersByTime(100)
    expect(fn).toHaveBeenCalledTimes(1)
    expect(fn).toHaveBeenCalledWith(3)
    vi.useRealTimers()
  })
})

describe('scrollTo', () => {
  it('wrap 为空安全返回', () => {
    expect(() => scrollTo({ wrap: null as any, left: 10 })).not.toThrow()
  })

  it('优先用 wrap.scrollTo', () => {
    const wrap = { scrollTo: vi.fn() } as any
    scrollTo({ wrap, left: 20, smooth: false })
    expect(wrap.scrollTo).toHaveBeenCalledWith({ left: 20, top: 0, behavior: 'auto' })
  })
})
