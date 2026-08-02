# 页签插槽

<DocLinks api="router-tab#插槽" :demo="DEMO_ROUTES.Slot" />

<script setup>
import { DEMO_ROUTES } from '../../.vitepress/demoRoutes'
</script>

RouterTab 提供**三个**插槽：

| 插槽      | 作用域              | 说明             |
| --------- | ------------------- | ---------------- |
| `default` | `{ tab, closable }` | 自定义页签项内容 |
| `start`   | 无                  | 页签栏左侧       |
| `end`     | 无                  | 页签栏右侧       |

## 自定义页签项

```vue
<template>
  <RouterTab>
    <template #default="{ tab, closable }">
      <i v-if="tab.icon" class="router-tab__item-icon" :class="tab.icon" />
      <span class="router-tab__item-title" :title="tab.tips || tab.title">
        {{ tab.title }}
      </span>
      <i v-if="closable" class="router-tab__item-close" @click.prevent.stop="closeTab(tab.id)" />
    </template>
  </RouterTab>
</template>
```

### tab 对象字段

| 字段       | 类型                                            | 说明                                             |
| ---------- | ----------------------------------------------- | ------------------------------------------------ |
| `id`       | `string`                                        | 页签唯一标识，取自路由匹配的 key                 |
| `to`       | `string`                                        | 页签对应的目标路径                               |
| `title`    | `string?`                                       | 标题                                             |
| `tips`     | `string?`                                       | 悬浮提示                                         |
| `icon`     | `string?`                                       | 图标 class                                       |
| `closable` | `boolean?`                                      | **静态**可关性（来自 `meta.routerTab.closable`） |
| `tabClass` | `string \| string[] \| Record<string, boolean>` | 自定义 class                                     |
| `href`     | `string?`                                       | 外链地址                                         |
| `target`   | `string?`                                       | 外链打开方式                                     |

### closable 不等于 tab.closable

作用域里的 `closable` 是**计算值**：

```js
closable = tab.closable !== false && !(keepLastTab && items.length < 2)
```

即静态可关性与「`keepLastTab` 且仅剩 1 个页签」的动态判定共同决定。**渲染关闭按钮请用作用域的 `closable`**，用 `tab.closable` 会导致最后一个页签仍显示关闭按钮。

## 前后插槽

```vue
<template>
  <RouterTab>
    <template #start>
      <RouterLink class="tab-slot-icon rt-icon-home" to="/" title="首页" />
    </template>

    <template #end>
      <a class="tab-slot-icon rt-icon-fullscreen" title="全屏" @click="toggle" />
    </template>
  </RouterTab>
</template>
```

两个插槽的容器 class 为 `.router-tab__slot-start` 与 `.router-tab__slot-end`。

## 在插槽中调用实例方法

::: danger 必须惰性取实例
组件 `setup` 执行时，内层的 `<RouterTab>` **还没注册实例**，顶层直接调 `useRouterTab()` 会抛错：

```
[vue-router-tab] useRouterTab() 需在挂载了 RouterTab 后调用
```

正确做法是在事件触发时才取用：

```vue
<script setup>
import { useRouterTab } from 'vue-router-tab'

// ❌ setup 期实例未注册，抛错
// const tabs = useRouterTab()

// ✅ 事件触发时取用，此时实例已注册
function closeTab(id) {
  useRouterTab().closeTab(id)
}
</script>
```

在 RouterTab 的**子页面**里调用则不受此限制 —— 页面渲染发生在实例注册之后，可以在 `setup` 顶层直接取。
:::

## 样式定制

插槽内容处于 `.router-tab` 作用域内，`scoped` 样式需用 `:deep()` 穿透：

```vue
<style lang="scss" scoped>
.router-tab {
  :deep(.router-tab__slot-start),
  :deep(.router-tab__slot-end) {
    display: flex;
    align-items: center;
  }
}
</style>
```

页签外观也可通过 CSS 变量整体调整，详见[主题定制](./theme)。

## 完整示例

<<< ../../../demo/src/frames/Slot.vue
