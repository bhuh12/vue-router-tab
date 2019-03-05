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
