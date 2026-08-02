# 右键菜单

<DocLinks api="router-tab#props" :demo="DEMO_ROUTES.Contextmenu" />

<script setup>
import { DEMO_ROUTES } from '../../.vitepress/demoRoutes'
</script>

`contextmenu` prop 控制页签右键菜单，类型 `boolean | (BuiltinMenuId | ContextmenuItemConfig)[]`，默认 `true`。

## 禁用菜单

```vue
<template>
  <RouterTab :contextmenu="false" />
</template>
```

## 内置菜单项

内置项共 **6 个**，默认顺序即下表顺序：

| id            | 说明             | 禁用条件                                   |
| ------------- | ---------------- | ------------------------------------------ |
| `refresh`     | 刷新当前选中页签 | 无                                         |
| `refreshAll`  | 刷新全部缓存页签 | 无                                         |
| `close`       | 关闭选中页签     | 页签不可关闭，或 `keepLastTab` 下仅剩 1 个 |
| `closeLefts`  | 关闭左侧页签     | 左侧无可关闭页签                           |
| `closeRights` | 关闭右侧页签     | 右侧无可关闭页签                           |
| `closeOthers` | 关闭其他页签     | 无其他可关闭页签                           |

## 自定义菜单项顺序

传数组，用 id 字符串引用内置项：

```vue
<template>
  <RouterTab :contextmenu="['refresh', 'close', 'closeOthers']" />
</template>
```

## 添加自定义项

数组元素也可以是配置对象，与内置 id 混用：

```vue
<template>
  <RouterTab :contextmenu="menu" />
</template>

<script setup>
const menu = [
  'refresh',
  'close',
  {
    id: 'copy-path',
    title: '复制路径',
    icon: 'rt-icon-copy',
    tips: '把页签地址复制到剪贴板',
    class: 'my-menu-item',
    handler: ({ target }) => {
      if (target) navigator.clipboard.writeText(target.to)
    }
  }
]
</script>
```

### 配置字段

| 字段      | 类型                          | 说明                                  |
| --------- | ----------------------------- | ------------------------------------- |
| `id`      | `string?`                     | 菜单项 id；用内置 id 时会复用内置文案 |
| `title`   | `string \| (ctx) => string`   | 标题，优先于内置文案                  |
| `icon`    | `string \| (ctx) => string`   | 图标 class                            |
| `tips`    | `string?`                     | 悬浮提示                              |
| `class`   | `string?`                     | 自定义 class                          |
| `visible` | `boolean \| (ctx) => boolean` | 是否显示，默认 `true`                 |
| `enable`  | `boolean \| (ctx) => boolean` | 是否启用，默认 `true`                 |
| `handler` | `(ctx) => void`               | 点击处理                              |

`title` / `icon` / `visible` / `enable` 都支持传函数，入参为下文的上下文对象，可实现动态文案与状态。

## handler 上下文

| 字段         | 类型                             | 说明                                     |
| ------------ | -------------------------------- | ---------------------------------------- |
| `$tabs`      | `RouterTabInstance`              | RouterTab 实例                           |
| `data`       | `ContextmenuData`                | 右键定位数据：`{ id, index, left, top }` |
| `target`     | `Tab \| undefined`               | 右键选中的页签                           |
| `lefts`      | `Tab[]`                          | 选中项左侧的可关闭页签                   |
| `rights`     | `Tab[]`                          | 选中项右侧的可关闭页签                   |
| `others`     | `Tab[]`                          | 除选中项外的可关闭页签                   |
| `closeMulti` | `(tabs: Tab[]) => Promise<void>` | 批量关闭页签                             |

利用上下文实现「关闭左侧」这类批量操作：

```js
{
  id: 'close-lefts-force',
  title: '强制关闭左侧',
  enable: ({ lefts }) => lefts.length > 0,
  handler: ({ lefts, closeMulti }) => closeMulti(lefts)
}
```

## 手动唤起菜单

```js
import { useRouterTab } from 'vue-router-tab'

const tabs = useRouterTab()

// 在指定坐标为指定页签唤起菜单
// 参数：页签 id、页签索引、鼠标事件（可选，用于定位菜单坐标）
tabs.showContextmenu(tab.id, index, event)

// 关闭菜单
tabs.hideContextmenu()
```

## 菜单文案国际化

内置项文案取自语言包的 `contextmenu.*`（6 项，与内置 id 一一对应），详见[国际化](./i18n)。

自定义项的 `title` 需要自行处理多语言，可在函数式 title 里调用 `$tabs.i18nText()`：

```js
{
  id: 'my-item',
  title: ({ $tabs }) => $tabs.i18nText('i18n:myItem')
}
```

## 完整示例

<<< ../../../demo/src/frames/Contextmenu.vue
