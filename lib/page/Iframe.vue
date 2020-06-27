<template>
  <div class="router-tab-iframe-fake" />
</template>

<script>
// iframe 页签页面
export default {
  name: 'Iframe',
  inject: ['RouterTab'],

  props: {
    src: String,
    title: String,
    icon: String
  },

  computed: {
    // 链接安全过滤，避免执行js
    url() {
      let { src } = this

      // XSS 攻击链接返回空白页
      if (/^javascript:/.test(src)) {
        return 'about:blank'
      }

      return src
    }
  },

  async mounted() {
    let { url, RouterTab: $tab } = this
    let { iframes } = $tab

    if (!iframes.includes(url)) {
      iframes.push(url)
    }

    $tab.currentIframe = url

    await this.$nextTick()
    this.RouterTab.iframeMounted(url)
  },

  activated() {
    this.RouterTab.currentIframe = this.url
  },

  deactivated() {
    this.RouterTab.currentIframe = null
  },

  // 组件销毁后移除 iframe
  destroyed() {
    let { url } = this
    let { iframes } = this.RouterTab
    let index = iframes.indexOf(url)

    if (index > -1) {
      iframes.splice(index, 1)
    }
  }
}
</script>
