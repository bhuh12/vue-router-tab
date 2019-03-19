<template>
  <div
    v-if="data.children && data.children.length"
    class="menu-group"
  >
    <menu-item :data="data" />
    <div class="menu-list">
      <menu-group
        v-for="(item, index) in data.children"
        :key="index"
        :data="item"
      />
    </div>
  </div>

  <menu-item
    v-else
    :data="data"
  />
</template>

<script>
import MenuItem from './MenuItem.vue'

export default {
  name: 'MenuGroup',
  components: { MenuItem },
  props: {
    data: Object
  }
}
</script>

<style lang="scss" scoped>
$fs: .875rem;
.menu-item {
  display: block;
  padding: .35rem 1rem .35rem 1.25rem;
  font-size: $fs;
  color: #2c3e50;
  text-decoration: none;
  cursor: pointer;

  &.router-link-active,
  &:hover {
    color: $color;
  }

  &.router-link-active {
    font-weight: 700;
  }
}

.menu-title {
  padding: 0 1.25rem;
  margin: .5rem 0;
  font-size: 1.1em;
  font-weight: 600;
}

.menu-list {
  margin: 0;
  padding: 0;
  padding-left: 1rem;

  .menu-list .router-link-active {
    font-weight: 400;
  }

  .menu-group .menu-title {
    margin: .3rem 0;
    font-size: $fs;
  }
}
</style>
