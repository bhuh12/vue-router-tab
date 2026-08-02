# 滚动条

<DocLinks api="router-tab#props" :demo="DEMO_ROUTES.PageScroller" />

<script setup>
import { DEMO_ROUTES } from '../../.vitepress/demoRoutes'
</script>

页签切换回来时自动还原滚动位置。位置在 `onDeactivated` 时保存、`onActivated` 时还原，随页面实例缓存（`KeepAlive` 缓存期间天然持久）。

## frame 级配置

RouterTab 的 `pageScroller` prop 指定滚动容器，默认 `'.router-tab__container'`（组件自身的内容容器）：

```vue
<template>
  <RouterTab page-scroller=".my-scroll-container" />
</template>
```

::: warning 这个选择器会被当作 document 级
frame 级 `pageScroller` 在页面侧会被自动加上 `$` 前缀，即**在整个文档内查找**（`document.querySelector`），而不是在页面根元素内查。

原因：frame 级容器通常在页面组件**外部**（是布局的一部分），页面内查不到。
:::

## 页面级配置

页面内部有独立滚动区时，在页面组件里配置：

```vue
<script setup>
import { useRouterPage } from 'vue-router-tab'

useRouterPage({
  pageScroller: '.inner-scroll'
})
</script>
```

页面级选择器**在页面根元素内查找**（`root.querySelector`）。

### 多个滚动容器

支持数组或逗号分隔的字符串：

```js
// 数组
useRouterPage({ pageScroller: ['.left-panel', '.right-panel'] })

// 逗号分隔（等价）
useRouterPage({ pageScroller: '.left-panel, .right-panel' })
```

### $ 前缀：显式指定 document 级

页面级选择器加 `$` 前缀，可强制在文档范围查找：

```js
useRouterPage({
  pageScroller: ['.inner-scroll', '$.app-main']
})
```

小结：

| 写法                 | 查找范围               |
| -------------------- | ---------------------- |
| frame 级 prop `.foo` | document（自动加 `$`） |
| 页面级 `.foo`        | 页面根元素内           |
| 页面级 `$.foo`       | document               |

页面根元素自身始终作为兜底容器被记录，无需显式配置。

## 异步内容的滚动还原

页面数据异步加载时，`onActivated` 触发时 DOM 还没渲染完，还原会失效。此时需要在数据就绪后手动调用 `restoreScroll()`：

```vue
<script setup>
import { ref, onMounted } from 'vue'
import { useRouterPage } from 'vue-router-tab'

const { restoreScroll } = useRouterPage()

const list = ref([])

onMounted(async () => {
  list.value = await fetchList()
  // 数据渲染后还原滚动位置
  await restoreScroll()
})
</script>
```

`restoreScroll()` 是异步方法，内部先 `await nextTick()` 再还原。

## 新页面从顶部开始

打开**新**页签时，frame 级容器（即带 `$` 前缀的 document 级容器）会被重置到顶部，避免沿用上一个页面的滚动位置。

页面级容器不做重置 —— 它们随页面实例创建，本身就是初始位置。

## 完整示例

frame 级配置：

<<< ../../../demo/src/frames/PageScroller.vue

异步内容 + 手动还原：

<<< ../../../demo/src/views/ScrollAsync.vue

多滚动容器：

<<< ../../../demo/src/views/ScrollMulti.vue
