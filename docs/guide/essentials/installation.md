# 安装

## 环境要求

| 依赖         | 版本              |
| ------------ | ----------------- |
| `vue`        | `^3.5.0`          |
| `vue-router` | `^4 \|\| ^5`      |
| Node.js      | 构建工具链需 ≥ 18 |

::: warning 纯 ESM 包
只提供 ESM 产物（`package.json` 的 `exports` 仅含 `import` 条件），不支持 `require()`。CommonJS 项目需改用动态 `import()` 或升级构建工具。
:::

## 安装

::: code-group

```bash [pnpm]
pnpm add vue-router-tab
```

```bash [npm]
npm i vue-router-tab
```

:::

## 注册插件

`app.use(RouterTab)` 会注册两个全局组件：`RouterTab` 与 `RouterAlive`。

```js{4,5,10}
import { createApp } from 'vue'

// 引入组件和样式
import RouterTab from 'vue-router-tab'
import 'vue-router-tab/dist/index.css'

import App from './App.vue'
import router from './router'

createApp(App).use(router).use(RouterTab).mount('#app')
```

::: tip 样式路径
样式必须写完整路径 `vue-router-tab/dist/index.css`。`exports` 只暴露 `.` 与 `./dist/*` 两个入口，**没有** `vue-router-tab/style` 这类别名。
:::

## 按需引入

不注册全局组件时，可以按需导入：

```vue
<script setup>
import { RouterTab } from 'vue-router-tab'
import 'vue-router-tab/dist/index.css'
</script>

<template>
  <RouterTab />
</template>
```

组件、组合式函数与类型均为具名导出：

```js
// 组件
import { RouterTab, RouterAlive } from 'vue-router-tab'

// 组合式函数
import { useRouterTab, useRouterPage } from 'vue-router-tab'

// 内置 iframe 路由（需手动注入，详见 iframe 页签）
import { RouterTabRoutes } from 'vue-router-tab'
```

完整导出清单见 [API](/api/types)。

## 下一步

- [入门](./)：布局中放置组件、配置路由与页签元信息
- [从 v1 迁移](../migration)：v1 项目的升级指南
