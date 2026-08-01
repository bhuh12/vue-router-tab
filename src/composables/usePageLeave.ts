import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import type { Router, RouteLocationNormalizedLoaded } from 'vue-router'
import type { PageLeaveType } from '../types'
import type { RouterTabState } from './useState'
import type { TabsState } from './useTabs'

/** 已装守卫标记（挂 router 上避免重复注册） */
const GUARD_FLAG = '_RouterTabGuardInstalled'

/** 页面离开确认（拓扑起点，只依赖根状态） */
export function usePageLeave(
  /** 根状态 */
  state: RouterTabState
) {
  /** 页面离开 Promise：从 registry 取该页 beforePageLeave 执行 */
  async function leavePage(
    /** 页签 id（= route key） */
    id: string,
    /** 离开类型 */
    type: PageLeaveType
  ) {
    const tab = state.items.find((t) => t.id === id)
    const beforePageLeave = state.pages.get(id)?.beforePageLeave
    if (!tab || typeof beforePageLeave !== 'function') return

    // 返回字符串或 reject 则阻止离开
    return beforePageLeave(tab, type)
  }

  return reactive({
    /** 页面离开确认（返回字符串或 reject 则阻止） */
    leavePage
  })
}

/**
 * 注册路由离开守卫（RouterTab 挂载时调一次）。
 * 对齐 v1 leaveGuard 三分支：页签地址被替换 / 离开页签组件 / 未缓存离开。
 */
export function installGuard(
  /** 根状态 */
  state: RouterTabState,
  /** 基础配置 */
  options: {
    /** 根路径（判定是否离开页签组件范围） */
    basePath: string
  },
  /** 页签原语（getRouteKey/matchRoute） */
  tabs: TabsState,
  /** 页面离开确认（leavePage） */
  pageLeave: PageLeaveState
): void {
  const router = useRouter() as Router & { [GUARD_FLAG]?: boolean }
  if (router[GUARD_FLAG]) return
  router[GUARD_FLAG] = true

  router.beforeEach(async (to, from, next) => {
    if (!state.$alive) return next()

    const fromId = tabs.getRouteKey(from as RouteLocationNormalizedLoaded)
    const toId = tabs.getRouteKey(to as RouteLocationNormalizedLoaded)
    const toInfo = tabs.matchRoute(to as RouteLocationNormalizedLoaded)
    const fromCached = (state.$alive?.aliveKeys ?? []).includes(fromId)

    // 目标页签已缓存的 alivePath：与目标路由的 alivePath 不一致说明该页签地址被替换
    const toAlivePath = state.$alive.alivePathOf?.(toId)

    let id: string | undefined
    let type: PageLeaveType | undefined

    // 页签地址被替换：to 已有缓存但缓存路由与目标不一致
    if (toAlivePath && toAlivePath !== toInfo.alivePath) {
      type = 'replace'
      id = toId
    } else if (options.basePath !== toInfo.basePath) {
      // 离开页签组件：to 不在当前页签组件路由下
      type = 'leave'
      id = state.activeTabId
    } else if (!fromCached && fromId !== toId) {
      // 当前组件未缓存时离开页签
      type = 'leave'
      id = state.activeTabId
    }

    if (!type || !id) return next()

    try {
      // 对齐 v1：beforePageLeave 的返回值直接交给 next
      // （false 中止 / location 跳转 / undefined 放行），不强制转 false
      const res = await pageLeave.leavePage(id, type)
      next(res)
    } catch {
      next(false)
    }
  })
}

/** PageLeaveState：由 usePageLeave 返回值自动推导，避免手写 interface 与实现漂移 */
export type PageLeaveState = ReturnType<typeof usePageLeave>
