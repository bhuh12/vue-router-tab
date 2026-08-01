import type { TransitionProps } from 'vue'
import type { RouteLocationRaw, RouteLocationNormalizedLoaded } from 'vue-router'
import type { RouteMatch } from './composables/useRouteMatch'
import type { BuiltinMenuId } from './config/contextmenu'

/** 可按当前路由动态求值的 meta 字段（静态值或函数） */
type MetaValue<T> = T | ((route: RouteLocationNormalizedLoaded) => T)

/**
 * RouterTab 路由配置（挂在 route.meta.routerTab 下，不再用扁平 meta）。
 * 可函数化字段接收当前路由、返回对应值。
 */
export interface RouterTabMeta {
  /** 页签标题 */
  title?: MetaValue<string>
  /** 页签悬浮提示 */
  tips?: MetaValue<string>
  /** 页签图标 */
  icon?: MetaValue<string>
  /** 是否可关闭（静态可关性；"仅剩1个不可关"由 TabItem 动态判定） */
  closable?: MetaValue<boolean>
  /** 自定义页签 class */
  tabClass?: MetaValue<string | string[] | Record<string, boolean>>
  /** 缓存标识 key（内置规则名 / 自定义字符串 / 函数） */
  key?: MetaValue<string>
  /** 是否缓存该页 */
  keepAlive?: boolean
  /** 是否可复用（同 key 复用一份缓存） */
  reuse?: boolean
  /** 链接 href */
  href?: string
  /** 链接 target */
  target?: string
}

declare module 'vue-router' {
  interface RouteMeta {
    routerTab?: RouterTabMeta
  }
}

/** 单个页签数据 */
export interface Tab {
  /** 唯一标识，取自路由匹配的 key */
  id: string
  /** 页签对应的目标路径 */
  to: string
  /** 页签标题 */
  title?: string
  /** 页签悬浮提示 */
  tips?: string
  /** 页签图标 */
  icon?: string
  /** 是否可关闭（静态可关性；"仅剩1个不可关"由 TabItem 动态判定） */
  closable?: boolean
  /** 自定义页签 class */
  tabClass?: string | string[] | Record<string, boolean>
  /** 链接 target */
  target?: string
  /** 链接 href */
  href?: string
}

/**
 * 预设页签输入（tabs prop 项）：路径字符串，或 Tab 的部分字段。
 * to 放宽为 RouteLocationRaw，支持 location 对象写法（presetTabs 内会 resolve）。
 */
export type PresetTab = string | (Partial<Omit<Tab, 'to'>> & { to: RouteLocationRaw })

/** 页面离开类型 */
export type PageLeaveType = 'close' | 'refresh' | 'leave' | 'replace' | 'unload'

/** RouterAlive 组件对外暴露的实例（RouterTab 通过 $alive 消费） */
export interface RouterAliveExpose {
  /** 驱逐指定缓存 key */
  evict: (...keys: string[]) => void
  /** 刷新缓存（默认当前 key） */
  refresh: (k?: string) => void
  /** 取指定 key 已缓存的 alivePath（未缓存返回 undefined） */
  alivePathOf: (k: string) => string | undefined
  /** 当前存活的缓存 key 列表（defineExpose 会解包 ref，故此处为裸数组） */
  aliveKeys: string[]
  /** 当前路由匹配信息 */
  routeMatch: RouteMatch
}

/** 页面侧钩子（useRouterPage 注册进 registry） */
export interface PageHooks {
  /** 页签关闭/刷新/卸载前确认，返回字符串则阻止 */
  beforePageLeave?: (tab: Tab | undefined, type: PageLeaveType) => any
}

/** close 的对象参数形态 */
export interface CloseArg {
  /** 目标页签 id（缺省用当前激活页签） */
  id?: string

  /** 按路径定位页签（与 id 二选一） */
  path?: RouteLocationRaw

  /** path 是否模糊匹配（默认精确匹配） */
  match?: boolean

  /** 是否跳过 beforePageLeave 强制关闭 */
  force?: boolean

  /** 关闭后跳转地址（null 表示不跳转） */
  to?: RouteLocationRaw | null

  /** 跳转后是否刷新目标页 */
  refresh?: boolean
}

/** 右键菜单项 handler/enable 的入参 */
export interface ContextmenuContext {
  /** RouterTab 实例 */
  $tabs: RouterTabInstance
  /** 右键定位数据（含选中页签 id） */
  data: ContextmenuData
  /** 右键选中的页签 */
  target?: Tab
  /** 选中项左侧可关闭页签 */
  lefts: Tab[]
  /** 选中项右侧可关闭页签 */
  rights: Tab[]
  /** 除选中项外可关闭页签 */
  others: Tab[]
  /** 关闭多个页签 */
  closeMulti: (tabs: Tab[]) => Promise<void>
}

