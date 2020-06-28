# Solutions

Problems that we came across and solutions to them. If you have any better ideas, please feel free to propose a PR or issue.

1. A route can create different caches with different `route.params` or `route.query`:

   set a `key` prop to `<router-view>`.

2. Caches control with `<keep-alive>`:

   1. Get instance of `<keep-alive>`:

      `this._vnode.children[0].child._vnode.componentInstance`

   2. Match and remove cache.

      1. Match: `$alive.cache[i].data.key === key`

      2. Destroy: `$alive.cache[key].componentInstance.$destroy()`

      3. Remove `key` from `$alive.keys`.

3. Refresh page component.

   1. Remove cache of page.

   2. Hide `<router-view>` by `v-if` and show it after transition ends or `nextTick`.

4. Get the routing depth where the current component is:

   Recursively find the corresponding value of the nearest parent component with `$vnode.data.routerViewDepth`.

5. Nested Routes share same tabs:

   Get `path` of current matched route from `$route.matched`.

6. Visit page **a** from a keep-alive nested route, and go to a page of another route, then visit page **b** from the same nested route. The displayed page is still **a**:

   Run `$forceUpdate` to force update the component on the page `activated`.

   Side effect: Subroutine page **a** will still trigger the `activated` hook

7. Iframe tab gets reloaded on switching:

   1. Extract `<iframe>` to outer layer of `<router-view>`, and show/hide it via `v-show`.

   2. Create a separate iframe route component, and manage `<iframe>` dom element in lifecycle hook methods, i.e., add, show, hide and remove.

8. Js bundle size gets too big:

   When building as lib, set `useBuiltIns` to `false` in `babel.config.js`, which means not including Polyfill in final bundle.
