import { describe, it, expect, vi } from 'vitest'
import { createRouter, createMemoryHistory } from 'vue-router'
import { useIframe } from '../composables/useIframe'
import { withSetup } from './helpers'

function makeIframe(basePath = '/app') {
  const router = createRouter({
    history: createMemoryHistory(),
    routes: [{ path: '/', component: { render: () => null } }]
  })
  // iframe 路径非注册路由，spy 掉 push 避免实际导航
  const push = vi.spyOn(router, 'push').mockResolvedValue(undefined)
  const close = vi.fn()
  const refresh = vi.fn()
  const { result: f } = withSetup(() => useIframe({ basePath }, { close, refresh } as any), router)
  return { f, router, push, close, refresh }
}

describe('useIframe', () => {
  it('getIframePath 编码 src', () => {
    const { f } = makeIframe('/app')
    expect(f.getIframePath('https://a.com/x?y=1')).toBe(
      '/app/iframe/' + encodeURIComponent('https://a.com/x?y=1')
    )
  })

  it('getIframePath 附加 title/icon', () => {
    const { f } = makeIframe('/app')
    expect(f.getIframePath('https://a.com', '标题', 'icon-x')).toBe(
      '/app/iframe/' + encodeURIComponent('https://a.com') + '/标题/icon-x'
    )
  })

  it('openIframe 走 router.push', () => {
    const { f, push } = makeIframe('/app')
    f.openIframe('https://a.com', 'T')
    expect(push).toHaveBeenCalled()
  })

  it('closeIframe 走 close({path, match:false})', () => {
    const { f, close } = makeIframe('/app')
    f.closeIframe('https://a.com')
    expect(close).toHaveBeenCalledWith({ path: f.getIframePath('https://a.com'), match: false })
  })

  it('refreshIframe 走 refresh(path, false)', () => {
    const { f, refresh } = makeIframe('/app')
    f.refreshIframe('https://a.com')
    expect(refresh).toHaveBeenCalledWith(f.getIframePath('https://a.com'), false)
  })
})
