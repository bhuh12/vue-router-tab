import { warn, messages } from '../../util/warn'

// iframe 页签
export default {
  data () {
    return {
      iframes: [],
      currentIframe: null,
      iframeNamePrefix: 'RouterTabIframe-'
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
    openIframe (src, title, icon) {
      let path = this.getIframePath(src, title, icon)
      this.$router.push(path)
    },

    // 关闭 iframe 页签
    closeIframe (src) {
      let path = this.getIframePath(src)
      this.close(path, false)
    },

    // 刷新 iframe 页签
    refreshIframe (src) {
      let path = this.getIframePath(src)
      this.refresh(path, false)
    },

    // todo: 废弃
    openIframeTab (...args) {
      this.openIframe(...args)
      warn(false, messages.renamed('openIframe'))
    },

    // todo: 废弃
    closeIframeTab (...args) {
      this.closeIframe(...args)
      warn(false, messages.renamed('closeIframe'))
    },

    // todo: 废弃
    refreshIframeTab (...args) {
      this.refreshIframe(...args)
      warn(false, messages.renamed('refreshIframe'))
    },

    // 根据 url 获取 iframe 节点
    getIframeEl (url) {
      const name = this.iframeNamePrefix + url
      return document.getElementsByName(name)[0]
    },

    // iframe 节点 mounted
    iframeMounted (url) {
      const iframe = this.getIframeEl(url)
      this.$emit('iframe-mounted', url, iframe)
    },

    // iframe 加载成功
    iframeLoaded (url) {
      const iframe = this.getIframeEl(url)
      this.$emit('iframe-loaded', url, iframe)
    }
  }
}