/** 右键菜单项配置 */
export interface ContextmenuItemConfig {
  /** 菜单项 id（内置项文案的 key） */
  id?: string
  /** 菜单标题：优先于内置文案，支持函数（入参 context，如状态项动态文案） */
  title?: string | ((ctx: ContextmenuContext) => string)
  /** 菜单图标 class：支持函数（入参 context，如状态项动态图标） */
  icon?: string | ((ctx: ContextmenuContext) => string)
  /** 悬浮提示 */
  tips?: string

  /** 自定义 class */
  class?: string
  /** 是否显示，默认 true */
  visible?: boolean | ((ctx: ContextmenuContext) => boolean)
  /** 是否启用，默认 true */
  enable?: boolean | ((ctx: ContextmenuContext) => boolean)
  /** 点击处理 */
  handler?: (ctx: ContextmenuContext) => void
}

/** 右键菜单定位数据 */
export interface ContextmenuData {
  /** 右键选中的页签 id */
  id: string | null
  /** 页签索引 */
  index: number
  /** 菜单相对视口的 X 坐标 */
  left: number

  /** 菜单相对视口的 Y 坐标 */
  top: number
}

/** open 对象式参数（命名字段替代位置参与 'sameTab' 魔术串） */
export interface OpenArg {
  /** 目标路径 */
  to: RouteLocationRaw
  /** 是否用 replace 导航 */
  replace?: boolean
  /** 是否刷新（等价原位置参 refresh） */
  refresh?: boolean
  /** 同页签时刷新（等价原 refresh:'sameTab'） */
  isSameTab?: boolean
}

/** 命令式 open 重载：位置参（向后兼容）与对象式 */
export interface OpenFn {
  (path: RouteLocationRaw, isReplace?: boolean, refresh?: boolean | 'sameTab'): Promise<void>
  (arg: OpenArg): Promise<void>
}

/**
 * RouterTab 对外公开实例（= v1 $tabs 用户面等价物）。
 * useRouterTab() 返回此类型。
 */
export interface RouterTabPublic {
  /** 全部页签 */
  items: Tab[]
  /** 当前激活页签 id */
  activeTabId: string
  /** 当前激活页签 */
  activeTab: Tab | undefined

  /** 语言文案 */
  langs: Record<string, any>
  /** 国际化取文本 */
  i18nText: (text: unknown) => string

  /** 根路径 */
  basePath: string

  /** 打开页签（支持 (path, replace?, refresh?) 与对象式重载） */
  open: OpenFn

  /** 关闭页签（支持对象式与 (path, to) 式参数，缺省关当前页） */
  close: (arg?: CloseArg | RouteLocationRaw, to?: RouteLocationRaw) => Promise<void>

  /** 按 id 关闭页签（force 跳过 beforePageLeave） */
  closeTab: (id?: string, to?: RouteLocationRaw | null, force?: boolean) => Promise<void>

  /** 按路径刷新页签（match 模糊匹配） */
  refresh: (path?: RouteLocationRaw, match?: boolean, force?: boolean) => void

  /** 按 id 刷新页签（缺省刷新当前页） */
  refreshTab: (id?: string, force?: boolean) => Promise<void>

  /** 刷新全部缓存页 */
  refreshAll: (force?: boolean) => Promise<void>

  /** 重置页签到初始状态（清存储 + 重新初始化） */
  reset: (to?: RouteLocationRaw) => void

  /** 刷新当前页 */
  reload: () => void

  /** 已挂载的 iframe url 列表 */
  iframes: string[]

  /** 当前显示的 iframe url */
  currentIframe: string | null

  /** 打开 iframe 页签 */
  openIframe: (src: string, title?: string, icon?: string) => void

  /** 关闭 iframe 页签 */
  closeIframe: (src: string) => Promise<void>

  /** 刷新 iframe 页签 */
  refreshIframe: (src: string) => void

  /** 右键菜单定位数据 */
  contextData: ContextmenuData

  /** 显示页签右键菜单 */
  showContextmenu: (id: string | null, index: number, e?: MouseEvent) => void

  /** 关闭右键菜单 */
  hideContextmenu: () => void

  /** 主动重算页签滚动，保证激活页签可见（如全屏切换后调用） */
  adjust: () => void
}

/**
 * RouterTab 内部实例（在公开实例上追加内部字段）。
 * 也是内部模板子组件 :tabs prop 的类型，由 RouterTab.vue setup 聚合各 composable 产出而成。
 */
