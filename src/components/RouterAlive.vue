<template>
  <div class="router-alive">
    <router-view v-slot="{ Component, route }">
      <transition v-bind="transProps" mode="out-in">
        <keep-alive :include="include" :max="max || undefined">
          <component
            v-if="Component"
            :is="wrap(cacheId, Component)"
            :key="renderKey"
            v-bind="route.params"
          />
        </keep-alive>
      </transition>
    </router-view>
  </div>
</template>

<script setup lang="ts">
import {
  ref,
  reactive,
  computed,
  watch,
  toRefs,
  markRaw,
  defineComponent,
  h,
  type Component
} from 'vue'
import { useRoute } from 'vue-router'

import { useRouteMatch, type RouteMatch } from '../composables/useRouteMatch'
import { getTransOpt, remove } from '../util'

import type { RouterAliveExpose } from '../types'

const props = withDefaults(
  defineProps<{
    /** 是否缓存页面（meta.routerTab.keepAlive 可逐页覆盖） */
    keepAlive?: boolean

    /** 同 key 是否复用一份缓存（meta.routerTab.reuse 可逐页覆盖） */
    reuse?: boolean

    /** 最大缓存页数（0 为不限制，超出按 LRU 驱逐） */
    max?: number

    /** 页面过渡效果名 */
    transition?: string
  }>(),
  { keepAlive: false, reuse: false, max: 0, transition: '' }
)

const emit = defineEmits<{
  /** 首次路由就绪，抛出组件实例（RouterTab 据此取 $alive） */
  ready: [alive: RouterAliveExpose]

  /** 页面创建 / 更新（RouterTab 据此同步页签） */
  change: [type: 'create' | 'update', match: RouteMatch]
}>()

// props 直传（非值拷贝）：运行时改 keepAlive/reuse 时未在 meta 覆盖的页面判定需跟随
const $route = useRoute()
const routeMatch = useRouteMatch(props)
// routeMatch 为 reactive 聚合，toRefs 转回 ref 以复用下方 .value 访问与 watch 源
const { key, alive, reusable, alivePath } = toRefs(routeMatch)

/** 当前存活的缓存 key 列表 */
const aliveKeys = ref<string[]>([])

// 每 key 独立记刷新计数：refresh 单页只 bump 该 key，不波及其他页的 renderKey
const refreshTicks = reactive(new Map<string, number>())

/** 取指定 key 的刷新计数 */
function tickOf(k: string) {
  return refreshTicks.get(k) ?? 0
}

// key → 当前 alivePath；reactive 使 include 能随 alivePath 变化重算（reuse=false 关键）
const alivePaths = reactive(new Map<string, string>())

/** 取指定 key 已缓存的 alivePath（供 leaveGuard 判定页签地址是否被替换） */
function alivePathOf(k: string) {
  return alivePaths.get(k)
}

// 缓存身份：reuse 时按 key，reuse=false 时按 key@alivePath。
// KeepAlive 靠组件 name（include）prune，故 name 必须含 alivePath，
// 否则同 key 不同 path 会共用一个 name → 旧实例永不驱逐（I-2 根因）。

/** 取指定 key 的缓存身份（读 alivePaths 记录，供 include / 驱逐用） */
function cacheIdOf(k: string) {
  return reusable.value ? k : `${k}@${alivePaths.get(k) ?? ''}`
}

/** 当前页的缓存身份（读实时 alivePath，供渲染用） */
const cacheId = computed(() => (reusable.value ? key.value : `${key.value}@${alivePath.value}`))

/** 缓存身份对应的包裹组件 name（KeepAlive include 靠它匹配） */
function wrapName(cid: string) {
  return `__ra_${cid}`
}

/** 缓存身份 → 包裹组件（同 cid 必须复用同一份，否则每次渲染都是新组件、缓存失效） */
const wrapCache = new Map<string, Component>()

/** 用具名组件包裹页面组件，让 KeepAlive 能按 name 精确 prune */
function wrap(cid: string, comp: Component): Component {
  let w = wrapCache.get(cid)
  if (!w) {
    w = markRaw(defineComponent({ name: wrapName(cid), setup: () => () => h(comp) }))
    wrapCache.set(cid, w)
  }
  return w
}

/** KeepAlive include：存活 key 对应的包裹组件 name 列表 */
const include = computed(() => aliveKeys.value.map((k) => wrapName(cacheIdOf(k))))

