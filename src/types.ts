import type { RouteMatch } from './composables/useRouteMatch'

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
