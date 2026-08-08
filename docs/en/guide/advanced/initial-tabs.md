# Initial Tabs

<DocLinks api="router-tab#props" :demo="DEMO_ROUTES.InitialTabs" />

<script setup>
import { DEMO_ROUTES } from '../../../.vitepress/demoRoutes'
</script>

The `tabs` prop configures the default set of tabs shown when the page loads, typed `PresetTab[]`, defaulting to `[]`.

Common use case: pre-set persistent pages like "Home" or "Workbench" as initial tabs.

## Basic Usage

```vue
<template>
  <RouterTab :tabs="tabs" />
</template>

<script setup>
const tabs = ['/home', { to: '/workbench', title: 'Workbench', closable: false }]
</script>
```

## Five Forms

`PresetTab`'s type is `string | (Partial<Omit<Tab, 'to'>> & { to: RouteLocationRaw })` — either a plain path string, or a config object that must include `to`.

### 1. Plain Path String

Title, icon, etc. are automatically read from the route's `meta.routerTab`:

```js
const tabs = ['/page/1']
```

### 2. Config Object

Explicitly specify the tab info, which can override the meta config:

```js
const tabs = [{ to: '/page/1', title: 'Page 1', icon: 'rt-icon-doc', closable: false }]
```

### 3. Location Object

`to` supports Vue Router's location object:

```js
const tabs = [
  { to: { path: '/page/2', query: { t: 2 } }, title: 'Page 2' },
  { to: { name: 'user', params: { id: 3 } }, title: 'User 3' }
]
```

### 4. Dynamic-Title Pages Need a Preset Title

When a tab's title comes from page data (see [Dynamic Tab Info](./dynamic-tab-info)), an inactive tab hasn't rendered yet and has no data available, so a title must be preset:

```js
const tabs = [
  { to: '/order/1024', title: 'Order #1024' } // Without a preset it shows "Untitled"
]
```

### 5. Iframe Tabs

Assembled in the iframe route format, `src` needs `encodeURIComponent`:

```js
const tabs = [
  `/iframe/${encodeURIComponent('https://bhuh12.github.io/vue-router-tab/')}/Docs/rt-icon-web`
]
```

See [Iframe Tabs](../essentials/iframe) for details.

## Key Conflicts Keep Only the First Occurrence

Initial tabs compute their key using [Tab Rules](../essentials/rule); when keys match, only the **first occurrence** is kept:

```js
const tabs = [
  { to: '/page/2', title: 'Page 2' },
  // Under the default rule this has the same key as the previous entry (both are /page/2), so it's dropped
  { to: '/page/2?t=1', title: 'Page 2-1' }
]
```

To have both coexist, configure `key: 'fullpath'` for that route.

## Relationship with Tab Restoration

When [`restore`](./restore) is configured, restored tabs take **priority over** `tabs`: after a browser refresh the previous tab list is restored instead of going back to the initial tabs.

`tabs` is only used when there's no restore data (first visit, or `sessionStorage` has been cleared).

## Full Example

<<< ../../../../demo/src/frames/InitialTabs.vue
