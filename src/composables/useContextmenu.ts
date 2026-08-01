import { reactive, watch, onMounted, onScopeDispose, type Ref } from 'vue'
import { useRoute } from 'vue-router'
import type { ContextmenuData } from '../types'
import type { RouterTabState } from './useState'

/** 右键菜单状态（无依赖，定位数据 + 显隐方法） */
export function useContextmenu() {
  /** 右键菜单定位数据 */
  const contextData = reactive<ContextmenuData>({ id: null, index: -1, left: 0, top: 0 })

  /** 显示页签右键菜单 */
  function showContextmenu(id: string | null, index: number, e?: MouseEvent) {
    const { clientX: left = 0, clientY: top = 0 } = e || ({} as MouseEvent)
    Object.assign(contextData, { id, index, top, left })
  }

  /** 关闭右键菜单 */
  function hideContextmenu() {
    Object.assign(contextData, { id: null, index: -1 })
  }

  return reactive({
    /** 右键菜单定位数据 */
    contextData,

    /** 显示页签右键菜单 */
    showContextmenu,

    /** 关闭右键菜单 */
    hideContextmenu
  })
}

/** 绑外部点击关闭 + 路由/拖拽时隐藏（RouterTab 挂载时调） */
export function installContextmenu(
  /** 根状态（onDragSort） */
  state: RouterTabState,
  /** 菜单状态（hideContextmenu） */
  ctxmenu: ContextmenuState,
  /** RouterTab 根元素（在其内定位菜单，避免多实例互相命中） */
  rootEl: Ref<HTMLElement | null>
): void {
  const route = useRoute()

  function onClickOutside(e: MouseEvent) {
    // 只有点中菜单容器自身（菜单项之间的空白）才保留菜单，对齐 v1 的全等比较。
    // 用 closest 会把菜单项也算作「菜单内部」，导致点菜单项后菜单不关闭。
    if (e.target !== rootEl.value?.querySelector('.router-tab__contextmenu')) {
      ctxmenu.hideContextmenu()
    }
  }

  onMounted(() => document.addEventListener('click', onClickOutside))
  onScopeDispose(() => document.removeEventListener('click', onClickOutside))

  // 路由切换隐藏
  watch(
    () => route.fullPath,
    () => ctxmenu.hideContextmenu()
  )
  // 拖拽排序隐藏
  watch(
    () => state.onDragSort,
    (v) => v && ctxmenu.hideContextmenu()
  )
}

/** ContextmenuState：由 useContextmenu 返回值自动推导，避免手写 interface 与实现漂移 */
export type ContextmenuState = ReturnType<typeof useContextmenu>
