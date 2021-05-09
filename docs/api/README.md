---
sidebar: auto
---

# API - RouterTab

## `<router-tab>` Props

### tabs

**Default Tabs**, The tabs displayed by default when entering the page. Only keep the first tab with the same `key`.

- type: `Array <String | Object>`

  - When the tab item type is `String`, it should be configured as the `fullPath` of the route. The title, icon, prompt and other information of the tab will be obtained from the `router` configuration of the corresponding page.

  - When the tab item type is `Object`:

    - to: The routing address of the tab is consistent with the `location` parameter of `router.push`, which can be either `fullPath` or a `location` object - [Reference](https://router.vuejs.org/guide/essentials/navigation.html#router-push-location-oncomplete-onabort)

    - title: Tab title, if the page has a dynamic title of `routeTab.title`, you can set the final dynamic title value here to avoid inconsistency with the title obtained from `router` by default.

    - closable: Whether the tab is allowed to be closed, the default is `true`.

- default: `[]`

### restore

Whether to **restore the tabs** after the browser refreshes.

If enabled, the previous tabs will be restored after the browser is refreshed.

- type: `Boolean | String`

  - When the type is `String` and is not empty, RouterTab will splice this value as the key of SessionStorage to store tabs information locally

- default: `false`

### restore-watch

**Whether to watch the restore parameter to automatic restoration tab**

If enabled, RouterTab will watch the `restore` option, and automatically restore the corresponding tabs of the local storage after the change.

- type: `Boolean`

- default: `false`

### default-page

**Default page**, the default path to redirect to after the last tab is closed or reset.

The program will automatically obtain the parent routing address of the tab as the default page.

- type: `String | Object` location path.

- default: Parent routing path of the tab component.

### tab-transition

The transition effect of tab, transition when adding and closing tabs.

- type: `String | Object`

  - When the type is `String`, it should be configured as `transition.name`

  - When the type is `Object`, reference: [Vue - transition](https://vuejs.org/v2/guide/transitions.html)

- default: `'router-tab-zoom'`

### page-transition

The transition effect of tab page.

- type: `String | Object`

  Same as [`tab-transition`](#tab-transition)

- default: `{ name: 'router-tab-swap', mode: 'out-in' }`

### page-scroller

Global **Scroll Element Selector**, the scroll position will be restored when the cached tab is reactivated.

- type: `String`

- default: `'.router-tab__container'`

### contextmenu

Custom contextmenu.

- type: `Boolean | Array <String | Object>`

  - Set to `false` to disable contextmenu.

  - Set as an array to customize contextmenu.

    - When the menu item type is `String`, it matches the built-in menu item

    - When the menu item type is `Object`, if the `id` matches the built-in menu item, the built-in menu will be extended; otherwise, it will be a custom menu.

- default: `true`

**Menu-item options**

| Attribute | Description                                 | Type                                          | Default | Required |
| --------- | ------------------------------------------- | --------------------------------------------- | ------- | -------- |
| id        | id                                          | `String`                                      | -       | ✅       |
| title     | text of menu-item                           | `String | Function(context)`                  | -       | ✅       |
| icon      | icon of menu-item                           | `String | Function(context)`                  | -       | -        |
| tips      | tips of menu-item                           | `String | Function(context)`                  | -       | -        |
| class     | class                                       | `String | Array | Object | Function(context)` | -       | -        |
| visible   | whether menu-item is visible                | `Function(context) => String`                 | `true`  | -        |
| enable    | whether menu-item is enable                 | `Function(context) => String`                 | `true`  | -        |
| handler   | callback function when menu-item is clicked | `Function(context)`                           | -       | ✅       |

Menu-item dynamic parameter `context` description:

| Attribute | Description                                             |
| --------- | ------------------------------------------------------- |
| \$tabs    | Instance of RouterTab                                   |
| \$menu    | Instance of Menu-item                                   |
| target    | Instance of the tab-item with the contextmenu activated |
| data      | data of contextmenu                                     |

### dragsort

Whether to support tab drag and drop sort.

- type: `Boolean`

- default: `true`

### append

Insert position of new tab.

- type: `String`

- available values: `'last'` | `'next'`

- default: `'last'`

### keep-last-tab

Whether to keep the last tab and cannot be closed.

- type: `Boolean`

- default: `true`

### keep-alive

Whether to cache tabs by default, it can be reset through the routing configuration `meta.keepAlive`.

- type: `Boolean`

- default: `true`

### max-alive

The maximum number of caches, set `0` to not limit.

- type: `Number`

- default: `0`

### reuse

Whether to reuse routing components, can be reset through the routing configuration `meta.reuse`.

- type: `Boolean`

- default: `false`

### i18n

Tab internationalization function.

`function(key: string, params: []): string`

- type: `Function`

- parameters:

  - `{String} [key]`: i18n `key`

  - `{Array} [params]` List of parameters for internationalized fields

- returns: `String` Internationalized string

### lang

Component language.

- type: `String | Object`

  - If the type is `String`, it can be set to the built-in language `'zh'` and `'en'`.

  - If the type is `Object`, you can set a custom language.

- default: `'auto'`. Automatically recognize component language according to browser language.

## RouterTab Instance Properties

Can be accessed via `this.$tabs.[prop]` inside your component.

### routerTab.items

Data of all tabs.

### routerTab.activeTab

Data of the currently activated tab.

### routerTab.activeTabId

Id of the currently activated tab.

## RouterTab Instance Methods

::: tip
Inside the Vue instance, you can access the routing tab instance through `this.$tabs`. For example: call `this.$tabs.close()` to close the current tab.
:::

### routerTab.open

Open tab with a specified path (new tab by default)

- parameters:
  - `{String | Object} [path]` A string path, or a location descriptor object - [Reference](https://router.vuejs.org/guide/essentials/navigation.html#router-push-location-oncomplete-onabort)
  - `{Boolean} [isReplace = false]` Whether to open with `$router.replace`
  - `{Boolean} [refresh = true]` Whether to refresh if the opened tab already exists (the previous tab page cache will be cleared)

### routerTab.close

Close the target tab

- call:

  1. `this.$tabs.close({id, path, match, force, to, refresh})`
  2. `this.$tabs.close(path, to)`

- parameters:

  - `{String} [id]` Close by tab `id`
  - `{location} [path]` Close the tab through the routing `path`, if the `id` and `path` are not configured, close the current tab
  - `{Boolean} [match = true]` When closed by `path`, whether to match the fullPath
  - `{Boolean} [force = true]` Whether to force close
  - `{location} to` The path to jump after closing, set `null` to not jump
  - `{Boolean} [refresh = false]` Whether to refresh if the opened tab already exists

### routerTab.refresh

Refresh the tab of target routing location

- parameters:
  - `{location} [path]` A string path, or a location descriptor object - [Reference](https://router.vuejs.org/guide/essentials/navigation.html#router-push-location-oncomplete-onabort)
  - `{Boolean} [match = true]` Whether to match fullPath without hash
  - `{Boolean} [force = true]` Whether to force refresh

### routerTab.refreshAll

Refresh all tabs

- parameters:
  - `{Boolean} [force = false]` If `force` is set to `true`, the `beforePageLeave` configuration of the page component is ignored and all tabs are forced to refresh

### routerTab.reset

Reset tabs to initial state

- parameters:
  - `{location} [to]` The redirected location after reset, default to `default-page`

### routerTab.openIframe

Open a iframe tab

- parameters:
  - `{String} [src]` The url of the Iframe tab to be opened
  - `{String} [title]` Title of tab
  - `{String} [icon]` Icon of tab

### routerTab.closeIframe

Close the iframe tab

- parameters:
  - `{String} [src]` The url of the iframe tab to be closed

### routerTab.refreshIframe

Refresh a iframe tab

- parameters:
  - `{String} [src]` The url of the iframe tab to be refreshed

## RouterTab Events

### iframe-mounted

Iframe component mounted

- parameters:
  - `{String} [url]` The url of the iframe
  - `{HTMLIFrameElement} [iframe]` Html element of iframe

### iframe-loaded

Iframe content loaded

- parameters:
  - `{String} [url]` The url of the iframe
  - `{HTMLIFrameElement} [iframe]` Html element of iframe

## RouterTab Slot

RouterTab supports personalization tab components through the following slots:

| Slot Name | Scope | Description   |
| --------- | ----- | ------------- |
| `default` | `tab` | Tab item      |
| `start`   | -     | Tab bar start |
| `end`     | -     | Tab bar end   |

## Route.meta

Through the `meta` route, we can configure the title, icon, prompt and cache rule of a route tab.

| Attribute | Description                   | Type                | Default         | Remark                                                                                                                  |
| --------- | ----------------------------- | ------------------- | --------------- | ----------------------------------------------------------------------------------------------------------------------- |
| key       | Routing key                   | `String | Function` | -               | Key that used for tab id and component cache<br>Built-in rules: `path` \| `fullPath`                                    |
| keepAlive | Whether to cache              | `Boolean`           | `true`          | If disabled, the instance will be recreated every time the page is entered                                              |
| reuse     | Whether to reuse components   | `Boolean`           | `false`         | Under the same rules, whether to reuse the previous components after changing the `params` or `query` of the same route |
| title     | Title of tab                  | `String | Array`    | `'Untitled'`    | I18n support<br>Reference: [Guide - I18n](../guide/custom/i18n.md)                                                      |
| tips      | Mouse hover tips              | `String | Array`    | Same as `title` | I18n support<br>Reference: [Guide - I18n](../guide/custom/i18n.md)                                                      |
| icon      | Icon of tab                   | `String`            | -               | -                                                                                                                       |
| tabClass  | Class of tab                  | `String`            | -               | -                                                                                                                       |
| closable  | Whether the tab can be closed | `Boolean`           | `true`          | -                                                                                                                       | - |

## Extends

::: tip Description
`pageComp`: Page component options.

`vm`: Instance of vue component.

`pageVm`: Instance of page component loaded through RouterTab.
:::

### `pageComp.beforePageLeave`

Page leave confirmation.

Page component options, Same level configuration as `data` and `methods`.

- parameters:

  - `{Object} tab` Tab data
  - `{String} type` Leave type:
    - `close`: tab be closed
    - `refresh`: tab be refreshed
    - `replace`: tab be replaced
    - `leave`: Route leave
    - `unload`: Browser refresh or close

- Type of return value:
  - `{String}` When the leave type is `unload`, provide a prompt message for the browser to leave.
  - `{Promise}` Other types, `resolve` to leave, `reject` to prevent leaving

### `pageComp.pageScroller`

**Scroll element selector** inside the page, the scroll position will be restored when the cached tab is reactivated.

When the value is an array, multiple scroll bars in the page can be applied.

- type: `String | Array`

### `vm.$tabs`

Instance of RouterTab.

To facilitate the call, RouterTab mounts the instance on `Vue.prototype`. Therefore, in all Vue components, you can access the instance of RouterTab through `this.$tabs`.

### `pageVm.routeTab`

Current routing tab configuration.

RouterTab updates the title, icon, and prompt of the corresponding tab of the page by watching the `this.routeTab` of the page component.
