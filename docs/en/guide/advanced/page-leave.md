# 页面离开确认

当页签**关闭**、**刷新**或**替换**时会触发 `beforePageLeave`，通过 `Promise` 的 `resolve` 和 `reject` 来允许或者阻止页签页面的离开。

::: warning

- `beforePageLeave` 在组件的最外层，不是放在 `methods` 里

- 如果还需要在浏览器页面关闭或刷新前阻止，请使用 
[`onbeforeunload`](https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onbeforeunload)
:::

<doc-links demo="/initial-tabs/page-leave"></doc-links>

**示例：**

``` javascript {3,15,21,23,28}
export default {
  // 页面离开前确认
  beforePageLeave (resolve, reject, tab, type) {
    // 离开类型
    const action = {
      close: '关闭',
      refresh: '刷新',
      replace: '替换'
    }[type]

    const msg = `您确认要${action}页签“${tab.title}”吗？`

    // 值未改变，则直接离开页签
    if (this.editValue === this.value) {
      resolve()
      return
    }

    // 值改变则确认提示
    if (confirm(msg)) {
      resolve()
    } else {
      reject('拒绝了页面离开')
    }

    /*
    // 此处使用了 Element 的 confirm 组件
    // 需将 closeOnHashChange 配置为 false，以避免路由切换导致确认框关闭
    this.$confirm(msg, '提示', { closeOnHashChange: false })
      .then(resolve)
      .catch(reject)
    */
  }
}
```
