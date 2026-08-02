# useRouterPage

页面侧组合式函数，注册离开守卫、动态页签信息与滚动记忆。

```ts
useRouterPage(options?: {
  beforePageLeave?: (tab: Tab | undefined, type: PageLeaveType) => any
  routeTab?: Ref<RouteTabInput> | ComputedRef<RouteTabInput> | RouteTabInput
  pageScroller?: string | string[]
}): { restoreScroll: () => Promise<void> }
```

## beforePageLeave

::: tip 参数顺序是 (tab, type)
`tab` 在前、`type` 在后。
:::

`PageLeaveType` 共 5 个取值：`close` / `refresh` / `leave` / `replace` / `unload`。

返回值**直接交给 `next()`**：

| 返回值           | 行为               |
| ---------------- | ------------------ |
| `undefined`      | 放行               |
| 字符串 / `false` | 阻止离开           |
| location         | 改为跳转该地址     |
| `throw` / reject | 等价 `next(false)` |

::: warning 守卫为 router 级，只绑定首个实例
`leave` 与 `replace` 经由路由守卫触发，多实例下只有首个挂载的实例生效。`close` / `refresh` / `unload` 不受此限制。
:::

详见[离开页面提示](/guide/advanced/page-leave)。

## routeTab

`RouteTabInput = string | Partial<Tab>`。传字符串等价于只设 `title`。

逐字段 patch 到当前页签，**跳过 `id` 与 `to`**。ref / computed 走 `deep` 深度监听；裸值只在 `setup` 时应用一次。

详见[动态页签信息](/guide/advanced/dynamic-tab-info)。

## pageScroller

页面级滚动容器选择器，支持数组或逗号分隔字符串。

| 写法    | 查找范围     |
| ------- | ------------ |
| `.foo`  | 页面根元素内 |
| `$.foo` | document     |

页面根元素自身始终作兜底容器。

## restoreScroll

```ts
restoreScroll(): Promise<void>
```

异步方法，内部先 `await nextTick()` 再还原。异步内容渲染后手动调用。
