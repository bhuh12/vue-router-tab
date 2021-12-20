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

/** 更新页签 */
function updateTab(info) {
  const tab = typeof info === 'string' ? { title: info } : info
  const { activeTab } = this.$tabs || emptyObj

  if (tab && activeTab) {
    for (const key in tab) {
      if (!['id', 'to'].includes(key)) {
        this.$set(activeTab, key, tab[key])
      }
    }
  }
}

// 路由页面混入
export default {
  watch: {
    // 监听 routerTab 字段，更新页签信息
    routeTab: {
      handler(val) {
        if (!val || this._inactive) return
        updateTab.call(this, val)
      },
      deep: true,
      immediate: true
    }
  },

  // 创建前记录缓存
  mounted() {
    const { $tabs } = this
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

  // 页签激活时更新页签
  activated() {
    this.routeTab && updateTab.call(this, this.routeTab)
  },

  destroyed() {
    if (this._beforeunload) {
      window.removeEventListener('beforeunload', this._beforeunload)
    }
  }
}
