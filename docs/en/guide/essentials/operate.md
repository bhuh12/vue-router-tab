# Tab Operations

<DocLinks api="use-router-tab" :demo="DEMO_ROUTES.Default" />

<script setup>
import { DEMO_ROUTES } from '../../../.vitepress/demoRoutes'
</script>

## Getting the Instance

Get the instance via `useRouterTab()`:

```vue
<script setup>
import { useRouterTab } from 'vue-router-tab'

const tabs = useRouterTab()

function openPage() {
  tabs.open('/page/2')
}
</script>
```

::: tip Values are already unwrapped
The instance internally is a `reactive()` object, so the fields you get are already unwrapped, not `ref`:

```js
const tabs = useRouterTab()
tabs.activeTabId // read directly, not tabs.activeTabId.value
```

`items` and `contextData` are reactive proxies — **both readable and writable**.
:::

For multiple instances, pass `tabId` to get a specific instance, see [Multiple Instances](../advanced/multi-instance). Calling this before RouterTab is mounted throws an error.

## Opening / Switching Tabs

### Native Vue Router Approach (Recommended)

Previously visited addresses hit their cached tab:

```vue
<template>
  <RouterLink to="/page/1">Page 1</RouterLink>
</template>
```

```js
import { useRouter } from 'vue-router'

const router = useRouter()
router.push('/page/1')
```

### open

```ts
open(arg: RouteLocationRaw | OpenArg, isReplace = false, refresh = true)
```

By default it refreshes the target tab (`refresh` defaults to `true`), i.e. **opens it fresh**:

```js
tabs.open('/page/2')
```

Object-style arguments are also supported:

```js
tabs.open({
  to: '/page/2', // Target address
  replace: false, // Whether to replace the current history entry, default false
  refresh: true, // Whether to open fresh, default true
  isSameTab: false // Only open fresh when it hits the same tab
})
```

::: tip Positional arguments still work
`isSameTab: true` is the semantic equivalent for object-style arguments. Passing the string `'sameTab'` with positional arguments has the same effect:

```js
tabs.open('/page/2', false, 'sameTab')
```

:::

## Closing Tabs

```ts
close(arg?: CloseArg | RouteLocationRaw, to?: RouteLocationRaw)
closeTab(id = activeTabId, to?, force = false)
```

```js
// Close the current tab
tabs.close()

// Close the tab at a specific path
tabs.close('/page/1')

// Close the tab at a specific location
tabs.close({ name: 'page', params: { id: 2 } })

// Close '/page/1' and navigate to '/page/2'
tabs.close('/page/1', '/page/2')

// Close by tab id
tabs.closeTab(tabs.activeTabId)
```

Full options:

```js
tabs.close({
  id: '', // Tab id (i.e. the return value of key), mutually exclusive with path
  path: '/page/2', // Close by route address; if neither id nor path is given, closes the current tab
  match: true, // Whether the path approach requires an exact match, default true
  force: true, // Whether to force close (skipping beforePageLeave), default true
  to: '/page/1', // Address to navigate to after closing; falls back to an adjacent tab, or the default page if none
  refresh: false // Whether to open the navigation target fresh, default false
})
```

::: tip Passing null to to skips navigation
`to: null` means staying in place after closing, without navigating anywhere.
:::

The behavior when closing the last tab is controlled by `keepLastTab`, see [Tab Behavior](../custom/).

## Refreshing Tabs

```ts
refresh(path?: RouteLocationRaw, match = true, force = true)
refreshTab(id = activeTabId, force = false)
refreshAll(force = false)
reload()
```

```js
// Refresh the current tab
tabs.refresh()

// Refresh the tab at a specific path
tabs.refresh('/page/1')

// Fuzzy match refresh: addresses sharing a tab, like '/page/1?q=2', are also matched
tabs.refresh('/page/1', false)

// Refresh by id
tabs.refreshTab(tabs.activeTabId)

// Refresh all cached tabs
tabs.refreshAll()

// Force refresh all tabs, ignoring each page's beforePageLeave
tabs.refreshAll(true)

// Only reload the current page view (skips tab matching)
tabs.reload()
```

::: tip What force means
`force = true` skips the page's `beforePageLeave` confirmation. Note that `refresh()` defaults to `force = true` (refreshes directly), while `refreshTab()` / `refreshAll()` default to `force = false` (triggers confirmation).
:::

## Resetting Tabs

```ts
reset((to = defaultPath))
```

When a user logs back in or switches roles, you need to clear all tabs and return to the initial state:

```js
// Clear cache + clear restore storage + rebuild initial tabs + navigate to the default page
tabs.reset()

// Reset and navigate to a specific address
tabs.reset('/page/2')
```

The default page uses the `defaultPage` prop; if not configured, it falls back to RouterTab's parent route address.

## Adjusting Tabs

```ts
adjust()
```

After the tab container's size changes (e.g. a sidebar collapses), manually trigger a recalculation of the scroll position and active tab:

```js
tabs.adjust()
```

## Iframe Tab Operations

```js
const src = 'https://example.com'

tabs.openIframe(src, 'Title', 'rt-icon-link')

// closeIframe / refreshIframe both require src (to locate the tab by address)
tabs.closeIframe(src)
tabs.refreshIframe(src)
```

See [Iframe Tabs](./iframe).

## Context Menu

```js
// Arguments: tab id, tab index, mouse event (optional, used to position the menu)
tabs.showContextmenu(tab.id, index, event)

tabs.hideContextmenu()
```

See [Context Menu](../custom/contextmenu).

## Full Method List

`useRouterTab()` returns 23 fields (9 data + 14 methods); see [API - useRouterTab](/en/api/use-router-tab) for the full breakdown.
