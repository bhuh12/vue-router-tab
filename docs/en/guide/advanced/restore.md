# Tab Restoration

<DocLinks api="router-tab#props" :demo="DEMO_ROUTES.Restore" />

<script setup>
import { DEMO_ROUTES } from '../../../.vitepress/demoRoutes'
</script>

Restore the previous tab list after a browser refresh. Data is stored in **sessionStorage**, so closing the tab invalidates it, and reopening starts clean.

## Enabling It

```vue
<template>
  <RouterTab restore />
</template>
```

## Customizing the Storage Key

`restore`'s type is `boolean | string`: passing a string is used as a key suffix, to isolate data across multiple instances or multiple users.

```vue
<template>
  <RouterTab :restore="userId" />
</template>
```

The storage key is composed of:

```
RouterTab:restore:{basePath}             // restore: true
RouterTab:restore:{basePath}:{string}    // restore: 'custom value'
```

`basePath` is the path of RouterTab's parent route, so instances under different pages are naturally isolated; multiple instances under the same page need a string suffix to distinguish them.

::: tip Isolating by user
`:restore="userId"` can prevent seeing the previous account's tabs after switching accounts. A more thorough approach is to call `tabs.reset()` on logout, which clears the restore storage.
:::

## Save Timing

By default it saves once on `beforeunload` (browser refresh / close).

Enabling `restoreWatch` saves immediately every time the tab list changes:

```vue
<template>
  <RouterTab restore restore-watch />
</template>
```

| Config                     | Save timing      | Use case                             |
| -------------------------- | ---------------- | ------------------------------------ |
| `restore` (default)        | `beforeunload`   | Regular refresh restoration          |
| `restore` + `restoreWatch` | Every tab change | Worried about losing data on a crash |

`restoreWatch` causes frequent `sessionStorage` writes; enable it as needed when tab operations are frequent.

## Priority Relative to Initial Tabs

When restore data exists it's **restored with priority**, bypassing the [`tabs`](./initial-tabs) preset:

1. Read `sessionStorage`; if it's a non-empty array, use the restored data and stop
2. Otherwise use the `tabs` preset

If the stored data is corrupted (JSON parse failure), it's silently ignored and falls back to `tabs`.

## Clearing Restore Data

```js
import { useRouterTab } from 'vue-router-tab'

const tabs = useRouterTab()

// reset clears the restore storage + clears the cache + rebuilds the initial tabs + navigates to the default page
tabs.reset()
```

## Notes

::: warning Restores the tab list, not page state
Only tab metadata (address, title, icon, etc.) is restored. Internal page state (form input, scroll position) is lost on refresh — that's `KeepAlive`'s domain, which doesn't persist across refreshes.
:::

::: warning Automatically disabled in SSR environments
The implementation relies on `sessionStorage`, which doesn't exist during server-side rendering. The component checks `typeof sessionStorage === 'undefined'` internally, silently disabling the feature in that case without erroring.
:::

## Full Example

<<< ../../../../demo/src/frames/Restore.vue
