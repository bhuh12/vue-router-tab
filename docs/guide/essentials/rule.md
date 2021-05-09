# Tab Rules

**page tab rules** define different routes **ways to open tabs by routing**.

By configuring the routing of `meta.key` properties, you can customize the tab for a particular route.

## Default Rule

By default, pages from the same route opens the same tab.

## Built-in Rules

### `path`

- Rule:`route => route.path`
- Note: Routes with the same `route.params` share tabs.
- <demo-link href="/default/rule/path/a/1"/>

**Example:**

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

### `fullPath`

- Rule:`route => route.fullPath.replace(route.hash, '')`
- Note: Routes with the same `route.params` and `route.query` share tabs.
- <demo-link href="/default/rule/fullPath/a/1"/>

**Example:**

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

## Custom Rule

In addition to using built-in rules, you can also customize your own rules with functions.

**Example:**

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
