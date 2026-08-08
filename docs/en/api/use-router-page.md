# useRouterPage

Page-side composable that registers the leave guard, dynamic tab info, and scroll memory.

```ts
useRouterPage(options?: {
  beforePageLeave?: (tab: Tab | undefined, type: PageLeaveType) => any
  routeTab?: Ref<RouteTabInput> | ComputedRef<RouteTabInput> | RouteTabInput
  pageScroller?: string | string[]
}): { restoreScroll: () => Promise<void> }
```

## beforePageLeave

::: tip Parameter order is (tab, type)
`tab` comes first, `type` comes second.
:::

`PageLeaveType` has 5 values in total: `close` / `refresh` / `leave` / `replace` / `unload`.

The return value is **passed directly to `next()`**:

| Return value     | Behavior                         |
| ---------------- | -------------------------------- |
| `undefined`      | Proceed                          |
| string / `false` | Block leaving                    |
| location         | Redirect to that address instead |
| `throw` / reject | Equivalent to `next(false)`      |

::: warning The guard is router-level, only bound to the first instance
`leave` and `replace` are triggered via the route guard; with multiple instances, only the first mounted instance takes effect. `close` / `refresh` / `unload` are not subject to this limitation.
:::

See [Leave Confirmation](/en/guide/advanced/page-leave) for details.

## routeTab

`RouteTabInput = string | Partial<Tab>`. Passing a string is equivalent to setting only `title`.

Patches the current tab field by field, **skipping `id` and `to`**. A ref / computed is watched deeply (`deep`); a plain value is applied only once during `setup`.

See [Dynamic Tab Info](/en/guide/advanced/dynamic-tab-info) for details.

## pageScroller

Page-level scroll container selector, supports an array or comma-separated string.

| Syntax  | Lookup scope                 |
| ------- | ---------------------------- |
| `.foo`  | Within the page root element |
| `$.foo` | document                     |

The page root element itself always acts as the fallback container.

## restoreScroll

```ts
restoreScroll(): Promise<void>
```

Async method that internally `await nextTick()`s before restoring. Call manually after async content renders.
