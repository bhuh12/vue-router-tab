# 页签缓存

<DocLinks api="router-tab#props" :demo="DEMO_ROUTES.MaxAlive" />

<script setup>
import { DEMO_ROUTES } from '../../.vitepress/demoRoutes'
</script>

页签切换时保留页面状态（表单输入、滚动位置、组件内部数据），靠 `KeepAlive` 实现。缓存标识就是[页签规则](../essentials/rule)算出的 key。

## keepAlive

是否缓存页面，默认 `true`。

```vue
<template>
  <RouterTab :keep-alive="false" />
</template>
```

也可按路由精确控制：

```js
{
  path: 'report',
  component: Report,
  meta: {
    routerTab: {
      title: '报表',
      keepAlive: false  // 这个页面每次进入都重新渲染
    }
  }
}
```

优先级：路由 `meta.routerTab.keepAlive` > RouterTab 的 `keepAlive` prop。

## maxAlive

最大缓存页数，默认 `0`（不限制）。超出后按 **LRU** 驱逐最早的非当前页签：

```vue
<template>
  <RouterTab :max-alive="5" />
</template>
```

页签本身**不会**被关闭，只是缓存被清除 —— 再次切回该页签会重新渲染。

<DocLinks api="router-tab#props" :demo="DEMO_ROUTES.MaxAlive" />

::: tip 用于控制内存
页签多且页面重（大表格、图表）时限制缓存数，避免内存持续增长。

设为 `0` 表示不限制，页签数就是缓存数。
:::

## reuse

同 key 的路由是否复用**同一个组件实例**，默认 `false`。

```vue
<template>
  <RouterTab :reuse="true" />
</template>
```

```js
meta: {
  routerTab: {
    reuse: true
  }
}
```

区别在于：

| 配置                   | 行为                                                      |
| ---------------------- | --------------------------------------------------------- |
| `reuse: false`（默认） | 同 key 的不同地址各自渲染，切换时组件重新挂载             |
| `reuse: true`          | 同 key 共用一个实例，切换时只更新路由参数，组件不重新挂载 |

`reuse: true` 时页面需自行响应路由参数变化：

```vue
<script setup>
import { watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

// 复用实例时组件不重新挂载，需监听参数变化重新取数
watch(() => route.params.id, fetchData, { immediate: true })
</script>
```

<DocLinks api="router-tab#props" :demo="DEMO_ROUTES.Reuse" />

## 手动控制缓存

```js
import { useRouterTab } from 'vue-router-tab'

const tabs = useRouterTab()

// 刷新当前页签（清缓存并重新渲染）
tabs.refresh()

// 刷新指定页签
tabs.refreshTab(tabId)

// 刷新全部缓存页签
tabs.refreshAll()
```

详见[页签操作](../essentials/operate#刷新页签)。

## 缓存与页签规则的关系

三者层层作用：

1. [页签规则](../essentials/rule)（`key`）决定**哪些地址算同一个页签**
2. `keepAlive` 决定**该页签是否缓存**
3. `reuse` 决定**同一页签内不同地址是否共用组件实例**
4. `maxAlive` 决定**同时保留多少份缓存**

## 完整示例

<<< ../../../demo/src/frames/MaxAlive.vue

实现原理（`KeepAlive` include + name↔key 包裹组件）见[实现原理](../meta/internals)。
