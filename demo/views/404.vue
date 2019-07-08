<template>
  <div
    class="page-404"
    :class="{
      'global-404': $route.path === '/404'
    }"
  >
    <div>
      <h2>页面找不到了！！！</h2>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.global-404 {
  padding: 15px;
}
</style>
