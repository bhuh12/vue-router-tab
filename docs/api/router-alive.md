# RouterAlive

缓存容器组件，RouterTab 内部依赖它。也可**独立使用**作纯缓存容器（不需要页签栏时）。

```vue
<template>
  <RouterAlive ref="aliveRef" keep-alive :max="5" transition="fade" />
</template>
```

## Props

| prop         | 类型      | 默认值  | 说明                                  |
| ------------ | --------- | ------- | ------------------------------------- |
| `keepAlive`  | `boolean` | `false` | 是否缓存                              |
| `reuse`      | `boolean` | `false` | 同 key 复用实例                       |
| `max`        | `number`  | `0`     | 最大缓存数（0 不限制，超出 LRU 驱逐） |
| `transition` | `string`  | `''`    | 页面过渡效果名                        |

::: tip 默认值与 RouterTab 不同
RouterAlive 的 `keepAlive` 默认 `false`，而 RouterTab 是 `true`。

另注意 `transition` 类型仅 `string`，不接受对象 —— 与 RouterTab 的 `pageTransition` 不同。
:::

## 事件

| 事件     | 参数                                              | 说明                   |
| -------- | ------------------------------------------------- | ---------------------- |
| `ready`  | `(alive: RouterAliveExpose)`                      | 首次路由就绪，抛出实例 |
| `change` | `(type: 'create' \| 'update', match: RouteMatch)` | 页面创建 / 更新        |

## defineExpose

RouterAlive **是唯一能用模板 ref 拿到实例的组件**（RouterTab 无 `defineExpose`）。

`RouterAliveExpose`：

| 成员          | 类型                                 | 说明                                        |
| ------------- | ------------------------------------ | ------------------------------------------- |
| `evict`       | `(...keys: string[]) => void`        | 驱逐指定缓存                                |
| `refresh`     | `(k?: string) => void`               | 刷新缓存，默认当前 key                      |
| `alivePathOf` | `(k: string) => string \| undefined` | 取已缓存的 alivePath                        |
| `aliveKeys`   | `string[]`                           | 当前存活的缓存 key 列表（已解包，是裸数组） |
| `routeMatch`  | `RouteMatch`                         | 当前路由匹配信息                            |

```vue
<script setup>
import { ref } from 'vue'

const aliveRef = ref()

function clearCache() {
  aliveRef.value.evict('some-key')
}
</script>
```

缓存实现原理见[实现原理](/guide/meta/internals)。
