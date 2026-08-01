import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import type { RouteLocationNormalizedLoaded, RouteLocationRaw } from 'vue-router'
import type { Tab, PresetTab, RouterTabProps } from '../types'
import type { RouterTabState } from './useState'
import type { PageLeaveState } from './usePageLeave'
import type { I18nState } from './useI18n'
import type { RouteMatch, RouteMatchInfo } from './useRouteMatch'
import { matchRoute } from './useRouteMatch'
import { isLastKeptTab, prunePath } from '../util'

/** 从 meta.routerTab 取的页签属性字段（可函数化的先求值） */
const TAB_PROPS = ['title', 'tips', 'icon', 'closable', 'tabClass', 'href', 'target'] as const
/** 需按当前路由求值的函数字段 */
const FN_PROPS = ['title', 'tips', 'icon', 'closable', 'tabClass'] as const

/** 页签原语 */
export function useTabs(
  /** 根状态 */
  state: RouterTabState,
  /** RouterTab props（keepLastTab/append） */
  props: Pick<RouterTabProps, 'keepLastTab' | 'append'>,
  /** 国际化（页签标题翻译） */
  i18n: I18nState,
  /** 页面离开确认（removeTab 用） */
  pageLeave: PageLeaveState
) {
  const router = useRouter()

  /** 上次同步的 key（append=next 插入定位用） */
  let lastKey: string | undefined

  /**
   * 解析路由并跟随 redirect。
   * vue-router 4/5 的 resolve() 不跟随 redirect（v1 的 $router.match 会），
   * 父路由带 redirect 时 matched 只有父层一级，取 matched[routeIndex] 得 undefined、
   * key 退化成空串 —— defaultPage/basePath 恰是这类地址，会让页签匹配整体失准。
   */
  function resolveFollow(to: RouteLocationRaw): RouteLocationNormalizedLoaded {
    let resolved = router.resolve(to) as RouteLocationNormalizedLoaded

    // redirect 可能链式，限次数防配置成环时死循环
    for (let i = 0; i < 10; i++) {
      const last = resolved.matched[resolved.matched.length - 1]
      const rd = last?.redirect
      if (!rd) break

      // vue-router 5 的 redirect 函数签名为 (to, from)
      const target = typeof rd === 'function' ? rd(resolved, router.currentRoute.value) : rd
      if (!target) break

      resolved = router.resolve(target as RouteLocationRaw) as RouteLocationNormalizedLoaded
    }

    return resolved
  }

  /** 对任意路由计算匹配信息（默认取当前层级 routeIndex） */
  function matchRouteInfo(route: RouteLocationRaw | RouteLocationNormalizedLoaded): RouteMatchInfo {
    const resolved =
      typeof route === 'object' && 'matched' in route
        ? (route as RouteLocationNormalizedLoaded)
        : resolveFollow(route as RouteLocationRaw)
    // $alive 未就绪时退化为默认匹配（调用方均在 ready 后触发，此处仅为类型兜底）
    const rm = state.$alive?.routeMatch
    return matchRoute(resolved as RouteLocationNormalizedLoaded, {
      keepAlive: rm?.alive ?? true,
      reuse: rm?.reusable ?? false,
      routeIndex: rm?.routeIndex
    })
  }

  /** 获取路由缓存 key */
  function getRouteKey(
    route: RouteLocationRaw | RouteLocationNormalizedLoaded = router.currentRoute.value
  ): string {
    return matchRouteInfo(route).key
  }

  /** 从 route + 匹配信息生成 tab，只读 meta.routerTab 并解析函数字段 */
  function getRouteTab(info: RouteMatchInfo, route: RouteLocationNormalizedLoaded): Tab {
    const rt: Record<string, any> = info.meta.routerTab ?? {}
    const tab: Record<string, any> = {}

    // 只取 routerTab 声明的页签字段，函数字段按当前路由求值
    for (const prop of TAB_PROPS) {
      const val = rt[prop]
      tab[prop] =
        (FN_PROPS as readonly string[]).includes(prop) && typeof val === 'function'
          ? val(route)
          : val
    }

    // closable 只存静态可关性；"仅剩1个不可关"由 TabItem 动态判定
    return Object.assign(tab, {
      id: info.key,
      to: route.fullPath,
      closable: tab.closable !== false
    }) as Tab
  }

  /** 从路由地址匹配页签 id（match 时优先精确匹配已存在页签） */
  function getIdByPath(path: RouteLocationRaw, match = true): string | undefined {
    if (!path) return
    // 跟随 redirect 后再比对：defaultPage 之类的父路由地址否则匹配不到已开页签
    const resolved = resolveFollow(path)
    if (match) {
      const hit = state.items.find((t) => prunePath(t.to) === prunePath(resolved.fullPath))
      if (hit) return hit.id
    }
    return matchRouteInfo(resolved).key
  }

  /** 预设页签（按 id 去重） */
  function presetTabs(tabs: PresetTab[] = []) {
    const seen: Record<string, boolean> = {}

    state.items = tabs
      .map((item) => {
        const raw = typeof item === 'string' ? { to: item } : item
        if (!raw || !raw.to) return undefined

        // 跟随 redirect：预设项写父路由地址时否则 key 为空串、页签建不出来
        const resolved = resolveFollow(raw.to)
        const info = matchRouteInfo(resolved)
        const id = info.key
        if (seen[id]) return undefined
        seen[id] = true

        const tab = getRouteTab(info, resolved as RouteLocationNormalizedLoaded)
        // 用户预设字段覆盖（id 不允许改）
        const { id: _drop, ...rest } = raw as Tab
        return Object.assign(tab, rest, { id }) as Tab
      })
      .filter((t): t is Tab => !!t)
  }

  /** 初始页签：restore 优先，否则预设 */
  function initTabs(preset: PresetTab[] = [], restoreTabs?: () => boolean) {
    if (restoreTabs && restoreTabs()) return
    presetTabs(preset)
  }

  /** 移除页签（keepLastTab 校验 + leavePage + evict + splice） */
  async function removeTab(id: string, force = false) {
    const idx = state.items.findIndex((t) => t.id === id)

    // 仅剩 1 个页签且未强制时不允许关闭
    if (!force && isLastKeptTab(props.keepLastTab, state.items.length)) {
      throw new Error(i18n.langs.msg.keepLastTab)
    }

    if (!force) await pageLeave.leavePage(id, 'close')

    state.$alive?.evict(id)
    if (idx > -1) state.items.splice(idx, 1)
  }

  /** RouterAlive change 时同步页签 */
  function syncFromAlive(
    _type: 'create' | 'update',
    match: RouteMatch,
    route: RouteLocationNormalizedLoaded = router.currentRoute.value
  ) {
    const id = match.key
    if (!id) return
    state.activeTabId = id

    // RouteMatch 已扁平，补 basePath 占位组成 RouteMatchInfo
    const info: RouteMatchInfo = {
      routeIndex: match.routeIndex,
      key: id,
      alive: match.alive,
      reusable: match.reusable,
      nest: match.nest,
      meta: match.meta,
      alivePath: match.alivePath,
      basePath: ''
    }
    const tab = getRouteTab(info, route)
    const existing = state.items.find((t) => t.id === id)

    if (existing) {
      // ponytail: update 直接覆盖全字段，用户运行时改的属性会被路由同步重置；需保留时改选择性合并
      Object.assign(existing, tab)
    } else if (props.append === 'next' && lastKey !== undefined) {
      // next 插入策略：插到上次页签后一位
      const at = state.items.findIndex((t) => t.id === lastKey)
      state.items.splice(at + 1, 0, tab)
    } else {
      state.items.push(tab)
    }

    lastKey = id
  }

  return reactive({
    /** 对任意路由计算匹配信息 */
    matchRoute: matchRouteInfo,

    /** 取路由缓存 key */
    getRouteKey,

    /** 由匹配信息生成页签数据 */
    getRouteTab,

    /** 按路径查已开页签 id */
    getIdByPath,

    /** 预设页签（按 id 去重） */
    presetTabs,

    /** 初始页签：restore 优先，否则预设 */
    initTabs,

    /** 移除页签（keepLastTab 校验 + leavePage + evict） */
    removeTab,

    /** 同步 RouterAlive 匹配结果到页签 */
    syncFromAlive
  })
}

/** TabsState：由 useTabs 返回值自动推导，避免手写 interface 与实现漂移 */
export type TabsState = ReturnType<typeof useTabs>
