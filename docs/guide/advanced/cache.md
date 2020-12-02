# Cache Control

## Keep Alive

RouterTab caches the page of each tab by default.

You can set `keep-alive` of RouterTab component to cancel this behavior, or you can set `meta.keepAlive` of route to override the component default configuration.

If the tab is uncacheable, the page component instance will be recreated every time you enter the tab.

**Global**

```html
<router-tab :keep-alive="false" />
```

**Route**

```javascript {6}
const route = {
  path: '/my-page/:1',
  component: MyPage,
  meta: {
    title: 'Page',
    keepAlive: false
  }
}
```

## Max Alive

You can set the `max-alive` of the RouterTab component to control the maximum number of caches for the tabs. `0` (default) for no limit.

After the number of tabs exceeds the set value, the cache of the earliest opened tabs will be cleared.

```html
<router-tab :max-alive="10" />
```

## Reusable

By default, the route of the same tab is opened again. If the `params` or `query` of the route changes, RouterTab will clear the last page cache and recreate the page instance.

You can set `reuse` of the RouterTab component to cancel this behavior, or you can override the component’s default configuration via `meta.reuse`.

::: tip
If set `reuse` to `true`, you may need to update the page data by watching the `$route` or using `activated` hook.
:::

**Global**

```html
<router-tab :reuse="true" />
```

**Route**

```javascript {6}
const route = {
  path: '/my-page/:1',
  component: MyPage,
  meta: {
    title: 'Page',
    reuse: true // After reopening the tab with different params or query, the page will be reused and will not be recreated
  }
}
```
