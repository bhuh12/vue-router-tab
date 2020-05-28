# Installation

::: warning
Please make sure your Node.js version >= 8.6. There might be errors with lower versions.
:::

### NPM

yarn (recommended):

```bash
yarn add vue-router-tab
```

npm：

```bash
npm i vue-router-tab -S
```

### dev build

If you like to start with the dev version, clone it from GitHub, and build your own `vue-router-tab`.

```bash
git clone https://github.com/bhuh12/vue-router-tab.git node_modules/vue-router-tab
cd node_modules/vue-router-tab
yarn
yarn lib:build
```

<!--
### 直接下载 / CDN

[https://unpkg.com/vue-router-tab/dist/lib/vue-router-tab.umd.min.js](https://unpkg.com/vue-router-tab/dist/lib/vue-router-tab.umd.min.js)

[https://unpkg.com/vue-router-tab/dist/lib/vue-router-tab.css](https://unpkg.com/vue-router-tab/dist/lib/vue-router-tab.css)

[Unpkg.com](https://unpkg.com) 提供了基于 NPM 的 CDN 链接。上面的链接会一直指向在 NPM 发布的最新版本。你也可以像  `https://unpkg.com/vue-router-tab@0.1.8/dist/lib/vue-router-tab.umd.min.js` 这样指定 版本号 或者 Tag。

在 Vue 后面加载 `vue-router-tab`，它会自动安装的：

``` html
<style src="/path/to/vue-router-tab.css"></style>

<script src="/path/to/vue.js"></script>
<script src="/path/to/vue-router.js"></script>
<script src="/path/to/vue-router-tab.js"></script>
```
-->

### Polyfill

Vue Router Tab uses [**Vue CLI**](https://cli.vuejs.org) to build as library, so there's no polyfills.

If your project has to support browsers at lower versions, you need to polyfill yourself:

[https://cli.vuejs.org/guide/browser-compatibility.html](https://cli.vuejs.org/guide/browser-compatibility.html)
