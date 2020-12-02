# 页签规则

**页签规则**定义了路由**打开页签的方式**。

通过配置**路由**的 `meta.key` 属性，您可以定制路由页签规则

## 默认规则

默认情况下，同一路由打开同一个页签

## 内置规则

### `path`

- 规则：`route => route.path`
- 说明：相同 `route.params` 的路由，`route.path` 一致，共用页签
- <demo-link href="/default/rule/path/a/1"/>

**示例：**

```javascript {6}
const route = {
  path: '/my-page/:id',
  component: MyPage,
  meta: {
    title: '页面',
    key: 'path'
  }
}
```

根据示例中的页签规则：

1. `/my-page/1`和`/my-page/2` 的 `params` 参数不同，会打开**独立**的页签
2. `/my-page/1`、`/my-page/1?a=1`和`/my-page/1?b=2` 的 `params` 参数相同，会共用**同一个**页签

### `fullPath`

- 规则：`route => route.fullPath.replace(route.hash, '')`
- 说明：相同 `route.params` 和 `route.query` 的路由，`route.fullPath` 去除 `hash` 后一致，共用页签
- <demo-link href="/default/rule/fullPath/a/1"/>

**示例：**

```javascript {6}
const route = {
  path: '/my-page/:id',
  component: MyPage,
  meta: {
    title: '页面',
    key: 'fullPath'
  }
}
```

根据示例中的页签规则：

1. `/my-page/1`和`/my-page/2` 的 `params` 参数不同，会打开**独立**的页签
2. `/my-page/1`、`/my-page/1?a=1`和`/my-page/1?b=2` 的 `query` 参数不同，会打开**独立**的页签

## 自定义规则

除了使用内置规则，你还可以用函数自定义控制

**示例：**

```javascript {6,7,8}
const route = {
  path: '/my-page/:catalog/:type',
  component: MyPage,
  meta: {
    title: '定制规则',
    key(route) {
      return `/my-page/${route.params.catalog}`
    }
  }
}
```

根据示例中的页签规则：

1. `/my-page/a/1` 和 `/my-page/a/2`，`params.catalog` 相同，打开的是**同一个**页签
2. `/my-page/a/1` 和 `/my-page/b/1`，`params.catalog` 不同，则打开**独立**的页签
