<template>
  <header class="app-header">
    <div class="app-header__home">
      <a class="app-header__toggle rt-icon-menu" @click="$emit('sidebar-change')" />
      <img class="app-header__logo" src="/img/logo.svg" alt="Vue Router Tab - logo" />
      <h2 class="app-header__title">
        <a class="app-header__title-link" href="../">Vue Router Tab</a> - Demo
      </h2>
    </div>

    <SiteLink class="app-header__links" />
  </header>
</template>

<script setup lang="ts">
import SiteLink from './SiteLink.vue'

defineEmits<{
  /** 切换侧边栏展开状态（移动端） */
  'sidebar-change': []
}>()
</script>

<style lang="scss" scoped>
.app-header {
  position: relative;
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);

  &__home {
    display: flex;
    align-items: center;
  }

  &__toggle {
    display: none;
    margin-left: 0.5rem;
    padding: 0.5rem;
    font-size: 1.25rem;
    cursor: pointer;

    @include screen-mob {
      display: block;
    }
  }

  &__logo {
    $s: 1.3rem;
    width: $s;
    height: $s;
    margin: 0 0.5rem 0 1.5rem;

    @include screen-mob {
      margin-left: 0.5rem;
    }
  }

  &__title {
    margin: 0;
    font-weight: 400;
    font-size: 1.3rem;
    line-height: 1;
  }

  &__title-link {
    color: $text;
    font-weight: 600;
    text-decoration: none;

    &:hover {
      color: $color;
    }
  }

  &__links {
    margin-right: 1em;

    @include screen-mob {
      display: none;
    }

    :deep(.site-link__link) {
      margin: 0 0.3em;
    }
  }
}
</style>
