# Multiple Instances

<DocLinks api="router-tab#props" />

Register named instances via `tabId` to have multiple sets of tabs coexist in the same app.

## Registering a Named Instance

```vue
<template>
  <RouterTab tab-id="main" />
</template>
```

`tabId` is typed `string`, with no default. If omitted, it registers as the **default instance**.

## Getting an Instance by id

```js
import { useRouterTab } from 'vue-router-tab'

const mainTabs = useRouterTab('main')
const sideTabs = useRouterTab('side')

// No argument gets the default instance (the one without a tabId configured)
const defaultTabs = useRouterTab()
```

::: danger Getting a nonexistent instance throws

```
[vue-router-tab] useRouterTab() 需在挂载了 RouterTab 后调用
```

Two common causes:

1. **The instance isn't mounted yet** — calling it at the top level of a parent component's `setup`, while `<RouterTab>` is in its template (not yet registered at that point). Instead, defer the lookup until an event fires, see [Calling Instance Methods in Slots](../custom/slot#calling-instance-methods-in-slots).
2. **The tabId is wrong** — the id passed doesn't match any mounted instance.
   :::

## Lifecycle

Instances are registered in a module-level Map, keyed by `tabId` (the default instance's key is `undefined`):

- Registered during the component's `setup`
- Automatically unregistered when the component's scope is disposed (`onScopeDispose`)

So when a route change unmounts a RouterTab, the corresponding id is released without leaving stale entries.

## Clearing All Instances

```js
import { clearAllRouterTab } from 'vue-router-tab'

clearAllRouterTab()
```

Useful for test isolation, or scenarios requiring a full reset of the registry. Not needed in normal use — unmounting already unregisters automatically.

## Per-Instance Independent Config

Each instance's props are independent, so behavior can be configured separately as needed:

```vue
<template>
  <!-- Main area: cached, draggable, restorable -->
  <RouterTab tab-id="main" restore :max-alive="8" />

  <!-- Sidebar: not cached, not draggable -->
  <RouterTab tab-id="side" :keep-alive="false" :dragsort="false" />
</template>
```

[Tab Restoration](./restore)'s storage key includes `basePath`; multiple instances on the same page need a string suffix like `:restore="'main'"` to distinguish them, otherwise they'll overwrite each other.

Theming can also be customized per instance, see [Different Themes per Instance](../custom/theme#different-themes-per-instance).

## Known Limitations

::: warning The leave guard only binds to the first instance
`beforePageLeave`'s `leave` and `replace` types are triggered via a router guard, and the guard is registered on the router — **only the first mounted instance** has it in effect.

The `close` / `refresh` / `unload` types don't go through the guard, and work correctly on every instance.

See [Known Limitations](./page-leave#known-limitations) for details.
:::

::: warning Each instance must inject its own iframe routes
`RouterTabRoutes` are relative routes, and need to be mounted under **each** RouterTab's own level's `children`. An instance missing this injection can't use iframe tabs, see [Iframe Tabs](../essentials/iframe).
:::

## Example

The demo doesn't include a multi-instance frame, so here's the minimal runnable structure:

```vue
<!-- Layout.vue -->
<template>
  <div class="layout">
    <aside>
      <RouterTab tab-id="side" :keep-alive="false" />
    </aside>
    <main>
      <RouterTab tab-id="main" restore="main" />
    </main>
  </div>
</template>
```

```js
// router.js —— inject once for each of the two levels
import { RouterTabRoutes } from 'vue-router-tab'

const routes = [
  {
    path: '/side',
    component: SideFrame,
    children: [...RouterTabRoutes /* , sidebar pages */]
  },
  {
    path: '/main',
    component: MainFrame,
    children: [...RouterTabRoutes /* , main area pages */]
  }
]
```

Operate the corresponding instance by id from any child page:

```vue
<script setup>
import { useRouterTab } from 'vue-router-tab'

function openInMain(path) {
  useRouterTab('main').open(path)
}
</script>
```
