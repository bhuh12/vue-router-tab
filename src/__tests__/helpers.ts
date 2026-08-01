import { defineComponent, h } from 'vue'
import { mount } from '@vue/test-utils'
import type { Router } from 'vue-router'

/**
 * 在带 router 的组件 setup 上下文里运行 fn 并返回其结果。
 * 供内部调用 useRouter()/useRoute() 的 composable 在单测中获得上下文。
 * 返回 result（composable 返回值）与 wrapper（供 unmount 触发 scope 清理）。
 */
export function withSetup<T>(
  /** setup 内执行的 composable 工厂 */
  fn: () => T,
  /** 注入的路由实例（提供 useRouter 上下文） */
  router: Router
) {
  let result!: T
  const Comp = defineComponent({
    setup() {
      result = fn()
      return () => h('div')
    }
  })
  const wrapper = mount(Comp, { global: { plugins: [router] } })
  return { result, wrapper }
}
