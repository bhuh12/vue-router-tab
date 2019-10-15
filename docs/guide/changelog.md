# 更新日志


## [0.2.6](https://github.com/bhuh12/vue-router-tab/compare/v0.2.5...v0.2.6) (2019-10-15)


### Bug Fixes

* **iframe:** 防止通过 iframe 页签 XSS 攻击 ([3745813](https://github.com/bhuh12/vue-router-tab/commit/3745813))



## [0.2.5](https://github.com/bhuh12/vue-router-tab/compare/v0.2.4...v0.2.5) (2019-10-12)


### Bug Fixes

* **operate:** 解决关闭页签后跳转默认页 ([d30e302](https://github.com/bhuh12/vue-router-tab/commit/d30e302))



## [0.2.4](https://github.com/bhuh12/vue-router-tab/compare/v0.2.3...v0.2.4) (2019-09-30)


### Features

* **operate:** 添加 open 打开页签方法, close 方法参数优化，补充新增方法文档 ([3bf8c0a](https://github.com/bhuh12/vue-router-tab/commit/3bf8c0a))



## [0.2.3](https://github.com/bhuh12/vue-router-tab/compare/v0.2.2...v0.2.3) (2019-09-20)


### Features

* **close:** 页签 close 方法支持关闭后跳转指定页面 ([cab0d35](https://github.com/bhuh12/vue-router-tab/commit/cab0d35))
* **reset:** 添加 reset 方法重置 RouterTab 到默认状态 ([95ef4df](https://github.com/bhuh12/vue-router-tab/commit/95ef4df))



## [0.2.2](https://github.com/bhuh12/vue-router-tab/compare/v0.2.1...v0.2.2) (2019-09-07)


### Bug Fixes

* **nest:** 嵌套路由缓存导致页面不匹配时强制更新 ([a21d507](https://github.com/bhuh12/vue-router-tab/commit/a21d507))



## [0.2.1](https://github.com/bhuh12/vue-router-tab/compare/v0.2.0...v0.2.1) (2019-09-04)


### Features

* **iframe:** 添加 RouterTab 事件: iframe-mounted 和 iframe-loaded ([40387df](https://github.com/bhuh12/vue-router-tab/commit/40387df))


### Performance Improvements

* **router-alive:** 组件销毁有清理缓存和组件数据 ([ab4bfd4](https://github.com/bhuh12/vue-router-tab/commit/ab4bfd4))



# [0.2.0](https://github.com/bhuh12/vue-router-tab/compare/v0.1.10...v0.2.0) (2019-07-10)


### Features

* **nest:** 页签支持嵌套路由切换 ([cda723d](https://github.com/bhuh12/vue-router-tab/commit/cda723d)), closes [#7](https://github.com/bhuh12/vue-router-tab/issues/7)



## [0.1.10](https://github.com/bhuh12/vue-router-tab/compare/v0.1.9...v0.1.10) (2019-07-10)


### Bug Fixes

* **style:** router-tab 添加最小高度 300px ([f4971ed](https://github.com/bhuh12/vue-router-tab/commit/f4971ed)), closes [#9](https://github.com/bhuh12/vue-router-tab/issues/9)
* **style:** 去除 tab 滚动控制按钮的 element-ui 图标 class ([1404a7f](https://github.com/bhuh12/vue-router-tab/commit/1404a7f)), closes [#12](https://github.com/bhuh12/vue-router-tab/issues/12)



## [0.1.9](https://github.com/bhuh12/vue-router-tab/compare/v0.1.8...v0.1.9) (2019-07-10)


### Code Refactoring

* **i18n:** 更改语言配置 props i18n 为 language，i18n 为路由页签信息国际化预留 ([80920f0](https://github.com/bhuh12/vue-router-tab/commit/80920f0))


### Features

* **i18n:** 支持路由页签国际化 ([7fb6d50](https://github.com/bhuh12/vue-router-tab/commit/7fb6d50)), closes [#6](https://github.com/bhuh12/vue-router-tab/issues/6)


### BREAKING CHANGES

* **i18n:** 修改 props i18n 为 language



## [0.1.8](https://github.com/bhuh12/vue-router-tab/compare/v0.1.7...v0.1.8) (2019-07-10)


### Bug Fixes

* **contextmenu:** 右键菜单过渡效果修复 ([d97f172](https://github.com/bhuh12/vue-router-tab/commit/d97f172))


### Features

* **iframe:** iframe 页签嵌入外部网站 ([5d8d93b](https://github.com/bhuh12/vue-router-tab/commit/5d8d93b)), closes [#3](https://github.com/bhuh12/vue-router-tab/issues/3)



## [0.1.7](https://github.com/bhuh12/vue-router-tab/compare/v0.1.6...v0.1.7) (2019-07-10)


### Bug Fixes

* **contextmenu:** 解决 IE11 下右键菜单定位错误和页签头部高度问题 ([cc4a521](https://github.com/bhuh12/vue-router-tab/commit/cc4a521))



## [0.1.6](https://github.com/bhuh12/vue-router-tab/compare/v0.1.5...v0.1.6) (2019-07-10)


### Features

* 内置 fullPath 页签规则，补充相关文档和 Demo ([dc6a718](https://github.com/bhuh12/vue-router-tab/commit/dc6a718))



## [0.1.5](https://github.com/bhuh12/vue-router-tab/compare/v0.1.4...v0.1.5) (2019-07-10)



## [0.1.4](https://github.com/bhuh12/vue-router-tab/compare/v0.1.3...v0.1.4) (2019-07-10)


### Performance Improvements

* **style:** 优化 routerTab 默认过渡效果 ([b5053f0](https://github.com/bhuh12/vue-router-tab/commit/b5053f0))



## [0.1.3](https://github.com/bhuh12/vue-router-tab/compare/v0.1.2...v0.1.3) (2019-07-10)


### Bug Fixes

* 解决无法刷新和关闭相对路径的 location ([6302203](https://github.com/bhuh12/vue-router-tab/commit/6302203))



## [0.1.2](https://github.com/bhuh12/vue-router-tab/compare/v0.1.1...v0.1.2) (2019-07-10)



## [0.1.1](https://github.com/bhuh12/vue-router-tab/compare/a2f444d...v0.1.1) (2019-07-10)


### Bug Fixes

* 当快速频繁切换页签时页面内容空白 ([6b24430](https://github.com/bhuh12/vue-router-tab/commit/6b24430))


### Features

* **i18n:** 国际化支持 ([416af48](https://github.com/bhuh12/vue-router-tab/commit/416af48))
* 新增 close 和 refresh 针对路由操作，closeTab 和 refreshTab 针对页签 id 操作 ([bb86e66](https://github.com/bhuh12/vue-router-tab/commit/bb86e66))
* 添加 Router Tab 组件 ([a2f444d](https://github.com/bhuh12/vue-router-tab/commit/a2f444d))


### Performance Improvements

* 使用 promise 代替 async 以减少组件打包体积 ([fe5870b](https://github.com/bhuh12/vue-router-tab/commit/fe5870b))



