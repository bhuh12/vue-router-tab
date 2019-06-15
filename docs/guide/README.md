# 介绍

Vue Router Tab 是基于 Vue.js 和 Vue Router 的路由页签组件，用来实现多页签页面的管理。

### 包含的功能

✅ 响应路由变化来打开或切换页签

✅ 页签右键菜单操作

✅ [页签规则](essentials/rule.md)配置

✅ 内置页签和页面[过渡效果](advanced/transition.md)，支持自定义配置

✅ [自定义页签模板](advanced/slot.md)

✅ [初始页签数据](advanced/initial-tabs.md)，进入页面时默认显示的页签

✅ [动态更新页签信息](advanced/dynamic-tab-info.md) (标题/图标/提示)

✅ [iframe 页签嵌入外部网站](essentials/iframe.md)

✅ [页签页面离开 (页签关闭/刷新/替换) 前确认](advanced/page-leave.md)

✅ [多语言支持](essentials/i18n.md)


### 主流多页签方案的缺陷

目前主流的 `Vue.js` 多页签方案（[参考文档](https://panjiachen.github.io/vue-element-admin-site/zh/guide/essentials/tags-view.html#%E5%BF%AB%E6%8D%B7%E5%AF%BC%E8%88%AA-%E6%A0%87%E7%AD%BE%E6%A0%8F%E5%AF%BC%E8%88%AA)），是基于 `<keep-alive>` 和 `<router-view>` 组件实现的。由于通过组件的 `name` 来控制缓存，该方案存在以下缺陷：

1. 配置繁杂：需要同时配置 route 和 页面组件的 `name` 并保持一致，还要确保 `name` 不重复

2. 同一个页面组件难以在不同的路由页签中独立缓存，不利于组件的复用

3. 页面缓存难以清理，需要通过各种钩子来更新页面数据

4. 无法定制页签打开的规则


另外还看到一种方案，是弃用 Vue Router，自行实现路由和缓存控制。该方案需要使用其提供的 API 来控制页签打开和切换，对于现有的 Vue Router 项目引入改动量比较大。

---

### Vue Router Tab 的优势

针对现存方案的各种问题，Vue Router Tab 定制开发了 `<router-alive>` 缓存组件来控制路由页面缓存（感兴趣的朋友可以看看：[问题与解决方案](program.md)）。

除了解决了其他方案的不足，Vue Router Tab 还拥有以下优势：

1. Vue Router Tab 是完全响应 Vue Router 路由的。使用熟悉的 `<router-link>` 或者 `router.push` 等 api 即可方便的打开和切换页签，您可以使用 Vue Router 的完整功能。

2. Vue Router Tab 只依赖 Vue.js 和 Vue Router 。不会引入额外的依赖。

3. 配置简单，引入组件后通过路由的 `meta` 配置页签信息即可

4. 可以方便的定制页签的打开规则，精准控制路由页签

5. 丰富的选项提供你可能需要的额外功能和自定义配置

6. 提供完善的文档说明、代码示例和 Demo 演示

---


### 浏览器支持

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari-ios/safari-ios_48x48.png" alt="iOS Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>iOS Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Opera |
| --------- | --------- | --------- | --------- | --------- | --------- |
| IE10, IE11, Edge| last 2 versions| last 2 versions| last 2 versions| last 2 versions| last 2 versions
