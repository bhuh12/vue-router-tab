
# 教程

## 安装

### npm

``` bash
npm i vue-router-tab -S
```

### yarn (推荐)

``` bash
yarn add vue-router-tab
```

## 基础

### 引入组件

**示例：**

``` javascript {8,9,15}
// @/main.js

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

### 布局文件

配置参考: [RouterTab Props](api.md#routertab-props)

**示例：**

``` html {6}
<!-- @/components/layout/Admin.vue -->
<template>
  <div class="app-header">头部</div>
  <div class="app-body">
    <div class="app-side">侧边栏</div>
    <router-tab/>
  </div>
</template>
```

### 路由配置

通过路由的 `meta` 信息，来设置页签的**标题**、**图标**、**提示**和页签**缓存规则**

配置参考: [Route.meta 路由元](api.md#route-meta-路由元)

**示例：**

``` javascript {17,21,22,23,24,28,29,30,31,32}
// @/router.js
import Vue from 'vue'
import Router from 'vue-router'

// 引入布局和页面
import Admin from './components/layout/Admin.vue'

// 异步页面组件
const importPage = view => () => import(/* webpackChunkName: "p-[request]" */ `./views/${view}.vue`)

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    redirect: '/page1',
    component: Admin,
    children: [{
      path: '/page1',
      component: importPage('Page1'),
      meta: {
        title: '页面1',
        icon: 'icon-doc'
      }
    }, {
      path: '/page2/:id',
      component: importPage('Page2'),
      meta: {
        title: '页面2',
        icon: 'icon-user',
        tips: '这是页面2'
      }
    }, {
      path: '/404',
      component: importPage('404'),
      meta: {
        title: '找不到页面',
        icon: 'icon-page'
      }
    }, {
        path: '*',
        redirect: '/404'
    }]
}
```


## 进阶

**基础** 中的配置已经能满足大部分使用场景了，您还可以根据下面的内容实现更多功能。

### 初始展示页签

进入页面时默认显示的页签

<doc-links api="#tabs" demo="/initial-tabs/page/1"></doc-links>

**示例**：

  ``` html
  <!-- 默认页签 -->
  <router-tab :tabs="[
    '/page1',
    { to: '/page/2', title: '页面2' },
    { to: '/page/3', closable: false },
    { to: {
      name: 'page',
      params: { id: 4 },
      query: { t: 2 }
    }},
    { to: '/page/2?t=1', title: '页面2-1' }
  ]"></router-tab>
  <!-- '/page/2'与'/page/2?t=1'两个路由的aliveKey一致，将只保留前一个页签 -->
  ```


### 动态页签信息

`RouterTab` 会监听组件 `vm.routerTab` 来动态更新页签信息。您可以通过设置 `vm.routerTab` 来更改页签的**标题**、**图标**和**提示**。

<doc-links demo="/default/tab-dynamic"></doc-links>

**示例：**

``` javascript
// src/views/Page.js

export default {
  name: 'page',
  mounted () {
    setTimeout(() => {
      let { id } = this.$route.params

      // 只更新页签标题
      this.routerTab = `页面${id}动态标题`

      // 更新其他页签信息
      this.routerTab = {
        title: `页面${id}动态标题`,
        icon: 'el-icon-document',
        tips: `页面${id}动态提示`
      }
    }, 300)
  }
}
```

### 页签离开前确认

当页签**关闭**、**刷新**或**替换**时会触发 `beforePageLeave`，使用 `Promise` 的 `resolve` 和 `reject` 来允许和阻止页签页面的离开。

::: warning

- `beforePageLeave` 在组件的最外层，不是放在 `methods` 里

- 如果还需要在浏览器页面关闭或刷新前阻止，请使用 
[`onbeforeunload`](https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onbeforeunload)
:::

<doc-links demo="/default/page-leave"></doc-links>

**示例：**

``` javascript
// src/views/Page.js

export default {
  name: 'page',

  // 路由页面离开前确认
  beforePageLeave (resolve, reject, tab, type) {
    let action = (type === 'close' && '关闭') ||
      (type === 'refresh' && '刷新') ||
      (type === 'replace' && '替换')

    // 此处使用了 Element 的 confirm 组件
    // 需将 closeOnHashChange 配置为 false，以避免路由切换导致确认框关闭
    this.$confirm(`您确认要${action}页签“${tab.title}”吗？`, '提示', { closeOnHashChange: false })
      .then(resolve)
      .catch(reject)
  }
}
```
