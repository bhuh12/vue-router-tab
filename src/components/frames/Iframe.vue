<template>
  <router-tab @iframe-mounted="iframeMounted" @iframe-loaded="iframeLoaded" />
</template>

<script>
export default {
  methods: {
    // iframe 节点挂载就绪
    iframeMounted(url, iframe) {
      console.log('iframe-mounted:', url, iframe.contentWindow)
    },

    // iframe 内容加载成功
    iframeLoaded(url, iframe) {
      console.log('iframe-loaded:', url, iframe.contentWindow)
    }
  }
}
</script>
