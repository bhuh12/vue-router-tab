// 页签刷新后还原
export default {
  computed: {
    // 刷新还原存储 key
    restoreKey() {
      const { restore, basePath } = this

      if (!restore || typeof sessionStorage === 'undefined') return ''

      let key = `RouterTab:restore:${basePath}`

      typeof restore === 'string' && (key += `:${restore}`)

      return key
    }
  },

  mounted() {
    // 页面重载前保存页签数据
    window.addEventListener('beforeunload', this.saveTabs)
  },

  destroyed() {
    window.removeEventListener('beforeunload', this.saveTabs)
  },

  watch: {
    // 监听 restoreKey 变化自动还原页签
    restoreKey() {
      if (this.restoreWatch) {
        const { activeTab } = this
        this.initTabs()

        if (!this.activeTab) {
          this.items.push(activeTab)
        }
      }
    }
  },

  methods: {
    // 保存页签数据
    saveTabs() {
      this.restoreKey &&
        sessionStorage.setItem(this.restoreKey, JSON.stringify(this.items))
    },

    // 清除页签缓存数据
    clearTabsStore() {
      this.restoreKey && sessionStorage.removeItem(this.restoreKey)
    },

    // 从缓存读取页签
    restoreTabs() {
      if (!this.restoreKey) return false

      let tabs = sessionStorage.getItem(this.restoreKey)
      let hasStore = false

      try {
        tabs = JSON.parse(tabs)

        if (Array.isArray(tabs) && tabs.length) {
          hasStore = true
          this.presetTabs(tabs)
        }
      } catch (e) {}

      return hasStore
    }
  }
}
