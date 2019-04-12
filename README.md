<p align="center">
  <a href="https://bhuh12.github.io/vue-router-tab/" target="_blank" rel="noopener noreferrer">
    <img width="100" src="public/img/logo.png" alt="vue-router-tab logo">
  </a>
</p>

<p align="center">
  <a target="_blank" href="https://www.travis-ci.org/bhuh12/vue-router-tab">
    <img src="https://www.travis-ci.org/bhuh12/vue-router-tab.svg?branch=dev" alt="Build">
  </a>

  <a href="https://github.com/vuejs/vue">
    <img src="https://img.shields.io/badge/vue-2.5.22-brightgreen.svg" alt="vue">
  </a>

  <a href="https://github.com/vuejs/vue-router">
    <img src="https://img.shields.io/badge/vue--router-3.0.1-brightgreen.svg" alt="vue-router">
  </a>

  <a target="_blank" href="https://github.com/bhuh12/vue-router-tab">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/bhuh12/vue-router-tab.svg">
  </a>
</p>

<p align="center">
  <a target="_blank" href="https://www.npmjs.com/package/vue-router-tab">
    <img src="https://img.shields.io/npm/v/vue-router-tab.svg" alt="Version">
  </a>

  <a target="_blank" href="https://npmcharts.com/compare/vue-router-tab?minimal=true">
    <img src="https://img.shields.io/npm/dm/vue-router-tab.svg" alt="Downloads">
  </a>

  <a target="_blank" href="https://www.npmjs.com/package/vue-router-tab">
    <img alt="npm bundle size" src="https://img.shields.io/bundlephobia/minzip/vue-router-tab.svg?label=gzip:JS">
  </a>

  <a target="_blank" href="https://www.npmjs.com/package/vue-router-tab">
    <img alt="gzip size: css" src="http://img.badgesize.io/https://unpkg.com/vue-router-tab/dist/lib/vue-router-tab.css?compression=gzip&label=gzip:CSS">
  </a>
  
  <a target="_blank" href="https://github.com/bhuh12/vue-router-tab/blob/dev/LICENSE">
    <img src="https://img.shields.io/npm/l/vue-router-tab.svg" alt="License">
  </a>
</p>

<h2 align="center">Vue Router Tab</h2>

Vue Router Tab 是基于 `Vue Router` 的路由页签组件。


## 安装

### npm

``` bash
npm i vue-router-tab -S
```

### yarn (推荐)

``` bash
yarn add vue-router-tab
```


## 功能

- [x] 响应路由变化来打开或切换页签
- [x] 页签关闭和刷新，右键菜单操作
- [x] 全局和针对特定路由的[页签规则](docs/guide.md#页签规则)配置
- [x] [初始页签数据](docs/guide.md#初始展示页签)，进入页面时默认显示的页签
- [x] 内置页签和页面[过渡效果](docs/guide.md#过渡效果)，支持自定义配置
- [x] [自定义页签模板](docs/guide.md#自定义页签模板)
- [x] [动态更新页签信息](docs/guide.md#动态更新页签) (标题/图标/提示)
- [x] [页签页面离开 (页签关闭/刷新/替换) 前确认](docs/guide.md#页面离开确认)
- [x] [语言配置](docs/guide.md#语言配置)：zh-CN (默认) / en，自定义语言


## 文档：
[https://bhuh12.github.io/vue-router-tab/](https://bhuh12.github.io/vue-router-tab/)

## 演示：
[https://bhuh12.github.io/vue-router-tab/demo/](https://bhuh12.github.io/vue-router-tab/demo/)

## 更新日志
[https://github.com/bhuh12/vue-router-tab/releases](https://github.com/bhuh12/vue-router-tab/releases)

---


## 主流多页签方案的缺陷

目前主流的 `Vue.js` 多页签方案（[参考文档](https://panjiachen.github.io/vue-element-admin-site/zh/guide/essentials/tags-view.html#%E5%BF%AB%E6%8D%B7%E5%AF%BC%E8%88%AA-%E6%A0%87%E7%AD%BE%E6%A0%8F%E5%AF%BC%E8%88%AA)），是基于 `<keep-alive>` 和 `<router-view>` 组件实现的，由于通过组件的 `name` 来控制缓存，该方案存在以下缺陷：

1. 配置繁杂：需要同时配置 route 和 页面组件的 `name` 并保持一致，还要确保 `name` 不重复

2. 同一个页面组件难以在不同的路由页签中独立缓存，不利于组件的复用

3. 页面缓存难以清理，需要通过各种钩子来更新页面数据

4. 无法定制页签打开的规则


另外还有一种方案，是弃用 `Vue Router`，自行实现路由和缓存控制。该方案需要使用其提供的 API 来控制页签打开和切换，对于现有的 `Vue Router` 项目引入改动量比较大。

---

## Vue Router Tab 方案

针对现存方案的各种问题，`Vue Router Tab` 定制开发了 `<router-alive>` 缓存组件来控制路由页面缓存。除了解决了其他方案的不足，`Vue Router Tab` 还拥有以下优势：

1. `Vue Router Tab` 是完全响应 `Vue Router` 路由的。使用熟悉的 `<router-link>` 或者 `router.push` 等 api 即可方便的打开和切换页签，您可以使用 `Vue Router` 的完整功能。

2. `Vue Router Tab` 只依赖 `Vue` 和 `Vue Router` 。不会引入额外的依赖。

3. 配置简单，引入组件后通过路由的 `meta` 配置页签信息即可

4. 可以方便的定制页签的打开规则，精准控制路由页签

5. 丰富的选项提供你可能需要的额外功能和自定义配置

6. 提供完善的文档说明、代码示例和Demo演示


---


## NPM 任务

| 任务 | 命令 | 备注 |
| ---- | ---- | ---- |
| **插件**：构建 | `npm run lib:build` |
| **插件**：构建并生成报告 | `npm run lib:build:report` |
| **插件**：发布 | `npm run lib:publish` | 操作前：更改 `package.json` 中的 `version` 为新的版本号 |
| **Demo**： 开发 | `npm run demo:dev` |
| **Demo**： 构建 | `npm run demo:build` |
| **文档**：开发 | `npm run docs:dev` |
| **文档**：构建 | `npm run docs:build` |
| **代码**风格：检查 | `npm run lint` |
| **代码**风格：检查并修复 | `npm run lint:fix` |
| **代码**：提交 | `npm run commit` |


## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2019-present, [碧海幽虹](https://bhuh.net)
