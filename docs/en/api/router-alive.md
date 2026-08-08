# RouterAlive

Cache container component that RouterTab depends on internally. Can also be used **standalone** as a pure cache container (when a tab bar isn't needed).

```vue
<template>
  <RouterAlive ref="aliveRef" keep-alive :max="5" transition="fade" />
</template>
```

## Props

| prop         | Type      | Default | Description                                                 |
| ------------ | --------- | ------- | ----------------------------------------------------------- |
| `keepAlive`  | `boolean` | `false` | Whether to cache                                            |
| `reuse`      | `boolean` | `false` | Reuse instance for the same key                             |
| `max`        | `number`  | `0`     | Max cache count (`0` unlimited, LRU eviction when exceeded) |
| `transition` | `string`  | `''`    | Page transition effect name                                 |

::: tip Defaults differ from RouterTab
RouterAlive's `keepAlive` defaults to `false`, while RouterTab's defaults to `true`.

Also note `transition`'s type is only `string`, it does not accept an object — unlike RouterTab's `pageTransition`.
:::

## Events

| Event    | Parameters                                        | Description                           |
| -------- | ------------------------------------------------- | ------------------------------------- |
| `ready`  | `(alive: RouterAliveExpose)`                      | First route ready, emits the instance |
| `change` | `(type: 'create' \| 'update', match: RouteMatch)` | Page created / updated                |

## defineExpose

RouterAlive is **the only component whose instance can be obtained via a template ref** (RouterTab has no `defineExpose`).

`RouterAliveExpose`:

| Member        | Type                                 | Description                                                           |
| ------------- | ------------------------------------ | --------------------------------------------------------------------- |
| `evict`       | `(...keys: string[]) => void`        | Evict specified caches                                                |
| `refresh`     | `(k?: string) => void`               | Refresh cache, defaults to the current key                            |
| `alivePathOf` | `(k: string) => string \| undefined` | Get the cached alivePath                                              |
| `aliveKeys`   | `string[]`                           | List of currently alive cache keys (already unwrapped, a plain array) |
| `routeMatch`  | `RouteMatch`                         | Current route match info                                              |

```vue
<script setup>
import { ref } from 'vue'

const aliveRef = ref()

function clearCache() {
  aliveRef.value.evict('some-key')
}
</script>
```

See [Internals](/en/guide/meta/internals) for the cache implementation details.
