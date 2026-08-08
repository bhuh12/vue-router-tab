# Route Meta

Route meta information, **10 fields** in total:

| Field       | Type                 | Functional | Description                               |
| ----------- | -------------------- | ---------- | ----------------------------------------- |
| `title`     | `MetaValue<string>`  | ✅         | Tab title                                 |
| `tips`      | `MetaValue<string>`  | ✅         | Tooltip, falls back to `title` if omitted |
| `icon`      | `MetaValue<string>`  | ✅         | Icon class                                |
| `closable`  | `MetaValue<boolean>` | ✅         | Whether the tab can be closed             |
| `tabClass`  | `MetaValue<string>`  | ✅         | Custom class for the tab                  |
| `key`       | `MetaValue<string>`  | ✅         | Tab rule                                  |
| `keepAlive` | `boolean`            | ❌         | Whether to cache                          |
| `reuse`     | `boolean`            | ❌         | Whether to reuse the component            |
| `href`      | `string`             | ❌         | External link address                     |
| `target`    | `string`             | ❌         | External link open mode                   |

The first 6 fields are `MetaValue<T>`, which can be passed a function (receiving the current route) for dynamic values. The last 4 only accept static values — `href` / `target` **do not participate in function evaluation**.

```js
meta: {
  routerTab: {
    title: route => `Order #${route.params.id}`,
    key: 'path',
    keepAlive: true
  }
}
```

## Key Value Resolution Rules

There are only **2 built-in rules** (case-insensitive):

| Rule name  | Value            |
| ---------- | ---------------- |
| `path`     | `route.path`     |
| `fullpath` | `route.fullPath` |

A string that doesn't match a built-in rule name is used directly as a fixed key.

::: danger A functional key cannot return a built-in rule name
The return value goes through the rule table resolution again, so `() => 'path'` would be treated as the built-in rule name.
:::

When omitted, it takes the current level's `matched.path`. See [Tab Rules](/en/guide/essentials/rule) for details.
