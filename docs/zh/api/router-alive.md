---
sidebar: auto
---

# API - RouterAlive

## `<router-alive>` 配置参数

### keep-alive

默认是否缓存组件，可通过路由 `meta.keepAlive` 重置

- 类型: `Boolean`

- 默认值: `false`

### max

最大缓存数，0 则不限制

- 类型: `Number`

- 默认值: `0`

### reuse

是否复用路由组件，可通过路由 `meta.reuse` 重置

- 类型: `Boolean`

- 默认值: `false`

### page-class

页面 class

- 类型: `Array | Object | String`

- 默认值: `router-alive-page`

### page-scroller

全局**滚动元素选择器**，设置后已缓存的页签重新激活时将会还原滚动位置。

- 类型: `String`

- 默认值: `''`

### transition

路由组件过渡效果

- 类型: `String | Object`

  同 [`tab-transition`](#tab-transition)

## RouterAlive 实例方法

::: tip
在 RouterAlive 子组件，您可以通过 `inject: ['RouterAlive']` 来访问 RouterAlive 实例。
然后调用 `this.RouterAlive.refresh()` 来刷新组件。
:::

### routerAlive.remove

移除组件缓存

- 参数:
  - `{String} [key]` 需要移除的组件缓存 key，默认为当前组件

### routerAlive.refresh

刷新组件缓存

- 参数:
  - `{String} [key]` 需要刷新的组件缓存 key，默认为当前组件

## RouterAlive 事件

### ready

RouterAlive 组件就绪

- 参数:
  - `{VueInstance} [alive]` RouterAlive 实例

### change

路由缓存更改

- 参数:
  - `{String} [type]` 类型：`create` 或者 `update`
  - `{RouteMatch} [routeMatch]` 路由匹配信息
