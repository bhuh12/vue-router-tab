# 过渡效果

<DocLinks api="router-tab#props" :demo="DEMO_ROUTES.Transition" />

<script setup>
import { DEMO_ROUTES } from '../../.vitepress/demoRoutes'
</script>

RouterTab 有**两个**独立的过渡配置：

| prop             | 作用对象           | 默认值                                        |
| ---------------- | ------------------ | --------------------------------------------- |
| `tabTransition`  | 页签项的增删动画   | `'router-tab-zoom'`                           |
| `pageTransition` | 页面内容的切换动画 | `{ name: 'router-tab-swap', mode: 'out-in' }` |

两者类型均为 `string | TransitionProps`。

::: danger RouterTab 上没有 transition
不要写 `<RouterTab transition="fade" />` —— RouterTab **没有** `transition` prop，不会生效也不会报错。

名为 `transition` 的 prop 只存在于 [RouterAlive](/api/router-alive) 上，且类型仅 `string`。
:::

## 内置过渡

库自带两个过渡效果（定义在 `src/scss/transition.scss`）：

| 名称              | 效果                     |
| ----------------- | ------------------------ |
| `router-tab-zoom` | 缩放淡入淡出，用于页签项 |
| `router-tab-swap` | 位移交换，用于页面切换   |

## 传字符串

只指定过渡名：

```vue
<template>
  <RouterTab tab-transition="my-tab-fade" page-transition="my-page-fade" />
</template>
```

对应写 CSS：

```css
.my-page-fade-enter-active,
.my-page-fade-leave-active {
  transition: opacity 0.3s;
}

.my-page-fade-enter-from,
.my-page-fade-leave-to {
  opacity: 0;
}
```

## 传对象

传对象时即 Vue `<Transition>` 组件的 props，可用 `name` / `mode` / `appear` / `duration` 等全部字段：

```vue
<template>
  <RouterTab :page-transition="pageTransition" />
</template>

<script setup>
const pageTransition = {
  name: 'my-page-fade',
  mode: 'out-in',
  appear: true
}
</script>
```

::: tip mode 的作用
`mode: 'out-in'` 让旧页面先离场再进场，避免两个页面同时可见导致的布局跳动。这也是 `pageTransition` 默认值带 `mode` 的原因。

`tabTransition` 默认值不带 `mode` —— 页签项是列表动画（`<TransitionGroup>`），增删需要同时进行。
:::

## 禁用过渡

传空字符串：

```vue
<template>
  <RouterTab tab-transition="" page-transition="" />
</template>
```

## 完整示例

<<< ../../../demo/src/frames/Transition.vue

参考 [Vue 过渡文档](https://cn.vuejs.org/guide/built-ins/transition.html) 了解过渡类名与钩子的完整用法。
