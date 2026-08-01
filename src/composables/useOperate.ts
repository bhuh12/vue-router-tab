import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import type { RouteLocationRaw } from 'vue-router'
import type { CloseArg, OpenArg } from '../types'
import type { RouterTabState } from './useState'
import type { TabsState } from './useTabs'
import type { PageLeaveState } from './usePageLeave'
import type { RestoreState } from './useRestore'
import { warn } from '../util/warn'

/** 是否为非 location 形态的配置对象（close/open 对象式参数判定） */
function isConfigObject(arg: any): boolean {
  return (
    arg &&
    typeof arg === 'object' &&
    !arg.name &&
    !arg.fullPath &&
    !arg.params &&
    !arg.query &&
    !arg.hash
  )
}

/** 解析 close 参数：对象式 {id,path,...} 或 (path, to) 式 */
function getCloseArgs(args: any[]): CloseArg {
  const arg = args[0]
  if (!args.length) return {}

  // 对象参数：非路由 location 形态
  if (isConfigObject(arg)) return arg as CloseArg

  // (path, to) 式
  const [path, to] = args
  return { path, to }
}

/** 命令式 API */
export function useOperate(
  /** 根状态 */
  state: RouterTabState,
  /** 基础配置 */
  options: {
    /** 默认跳转地址（defaultPage prop 或 basePath） */
    defaultPath: RouteLocationRaw

    /** 初始页签（restore 优先，含 props.tabs） */
    initTabs: () => void
  },
  /** 页签原语（getRouteKey/getIdByPath/removeTab） */
  tabs: TabsState,
  /** 页面离开确认 */
  pageLeave: PageLeaveState,
  /** 恢复存储（clearTabsStore） */
  restore: RestoreState
) {
  const router = useRouter()

  /**
   * 打开页签（默认全新打开）。
   * 支持位置参 open(path, isReplace?, refresh?) 与对象式 open({ to, replace?, refresh?, isSameTab? })。
   */
  async function open(
    arg: RouteLocationRaw | OpenArg,
    isReplace = false,
    refresh: boolean | 'sameTab' = true
  ) {
    let path: RouteLocationRaw

    // 对象式：含 to 字段的非 location 配置对象 → 命名字段替代位置参
    if (isConfigObject(arg) && 'to' in (arg as OpenArg)) {
      const o = arg as OpenArg
      path = o.to
      isReplace = o.replace ?? false
      // isSameTab 等价原 refresh:'sameTab'，否则用 refresh（默认 true）
      refresh = o.isSameTab ? 'sameTab' : (o.refresh ?? true)
    } else {
      path = arg as RouteLocationRaw
    }

    // key 是缓存标识而非路径，直接全等比较（曾用 equalPath 忽略尾斜杠，自定义 key 'user/' 与 'user' 会误判同页签）
    const isSameTab = state.activeTabId === tabs.getRouteKey(path)

    // 'sameTab' 仅同页签时才全新打开
    if (refresh === 'sameTab') refresh = isSameTab
    if (refresh) refreshFn(path, false)

    try {
      await router[isReplace ? 'replace' : 'push'](path)
    } catch {
      // 导航被取消（重复导航等）忽略
    } finally {
      if (isSameTab) reload()
    }
  }

  /** 关闭页签，支持 close({...}) 与 close(path, to) */
  async function close(...args: any[]) {
    const { id: argId, path, match = true, force = true, to, refresh = false } = getCloseArgs(args)

    let id = argId
    if (!id && path) {
      id = tabs.getIdByPath(path, match)
      if (!id) return
    }
    if (!id) id = state.activeTabId

    try {
      const idx = state.items.findIndex((t) => t.id === id)
      await tabs.removeTab(id, force)

      if (to === null) return

      // 关闭当前页签则打开后一个
      let target = to
      if (!target && state.activeTabId === id) {
        const nextTab = state.items[idx] || state.items[idx - 1]
        target = nextTab ? nextTab.to : options.defaultPath
      }

      // 必须 await：否则 close() 返回时路由尚未跳转，调用方读 currentRoute 拿到旧值
      if (target) await open(target, true, refresh === false ? 'sameTab' : true)
    } catch (e) {
      warn(false, String(e))
    }
  }

  /** 通过 id 关闭页签 */
  async function closeTab(
    id: string = state.activeTabId,
    to?: RouteLocationRaw | null,
    force = false
  ) {
    return close({ id, to, force })
  }

  /** 通过路由地址刷新页签 */
  function refreshFn(path?: RouteLocationRaw, match = true, force = true) {
    const id = (path && tabs.getIdByPath(path, match)) || undefined
    refreshTab(id, force)
  }

  /** 刷新指定页签 */
  async function refreshTab(id: string = state.activeTabId, force = false) {
    try {
      if (!force) await pageLeave.leavePage(id, 'refresh')
      state.$alive?.refresh(id)
    } catch (e) {
      warn(false, String(e))
    }
  }

  /** 刷新所有页签 */
  async function refreshAll(force = false) {
    for (const id of state.$alive?.aliveKeys ?? []) {
      try {
        if (!force) await pageLeave.leavePage(id, 'refresh')
        state.$alive?.refresh(id)
      } catch {
        // 单页阻止刷新不影响其余
      }
    }
  }

  /** 重置到默认状态：清缓存 + 清恢复存储 + 重建初始页签 + 跳默认页 */
  function reset(to: RouteLocationRaw = options.defaultPath) {
    state.items.forEach(({ id }) => state.$alive?.evict(id))
    restore.clearTabsStore()
    options.initTabs()
    open(to, true, true)
  }

  /** 重载当前路由视图 */
  function reload() {
    state.$alive?.refresh(state.activeTabId)
  }

  return reactive({
    /** 打开页签（支持 (path, replace?, refresh?) 与对象式重载） */
    open,

    /** 关闭页签（支持对象式与 (path, to) 式参数） */
    close,

    /** 按 id 关闭页签 */
    closeTab,

    /** 按路径刷新页签 */
    refresh: refreshFn,

    /** 按 id 刷新页签 */
    refreshTab,

    /** 刷新全部缓存页 */
    refreshAll,

    /** 重置页签到初始状态 */
    reset,

    /** 刷新当前页 */
    reload
  })
}

/** OperateState：由 useOperate 返回值自动推导，避免手写 interface 与实现漂移 */
export type OperateState = ReturnType<typeof useOperate>
