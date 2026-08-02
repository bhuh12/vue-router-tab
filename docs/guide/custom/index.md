# 页签行为

<script setup>
import { DEMO_ROUTES } from '../../.vitepress/demoRoutes'
</script>

## 拖拽排序

默认开启，配置 `:dragsort="false"` 禁用。

<DocLinks api="router-tab#props" :demo="DEMO_ROUTES.Dragsort" />

```vue
<template>
  <RouterTab :dragsort="false" />
</template>
```

## 新页签插入位置

`append` 控制新页签插入位置：

| 值     | 说明             |
| ------ | ---------------- |
| `last` | 页签末尾（默认） |
| `next` | 当前页签之后     |

<DocLinks api="router-tab#props" :demo="DEMO_ROUTES.Append" />

```vue
<template>
  <RouterTab append="next" />
</template>
```

## 关闭最后的页签

默认最后一个页签不允许手动关闭，尝试关闭时会提示 `msg.keepLastTab` 对应的文案。

配置 `:keep-last-tab="false"` 允许关闭，关闭后会跳转到默认路由（`defaultPage` prop，未配置则取 RouterTab 父路由地址）。

<DocLinks api="router-tab#props" :demo="DEMO_ROUTES.CloseLastTab" />

```vue
<template>
  <RouterTab :keep-last-tab="false" />
</template>
```

::: tip closable 的双重来源
页签上的关闭按钮是否显示，由两者共同决定：路由的 `meta.routerTab.closable`（默认 `true`）与「`keepLastTab` 且仅剩 1 个页签」的判定。

插槽里拿到的 `closable` 是这个**计算结果**，不等于 `tab.closable`，详见[页签插槽](./slot)。
:::

## 相关配置

- [过渡效果](./transition)：`tabTransition` / `pageTransition`
- [页签缓存](../advanced/cache)：`keepAlive` / `maxAlive` / `reuse`
- [初始页签](../advanced/initial-tabs)：`tabs`
