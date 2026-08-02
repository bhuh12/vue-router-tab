# 入门

<DocLinks api="router-tab#props" :demo="DEMO_ROUTES.Default" />

<script setup>
import { DEMO_ROUTES } from '../../.vitepress/demoRoutes'
</script>

页签组件的运行只需三步：布局中放置组件、注入内置路由、通过 `meta.routerTab` 配置页签信息。

## 应用组件

把 `<RouterTab />` 放在布局组件里，它会接管子路由的渲染与缓存。

```vue{6}
<template>
  <div class="app-header">头部</div>
  <div class="app-body">
    <div class="app-side">侧边栏</div>
    <!-- 子路由页面由 RouterTab 渲染 -->
    <RouterTab />
  </div>
</template>
```

::: tip 支持多实例
可通过 `tabId` 注册多个独立实例，详见[多实例](../advanced/multi-instance)。
:::

## 路由配置

### 注入内置路由

`RouterTabRoutes` 是 iframe 页签所需的内置路由，**必须手动注入**到 `<RouterTab />` 所在层级的 `children`：

```js{4,17}
import { createRouter, createWebHistory } from 'vue-router'

// RouterTab 内置路由（iframe 页签）
import { RouterTabRoutes } from 'vue-router-tab'

import Frame from './components/layout/Frame.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      // 父路由组件内必须包含 <RouterTab>
      component: Frame,
      children: [
        // 注入内置路由以支持 iframe 页签
        ...RouterTabRoutes,
        {
          path: '',
          component: () => import('./views/Home.vue'),
          meta: { routerTab: { title: '首页' } }
        }
      ]
    }
  ]
})
```

::: warning 父路由需有可访问的默认路由
两种方式任选其一：配置 `redirect` 重定向到子路由，或让默认子路由 `path` 为空字符串（与父路由路径一致，如上例）。
:::

### 配置页签信息

页签的标题、图标、缓存规则等，全部通过路由的 `meta.routerTab` 配置：

```js
{
  path: 'page/:id',
  component: () => import('./views/Page.vue'),
  meta: {
    routerTab: {
      title: '页面',            // 页签标题
      icon: 'rt-icon-doc',      // 页签图标 class，可选
      tips: '这是一个页面',      // 悬浮提示，可选，默认同 title
      tabClass: 'custom-tab',   // 页签自定义 class，可选
      key: 'path',              // 页签规则，可选
      closable: false,          // 是否允许关闭，默认 true
      keepAlive: true,          // 是否缓存，默认 true
      reuse: false              // 是否复用组件，默认 false
    }
  }
}
```

`title` / `tips` / `icon` / `closable` / `tabClass` / `key` 这 6 项支持传函数，入参为当前路由，可实现动态页签信息：

```js
meta: {
  routerTab: {
    title: route => `页面${route.params.id}`,
    key: 'path'
  }
}
```

完整字段说明见 [API - 路由元信息](/api/route-meta)。

## 完整示例

demo 中最小可运行的 frame：

<<< ../../../demo/src/frames/Default.vue

配套的路由扩展（追加子路由 404 与 iframe 内置路由）：

<<< ../../../demo/src/router/routeExtend.ts

## 下一步

- [页签操作](./operate)：打开、关闭、刷新页签
- [页签规则](./rule)：控制路由以何种粒度生成页签
- [页签缓存](../advanced/cache)：缓存开关、最大缓存数、组件复用
