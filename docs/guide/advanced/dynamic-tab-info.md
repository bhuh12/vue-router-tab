# 动态页签信息

<DocLinks api="use-router-page#routetab" :demo="DEMO_ROUTES.Default" />

<script setup>
import { DEMO_ROUTES } from '../../.vitepress/demoRoutes'
</script>

页签标题需要随页面数据变化时（如「订单 #1024」、「编辑：张三」），有两种做法。

## 路由 meta 函数式（静态派生）

信息能从路由参数直接算出时，用函数式 meta 最简单：

```js
{
  path: 'order/:id',
  component: Order,
  meta: {
    routerTab: {
      title: route => `订单 #${route.params.id}`,
      tips: route => `查看订单 ${route.params.id} 的详情`,
      key: 'path'
    }
  }
}
```

`title` / `tips` / `icon` / `closable` / `tabClass` / `key` 这 6 项都支持函数，入参为当前路由。

## useRouterPage（数据驱动）

信息来自接口数据时，在页面里用 `useRouterPage({ routeTab })`：

```vue
<script setup>
import { ref, computed } from 'vue'
import { useRouterPage } from 'vue-router-tab'

const order = ref(null)

useRouterPage({
  routeTab: computed(() => ({
    title: order.value ? `订单 ${order.value.no}` : '加载中…',
    icon: 'rt-icon-order',
    tips: order.value?.customer
  }))
})

order.value = await fetchOrder()
</script>
```

### 三种传值形态

`routeTab` 接受 ref、computed 与裸值：

```js
// 1. computed（最常用，随数据自动更新）
useRouterPage({ routeTab: computed(() => ({ title: name.value })) })

// 2. ref
const tab = ref({ title: '初始标题' })
useRouterPage({ routeTab: tab })
tab.value = { title: '新标题' }

// 3. 裸值（一次性设定，之后不变）
useRouterPage({ routeTab: { title: '固定标题' } })
```

### 只改标题可传字符串

```js
useRouterPage({ routeTab: computed(() => order.value?.no ?? '加载中…') })
```

传字符串等价于 `{ title: 字符串 }`。

### 可设置的字段

`routeTab` 的类型是 `string | Partial<Tab>`，可设置 `title` / `tips` / `icon` / `closable` / `tabClass` 等 `Tab` 字段。

## 与 i18n 配合

标题需要多语言时，返回 i18n key：

```js
useRouterPage({
  routeTab: computed(() => ({
    title: ['route.orderDetail', order.value?.no]
  }))
})
```

详见[国际化](../custom/i18n)。

## 优先级与合并方式

页面侧 `routeTab` 是**逐字段 patch** 到当前页签对象上：只覆盖你给出的字段，未给出的仍保留 `meta.routerTab` 的值。因此可以只改 `title` 而保留 meta 里配的 `icon`。

::: warning id 与 to 不可修改
patch 时会跳过 `id` 与 `to` —— 页签标识与目标地址由路由决定，改不了。
:::

::: tip ref/computed 用深度监听
传 ref 或 computed 时内部是 `watch(..., { immediate: true, deep: true })`，所以修改对象内部字段也能触发更新。传裸值则只在 `setup` 时应用一次。
:::

## 完整示例

<<< ../../../demo/src/views/TabDynamic.vue
