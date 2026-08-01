import {
  watch,
  onMounted,
  onUnmounted,
  onActivated,
  onDeactivated,
  getCurrentInstance,
  nextTick,
  isRef,
  type Ref,
  type ComputedRef
} from 'vue'
import type { PageHooks, Tab, RouterTabInternal } from '../types'
import { useRouterTab } from './useRouterTab'
import { normalizeScrollers, resolveScroller } from '../util'

/** routeTab 动态标题：字符串视为 title，对象合并进当前 tab */
export type RouteTabInput = string | Partial<Tab>

/**
 * 页面组件 setup 内调用：注册页面钩子到 RouterTab registry，并接管页面滚动位置记忆。
 * 返回 restoreScroll 供页面异步加载数据后自行还原滚动位置（v1 @page-loaded 等价物）。
 */
export function useRouterPage(
  /** 页面钩子与滚动配置 */
  options: {
    /** 页签关闭/刷新/卸载前确认 */
    beforePageLeave?: PageHooks['beforePageLeave']

    /** 动态更新当前页签信息（响应式） */
    routeTab?: Ref<RouteTabInput> | ComputedRef<RouteTabInput> | RouteTabInput

    /** 页面级滚动容器选择器（字符串支持逗号分隔），失活保存、激活还原 */
    pageScroller?: string | string[]
  } = {}
) {
  // 页面侧需访问内部 pages registry，故取 Internal（registry 存的即 Internal 实例）
  const $tabs = useRouterTab() as RouterTabInternal
  // 注册 id 用当前激活页签 id（对齐 v1 routerPage）：
  // getRouteKey(route) 在嵌套路由下按 RouterTab 层 routeIndex 求值，可能与 tab id 不一致，
  // 导致 leavePage(id) 查不到该页回调、beforePageLeave 静默失效。
  const id = $tabs.activeTabId

  $tabs.pages.set(id, { beforePageLeave: options.beforePageLeave })

  /** 更新当前页签信息（id/to 不可改） */
  function updateTab(info: RouteTabInput) {
    const patch = typeof info === 'string' ? { title: info } : info
    const active = $tabs.activeTab
    if (!patch || !active) return
    for (const k in patch) {
      if (k !== 'id' && k !== 'to') (active as any)[k] = (patch as any)[k]
    }
  }

  // 监听 routeTab 变化更新页签
  if (options.routeTab != null) {
    if (isRef(options.routeTab)) {
      watch(options.routeTab, (val) => updateTab(val), { immediate: true, deep: true })
    } else {
      updateTab(options.routeTab)
    }
  }

  // beforeunload：浏览器关闭/刷新时确认
  let onBeforeUnload: ((e: BeforeUnloadEvent) => string | void) | null = null
  if (typeof options.beforePageLeave === 'function') {
    onBeforeUnload = (e) => {
      const tab = $tabs.items.find((t) => t.id === id)
      const msg = options.beforePageLeave!(tab, 'unload')
      if (msg && typeof msg === 'string') {
        e.preventDefault()
        e.returnValue = msg
        return msg
      }
    }
    onMounted(() => window.addEventListener('beforeunload', onBeforeUnload!))
  }

  // 卸载时注销 registry 与事件
  onUnmounted(() => {
    if ($tabs.pages.get(id)?.beforePageLeave === options.beforePageLeave) $tabs.pages.delete(id)
    if (onBeforeUnload) window.removeEventListener('beforeunload', onBeforeUnload)
  })

  // ---- 滚动位置记忆 ----
  const vm = getCurrentInstance()
  // 页面级选择器 + frame 级（$tabs.pageScroller 加 $ 前缀当外部选择器）
  const frameScroller = $tabs.pageScroller
  const selectors = [
    ...normalizeScrollers(options.pageScroller),
    ...(frameScroller ? ['$' + frameScroller] : [])
  ]
  // selector → { left, top }，随页面实例缓存于 setup 闭包（KeepAlive 缓存时天然持久）
  let position: Record<string, { left: number; top: number }> = {}

  /** 取页面根元素；可能是文本/Fragment 节点，非 HTMLElement 则回退 null */
  function pageRoot() {
    const el = vm?.vnode.el
    return el instanceof HTMLElement ? el : null
  }

  /** 收集全部滚动容器：配置的选择器 + 页面根元素自身兜底 */
  function scrollers() {
    const root = pageRoot()
    const list = selectors.map((s) => [s, resolveScroller(s, root)] as const)
    if (root) list.push(['', root])
    return list
  }

  function saveScroll() {
    position = {}
    for (const [key, el] of scrollers()) {
      if (el) position[key] = { left: el.scrollLeft, top: el.scrollTop }
    }
  }

  function restoreScroll() {
    for (const [key, el] of scrollers()) {
      const pos = position[key]
      if (!el || !pos) continue

      el.scrollLeft = pos.left
      el.scrollTop = pos.top
    }
  }

  onDeactivated(saveScroll)
  onActivated(restoreScroll)

  // 新页面挂载：frame 级外部容器重置到顶部（对齐 v1 resetScrollPosition）
  onMounted(() => {
    const root = pageRoot()
    for (const s of selectors) {
      if (!s.startsWith('$')) continue
      const el = resolveScroller(s, root)
      if (!el) continue

      el.scrollLeft = 0
      el.scrollTop = 0
    }
  })

  return {
    restoreScroll: async () => {
      await nextTick()
      restoreScroll()
    }
  }
}
