# Vue Router Tab

<p align="center">
  <a href="https://www.npmjs.com/package/vue-router-tab">
    <img src="https://img.shields.io/npm/v/vue-router-tab.svg" alt="Version">
  </a>
  <a href="https://npmcharts.com/compare/vue-router-tab?minimal=true">
    <img src="https://img.shields.io/npm/dm/vue-router-tab.svg" alt="Downloads">
  </a>
  <a href="https://www.npmjs.com/package/vue-router-tab">
    <img src="https://img.shields.io/npm/l/vue-router-tab.svg" alt="License">
  </a>
</p>

Vue Router Tab 是基于 `Vue Router` 的路由页签组件。

> 由于 Vue 内置的 `<keep-alive>` 只能根据组件的 `name` 来缓存页面，难以实现同一个组件对应多个页签的缓存，本组件定制了 `<router-alive>` 缓存组件

## 功能

- [x] 响应路由变化新增或切换页签，不同的页签缓存独立的页面
- [x] 页签关闭和刷新，右键菜单批量操作
- [x] [全局](docs/api.md#alive-key)和[针对特定路由](docs/api.md#meta.aliveKey)的页签缓存规则配置
- [x] [初始展示页签](docs/api.md#tabs)，页签可设置为不可关闭
- [x] [内置页签和页面过渡效果，支持自定义配置](docs/api.md#tab-transition)
- [x] [自定义页签项模板](docs/api.md#自定义页签项模板)
- [x] [动态页签信息 (标题/图标/提示)](docs/guide.md#动态页签信息)
- [x] [页面离开 (页签关闭/刷新/替换) 前确认](docs/guide.md#页面离开前确认)
- [x] [语言配置](docs/api.md#i18n)：zh-CN (默认) / en，自定义语言

## 文档：
[https://bhuh12.github.io/vue-router-tab/](https://bhuh12.github.io/vue-router-tab/)

## 演示：
[https://bhuh12.github.io/vue-router-tab/demo/](https://bhuh12.github.io/vue-router-tab/demo/)

## 项目命令

### 插件打包
``` bash
npm run lib:build
```

### 插件打包并生成报告
``` bash
npm run lib:build:report
```

### 插件发布
``` bash
npm run lib:publish
```

### 文档开发
``` bash
npm run docs:dev
```

### 文档打包
``` bash
npm run docs:build
```

### Demo 演示开发
``` bash
npm run demo:dev
```

### Demo 演示打包
``` bash
npm run demo:build
```

### 代码风格检查
``` bash
npm run lint
```

### 代码风格检查并修复
``` bash
npm run lint:fix
```
