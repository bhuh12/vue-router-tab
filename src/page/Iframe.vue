<template>
  <div class="router-tab-iframe-fake" />
</template>

<script>
export default {
  name: 'Iframe',
  props: {
    src: String,
    title: String,
    icon: String
  },
  data () {
    return {
      routeTab: null
    }
  },
  mounted () {
    let { src, title, icon, $routerTab: $tab } = this
    let { iframes } = $tab

    this.routeTab = { title, icon }

    if (!iframes.includes(src)) {
      iframes.push(src)
    }
    $tab.currentIframe = src
  },

  activated () {
    this.$routerTab.currentIframe = this.src
  },

  deactivated () {
    this.$routerTab.currentIframe = null
  },

  destroyed () {
    let { src } = this
    let { iframes } = this.$routerTab
    let index = iframes.indexOf(src)

    if (index > -1) {
      iframes.splice(index, 1)
    }
  }
}
</script>>
