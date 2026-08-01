import { computed, reactive, watch, onMounted, onScopeDispose } from 'vue'
import type { Tab, RouterTabProps } from '../types'
import type { RouterTabState } from './useState'
import type { TabsState } from './useTabs'

/** 页签恢复 */
export function useRestore(
  /** 根状态 */
  state: RouterTabState,
  /** RouterTab props（restore） */
  props: Pick<RouterTabProps, 'restore'>,
  /** 基础配置 */
  options: {
    /** 根路径（组成存储 key，$alive 就绪后才有真值） */
    basePath: string
  },
  /** 页签原语（presetTabs） */
  tabs: TabsState
) {
  /** 恢复存储 key（空串表示不启用） */
  const restoreKey = computed(() => {
    // 在 computed 内解构：每次求值重新读取，不会丢响应性
    const { restore } = props
    if (!restore || typeof sessionStorage === 'undefined') return ''

    let key = `RouterTab:restore:${options.basePath}`
    if (typeof restore === 'string') key += `:${restore}`
    return key
  })

  /** 保存页签数据 */
  function saveTabs() {
    if (restoreKey.value) sessionStorage.setItem(restoreKey.value, JSON.stringify(state.items))
  }

  /** 清除页签存储 */
  function clearTabsStore() {
    if (restoreKey.value) sessionStorage.removeItem(restoreKey.value)
  }

  /** 从存储恢复页签，命中返回 true */
  function restoreTabs(): boolean {
    if (!restoreKey.value) return false
    try {
      const raw = sessionStorage.getItem(restoreKey.value)
      const stored = raw ? JSON.parse(raw) : null
      if (Array.isArray(stored) && stored.length) {
        tabs.presetTabs(stored as Tab[])
        return true
      }
    } catch {
      // 存储损坏则忽略
    }
    return false
  }

  return reactive({
    /** 恢复存储 key（空串表示未启用） */
    restoreKey,

    /** 保存页签数据到 sessionStorage */
    saveTabs,

    /** 清除页签存储 */
    clearTabsStore,

    /** 从存储恢复页签，命中返回 true */
    restoreTabs
  })
}

/** 绑 beforeunload 保存 + restoreWatch 自动还原（RouterTab 挂载时调） */
export function installRestore(
  /** 根状态 */
  state: RouterTabState,
  /** RouterTab props（restoreWatch） */
  props: Pick<RouterTabProps, 'restoreWatch'>,
  /** 基础配置 */
  options: {
    /** 初始页签（restore 优先，含 props.tabs） */
    initTabs: () => void
  },
  /** 恢复状态（restoreKey/saveTabs） */
  restore: RestoreState
): void {
  onMounted(() => window.addEventListener('beforeunload', restore.saveTabs))
  onScopeDispose(() => window.removeEventListener('beforeunload', restore.saveTabs))

  // 监听 restoreKey 变化自动还原（basePath 变化等）
  watch(
    () => restore.restoreKey,
    () => {
      if (!props.restoreWatch) return
      const active = state.activeTab
      options.initTabs()
      if (!state.activeTab && active) state.items.push(active)
    }
  )
}

/** RestoreState：由 useRestore 返回值自动推导，避免手写 interface 与实现漂移 */
export type RestoreState = ReturnType<typeof useRestore>
