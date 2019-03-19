<template>
  <main class="app-main">
    <router-tab
      page-transition="page-fade"
      tab-transition="tab-scale"
    />
  </main>
</template>

<style lang="scss" scoped>
/deep/ .page-fade {
  &-enter-active,
  &-leave-active {
    transition: opacity .5s;
  }

  &-enter,
  &-leave-to {
    opacity: 0;
  }
}

/deep/ .tab-scale {
  &-enter-active,
  &-leave-active {
    transition: opacity .5s, transform .5s;
  }

  &-enter,
  &-leave-to {
    opacity: 0;
    transform: scale(1.5);
  }
}
</style>
