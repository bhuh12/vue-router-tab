# 安装

### NPM

``` bash
npm install vue-router-tab
```

**yarn** (推荐)

``` bash
yarn add vue-router-tab
```

### 构建开发版

如果你想使用最新的开发版，就得从 GitHub 上直接 clone，然后自己 build 一个 `vue-router-tab`。

``` bash
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

Vue Router Tab 使用 [**Vue CLI 3**](https://cli.vuejs.org) 来构建库，没有内置 Polyfills。

如果您的项目有兼容旧版本浏览器的需求，可以参考以下链接，自行 Polyfill: 

[https://cli.vuejs.org/zh/guide/browser-compatibility.html](https://cli.vuejs.org/zh/guide/browser-compatibility.html)