export interface RouterTabInternal extends RouterTabPublic {
  /** RouterAlive expose 的实例（ready 前为 null） */
  $alive: RouterAliveExpose | null

  /** 页面钩子 registry：route key → hooks */
  pages: Map<string, PageHooks>

  /** 移除页签（keepLastTab 校验 + leavePage + evict，不含跳转） */
  removeTab: (id: string, force?: boolean) => Promise<void>

  /** 取路由缓存 key（缺省用当前路由） */
  getRouteKey: (route?: RouteLocationRaw | RouteLocationNormalizedLoaded) => string

  /** 按路径查已开页签 id（match 模糊匹配） */
  getIdByPath: (path: RouteLocationRaw, match?: boolean) => string | undefined

  /** 拖拽排序标志（TabItem/TabScroll 共享） */
  onDragSort: boolean

  /** 重新加载已挂载的 iframe 节点（Iframe 页面挂载时调用） */
  reloadIframe: (url: string) => void

  /** 仅剩一个页签时禁止关闭（props 镜像，TabItem 与内置菜单项读取） */
  keepLastTab: boolean

  /** 是否支持页签拖拽排序（props 镜像，TabItem 读取） */
  dragsort: boolean

  /** 页面外部滚动容器选择器（frame 级 props 镜像，useRouterPage 用于滚动位置记忆） */
  pageScroller: string
}

/** 兼容别名：现有内部引用聚合的是全字段实例 */
export type RouterTabInstance = RouterTabInternal

/**
 * RouterTab 组件 props（**单一来源**）。
 * 此处为 withDefaults 之后的形态（有默认值的字段为必填），
 * composable 用 `Pick<RouterTabProps, ...>` 取所需字段并直传 props，避免逐字段 getter 转发。
 * 组件声明处用 `RouterTabPropsInput` 还原可选性。
 */
export interface RouterTabProps {
  /** 初始页签（路径字符串或页签对象） */
  tabs: PresetTab[]
  /** 是否恢复页签（true 或作为存储 key 后缀的字符串） */
  restore: boolean | string
  /** 是否监听 restoreKey 变化自动还原 */
  restoreWatch: boolean
  /** 新页签插入位置：末尾 / 当前页签之后 */
  append: 'last' | 'next'
  /** 仅剩一个页签时禁止关闭 */
  keepLastTab: boolean
  /** 是否支持页签拖拽排序 */
  dragsort: boolean
  /** 是否缓存页面 */
  keepAlive: boolean
  /** 最大缓存页数（0 为不限制） */
  maxAlive: number
  /** 同 key 是否复用一份缓存 */
  reuse: boolean
  /** 页签过渡效果 */
  tabTransition: string | TransitionProps
  /** 页面过渡效果 */
  pageTransition: string | TransitionProps
  /** 右键菜单：false 禁用，数组自定义菜单项 */
  contextmenu: boolean | (BuiltinMenuId | ContextmenuItemConfig)[]
  /** 组件语言：'auto' 自动识别 / 'zh' / 'en' / 自定义对象 */
  lang: string | Record<string, any>
  /** 页面外部滚动容器选择器（useRouterPage 据此记忆滚动位置） */
  pageScroller: string

  /** 默认页面（关闭最后一个页签时跳转，缺省用 basePath） */
  defaultPage?: RouteLocationRaw
  /** 国际化方法 i18n(key, params) */
  i18n?: (key: string, params?: any[]) => string
  /** 多实例标识（useRouterTab(tabId) 按此取对应实例，默认单实例） */
  tabId?: string
  /** iframe 额外属性/事件（如 sandbox/allow/referrerpolicy/onLoad），按 url 返回；不能覆盖库固定的 src/name */
  iframeAttrs?: (url: string) => Record<string, unknown>
}

/** 有默认值的 props 字段名（withDefaults 提供，声明处可选） */
type PropsWithDefault =
  | 'tabs'
  | 'restore'
  | 'restoreWatch'
  | 'append'
  | 'keepLastTab'
  | 'dragsort'
  | 'keepAlive'
  | 'maxAlive'
  | 'reuse'
  | 'tabTransition'
  | 'pageTransition'
  | 'contextmenu'
  | 'lang'
  | 'pageScroller'

/** RouterTab 组件 props 声明形态（有默认值的字段还原为可选，供 defineProps 使用） */
export type RouterTabPropsInput = Omit<RouterTabProps, PropsWithDefault> &
  Partial<Pick<RouterTabProps, PropsWithDefault>>
