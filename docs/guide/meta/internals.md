# 实现原理

本页说明缓存、刷新与 iframe 页签的核心机制，帮助理解一些看似特殊的行为。

## KeepAlive 的精确控制

Vue 的 `<KeepAlive>` 靠 `include` 按**组件 name** 匹配来决定缓存哪些实例。但页签场景需要按**页签 key**（而非组件 name）精确控制——同一个组件可能对应多个页签（不同 `params`），也可能多个不同组件各自只对应一个页签。

`RouterAlive` 的做法是：**为每个页签 key 生成一个具名包裹组件**，把真正的页面组件包在里面：

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

`include` 就是当前存活 key 对应的包裹组件 name 列表：

```ts
const include = computed(() => aliveKeys.value.map((k) => wrapName(cacheIdOf(k))))
```

`wrapCache` 按 key 缓存包裹组件——同一 key 必须每次拿到**同一个**包裹组件实例，否则 Vue 会认为是不同组件，缓存直接失效。

## 改 key 触发重挂载

刷新页签（`refresh` / `refreshTab`）不会真的销毁再创建组件，而是通过改变 `<component :key>` 的值，让 Vue 认为这是"新的"渲染目标，从而强制重新挂载：

```ts
const renderKey = computed(() => `${cacheId.value}#${tickOf(key.value)}`)
```

`tickOf(key)` 是该 key 独立维护的刷新计数——每次刷新自增，只影响这一个页签的 `key`，不会波及其他页签的渲染。

这也是为什么刷新页签能触发组件的 `setup` 重新执行（而不是走 `onActivated`）：`key` 变了，对 Vue 而言就是一个新组件实例。

## iframe 提到 KeepAlive 外层

iframe 页签**不走** `KeepAlive`。原因：`KeepAlive` 缓存的是组件的渲染结果，重新挂载会丢失 `<iframe>` 内部的浏览器上下文（表单输入、滚动位置、SPA 路由状态全部重置）——这与页签缓存想要保留状态的目的相悖。

因此 iframe 容器被提到 `RouterAlive` 之外，与它是兄弟节点，用 `v-show` 切换显示：

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

所有打开过的 iframe 页签**同时存在于 DOM 中**（只是非当前的被 `v-show` 隐藏），切换页签只是切换可见性，不涉及组件挂载/卸载，因此 iframe 内部状态天然保留。

刷新 iframe 页签时，由于节点按 `url` 复用、`src` 不变不会自动重载，需要主动重置 `src`（同值赋值）触发浏览器原生重载，详见 [iframe 页签](/guide/essentials/iframe#缓存行为)。

## 嵌套 RouterAlive 的路径归属

多层路由嵌套时（父路由下还有子路由），每层 `RouterAlive` 需要知道自己处于哪个深度，才能正确计算缓存 key 与判断是否需要精确到子路径。

深度信息通过 `provide` / `inject` 逐层传递：

```ts
const routeIndex = parentDepth < 0 ? viewDepth : parentDepth + 1
provide(DEPTH_KEY, routeIndex)
```

关键的 `alivePath` 计算会区分是否还有更深层的嵌套：

```ts
const nest = $route.matched.length > routeIndex + 1
const alivePath = nest
  ? fillPath(matched.path, $route.params) // 有子路由：只取当前层级路径模板 + 参数
  : prunePath($route.fullPath) // 无子路由：取完整路径（去 query/hash）
```

区别的意义：如果当前层级下还有子路由，子路由的变化（比如切换子页面）不应该导致父层级重新判定为"不同页面"——父层级关心的只是"当前层级路径 + 参数"这一段，不关心更深层的细节。

## 相关限制

这些实现细节也解释了几个[已知限制](./faqs)：

- 离开守卫为 router 级、只绑定首个实例（守卫是全局注册的，多个 `RouterTab` 实例共用同一个守卫入口）
- 不支持多层嵌套生成页签（每层缓存判定只关心自己的路径段，无法跨层聚合成一个页签）
