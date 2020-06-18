// 路由页面混入
export default {
  // 创建前记录缓存
  mounted() {
    // 监听 routerTab 字段，更新页签信息
    this.$watch(
      'routeTab',
      function(val) {
        if (!val) return

        const tab = typeof val === 'string' ? { title: val } : val
        const { activeTab } = this.$routerTab || {}

        if (tab && activeTab) {
          for (const key in tab) {
            if (!['id', 'to'].includes(key)) {
              this.$set(activeTab, key, tab[key])
            }
          }
        }
      },
      {
        deep: true,
        immediate: true
      }
    )
  }
}
