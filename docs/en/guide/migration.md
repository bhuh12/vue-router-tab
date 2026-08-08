# Migrating from v1

This page summarizes the breaking changes in v2 relative to v1. Feature pages link back to the relevant section here where such changes apply.

## Breaking Changes Overview

| Change                                                                        | v1                                                  | v2                                                   | Impact                                                     |
| ----------------------------------------------------------------------------- | --------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------------- |
| [meta config](#meta-config-moved-under-meta-routertab)                        | Written flat under `meta`                           | Moved under `meta.routerTab`                         | All routes with tab info configured                        |
| [Imperative API](#tabs-prototype-injection-replaced-by-useroutertab)          | `Vue.prototype.$tabs` prototype injection           | `useRouterTab()` composable                          | All places using `this.$tabs`                              |
| [isSameTab](#issametab-replaces-the-magic-string-sametab)                     | `refresh: 'sameTab'` magic string                   | `isSameTab: true` (positional args still compatible) | Object-style calls to `open()`                             |
| [Contract fields no longer refs](#contract-fields-no-longer-refs)             | Some fields are `ref`, need `.value`                | `reactive()`, plain values directly                  | Everywhere reading `$tabs` fields                          |
| [Component options](#component-options-moved-to-userouterpage)                | `routeTab` / `beforePageLeave` in component options | Moved into `useRouterPage()`                         | Pages using either of these two options                    |
| [Transition prop](#transition-prop-split-into-tabtransition-pagetransition)   | Single `transition`                                 | Split into `tabTransition` / `pageTransition`        | Projects with custom transitions                           |
| [Iframe routes](#iframe-routes-require-manual-injection)                      | Auto-injected                                       | Requires manually injecting `RouterTabRoutes`        | Projects using iframe tabs                                 |
| [Slot scope](#slot-scope-changes)                                             | Flat 10 fields                                      | Collapsed to `{ tab, closable }`                     | Projects with a custom default slot                        |
| [Context menu handler](#context-menu-handler-argument-flattened)              | `$menu` object                                      | Flattened `ContextmenuContext`                       | Projects with custom menu items                            |
| [`$lang` prototype injection](#vue-prototype-lang-replaced-by-provide-inject) | `Vue.prototype.$lang`                               | Implement yourself via provide/inject                | Projects sharing a component language switcher             |
| [page-loaded event](#page-loaded-event-replaced-by-restorescroll)             | `$emit('page-loaded')`                              | `restoreScroll()`                                    | Pages that manually trigger scroll restoration             |
| Nuxt support                                                                  | Special-cased via `$nuxt`                           | Removed, not supported for now                       | Projects using Nuxt, see [Nuxt](/en/guide/essentials/nuxt) |
| Package manager                                                               | yarn recommended                                    | pnpm recommended                                     | Install / uninstall commands                               |

## meta Config Moved Under meta.routerTab

In v1, tab config was written directly under `meta` (e.g. `meta.title`, `meta.key`, `meta.keepAlive`); in v2, everything is moved under the `meta.routerTab` namespace:

```js
// v1
meta: {
  title: 'Page',
  key: 'path',
  keepAlive: true
}

// v2
meta: {
  routerTab: {
    title: 'Page',
    key: 'path',
    keepAlive: true
  }
}
```

This affects `title`, `key`, `keepAlive`, and all other tab-related fields. See [API - Route Meta](/en/api/route-meta) for details.

## $tabs Prototype Injection Replaced by useRouterTab()

v1 injected the instance globally via `Vue.prototype.$tabs`, called from a component with `this.$tabs.xxx()`; v2 removes the prototype injection and replaces it with the composable `useRouterTab()`:

```js
// v1
this.$tabs.open('/page/2')

// v2
import { useRouterTab } from 'vue-router-tab'

const tabs = useRouterTab()
tabs.open('/page/2')
```

All `this.$tabs.xxx()` calls become the same-named methods on `useRouterTab()`'s return value. Note that RouterTab has **no** `defineExpose`, so a template ref can't get the instance — it can only be obtained via `useRouterTab()`.

### isSameTab Replaces the Magic String 'sameTab'

In `open()`'s object-style argument, v1 used the magic string `refresh: 'sameTab'` to mean "only open fresh when it hits the same tab"; v2 provides the semantic `isSameTab` field:

```js
// v1
this.$tabs.open({ to: '/page/2', refresh: 'sameTab' })

// v2 (recommended)
tabs.open({ to: '/page/2', isSameTab: true })

// v2 (positional-arg form still compatible with v1's 'sameTab')
tabs.open('/page/2', false, 'sameTab')
```

`isSameTab: true` is internally converted to the equivalent `refresh: 'sameTab'` logic — both forms behave identically, and `isSameTab` is recommended for new code.

## Contract Fields No Longer Refs

In v1, some fields on `$tabs` were `ref`s, requiring `.value` when accessed outside a template; in v2, `useRouterTab()`'s return value is a `reactive()` object, and all fields are **plain values, no `.value` needed**:

```js
// v1 (assuming the field is a ref)
this.$tabs.activeTabId.value

// v2: plain value, no .value
const tabs = useRouterTab()
tabs.activeTabId
```

::: tip items and contextData Are Still Writable
`items` (all tabs) and `contextData` (context menu positioning data) are reactive proxies — reads are plain values, but they're **still writable** — assigning to them directly triggers a reactive update, they're not read-only snapshots.
:::

This change affects everywhere a value is read via `useRouterTab()`. See [Tab Operations](/en/guide/essentials/operate#getting-the-instance) for details.

## Component Options Moved to useRouterPage()

v1 declared two hooks directly in component options: `routeTab` (dynamic tab info) and `beforePageLeave` (leave confirmation); v2 consolidates both into the composable `useRouterPage()`:

```js
// v1
export default {
  routeTab: {
    title: 'Dynamic Title'
  },
  beforePageLeave(tab, type) {
    // ...
  }
}
```

```vue
<!-- v2 -->
<script setup>
import { useRouterPage } from 'vue-router-tab'

useRouterPage({
  routeTab: {
    title: 'Dynamic Title'
  },
  beforePageLeave(tab, type) {
    // ...
  }
})
</script>
```

Both `routeTab` (object or computed) and `beforePageLeave` become arguments to `useRouterPage()`. See [Dynamic Tab Info](/en/guide/advanced/dynamic-tab-info) and [Leave Confirmation](/en/guide/advanced/page-leave) for details.

## transition Prop Split into tabTransition / pageTransition

v1 used a single `transition` prop to control both the tab item and page content transitions; v2 splits it into two independent props:

```js
// v1
{
  transition: 'my-fade'
}
```

```js
// v2
{
  tabTransition: 'my-tab-fade',   // Add/remove animation for tab items
  pageTransition: 'my-page-fade'  // Transition animation for page content
}
```

::: danger RouterTab No Longer Has transition
Don't write a `transition` prop on RouterTab — it doesn't exist, and won't error but also won't take effect. The prop named `transition` now belongs only to [RouterAlive](/en/api/router-alive), and is typed as `string` only (no longer accepts an object).
:::

The two also have different defaults: `tabTransition` defaults to `'router-tab-zoom'`, `pageTransition` defaults to `{ name: 'router-tab-swap', mode: 'out-in' }`. See [Transitions](/en/guide/custom/transition) for details.

## Iframe Routes Require Manual Injection

v1 automatically injected the built-in routes needed for iframe tabs; v2 requires developers to manually inject `RouterTabRoutes` into the `children` at the level where `<RouterTab />` lives:

```js
import { RouterTabRoutes } from 'vue-router-tab'

{
  path: '/',
  component: Frame,
  children: [
    ...RouterTabRoutes, // v2 requires manual injection
    // other business routes
  ]
}
```

Without this injection, `openIframe()` navigation fails. See [Iframe Tabs](/en/guide/essentials/iframe) for details.

## Slot Scope Changes

v1's default slot scope was flat: `{ base, data, id, title, tips, icon, tabClass, closable, index, close }`; v2 collapses it to `{ tab, closable }`:

- Tab info is now taken uniformly from the `tab` object (`tab.id` / `tab.title` / `tab.tips` / `tab.icon` / `tab.tabClass`)
- `index` and `close` are no longer provided — use `useRouterTab().closeTab(tab.id)` for the close action instead

```vue
<!-- v1 -->
<template #default="{ id, title, closable, close }">
  <span>{{ title }}</span>
  <i v-if="closable" @click="close" />
</template>

<!-- v2 -->
<template #default="{ tab, closable }">
  <span>{{ tab.title }}</span>
  <i v-if="closable" @click="useRouterTab().closeTab(tab.id)" />
</template>
```

See [Tab Slots](/en/guide/custom/slot) for details.

## Context Menu handler Argument Flattened

v1's handler argument was a `$menu` object; v2 replaces it with a flattened `ContextmenuContext` (containing `$tabs`, `data`, `target`, `lefts`, `rights`, `others`, `closeMulti`, etc.). See [Context Menu](/en/guide/custom/contextmenu#handler-context) for details.

## Vue.prototype.$lang Replaced by provide/inject

v1 injected a language switcher globally via `Vue.prototype.$lang`; v2 removes this prototype injection, and instead requires implementing the shared language-switching logic yourself via provide/inject or state management. The demo's approach can be referenced in the [Internationalization](/en/guide/custom/i18n) example.

## page-loaded Event Replaced by restoreScroll()

v1 used `this.$emit('page-loaded')` to notify the component to restore scroll position; v2 replaces this with calling `restoreScroll()` returned from `useRouterPage()`:

```js
// v1
this.$emit('page-loaded')

// v2
const { restoreScroll } = useRouterPage()

onMounted(async () => {
  list.value = await fetchList()
  await restoreScroll()
})
```

See [Scrollbar](/en/guide/custom/scroll) for details.

## v1 Capability Comparison Table

| v1                                                                                           | v2                                                                                                  |
| -------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `this.$tabs.open(path, isReplace, refresh)`                                                  | `tabs.open(path, isReplace, refresh)` (get `tabs` via `useRouterTab()`, positional args compatible) |
| `this.$tabs.close(arg, to)`                                                                  | `tabs.close(arg, to)`                                                                               |
| `this.$tabs.refresh(path, match, force)`                                                     | `tabs.refresh(path, match, force)`                                                                  |
| `this.$tabs.reset(to)`                                                                       | `tabs.reset(to)`                                                                                    |
| `this.$tabs.openIframe(src, title, icon)`                                                    | `tabs.openIframe(src, title, icon)`                                                                 |
| `this.$tabs.closeIframe(src)` / `refreshIframe(src)`                                         | `tabs.closeIframe(src)` / `tabs.refreshIframe(src)` (v2 both **require** `src`)                     |
| (no equivalent)                                                                              | `tabs.reload()`, `tabs.adjust()` (new in v2)                                                        |
| `Vue.prototype.$lang`                                                                        | Removed, implement yourself via provide/inject or state management                                  |
| `this.$emit('page-loaded')`                                                                  | `restoreScroll()` returned from `useRouterPage()`                                                   |
| Component option `routeTab`                                                                  | `useRouterPage({ routeTab })`                                                                       |
| Component option `beforePageLeave`                                                           | `useRouterPage({ beforePageLeave })`, signature changed to `(tab, type)`                            |
| Component option `pageScroller` (page-level)                                                 | `useRouterPage({ pageScroller })`                                                                   |
| Template `ref="tabs"` to get the RouterTab instance                                          | Not available (RouterTab has no `defineExpose`), use `useRouterTab()` instead                       |
| Template `ref` to get the RouterAlive instance                                               | Still available, RouterAlive **keeps** `defineExpose`                                               |
| Default slot scope `{ base, data, id, title, tips, icon, tabClass, closable, index, close }` | `{ tab, closable }`                                                                                 |
| Context menu handler argument `$menu`                                                        | Flattened `ContextmenuContext`                                                                      |
| `transition` prop                                                                            | Split into `tabTransition` / `pageTransition`                                                       |
| `meta.title` / `meta.key` / `meta.keepAlive` etc. flat fields                                | Moved under `meta.routerTab`                                                                        |
| `refresh: 'sameTab'`                                                                         | `isSameTab: true` (positional-arg form still compatible)                                            |
| yarn install/uninstall                                                                       | pnpm                                                                                                |
| Auto-injected iframe routes                                                                  | Requires manually injecting `RouterTabRoutes`                                                       |
| Nuxt 2 support (`$nuxt` special-casing)                                                      | Removed, see [Nuxt](/en/guide/essentials/nuxt)                                                      |

## Migration Checklist

Work through these in order to cover essentially all breaking changes:

- [ ] Change package manager commands from `yarn` to `pnpm` (`pnpm add` / `pnpm remove`)
- [ ] Confirm the style import path is `vue-router-tab/dist/index.css` (no `./style` alias)
- [ ] Move all tab-related fields (`title` / `key` / `keepAlive` etc.) under route `meta` into `meta.routerTab`
- [ ] Search globally for `this.$tabs`, replace with `useRouterTab()` in the corresponding component
- [ ] If `refresh: 'sameTab'` is used, change to `isSameTab: true` (not required, still compatible, optional)
- [ ] Search globally for `routeTab` / `beforePageLeave` component options, migrate them into `useRouterPage()`
- [ ] If `beforePageLeave` used the old `(type, tab)` argument order from memory, verify it's now `(tab, type)`
- [ ] Search globally for the `transition` prop (on RouterTab), split it into `tabTransition` and `pageTransition`
- [ ] Manually inject `RouterTabRoutes` for every level where a `<RouterTab>` lives in the route table (otherwise iframe tabs won't work)
- [ ] If the default slot is customized, change its scope from flat fields to `{ tab, closable }`, and change the `close` method to `useRouterTab().closeTab(tab.id)`
- [ ] If context menu items are customized, change the `handler` argument from `$menu` to `ContextmenuContext` (`$tabs` / `data` / `target` / `lefts` / `rights` / `others` / `closeMulti`)
- [ ] If `Vue.prototype.$lang` is used, implement it yourself via provide/inject or state management
- [ ] If scroll restoration was manually triggered (`$emit('page-loaded')`), change it to call `restoreScroll()` returned from `useRouterPage()`
- [ ] If a template `ref` is used to get the RouterTab instance, change it to `useRouterTab()` (RouterAlive's `ref` still works)
- [ ] If the project runs on Nuxt, check whether it's affected (v2 doesn't support it for now, see [Nuxt](/en/guide/essentials/nuxt))
- [ ] Run `pnpm build` or your project's own build — TypeScript type checking will catch most missed spots (v1 was plain JS, v2 has stricter types)
