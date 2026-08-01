English | [简体中文](README.zh.md)

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

Vue 3 tab components, based on Vue Router.

## 📌 Features

✅ Open or switch to tabs responding to route change

✅ Tabs mouse wheel scrolling

✅ Tabs drag sort

✅ [Tab Operations](https://bhuh12.github.io/vue-router-tab/guide/essentials/operate): open, switch, close, refresh, reset

✅ [Iframe tab](https://bhuh12.github.io/vue-router-tab/guide/essentials/iframe): for external website

✅ Customized: [transition](https://bhuh12.github.io/vue-router-tab/guide/custom/transition), [slot](https://bhuh12.github.io/vue-router-tab/guide/custom/slot), [contextmenu](https://bhuh12.github.io/vue-router-tab/guide/custom/contextmenu)

✅ [I18n](https://bhuh12.github.io/vue-router-tab/guide/custom/i18n)

✅ [Keep scroll position](https://bhuh12.github.io/vue-router-tab/guide/custom/scroll) after tab switching

✅ [Cache control](https://bhuh12.github.io/vue-router-tab/guide/advanced/cache): tab rules, cacheable, maximum keep alive, reusable

✅ [Dynamic Tab Info](https://bhuh12.github.io/vue-router-tab/guide/advanced/dynamic-tab-info): title, icon, tooltip

✅ [Initial Tabs](https://bhuh12.github.io/vue-router-tab/guide/advanced/initial-tabs): initially opened tabs when entering page

✅ [Restore Tabs](https://bhuh12.github.io/vue-router-tab/guide/advanced/restore): reopen tabs after browser refresh

✅ [Page Leave Confirm](https://bhuh12.github.io/vue-router-tab/guide/advanced/page-leave)

✅ [Dynamic title](https://bhuh12.github.io/vue-router-tab/guide/advanced/dynamic-tab-info)

✅ [Multi-instance](https://bhuh12.github.io/vue-router-tab/guide/advanced/multi-instance)

## 🔗 Links

### [🛠 Installation](https://bhuh12.github.io/vue-router-tab/guide/essentials/installation)

### [📝 Documentation](https://bhuh12.github.io/vue-router-tab/)

- [Introduction](https://bhuh12.github.io/vue-router-tab/guide/)

- [Getting Started](https://bhuh12.github.io/vue-router-tab/guide/essentials/)

- [API](https://bhuh12.github.io/vue-router-tab/api/)

### [📺 Online Demo](https://bhuh12.github.io/vue-router-tab/demo/)

### [👨‍💻 Sample Project](https://github.com/bhuh12/router-tab-sample)

### [📃 Changelog](https://bhuh12.github.io/vue-router-tab/guide/changelog)

### [🔄 From v1](https://bhuh12.github.io/vue-router-tab/guide/migration)

---

## 🏷 NPM Task

| Task                 | Command           | Description                                               |
| -------------------- | ----------------- | --------------------------------------------------------- |
| Install dependencies | `pnpm install`    |
| Lib build            | `pnpm build`      | Build library (vite build + dts)                          |
| Run all checks       | `pnpm verify`     | check + stylelint + test + build + demo build + typecheck |
| Format check and fix | `pnpm check`      | Run `vp check` (fmt + lint)                               |
| Lint                 | `pnpm lint`       | Run `vp lint`                                             |
| Format               | `pnpm fmt`        | Run `vp fmt`                                              |
| Stylelint            | `pnpm stylelint`  | Lint CSS/SCSS                                             |
| Test                 | `pnpm test`       | Run `vp test`                                             |
| Type check           | `pnpm typecheck`  | Run `vue-tsc`                                             |
| Demo develop         | `pnpm demo:dev`   |
| Demo build           | `pnpm demo:build` |
| Document develop     | `pnpm docs:dev`   |
| Document build       | `pnpm docs:build` |

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2019-present, 碧海幽虹
