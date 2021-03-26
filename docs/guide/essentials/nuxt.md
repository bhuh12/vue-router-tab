# Nuxt

## Import RouterTab

### Plugin

`plugins/routerTab.js`

```javascript
import Vue from 'vue'
import RouterTab from 'vue-router-tab'
import 'vue-router-tab/dist/lib/vue-router-tab.css'

Vue.use(RouterTab)
```

### Iframe Page

`pages/-Iframe.js`

```javascript
export { Iframe as default } from 'vue-router-tab'
```

### Nuxt Config

`nuxt.config.js`

```javascript
export default {
  // import routerTab plugin
  plugins: ['@/plugins/routerTab'],

  router: {
    extendRoutes(routes, resolve) {
      // add Iframe route
      routes.push({
        name: 'iframe',
        path: '/iframe/:src/:title?/:icon?',
        component: resolve(__dirname, 'pages/-Iframe.js'),
        props: true
      })
    }
  },

  build: {
    // Babel transpile dependencies
    transpile: ['vue-router-tab']
  }
}
```

## Use Component

> More props at [RouterTab Props](../../api/README.md#router-tab-props)

::: danger
RouterTab only supports singleton mode, **do not** introduce multiple RouterTab components in the same page!
:::

`layouts/default.vue`

```html {5}
<template>
  <div class="app-header">Header</div>
  <div class="app-body">
    <div class="app-side">Side</div>
    <router-tab />
  </div>
</template>
```

## Tab Config

### Page Meta

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

## 👨‍💻 Sample Project

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
