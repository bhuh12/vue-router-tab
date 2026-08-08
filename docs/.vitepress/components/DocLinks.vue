<template>
  <div class="doc-links">
    <a v-if="api" :href="apiHref">API</a>
    <DemoLink v-if="demo" :href="demo">Demo</DemoLink>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { withBase, useData } from 'vitepress'

import DemoLink from './DemoLink.vue'
import type { ThemeConfig } from '../config'

const props = defineProps<{
  /** API 页路径，可带锚点，如 `router-tab#props` */
  api?: string
  /** demo 首屏路径，取自 demoRoutes.ts */
  demo?: string
}>()

const { localeIndex } = useData<ThemeConfig>()

// 组件里的站内绝对路径不经 VitePress 处理，必须显式 withBase()，否则 base 下断链；
// withBase 不感知 locale 前缀，须自行按当前 locale 补 `/en` 等前缀
const apiHref = computed(() => {
  const prefix = localeIndex.value === 'root' ? '' : `/${localeIndex.value}`
  return withBase(`${prefix}/api/${props.api ?? ''}`)
})
</script>

<style lang="scss" scoped>
.doc-links {
  float: right;
  padding: 5px 1em;
  background-color: #f7f7f7;
  border-radius: 2em;
  box-shadow: inset 0 0 2px rgb(0 0 0 / 5%);

  // 相邻元素负边距校正（v1 平移，VitePress 的 md 渲染结构不同，须实际验证是否命中）
  p + &,
  div + & {
    margin-top: -3px;
  }

  h2 + & {
    margin-top: -2.4em;
  }

  > a {
    margin-right: 1em;

    &:last-child {
      margin-right: 0;
    }
  }
}

html.dark .doc-links {
  background-color: var(--vp-c-bg-soft);
}
</style>
