// Iframe 页签
export default {
  data() {
    return {
      iframes: [],
      currentIframe: null,
      iframeNamePrefix: 'RouterTabIframe-'
    }
  },

  methods: {
    // 获取 Iframe 页签路由路径
    getIframePath(src, title = null, icon = null) {
      let path =
        `${this.basePath}/iframe/`.replace(/\/+/g, '/') +
        encodeURIComponent(src)

      if (title) {
        path += '/' + title

        if (icon) path += '/' + icon
      }

      return path
    },

    // 打开 Iframe 页签
    openIframe(src, title, icon) {
      let path = this.getIframePath(src, title, icon)
      this.$router.push(path)
    },

    // 关闭 Iframe 页签
    closeIframe(src) {
      let path = this.getIframePath(src)
      this.close({
        path,
        match: false
      })
    },

    // 刷新 Iframe 页签
    refreshIframe(src) {
      let path = this.getIframePath(src)
      this.refresh(path, false)
    },

    // 根据 url 获取 iframe 节点
    getIframeEl(url) {
      const name = this.iframeNamePrefix + url
      return document.getElementsByName(name)[0]
    },

    // iframe 节点 mounted
    iframeMounted(url) {
      const iframe = this.getIframeEl(url)
      this.$emit('iframe-mounted', url, iframe)
    },

    // iframe 加载成功
    iframeLoaded(url) {
      const iframe = this.getIframeEl(url)
      this.$emit('iframe-loaded', url, iframe)
    }
  }
}
