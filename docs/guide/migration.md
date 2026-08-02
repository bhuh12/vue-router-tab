# 从 v1 迁移

本页汇总 v2 相对 v1 的破坏性变更。各功能页遇到此类变更时会链接到这里的对应小节。

## 破坏性变更总览

| 变更项                                                      | v1                                          | v2                                      | 影响面                                                |
| ----------------------------------------------------------- | ------------------------------------------- | --------------------------------------- | ----------------------------------------------------- |
| [meta 配置](#meta-配置聚合到-meta-routertab)                | 扁平写在 `meta` 下                          | 聚合到 `meta.routerTab`                 | 所有配置了页签信息的路由                              |
| [命令式 API](#tabs-原型注入改为-useroutertab)               | `Vue.prototype.$tabs` 原型注入              | `useRouterTab()` 组合式函数             | 所有用 `this.$tabs` 的地方                            |
| [isSameTab](#issametab-取代魔术串-sametab)                  | `refresh: 'sameTab'` 魔术串                 | `isSameTab: true`（位置参写法仍兼容）   | `open()` 的对象式调用                                 |
| [契约去 Ref 化](#契约字段去-ref-化)                         | 部分字段是 `ref`，需 `.value`               | `reactive()`，裸值直接取                | 所有读取 `$tabs` 字段的地方                           |
| [组件选项](#组件选项改为-userouterpage)                     | `routeTab` / `beforePageLeave` 写在组件选项 | 收进 `useRouterPage()`                  | 用了这两项配置的页面                                  |
| [过渡 prop](#过渡-prop-拆为-tabtransition-pagetransition)   | 单个 `transition`                           | 拆为 `tabTransition` / `pageTransition` | 自定义了过渡效果的项目                                |
| [iframe 路由](#iframe-路由需手动注入)                       | 自动注入                                    | 需手动注入 `RouterTabRoutes`            | 用了 iframe 页签的项目                                |
| [插槽 scope](#插槽-scope-变更)                              | 扁平 10 字段                                | 收敛为 `{ tab, closable }`              | 自定义了默认插槽的项目                                |
| [右键菜单 handler](#右键菜单-handler-入参扁平化)            | `$menu` 对象                                | 扁平的 `ContextmenuContext`             | 自定义了菜单项的项目                                  |
| [`$lang` 原型注入](#vue-prototype-lang-改为-provide-inject) | `Vue.prototype.$lang`                       | provide/inject 自行实现                 | 用了组件语言切换器共享的项目                          |
| [page-loaded 事件](#page-loaded-事件改为-restorescroll)     | `$emit('page-loaded')`                      | `restoreScroll()`                       | 手动触发滚动还原的页面                                |
| Nuxt 支持                                                   | 通过 `$nuxt` 特判适配                       | 已移除，暂不支持                        | 使用 Nuxt 的项目，详见 [Nuxt](/guide/essentials/nuxt) |
| 包管理器                                                    | 推荐 yarn                                   | 推荐 pnpm                               | 安装 / 卸载命令                                       |

## meta 配置聚合到 meta.routerTab

v1 的页签配置直接写在 `meta` 下（如 `meta.title`、`meta.key`、`meta.keepAlive`），v2 全部聚合到 `meta.routerTab` 命名空间下：

```js
// v1
meta: {
  title: '页面',
  key: 'path',
  keepAlive: true
}

// v2
meta: {
  routerTab: {
    title: '页面',
    key: 'path',
    keepAlive: true
  }
}
```

涉及 `title`、`key`、`keepAlive` 等全部页签相关字段，详见 [API - 路由元信息](/api/route-meta)。

## $tabs 原型注入改为 useRouterTab()

v1 通过 `Vue.prototype.$tabs` 全局注入实例，组件内用 `this.$tabs.xxx()` 调用；v2 移除了原型注入，改为组合式函数 `useRouterTab()`：

```js
// v1
this.$tabs.open('/page/2')

// v2
import { useRouterTab } from 'vue-router-tab'

const tabs = useRouterTab()
tabs.open('/page/2')
```

`this.$tabs.xxx()` 全部改为 `useRouterTab()` 返回值上的同名方法。注意 RouterTab **没有** `defineExpose`，模板 ref 拿不到实例，只能通过 `useRouterTab()` 取用。

### isSameTab 取代魔术串 'sameTab'

`open()` 的对象式参数里，v1 用魔术字符串 `refresh: 'sameTab'` 表示「仅命中同一页签时才全新打开」，v2 提供语义化的 `isSameTab` 字段：

```js
// v1
this.$tabs.open({ to: '/page/2', refresh: 'sameTab' })

// v2（推荐）
tabs.open({ to: '/page/2', isSameTab: true })

// v2（位置参写法仍兼容 v1 的 'sameTab'）
tabs.open('/page/2', false, 'sameTab')
```

`isSameTab: true` 内部会转换为等价的 `refresh: 'sameTab'` 逻辑，两种写法效果一致，新代码建议用 `isSameTab`。

## 契约字段去 Ref 化

v1 的 `$tabs` 上部分字段是 `ref`，模板外访问需要 `.value`；v2 的 `useRouterTab()` 返回值是 `reactive()` 对象，所有字段**直接取用，不需要 `.value`**：

```js
// v1（假设字段是 ref）
this.$tabs.activeTabId.value

// v2：裸值，不加 .value
const tabs = useRouterTab()
tabs.activeTabId
```

::: tip items 与 contextData 仍可写
`items`（全部页签）与 `contextData`（右键菜单定位数据）是 reactive 代理，读取是裸值，但**仍然可写**——直接赋值会触发响应式更新，不是只读快照。
:::

这条变更影响所有通过 `useRouterTab()` 取值的地方，详见[页签操作](/guide/essentials/operate#获取实例)。

## 组件选项改为 useRouterPage()

v1 在组件选项里直接声明 `routeTab`（动态页签信息）与 `beforePageLeave`（离开确认）两个钩子，v2 统一收进组合式函数 `useRouterPage()`：

```js
// v1
export default {
  routeTab: {
    title: '动态标题'
  },
  beforePageLeave(tab, type) {
    // ...
  }
}
```

```vue
<!-- v2 -->
<script setup>
import { useRouterPage } from 'vue-router-tab'

useRouterPage({
  routeTab: {
    title: '动态标题'
  },
  beforePageLeave(tab, type) {
    // ...
  }
})
</script>
```

`routeTab`（对象或计算属性）与 `beforePageLeave` 都改为 `useRouterPage()` 的入参，详见[动态页签信息](/guide/advanced/dynamic-tab-info)与[离开页面提示](/guide/advanced/page-leave)。

## 过渡 prop 拆为 tabTransition / pageTransition

v1 用单个 `transition` prop 同时控制页签项与页面内容的过渡效果，v2 拆分为两个独立的 prop：

```js
// v1
{
  transition: 'my-fade'
}
```

```js
// v2
{
  tabTransition: 'my-tab-fade',   // 页签项的增删动画
  pageTransition: 'my-page-fade'  // 页面内容的切换动画
}
```

::: danger RouterTab 上已没有 transition
不要在 RouterTab 上写 `transition` prop——它不存在，不会报错但也不会生效。名为 `transition` 的 prop 现在只属于 [RouterAlive](/api/router-alive)，且类型仅为 `string`（不接受对象）。
:::

两者默认值也不同：`tabTransition` 默认 `'router-tab-zoom'`，`pageTransition` 默认 `{ name: 'router-tab-swap', mode: 'out-in' }`。详见[过渡效果](/guide/custom/transition)。

## iframe 路由需手动注入

v1 会自动注入 iframe 页签所需的内置路由，v2 改为需要开发者手动注入 `RouterTabRoutes` 到 `<RouterTab />` 所在层级的 `children`：

```js
import { RouterTabRoutes } from 'vue-router-tab'

{
  path: '/',
  component: Frame,
  children: [
    ...RouterTabRoutes, // v2 需手动注入
    // 其余业务路由
  ]
}
```

不注入则 `openIframe()` 导航失败。详见 [iframe 页签](/guide/essentials/iframe)。

## 插槽 scope 变更

v1 默认插槽的作用域是扁平的 `{ base, data, id, title, tips, icon, tabClass, closable, index, close }`，v2 收敛为 `{ tab, closable }`：

- 页签信息统一从 `tab` 对象取（`tab.id` / `tab.title` / `tab.tips` / `tab.icon` / `tab.tabClass`）
- 不再提供 `index` 与 `close` —— 关闭动作改用 `useRouterTab().closeTab(tab.id)`

```vue
<!-- v1 -->
<template #default="{ id, title, closable, close }">
  <span>{{ title }}</span>
  <i v-if="closable" @click="close" />
</template>

<!-- v2 -->
<template #default="{ tab, closable }">
  <span>{{ tab.title }}</span>
  <i v-if="closable" @click="useRouterTab().closeTab(tab.id)" />
</template>
```

详见[页签插槽](/guide/custom/slot)。

## 右键菜单 handler 入参扁平化

v1 的 handler 入参是 `$menu` 对象，v2 改为扁平的 `ContextmenuContext`（包含 `$tabs`、`data`、`target`、`lefts`、`rights`、`others`、`closeMulti` 等字段）。详见[右键菜单](/guide/custom/contextmenu#handler-上下文)。

## Vue.prototype.$lang 改为 provide/inject

v1 通过 `Vue.prototype.$lang` 全局注入语言切换器，v2 移除了这个原型注入，改为用 provide/inject 或状态管理自行实现语言切换共享逻辑。demo 中的做法可参考[国际化](/guide/custom/i18n)一节的示例。

## page-loaded 事件改为 restoreScroll()

v1 通过 `this.$emit('page-loaded')` 通知组件还原滚动位置，v2 改为调用 `useRouterPage()` 返回的 `restoreScroll()`：

```js
// v1
this.$emit('page-loaded')

// v2
const { restoreScroll } = useRouterPage()

onMounted(async () => {
  list.value = await fetchList()
  await restoreScroll()
})
```

详见[滚动条](/guide/custom/scroll)。

## v1 能力对照表

| v1                                                                                       | v2                                                                                  |
| ---------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `this.$tabs.open(path, isReplace, refresh)`                                              | `tabs.open(path, isReplace, refresh)`（`useRouterTab()` 取 `tabs`，位置参写法兼容） |
| `this.$tabs.close(arg, to)`                                                              | `tabs.close(arg, to)`                                                               |
| `this.$tabs.refresh(path, match, force)`                                                 | `tabs.refresh(path, match, force)`                                                  |
| `this.$tabs.reset(to)`                                                                   | `tabs.reset(to)`                                                                    |
| `this.$tabs.openIframe(src, title, icon)`                                                | `tabs.openIframe(src, title, icon)`                                                 |
| `this.$tabs.closeIframe(src)` / `refreshIframe(src)`                                     | `tabs.closeIframe(src)` / `tabs.refreshIframe(src)`（v2 两者都**必须**传 `src`）    |
| （无对应方法）                                                                           | `tabs.reload()`、`tabs.adjust()`（v2 新增）                                         |
| `Vue.prototype.$lang`                                                                    | 移除，改用 provide/inject 或状态管理自行实现                                        |
| `this.$emit('page-loaded')`                                                              | `useRouterPage()` 返回的 `restoreScroll()`                                          |
| 组件选项 `routeTab`                                                                      | `useRouterPage({ routeTab })`                                                       |
| 组件选项 `beforePageLeave`                                                               | `useRouterPage({ beforePageLeave })`，签名变为 `(tab, type)`                        |
| 组件选项 `pageScroller`（页面级）                                                        | `useRouterPage({ pageScroller })`                                                   |
| 模板 `ref="tabs"` 取 RouterTab 实例                                                      | 不可用（RouterTab 无 `defineExpose`），改用 `useRouterTab()`                        |
| 模板 `ref` 取 RouterAlive 实例                                                           | 仍可用，RouterAlive **保留了** `defineExpose`                                       |
| 插槽默认作用域 `{ base, data, id, title, tips, icon, tabClass, closable, index, close }` | `{ tab, closable }`                                                                 |
| 右键菜单 handler 入参 `$menu`                                                            | 扁平的 `ContextmenuContext`                                                         |
| `transition` prop                                                                        | 拆为 `tabTransition` / `pageTransition`                                             |
| `meta.title` / `meta.key` / `meta.keepAlive` 等扁平字段                                  | 聚合到 `meta.routerTab`                                                             |
| `refresh: 'sameTab'`                                                                     | `isSameTab: true`（位置参写法仍兼容）                                               |
| yarn 安装/卸载                                                                           | pnpm                                                                                |
| 自动注入 iframe 路由                                                                     | 需手动注入 `RouterTabRoutes`                                                        |
| Nuxt 2 支持（`$nuxt` 特判）                                                              | 已移除，详见 [Nuxt](/guide/essentials/nuxt)                                         |

## 改造 Checklist

按顺序逐条排查，基本能覆盖全部破坏性变更：

- [ ] 包管理器命令从 `yarn` 改为 `pnpm`（`pnpm add` / `pnpm remove`）
- [ ] 样式引入路径确认为 `vue-router-tab/dist/index.css`（无 `./style` 别名）
- [ ] 路由 `meta` 下的页签字段（`title` / `key` / `keepAlive` 等）全部移入 `meta.routerTab`
- [ ] 全局搜索 `this.$tabs`，改为在对应组件里用 `useRouterTab()` 取实例
- [ ] 若用了 `refresh: 'sameTab'`，改为 `isSameTab: true`（不改也兼容，可选）
- [ ] 全局搜索 `routeTab` / `beforePageLeave` 组件选项，迁移进 `useRouterPage()`
- [ ] 若 `beforePageLeave` 用了 `(type, tab)` 参数顺序的旧记忆，核对为 `(tab, type)`
- [ ] 全局搜索 `transition` prop（RouterTab 上的），拆分为 `tabTransition` 与 `pageTransition`
- [ ] 路由表中为每个 `<RouterTab>` 所在层级手动注入 `RouterTabRoutes`（否则 iframe 页签失效）
- [ ] 若自定义了默认插槽，作用域从扁平字段改为 `{ tab, closable }`，`close` 方法改用 `useRouterTab().closeTab(tab.id)`
- [ ] 若自定义了右键菜单项，`handler` 入参从 `$menu` 改为 `ContextmenuContext`（`$tabs` / `data` / `target` / `lefts` / `rights` / `others` / `closeMulti`）
- [ ] 若用了 `Vue.prototype.$lang`，改用 provide/inject 或状态管理自行实现
- [ ] 若手动触发过滚动还原（`$emit('page-loaded')`），改为调用 `useRouterPage()` 返回的 `restoreScroll()`
- [ ] 若在模板里用 `ref` 取 RouterTab 实例，改为 `useRouterTab()`（RouterAlive 的 `ref` 仍可用）
- [ ] 若项目跑在 Nuxt 上，确认是否受影响（v2 暂不支持，详见 [Nuxt](/guide/essentials/nuxt)）
- [ ] 跑一遍 `pnpm build` 或项目自身构建，TypeScript 类型检查能揪出大部分遗漏（v1 是纯 JS，v2 类型更严格）
