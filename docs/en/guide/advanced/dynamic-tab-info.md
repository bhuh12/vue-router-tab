# Dynamic Tab Info

<DocLinks api="use-router-page#routetab" :demo="DEMO_ROUTES.Default" />

<script setup>
import { DEMO_ROUTES } from '../../../.vitepress/demoRoutes'
</script>

When a tab's title needs to change based on page data (e.g. "Order #1024", "Editing: John"), there are two approaches.

## Route meta as a Function (Static Derivation)

When the info can be computed directly from route params, a function-based meta is the simplest:

```js
{
  path: 'order/:id',
  component: Order,
  meta: {
    routerTab: {
      title: route => `Order #${route.params.id}`,
      tips: route => `View details for order ${route.params.id}`,
      key: 'path'
    }
  }
}
```

`title` / `tips` / `icon` / `closable` / `tabClass` / `key` — all 6 of these fields support functions, taking the current route as the argument.

## useRouterPage (Data-Driven)

When the info comes from an API response, use `useRouterPage({ routeTab })` in the page:

```vue
<script setup>
import { ref, computed } from 'vue'
import { useRouterPage } from 'vue-router-tab'

const order = ref(null)

useRouterPage({
  routeTab: computed(() => ({
    title: order.value ? `Order ${order.value.no}` : 'Loading…',
    icon: 'rt-icon-order',
    tips: order.value?.customer
  }))
})

order.value = await fetchOrder()
</script>
```

### Three Ways to Pass Values

`routeTab` accepts a ref, a computed, or a plain value:

```js
// 1. computed (most common, updates automatically as data changes)
useRouterPage({ routeTab: computed(() => ({ title: name.value })) })

// 2. ref
const tab = ref({ title: 'Initial Title' })
useRouterPage({ routeTab: tab })
tab.value = { title: 'New Title' }

// 3. Plain value (set once, unchanged afterward)
useRouterPage({ routeTab: { title: 'Fixed Title' } })
```

### A String Sets Only the Title

```js
useRouterPage({ routeTab: computed(() => order.value?.no ?? 'Loading…') })
```

Passing a string is equivalent to `{ title: string }`.

### Fields That Can Be Set

`routeTab`'s type is `string | Partial<Tab>`, and it can set `title` / `tips` / `icon` / `closable` / `tabClass` and other `Tab` fields.

## Working with i18n

When the title needs to support multiple languages, return an i18n key:

```js
useRouterPage({
  routeTab: computed(() => ({
    title: ['route.orderDetail', order.value?.no]
  }))
})
```

See [Internationalization](../custom/i18n) for details.

## Priority and Merge Behavior

The page-level `routeTab` is **patched field by field** onto the current tab object: only the fields you provide are overwritten, and unspecified fields keep their `meta.routerTab` value. So you can change just `title` while keeping the `icon` configured in meta.

::: warning id and to Cannot Be Modified
`id` and `to` are skipped during the patch — the tab identity and target address are determined by the route and cannot be changed.
:::

::: tip ref/computed Use Deep Watching
When passing a ref or computed, internally it uses `watch(..., { immediate: true, deep: true })`, so mutating fields inside the object also triggers an update. Passing a plain value only applies it once during `setup`.
:::

## Full Example

<<< ../../../../demo/src/views/TabDynamic.vue
