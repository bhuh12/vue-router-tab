<template>
  <aside class="app-aside">
    <div class="app-aside__menu">
      <MenuItem v-for="(item, index) in menu" :key="index" :data="item" />
    </div>
    <footer class="app-aside__footer">
      <SiteLink />
    </footer>
  </aside>
</template>

<script setup lang="ts">
import menu from '../config/menu'

import MenuItem from './MenuItem.vue'
import SiteLink from './SiteLink.vue'
</script>

<style lang="scss" scoped>
.app-aside {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  background-color: rgba(#fff, 0.95);
  border-right: 1px solid #eaecef;

  &__menu {
    flex: auto;
    height: 0;
    padding-top: 1rem;
    overflow-y: auto;

    :deep(.menu-group) {
      margin-bottom: 1rem;
    }
  }

  &__footer {
    border-top: 1px solid #eee;

    @include screen-pc {
      :deep(.site-link) {
        display: none;
      }
    }
  }
}
</style>
