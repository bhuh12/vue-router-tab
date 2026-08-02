# 页签操作

<DocLinks api="use-router-tab" :demo="DEMO_ROUTES.Default" />

<script setup>
import { DEMO_ROUTES } from '../../.vitepress/demoRoutes'
</script>

## 获取实例

通过 `useRouterTab()` 获取实例：

```vue
<script setup>
import { useRouterTab } from 'vue-router-tab'

const tabs = useRouterTab()

function openPage() {
  tabs.open('/page/2')
}
</script>
```

::: tip 取到的是裸值
实例内部是 `reactive()` 对象，取到的字段已自动解包，不是 `ref`：

```js
const tabs = useRouterTab()
tabs.activeTabId // 直接读，不是 tabs.activeTabId.value
```

其中 `items` 与 `contextData` 是 reactive 代理，**可读也可写**。
:::

多实例场景传 `tabId` 取指定实例，详见[多实例](../advanced/multi-instance)。未挂载 RouterTab 时调用会抛错。

## 打开 / 切换页签

### Vue Router 原生方式（推荐）

访问过的地址会命中缓存页签：

```vue
<template>
  <RouterLink to="/page/1">页面1</RouterLink>
</template>
```

```js
import { useRouter } from 'vue-router'

const router = useRouter()
router.push('/page/1')
```

### open

```ts
open(arg: RouteLocationRaw | OpenArg, isReplace = false, refresh = true)
```

默认会刷新目标页签（`refresh` 默认 `true`），即**全新打开**：

```js
tabs.open('/page/2')
```

也支持对象式参数：

```js
tabs.open({
  to: '/page/2', // 目标地址
  replace: false, // 是否替换当前历史记录，默认 false
  refresh: true, // 是否全新打开，默认 true
  isSameTab: false // 仅当命中同一页签时才全新打开
})
```

::: tip 位置参写法仍兼容
`isSameTab: true` 是对象式参数的语义化写法。位置参调用传字符串 `'sameTab'` 效果等同：

```js
tabs.open('/page/2', false, 'sameTab')
```

:::

## 关闭页签

```ts
close(arg?: CloseArg | RouteLocationRaw, to?: RouteLocationRaw)
closeTab(id = activeTabId, to?, force = false)
```

```js
// 关闭当前页签
tabs.close()

// 关闭指定路径的页签
tabs.close('/page/1')

// 关闭指定 location 的页签
tabs.close({ name: 'page', params: { id: 2 } })

// 关闭 '/page/1' 并跳转 '/page/2'
tabs.close('/page/1', '/page/2')

// 按页签 id 关闭
tabs.closeTab(tabs.activeTabId)
```

完整选项：

```js
tabs.close({
  id: '', // 页签 id（即 key 的返回值），与 path 二选一
  path: '/page/2', // 按路由地址关闭；id 与 path 都不传则关闭当前页签
  match: true, // path 方式是否要求完整匹配，默认 true
  force: true, // 是否强制关闭（跳过 beforePageLeave），默认 true
  to: '/page/1', // 关闭后跳转地址；不传则跳相邻页签，无相邻则跳默认页
  refresh: false // 是否全新打开跳转地址，默认 false
})
```

::: tip to 传 null 则不跳转
`to: null` 表示关闭后停在原地，不做任何导航。
:::

关闭最后一个页签的行为受 `keepLastTab` 控制，详见[页签行为](../custom/)。

## 刷新页签

```ts
refresh(path?: RouteLocationRaw, match = true, force = true)
refreshTab(id = activeTabId, force = false)
refreshAll(force = false)
reload()
```

```js
// 刷新当前页签
tabs.refresh()

// 刷新指定路径的页签
tabs.refresh('/page/1')

// 模糊匹配刷新：'/page/1?q=2' 这类共用页签的地址也会被命中
tabs.refresh('/page/1', false)

// 按 id 刷新
tabs.refreshTab(tabs.activeTabId)

// 刷新所有缓存页签
tabs.refreshAll()

// 强制刷新所有页签，忽略页面的 beforePageLeave
tabs.refreshAll(true)

// 仅重载当前页视图（不走页签匹配）
tabs.reload()
```

::: tip force 的语义
`force = true` 跳过页面的 `beforePageLeave` 确认。注意 `refresh()` 默认 `force = true`（直接刷新），而 `refreshTab()` / `refreshAll()` 默认 `force = false`（会触发确认）。
:::

## 重置页签

```ts
reset((to = defaultPath))
```

用户重新登录或切换角色时，需要清空所有页签并回到初始状态：

```js
// 清缓存 + 清恢复存储 + 重建初始页签 + 跳默认页
tabs.reset()

// 重置并跳转指定地址
tabs.reset('/page/2')
```

默认页取 `defaultPage` prop，未配置则取 RouterTab 父路由地址。

## 调整页签

```ts
adjust()
```

页签容器尺寸变化后（如侧边栏折叠），手动触发滚动位置与激活页签的重新计算：

```js
tabs.adjust()
```

## iframe 页签操作

```js
const src = 'https://example.com'

tabs.openIframe(src, '标题', 'rt-icon-link')

// closeIframe / refreshIframe 都必须传 src（按地址定位页签）
tabs.closeIframe(src)
tabs.refreshIframe(src)
```

详见 [iframe 页签](./iframe)。

## 右键菜单

```js
// 参数：页签 id、页签索引、鼠标事件（可选，用于定位菜单坐标）
tabs.showContextmenu(tab.id, index, event)

tabs.hideContextmenu()
```

详见[右键菜单](../custom/contextmenu)。

## 完整方法清单

`useRouterTab()` 返回 23 个字段（9 个数据 + 14 个方法），逐项说明见 [API - useRouterTab](/api/use-router-tab)。
