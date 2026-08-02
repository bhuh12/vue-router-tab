<template>
  <div class="site-link">
    <a
      v-for="({ label, icon, url }, index) in links"
      :key="index"
      class="site-link__link"
      :href="url"
      :title="label"
      :class="`rt-icon-${icon}`"
      target="_blank"
    />
  </div>
</template>

<script setup lang="ts">
/** 站点外链 */
const links = [
  { label: 'GitHub', icon: 'github', url: 'https://github.com/bhuh12/vue-router-tab' },
  { label: 'Gitee', icon: 'gitee', url: 'https://gitee.com/bhuh12/vue-router-tab' },
  { label: '文档和API', icon: 'api', url: '/vue-router-tab/' },
  { label: 'Issues', icon: 'feedback', url: 'https://github.com/bhuh12/vue-router-tab/issues' }
]
</script>

<style lang="scss" scoped>
.site-link {
  display: flex;
  justify-content: space-around;
  padding: 0.8em 0;
  text-align: center;

  &__link {
    color: #888;
    font-size: 1.5rem;
    text-decoration: none;
    transition: all 0.1s ease;

    &:hover,
    &:active {
      color: $color;
      transform: scale(1.2);
    }
  }
}
</style>
