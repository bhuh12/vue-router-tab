# Leave Confirm

When the tab **close**, **refresh**, **replace**, **leave** the current route, or the browser window **close**, **refresh**, `beforePageLeave` will be triggered, allow or prevent the tab page to leave by returning a `Promise`.

::: warning
`beforePageLeave` is at the outermost level of the component, not in `methods`
:::

<doc-links api="#pagecomp-beforepageleave" demo="/initial-tabs/page-leave" />

**Example:**

```javascript {13,15,18,23,33,44}
export default {
  /**
   * confirm before leaving
   * @param {Object} tab tab info
   * @param {String} type leaving type
   *   close: tab close
   *   refresh: tab refresh
   *   replace: tab replace
   *   leave: leave the route
   *   unload: browser window close or refresh
   * @returns {String|Promise}
   */
  beforePageLeave(tab, type) {
    //If the value has not changed, just leave the tab
    if (this.editValue === this.value) return

    // When the browser window is refreshed or closed, supported browsers will display a confirmation message
    if (type === 'unload') {
      return `Your changes on the tab "${tab.title}" have not been completed, Do you want to leave?`
    }

    // leaving type
    const action = {
      close: 'close',
      refresh: 'refresh',
      replace: 'replace',
      leave: 'leave'
    }[type]

    const msg = `Are you sure to ${action} the tab “${tab.title}”?`

    // Promise resolve to allow the page to leave
    return new Promise((resolve, reject) => {
      if (confirm(msg)) {
        resolve()
      } else {
        reject(`Refuse to ${action} the page`)
      }
    })

    // The confirm component of Element is used here
    // You need to configure closeOnHashChange to false
    // to avoid the route switching causing the confirmation box to close
    // this.$confirm(msg, 'prompt', { closeOnHashChange: false })
  }
}
```
