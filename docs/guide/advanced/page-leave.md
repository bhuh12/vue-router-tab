# 离开页面提示

<DocLinks api="use-router-page#beforepageleave" :demo="DEMO_ROUTES.Default" />

<script setup>
import { DEMO_ROUTES } from '../../.vitepress/demoRoutes'
</script>

表单未保存时拦住用户，避免误关页签丢数据。

## 基本用法

```vue
<script setup>
import { ref } from 'vue'
import { useRouterPage } from 'vue-router-tab'

const dirty = ref(false)

useRouterPage({
  beforePageLeave(tab, type) {
    if (!dirty.value) return // 无改动，放行

    return '有未保存的内容，确定离开吗？' // 返回字符串则阻止
  }
})
</script>
```

## 签名

```ts
beforePageLeave(tab: Tab | undefined, type: PageLeaveType) => any
```

::: tip 参数顺序是 tab 在前
不是 `(type, tab)`。第一个参数是当前页签对象（可能为 `undefined`），第二个才是离开类型。
:::

## 五种离开类型

`PageLeaveType` 共 5 个取值：

| type      | 触发场景                               |
| --------- | -------------------------------------- |
| `close`   | 关闭页签                               |
| `refresh` | 刷新页签                               |
| `leave`   | 导航到当前 RouterTab 之外的路由        |
| `replace` | 页签地址被替换（同一页签切到不同地址） |
| `unload`  | 浏览器刷新 / 关闭标签页                |

按类型给不同提示：

```js
useRouterPage({
  beforePageLeave(tab, type) {
    const action = {
      close: '关闭',
      refresh: '刷新',
      replace: '替换',
      leave: '离开',
      unload: ''
    }[type]

    return `确认要${action}页签「${tab?.title}」吗？`
  }
})
```

## 返回值语义

返回值**直接交给 Vue Router 的 `next()`**，因此可用全部 `next()` 语义：

| 返回值                                       | 行为                           |
| -------------------------------------------- | ------------------------------ |
| `undefined` / 无返回                         | 放行                           |
| 字符串                                       | 阻止离开（字符串作为提示信息） |
| `false`                                      | 阻止离开                       |
| location（如 `'/other'` 或 `{ name: 'x' }`） | 改为跳转到该地址               |
| `throw` / reject 的 Promise                  | 等价 `next(false)`，阻止离开   |

### 返回 Promise 做异步确认

```js
useRouterPage({
  beforePageLeave(tab, type) {
    return new Promise((resolve, reject) => {
      if (confirm(`确认离开「${tab?.title}」？`)) resolve()
      else reject('用户取消')
    })
  }
})
```

`resolve()` 放行，`reject()` 阻止。这也是接入自定义弹窗组件的方式。

### unload 类型要返回字符串

浏览器关闭 / 刷新走原生 `beforeunload`，只能返回字符串触发系统确认框，异步确认无效：

```js
beforePageLeave(tab, type) {
  if (type === 'unload') return '内容未保存，确定离开吗？'

  // 其余类型可用异步确认
  return confirmDialog(tab)
}
```

::: tip 浏览器会忽略自定义文案
现代浏览器出于安全考虑，`beforeunload` 只显示自己的标准文案，你返回的字符串内容不会展示 —— 但**返回值是否为空**决定了确认框是否弹出。
:::

## 跳过确认

命令式操作可强制跳过：

```js
tabs.close({ force: true }) // 默认就是 true，不确认
tabs.close({ force: false }) // 触发确认

tabs.refresh() // force 默认 true，直接刷新
tabs.refreshTab(id) // force 默认 false，触发确认
```

各方法的 `force` 默认值见[页签操作](../essentials/operate)。

## 已知限制

::: warning 守卫为 router 级，只绑定首个实例
`leave` 与 `replace` 两种类型经由路由守卫触发，而守卫注册在 router 上，多实例场景下**只有首个挂载的 RouterTab 实例**生效。

`close` / `refresh` / `unload` 不经过路由守卫，不受此限制。

多实例详见[多实例](./multi-instance)。
:::

## 完整示例

五种类型齐全的示例：

<<< ../../../demo/src/views/PageLeave.vue
