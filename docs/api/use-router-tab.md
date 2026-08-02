# useRouterTab

`useRouterTab(tabId?)` 返回 `RouterTabPublic`，共 **23 个字段**（9 个数据 + 14 个方法）。

```js
import { useRouterTab } from 'vue-router-tab'

const tabs = useRouterTab()
```

实例内部是 `reactive()` 对象，字段已自动解包 —— 直接读，不加 `.value`。其中 `items` 与 `contextData` 是 reactive 代理，可读也可写。

::: warning 未挂载时抛错

```
[vue-router-tab] useRouterTab() 需在挂载了 RouterTab 后调用
```

父组件 `setup` 顶层调用会踩到（此时内层 RouterTab 未注册），需在事件触发时惰性取用。
:::

RouterTab **没有** `defineExpose`，模板 ref 拿不到实例。

## 数据字段（9）

| 字段            | 类型                        | 说明                     |
| --------------- | --------------------------- | ------------------------ |
| `items`         | `Tab[]`                     | 全部页签（可写）         |
| `activeTabId`   | `string`                    | 当前激活页签 id          |
| `activeTab`     | `Tab \| undefined`          | 当前激活页签             |
| `langs`         | `Record<string, any>`       | 当前语言文案             |
| `i18nText`      | `(text: unknown) => string` | 取国际化文本             |
| `basePath`      | `string`                    | RouterTab 所在父路由路径 |
| `iframes`       | `string[]`                  | 已挂载的 iframe url 列表 |
| `currentIframe` | `string \| null`            | 当前显示的 iframe url    |
| `contextData`   | `ContextmenuData`           | 右键菜单定位数据（可写） |

## open

```ts
open(path: RouteLocationRaw, isReplace?: boolean, refresh?: boolean | 'sameTab'): Promise<void>
open(arg: OpenArg): Promise<void>
```

位置参默认值：`isReplace = false`，**`refresh = true`**（默认全新打开）。

`OpenArg`：

| 字段        | 类型               | 说明                                   |
| ----------- | ------------------ | -------------------------------------- |
| `to`        | `RouteLocationRaw` | 目标路径                               |
| `replace`   | `boolean?`         | 是否 replace 导航                      |
| `refresh`   | `boolean?`         | 是否刷新                               |
| `isSameTab` | `boolean?`         | 仅命中同页签时刷新（位置参写法仍兼容） |

## close

```ts
close(arg?: CloseArg | RouteLocationRaw, to?: RouteLocationRaw): Promise<void>
```

`CloseArg`：

| 字段      | 类型                        | 默认    | 说明                                            |
| --------- | --------------------------- | ------- | ----------------------------------------------- |
| `id`      | `string?`                   | —       | 目标页签 id，与 `path` 二选一                   |
| `path`    | `RouteLocationRaw?`         | —       | 按路径定位；两者都不传则关当前页签              |
| `match`   | `boolean?`                  | `true`  | `path` 是否精确匹配                             |
| `force`   | `boolean?`                  | `true`  | 跳过 `beforePageLeave`                          |
| `to`      | `RouteLocationRaw \| null?` | —       | 关闭后跳转；`null` 表示不跳转；不传则跳相邻页签 |
| `refresh` | `boolean?`                  | `false` | 是否全新打开跳转地址                            |

## closeTab

```ts
closeTab(id?: string, to?: RouteLocationRaw | null, force?: boolean): Promise<void>
```

默认值：`id = activeTabId`，`force = false`（**会触发确认**）。

## refresh

```ts
refresh(path?: RouteLocationRaw, match?: boolean, force?: boolean): void
```

默认值：`match = true`，`force = true`（**直接刷新，不确认**）。

## refreshTab

```ts
refreshTab(id?: string, force?: boolean): Promise<void>
```

默认值：`id = activeTabId`，`force = false`（**会触发确认**）。

## refreshAll

```ts
refreshAll(force?: boolean): Promise<void>
```

默认 `force = false`。单个页面阻止刷新不影响其余页面。

## reset

```ts
reset(to?: RouteLocationRaw): void
```

清缓存 + 清恢复存储 + 重建初始页签 + 跳默认页。默认跳 `defaultPage`，缺省用 `basePath`。

## reload

```ts
reload(): void
```

仅重载当前页视图，不走页签匹配。

## adjust

```ts
adjust(): void
```

主动重算页签滚动，保证激活页签可见。容器尺寸变化后（如侧边栏折叠、全屏切换）调用。

## iframe 方法

```ts
openIframe(src: string, title?: string, icon?: string): void
closeIframe(src: string): Promise<void>
refreshIframe(src: string): void
```

后两者**必须传 `src`** —— 内部按地址反查页签路径。

## 右键菜单方法

```ts
showContextmenu(id: string | null, index: number, e?: MouseEvent): void
hideContextmenu(): void
```
