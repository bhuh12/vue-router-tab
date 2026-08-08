# FAQ

### Multi-level nested route tab generation isn't supported ([issue 32](https://github.com/bhuh12/vue-router-tab/issues/32))

RouterTab is intentionally designed this way: only the **direct child routes** of the route containing the RouterTab component participate in generating tabs; routes one level deeper display normally, just like in Vue Router.

Consider it this way: a tabbed page whose internals also have child tabs controlling display, where the child tabs also need to respond to routing — that kind of nesting would need its own independent state management, making cache determination too complex to reason about. For the underlying reason, see [Path Ownership in Nested RouterAlive](./internals#path-ownership-in-nested-routeralive): each `RouterAlive` layer's cache determination only cares about its own path segment, and can't aggregate across layers into a single tab.

Putting all tab routes at the same level can get messy — you can use the spread operator to split them by module:

```js
import { RouterTabRoutes } from 'vue-router-tab'

const news = [/* ... */]
const product = [/* ... */]

const routes = [
  {
    path: '/',
    component: Frame,
    children: [...RouterTabRoutes, ...news, ...product]
  }
]
```

### The leave guard is router-level, only bound to the first instance

`beforePageLeave`'s `leave` / `replace` types are triggered via a router guard, and the guard is registered on the router. In a [multi-instance](../advanced/multi-instance) setup, only the **first mounted** RouterTab instance has it in effect — other instances' `leave` / `replace` confirmations won't trigger.

`close` / `refresh` / `unload` don't go through the router guard, and work correctly on every instance. See [Known Limitations](../advanced/page-leave#known-limitations) for details.

### A template ref can't get the RouterTab instance

RouterTab has **no** `defineExpose`, so `<RouterTab ref="tabs" />` gets a `null` ref. Use `useRouterTab()` to get the instance instead:

```js
import { useRouterTab } from 'vue-router-tab'

const tabs = useRouterTab()
```

RouterAlive **does keep** `defineExpose`, so a template ref still works there — see [API - RouterAlive](/en/api/router-alive).

### Nuxt isn't supported

Nuxt isn't supported for now; for the reason and the SSR-level limitations, see the [Nuxt notes](../essentials/nuxt).

### A function-based tab rule can't return a built-in rule name

When `meta.routerTab.key` is a function, its return value is **run through the rule table again**:

```js
// ❌ The return value is treated as the built-in rule name 'path', not what you intended
key: () => 'path'

// ✅ Use a string that doesn't collide with a built-in rule name
key: () => 'my-path'
```

The only built-in rule names are `path` and `fullpath` (case-insensitive). See [Function Rules](../essentials/rule#function-rules) for details.

### Overriding a CSS variable has no effect

Theme variables are defined on the `.router-tab` component's own selector. Writing them on `:root` or another ancestor element **won't take effect** — a declaration on the element itself takes priority over an inherited value:

```css
/* ❌ No effect */
:root {
  --rtab-color-primary: #1890ff;
}

/* ✅ Same specificity or higher takes effect */
.router-tab {
  --rtab-color-primary: #1890ff;
}
```

See [The Correct Way to Override](../custom/theme#the-correct-way-to-override) for details.
