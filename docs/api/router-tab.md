# RouterTab

## Props

| prop             | 类型                                                    | 默认值                                        | 说明                                                                                                                                                                        |
| ---------------- | ------------------------------------------------------- | --------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `tabs`           | `PresetTab[]`                                           | `[]`                                          | 初始展示的页签，`PresetTab = string \| (Partial<Omit<Tab, 'to'>> & { to: RouteLocationRaw })`；有恢复数据时优先恢复，不走此项。详见[初始页签](/guide/advanced/initial-tabs) |
| `restore`        | `boolean \| string`                                     | `false`                                       | 页签恢复。`true` 用默认存储 key，字符串作为 key 后缀；数据存 `sessionStorage`。详见[页签恢复](/guide/advanced/restore)                                                      |
| `restoreWatch`   | `boolean`                                               | `false`                                       | 开启后页签变化时立即保存。详见[页签恢复](/guide/advanced/restore)                                                                                                           |
| `append`         | `'last' \| 'next'`                                      | `'last'`                                      | 新页签插入位置。`'last'` 插入末尾，`'next'` 插入当前页签之后。详见[页签行为](/guide/custom/)                                                                                |
| `keepLastTab`    | `boolean`                                               | `true`                                        | 仅剩一个页签时禁止关闭，尝试关闭提示 `msg.keepLastTab`；参与插槽 `closable` 的计算。详见[页签插槽](/guide/custom/slot)                                                      |
| `dragsort`       | `boolean`                                               | `true`                                        | 页签拖拽排序开关。详见[页签行为](/guide/custom/)                                                                                                                            |
| `keepAlive`      | `boolean`                                               | `true`                                        | 是否缓存页面，可被路由 `meta.routerTab.keepAlive` 覆盖。详见[页签缓存](/guide/advanced/cache)                                                                               |
| `maxAlive`       | `number`                                                | `0`                                           | 最大缓存页数，`0` 不限制；超出按 LRU 驱逐最早的非当前页签缓存（页签本身不关闭）                                                                                             |
| `reuse`          | `boolean`                                               | `false`                                       | 同 key 的不同地址是否复用一个组件实例；`true` 时组件不重新挂载，页面需自行监听路由参数变化                                                                                  |
| `tabTransition`  | `string \| TransitionProps`                             | `'router-tab-zoom'`                           | 页签项的增删动画，作用于 `<TransitionGroup>`；传对象即 Vue `<Transition>` 的 props，内置 `router-tab-zoom`。详见[过渡效果](/guide/custom/transition)                        |
| `pageTransition` | `string \| TransitionProps`                             | `{ name: 'router-tab-swap', mode: 'out-in' }` | 页面内容的切换动画；默认带 `mode: 'out-in'` 避免两个页面同时可见，内置 `router-tab-swap`                                                                                    |
| `contextmenu`    | `boolean \| (BuiltinMenuId \| ContextmenuItemConfig)[]` | `true`                                        | 右键菜单。`false` 禁用；数组可自定义菜单项与顺序。详见[右键菜单](/guide/custom/contextmenu)                                                                                 |
| `lang`           | `string \| Record<string, any>`                         | `'auto'`                                      | 组件语言。`'auto'` 取 `navigator.language` 前两位、未命中回退 `en`；也可传 `'zh'`/`'en'` 或自定义语言对象，内置语言只有 `zh` 与 `en`。详见[国际化](/guide/custom/i18n)      |
| `pageScroller`   | `string`                                                | `'.router-tab__container'`                    | frame 级滚动容器选择器，页面侧会被加 `$` 前缀按 **document 级**查找；页面级配置见 [useRouterPage](./use-router-page#pagescroller)。详见[滚动条](/guide/custom/scroll)       |
| `defaultPage`    | `RouteLocationRaw`                                      | —                                             | 默认页面；缺省用 `basePath`                                                                                                                                                 |
| `i18n`           | `(key: string, params?: any[]) => string`               | —                                             | 国际化方法。详见[国际化](/guide/custom/i18n)                                                                                                                                |
| `tabId`          | `string`                                                | —                                             | 多实例标识，`useRouterTab(tabId)` 按此取对应实例。详见[多实例](/guide/advanced/multi-instance)                                                                              |
| `iframeAttrs`    | `(url: string) => Record<string, unknown>`              | —                                             | 按 url 返回 `<iframe>` 的附加属性（如 `sandbox` / `referrerpolicy`），不能覆盖库固定的 `src` 与 `name`。详见 [iframe 页签](/guide/essentials/iframe)                        |

::: danger RouterTab 上没有 transition prop
过渡配置只有 `tabTransition` 与 `pageTransition` 两个。名为 `transition` 的 prop 只在 [RouterAlive](./router-alive) 上。
:::

## 事件

RouterTab **只有两个**事件：

| 事件             | 参数                                   | 触发时机            |
| ---------------- | -------------------------------------- | ------------------- |
| `iframe-mounted` | `(url: string, el: HTMLIFrameElement)` | iframe 节点挂载就绪 |
| `iframe-loaded`  | `(url: string, el: HTMLIFrameElement)` | iframe 内容加载完成 |

`iframe-loaded` 来自原生 `load` 事件，iframe 内部导航同样触发。

## 插槽

RouterTab **只有三个**插槽：

| 插槽      | 作用域                            | 说明             |
| --------- | --------------------------------- | ---------------- |
| `default` | `{ tab: Tab, closable: boolean }` | 自定义页签项内容 |
| `start`   | 无                                | 页签栏左侧       |
| `end`     | 无                                | 页签栏右侧       |

::: warning closable 不等于 tab.closable
作用域的 `closable` 是计算值：

```js
closable = tab.closable !== false && !(keepLastTab && items.length < 2)
```

渲染关闭按钮请用作用域的 `closable`。
:::

详见[页签插槽](/guide/custom/slot)。
