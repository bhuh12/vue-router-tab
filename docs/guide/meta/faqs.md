# 常见问题

### 不支持多层嵌套路由生成页签（[issues 32](https://github.com/bhuh12/vue-router-tab/issues/32)）

RouterTab 是有意设计成这样的：只有包含 RouterTab 组件的路由的**直接子路由**才参与生成页签，再深一层的路由和 Vue Router 中一样正常展现。

试想一下，一个页签页面内部还有子页签控制展示，且子页签也需要响应路由——这种嵌套需要独立的一套状态管理，会让缓存判定复杂到难以推理。原理上的原因见[实现原理](./internals#嵌套-routeralive-的路径归属)：每层 `RouterAlive` 的缓存判定只关心自己这一层的路径段，无法跨层聚合成一个页签。

所有页签路由放同一层容易杂乱，可以用展开运算符按模块拆分：

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

### 离开守卫为 router 级，只绑定首个实例

`beforePageLeave` 的 `leave` / `replace` 两种类型经由路由守卫触发，而守卫注册在 router 上。[多实例](../advanced/multi-instance)场景下，只有**首个挂载**的 RouterTab 实例生效，其余实例的 `leave` / `replace` 确认不会触发。

`close` / `refresh` / `unload` 三种类型不经过路由守卫，各实例都正常工作。详见[离开页面提示](../advanced/page-leave#已知限制)。

### 模板 ref 拿不到 RouterTab 实例

RouterTab **没有** `defineExpose`，`<RouterTab ref="tabs" />` 拿到的 ref 是 `null`。改用 `useRouterTab()` 取实例：

```js
import { useRouterTab } from 'vue-router-tab'

const tabs = useRouterTab()
```

RouterAlive **保留了** `defineExpose`，模板 ref 在那里仍可用，详见 [API - RouterAlive](/api/router-alive)。

### 不支持 Nuxt

暂不支持 Nuxt，原因与 SSR 层面的限制详见 [Nuxt 说明](../essentials/nuxt)。

### 函数式页签规则不能返回内置规则名

`meta.routerTab.key` 传函数时，返回值会**再走一遍规则表解析**：

```js
// ❌ 返回值被当成内置规则名 'path'，不是你想要的固定 key
key: () => 'path'

// ✅ 换个不与内置规则名冲突的字符串
key: () => 'my-path'
```

内置规则名只有 `path` 与 `fullpath`（大小写不敏感），详见[页签规则](../essentials/rule#函数式规则)。

### 覆盖 CSS 变量不生效

主题变量定义在 `.router-tab` 组件自身的选择器上。写在 `:root` 或其他祖先元素上**不会生效**——元素自身的声明优先于继承值：

```css
/* ❌ 无效 */
:root {
  --rtab-color-primary: #1890ff;
}

/* ✅ 同特异性或更高才生效 */
.router-tab {
  --rtab-color-primary: #1890ff;
}
```

详见[主题定制](../custom/theme#正确的覆盖方式)。
