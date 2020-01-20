<template>
  <div class="router-tab-iframe-fake" />
</template>

<script>
// iframe 页签页面
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

  computed: {
    // 链接安全过滤，避免执行js
    url () {
      let { src } = this

      // XSS 攻击链接返回空白页
      if (/^javascript:/.test(src)) {
        return 'about:blank'
      }

      return src
    }
  },

  async mounted () {
    let { url, title, icon, $routerTab: $tab } = this
    let { iframes } = $tab

    this.routeTab = { title, icon }

    if (!iframes.includes(url)) {
      iframes.push(url)
    }

    $tab.currentIframe = url

    await this.$nextTick()
    this.$routerTab.iframeMounted(url)
  },

  activated () {
    this.$routerTab.currentIframe = this.url
  },

  deactivated () {
    this.$routerTab.currentIframe = null
  },

  // 组件销毁后移除 iframe
  destroyed () {
    let { url } = this
    let { iframes } = this.$routerTab
    let index = iframes.indexOf(url)

    if (index > -1) {
      iframes.splice(index, 1)
    }
  }
}
</script>>
