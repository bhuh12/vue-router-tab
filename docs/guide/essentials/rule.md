# 页签规则

<DocLinks api="route-meta" :demo="DEMO_ROUTES.Reuse" />

<script setup>
import { DEMO_ROUTES } from '../../.vitepress/demoRoutes'
</script>

**页签规则**定义了路由**打开页签的方式**，通过路由的 `meta.routerTab.key` 配置。

## 默认规则

不配置 `key` 时，取当前层级的 `matched.path`，即**同一路由共用同一个页签**，`params` 与 `query` 变化都不新增页签。

## 内置规则

内置规则**只有两个**：`path` 与 `fullpath`。规则名匹配大小写不敏感，因此 `fullPath` 与 `fullpath` 等价。

### path

取 `route.path`。`params` 不同则独立开页签，`query` 变化不新增。

```js{6}
{
  path: '/my-page/:id',
  component: MyPage,
  meta: {
    routerTab: {
      title: '页面',
      key: 'path'
    }
  }
}
```

结果：

- `/my-page/1` 与 `/my-page/2` → `params` 不同，**独立**页签
- `/my-page/1`、`/my-page/1?a=1`、`/my-page/1?b=2` → `path` 相同，**共用**页签

<DemoLink href="/default/rule/path/a/1">在 demo 中查看 path 规则</DemoLink>

### fullpath

取 `route.fullPath`。`params` 与 `query` 任一不同都独立开页签。

```js{6}
{
  path: '/my-page/:id',
  component: MyPage,
  meta: {
    routerTab: {
      title: '页面',
      key: 'fullPath'
    }
  }
}
```

结果：

- `/my-page/1` 与 `/my-page/2` → **独立**页签
- `/my-page/1?a=1` 与 `/my-page/1?b=2` → `query` 不同，**独立**页签

<DemoLink href="/default/rule/fullPath/a/1">在 demo 中查看 fullPath 规则</DemoLink>

::: tip hash 参与 key 计算
`fullpath` 规则直接取 `route.fullPath`，hash 参与 key 计算 —— `/my-page/1#a` 与 `/my-page/1#b` 会开两个独立页签。若不希望 hash 参与区分，改用函数式 key 自行剥离。
:::

## 自定义规则

`key` 传字符串但不匹配内置规则名时，该字符串直接作为固定 key —— 所有命中该路由的地址共用一个页签：

```js
meta: {
  routerTab: {
    key: 'my-fixed-tab'
  }
}
```

## 函数式规则

`key` 传函数，入参为当前路由：

```js{6-8}
{
  path: '/my-page/:catalog/:type',
  component: MyPage,
  meta: {
    routerTab: {
      title: '定制规则',
      key: route => `/my-page/${route.params.catalog}`
    }
  }
}
```

结果：

- `/my-page/a/1` 与 `/my-page/a/2` → `params.catalog` 相同，**共用**页签
- `/my-page/a/1` 与 `/my-page/b/1` → `params.catalog` 不同，**独立**页签

<DemoLink href="/default/rule/custom/a/1">在 demo 中查看自定义规则</DemoLink>

::: danger 函数不能返回内置规则名
函数的返回值会**再走一遍规则表解析**。若返回 `'path'` 或 `'fullpath'`，会被当成内置规则名，而不是你期望的固定 key：

```js
// ❌ 返回值被当成内置规则名，实际等价于 key: 'path'
key: () => 'path'

// ✅ 需要固定 key 时换个不冲突的名字
key: () => 'my-path'
```

:::

## 与缓存的关系

页签 key 同时是缓存标识：key 相同则共用同一个组件实例与缓存。配合 `keepAlive`、`reuse`、`maxAlive` 可进一步控制缓存行为，详见[页签缓存](../advanced/cache)。

## 完整示例

<<< ../../../demo/src/frames/Reuse.vue
