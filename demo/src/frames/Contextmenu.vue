<template>
  <RouterTab :class="{ 'is-fullscreen': fullscreen }" :contextmenu="contextmenu" />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { BuiltinMenuId, ContextmenuItemConfig } from 'vue-router-tab'

import { useFullscreen } from '../composables/useFullscreen'

const { fullscreen, toggle } = useFullscreen()

/**
 * 右键菜单配置（对照 v1，v1 的 $menu 入参改为扁平 ContextmenuContext）
 *
 * 用 computed 包裹使函数式 title/icon 能读到最新 fullscreen.value。
 */
const contextmenu = computed<(BuiltinMenuId | ContextmenuItemConfig)[]>(() => [
  // 内置项
  'refresh',

  // 扩展内置：加图标
  { id: 'close', icon: 'rt-icon-close' },

  // 扩展内置：改执行方法（v1 $menu.closeMulti(others) → 扁平解构）
  {
    id: 'closeOthers',
    handler: ({ closeMulti, others }) => {
      closeMulti(others)
      alert('关闭其他页签')
    }
  },

  // 完全自定义（自定义 id 不在语言包，须显式给 title）
  {
    id: 'custom',
    title: '自定义操作',
    tips: '这是一个自定义操作',
    icon: 'rt-icon-doc',
    class: 'custom-action',
    // items 已解包为数组，直接用无 .value
    visible: (ctx) => ctx.$tabs.items.length < 3,
    enable: (ctx) => !(ctx.data.index % 2),
    handler: (ctx) => {
      console.log(ctx)
      alert('这是自定义操作，请打开控制台查看输出参数')
    }
  },

  // 有状态项：全屏（title/icon 函数式随状态变）
  {
    id: 'fullscreen',
    title: () => (fullscreen.value ? '退出全屏' : '全屏'),
    icon: () => (fullscreen.value ? 'rt-icon-fullscreen-exit' : 'rt-icon-fullscreen'),
    handler: () => setTimeout(toggle, 300)
  }
])
</script>
