# Cache Control

## Tab Rules

**page tab rules** define different routes **ways to open tabs by routing**.

By configuring the routing of `meta.key` properties, you can customize the tab for a particular route.

### Default rule

By default, pages from the same route opens the same tab.

### Built-in rules

- `path`

  - Rule：`route => route.path`
  - Note: Routes with the same `route.params` share tabs.
  - <demo-link href="/default/rule/path/a/1"/>

  **Example：**

  ```javascript {6}
  const route = {
    path: '/my-page/:id',
    component: MyPage,
    meta: {
      title: 'Page',
      key: 'path'
    }
  }
  ```

  According to the tab rules in the example:

  1. `/my-page/1` and `/my-page/2` have different `params`, will open in **separate** tab.
  2. `/my-page/1`、`/my-page/1?a=1` and `/my-page/1?b=2` have the same `params`, will open the **same** tab.

- `fullPath`

  - Rule：`route => route.fullPath.replace(route.hash, '')`
  - Note: Routes with the same `route.params` and `route.query` share tabs.
  - <demo-link href="/default/rule/fullPath/a/1"/>

  **Example：**

  ```javascript {6}
  const route = {
    path: '/my-page/:id',
    component: MyPage,
    meta: {
      title: 'Page',
      key: 'fullPath'
    }
  }
  ```

  According to the tab rules in the example:

  1. `/my-page/1` and `/my-page/2` have different `params`, will open in **separate** tab.
  2. `/my-page/1`、`/my-page/1?a=1` and `/my-page/1?b=2` have the different `query`, will open in **separate** tab.

### Custom rule

In addition to using built-in rules, you can also customize your own rules with functions.

**示例：**

```javascript {6,7,8}
const route = {
  path: '/my-page/:catalog/:type',
  component: MyPage,
  meta: {
    title: 'Custom rule',
    key(route) {
      return `/my-page/${route.params.catalog}`
    }
  }
}
```

According to the tab rules in the example:

1. `/my-page/a/1` amd `/my-page/a/2`, have the same `params.catalog`, will open the **same** tab.
2. `/my-page/a/1` and `/my-page/b/1`, have different `params.catalog`, will open in **separate** tab.

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
