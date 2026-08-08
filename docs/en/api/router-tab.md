# RouterTab

## Props

| prop             | Type                                                    | Default                                       | Description                                                                                                                                                                                                                                                                               |
| ---------------- | ------------------------------------------------------- | --------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `tabs`           | `PresetTab[]`                                           | `[]`                                          | Initial tabs to display, `PresetTab = string \| (Partial<Omit<Tab, 'to'>> & { to: RouteLocationRaw })`; if restore data exists it takes priority and this prop is skipped. See [Initial Tabs](/en/guide/advanced/initial-tabs) for details                                                |
| `restore`        | `boolean \| string`                                     | `false`                                       | Tab restoration. `true` uses the default storage key, a string is used as a key suffix; data is stored in `sessionStorage`. See [Tab Restoration](/en/guide/advanced/restore) for details                                                                                                 |
| `restoreWatch`   | `boolean`                                               | `false`                                       | When enabled, saves immediately whenever tabs change. See [Tab Restoration](/en/guide/advanced/restore) for details                                                                                                                                                                       |
| `append`         | `'last' \| 'next'`                                      | `'last'`                                      | Where new tabs are inserted. `'last'` inserts at the end, `'next'` inserts right after the current tab. See [Tab Behavior](/en/guide/custom/) for details                                                                                                                                 |
| `keepLastTab`    | `boolean`                                               | `true`                                        | Prevents closing when only one tab remains; attempting to close shows `msg.keepLastTab`; participates in the slot's `closable` calculation. See [Tab Slots](/en/guide/custom/slot) for details                                                                                            |
| `dragsort`       | `boolean`                                               | `true`                                        | Toggle for tab drag-and-drop sorting. See [Tab Behavior](/en/guide/custom/) for details                                                                                                                                                                                                   |
| `keepAlive`      | `boolean`                                               | `true`                                        | Whether to cache pages; can be overridden by the route's `meta.routerTab.keepAlive`. See [Tab Caching](/en/guide/advanced/cache) for details                                                                                                                                              |
| `maxAlive`       | `number`                                                | `0`                                           | Maximum number of cached pages, `0` means unlimited; when exceeded, the oldest non-current tab's cache is evicted via LRU (the tab itself is not closed)                                                                                                                                  |
| `reuse`          | `boolean`                                               | `false`                                       | Whether different addresses with the same key reuse a single component instance; when `true` the component is not remounted and the page must watch route param changes itself                                                                                                            |
| `tabTransition`  | `string \| TransitionProps`                             | `'router-tab-zoom'`                           | The add/remove animation for tab items, applied to `<TransitionGroup>`; passing an object is the props of Vue's `<Transition>`, built-in `router-tab-zoom`. See [Transitions](/en/guide/custom/transition) for details                                                                    |
| `pageTransition` | `string \| TransitionProps`                             | `{ name: 'router-tab-swap', mode: 'out-in' }` | The switch animation for page content; defaults to `mode: 'out-in'` to avoid two pages being visible at once, built-in `router-tab-swap`                                                                                                                                                  |
| `contextmenu`    | `boolean \| (BuiltinMenuId \| ContextmenuItemConfig)[]` | `true`                                        | Context menu. `false` disables it; an array customizes menu items and their order. See [Context Menu](/en/guide/custom/contextmenu) for details                                                                                                                                           |
| `lang`           | `string \| Record<string, any>`                         | `'auto'`                                      | Component language. `'auto'` takes the first two characters of `navigator.language`, falling back to `en` if unmatched; can also pass `'zh'`/`'en'` or a custom language object, built-in languages are only `zh` and `en`. See [Internationalization](/en/guide/custom/i18n) for details |
| `pageScroller`   | `string`                                                | `'.router-tab__container'`                    | Frame-level scroll container selector; on the page side it is prefixed with `$` and looked up at the **document** level; for page-level config see [useRouterPage](./use-router-page#pagescroller). See [Scrollbar](/en/guide/custom/scroll) for details                                  |
| `defaultPage`    | `RouteLocationRaw`                                      | —                                             | Default page; falls back to `basePath` if omitted                                                                                                                                                                                                                                         |
| `i18n`           | `(key: string, params?: any[]) => string`               | —                                             | Internationalization function. See [Internationalization](/en/guide/custom/i18n) for details                                                                                                                                                                                              |
| `tabId`          | `string`                                                | —                                             | Multi-instance identifier; `useRouterTab(tabId)` uses this to get the corresponding instance. See [Multiple Instances](/en/guide/advanced/multi-instance) for details                                                                                                                     |
| `iframeAttrs`    | `(url: string) => Record<string, unknown>`              | —                                             | Returns extra attributes for the `<iframe>` based on url (e.g. `sandbox` / `referrerpolicy`); cannot override the library's fixed `src` and `name`. See [Iframe Tabs](/en/guide/essentials/iframe) for details                                                                            |

::: danger RouterTab has no transition prop
The only transition configs are `tabTransition` and `pageTransition`. A prop named `transition` exists only on [RouterAlive](./router-alive).
:::

## Events

RouterTab has **only two** events:

| Event            | Parameters                             | Trigger                                         |
| ---------------- | -------------------------------------- | ----------------------------------------------- |
| `iframe-mounted` | `(url: string, el: HTMLIFrameElement)` | Fired when the iframe node is mounted and ready |
| `iframe-loaded`  | `(url: string, el: HTMLIFrameElement)` | Fired when the iframe content finishes loading  |

`iframe-loaded` comes from the native `load` event; iframe internal navigation also triggers it.

## Slots

RouterTab has **only three** slots:

| Slot      | Scope                             | Description               |
| --------- | --------------------------------- | ------------------------- |
| `default` | `{ tab: Tab, closable: boolean }` | Custom tab item content   |
| `start`   | none                              | Left side of the tab bar  |
| `end`     | none                              | Right side of the tab bar |

::: warning closable is not tab.closable
The scoped `closable` is a computed value:

```js
closable = tab.closable !== false && !(keepLastTab && items.length < 2)
```

Use the scoped `closable` to render the close button.
:::

See [Tab Slots](/en/guide/custom/slot) for details.
