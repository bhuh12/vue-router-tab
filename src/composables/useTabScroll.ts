import { watch, onMounted, onScopeDispose, nextTick, type Ref } from 'vue'
import { debounce } from '../util'
import type { RouterTabState } from './useState'
import type { ContextmenuState } from './useContextmenu'

/** TabScroll 组件暴露的方法 */
export interface ScrollExpose {
  /** 元素是否在可视区内 */
  isInView: (el: HTMLElement) => boolean

  /** 滚动使元素进入可视区 */
  scrollIntoView: (el: HTMLElement) => void

  /** 横向滚动到指定位置 */
  scrollTo: (left: number, smooth?: boolean) => void

  /** 重算滚动条尺寸与箭头显隐 */
  update: () => void
}

/** 激活页签自动滚入可视区 */
export function useTabScroll(
  /** 根状态（activeTabId 变化触发滚动） */
  state: RouterTabState,
  /** 菜单状态（滚动时隐藏） */
  ctxmenu: ContextmenuState,
  /** TabScroll 组件 ref */
  scrollRef: Ref<ScrollExpose | null>,
  /** RouterTab 根元素 ref */
  rootRef: Ref<HTMLElement | null>
) {
  /** 调整滚动，保证激活页签可见 */
  const adjust = debounce(async () => {
    await nextTick()
    const root = rootRef.value
    const scroll = scrollRef.value
    if (!root || !scroll) return

    const cur = root.querySelector<HTMLElement>('.router-tab__item.is-active')
    if (cur && !scroll.isInView(cur)) scroll.scrollIntoView(cur)

    ctxmenu.hideContextmenu()
  }, 200)

  watch(() => state.activeTabId, adjust, { immediate: true })

  onMounted(() => window.addEventListener('resize', adjust))
  onScopeDispose(() => window.removeEventListener('resize', adjust))

  return { adjust }
}
