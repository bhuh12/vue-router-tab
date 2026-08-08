# useRouterTab

`useRouterTab(tabId?)` returns `RouterTabPublic`, with **23 fields** in total (9 data fields + 14 methods).

```js
import { useRouterTab } from 'vue-router-tab'

const tabs = useRouterTab()
```

The instance is internally a `reactive()` object, fields are already auto-unwrapped — read them directly, no `.value` needed. `items` and `contextData` are reactive proxies, both readable and writable.

::: warning Throws when not mounted

```
[vue-router-tab] useRouterTab() 需在挂载了 RouterTab 后调用
```

Calling this at the top level of a parent component's `setup` will hit this (the inner RouterTab isn't registered yet); use it lazily when an event fires instead.
:::

RouterTab has **no** `defineExpose`, so a template ref cannot get the instance.

## Data Fields (9)

| Field           | Type                        | Description                                      |
| --------------- | --------------------------- | ------------------------------------------------ |
| `items`         | `Tab[]`                     | All tabs (writable)                              |
| `activeTabId`   | `string`                    | Currently active tab id                          |
| `activeTab`     | `Tab \| undefined`          | Currently active tab                             |
| `langs`         | `Record<string, any>`       | Current language text                            |
| `i18nText`      | `(text: unknown) => string` | Get internationalized text                       |
| `basePath`      | `string`                    | The parent route path where RouterTab is located |
| `iframes`       | `string[]`                  | List of mounted iframe urls                      |
| `currentIframe` | `string \| null`            | Currently displayed iframe url                   |
| `contextData`   | `ContextmenuData`           | Context menu positioning data (writable)         |

## open

```ts
open(path: RouteLocationRaw, isReplace?: boolean, refresh?: boolean | 'sameTab'): Promise<void>
open(arg: OpenArg): Promise<void>
```

Positional argument defaults: `isReplace = false`, **`refresh = true`** (opens fresh by default).

`OpenArg`:

| Field       | Type               | Description                                                                        |
| ----------- | ------------------ | ---------------------------------------------------------------------------------- |
| `to`        | `RouteLocationRaw` | Target path                                                                        |
| `replace`   | `boolean?`         | Whether to navigate with replace                                                   |
| `refresh`   | `boolean?`         | Whether to refresh                                                                 |
| `isSameTab` | `boolean?`         | Only refresh when it hits the same tab (positional argument usage still supported) |

## close

```ts
close(arg?: CloseArg | RouteLocationRaw, to?: RouteLocationRaw): Promise<void>
```

`CloseArg`:

| Field     | Type                        | Default | Description                                                                                     |
| --------- | --------------------------- | ------- | ----------------------------------------------------------------------------------------------- |
| `id`      | `string?`                   | —       | Target tab id, mutually exclusive with `path`                                                   |
| `path`    | `RouteLocationRaw?`         | —       | Locate by path; closes the current tab if neither is passed                                     |
| `match`   | `boolean?`                  | `true`  | Whether `path` must match exactly                                                               |
| `force`   | `boolean?`                  | `true`  | Skip `beforePageLeave`                                                                          |
| `to`      | `RouteLocationRaw \| null?` | —       | Navigate to after closing; `null` means no navigation; navigates to the adjacent tab if omitted |
| `refresh` | `boolean?`                  | `false` | Whether to open the navigated address fresh                                                     |

## closeTab

```ts
closeTab(id?: string, to?: RouteLocationRaw | null, force?: boolean): Promise<void>
```

Defaults: `id = activeTabId`, `force = false` (**triggers confirmation**).

## refresh

```ts
refresh(path?: RouteLocationRaw, match?: boolean, force?: boolean): void
```

Defaults: `match = true`, `force = true` (**refreshes directly, no confirmation**).

## refreshTab

```ts
refreshTab(id?: string, force?: boolean): Promise<void>
```

Defaults: `id = activeTabId`, `force = false` (**triggers confirmation**).

## refreshAll

```ts
refreshAll(force?: boolean): Promise<void>
```

Defaults to `force = false`. One page blocking the refresh does not affect the others.

## reset

```ts
reset(to?: RouteLocationRaw): void
```

Clears cache + clears restore storage + rebuilds initial tabs + navigates to the default page. Navigates to `defaultPage` by default, falling back to `basePath` if omitted.

## reload

```ts
reload(): void
```

Only reloads the current page's view, without going through tab matching.

## adjust

```ts
adjust(): void
```

Actively recomputes tab bar scroll to keep the active tab visible. Call after container size changes (e.g. sidebar collapse, fullscreen toggle).

## iframe Methods

```ts
openIframe(src: string, title?: string, icon?: string): void
closeIframe(src: string): Promise<void>
refreshIframe(src: string): void
```

The latter two **must be passed `src`** — internally the tab path is looked up by address.

## Context Menu Methods

```ts
showContextmenu(id: string | null, index: number, e?: MouseEvent): void
hideContextmenu(): void
```
