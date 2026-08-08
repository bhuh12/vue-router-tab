# Getting Started

<DocLinks api="router-tab#props" :demo="DEMO_ROUTES.Default" />

<script setup>
import { DEMO_ROUTES } from '../../../.vitepress/demoRoutes'
</script>

Getting the tab component running only takes three steps: place the component in the layout, inject the built-in routes, and configure tab info via `meta.routerTab`.

## Applying the Component

Place `<RouterTab />` inside your layout component; it takes over rendering and caching of child routes.

```vue{6}
<template>
  <div class="app-header">Header</div>
  <div class="app-body">
    <div class="app-side">Sidebar</div>
    <!-- Child route pages are rendered by RouterTab -->
    <RouterTab />
  </div>
</template>
```

::: tip Multiple instances supported
Multiple independent instances can be registered via the `tabId` prop, see [Multiple Instances](../advanced/multi-instance).
:::

## Route Configuration

### Injecting the Built-in Routes

`RouterTabRoutes` are the built-in routes required for iframe tabs, and **must be manually injected** into the `children` of the level where `<RouterTab />` lives:

```js{4,17}
import { createRouter, createWebHistory } from 'vue-router'

// RouterTab's built-in routes (iframe tabs)
import { RouterTabRoutes } from 'vue-router-tab'

import Frame from './components/layout/Frame.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      // The parent route's component must contain <RouterTab>
      component: Frame,
      children: [
        // Inject built-in routes to support iframe tabs
        ...RouterTabRoutes,
        {
          path: '',
          component: () => import('./views/Home.vue'),
          meta: { routerTab: { title: 'Home' } }
        }
      ]
    }
  ]
})
```

::: warning The parent route needs an accessible default route
Either approach works: configure a `redirect` to a child route, or make the default child route's `path` an empty string (matching the parent route's path, as in the example above).
:::

### Configuring Tab Info

The tab's title, icon, cache rule, and more are all configured via the route's `meta.routerTab`:

```js
{
  path: 'page/:id',
  component: () => import('./views/Page.vue'),
  meta: {
    routerTab: {
      title: 'Page',            // Tab title
      icon: 'rt-icon-doc',      // Tab icon class, optional
      tips: 'This is a page',   // Tooltip, optional, defaults to title
      tabClass: 'custom-tab',   // Custom class for the tab, optional
      key: 'path',              // Tab rule, optional
      closable: false,          // Whether the tab can be closed, default true
      keepAlive: true,          // Whether to cache the tab, default true
      reuse: false              // Whether to reuse the component, default false
    }
  }
}
```

`title` / `tips` / `icon` / `closable` / `tabClass` / `key` — these 6 fields support functions, taking the current route as an argument, enabling dynamic tab info:

```js
meta: {
  routerTab: {
    title: route => `Page ${route.params.id}`,
    key: 'path'
  }
}
```

Full field reference: [API - Route Meta](/en/api/route-meta).

## Full Example

The minimal runnable frame from the demo:

<<< ../../../../demo/src/frames/Default.vue

The accompanying router extension (adds a 404 child route and the built-in iframe routes):

<<< ../../../../demo/src/router/routeExtend.ts

## Next Steps

- [Tab Operations](./operate): open, close, and refresh tabs
- [Tab Rules](./rule): control the granularity at which routes generate tabs
- [Tab Caching](../advanced/cache): cache toggle, max cache count, component reuse
