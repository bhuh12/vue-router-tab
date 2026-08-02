<template>
  <RouterTab :tabs="tabs" />
</template>

<script setup lang="ts">
/** 预设初始页签（对照 v1，覆盖 5+ 种写法） */
const tabs = [
  // 仅 fullpath 字符串，自动从 router 取标题/图标
  '/initial-tabs/page-leave',
  // 完整配置 + 不可关闭
  { to: '/initial-tabs/tab-dynamic', title: '异步页签', closable: false },
  // 预设标题（动态标题页需要）
  { to: '/initial-tabs/page/1', title: '页面1' },
  // location 对象式
  { to: { path: '/initial-tabs/page/2', query: { t: 2 } }, title: '页面2' },
  // 默认 key 下与上一个页签 key 相同，只保留先出现的
  { to: '/initial-tabs/page/2?t=1', title: '页面2-1' },
  // iframe 页签（cn.vuejs.org 禁止 iframe 嵌入，改用自身文档站）
  `/initial-tabs/iframe/${encodeURIComponent('https://bhuh12.github.io/vue-router-tab/')}/文档/rt-icon-web`
]
</script>
