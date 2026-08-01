<template>
  <router-link v-slot="{ navigate }" :to="data.to" custom>
    <li
      class="router-tab__item"
      :class="classList"
      :draggable="tabs.dragsort"
      @click="navigate"
      @click.middle="closable && close()"
      @contextmenu.prevent="tabs.showContextmenu(data.id, index, $event)"
      @dragstart="onDragStart"
      @dragend="onDragEnd"
      @dragover.prevent="onDragOver"
      @dragleave.prevent="isDragOver = false"
      @drop.stop.prevent="onDrop"
    >
      <slot :tab="data" :closable="closable">
        <i v-if="data.icon" class="router-tab__item-icon" :class="data.icon" />
        <span class="router-tab__item-title" :title="tips">{{ title }}</span>
        <i v-if="closable" class="router-tab__item-close" @click.prevent.stop="close" />
      </slot>
    </li>
  </router-link>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { RouterLink } from 'vue-router'

import type { Tab, RouterTabInstance } from '../types'

const props = defineProps<{
  /** RouterTab 实例 */
  tabs: RouterTabInstance

  /** 页签数据 */
  data: Tab

  /** 页签在列表中的索引 */
  index: number
}>()

defineSlots<{
  /** 自定义页签内容 */
  default(scope: { tab: Tab; closable: boolean }): any
}>()

/** 拖拽传输前缀（兼容双核浏览器无法 getData） */
const TRANSFER_PREFIX = 'RouterTabDragSortIndex:'

/** 拖拽悬停本页签上 */
const isDragOver = ref(false)

/** 拖拽起始数据（浏览器 getData 不可用时的兜底） */
let dragSortData: string | null = null

/** 无标题页签的兜底文案 */
const untitled = computed(() => props.tabs.langs.tab.untitled)

/** 页签标题 */
const title = computed(() => props.tabs.i18nText(props.data.title) || untitled.value)

/** 页签悬浮提示（未配置 tips 时回落标题） */
const tips = computed(
  () => props.tabs.i18nText(props.data.tips || props.data.title) || untitled.value
)

/** 是否可关闭：静态可关性 + keepLastTab 动态判定（仅剩1个不可关） */
const closable = computed(
  () => props.data.closable !== false && !(props.tabs.keepLastTab && props.tabs.items.length < 2)
)

/** 页签 class（自定义 class + 状态类） */
const classList = computed(() => [
  props.data.tabClass,
  {
    'is-active': props.tabs.activeTabId === props.data.id,
    'is-closable': closable.value,
    'is-contextmenu': props.tabs.contextData.id === props.data.id,
    'is-drag-over': isDragOver.value && !props.tabs.onDragSort
  }
])

/** 关闭本页签 */
function close() {
  props.tabs.closeTab(props.data.id)
}

/** 拖拽开始：记录源索引 */
function onDragStart(e: DragEvent) {
  props.tabs.onDragSort = true
  dragSortData = TRANSFER_PREFIX + props.index
  e.dataTransfer?.setData('text', dragSortData)
  if (e.dataTransfer) e.dataTransfer.effectAllowed = 'move'
}

/** 拖拽经过：标记悬停态 */
function onDragOver(e: DragEvent) {
  isDragOver.value = true
  if (e.dataTransfer) e.dataTransfer.dropEffect = 'move'
}

/** 拖拽结束：清理标志 */
function onDragEnd() {
  props.tabs.onDragSort = false
  dragSortData = null
}

/** 放下：把源页签移动到本页签位置 */
function onDrop(e: DragEvent) {
  isDragOver.value = false
  const raw = e.dataTransfer?.getData('text') || dragSortData
  if (typeof raw !== 'string' || !raw.startsWith(TRANSFER_PREFIX)) return

  const fromIndex = Number(raw.replace(TRANSFER_PREFIX, ''))
  const items = props.tabs.items
  // 校验索引合法：越界时 splice 返回空数组，会把 undefined 插进页签数组致模板读 id 崩溃
  // （跨窗口/跨实例拖拽时源实例页签数可能多于本实例；非数字会被转成 0 静默搬错页签）
  if (!Number.isInteger(fromIndex) || fromIndex < 0 || fromIndex >= items.length) return

  const [tab] = items.splice(fromIndex, 1)
  items.splice(props.index, 0, tab)
}
</script>
