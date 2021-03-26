# 安装

::: warning
请确保你的 Node.js 版本 >= 8.6，旧的版本可能存在错误。
:::

## NPM

推荐使用 npm 的方式安装，它能更好地和 webpack 打包工具配合使用。

推荐使用 **yarn**：

```bash
yarn add vue-router-tab
```

你也可以用 **npm**：

```bash
npm i vue-router-tab -S
```

## CDN

你可以通过 [cdn.jsdelivr.net/npm/vue-router-tab](https://cdn.jsdelivr.net/npm/vue-router-tab/) 获取到最新版本的资源，在页面上引入 js 和 css 文件即可开始使用。

```html
<!-- 引入样式 -->
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/vue-router-tab@1.2.5/dist/lib/vue-router-tab.css"
/>
<!-- 引入组件 -->
<script src="https://cdn.jsdelivr.net/npm/vue-router-tab@1.2.5" />
```

RouterTab 也可以在 [unpkg](https://unpkg.com/vue-router-tab/) 上获取。

## 构建开发版

如果你想使用最新的开发版，就得从 GitHub 上直接 clone，然后自己 build 一个 `vue-router-tab`。

```bash
git clone https://github.com/bhuh12/vue-router-tab.git node_modules/vue-router-tab
cd node_modules/vue-router-tab
yarn
yarn lib:build
```

## Polyfill

Vue Router Tab 使用 [**Vue CLI**](https://cli.vuejs.org) 来构建库，没有内置 Polyfills。

如果您的项目有兼容旧版本浏览器的需求，可以参考以下配置，通过 Babel 显式转译依赖

> 参考文档: [Vue CLI - 浏览器兼容性](https://cli.vuejs.org/zh/guide/browser-compatibility.html)

`vue.config.js`

```javascript
module.exports = {
  transpileDependencies: ['vue-router-tab']
}
```
