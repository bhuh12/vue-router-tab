# Getting Started

## Import RouterTab

**Example:**

`main.js` entry file

```javascript {6,7,13}
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
  render: h => h(App)
}).$mount('#app')
```

## Use Component

> More props at [RouterTab Props](../../api/README.md#router-tab-props)

::: danger
RouterTab only supports singleton mode, **do not** introduce multiple RouterTab components in the same page!
:::

**Example:**

`components/layout/Frame.vue` layout file

```html {5}
<template>
  <div class="app-header">Header</div>
  <div class="app-body">
    <div class="app-side">Sider</div>
    <router-tab />
  </div>
</template>
```

## Router Config

1. Integrate RouterTabRoutes into your router config to support [iframe Tab](iframe.md)
2. Set **title**, **icon**, **tooltip** and **cache rule** in `meta`.

> Details at [Route.meta](../../api/README.md#route-meta)

::: warning
RouterTab need a default route, we can do this in two ways：

1. `redirect`: redirect to the default route
2. the path of default route must keep the same with parent route。
   :::

**Example:**

`router.js` router

```javascript {5,8,17,19,21,23,25,38,39,40,41,42,43}
import Vue from 'vue'
import Router from 'vue-router'

// RouterTabRoutes
import { RouterTabRoutes } from 'vue-router-tab'

// layout component
import Frame from './components/layout/Frame.vue'

// lazy load
const importPage = view => () =>
  import(/* webpackChunkName: "p-[request]" */ `./views/${view}.vue`)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      // parent component must contain <router-tab>
      component: Frame,
      // routes that serve as tab contents
      children: [
        // integrate RouterTabRoutes to support iframe tabs
        ...RouterTabRoutes,
        {
          path: '/', // the same with parent route
          name: 'Home',
          component: importPage('Home'),
          meta: {
            title: 'Home'
          }
        },
        {
          path: '/page/:id',
          component: importPage('Page'),
          meta: {
            title: 'Page', // tab title
            icon: 'icon-user', // tab icon, optional
            tabClass: 'custom-tab', // custom class, optional
            tips: 'This is a tab', // tab tooltip, optional. defaults to `meta.title`
            key: 'path', // tab cache rule, optional
            closable: false // is tab closable, defaults to `true`
          }
        },
        {
          path: '/404',
          component: importPage('404'),
          meta: {
            title: 'Page Not Found',
            icon: 'icon-page'
          }
        }
      ]
    },
    {
      // others
      path: '*',
      redirect: '/404'
    }
  ]
})
```

## 👨‍💻 Sample Project

**router-tab-sample**

[**Github**](https://github.com/bhuh12/router-tab-sample)

[**CodeSandbox**](https://codesandbox.io/s/github/bhuh12/router-tab-sample)

<iframe
  src="https://codesandbox.io/embed/github/bhuh12/router-tab-sample/tree/main/?fontsize=14&hidenavigation=1&theme=dark"
  style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
  title="router-tab-sample"
  allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
  sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
></iframe>
