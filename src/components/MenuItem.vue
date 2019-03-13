<template>
  <h3 class="menu-title" v-if="data.text && !data.to">{{data.text}}</h3>

  <router-link class="menu-item" v-else-if="data.to" :to="data.to">{{data.text}}</router-link>
</template>

<script>
export default {
  name: 'MenuItem',
  props: {
    data: Object
  }
}
</script>
