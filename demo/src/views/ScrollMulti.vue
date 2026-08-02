<template>
  <div class="scroll-demo">
    <div class="custom-scroller">
      <p v-for="(item, index) in list" :key="index">
        这里是滚动内容的第 <strong>{{ index + 1 }}</strong> 行
      </p>
    </div>

    <div class="custom-scroller-1">
      <p v-for="(item, index) in list" :key="index">
        这里是滚动内容的第 <strong>{{ index + 1 }}</strong> 行
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import { useRouterPage } from 'vue-router-tab'

/** 长列表数据 */
const list = ref(Array.from({ length: 100 }))

// 多个页面级滚动容器（数组式，各自独立记忆）
useRouterPage({ pageScroller: ['.custom-scroller', '.custom-scroller-1'] })
</script>

<style lang="scss" scoped>
.scroll-demo {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  height: 100%;
}

.custom-scroller,
.custom-scroller-1 {
  position: relative;
  flex: 1;
  padding-left: 20px;
  overflow: auto;
  border: 1px solid #eaecef;

  &:hover {
    border-color: #ccc;
  }
}

.custom-scroller-1 {
  margin-top: 20px;
}
</style>
