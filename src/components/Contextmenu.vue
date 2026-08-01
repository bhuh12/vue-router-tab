<template>
  <div
    ref="el"
    class="router-tab__contextmenu"
    :class="{ 'has-icon': hasIcon }"
    :style="{ left: `${fixedLeft ?? data.left}px`, top: `${data.top}px` }"
  >
    <contextmenu-item
      v-for="item in menuList"
      :key="item.id"
      :data="item"
      :context="contextFor()"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'

import menuMap, { defaultMenu } from '../config/contextmenu'

import ContextmenuItem from './ContextmenuItem.vue'

import type {
  ContextmenuContext,
  ContextmenuData,
  ContextmenuItemConfig,
  Tab,
  RouterTabInstance
} from '../types'

const props = withDefaults(
  defineProps<{
    /** RouterTab 实例 */
    tabs: RouterTabInstance

    /** 右键菜单定位数据 */
    data: ContextmenuData

    /** 菜单项配置（字符串取内置项，对象可扩展内置项） */
    menu?: (string | ContextmenuItemConfig)[]
  }>(),
  { menu: () => defaultMenu }
)

/** 菜单根元素 */
const el = ref<HTMLElement>()

/** 边界修正后的 left；undefined 时回落到 data.left */
const fixedLeft = ref<number | undefined>(undefined)

/** 右键选中的页签 */
const target = computed(() => props.tabs.items.find((t) => t.id === props.data.id))

/** 菜单项列表：字符串取内置，对象可扩展内置 */
const menuList = computed<ContextmenuItemConfig[]>(() =>
  props.menu
    .map((item) => {
      if (typeof item === 'string') return menuMap[item]
      if (item && item.id) {
        const origin = menuMap[item.id]
        return origin ? { ...origin, ...item } : item
      }
      return undefined
    })
    .filter((i): i is ContextmenuItemConfig => !!i)
)

/** 菜单项是否含图标（有则整体让出图标位） */
const hasIcon = computed(() => menuList.value.some((i) => i.icon))

/** 选中项左侧可关闭页签 */
const lefts = computed(() =>
  props.tabs.items.slice(0, props.data.index).filter((t) => t.closable !== false)
)

/** 选中项右侧可关闭页签 */
const rights = computed(() =>
  props.tabs.items.slice(props.data.index + 1).filter((t) => t.closable !== false)
)

/** 除选中项外可关闭页签 */
const others = computed(() =>
  props.tabs.items.filter((t) => t.closable !== false && t.id !== props.data.id)
)

/** 关闭多个页签 */
async function closeMulti(tabs: Tab[]) {
  for (const { id } of tabs) {
    try {
      await props.tabs.removeTab(id)
    } catch {
      // 单个阻止关闭不影响其余
    }
  }
  // 当前页签已关闭则跳右键选中页签（第三参 false：对齐 v1 replace 语义，不额外刷新目标页）
  if (!props.tabs.activeTab && target.value) props.tabs.open(target.value.to, true, false)
}

/** 组装菜单项 handler 入参 */
function contextFor(): ContextmenuContext {
  return {
    $tabs: props.tabs,
    data: props.data,
    target: target.value,
    lefts: lefts.value,
    rights: rights.value,
    others: others.value,
    closeMulti
  }
}

// 边界位置修正（避免直接 mutate prop）
onMounted(() => {
  if (!el.value) return
  const { clientWidth } = el.value
  if (props.data.left + clientWidth > window.innerWidth) {
    fixedLeft.value = window.innerWidth - clientWidth - 5
  }
})
</script>
