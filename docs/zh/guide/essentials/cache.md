# 缓存控制

## 页签规则

**页签规则**定义了路由**打开页签的方式**。

通过配置**路由**的 `meta.key` 属性，您可以定制路由页签规则

### 默认规则

默认情况下，同一路由打开同一个页签

### 内置规则

- `path`

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

- `fullPath`

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

### 自定义规则

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

## 页签缓存

RouterTab 默认会缓存每个页签的页面

您可以设置 RouterTab 组件的 `keep-alive` 来取消这一行为，也可以通过路由的 `meta.keepAlive` 来覆盖组件默认配置

如果取消了页签缓存，每次进入页签将重新创建组件实例

**全局配置**

```html
<router-tab :keep-alive="false" />
```

**路由配置**

```javascript {6}
const route = {
  path: '/my-page/:1',
  component: MyPage,
  meta: {
    title: '页面',
    keepAlive: false
  }
}
```

## 最大缓存数

你可以通过设置 RouterTab 组件的 `max-alive` 来控制页签的最大缓存数，（默认）为 `0` 则不限制

页签数量超过设置值后，最初打开的页签缓存将会被清理掉

```html
<router-tab :max-alive="10" />
```

## 复用组件

默认情况下，再次打开同一个页签的路由，如果路由的 `params` 或 `query` 发生改变，RouterTab 会清理上次的页面缓存，重新创建页面实例

你可以设置 RouterTab 组件的 `reuse` 来取消这一行为，也可以通过路由的 `meta.reuse` 来覆盖组件默认配置

::: tip
如果设置了 `reuse` 为 `true`，你可能需要通过监听 `$route` 或 `activated` 钩子来更新页面数据
:::

**全局配置**

```html
<router-tab :reuse="true" />
```

**路由配置**

```javascript {6}
const route = {
  path: '/my-page/:1',
  component: MyPage,
  meta: {
    title: '页面,
    reuse: true // 以不同的 params 或 query 重新打开页签后，页面会复用上一次的，不会重新创建
  }
}
```
