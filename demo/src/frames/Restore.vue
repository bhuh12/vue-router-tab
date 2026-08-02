<template>
  <RouterTab :restore="restoreKey" restore-watch />
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

/** 动态 restore key：设置后组件自动还原页签数据 */
const restoreKey = ref<string | undefined>(undefined)

onMounted(() => {
  setTimeout(() => (restoreKey.value = '12312312'), Math.random() * 1000)
})
</script>
