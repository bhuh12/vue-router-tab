# 页签恢复

<DocLinks api="router-tab#props" :demo="DEMO_ROUTES.Restore" />

<script setup>
import { DEMO_ROUTES } from '../../.vitepress/demoRoutes'
</script>

浏览器刷新后还原刷新前的页签列表。数据存在 **sessionStorage**，因此关闭标签页即失效，重开是干净状态。

## 开启

```vue
<template>
  <RouterTab restore />
</template>
```

## 自定义存储 key

`restore` 类型 `boolean | string`：传字符串时作为 key 后缀，用于隔离多个实例或多个用户的数据。

```vue
<template>
  <RouterTab :restore="userId" />
</template>
```

存储 key 的组成：

```
RouterTab:restore:{basePath}             // restore: true
RouterTab:restore:{basePath}:{字符串}     // restore: '自定义值'
```

`basePath` 是 RouterTab 所在的父路由路径，所以不同页面下的实例天然隔离；同一页面的多实例需靠字符串后缀区分。

::: tip 按用户隔离
`:restore="userId"` 可避免切换账号后看到上一个账号的页签。更彻底的做法是登出时调 `tabs.reset()`，它会清除恢复存储。
:::

## 保存时机

默认在 `beforeunload`（浏览器刷新 / 关闭）时保存一次。

开启 `restoreWatch` 则页签列表每次变化都立即保存：

```vue
<template>
  <RouterTab restore restore-watch />
</template>
```

| 配置                       | 保存时机       | 适用场景           |
| -------------------------- | -------------- | ------------------ |
| `restore`（默认）          | `beforeunload` | 常规刷新恢复       |
| `restore` + `restoreWatch` | 页签每次变化   | 担心异常崩溃丢数据 |

`restoreWatch` 会带来频繁的 `sessionStorage` 写入，页签操作密集时按需开启。

## 与初始页签的优先级

有恢复数据时**优先恢复**，不走 [`tabs`](./initial-tabs) 预设：

1. 读 `sessionStorage`，命中且为非空数组 → 用恢复数据，结束
2. 否则用 `tabs` 预设

存储数据损坏（JSON 解析失败）时静默忽略，回退到 `tabs`。

## 清除恢复数据

```js
import { useRouterTab } from 'vue-router-tab'

const tabs = useRouterTab()

// reset 会清除恢复存储 + 清缓存 + 重建初始页签 + 跳默认页
tabs.reset()
```

## 注意事项

::: warning 恢复的是页签列表，不是页面状态
还原的只有页签的地址、标题、图标等元信息。页面内部状态（表单输入、滚动位置）随刷新丢失 —— 那是 `KeepAlive` 的范畴，跨刷新不保留。
:::

::: warning SSR 环境自动关闭
实现依赖 `sessionStorage`，服务端渲染时该 API 不存在。组件内部有 `typeof sessionStorage === 'undefined'` 判断，此时功能静默关闭，不会报错。
:::

## 完整示例

<<< ../../../demo/src/frames/Restore.vue
