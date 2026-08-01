<template>
  <!--
    disabled 在 <a> 上非标准布尔属性：Vue3 仅 null/undefined 才移除属性，
    传 false 会渲染成 disabled="false"，而样式按 [disabled] 存在即命中，
    导致全部菜单项被 pointer-events: none 挡住（Vue2 遇 false 会移除属性，故 v1 无此问题）
  -->
  <a
    v-if="visible"
    class="router-tab__contextmenu-item"
    :class="data.class"
    :data-action="data.id"
    :disabled="enable ? undefined : true"
    :title="data.tips"
    @click="onClick"
  >
    <i v-if="icon" class="router-tab__contextmenu-icon" :class="icon" />
    {{ title }}
  </a>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { ContextmenuItemConfig, ContextmenuContext } from '../types'

const props = defineProps<{
  /** 菜单项配置 */
  data: ContextmenuItemConfig

  /** 菜单项 handler / 求值函数的入参 */
  context: ContextmenuContext
}>()

/** 求值：布尔或函数（入参 context） */
function evalOpt(val: unknown, def: boolean): boolean {
  if (typeof val === 'function') return !!(val as any)(props.context)
  return typeof val === 'boolean' ? val : def
}

/** 求值：静态值或函数（入参 context），保留任意返回类型 */
function evalVal<T>(val: T | ((ctx: ContextmenuContext) => T)): T {
  return typeof val === 'function' ? (val as (ctx: ContextmenuContext) => T)(props.context) : val
}

/** 是否显示 */
const visible = computed(() => evalOpt(props.data.visible, true))

/** 是否启用（禁用时点击无响应） */
const enable = computed(() => evalOpt(props.data.enable, true))

/** 菜单标题：data.title（字符串/函数）优先 → 内置语言文案 → id */
const title = computed(() => {
  const { title, id } = props.data
  if (title != null) return evalVal(title)
  return props.context.$tabs.langs.contextmenu?.[id!] ?? id
})
/** 菜单图标 class：支持函数求值（状态项动态图标） */
const icon = computed(() => (props.data.icon != null ? evalVal(props.data.icon) : undefined))

/** 点击菜单项：启用状态下执行 handler */
function onClick() {
  if (enable.value) props.data.handler?.(props.context)
}
</script>
