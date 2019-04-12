<template>
  <div class="site-link">
    <a
      v-for="({label, icon, url}, index) in links"
      :key="index"
      :href="url"
      :target="url.indexOf('http') === 0 ? '_blank' : '_self'"
      :title="label"
      :class="`rt-icon-${icon}`"
    />
  </div>
</template>

<script>
export default {
  name: 'SiteLink',
  data () {
    return {
      links: [{
        label: 'GitHub',
        icon: 'github',
        url: 'https://github.com/bhuh12/vue-router-tab'
      }, {
        label: '文档和API',
        icon: 'api',
        url: 'https://bhuh12.github.io/vue-router-tab/'
      }, {
        label: 'Issues',
        icon: 'feedback',
        url: 'https://github.com/bhuh12/vue-router-tab/issues'
      }, {
        label: '作者主页',
        icon: 'home',
        url: 'https://bhuh.net'
      }]
    }
  }
}
</script>

<style lang="scss" scoped>
.site-link {
  display: flex;
  justify-content: space-around;
  padding: .8em 0;
  text-align: center;

  a {
    font-size: 1.5rem;
    color: #888;
    text-decoration: none;
    transition: all .1s ease;

    &:hover,
    &:active {
      color: $color;
      transform: scale(1.2);
    }
  }
}
</style>
