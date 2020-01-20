<template>
  <router-link v-if="data.to" class="menu-item" :to="data.to">
    {{ data.text }}
  </router-link>

  <h3 v-else-if="data.text" class="menu-title">
    {{ data.text }}
  </h3>
</template>

<script>
export default {
  name: 'MenuItem',
  props: {
    data: Object
  }
}
</script>
