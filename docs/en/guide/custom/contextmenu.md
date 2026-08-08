# Context Menu

<DocLinks api="router-tab#props" :demo="DEMO_ROUTES.Contextmenu" />

<script setup>
import { DEMO_ROUTES } from '../../../.vitepress/demoRoutes'
</script>

The `contextmenu` prop controls the tab context menu, typed `boolean | (BuiltinMenuId | ContextmenuItemConfig)[]`, defaulting to `true`.

## Disabling the Menu

```vue
<template>
  <RouterTab :contextmenu="false" />
</template>
```

## Built-in Menu Items

There are **6** built-in items; the default order is the order in the table below:

| id            | Description                        | Disable Condition                                                 |
| ------------- | ---------------------------------- | ----------------------------------------------------------------- |
| `refresh`     | Refresh the currently selected tab | None                                                              |
| `refreshAll`  | Refresh all cached tabs            | None                                                              |
| `close`       | Close the selected tab             | The tab isn't closable, or only 1 tab remains under `keepLastTab` |
| `closeLefts`  | Close tabs to the left             | No closable tabs to the left                                      |
| `closeRights` | Close tabs to the right            | No closable tabs to the right                                     |
| `closeOthers` | Close other tabs                   | No other closable tabs                                            |

## Customizing Menu Item Order

Pass an array, referencing built-in items by their id string:

```vue
<template>
  <RouterTab :contextmenu="['refresh', 'close', 'closeOthers']" />
</template>
```

## Adding Custom Items

Array elements can also be config objects, mixed with built-in ids:

```vue
<template>
  <RouterTab :contextmenu="menu" />
</template>

<script setup>
const menu = [
  'refresh',
  'close',
  {
    id: 'copy-path',
    title: 'Copy path',
    icon: 'rt-icon-copy',
    tips: 'Copy the tab address to the clipboard',
    class: 'my-menu-item',
    handler: ({ target }) => {
      if (target) navigator.clipboard.writeText(target.to)
    }
  }
]
</script>
```

### Config Fields

| Field     | Type                          | Description                                                         |
| --------- | ----------------------------- | ------------------------------------------------------------------- |
| `id`      | `string?`                     | Menu item id; when using a built-in id, the built-in text is reused |
| `title`   | `string \| (ctx) => string`   | Title, takes priority over built-in text                            |
| `icon`    | `string \| (ctx) => string`   | Icon class                                                          |
| `tips`    | `string?`                     | Tooltip                                                             |
| `class`   | `string?`                     | Custom class                                                        |
| `visible` | `boolean \| (ctx) => boolean` | Whether to show it, defaults to `true`                              |
| `enable`  | `boolean \| (ctx) => boolean` | Whether it's enabled, defaults to `true`                            |
| `handler` | `(ctx) => void`               | Click handler                                                       |

`title` / `icon` / `visible` / `enable` all support passing a function, whose parameter is the context object described below, enabling dynamic text and state.

## handler Context

| Field        | Type                             | Description                                              |
| ------------ | -------------------------------- | -------------------------------------------------------- |
| `$tabs`      | `RouterTabInstance`              | RouterTab instance                                       |
| `data`       | `ContextmenuData`                | Right-click positioning data: `{ id, index, left, top }` |
| `target`     | `Tab \| undefined`               | The tab that was right-clicked                           |
| `lefts`      | `Tab[]`                          | Closable tabs to the left of the selected item           |
| `rights`     | `Tab[]`                          | Closable tabs to the right of the selected item          |
| `others`     | `Tab[]`                          | Closable tabs other than the selected item               |
| `closeMulti` | `(tabs: Tab[]) => Promise<void>` | Close multiple tabs in bulk                              |

Use the context to implement bulk operations like "close left":

```js
{
  id: 'close-lefts-force',
  title: 'Force close left',
  enable: ({ lefts }) => lefts.length > 0,
  handler: ({ lefts, closeMulti }) => closeMulti(lefts)
}
```

## Manually Invoking the Menu

```js
import { useRouterTab } from 'vue-router-tab'

const tabs = useRouterTab()

// Invoke the menu for a given tab at a given position
// Params: tab id, tab index, mouse event (optional, used to position the menu)
tabs.showContextmenu(tab.id, index, event)

// Close the menu
tabs.hideContextmenu()
```

## Menu Text Internationalization

Built-in item text comes from the language pack's `contextmenu.*` (6 entries, one for each built-in id) — see [Internationalization](./i18n) for details.

For custom items, `title` needs to be handled for multiple languages yourself; you can call `$tabs.i18nText()` inside a function-style title:

```js
{
  id: 'my-item',
  title: ({ $tabs }) => $tabs.i18nText('i18n:myItem')
}
```

## Full Example

<<< ../../../../demo/src/frames/Contextmenu.vue
