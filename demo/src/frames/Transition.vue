<template>
  <RouterTab page-transition="page-fade" tab-transition="tab-scale" />
</template>

<style lang="scss" scoped>
// 页面 fade 过渡
:deep(.page-fade-enter-active),
:deep(.page-fade-leave-active) {
  transition: opacity 0.5s;
}

:deep(.page-fade-enter-from),
:deep(.page-fade-leave-to) {
  opacity: 0;
}

// 页签 scale 过渡
:deep(.tab-scale-enter-active),
:deep(.tab-scale-leave-active) {
  transition:
    opacity 0.5s,
    transform 0.5s;
}

:deep(.tab-scale-enter-from),
:deep(.tab-scale-leave-to) {
  transform: scale(1.5);
  opacity: 0;
}
</style>
