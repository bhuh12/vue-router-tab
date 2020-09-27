# 解决方案

Vue Router Tab 实现过程中遇到的**问题及解决方案**，也欢迎提出更好的点子。

1. 相同路由需要根据 `route.params` 或 `route.query` 不同，根据规则生成不同的缓存：

   `<router-view>` 添加 `key` 属性，根据 `key` 不同生成不同的实例。

2. 通过 `<keep-alive>` 组件实例，精准控制缓存：

   1. 获取 `<keep-alive>` 实例：

      在 `<transition>` 过渡组件包裹下，通过 `this._vnode.children[0].child._vnode.componentInstance` 获取 `<keep-alive>` 组件实例。

   2. 匹配并移除缓存：

      1. 根据缓存 `$alive.cache[i].data.key` 来匹配缓存。

      2. 销毁当前缓存组件实例：`$alive.cache[key].componentInstance.$destroy()`。

      3. 从 `$alive.keys` 数组中移除当前 `key`。

3. 页面组件强制刷新：

   1. 移除当前页面组件缓存。

   2. `router-view` 组件通过 `v-if` 隐藏，在过渡效果结束或 `nextTick` 后再显示。

4. 获取当前组件所在的路由深度：

   递归查找最近的拥有 `$vnode.data.routerViewDepth` 的父组件的对应值。

5. 嵌套路由 `<router-view>` 的 `key`，如果直接从 `$route` 中获取，子路由切换时会生成不同缓存：

   应该从 `$route.matched` 中匹配当前嵌套深度所在路由的 `path`。

6. 打开开启缓存的嵌套路由的一个子路由页面 **a**，然后访问其他路由页面，再直接访问嵌套路由的另一个子路由页面 **b**，此时展示的依然是 **a**，与路由地址不匹配

   通过 `activated` 钩子，页面组件执行 `$forceUpdate` 强制更新。

   副作用：子路由页面 **a** 仍会触发 `activated` 钩子

7. iframe 页面页签切换后会重新加载：

   1. 将 `<iframe>` 节点放在页面所在 `<router-view>` 的外层，通过 `v-show` 控制显示隐藏。

   2. 建立 iframe 路由页面组件，通过生命周期钩子来添加、显示、隐藏、移除 `<iframe>` dom 节点。

8. 打包后的 js 文件太庞大：

   构建库时，配置 `babel.config.js` 中 `useBuiltIns` 为 `false`，打包时不包含 Polyfill。
