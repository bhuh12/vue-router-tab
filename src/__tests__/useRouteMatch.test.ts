import { describe, it, expect } from 'vitest'
import { defineComponent, h, nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { createRouter, createMemoryHistory } from 'vue-router'
import { useRouteMatch } from '../composables/useRouteMatch'
import { rules } from '../config/rules'
import { prunePath } from '../util'

function mountWith(routes: any[]) {
  const router = createRouter({ history: createMemoryHistory(), routes })
  const captured: { match?: any } = {}
  const Probe = defineComponent({
    setup() {
      captured.match = useRouteMatch({ keepAlive: true, reuse: false })
      return () => h('div')
    }
  })
  const wrapper = mount(Probe, { global: { plugins: [router] } })
  return { router, captured, wrapper }
}

describe('rules & prunePath', () => {
  it('prunePath 只去掉 hash、保留 query（对齐 v1，replace 分支依赖 query）', () => {
    expect(prunePath('/a?x=1#h')).toBe('/a?x=1')
    expect(prunePath('/a#h')).toBe('/a')
    expect(prunePath('/a')).toBe('/a')
  })
  it('rules.path 返回 route.path', () => {
    expect(rules.path({ path: '/u/1', fullPath: '/u/1?a=1' } as any)).toBe('/u/1')
  })
  it('rules.fullpath 返回 fullPath', () => {
    expect(rules.fullpath({ path: '/u/1', fullPath: '/u/1?a=1' } as any)).toBe('/u/1?a=1')
  })
})

describe('useRouteMatch', () => {
  const routes = [
    { path: '/', component: { render: () => h('div') }, meta: { routerTab: { keepAlive: true } } },
    {
      path: '/user/:id',
      component: { render: () => h('div') },
      meta: { routerTab: { keepAlive: true, key: (r: any) => `/user/${r.params.id}` } }
    }
  ]

  it('顶层 routeIndex 为 0', async () => {
    const { router, captured } = mountWith(routes)
    await router.push('/')
    await nextTick()
    expect(captured.match.routeIndex).toBe(0)
  })

  it('meta.key 函数决定 key', async () => {
    const { router, captured } = mountWith(routes)
    await router.push('/user/1')
    await nextTick()
    expect(captured.match.key).toBe('/user/1')
    expect(captured.match.alive).toBe(true)
  })

  it('meta.keepAlive 覆盖入参默认值', async () => {
    const r2 = [
      {
        path: '/',
        component: { render: () => h('div') },
        meta: { routerTab: { keepAlive: false } }
      }
    ]
    const { router, captured } = mountWith(r2)
    await router.push('/')
    await nextTick()
    expect(captured.match.alive).toBe(false)
  })
})
