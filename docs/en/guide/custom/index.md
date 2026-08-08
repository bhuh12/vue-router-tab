# Tab Behavior

<script setup>
import { DEMO_ROUTES } from '../../../.vitepress/demoRoutes'
</script>

## Drag Sorting

Enabled by default; set `:dragsort="false"` to disable it.

<DocLinks api="router-tab#props" :demo="DEMO_ROUTES.Dragsort" />

```vue
<template>
  <RouterTab :dragsort="false" />
</template>
```

## New Tab Insert Position

`append` controls where new tabs are inserted:

| Value  | Description                   |
| ------ | ----------------------------- |
| `last` | End of the tab list (default) |
| `next` | After the current tab         |

<DocLinks api="router-tab#props" :demo="DEMO_ROUTES.Append" />

```vue
<template>
  <RouterTab append="next" />
</template>
```

## Closing the Last Tab

By default, the last tab cannot be closed manually; attempting to close it shows the message for `msg.keepLastTab`.

Set `:keep-last-tab="false"` to allow closing it; after closing, it navigates to the default route (the `defaultPage` prop, or the RouterTab parent route's path if not configured).

<DocLinks api="router-tab#props" :demo="DEMO_ROUTES.CloseLastTab" />

```vue
<template>
  <RouterTab :keep-last-tab="false" />
</template>
```

::: tip Two Sources for closable
Whether the close button is shown on a tab is determined by two things together: the route's `meta.routerTab.closable` (default `true`) and the check for "`keepLastTab` with only 1 tab left".

The `closable` obtained in the slot is this **computed result**, not the same as `tab.closable`. See [Tab Slots](./slot) for details.
:::

## Related Options

- [Transitions](./transition): `tabTransition` / `pageTransition`
- [Tab Caching](../advanced/cache): `keepAlive` / `maxAlive` / `reuse`
- [Initial Tabs](../advanced/initial-tabs): `tabs`
