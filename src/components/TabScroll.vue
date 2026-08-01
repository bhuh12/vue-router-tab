<template>
  <div class="router-tab__scroll" @wheel.prevent="onWheel" @mouseenter="update">
    <div
      ref="container"
      class="router-tab__scroll-container"
      :class="{ 'is-mobile': isMobile }"
      @scroll="update"
    >
      <slot />
    </div>

    <div v-show="hasScroller" class="router-tab__scrollbar" :class="{ 'is-dragging': dragData }">
      <div
        class="router-tab__scrollbar-thumb"
        :style="{ width: `${thumbWidth}px`, transform: `translateX(${thumbLeft}px)` }"
        @mousedown.prevent="onDragStart"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed, onScopeDispose } from 'vue'

import {
  scrollTo as doScrollTo,
  scrollIntoView as doScrollIntoView,
  getScrollbarWidth
} from '../util'

import type { RouterTabInstance } from '../types'

const props = withDefaults(
  defineProps<{
    /** RouterTab 实例 */
    tabs: RouterTabInstance

    /** 单次滚轮滚动距离（px） */
    space?: number
  }>(),
  { space: 300 }
)

defineSlots<{
  /** 滚动容器内容（页签列表） */
  default(): any
}>()

/** 滚动容器元素 */
const container = ref<HTMLElement>()

/** 是否移动端（用系统滚动条，不显示自绘滑块） */
const isMobile = ref(false)

/** 滚动尺寸数据（由 update 从 DOM 同步） */
const scrollData = reactive({
  /** 容器可视宽度 */
  clientWidth: 0,

  /** 内容总宽度 */
  scrollWidth: 0,

  /** 已滚动距离 */
  scrollLeft: 0
})

/** 滑块拖拽数据（非拖拽中为 null） */
const dragData = ref<{
  /** 按下时的鼠标 pageX */
  startPageX: number

  /** 按下时的滑块 left */
  startThumbLeft: number

  /** 当前滑块 left */
  thumbLeft: number
} | null>(null)

/** 上次滚轮触发时间戳（节流用） */
let lastWheel = 0

/** 是否有滚动条 */
const hasScroller = computed(
  () => !isMobile.value && !props.tabs.onDragSort && scrollData.scrollWidth > scrollData.clientWidth
)

/** 滑块宽度 */
const thumbWidth = computed(() => {
  if (!hasScroller.value) return 0
  const { clientWidth, scrollWidth } = scrollData
  return (clientWidth / scrollWidth) * clientWidth
})

/** 滑块 left */
const thumbLeft = computed(() => {
  if (!hasScroller.value) return 0
  if (dragData.value) return dragData.value.thumbLeft
  const { clientWidth, scrollWidth, scrollLeft } = scrollData
  return (clientWidth - thumbWidth.value) * (scrollLeft / (scrollWidth - clientWidth))
})

/** 更新滚动数据 */
function update() {
  const el = container.value
  if (!el) return
  isMobile.value = /mobile/i.test(navigator.userAgent) || !getScrollbarWidth()
  Object.assign(scrollData, {
    clientWidth: el.clientWidth,
    scrollWidth: el.scrollWidth,
    scrollLeft: el.scrollLeft
  })
}

/** 横向滚动到指定位置 */
function scrollTo(
  /** 目标 scrollLeft */
  left: number,
  /** 是否平滑滚动 */
  smooth = true
) {
  doScrollTo({ wrap: container.value ?? null, left, smooth })
}

/** 滚动使子元素居中进入可视区 */
function scrollIntoView(el: HTMLElement) {
  doScrollIntoView({ el, wrap: container.value ?? null, inline: 'center' })
}

/** 子节点是否完全在可视区域 */
function isInView(el: HTMLElement): boolean {
  const wrap = container.value
  if (!wrap) return true
  const { offsetLeft } = el
  const { scrollLeft, clientWidth } = wrap
  return !(offsetLeft < scrollLeft || offsetLeft + el.clientWidth > scrollLeft + clientWidth)
}

/** 滚轮横向滚动（100ms 节流，避免触控板连续事件抖动） */
function onWheel(e: WheelEvent) {
  const now = Date.now()
  if (now - lastWheel <= 100) return
  lastWheel = now
  scrollTo((container.value?.scrollLeft ?? 0) + (e.deltaY < 0 ? -props.space : props.space))
}

/** 滑块拖拽开始：挂全局监听（拖出滑块也能继续跟随） */
function onDragStart(e: MouseEvent) {
  dragData.value = {
    startPageX: e.pageX,
    startThumbLeft: thumbLeft.value,
    thumbLeft: thumbLeft.value
  }
  document.addEventListener('mousemove', onDragMove)
  document.addEventListener('mouseup', onDragEnd)
}

/** 滑块拖拽中：按滑块位移换算滚动距离 */
function onDragMove(e: MouseEvent) {
  if (!dragData.value) return
  const { clientWidth, scrollWidth } = scrollData
  const maxThumbLeft = clientWidth - thumbWidth.value
  let left = dragData.value.startThumbLeft + e.pageX - dragData.value.startPageX
  left = Math.max(0, Math.min(left, maxThumbLeft))
  dragData.value.thumbLeft = left
  scrollTo((left * (scrollWidth - clientWidth)) / (clientWidth - thumbWidth.value), false)
  e.preventDefault()
}

/** 滑块拖拽结束：摘全局监听 */
function onDragEnd(e: MouseEvent) {
  dragData.value = null
  document.removeEventListener('mousemove', onDragMove)
  document.removeEventListener('mouseup', onDragEnd)
  e.preventDefault()
}

// 组件卸载时清理可能泄漏的拖拽全局监听
onScopeDispose(() => {
  document.removeEventListener('mousemove', onDragMove)
  document.removeEventListener('mouseup', onDragEnd)
})

defineExpose({ scrollIntoView, isInView, scrollTo, update })
</script>
