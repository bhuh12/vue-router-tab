[English](README.md) | 简体中文

<p align="center">
  <a href="https://bhuh12.github.io/vue-router-tab/" target="_blank" rel="noopener noreferrer">
    <img width="100" src="public/img/logo.svg" alt="vue-router-tab logo">
  </a>
</p>

<p align="center">
  <a target="_blank" href="https://github.com/bhuh12/vue-router-tab/actions/workflows/ci.yml">
    <img src="https://img.shields.io/github/actions/workflow/status/bhuh12/vue-router-tab/ci.yml?branch=v2-vue3-refactor" alt="Build">
  </a>

  <a href="https://github.com/vuejs/vue">
    <img src="https://img.shields.io/badge/vue-3.5.x-brightgreen.svg" alt="vue">
  </a>

  <a href="https://github.com/vuejs/vue-router">
    <img src="https://img.shields.io/badge/vue--router-4.x%7C5.x-brightgreen.svg" alt="vue-router">
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

✅ 支持页签打开、切换、关闭、刷新、重置等[操作](https://bhuh12.github.io/vue-router-tab/guide/essentials/operate)

✅ [Iframe 页签](https://bhuh12.github.io/vue-router-tab/guide/essentials/iframe)嵌入外部网站

✅ 组件个性化设置：[过渡效果](https://bhuh12.github.io/vue-router-tab/guide/custom/transition)、[自定义插槽](https://bhuh12.github.io/vue-router-tab/guide/custom/slot)、[页签右键菜单](https://bhuh12.github.io/vue-router-tab/guide/custom/contextmenu)

✅ [多语言支持](https://bhuh12.github.io/vue-router-tab/guide/custom/i18n)

✅ 页签切换后[保留滚动位置](https://bhuh12.github.io/vue-router-tab/guide/custom/scroll)

✅ [缓存控制](https://bhuh12.github.io/vue-router-tab/guide/advanced/cache)：页签规则、页签是否缓存、最大缓存数、是否复用组件等

✅ [动态页签信息](https://bhuh12.github.io/vue-router-tab/guide/advanced/dynamic-tab-info)：标题、图标、提示

✅ [初始页签数据](https://bhuh12.github.io/vue-router-tab/guide/advanced/initial-tabs)，进入页面时默认显示的页签

✅ [页签刷新还原](https://bhuh12.github.io/vue-router-tab/guide/advanced/restore)，在浏览器刷新后恢复页签

✅ [页面离开前确认](https://bhuh12.github.io/vue-router-tab/guide/advanced/page-leave)

✅ [动态标题](https://bhuh12.github.io/vue-router-tab/guide/advanced/dynamic-tab-info)

✅ [多实例](https://bhuh12.github.io/vue-router-tab/guide/advanced/multi-instance)

## 🔗 链接

### [🛠 安装](https://bhuh12.github.io/vue-router-tab/guide/essentials/installation)

### [📝 文档](https://bhuh12.github.io/vue-router-tab/)

- [介绍](https://bhuh12.github.io/vue-router-tab/guide/)

- [入门](https://bhuh12.github.io/vue-router-tab/guide/essentials/)

- [API](https://bhuh12.github.io/vue-router-tab/api/)

### [📺 演示](https://bhuh12.github.io/vue-router-tab/demo/)

### [👨‍💻 示例项目](https://github.com/bhuh12/router-tab-sample)

### [📃 更新日志](https://bhuh12.github.io/vue-router-tab/guide/changelog)

### [🔄 从 v1 迁移](https://bhuh12.github.io/vue-router-tab/guide/migration)

---

## 🏷 NPM 任务

| 任务               | 命令              | 备注                                                      |
| ------------------ | ----------------- | --------------------------------------------------------- |
| 安装依赖           | `pnpm install`    |
| 插件构建           | `pnpm build`      | 构建库文件（vite build + dts）                            |
| 全部检查           | `pnpm verify`     | check + stylelint + test + build + demo:build + typecheck |
| 代码风格检查并修复 | `pnpm check`      | 运行 `vp check`（格式 + lint）                            |
| 代码 lint          | `pnpm lint`       | 运行 `vp lint`                                            |
| 代码格式化         | `pnpm fmt`        | 运行 `vp fmt`                                             |
| 样式 lint          | `pnpm stylelint`  | 检查 CSS/SCSS                                             |
| 单元测试           | `pnpm test`       | 运行 `vp test`                                            |
| 类型检查           | `pnpm typecheck`  | 运行 `vue-tsc`                                            |
| Demo 开发          | `pnpm demo:dev`   |
| Demo 构建          | `pnpm demo:build` |
| 文档开发           | `pnpm docs:dev`   |
| 文档构建           | `pnpm docs:build` |

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2019-present, 碧海幽虹
