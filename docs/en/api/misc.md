# Misc Exports

## Composables

| Function                  | Description                     |
| ------------------------- | ------------------------------- |
| `useRouterTab(tabId?)`    | Get the RouterTab instance      |
| `useRouterPage(options?)` | Page-side hook                  |
| `useTabs`                 | Tab primitives (internal)       |
| `useOperate`              | Imperative API (internal)       |
| `useContextmenu`          | Context menu (internal)         |
| `useIframe`               | Iframe tabs (internal)          |
| `useI18n`                 | Internationalization (internal) |
| `useRouteMatch`           | Route matching (internal)       |

Functions marked "(internal)" are meant for re-wrapping; normal usage doesn't require calling them directly.

## matchRoute

```ts
matchRoute(
  $route: RouteLocationNormalizedLoaded,
  opts: { keepAlive: boolean; reuse: boolean; routeIndex?: number }
): RouteMatchInfo
```

Pure function that computes the tab match info for the given route. `routeIndex` is the route depth, defaulting to `0` (top level).

## clearAllRouterTab

```ts
clearAllRouterTab(): void
```

Clears the instance registry. Used for multi-instance cleanup or test isolation — normal unmounting deregisters automatically, no need to call manually.

## Components and Routes

| Export            | Description                                                  |
| ----------------- | ------------------------------------------------------------ |
| `RouterTab`       | Tab component (also the default export, with `install`)      |
| `RouterAlive`     | Cache container component, see [RouterAlive](./router-alive) |
| `install`         | Plugin install function                                      |
| `RouterTabRoutes` | Built-in iframe route array (**must be injected manually**)  |
| `Iframe`          | Iframe page component                                        |
| `iframeMeta`      | Meta config for the iframe route                             |
