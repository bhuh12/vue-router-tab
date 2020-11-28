<template>
  <div class="router-tab-iframe-fake" />
</template>

<script>
// Iframe 路由元
export const iframeMeta = {
  key: route => `iframe-${route.params.src}`,
  title: route => route.params.title,
  icon: route => route.params.icon
}

// Iframe 页签页面
export default {
  name: 'Iframe',
  inject: ['$tabs'],
  meta: iframeMeta, // Nuxt 页面路由元

  props: {
    src: String,
    title: String,
    icon: String
  },

  computed: {
    /**
     * 链接安全过滤，屏蔽以下方式 XSS 攻击，并返回空白页：
     * 1. `javascript:` 执行代码：`javascript:alert(1)`
     * 2. `data:` Base64 链接: `'data:text/html;base64,' + window.btoa('<script>alert(1)<\/script>')`
     */
    url() {
      let src = decodeURIComponent(this.src)

      if (/^(javascript|data):/i.test(src)) {
        return 'about:blank'
      }

      return src
    }
  },

  async mounted() {
    let { url, $tabs } = this
    let { iframes } = $tabs

    if (!iframes.includes(url)) {
      iframes.push(url)
    }

    $tabs.currentIframe = url

    await this.$nextTick()
    this.$tabs.iframeMounted(url)
  },

  activated() {
    this.$tabs.currentIframe = this.url
  },

  deactivated() {
    this.$tabs.currentIframe = null
  },

  // 组件销毁后移除 iframe
  destroyed() {
    let { url } = this
    let { iframes } = this.$tabs
    let index = iframes.indexOf(url)

    if (index > -1) {
      iframes.splice(index, 1)
    }
  }
}
</script>
