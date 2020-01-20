# Solutions

Problems that we came across and solutions to them. If you have any better ideas, please feel free to propose a PR or issue.


1. `<keep-alive>` only support cache by component's `name`, so that it couldn't provide accurate control responding to route.

    Developed `<router-alive>`, a router version of `<keep-alive>`, to handle cache control via route.

2. How to force reload tab content:

   1. Destroy content instance
   2. Hide `<router-view>` by `v-if` and show it after `nextTick`

3. Components wouldn't re-render with Webpack HMR in reason of caching:
   
    Record `vnode.componentOptions.Ctor.cid` in render method. If it differs from the last recorded value, tab content instance will be destroyed and re-rendered.

4. Tab content displays in blank while rapidly switching among tabs:

    Cause: Before the transition of old pages get completed, new pages pop up and step ahead the mount method.

    Solution: After route change, force reload tab content if current `nodeType` equals 8 (which is COMMENT_NODE).

5. iframe tab gets reloaded on switching：

   1. Extract `<iframe>` to outer layer of `<router-view>`, and show/hide it via `v-show`.

   2. Create a separate iframe route component, and manage `<iframe>` dom element in lifecycle hook methods, i.e., add, show, hide and remove.

6. js bundle size gets too big：

    When building as lib, set `useBuiltIns` to `false` in `babel.config.js`, which means not including Polyfill in final bundle.
