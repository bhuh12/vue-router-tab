# Changelog


## [0.2.9](https://github.com/bhuh12/vue-router-tab/compare/v0.2.8...v0.2.9) (2019-11-20)


### Bug Fixes

* **operate:** 全新打开页签刷新旧页签时使用模糊匹配，避免路径不一致的旧页签无法强制刷新 ([150f112](https://github.com/bhuh12/vue-router-tab/commit/150f11220d38b63e1cae82a7996614f652570c06))



## [0.2.8](https://github.com/bhuh12/vue-router-tab/compare/v0.2.7...v0.2.8) (2019-11-15)


### Bug Fixes

* **operate:** 解决 IE11 下无法直接解构 arguments 导致的 close(path, to, match, force) 方式关闭页签出错 ([acb7e7a](https://github.com/bhuh12/vue-router-tab/commit/acb7e7a29bd2855b26e193d92b0b82e483a20402))


### Code Refactoring

* 实例属性 activedTab 更名为 activeTabId，添加计算属性 activeTab: 当前激活的页签 ([4aea0b1](https://github.com/bhuh12/vue-router-tab/commit/4aea0b1a26d6666272a4676b8d4b113d6461d734))


### Features

* **restore:** 添加 restore-watch 参数，监听 restore 改变后自动还原页签 ([d040b23](https://github.com/bhuh12/vue-router-tab/commit/d040b23e3f899dd0791f5185d7580b14acf5f01c))


### BREAKING CHANGES

* 实例属性 activedTab 更名为 activeTabId



## [0.2.7](https://github.com/bhuh12/vue-router-tab/compare/v0.2.6...v0.2.7) (2019-10-28)


### Features

* **restore:** 浏览器刷新后还原页签 ([710ba70](https://github.com/bhuh12/vue-router-tab/commit/710ba70678396975dcd33081d75014bf81c8401a))



## [0.2.6](https://github.com/bhuh12/vue-router-tab/compare/v0.2.5...v0.2.6) (2019-10-15)


### Bug Fixes

* **iframe:** 防止通过 iframe 页签 XSS 攻击 ([3745813](https://github.com/bhuh12/vue-router-tab/commit/3745813cae029847d3f41df81a745fb1bff3d353))



## [0.2.5](https://github.com/bhuh12/vue-router-tab/compare/v0.2.4...v0.2.5) (2019-10-12)


### Bug Fixes

* **operate:** 解决关闭页签后跳转默认页 ([d30e302](https://github.com/bhuh12/vue-router-tab/commit/d30e302fdfe3d435a5a530abc7dc0d32d5c6e518))



## [0.2.4](https://github.com/bhuh12/vue-router-tab/compare/v0.2.3...v0.2.4) (2019-09-30)


### Features

* **operate:** 添加 open 打开页签方法, close 方法参数优化，补充新增方法文档 ([3bf8c0a](https://github.com/bhuh12/vue-router-tab/commit/3bf8c0ab6df0bff2d55d2d41682fb5c9638d82b4))



## [0.2.3](https://github.com/bhuh12/vue-router-tab/compare/v0.2.2...v0.2.3) (2019-09-20)


### Features

* **close:** 页签 close 方法支持关闭后跳转指定页面 ([cab0d35](https://github.com/bhuh12/vue-router-tab/commit/cab0d35165a8102f6b0889f3c2352deb5e044ccd))
* **reset:** 添加 reset 方法重置 RouterTab 到默认状态 ([95ef4df](https://github.com/bhuh12/vue-router-tab/commit/95ef4df398c9b1e9ceec6b79acbc1f39bba358d8))



## [0.2.2](https://github.com/bhuh12/vue-router-tab/compare/v0.2.1...v0.2.2) (2019-09-07)


### Bug Fixes

* **nest:** 嵌套路由缓存导致页面不匹配时强制更新 ([a21d507](https://github.com/bhuh12/vue-router-tab/commit/a21d5075e0532fed495bf346c62c74957b9eda1c))



## [0.2.1](https://github.com/bhuh12/vue-router-tab/compare/v0.2.0...v0.2.1) (2019-09-04)


### Features

* **iframe:** 添加 RouterTab 事件: iframe-mounted 和 iframe-loaded ([40387df](https://github.com/bhuh12/vue-router-tab/commit/40387df0d98c32eee9de669dcf69f625442d12ec))


### Performance Improvements

* **router-alive:** 组件销毁有清理缓存和组件数据 ([ab4bfd4](https://github.com/bhuh12/vue-router-tab/commit/ab4bfd4838b770b7af96e345e7da89bcc217adb1))



# [0.2.0](https://github.com/bhuh12/vue-router-tab/compare/v0.1.10...v0.2.0) (2019-07-10)


### Features

* **nest:** 页签支持嵌套路由切换 ([cda723d](https://github.com/bhuh12/vue-router-tab/commit/cda723dc36ae4d497e6140e39c313ccc544e5181)), closes [#7](https://github.com/bhuh12/vue-router-tab/issues/7)



## [0.1.10](https://github.com/bhuh12/vue-router-tab/compare/v0.1.9...v0.1.10) (2019-07-10)


### Bug Fixes

* **style:** router-tab 添加最小高度 300px ([f4971ed](https://github.com/bhuh12/vue-router-tab/commit/f4971eda65986bdd7fe6c14035f001c4986f86ba)), closes [#9](https://github.com/bhuh12/vue-router-tab/issues/9)
* **style:** 去除 tab 滚动控制按钮的 element-ui 图标 class ([1404a7f](https://github.com/bhuh12/vue-router-tab/commit/1404a7fc92ebfc18d594fe5b0c7d64437cdd5f8b)), closes [#12](https://github.com/bhuh12/vue-router-tab/issues/12)



## [0.1.9](https://github.com/bhuh12/vue-router-tab/compare/v0.1.8...v0.1.9) (2019-07-10)


### Code Refactoring

* **i18n:** 更改语言配置 props i18n 为 language，i18n 为路由页签信息国际化预留 ([80920f0](https://github.com/bhuh12/vue-router-tab/commit/80920f046da44d3b545e6395b3da2d240887a963))


### Features

* **i18n:** 支持路由页签国际化 ([7fb6d50](https://github.com/bhuh12/vue-router-tab/commit/7fb6d50e0d3beaf82b91950fdb27f54b6ed21b60)), closes [#6](https://github.com/bhuh12/vue-router-tab/issues/6)


### BREAKING CHANGES

* **i18n:** 修改 props i18n 为 language



## [0.1.8](https://github.com/bhuh12/vue-router-tab/compare/v0.1.7...v0.1.8) (2019-07-10)


### Bug Fixes

* **contextmenu:** 右键菜单过渡效果修复 ([d97f172](https://github.com/bhuh12/vue-router-tab/commit/d97f172a430c1ceeb79d39adc4190e4e5fc3868e))


### Features

* **iframe:** iframe 页签嵌入外部网站 ([5d8d93b](https://github.com/bhuh12/vue-router-tab/commit/5d8d93bfde4d287431767b8d2cda4c40c1c47126)), closes [#3](https://github.com/bhuh12/vue-router-tab/issues/3)



## [0.1.7](https://github.com/bhuh12/vue-router-tab/compare/v0.1.6...v0.1.7) (2019-07-10)


### Bug Fixes

* **contextmenu:** 解决 IE11 下右键菜单定位错误和页签头部高度问题 ([cc4a521](https://github.com/bhuh12/vue-router-tab/commit/cc4a521e46ccc744d7f6c8b4ad980e2446be3487))



## [0.1.6](https://github.com/bhuh12/vue-router-tab/compare/v0.1.5...v0.1.6) (2019-07-10)


### Features

* 内置 fullPath 页签规则，补充相关文档和 Demo ([dc6a718](https://github.com/bhuh12/vue-router-tab/commit/dc6a7183cca74dd7b4918346ac068a85ecc3271a))



## [0.1.5](https://github.com/bhuh12/vue-router-tab/compare/v0.1.4...v0.1.5) (2019-07-10)



## [0.1.4](https://github.com/bhuh12/vue-router-tab/compare/v0.1.3...v0.1.4) (2019-07-10)


### Performance Improvements

* **style:** 优化 routerTab 默认过渡效果 ([b5053f0](https://github.com/bhuh12/vue-router-tab/commit/b5053f0120714c2224a1006b624f716b20dc1cb1))



## [0.1.3](https://github.com/bhuh12/vue-router-tab/compare/v0.1.2...v0.1.3) (2019-07-10)


### Bug Fixes

* 解决无法刷新和关闭相对路径的 location ([6302203](https://github.com/bhuh12/vue-router-tab/commit/63022030e35d0866ade177905be62fc70cb67bad))



## [0.1.2](https://github.com/bhuh12/vue-router-tab/compare/v0.1.1...v0.1.2) (2019-07-10)



## [0.1.1](https://github.com/bhuh12/vue-router-tab/compare/a2f444dda5effae5f7410b8075e20e055e8917dc...v0.1.1) (2019-07-10)


### Bug Fixes

* 当快速频繁切换页签时页面内容空白 ([6b24430](https://github.com/bhuh12/vue-router-tab/commit/6b244305f91dded9addc3b40df59d3e350ac9b27))


### Features

* 新增 close 和 refresh 针对路由操作，closeTab 和 refreshTab 针对页签 id 操作 ([bb86e66](https://github.com/bhuh12/vue-router-tab/commit/bb86e66c908ad55347b093ed1a27bffd1809fc6a))
* **i18n:** 国际化支持 ([416af48](https://github.com/bhuh12/vue-router-tab/commit/416af48f022b93c251deb55e6f765fe9cfe86cbf))
* 添加 Router Tab 组件 ([a2f444d](https://github.com/bhuh12/vue-router-tab/commit/a2f444dda5effae5f7410b8075e20e055e8917dc))


### Performance Improvements

* 使用 promise 代替 async 以减少组件打包体积 ([fe5870b](https://github.com/bhuh12/vue-router-tab/commit/fe5870b62dc939276054b2188c43e6455055198d))



