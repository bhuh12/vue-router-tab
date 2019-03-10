
<p align="center"><a href="https://bhuh12.github.io/vue-router-tab/" target="_blank" rel="noopener noreferrer"><img width="100" src="./src/assets/img/logo.png" alt="Vue Router Tab logo"></a></p>

<p align="center">
  <a target="_blank" href="https://www.travis-ci.org/bhuh12/vue-router-tab">
    <img src="https://www.travis-ci.org/bhuh12/vue-router-tab.svg?branch=dev" alt="Build">
  </a>
  <a target="_blank" href="https://www.npmjs.com/package/vue-router-tab">
    <img src="https://img.shields.io/npm/v/vue-router-tab.svg" alt="Version">
  </a>
  <a target="_blank" href="https://npmcharts.com/compare/vue-router-tab?minimal=true">
    <img src="https://img.shields.io/npm/dm/vue-router-tab.svg" alt="Downloads">
  </a>
  <a target="_blank" href="https://www.npmjs.com/package/vue-router-tab">
    <img src="https://img.shields.io/npm/l/vue-router-tab.svg" alt="License">
  </a>
</p>

<h2 align="center">Vue Router Tab</h2>

Vue Router Tab 是基于 `Vue Router` 的路由页签组件。

## 主流多页签方案的缺陷

目前主流的 `Vue.js` 多页签方案（[参考文档](https://panjiachen.github.io/vue-element-admin-site/zh/guide/essentials/tags-view.html#%E5%BF%AB%E6%8D%B7%E5%AF%BC%E8%88%AA-%E6%A0%87%E7%AD%BE%E6%A0%8F%E5%AF%BC%E8%88%AA)），是基于 `<keep-alive>` 和 `<router-view>` 组件实现的，由于通过组件的 `name` 来控制缓存，该方案存在以下缺陷：

1. 配置麻烦：需要同时配置 route 和 页面组件的 `name` 并保持一致，还要确保 `name` 不重复

2. 同一个页面组件不能在不同的路由页签独立缓存，不利于组件的复用

3. 页面缓存难以清理，需要通过各种钩子来更新页面数据

4. 无法针对路由定制独立的页签规则


## Vue Router Tab 方案

针对主流方案的各种问题，`Vue Router Tab` 定制开发了 `<router-alive>` 缓存组件来控制路由页面缓存。

## 功能

- [x] 响应路由变化来新增或切换页签
- [x] 页签关闭和刷新，右键菜单操作
- [x] [全局](docs/api.md#alive-key)和[针对特定路由](docs/api.md#meta.aliveKey)的页签缓存规则配置
- [x] [初始页签数据](docs/api.md#tabs)，进入页面时默认显示的页签
- [x] 内置页签和页面[过渡效果](docs/api.md#tab-transition)，支持自定义配置
- [x] 自定义[页签项模板](docs/api.md#自定义页签项模板)
- [x] [动态更新页签](docs/guide.md#动态更新页签) (标题/图标/提示)
- [x] [页签离开 (页签关闭/刷新/替换) 前确认](docs/guide.md#页签离开前确认)
- [x] [语言配置](docs/api.md#i18n)：zh-CN (默认) / en，自定义语言

## 文档：
[https://bhuh12.github.io/vue-router-tab/](https://bhuh12.github.io/vue-router-tab/)

## 演示：
[https://bhuh12.github.io/vue-router-tab/demo/](https://bhuh12.github.io/vue-router-tab/demo/)

## 项目命令

**插件打包**
``` bash
npm run lib:build
```

**插件打包并生成报告**
``` bash
npm run lib:build:report
```

**插件发布**
``` bash
npm run lib:publish
```

**文档开发**
``` bash
npm run docs:dev
```

**文档打包**
``` bash
npm run docs:build
```

**Demo 演示开发**
``` bash
npm run demo:dev
```

**Demo 演示打包**
``` bash
npm run demo:build
```

**代码风格检查**
``` bash
npm run lint
```

**代码风格检查并修复**
``` bash
npm run lint:fix
```
