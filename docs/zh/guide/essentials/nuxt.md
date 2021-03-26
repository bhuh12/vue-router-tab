# Nuxt

## 引入组件

### 插件

`plugins/routerTab.js`

```javascript
import Vue from 'vue'
import RouterTab from 'vue-router-tab'
import 'vue-router-tab/dist/lib/vue-router-tab.css'

Vue.use(RouterTab)
```

### Iframe 页面

`pages/-Iframe.js`

```javascript
export { Iframe as default } from 'vue-router-tab'
```

### Nuxt 配置

`nuxt.config.js`

```javascript
export default {
  // 引入 routerTab 插件
  plugins: ['@/plugins/routerTab'],

  router: {
    extendRoutes(routes, resolve) {
      // 扩展 Iframe 路由
      routes.push({
        name: 'iframe',
        path: '/iframe/:src/:title?/:icon?',
        component: resolve(__dirname, 'pages/-Iframe.js'),
        props: true
      })
    }
  },

  build: {
    // Babel 转译依赖
    transpile: ['vue-router-tab']
  }
}
```

## 应用组件

> 配置参考: [RouterTab 配置参数](../../api/README.md#routertab-配置参数)

::: danger
RouterTab 仅支持单例模式，请勿在同一个页面中引入多个 RouterTab 组件！
:::

### 布局文件

`layouts/default.vue`

```html {5}
<template>
  <div class="app-header">头部</div>
  <div class="app-body">
    <div class="app-side">侧边栏</div>
    <router-tab />
  </div>
</template>
```

## 页签配置

### 页面文件

`pages/about.vue`

```html {7}
<template>
  <h2>About</h2>
</template>

<script>
  export default {
    meta: {
      title: 'About',
      closable: false
    }
  }
</script>
```

## 👨‍💻 示例项目

**router-tab-nuxt-sample**

[**Github**](https://github.com/bhuh12/router-tab-nuxt-sample)

[**CodeSandbox**](https://codesandbox.io/s/github/bhuh12/router-tab-nuxt-sample)

<iframe
  src="https://codesandbox.io/embed/github/bhuh12/router-tab-nuxt-sample/tree/main/?fontsize=14&hidenavigation=1&theme=dark"
  style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
  title="router-tab-nuxt-sample"
  allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
  sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
></iframe>
