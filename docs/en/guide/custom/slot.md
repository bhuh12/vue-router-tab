# Tab Slots

<DocLinks api="router-tab#插槽" :demo="DEMO_ROUTES.Slot" />

<script setup>
import { DEMO_ROUTES } from '../../../.vitepress/demoRoutes'
</script>

RouterTab provides **three** slots:

| Slot      | Scope               | Description                |
| --------- | ------------------- | -------------------------- |
| `default` | `{ tab, closable }` | Customize tab item content |
| `start`   | none                | Left side of the tab bar   |
| `end`     | none                | Right side of the tab bar  |

## Customizing Tab Items

```vue
<template>
  <RouterTab>
    <template #default="{ tab, closable }">
      <i v-if="tab.icon" class="router-tab__item-icon" :class="tab.icon" />
      <span class="router-tab__item-title" :title="tab.tips || tab.title">
        {{ tab.title }}
      </span>
      <i v-if="closable" class="router-tab__item-close" @click.prevent.stop="closeTab(tab.id)" />
    </template>
  </RouterTab>
</template>
```

### tab Object Fields

| Field      | Type                                            | Description                                             |
| ---------- | ----------------------------------------------- | ------------------------------------------------------- |
| `id`       | `string`                                        | Unique tab identifier, taken from the route match's key |
| `to`       | `string`                                        | The tab's target path                                   |
| `title`    | `string?`                                       | Title                                                   |
| `tips`     | `string?`                                       | Tooltip                                                 |
| `icon`     | `string?`                                       | Icon class                                              |
| `closable` | `boolean?`                                      | **Static** closability (from `meta.routerTab.closable`) |
| `tabClass` | `string \| string[] \| Record<string, boolean>` | Custom class                                            |
| `href`     | `string?`                                       | External link URL                                       |
| `target`   | `string?`                                       | External link open method                               |

### closable Is Not tab.closable

The `closable` in the scope is a **computed value**:

```js
closable = tab.closable !== false && !(keepLastTab && items.length < 2)
```

It's determined by both the static closability and the dynamic check for "`keepLastTab` with only 1 tab left". **Use the scope's `closable` to render the close button** — using `tab.closable` would cause the close button to still show on the last tab.

## Start/End Slots

```vue
<template>
  <RouterTab>
    <template #start>
      <RouterLink class="tab-slot-icon rt-icon-home" to="/" title="Home" />
    </template>

    <template #end>
      <a class="tab-slot-icon rt-icon-fullscreen" title="Fullscreen" @click="toggle" />
    </template>
  </RouterTab>
</template>
```

The container class for the two slots is `.router-tab__slot-start` and `.router-tab__slot-end`.

## Calling Instance Methods in Slots

::: danger Must Access the Instance Lazily
When the component's `setup` runs, the inner `<RouterTab>` **hasn't registered its instance yet** — calling `useRouterTab()` directly at the top level will throw:

```
[vue-router-tab] useRouterTab() 需在挂载了 RouterTab 后调用
```

The correct approach is to access it only when the event fires:

```vue
<script setup>
import { useRouterTab } from 'vue-router-tab'

// ❌ Instance not registered during setup, throws
// const tabs = useRouterTab()

// ✅ Access when the event fires, instance is registered by then
function closeTab(id) {
  useRouterTab().closeTab(id)
}
</script>
```

Calling it inside a **child page** of RouterTab isn't subject to this restriction — page rendering happens after the instance is registered, so it can be accessed directly at the top level of `setup`.
:::

## Style Customization

Slot content lives within the `.router-tab` scope; `scoped` styles need `:deep()` to pierce through:

```vue
<style lang="scss" scoped>
.router-tab {
  :deep(.router-tab__slot-start),
  :deep(.router-tab__slot-end) {
    display: flex;
    align-items: center;
  }
}
</style>
```

Tab appearance can also be adjusted globally via CSS variables — see [Theming](./theme) for details.

## Full Example

<<< ../../../../demo/src/frames/Slot.vue
