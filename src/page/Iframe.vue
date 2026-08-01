<template>
  <div class="router-tab-iframe-fake" />
</template>

<script setup lang="ts">
import { computed, onMounted, onActivated, onDeactivated, onUnmounted } from 'vue'

import { useRouterTab } from '../composables/useRouterTab'

import type { RouterTabInternal } from '../types'

const props = defineProps<{
  /** iframe 地址（路由参数，取值时 decode） */
  src: string

  /** 页签标题 */
  title?: string

  /** 页签图标 */
  icon?: string
}>()

// 需调用内部 reloadIframe（不在对外契约内），故取 Internal
const $tabs = useRouterTab() as RouterTabInternal

/** 链接安全过滤，屏蔽 javascript:/data: XSS，返回空白页 */
const url = computed(() => {
  const src = decodeURIComponent(props.src)
  return /^(javascript|data):/i.test(src) ? 'about:blank' : src
})

onMounted(() => {
  // 已挂载过则说明本次是刷新页签重挂本页（节点被 Vue 复用、src 未变不会自动重载），
  // 主动重载。放在页面挂载而非 refreshIframe 里，
  // refreshTab / refreshAll / 右键菜单刷新才都能生效。
  if ($tabs.iframes.includes(url.value)) $tabs.reloadIframe(url.value)
  else $tabs.iframes.push(url.value)

  $tabs.currentIframe = url.value
})

onActivated(() => {
  $tabs.currentIframe = url.value
})

onDeactivated(() => {
  $tabs.currentIframe = null
})

onUnmounted(() => {
  const idx = $tabs.iframes.indexOf(url.value)
  if (idx > -1) $tabs.iframes.splice(idx, 1)
})
</script>
