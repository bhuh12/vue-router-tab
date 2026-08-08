# Tab Rules

<DocLinks api="route-meta" :demo="DEMO_ROUTES.Reuse" />

<script setup>
import { DEMO_ROUTES } from '../../../.vitepress/demoRoutes'
</script>

**Tab rules** define **how a route opens a tab**, configured via the route's `meta.routerTab.key`.

## Default Rule

When `key` is not configured, it takes the current level's `matched.path`, meaning **the same route shares the same tab** — changes to `params` or `query` never open a new tab.

## Built-in Rules

There are only **two** built-in rules: `path` and `fullpath`. Rule names are matched case-insensitively, so `fullPath` and `fullpath` are equivalent.

### path

Takes `route.path`. Different `params` open independent tabs; `query` changes don't open a new tab.

```js{6}
{
  path: '/my-page/:id',
  component: MyPage,
  meta: {
    routerTab: {
      title: 'Page',
      key: 'path'
    }
  }
}
```

Result:

- `/my-page/1` and `/my-page/2` → different `params`, **independent** tabs
- `/my-page/1`, `/my-page/1?a=1`, `/my-page/1?b=2` → same `path`, **shared** tab

<DemoLink href="/default/rule/path/a/1">View the path rule in the demo</DemoLink>

### fullpath

Takes `route.fullPath`. Any difference in `params` or `query` opens an independent tab.

```js{6}
{
  path: '/my-page/:id',
  component: MyPage,
  meta: {
    routerTab: {
      title: 'Page',
      key: 'fullPath'
    }
  }
}
```

Result:

- `/my-page/1` and `/my-page/2` → **independent** tabs
- `/my-page/1?a=1` and `/my-page/1?b=2` → different `query`, **independent** tabs

<DemoLink href="/default/rule/fullPath/a/1">View the fullPath rule in the demo</DemoLink>

::: tip hash participates in key computation
The `fullpath` rule takes `route.fullPath` directly, and hash participates in key computation — `/my-page/1#a` and `/my-page/1#b` open two independent tabs. If you don't want hash to factor in, use a function rule and strip it yourself.
:::

## Custom Rules

When `key` is a string that doesn't match a built-in rule name, that string is used directly as a fixed key — all addresses hitting this route share one tab:

```js
meta: {
  routerTab: {
    key: 'my-fixed-tab'
  }
}
```

## Function Rules

`key` can be a function, taking the current route as an argument:

```js{6-8}
{
  path: '/my-page/:catalog/:type',
  component: MyPage,
  meta: {
    routerTab: {
      title: 'Custom Rule',
      key: route => `/my-page/${route.params.catalog}`
    }
  }
}
```

Result:

- `/my-page/a/1` and `/my-page/a/2` → same `params.catalog`, **shared** tab
- `/my-page/a/1` and `/my-page/b/1` → different `params.catalog`, **independent** tabs

<DemoLink href="/default/rule/custom/a/1">View the custom rule in the demo</DemoLink>

::: danger Functions can't return a built-in rule name
The function's return value **goes through the rule table again**. If it returns `'path'` or `'fullpath'`, it's treated as a built-in rule name rather than the fixed key you intended:

```js
// ❌ The return value is treated as a built-in rule name, effectively equivalent to key: 'path'
key: () => 'path'

// ✅ Use a non-conflicting name when you need a fixed key
key: () => 'my-path'
```

:::

## Relationship with Caching

The tab key doubles as the cache identifier: the same key shares the same component instance and cache. Combine with `keepAlive`, `reuse`, and `maxAlive` to further control cache behavior, see [Tab Caching](../advanced/cache).

## Full Example

<<< ../../../../demo/src/frames/Reuse.vue
