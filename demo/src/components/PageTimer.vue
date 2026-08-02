<template>
  <p>
    你在 <strong class="text-strong">{{ pageTime }}</strong> 秒前打开本页面
  </p>
</template>

<script setup lang="ts">
import { ref, onMounted, onActivated, onDeactivated, onBeforeUnmount } from 'vue'

/** 页面打开时刻（实例创建时固定，缓存命中不重置——这是判断缓存是否生效的依据） */
const openTime = Date.now()

/** 已打开秒数 */
const pageTime = ref(0)

/** 计时器句柄 */
let timer: ReturnType<typeof setInterval> | undefined

/** 计算已打开秒数 */
function calcPageTime() {
  pageTime.value = Math.floor((Date.now() - openTime) / 1000)
}

/** 停止计时（失活/卸载时调用，避免后台空转） */
function clearPageTimer() {
  clearInterval(timer)
}

/** 立即重算并重启计时（激活时调用） */
function updatePageTime() {
  calcPageTime()
  clearPageTimer()
  timer = setInterval(calcPageTime, 1000)
}

onMounted(updatePageTime)
onActivated(updatePageTime)
onDeactivated(clearPageTimer)
onBeforeUnmount(clearPageTimer)
</script>
