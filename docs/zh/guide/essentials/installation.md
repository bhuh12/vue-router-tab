# 安装

::: warning
请确保你的 Node.js 版本 >= 8.6，旧的版本可能存在错误。
:::

## NPM

推荐使用 yarn：

```bash
yarn add vue-router-tab
```

你也可以用 npm：

```bash
npm i vue-router-tab -S
```

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

如果您的项目有兼容旧版本浏览器的需求，可以参考以下链接，自行 Polyfill:

[https://cli.vuejs.org/zh/guide/browser-compatibility.html](https://cli.vuejs.org/zh/guide/browser-compatibility.html)
