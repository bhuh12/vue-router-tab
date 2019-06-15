# 方案

Vue Router Tab 实现过程中遇到的**问题及解决方案**，也欢迎提出更好的点子。


1. `keep-alive` 仅支持根据组件 `name` 控制缓存，无法针对路由精确控制：

    参考 `keep-alive` 实现 `router-alive` 组件，基于 Vue Router 路由规则的缓存控制

2. 页面组件强制刷新：

   1. 销毁页面组件实例
   2. `router-view` 组件通过 `v-if` 隐藏，在 `nextTick` 后再显示

3. 由于缓存，Webpack 热加载后的页面不刷新：
   
    在路由页面组件全局混入的 `activated` 钩子里，记录 `vm.$vnode.componentOptions.Ctor.cid`。如果与上一次的值不一致，则销毁页面，组件重新渲染

4. 当快速频繁切换页签时，页面显示空白：

    根因：旧页面离开的过渡效果尚未完成，新页面内容来不及 mount 又被后面的路由替换

    方案：路由切换结束后，如果路由页面节点 `nodeType` 为 8 (comment 类型)，强制刷新页面组件

5. iframe 页面页签切换后会重新加载：

   1. 将  `<iframe>` 节点放在页面所在 `<router-view>` 的外层，通过 `v-show` 控制显示隐藏。

   2. 建立 iframe 路由页面组件，通过生命周期钩子来添加、显示、隐藏、移除 `<iframe>` dom 节点

6. 打包后的 js 文件太庞大：

    构建库时，配置 `babel.config.js` 中 `useBuiltIns` 为 `false`，打包时不包含 Polyfill
