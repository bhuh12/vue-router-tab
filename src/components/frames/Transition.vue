<template>
  <router-tab page-transition="page-fade" tab-transition="tab-scale" />
</template>

<style lang="scss" scoped>
::v-deep {
  // 页面 fade 过渡
  .page-fade {
    &-enter-active,
    &-leave-active {
      transition: opacity 0.5s;
    }

    &-enter,
    &-leave-to {
      opacity: 0;
    }
  }

  // 页签 scale 过渡
  .tab-scale {
    &-enter-active,
    &-leave-active {
      transition: opacity 0.5s, transform 0.5s;
    }

    &-enter,
    &-leave-to {
      transform: scale(1.5);
      opacity: 0;
    }
  }
}
</style>
