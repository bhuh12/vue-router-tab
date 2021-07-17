<template>
  <aside class="app-sd">
    <div class="app-sd-menu">
      <menu-item v-for="(item, index) in menu" :key="index" :data="item" />
    </div>
    <footer class="app-sd-ft">
      <site-link />
    </footer>
  </aside>
</template>

<script>
import MenuItem from './MenuItem.vue'
import SiteLink from './SiteLink.vue'

import menu from '../config/menu'

export default {
  name: 'AppAside',
  components: { MenuItem, SiteLink },
  data() {
    return { menu }
  }
}
</script>

<style lang="scss" scoped>
.app-sd {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  background-color: rgba(#fff, 0.95);
  border-right: 1px solid #eaecef;

  &-menu {
    flex: auto;
    height: 0;
    padding-top: 1rem;
    overflow-y: auto;

    > .menu-group {
      margin-bottom: 1rem;
    }
  }

  &-ft {
    border-top: 1px solid #eee;

    @include screen-pc {
      .site-link {
        display: none;
      }
    }
  }
}
</style>
