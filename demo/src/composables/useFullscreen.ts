import { ref, nextTick } from 'vue'
import { useRouterTab } from 'vue-router-tab'

/** 全屏切换（替代 v1 mixins/fullscreen），切换后重算页签横向滚动 */
export function useFullscreen() {
  /** 是否全屏 */
  const fullscreen = ref(false)

  /** 切换全屏并在容器尺寸变化后重算页签滚动 */
  async function toggle() {
    fullscreen.value = !fullscreen.value
    // 惰性取实例：容器尺寸随全屏 class 改变，等 DOM 更新后重算页签横向滚动
    await nextTick()
    useRouterTab().adjust()
  }

  return { fullscreen, toggle }
}
