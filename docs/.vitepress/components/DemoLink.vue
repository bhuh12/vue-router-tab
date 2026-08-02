<template>
  <a class="demo-link" :href="url" target="_blank" rel="noopener noreferrer">
    <slot>Demo</slot>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      x="0px"
      y="0px"
      viewBox="0 0 100 100"
      width="15"
      height="15"
      class="demo-link__icon"
    >
      <path
        fill="currentColor"
        d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"
      ></path>
      <polygon
        fill="currentColor"
        points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"
      ></polygon>
    </svg>
  </a>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'

import type { ThemeConfig } from '../config'

const props = defineProps<{
  /** demo 首屏路径（`#` 后部分），如 `/default/page/1` */
  href: string
}>()

const { theme } = useData<ThemeConfig>()

// demoUrl 已含 base（themeConfig 自定义字段不经 VitePress 处理），不要再套 withBase()
// demo 为 hash 路由，须拼 `#`
const url = computed(() => `${theme.value.demoUrl}#${props.href}`)
</script>

<style lang="scss" scoped>
.demo-link {
  // 内容 + 图标同行显示，避免容器变窄时图标被挤到下一行
  display: inline-flex;
  align-items: center;
  gap: 0.25em;
  white-space: nowrap;

  &__icon {
    flex-shrink: 0;
  }
}
</style>
