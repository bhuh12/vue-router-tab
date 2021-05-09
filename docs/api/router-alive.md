---
sidebar: auto
---

# API - RouterAlive

## `<router-alive>` Props

### keep-alive

Whether to cache components by default, it can be reset through the routing configuration `meta.keepAlive`.

- type: `Boolean`

- default: `false`

### max

The maximum number of caches, set `0` to not limit.

- type: `Number`

- default: `0`

### reuse

Whether to reuse routing components, can be reset through the routing configuration `meta.reuse`.

- type: `Boolean`

- default: `false`

### page-class

Class of tab page.

- type: `Array | Object | String`

- default: `router-alive-page`

### page-scroller

Global **Scroll Element Selector**, the scroll position will be restored when the cached tab is reactivated.

- type: `String`

- default: `''`

### transition

The transition effect of routing components

- type: `String | Object`

  Same as [`tab-transition`](#tab-transition)

## RouterAlive Instance Methods

::: tip
In the sub-component of RouterAlive, you can access the RouterAlive instance through `inject: ['RouterAlive']`.
Then call `this.RouterAlive.refresh()` to refresh the component.
:::

### routerAlive.remove

Remove the cache of component.

- parameters:
  - `{String} [key]` The cache key of the component to be removed, default to current component.

### routerAlive.refresh

Refresh the cache of component.

- parameters:
  - `{String} [key]` The cache key of the component to be refreshed, default to current component.

## RouterAlive Events

### ready

RouterAlive component is ready.

- parameters:
  - `{VueInstance} [alive]` RouterAlive instance

### change

Route cache changes.

- parameters:
  - `{String} [type]` type: `create` | `update`
  - `{RouteMatch} [routeMatch]` Route matching information
