# 初始页签

<DocLinks api="router-tab#props" :demo="DEMO_ROUTES.InitialTabs" />

<script setup>
import { DEMO_ROUTES } from '../../.vitepress/demoRoutes'
</script>

`tabs` prop 配置进入页面时默认展示的页签，类型 `PresetTab[]`，默认 `[]`。

常见用途：把「首页」「工作台」这类常驻页面预置为初始页签。

## 基本用法

```vue
<template>
  <RouterTab :tabs="tabs" />
</template>

<script setup>
const tabs = ['/home', { to: '/workbench', title: '工作台', closable: false }]
</script>
```

## 五种写法

`PresetTab` 的类型是 `string | (Partial<Omit<Tab, 'to'>> & { to: RouteLocationRaw })` —— 要么是纯路径字符串，要么是必须带 `to` 的配置对象。

### 1. 纯路径字符串

标题、图标等自动从路由 `meta.routerTab` 取：

```js
const tabs = ['/page/1']
```

### 2. 配置对象

显式指定页签信息，可覆盖 meta 里的配置：

```js
const tabs = [{ to: '/page/1', title: '页面1', icon: 'rt-icon-doc', closable: false }]
```

### 3. location 对象

`to` 支持 Vue Router 的 location 对象：

```js
const tabs = [
  { to: { path: '/page/2', query: { t: 2 } }, title: '页面2' },
  { to: { name: 'user', params: { id: 3 } }, title: '用户3' }
]
```

### 4. 动态标题页需预设标题

页签标题来自页面数据（见[动态页签信息](./dynamic-tab-info)）时，未激活的页签还没渲染、拿不到数据，必须预设标题：

```js
const tabs = [
  { to: '/order/1024', title: '订单 #1024' } // 不预设则显示「无标题」
]
```

### 5. iframe 页签

按 iframe 路由格式拼接，`src` 需 `encodeURIComponent`：

```js
const tabs = [
  `/iframe/${encodeURIComponent('https://bhuh12.github.io/vue-router-tab/')}/文档/rt-icon-web`
]
```

详见 [iframe 页签](../essentials/iframe)。

## key 冲突时只保留先出现的

初始页签按[页签规则](../essentials/rule)算 key，key 相同的只保留**先出现**的那个：

```js
const tabs = [
  { to: '/page/2', title: '页面2' },
  // 默认规则下与上一个 key 相同（都是 /page/2），此项被丢弃
  { to: '/page/2?t=1', title: '页面2-1' }
]
```

需要两者共存则给该路由配 `key: 'fullpath'`。

## 与页签恢复的关系

配了 [`restore`](./restore) 时，恢复的页签**优先于** `tabs`：浏览器刷新后还原上次的页签列表，而不是回到初始页签。

只有无恢复数据时（首次访问、或 `sessionStorage` 已清空）才用 `tabs`。

## 完整示例

<<< ../../../demo/src/frames/InitialTabs.vue
