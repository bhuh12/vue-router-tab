<template>
  <router-link v-if="data.to" class="menu-item" :to="data.to">
    {{ data.text }}
  </router-link>

  <div v-else-if="data.children && data.children.length" class="menu-group">
    <h3 class="menu-title">
      {{ data.text }}
    </h3>
    <div class="menu-list">
      <menu-item
        v-for="(item, index) in data.children"
        :key="index"
        :data="item"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'MenuItem',
  props: {
    data: Object
  }
}
</script>

<style lang="scss" scoped>
$fs: 0.875rem;
.menu-item {
  display: block;
  padding: 0.35rem 1rem 0.35rem 1.25rem;
  color: #2c3e50;
  font-size: $fs;
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
  margin: 0.5rem 0;
  padding: 0 1.25rem;
  font-weight: 600;
  font-size: 1em;
}

.menu-list {
  margin: 0;
  padding: 0;
  padding-left: 1rem;

  .menu-list .router-link-active {
    font-weight: 400;
  }

  .menu-group .menu-title {
    margin: 0.3rem 0;
    font-size: $fs;
  }
}
</style>
