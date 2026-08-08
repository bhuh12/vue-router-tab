# Introduction

Vue Router Tab is a route-based tab bar component built on Vue 3 and Vue Router, used to manage multi-tab pages.

<DocLinks :demo="DEMO_ROUTES.Default" />

<script setup>
import { DEMO_ROUTES } from '../../.vitepress/demoRoutes'
</script>

## Included Features

✅ Opens or switches tabs in response to route changes

✅ Mouse wheel scroll when there are too many tabs

✅ Drag-and-drop tab reordering

✅ Supports tab [operations](./essentials/operate) such as open, switch, close, refresh, and reset

✅ [Iframe tabs](./essentials/iframe) to embed external websites

✅ Component customization: [transitions](./custom/transition), [custom slots](./custom/slot), [tab context menu](./custom/contextmenu)

✅ [Internationalization](./custom/i18n) support

✅ [Preserves scroll position](./custom/scroll) after switching tabs

✅ [CSS variable theming](./custom/theme)

✅ [Cache control](./advanced/cache): tab rules, whether to cache, max cache count, component reuse

✅ [Dynamic tab info](./advanced/dynamic-tab-info): title, icon, tooltip

✅ [Initial tab data](./advanced/initial-tabs), tabs shown by default on entry

✅ [Tab restoration](./advanced/restore), recovering tabs after a browser refresh

✅ [Leave confirmation](./advanced/page-leave)

✅ [Multiple instances](./advanced/multi-instance), registering multiple independent tab instances in the same app

## Requirements

| Dependency   | Version      |
| ------------ | ------------ |
| `vue`        | `^3.5.0`     |
| `vue-router` | `^4 \|\| ^5` |

The component is built with the Composition API, Vue 3 only. For Vue 2 projects, use the v1 release.

::: warning Nuxt is not supported
Nuxt is not currently supported, see the [Nuxt notes](./essentials/nuxt).
:::
