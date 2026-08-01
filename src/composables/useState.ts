import { ref, reactive, computed } from 'vue'
import type { Tab, PageHooks, RouterAliveExpose } from '../types'

/**
 * RouterTab 根状态聚合。
 * 只装自身根状态（不含 props、不含其他 composable 的产出），
 * 供各 composable 按需接收，替代逐字段 options 转发。
 * router/route 不入聚合：本身已响应式，各 composable 内直接 useRouter()/useRoute() 取。
 */
export function useState() {
  /** 全部页签（被 activeTab computed 依赖，独立 ref 声明） */
  const items = ref<Tab[]>([])

  /** 当前激活页签 id（同上） */
  const activeTabId = ref('')

  /** 当前激活页签 */
  const activeTab = computed(() => items.value.find((t) => t.id === activeTabId.value))

  /** RouterAlive expose */
  const $alive = ref<RouterAliveExpose | null>(null)

  /** 拖拽排序中 */
  const onDragSort = ref(false)

  return reactive({
    /** 全部页签 */
    items,

    /** 当前激活页签 id */
    activeTabId,

    /** 当前激活页签 */
    activeTab,

    /** RouterAlive expose（ready 前为 null） */
    $alive,

    /** 拖拽排序中 */
    onDragSort,

    /** 页面钩子 registry（普通 Map，读写走原始引用） */
    pages: new Map<string, PageHooks>()
  })
}

/** RouterTabState：由 useState 返回值自动推导，避免手写 interface 与实现漂移 */
export type RouterTabState = ReturnType<typeof useState>
