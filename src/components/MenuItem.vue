<template>
  <h3
    v-if="data.text && !data.to"
    class="menu-title"
  >
    {{ data.text }}
  </h3>

  <router-link
    v-else-if="data.to"
    class="menu-item"
    :to="data.to"
  >
    {{ data.text }}
  </router-link>
</template>

<script>
export default {
  name: 'MenuItem',
  props: {
    data: Object
  }
}
</script>
