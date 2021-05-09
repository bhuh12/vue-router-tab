# 页面离开确认

当页签**关闭**、**刷新**、**替换**，**离开**当前路由，或浏览器窗口**关闭**、**刷新**时，会触发 `beforePageLeave`，通过 `Promise` 来允许或者阻止页签页面的离开。

::: warning
`beforePageLeave` 在组件的最外层，不是放在 `methods` 里
:::

<doc-links api="#pagecomp-beforepageleave" demo="/initial-tabs/page-leave" />

**示例：**

```javascript {13,15,18,23,33,44}
export default {
  /**
   * 页面离开前确认
   * @param {Object} tab 页签信息
   * @param {String} type 离开类型：
   *   close: 页签关闭
   *   refresh: 页签刷新
   *   replace: 页签被替换
   *   leave: 路由离开
   *   unload: 浏览器刷新或者关闭
   * @returns {String|Promise}
   */
  beforePageLeave(tab, type) {
    // 值未改变，则直接离开页签
    if (this.editValue === this.value) return

    // 浏览器窗口刷新或者关闭时，支持的浏览器会展示确认消息
    if (type === 'unload') {
      return `您在“${tab.title}”页签的更改尚未完成，是否要离开？`
    }

    // 离开类型
    const action = {
      close: '关闭',
      refresh: '刷新',
      replace: '替换',
      leave: '离开'
    }[type]

    const msg = `您确认要${action}页签“${tab.title}”吗？`

    // 返回 promise，resolve 离开，reject 阻止离开
    return new Promise((resolve, reject) => {
      // 值改变则确认提示
      if (confirm(msg)) {
        resolve()
      } else {
        reject(`您拒绝了${action}页签`)
      }
    })

    // 此处使用了 Element 的 confirm 组件
    // 需将 closeOnHashChange 配置为 false，以避免路由切换导致确认框关闭
    // return this.$confirm(msg, '提示', { closeOnHashChange: false })
  }
}
```
