# 多实例

<DocLinks api="router-tab#props" />

通过 `tabId` 注册命名实例，可在同一应用中并存多套页签。

## 注册命名实例

```vue
<template>
  <RouterTab tab-id="main" />
</template>
```

`tabId` 类型 `string`，无默认值。不传则注册为**默认实例**。

## 按 id 取实例

```js
import { useRouterTab } from 'vue-router-tab'

const mainTabs = useRouterTab('main')
const sideTabs = useRouterTab('side')

// 不传参取默认实例（即未配 tabId 的那个）
const defaultTabs = useRouterTab()
```

::: danger 取不到实例会抛错

```
[vue-router-tab] useRouterTab() 需在挂载了 RouterTab 后调用
```

两种常见原因：

1. **实例还没挂载** —— 在父组件 `setup` 顶层调用，而 `<RouterTab>` 在其模板里（此时尚未注册）。改为事件触发时惰性取用，详见[页签插槽](../custom/slot#在插槽中调用实例方法)。
2. **tabId 写错** —— 传的 id 与任何已挂载实例都不匹配。
   :::

## 生命周期

实例注册在模块级 Map 中，键为 `tabId`（默认实例的键是 `undefined`）：

- 组件 `setup` 时注册
- 组件作用域销毁时（`onScopeDispose`）自动注销

因此路由切换导致 RouterTab 卸载后，对应 id 会被释放，不会残留。

## 清空所有实例

```js
import { clearAllRouterTab } from 'vue-router-tab'

clearAllRouterTab()
```

用于测试隔离，或需要彻底重置注册表的场景。正常使用不需要手动调用 —— 卸载已自动注销。

## 各实例独立的配置

每个实例的 props 互不影响，可按需配不同行为：

```vue
<template>
  <!-- 主区：缓存、可拖拽、恢复 -->
  <RouterTab tab-id="main" restore :max-alive="8" />

  <!-- 侧栏：不缓存、不拖拽 -->
  <RouterTab tab-id="side" :keep-alive="false" :dragsort="false" />
</template>
```

[页签恢复](./restore)的存储 key 含 `basePath`，同一页面的多实例需用 `:restore="'main'"` 这类字符串后缀区分，否则会互相覆盖。

主题也可各自定制，详见[主题定制](../custom/theme#多实例不同主题)。

## 已知限制

::: warning 离开守卫只绑定首个实例
`beforePageLeave` 的 `leave` 与 `replace` 类型经由路由守卫触发，守卫注册在 router 上，**只有首个挂载的实例**生效。

`close` / `refresh` / `unload` 三种类型不经过守卫，各实例都正常。

详见[离开页面提示](./page-leave#已知限制)。
:::

::: warning 每个实例都要各自注入 iframe 路由
`RouterTabRoutes` 是相对路由，需挂到**各自** RouterTab 所在层级的 `children`。漏注入的实例无法使用 iframe 页签，详见 [iframe 页签](../essentials/iframe)。
:::

## 示例

demo 未包含多实例 frame，此处给出最小可运行结构：

```vue
<!-- Layout.vue -->
<template>
  <div class="layout">
    <aside>
      <RouterTab tab-id="side" :keep-alive="false" />
    </aside>
    <main>
      <RouterTab tab-id="main" restore="main" />
    </main>
  </div>
</template>
```

```js
// router.js —— 两个层级各注入一份
import { RouterTabRoutes } from 'vue-router-tab'

const routes = [
  {
    path: '/side',
    component: SideFrame,
    children: [...RouterTabRoutes /* , 侧栏页面 */]
  },
  {
    path: '/main',
    component: MainFrame,
    children: [...RouterTabRoutes /* , 主区页面 */]
  }
]
```

在任意子页面里按 id 操作对应实例：

```vue
<script setup>
import { useRouterTab } from 'vue-router-tab'

function openInMain(path) {
  useRouterTab('main').open(path)
}
</script>
```
