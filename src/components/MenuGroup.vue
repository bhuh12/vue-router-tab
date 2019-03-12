<template>
  <div class="menu-group">
    <h3 class="menu-title" v-if="data.title">{{data.title}}</h3>
    <ul class="menu-list">
      <li class="menu-item" v-for="item in data.data" :key="item.to">
        <router-link :to="item.to">{{item.text}}</router-link>
        <menu-group v-if="item.children" :data="item.children"/>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MenuGroup',
  props: {
    data: Object
  }
}
</script>

<style lang="scss" scoped>
.menu-group {
  .menu-title {
    padding: 0 1.25rem;
    margin-top: 0;
    margin-bottom: .5rem;
    font-size: 1.1em;
    font-weight: 600;
  }

  .menu-list {
    margin: 0;
    padding: 0;
    padding-left: 1rem;
  }

  .menu-item {
    list-style: none;
    font-size: .875rem;

    > a {
      display: block;
      padding: .35rem 1rem .35rem 1.25rem;
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

    .menu-group .router-link-active {
        font-weight: 400;
    }
  }
}
</style>
