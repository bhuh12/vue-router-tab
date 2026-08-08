# Internals

This page explains the core mechanics of caching, refreshing, and iframe tabs, to help understand some behaviors that may otherwise seem unusual.

## Precise KeepAlive Control

Vue's `<KeepAlive>` uses `include` matching by **component name** to decide which instances to cache. But the tab scenario needs precise control by **tab key** (not component name) — the same component may correspond to multiple tabs (different `params`), and multiple different components may each correspond to only one tab.

`RouterAlive`'s approach: **generate a named wrapper component for each tab key**, wrapping the actual page component inside it:

```ts
function wrap(cid: string, comp: Component): Component {
  let w = wrapCache.get(cid)
  if (!w) {
    w = defineComponent({ name: `__ra_${cid}`, setup: () => () => h(comp) })
    wrapCache.set(cid, w)
  }
  return w
}
```

`include` is the list of wrapper component names corresponding to the currently alive keys:

```ts
const include = computed(() => aliveKeys.value.map((k) => wrapName(cacheIdOf(k))))
```

`wrapCache` caches the wrapper component by key — the same key must get **the same** wrapper component instance every time, otherwise Vue treats it as a different component and the cache is invalidated immediately.

## Changing the key Triggers a Remount

Refreshing a tab (`refresh` / `refreshTab`) doesn't actually destroy and recreate the component — it changes the `<component :key>` value, making Vue treat it as a "new" render target, forcing a remount:

```ts
const renderKey = computed(() => `${cacheId.value}#${tickOf(key.value)}`)
```

`tickOf(key)` is a refresh counter maintained independently per key — it increments on every refresh and only affects that one tab's `key`, without affecting the rendering of other tabs.

This is also why refreshing a tab triggers the component's `setup` to re-execute (rather than going through `onActivated`): the `key` changed, so as far as Vue is concerned it's a brand new component instance.

## Iframe Is Lifted Outside KeepAlive

Iframe tabs **don't** go through `KeepAlive`. Reason: `KeepAlive` caches a component's render output, and remounting would lose the `<iframe>`'s internal browser context (form input, scroll position, SPA route state all reset) — which defeats the purpose of tab caching, which is to preserve state.

So the iframe container is lifted outside of `RouterAlive`, as its sibling node, toggled visible with `v-show`:

```html
<div class="router-tab__container">
  <RouterAlive ... />

  <transition-group class="router-tab__iframes">
    <iframe
      v-for="url in instance.iframes"
      v-show="url === instance.currentIframe"
      :key="url"
      :src="url"
    />
  </transition-group>
</div>
```

All previously opened iframe tabs **exist in the DOM simultaneously** (inactive ones are simply hidden via `v-show`); switching tabs only toggles visibility, without any component mounting/unmounting, so the iframe's internal state is naturally preserved.

When refreshing an iframe tab, since the node is reused by `url` and an unchanged `src` won't auto-reload, the `src` needs to be actively reset (assigned the same value) to trigger a native browser reload. See [Iframe Tabs](/en/guide/essentials/iframe#caching-behavior) for details.

## Path Ownership in Nested RouterAlive

When routes are nested across multiple levels (a parent route with child routes below it), each level's `RouterAlive` needs to know its own depth in order to correctly compute the cache key and determine whether it needs to be precise down to a subpath.

Depth information is passed down level by level via `provide` / `inject`:

```ts
const routeIndex = parentDepth < 0 ? viewDepth : parentDepth + 1
provide(DEPTH_KEY, routeIndex)
```

The key `alivePath` computation distinguishes whether there's a deeper nested level:

```ts
const nest = $route.matched.length > routeIndex + 1
const alivePath = nest
  ? fillPath(matched.path, $route.params) // Has child routes: only take the current level's path template + params
  : prunePath($route.fullPath) // No child routes: take the full path (minus query/hash)
```

The point of the distinction: if the current level has child routes below it, a change in a child route (e.g. switching child pages) shouldn't cause the parent level to be judged as "a different page" — the parent level only cares about "the current level's path segment + params" and doesn't care about deeper details.

## Related Limitations

These implementation details also explain a few [Known Limitations](./faqs):

- The leave guard is router-level and only binds to the first instance (the guard is registered globally, and multiple `RouterTab` instances share the same guard entry point)
- Multi-level nested route tab generation isn't supported (each level's cache determination only cares about its own path segment, and can't aggregate across levels into a single tab)
