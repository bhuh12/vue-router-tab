// iframe 页签
export default {
  data () {
    return {
      iframes: [],
      currentIframe: null
    }
  },

  methods: {
    // 获取 iframe 页签路由路径
    getIframePath (src, title = null, icon = null) {
      let path = `${this.getBasePath()}/iframe/${encodeURIComponent(src)}`

      if (title) {
        path += '/' + title

        if (icon) path += '/' + icon
      }

      return path
    },

    // 打开 iframe 页签
    openIframeTab (src, title, icon) {
      let path = this.getIframePath(src, title, icon)
      this.$router.push(path)
    },

    // 关闭 iframe 页签
    closeIframeTab (src) {
      let path = this.getIframePath(src)
      this.close(path, false)
    },

    // 刷新 iframe 页签
    refreshIframeTab (src) {
      let path = this.getIframePath(src)
      this.refresh(path, false)
    }
  }
}
