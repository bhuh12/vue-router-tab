# Transitions

<DocLinks api="router-tab#props" :demo="DEMO_ROUTES.Transition" />

<script setup>
import { DEMO_ROUTES } from '../../../.vitepress/demoRoutes'
</script>

RouterTab has **two** independent transition configs:

| prop             | Target                        | Default                                       |
| ---------------- | ----------------------------- | --------------------------------------------- |
| `tabTransition`  | Tab item add/remove animation | `'router-tab-zoom'`                           |
| `pageTransition` | Page content switch animation | `{ name: 'router-tab-swap', mode: 'out-in' }` |

Both types are `string | TransitionProps`.

::: danger RouterTab Has No transition Prop
Don't write `<RouterTab transition="fade" />` — RouterTab has **no** `transition` prop; it has no effect and produces no error.

A prop named `transition` only exists on [RouterAlive](/en/api/router-alive), and its type is `string` only.
:::

## Built-in Transitions

The library ships two built-in transitions (defined in `src/scss/transition.scss`):

| Name              | Effect                              |
| ----------------- | ----------------------------------- |
| `router-tab-zoom` | Zoom fade, used for tab items       |
| `router-tab-swap` | Slide swap, used for page switching |

## Passing a String

Specify only the transition name:

```vue
<template>
  <RouterTab tab-transition="my-tab-fade" page-transition="my-page-fade" />
</template>
```

Write matching CSS:

```css
.my-page-fade-enter-active,
.my-page-fade-leave-active {
  transition: opacity 0.3s;
}

.my-page-fade-enter-from,
.my-page-fade-leave-to {
  opacity: 0;
}
```

## Passing an Object

When passing an object, it's the props of Vue's `<Transition>` component — all fields like `name` / `mode` / `appear` / `duration` are available:

```vue
<template>
  <RouterTab :page-transition="pageTransition" />
</template>

<script setup>
const pageTransition = {
  name: 'my-page-fade',
  mode: 'out-in',
  appear: true
}
</script>
```

::: tip What mode Does
`mode: 'out-in'` makes the old page leave before the new one enters, avoiding the layout jump caused by both pages being visible at once. This is why `pageTransition`'s default includes `mode`.

`tabTransition`'s default has no `mode` — tab items are list animations (`<TransitionGroup>`), where additions and removals need to happen simultaneously.
:::

## Disabling Transitions

Pass an empty string:

```vue
<template>
  <RouterTab tab-transition="" page-transition="" />
</template>
```

## Full Example

<<< ../../../../demo/src/frames/Transition.vue

See the [Vue Transition docs](https://vuejs.org/guide/built-ins/transition.html) for the full usage of transition classes and hooks.
