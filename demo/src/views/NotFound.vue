<template>
  <div class="page-404" :class="{ 'page-404--global': route.path === '/404' }">
    <div class="page-404__box">
      <h2 class="page-404__title">页面找不到了！！！</h2>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<style lang="scss" scoped>
.page-404--global {
  padding: 15px;
}
</style>
