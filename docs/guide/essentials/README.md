
# 入门


## 👨‍💻 示例项目

[https://github.com/bhuh12/vue-router-tab-sample](https://github.com/bhuh12/vue-router-tab-sample)

## 引入组件

**示例：**

``` javascript {8,9,15}
// @/main.js 入口

// router-tab 组件依赖 vue 和 vue-router
import Vue from 'vue'
import Router from 'vue-router'

// 引入组件和样式
import RouterTab from 'vue-router-tab'
import 'vue-router-tab/dist/lib/vue-router-tab.css'

import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
Vue.use(RouterTab)

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')

```

## 应用组件

> 配置参考: [RouterTab 配置参数](../../api/README.md#routertab-配置参数)

::: danger
RouterTab 仅支持单例模式，请勿在同一个页面中引入多个 RouterTab 组件！
:::

**示例：**

``` html {6}
<!-- @/components/layout/Frame.vue 布局框架 -->
<template>
  <div class="app-header">头部</div>
  <div class="app-body">
    <div class="app-side">侧边栏</div>
    <router-tab/>
  </div>
</template>
```

## 路由配置

1. 引入 RouterTab 内置路由以支持 [iframe 页签](iframe.md)
2. 通过路由的 `meta` 信息，来设置页签的**标题**、**图标**、**提示**和**路由页签规则**

> 配置参考: [Route.meta 路由元信息](../../api/README.md#route-meta-路由元信息)

**示例：**

``` javascript {6,9,22,25,28,33,34,35,36,37,38}
// @/router.js 路由
import Vue from 'vue'
import Router from 'vue-router'

// RouterTab 内置路由
import { RouterTabRoutes } from 'vue-router-tab'

// 引入布局框架组件
import Frame from './components/layout/Frame.vue'

// 异步加载页面组件
const importPage = view => () => import(/* webpackChunkName: "p-[request]" */ `./views/${view}.vue`)

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    redirect: '/page1',

    // 父路由组件内必须包含 <router-tab>
    component: Frame,

    // 子路由里配置需要通过页签打开的页面路由
    children: [
      
      // 引入 RouterTab 内置路由以支持 iframe 页签
      ...RouterTabRoutes,
      {
        path: '/page/:id',
        component: importPage('Page'),
        meta: {
          title: '页面', // 页签标题
          icon: 'icon-user', // 页签图标，可选
          tabClass: 'custom-tab', // 自定义页签 class，可选
          tips: '这是一个页面', // 页签提示，可选，如未设置则跟 title 一致
          aliveId: 'fullPath', // 路由打开页签规则，可选
          closable: false // 页签是否允许关闭，默认 `true`
        }
      }, {
        path: '/404',
        component: importPage('404'),
        meta: {
          title: '找不到页面',
          icon: 'icon-page'
        }
      }
    ]
  }, {
    // 其他路由 404
    path: '*',
    redirect: '/404'
  }]
})
```
