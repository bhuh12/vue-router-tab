# Scrollbar

<DocLinks api="router-tab#props" :demo="DEMO_ROUTES.PageScroller" />

<script setup>
import { DEMO_ROUTES } from '../../../.vitepress/demoRoutes'
</script>

Scroll position is automatically restored when switching back to a tab. Position is saved on `onDeactivated` and restored on `onActivated`, persisting with the page instance's cache (naturally kept for the duration of the `KeepAlive` cache).

## Frame-Level Configuration

RouterTab's `pageScroller` prop specifies the scroll container, defaulting to `'.router-tab__container'` (the component's own content container):

```vue
<template>
  <RouterTab page-scroller=".my-scroll-container" />
</template>
```

::: warning This Selector Is Treated as Document-Level
The frame-level `pageScroller` automatically gets a `$` prefix on the page side, meaning it's **looked up across the whole document** (`document.querySelector`), not within the page's root element.

Reason: the frame-level container is usually **outside** the page component (it's part of the layout), so it can't be found by searching within the page.
:::

## Page-Level Configuration

When a page has its own independent scroll area, configure it in the page component:

```vue
<script setup>
import { useRouterPage } from 'vue-router-tab'

useRouterPage({
  pageScroller: '.inner-scroll'
})
</script>
```

Page-level selectors are **looked up within the page's root element** (`root.querySelector`).

### Multiple Scroll Containers

Arrays or comma-separated strings are supported:

```js
// Array
useRouterPage({ pageScroller: ['.left-panel', '.right-panel'] })

// Comma-separated (equivalent)
useRouterPage({ pageScroller: '.left-panel, .right-panel' })
```

### $ Prefix: Explicitly Specifying Document-Level

Add a `$` prefix to a page-level selector to force lookup across the whole document:

```js
useRouterPage({
  pageScroller: ['.inner-scroll', '$.app-main']
})
```

Summary:

| Syntax                  | Lookup Scope                      |
| ----------------------- | --------------------------------- |
| Frame-level prop `.foo` | document (automatically gets `$`) |
| Page-level `.foo`       | within the page's root element    |
| Page-level `$.foo`      | document                          |

The page's root element itself is always recorded as a fallback container, no explicit configuration needed.

## Scroll Restoration for Async Content

When page data loads asynchronously, the DOM hasn't finished rendering by the time `onActivated` fires, so restoration fails. In this case, call `restoreScroll()` manually once the data is ready:

```vue
<script setup>
import { ref, onMounted } from 'vue'
import { useRouterPage } from 'vue-router-tab'

const { restoreScroll } = useRouterPage()

const list = ref([])

onMounted(async () => {
  list.value = await fetchList()
  // Restore scroll position after the data renders
  await restoreScroll()
})
</script>
```

`restoreScroll()` is an async method; internally it `await`s `nextTick()` before restoring.

## New Pages Start from the Top

When opening a **new** tab, the frame-level container (i.e. the `$`-prefixed document-level container) is reset to the top, avoiding carrying over the previous page's scroll position.

Page-level containers aren't reset — they're created along with the page instance, so they're already at their initial position.

## Full Example

Frame-level configuration:

<<< ../../../../demo/src/frames/PageScroller.vue

Async content + manual restoration:

<<< ../../../../demo/src/views/ScrollAsync.vue

Multiple scroll containers:

<<< ../../../../demo/src/views/ScrollMulti.vue