/** 渲染 key（附刷新计数，bump 即强制重建当前页） */
const renderKey = computed(() => `${cacheId.value}#${tickOf(key.value)}`)

/** 页面过渡属性 */
const transProps = computed(() => getTransOpt(props.transition))

// exposed 必须在 immediate watch 之前声明：watch 回调同步执行，
// 若 setup 时路由已就绪（await router.isReady() 后 mount）会立即 emit('ready', exposed)，
// 声明在 watch 之后会命中 TDZ 抛 ReferenceError。
/**
 * 对外暴露的实例。
 * aliveKeys 断言为裸数组：消费侧要么走 defineExpose、要么把本对象存进 reactive（RouterTab 的 state.$alive），
 * 两条路径读取时 ref 都会被自动解包，契约上即为数组。
 */
const exposed: RouterAliveExpose = {
  evict,
  refresh,
  alivePathOf,
  aliveKeys: aliveKeys as unknown as string[],
  routeMatch
}

let readied = false
// 上次已 emit('change') 的 fullPath：供下方 fullPath watch 去重，避免与本 watch 重复 emit
let lastPath: string | undefined
watch(
  key,
  (k) => {
    if (!k) return
    if (!readied) {
      readied = true
      emit('ready', exposed)
    }

    const prevPath = alivePaths.get(k)
    const type: 'create' | 'update' = prevPath ? 'update' : 'create'

    if (alive.value) {
      if (!aliveKeys.value.includes(k)) aliveKeys.value = [...aliveKeys.value, k]
      alivePaths.set(k, alivePath.value)
      // max LRU：超出时驱逐最早的非当前 key
      if (props.max > 0 && aliveKeys.value.length > props.max) {
        const overflow = aliveKeys.value
          .filter((x) => x !== k)
          .slice(0, aliveKeys.value.length - props.max)
        evict(...overflow)
      }
    }
    lastPath = $route.fullPath
    emit('change', type, routeMatch)
  },
  { immediate: true }
)

// 嵌套路由内层切换：key 不变（key 取本层 matched），watch(key) 不触发，
// 但 tab.to 取 route.fullPath，需在此补发 update 让 syncFromAlive 覆盖 to（V-09/V-10 根因）。
// lastPath 去重：与 watch(key) 同一次导航只 emit 一次。
watch(
  () => $route.fullPath,
  (path) => {
    if (!key.value || path === lastPath) return
    lastPath = path
    emit('change', 'update', routeMatch)
  }
)

// reuse=false 且常量 key：alivePath 变化时 watch(key) 不触发，需在此更新 alivePaths，
// 使 include 的缓存 name 跟随新 alivePath → KeepAlive 自动驱逐旧 path 实例、缓存新 path 实例。
watch(alivePath, (cur) => {
  const k = key.value
  if (!k || reusable.value || !aliveKeys.value.includes(k)) return
  // 旧 path 实例此刻已被 KeepAlive prune，删其 wrapper 防 wrapCache 随 alivePath 无界增长
  const prev = alivePaths.get(k)
  if (prev !== undefined && prev !== cur) wrapCache.delete(`${k}@${prev}`)
  alivePaths.set(k, cur)
})

/** 驱逐指定 key 的缓存 */
function evict(...keys: string[]) {
  aliveKeys.value = aliveKeys.value.filter((k) => !keys.includes(k))
  keys.forEach((k) => {
    wrapCache.delete(cacheIdOf(k))
    alivePaths.delete(k)
  })
}

/** 刷新缓存页（当前页重建，非当前页仅驱逐、下次进入即新实例） */
function refresh(k: string = key.value) {
  wrapCache.delete(cacheIdOf(k))
  if (k === key.value) {
    const had = aliveKeys.value.includes(k)
    aliveKeys.value = remove([...aliveKeys.value], k)
    refreshTicks.set(k, tickOf(k) + 1)
    if (had && alive.value) aliveKeys.value = [...aliveKeys.value, k]

    // 当前页重建后补发 change（对齐 v1 onTrans 的 emit('change', 'create')）：
    // 目标与当前路由相同时属重复导航，两个 watch 都不触发。关掉唯一页签后
    // close 会 replace 到 defaultPath，它 redirect 回刚关掉的路由即是此情形，
    // 无此 emit 则页签列表永久空白。
    alivePaths.set(k, alivePath.value)
    lastPath = $route.fullPath
    emit('change', 'create', routeMatch)
  } else {
    evict(k)
  }
}

defineExpose(exposed)
</script>
