# Iframe Tabs

<DocLinks api="router-tab#props" :demo="DEMO_ROUTES.Iframe" />

<script setup>
import { DEMO_ROUTES } from '../../../.vitepress/demoRoutes'
</script>

RouterTab supports embedding external sites via iframe tabs.

## Injecting the Built-in Routes

::: danger Must be injected manually
Without injecting the built-in routes, `openIframe()` navigation will fail.
:::

```js{2,12}
import { createRouter, createWebHistory } from 'vue-router'
import { RouterTabRoutes } from 'vue-router-tab'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Frame,
      children: [
        // Inject into the children of the level where <RouterTab> lives
        ...RouterTabRoutes
        // ...other page routes
      ]
    }
  ]
})
```

`RouterTabRoutes` contains only one **relative** route:

```
iframe/:src/:title?/:icon?
```

::: warning The first param is named src
Not `url`. The tab path looks like `{parentPath}/iframe/{encodeURIComponent(src)}/{title}/{icon}`.
:::

For multiple instances, **each** level where a RouterTab lives needs its own injection.

## Tab Operations

```js
import { useRouterTab } from 'vue-router-tab'

const tabs = useRouterTab()
const src = 'https://bhuh12.github.io/vue-router-tab/'

// Open: arguments are the link, tab title, icon
tabs.openIframe(src, 'Docs', 'rt-icon-web')

// Close (src is required)
tabs.closeIframe(src)

// Refresh (src is required)
tabs.refreshIframe(src)
```

::: tip All three methods locate the tab by src
`closeIframe` / `refreshIframe` can't omit `src` — internally they look up the tab path via `getIframePath(src)`.
:::

## Events

| Event            | Fires when                          | Arguments   |
| ---------------- | ----------------------------------- | ----------- |
| `iframe-mounted` | The iframe node is mounted          | `(url, el)` |
| `iframe-loaded`  | The iframe content finishes loading | `(url, el)` |

```vue
<template>
  <RouterTab @iframe-mounted="onIframeMounted" @iframe-loaded="onIframeLoaded" />
</template>

<script setup>
function onIframeMounted(url, el) {
  console.log('Node ready', url, el)
}

function onIframeLoaded(url, el) {
  console.log('Content loaded', url, el)
}
</script>
```

::: warning Navigating inside the iframe also triggers loaded
`iframe-loaded` comes from the `<iframe>`'s native `load` event, which also fires when the user navigates inside the iframe.
:::

This is RouterTab's **entire event list** — there are only these two.

## Customizing iframe Attributes

The `iframeAttrs` prop lets you attach attributes to the `<iframe>` node, taking the current url as an argument:

```vue
<template>
  <RouterTab :iframe-attrs="getAttrs" />
</template>

<script setup>
function getAttrs(url) {
  return {
    sandbox: 'allow-scripts allow-same-origin',
    referrerpolicy: 'no-referrer'
  }
}
</script>
```

## Security Filtering

The component filters the `src` protocol: addresses starting with `javascript:` or `data:` (case-insensitive) are replaced with `about:blank` to avoid XSS.

Other addresses are used as-is, so **you should still configure `sandbox` when embedding untrusted third-party addresses** (see previous section).

## Caching Behavior

The cache key rule for iframe tabs is `iframe-${src}`. The iframe node is lifted outside `KeepAlive` and toggled with `v-show` — remounting via `KeepAlive` would lose the iframe's internal state.

When refreshing an iframe tab, since the `<iframe>` node is reused by url and an unchanged `src` won't auto-reload, the component internally resets `src` (reassigning the same value) to trigger a native browser reload — this approach isn't subject to cross-origin restrictions.

See [Internals](../meta/internals) for implementation details.

## Full Example

<<< ../../../../demo/src/frames/Iframe.vue

The iframe operations page:

<<< ../../../../demo/src/views/IframeOperate.vue
