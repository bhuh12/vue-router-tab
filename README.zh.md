[English](README.md) | 简体中文

<p align="center">
  <a href="https://bhuh12.gitee.io/vue-router-tab/" target="_blank" rel="noopener noreferrer">
    <img width="100" src="public/img/logo.png" alt="vue-router-tab logo">
  </a>
</p>

<p align="center">
  <a target="_blank" href="https://www.travis-ci.org/bhuh12/vue-router-tab">
    <img src="https://www.travis-ci.org/bhuh12/vue-router-tab.svg" alt="Build">
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
  
  <a target="_blank" href="https://github.com/bhuh12/vue-router-tab/blob/main/LICENSE">
    <img src="https://img.shields.io/npm/l/vue-router-tab.svg" alt="License">
  </a>
</p>

<h2 align="center">Vue Router Tab</h2>

Vue Router Tab 是基于 Vue Router 的路由页签组件，用来实现多页签页面的管理。

## 📌 功能

✅ 响应路由变化来打开或切换页签

✅ 页签过多鼠标滚轮滚动

✅ 页签拖拽排序

✅ 支持页签打开、切换、关闭、刷新、重置等[操作](https://bhuh12.gitee.io/vue-router-tab/zh/guide/essentials/operate.html)

✅ [Iframe 页签](https://bhuh12.gitee.io/vue-router-tab/zh/guide/essentials/iframe.html)嵌入外部网站

✅ 组件个性化设置：[过渡效果](https://bhuh12.gitee.io/vue-router-tab/zh/guide/custom/transition.html)、[自定义插槽](https://bhuh12.gitee.io/vue-router-tab/zh/guide/custom/slot.html)、[页签右键菜单](https://bhuh12.gitee.io/vue-router-tab/zh/guide/custom/contextmenu.html)

✅ [多语言支持](https://bhuh12.gitee.io/vue-router-tab/zh/guide/custom/i18n.html)

✅ 页签切换后[保留滚动位置](https://bhuh12.gitee.io/vue-router-tab/zh/guide/custom/scroll.html)

✅ [缓存控制](https://bhuh12.gitee.io/vue-router-tab/zh/guide/advanced/cache.html)：页签规则、页签是否缓存、最大缓存数、是否复用组件等

✅ [动态页签信息](https://bhuh12.gitee.io/vue-router-tab/zh/guide/advanced/dynamic-tab-info.html)：标题、图标、提示

✅ [初始页签数据](https://bhuh12.gitee.io/vue-router-tab/zh/guide/advanced/initial-tabs.html)，进入页面时默认显示的页签

✅ [页签刷新还原](https://bhuh12.gitee.io/vue-router-tab/zh/guide/advanced/restore.html)，在浏览器刷新后恢复页签

✅ [页面离开前确认](https://bhuh12.gitee.io/vue-router-tab/zh/guide/advanced/page-leave.html)

✅ [Nuxt 支持](https://bhuh12.gitee.io/vue-router-tab/zh/guide/essentials/nuxt.html)

## 🔗 链接

### [🛠 安装](https://bhuh12.gitee.io/vue-router-tab/zh/guide/essentials/installation.html)

### [📝 文档](https://bhuh12.gitee.io/vue-router-tab/zh/)

- [介绍](https://bhuh12.gitee.io/vue-router-tab/zh/guide/)

- [入门](https://bhuh12.gitee.io/vue-router-tab/zh/guide/essentials/)

- [API](https://bhuh12.gitee.io/vue-router-tab/zh/api/)

### [📺 演示](https://bhuh12.gitee.io/vue-router-tab/demo/)

### [👨‍💻 示例项目](https://github.com/bhuh12/router-tab-sample)

### [📃 更新日志](https://bhuh12.gitee.io/vue-router-tab/zh/guide/changelog.html)

---

## 🏷 NPM 任务

| 任务               | 命令                       | 备注                                                  |
| ------------------ | -------------------------- | ----------------------------------------------------- |
| 插件构建           | `npm run lib:build`        |
| 插件构建并生成报告 | `npm run lib:build:report` |
| 插件发布           | `npm run lib:publish`      | 操作前更改 `package.json` 中的 `version` 为新的版本号 |
| Demo 开发          | `npm run demo:dev`         |
| Demo 构建          | `npm run demo:build`       |
| 文档开发           | `npm run docs:dev`         |
| 文档构建           | `npm run docs:build`       |
| 代码风格检查       | `npm run lint`             |
| 代码风格检查并修复 | `npm run lint:fix`         |
| 代码提交           | `npm run commit`           |

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2019-present, 碧海幽虹
