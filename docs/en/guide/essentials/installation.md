# Installation

## Requirements

| Dependency   | Version                      |
| ------------ | ---------------------------- |
| `vue`        | `^3.5.0`                     |
| `vue-router` | `^4 \|\| ^5`                 |
| Node.js      | ≥ 18 for the build toolchain |

::: warning ESM only
Ships only ESM output (`package.json`'s `exports` only contains the `import` condition), `require()` is not supported. CommonJS projects need to use dynamic `import()` or upgrade their build tooling.
:::

## Install

::: code-group

```bash [pnpm]
pnpm add vue-router-tab
```

```bash [npm]
npm i vue-router-tab
```

:::

## Registering the Plugin

`app.use(RouterTab)` registers two global components: `RouterTab` and `RouterAlive`.

```js{4,5,10}
import { createApp } from 'vue'

// Import the component and styles
import RouterTab from 'vue-router-tab'
import 'vue-router-tab/dist/index.css'

import App from './App.vue'
import router from './router'

createApp(App).use(router).use(RouterTab).mount('#app')
```

::: tip Style path
The stylesheet must be imported with the full path `vue-router-tab/dist/index.css`. `exports` only exposes the `.` and `./dist/*` entries — there is **no** `vue-router-tab/style` alias.
:::

## On-demand Import

Without registering the global components, you can import on demand:

```vue
<script setup>
import { RouterTab } from 'vue-router-tab'
import 'vue-router-tab/dist/index.css'
</script>

<template>
  <RouterTab />
</template>
```

Components, composables, and types are all named exports:

```js
// Components
import { RouterTab, RouterAlive } from 'vue-router-tab'

// Composables
import { useRouterTab, useRouterPage } from 'vue-router-tab'

// Built-in iframe routes (must be manually injected, see Iframe Tabs)
import { RouterTabRoutes } from 'vue-router-tab'
```

Full export list: see [API](/en/api/types).

## Next Steps

- [Getting Started](./): place the component in the layout, configure routes and tab meta info
- [Migrating from v1](../migration): upgrade guide for v1 projects
