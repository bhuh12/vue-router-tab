# Leave Confirmation

<DocLinks api="use-router-page#beforepageleave" :demo="DEMO_ROUTES.Default" />

<script setup>
import { DEMO_ROUTES } from '../../../.vitepress/demoRoutes'
</script>

Block the user when a form has unsaved changes, to avoid losing data from an accidental tab close.

## Basic Usage

```vue
<script setup>
import { ref } from 'vue'
import { useRouterPage } from 'vue-router-tab'

const dirty = ref(false)

useRouterPage({
  beforePageLeave(tab, type) {
    if (!dirty.value) return // No changes, allow it

    return 'You have unsaved changes, leave anyway?' // Returning a string blocks the leave
  }
})
</script>
```

## Signature

```ts
beforePageLeave(tab: Tab | undefined, type: PageLeaveType) => any
```

::: tip tab comes before type
Not `(type, tab)`. The first argument is the current tab object (may be `undefined`), the second is the leave type.
:::

## Five Leave Types

`PageLeaveType` has 5 possible values:

| type      | Trigger scenario                                            |
| --------- | ----------------------------------------------------------- |
| `close`   | Closing a tab                                               |
| `refresh` | Refreshing a tab                                            |
| `leave`   | Navigating to a route outside the current RouterTab         |
| `replace` | The tab's address is replaced (same tab, different address) |
| `unload`  | Browser refresh / tab close                                 |

Show different prompts per type:

```js
useRouterPage({
  beforePageLeave(tab, type) {
    const action = {
      close: 'close',
      refresh: 'refresh',
      replace: 'replace',
      leave: 'leave',
      unload: ''
    }[type]

    return `Are you sure you want to ${action} tab "${tab?.title}"?`
  }
})
```

## Return Value Semantics

The return value is **passed directly to Vue Router's `next()`**, so all `next()` semantics apply:

| Return value                                    | Behavior                                      |
| ----------------------------------------------- | --------------------------------------------- |
| `undefined` / no return                         | Allow                                         |
| String                                          | Block the leave (string used as the message)  |
| `false`                                         | Block the leave                               |
| A location (e.g. `'/other'` or `{ name: 'x' }`) | Redirect to that location instead             |
| A `throw` / rejected Promise                    | Equivalent to `next(false)`, blocks the leave |

### Returning a Promise for Async Confirmation

```js
useRouterPage({
  beforePageLeave(tab, type) {
    return new Promise((resolve, reject) => {
      if (confirm(`Leave "${tab?.title}"?`)) resolve()
      else reject('User cancelled')
    })
  }
})
```

`resolve()` allows the leave, `reject()` blocks it. This is also how you hook up a custom dialog component.

### The unload Type Must Return a String

Browser close / refresh goes through the native `beforeunload`, which only supports a string to trigger the system confirmation dialog — async confirmation doesn't work here:

```js
beforePageLeave(tab, type) {
  if (type === 'unload') return 'You have unsaved changes, leave anyway?'

  // Other types can use async confirmation
  return confirmDialog(tab)
}
```

::: tip Browsers ignore your custom text
For security reasons, modern browsers only show their own standard message for `beforeunload` — the string you return is not displayed. But **whether the return value is empty or not** still determines whether the confirmation dialog appears.
:::

## Skipping Confirmation

Imperative calls can force-skip it:

```js
tabs.close({ force: true }) // Default is already true, no confirmation
tabs.close({ force: false }) // Triggers confirmation

tabs.refresh() // force defaults to true, refreshes immediately
tabs.refreshTab(id) // force defaults to false, triggers confirmation
```

See [Tab Operations](../essentials/operate) for each method's `force` default.

## Known Limitations

::: warning The guard is router-level, only bound to the first instance
The `leave` and `replace` types are triggered via a router guard, and the guard is registered on the router — in a multi-instance setup, **only the first mounted RouterTab instance** has it in effect.

`close` / `refresh` / `unload` don't go through the router guard, so they aren't affected by this limitation.

See [Multiple Instances](./multi-instance) for details.
:::

## Full Example

An example covering all five types:

<<< ../../../../demo/src/views/PageLeave.vue
