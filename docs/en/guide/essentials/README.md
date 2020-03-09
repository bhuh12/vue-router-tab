
# Getting Started

## Integrating into your app

**Example:**

``` javascript {8,9,15}
// @/main.js entry file

// router-tab requires vue and vue-router
import Vue from 'vue'
import Router from 'vue-router'

// import RouterTab and styles
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

## Locate Router Outlet

> More options at [RouterTab Options](../../api/README.md#routertab-配置参数)

::: danger
**DO NOT** place plural `<router-tab/>`s in one page. RouterTab only supports singleton so far.
:::

**Example:**

``` html {6}
<!-- @/components/layout/Frame.vue layout file -->
<template>
  <div class="app-header">Header</div>
  <div class="app-body">
    <div class="app-side">Sider</div>
    <router-tab/>
  </div>
</template>
```

## Extend your router config

1. Integrate RouterTabRoutes into your router config to support [iframe Tab](iframe.md)
2. Set **title**, **icon**, **tooltip** and **cache rule** in `meta`.

> Details at [Route.meta](../../api/README.md#route-meta-路由元信息)

**Example:**

``` javascript {6,9,22,25,28,33,34,35,36,37,38}
// @/router.js
import Vue from 'vue'
import Router from 'vue-router'

// RouterTabRoutes
import { RouterTabRoutes } from 'vue-router-tab'

// layout component
import Frame from './components/layout/Frame.vue'

// lazy load
const importPage = view => () => import(/* webpackChunkName: "p-[request]" */ `./views/${view}.vue`)

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    redirect: '/page1',

    // parent component must contain <router-tab>
    component: Frame,

    // routes that serve as tab contents
    children: [
      
      // integrate RouterTabRoutes to support iframe tabs
      ...RouterTabRoutes,
      {
        path: '/page/:id',
        component: importPage('Page'),
        meta: {
          title: 'Page', // tab title
          icon: 'icon-user', // tab icon, optional
          tabClass: 'custom-tab', // custom class, optional
          tips: 'This is a tab', // tab tooltip, optional. defaults to `meta.title`
          aliveId: 'fullPath', // tab cache rule, optional
          closable: false // is tab closable, defaults to `true`
        }
      }, {
        path: '/404',
        component: importPage('404'),
        meta: {
          title: 'Page Not Found',
          icon: 'icon-page'
        }
      }
    ]
  }, {
    // others
    path: '*',
    redirect: '/404'
  }]
})
```
