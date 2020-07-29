import { emptyObj } from '../util'

// 浏览器窗口关闭或者刷新
const beforeunload = ($tabs, tabId, beforePageLeave) => e => {
  if (!$tabs && $tabs._isDestroyed) return

  const tab = $tabs.items.find(item => item.id === tabId)
  const msg = beforePageLeave(tab, 'unload')

  if (msg && typeof msg === 'string') {
    e.preventDefault()
    e.returnValue = msg

    // 非当前页签则切换
    if ($tabs.activeTabId !== tabId) {
      $tabs.open(tab.to, false, false)
    }

    return msg
  }
}

// 路由页面混入
export default {
  watch: {
    // 监听 routerTab 字段，更新页签信息
    routeTab: {
      handler(val) {
        if (!val) return

        const tab = typeof val === 'string' ? { title: val } : val
        const { activeTab } = this.$routerTab || emptyObj

        if (tab && activeTab) {
          for (const key in tab) {
            if (!['id', 'to'].includes(key)) {
              this.$set(activeTab, key, tab[key])
            }
          }
        }
      },
      deep: true,
      immediate: true
    }
  },

  // 创建前记录缓存
  mounted() {
    const $tabs = this.$routerTab
    const { beforePageLeave } =
      (this.$vnode && this.$vnode.componentOptions.Ctor.options) || emptyObj

    // 页面离开确认
    if ($tabs && beforePageLeave) {
      window.addEventListener(
        'beforeunload',
        (this._beforeunload = beforeunload(
          $tabs,
          $tabs.activeTabId,
          beforePageLeave.bind(this)
        ))
      )
    }
  },

  destroyed() {
    if (this._beforeunload) {
      window.removeEventListener('beforeunload', this._beforeunload)
    }
  }
}
