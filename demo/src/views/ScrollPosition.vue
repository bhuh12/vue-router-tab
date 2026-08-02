<template>
  <div class="scroll-demo">
    <div class="custom-scroller">
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

// 页面级滚动容器：选择器在页面根元素内查找，失活保存、激活还原
useRouterPage({ pageScroller: '.custom-scroller' })
</script>

<style lang="scss" scoped>
.scroll-demo {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  height: 100%;
}

.custom-scroller {
  position: relative;
  flex: 1;
  padding-left: 20px;
  overflow: auto;
  border: 1px solid #eaecef;

  &:hover {
    border-color: #ccc;
  }
}
</style>
