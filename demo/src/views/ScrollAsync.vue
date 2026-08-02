<template>
  <div class="scroll-demo">
    <div class="custom-scroller">
      <div v-if="loading" class="scroll-demo__loading">加载中...</div>

      <p v-for="(item, index) in list" :key="index">
        这里是滚动内容的第 <strong>{{ index + 1 }}</strong> 行
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onActivated } from 'vue'

import { useRouterPage } from 'vue-router-tab'

/** 加载态 */
const loading = ref(false)

/** 长列表数据（异步加载后填充） */
const list = ref<unknown[]>([])

const { restoreScroll } = useRouterPage({ pageScroller: '.custom-scroller' })

// 每次激活异步加载数据，加载完手动还原滚动位置（对照 v1 @page-loaded）
onActivated(async () => {
  list.value = []
  loading.value = true

  await new Promise((resolve) => setTimeout(resolve, Math.random() * 1000))

  list.value = Array.from({ length: 100 })
  loading.value = false

  // 数据渲染后还原：restoreScroll 内部已 nextTick
  await restoreScroll()
})
</script>

<style lang="scss" scoped>
.scroll-demo {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  height: 100%;

  &__loading {
    font-size: 15px;
    line-height: 100px;
    text-align: center;
  }
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
