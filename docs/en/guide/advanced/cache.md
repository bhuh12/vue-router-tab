# Tab Caching

<DocLinks api="router-tab#props" :demo="DEMO_ROUTES.MaxAlive" />

<script setup>
import { DEMO_ROUTES } from '../../../.vitepress/demoRoutes'
</script>

Preserve page state (form input, scroll position, component internal data) across tab switches, powered by `KeepAlive`. The cache identity is the key computed by [Tab Rules](../essentials/rule).

## keepAlive

Whether to cache the page. Defaults to `true`.

```vue
<template>
  <RouterTab :keep-alive="false" />
</template>
```

Can also be controlled precisely per route:

```js
{
  path: 'report',
  component: Report,
  meta: {
    routerTab: {
      title: 'Report',
      keepAlive: false  // Re-render this page every time it's entered
    }
  }
}
```

Priority: the route's `meta.routerTab.keepAlive` overrides RouterTab's `keepAlive` prop.

## maxAlive

Maximum number of cached pages. Defaults to `0` (unlimited). Once exceeded, the earliest non-active tab is evicted using **LRU**:

```vue
<template>
  <RouterTab :max-alive="5" />
</template>
```

The tab itself **won't** be closed — only its cache is cleared. Switching back to it will re-render it.

<DocLinks api="router-tab#props" :demo="DEMO_ROUTES.MaxAlive" />

::: tip For controlling memory usage
When there are many tabs with heavy pages (large tables, charts), limit the cache count to avoid unbounded memory growth.

Setting it to `0` means unlimited — the number of cached pages equals the number of tabs.
:::

## reuse

Whether routes sharing the same key reuse **the same component instance**. Defaults to `false`.

```vue
<template>
  <RouterTab :reuse="true" />
</template>
```

```js
meta: {
  routerTab: {
    reuse: true
  }
}
```

The difference:

| Config                   | Behavior                                                                                             |
| ------------------------ | ---------------------------------------------------------------------------------------------------- |
| `reuse: false` (default) | Different addresses under the same key each render independently; switching remounts the component   |
| `reuse: true`            | The same key shares one instance; switching only updates route params, the component isn't remounted |

With `reuse: true`, the page needs to react to route param changes itself:

```vue
<script setup>
import { watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

// When reusing an instance the component doesn't remount, so watch params to refetch data
watch(() => route.params.id, fetchData, { immediate: true })
</script>
```

<DocLinks api="router-tab#props" :demo="DEMO_ROUTES.Reuse" />

## Manual Cache Control

```js
import { useRouterTab } from 'vue-router-tab'

const tabs = useRouterTab()

// Refresh the current tab (clear cache and re-render)
tabs.refresh()

// Refresh a specific tab
tabs.refreshTab(tabId)

// Refresh all cached tabs
tabs.refreshAll()
```

See [Tab Operations](../essentials/operate#refreshing-tabs) for details.

## Relationship with Tab Rules

Three layers work together:

1. [Tab Rules](../essentials/rule) (`key`) determines **which addresses count as the same tab**
2. `keepAlive` determines **whether that tab is cached**
3. `reuse` determines **whether different addresses within the same tab share a component instance**
4. `maxAlive` determines **how many caches are kept at once**

## Full Example

<<< ../../../../demo/src/frames/MaxAlive.vue

For implementation details (`KeepAlive` include + name-to-key wrapper components), see [Internals](../meta/internals).
