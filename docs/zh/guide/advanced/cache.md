# 缓存控制

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

你可以通过设置 RouterTab 组件的 `max-alive` 来控制页签的最大缓存数，为 `0` （默认）则不限制

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
