<template>
  <div
    class="page-404"
    :class="{
      'app-main': $route.path === '/404'
    }"
  >
    <div>
      <h2>页面找不到了！！！</h2>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.app-main {
  padding: 15px;
}
</style>
