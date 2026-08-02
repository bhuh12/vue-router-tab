<template>
  <!-- pageScroller 默认即 .router-tab__container，此处显式写出对照 v1 frame 级语义 -->
  <RouterTab :tabs="tabs" page-scroller=".router-tab__container" />
</template>

<script setup lang="ts">
/** 预设页签（对照 v1） */
const tabs = [
  '/page-scroller/page/1',
  '/page-scroller/scroll-position',
  '/page-scroller/scroll-multi',
  '/page-scroller/scroll-async'
]
</script>
