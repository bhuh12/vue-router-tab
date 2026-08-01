import { computed, inject, provide, reactive, unref, type Ref } from 'vue'
import {
  useRoute,
  viewDepthKey,
  type RouteLocationNormalized,
  type RouteLocationNormalizedLoaded
} from 'vue-router'
import { rules } from '../config/rules'
import { prunePath } from '../util'

/** RouterAlive 嵌套深度注入 key */
const DEPTH_KEY = Symbol('router-alive-depth')

/** 当前 RouterAlive 层级的路由匹配信息（响应式聚合） */
export interface RouteMatch {
  /** 对应 route.matched 的层级下标 */
  routeIndex: number
  /** 缓存标识 key */
  key: string
  /** 是否缓存该页 */
  alive: boolean
  /** 是否可复用（同 key 复用一份缓存） */
  reusable: boolean
  /** 是否为嵌套路由（后面还有更深层匹配） */
  nest: boolean
  /** 当前层级路由 meta */
  meta: Record<string, any>
  /** 去掉 query/hash 的缓存路径 */
  alivePath: string
}

/** 解析缓存 key */
function parseKey(
  /** 当前路由 */
  $route: RouteLocationNormalized,
  /** 当前层级匹配记录 */
  matched: any,
  /** meta.key 配置（内置规则名 / 自定义字符串 / 函数） */
  keyOpt: unknown
): string {
  const fallback = matched?.path ?? ''
  if (keyOpt == null) return fallback

  // 注意：函数返回值先按规则名匹配，故 meta.key 函数不要返回 'path'/'fullpath' 字面量
  if (typeof keyOpt === 'string') {
    const rule = rules[keyOpt.toLowerCase()]
    return rule ? rule($route) : keyOpt
  }
  if (typeof keyOpt === 'function') return parseKey($route, matched, keyOpt($route))

  return String(keyOpt)
}

/** 解析当前 RouterAlive 层级的路由匹配信息 */
export function useRouteMatch(
  /** RouterAlive 的 props（直传保响应性；meta.routerTab 未显式声明时作默认值） */
  props: {
    keepAlive: boolean
    reuse: boolean
  }
): RouteMatch {
  const $route = useRoute()

  // 自家 RouterAlive 嵌套深度（嵌套页内层 RouterAlive 用）
  const parentDepth = inject<number>(DEPTH_KEY, -1)

  // 外层 <router-view> 已消费掉的 matched 层数：RouterTab 挂在 router-view 渲染的组件内时
  // （如 demo 的 frame 页），matched[0] 是 frame 容器、meta.routerTab 在更深一层。
  // 仅在自家链顶层取用，内层深度由 DEPTH_KEY 递增；vue-router 的 viewDepthKey 可能是 ref。
  const viewDepth = parentDepth < 0 ? unref(inject<Ref<number> | number>(viewDepthKey, 0)) : 0

  const routeIndex = parentDepth < 0 ? viewDepth : parentDepth + 1
  provide(DEPTH_KEY, routeIndex)

  const matched = computed(() => $route.matched[routeIndex])
  const meta = computed<Record<string, any>>(() => matched.value?.meta ?? {})
  // RouterTab 配置聚合到 meta.routerTab（不兼容旧扁平写法）
  const rt = computed(() => meta.value.routerTab ?? {})
  // 独立声明：reactive 内字段不能自引用，nest 与 alivePath 都要用
  const nest = computed(() => $route.matched.length > routeIndex + 1)

  /** 响应式匹配信息聚合（reactive 自动解包 computed 为值） */
  const match = reactive({
    routeIndex,

    /** 当前层级路由 meta */
    meta,

    /** 是否为嵌套路由 */
    nest,

    /** 缓存标识 key */
    key: computed(() => parseKey($route, matched.value, rt.value.key)),

    /** 是否缓存该页（meta.routerTab 显式布尔优先，否则回退 prop） */
    alive: computed(() =>
      typeof rt.value.keepAlive === 'boolean' ? rt.value.keepAlive : props.keepAlive
    ),

    /** 是否可复用（meta.routerTab 显式布尔优先，否则回退 prop） */
    reusable: computed(() => (typeof rt.value.reuse === 'boolean' ? rt.value.reuse : props.reuse)),

    /** 缓存路径：嵌套路由用父段填参（内层子路径变化时外层保持缓存），否则用去 query/hash 的 fullPath */
    alivePath: computed(() =>
      nest.value ? fillPath(matched.value?.path ?? '', $route.params) : prunePath($route.fullPath)
    )
  })

  return match
}

/** 对任意 route 计算的匹配信息（纯函数，字段扁平，与 RouteMatch 对齐并补 basePath） */
export interface RouteMatchInfo extends RouteMatch {
  /** 页签组件所在根路径（父层级路径，用于判定是否离开页签范围） */
  basePath: string
}

/** 将路径中的 :param 用 params 值填充 */
function fillPath(path: string, params: Record<string, any>): string {
  return path.replace(/:(\w+)/g, (m, k) => (k in params ? String(params[k]) : m))
}

/** 对任意已解析路由计算匹配信息（getIdByPath / leaveGuard / restore / iframe 用） */
export function matchRoute(
  /** 已 resolve 的路由（含 matched） */
  $route: RouteLocationNormalizedLoaded,
  /** 匹配选项 */
  opts: {
    /** 默认是否缓存（meta.routerTab 未显式声明时用） */
    keepAlive: boolean
    /** 默认是否可复用（meta.routerTab 未显式声明时用） */
    reuse: boolean
    /** 页面路由深度，默认 0（顶层） */
    routeIndex?: number
  }
): RouteMatchInfo {
  const routeIndex = opts.routeIndex ?? 0
  const matched = $route.matched[routeIndex]
  const meta = matched?.meta ?? {}
  // RouterTab 配置聚合到 meta.routerTab（不兼容旧扁平写法）
  const rt = (meta as Record<string, any>).routerTab ?? {}
  const nest = $route.matched.length > routeIndex + 1
  const key = matched ? parseKey($route, matched, rt.key) : ''

  // meta.routerTab 显式布尔优先，否则用入参默认
  const alive = typeof rt.keepAlive === 'boolean' ? rt.keepAlive : opts.keepAlive
  const reusable = typeof rt.reuse === 'boolean' ? rt.reuse : opts.reuse

  // 嵌套路由缓存路径用父段填参，否则用去 query/hash 的 fullPath
  const alivePath = nest ? fillPath(matched?.path ?? '', $route.params) : prunePath($route.fullPath)

  // 根路径：上一级 matched 填参路径；顶层为 /
  let basePath = '/'
  if (routeIndex >= 1) {
    const base = $route.matched[routeIndex - 1]
    basePath = (base?.path && fillPath(base.path, $route.params)) || '/'
  }

  return { routeIndex, key, alive, reusable, nest, meta, alivePath, basePath }
}
