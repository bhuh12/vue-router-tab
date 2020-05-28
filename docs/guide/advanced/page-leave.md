# Close confirmation

`BeforePageLeave` is triggered when the tab is **closed**, **refreshed**, or **replaced**, the Promise resolve and reject are used to allow or prevent the tab page from leaving.

::: warning

- `beforePageLeave` is at the outermost level of the component, not in`methods`

- If you also need to block before the browser page closes or refreshes, please use
  [`onbeforeunload`](https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onbeforeunload)
  :::

<doc-links demo="/initial-tabs/page-leave"></doc-links>

**Example:**

```javascript {3,15,21,23,28,29}
export default {
  // confirm before leaving
  beforePageLeave(resolve, reject, tab, type) {
    // types
    const action = {
      close: 'shut down',
      refresh: 'refresh',
      replace: 'replace'
    }[type]

    const msg = `Are you sure you want to ${action} tab “${tab.title}”？`

    //If the value has not changed, just leave the tab
    if (this.editValue === this.value) {
      resolve()
      return
    }

    // Confirm the prompt when the value changes
    if (confirm(msg)) {
      resolve()
    } else {
      reject('Refuse to leave the page')
    }

    /*
    // The confirm component of Element is used here
    // You need to configure closeOnHashChange to false
    // to avoid the route switching causing the confirmation box to close
    this.$confirm(msg, 'prompt', { closeOnHashChange: false })
      .then(resolve)
      .catch(reject)
    */
  }
}
```
