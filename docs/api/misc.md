# 其他导出

## 组合式函数

| 函数                      | 说明                  |
| ------------------------- | --------------------- |
| `useRouterTab(tabId?)`    | 取 RouterTab 实例     |
| `useRouterPage(options?)` | 页面侧钩子            |
| `useTabs`                 | 页签原语（内部用）    |
| `useOperate`              | 命令式 API（内部用）  |
| `useContextmenu`          | 右键菜单（内部用）    |
| `useIframe`               | iframe 页签（内部用） |
| `useI18n`                 | 国际化（内部用）      |
| `useRouteMatch`           | 路由匹配（内部用）    |

标注「内部用」的函数供二次封装，正常使用无需直接调用。

## matchRoute

```ts
matchRoute(
  $route: RouteLocationNormalizedLoaded,
  opts: { keepAlive: boolean; reuse: boolean; routeIndex?: number }
): RouteMatchInfo
```

纯函数，计算指定路由的页签匹配信息。`routeIndex` 为路由深度，默认 `0`（顶层）。

## clearAllRouterTab

```ts
clearAllRouterTab(): void
```

清空实例注册表。用于多实例清理或测试隔离 —— 正常卸载会自动注销，无需手动调用。

## 组件与路由

| 导出              | 说明                                           |
| ----------------- | ---------------------------------------------- |
| `RouterTab`       | 页签组件（也是默认导出，带 `install`）         |
| `RouterAlive`     | 缓存容器组件，见 [RouterAlive](./router-alive) |
| `install`         | 插件安装函数                                   |
| `RouterTabRoutes` | iframe 内置路由数组（**需手动注入**）          |
| `Iframe`          | iframe 页面组件                                |
| `iframeMeta`      | iframe 路由的 meta 配置                        |
