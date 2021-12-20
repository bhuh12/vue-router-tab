# 更新日志

## [1.2.11](https://github.com/bhuh12/vue-router-tab/compare/v1.2.10...v1.2.11) (2021-12-20)

### Bug Fixes

- **routerPage:** 修复 `this.$vnode.data.key` 不存在时,动态页签无法更新 ([4aa2e96](https://github.com/bhuh12/vue-router-tab/commit/4aa2e968130bae897b66ff4eb91aa4ed86bc71bf)), closes [#138](https://github.com/bhuh12/vue-router-tab/issues/138)

## [1.2.10](https://github.com/bhuh12/vue-router-tab/compare/v1.2.9...v1.2.10) (2021-12-17)

### Bug Fixes

- **pageLeave:** 页面实例不存在报错 ([2a6265d](https://github.com/bhuh12/vue-router-tab/commit/2a6265d8412c4c45e4f7ffb76ba8e8922de3e272))

## [1.2.9](https://github.com/bhuh12/vue-router-tab/compare/v1.2.8...v1.2.9) (2021-12-09)

### Bug Fixes

- **routerpage:** 修复非激活的页签 `routeTab` 更新会更改当前激活页签信息 (closes [#135](https://github.com/bhuh12/vue-router-tab/issues/135)) ([ff017a4](https://github.com/bhuh12/vue-router-tab/commit/ff017a4003c31cac3f61f020f64b07df7dc856ea))
- **TabItem:** 修复 Vue Router `tag prop is deprecated` 警告 ([d969248](https://github.com/bhuh12/vue-router-tab/commit/d969248b892e01a61fd3fe85ca75a52824a32cd2)), closes [#134](https://github.com/bhuh12/vue-router-tab/issues/134)

## [1.2.8](https://github.com/bhuh12/vue-router-tab/compare/v1.2.7...v1.2.8) (2021-11-05)

### Bug Fixes

- **TabScroll:** 修复错误 `TypeError: Cannot read properties of undefined (reading 'clientWidth')` ([9cf924c](https://github.com/bhuh12/vue-router-tab/commit/9cf924c30bbb373a308b1132a2f2e4bf7db6a683)), closes [#131](https://github.com/bhuh12/vue-router-tab/issues/131)

## [1.2.7](https://github.com/bhuh12/vue-router-tab/compare/v1.2.6...v1.2.7) (2021-06-03)

### Bug Fixes

- **RouterAlive:** 解决由于 Vue v2.6.13 版本 KeepAlive 精简了缓存组件的数据，导致移除缓存失败 ([93f8418](https://github.com/bhuh12/vue-router-tab/commit/93f8418fb19df5593b08237f322bf5c2937c13a1)), closes [#121](https://github.com/bhuh12/vue-router-tab/issues/121)

## [1.2.6](https://github.com/bhuh12/vue-router-tab/compare/v1.2.5...v1.2.6) (2021-05-09)

### Bug Fixes

- **DragSort:** 修复双核浏览器兼容模式下拖拽排序失效 ([78ecec3](https://github.com/bhuh12/vue-router-tab/commit/78ecec3bb860ff4eec2c9c0d66ae8bdd3b469491))
- **PageLeave:** 支持页签未缓存时离开提醒 ([1d70e03](https://github.com/bhuh12/vue-router-tab/commit/1d70e0334b882382edff7c6a506bbbcec9f0e23b)), closes [#116](https://github.com/bhuh12/vue-router-tab/issues/116)

### Features

- **pageScroller:** 页签切换保留滚动位置 ([958a85d](https://github.com/bhuh12/vue-router-tab/commit/958a85d7d0f317156ab71b7d35fe79a1874fc1ff)), closes [#108](https://github.com/bhuh12/vue-router-tab/issues/108)
- **TabItem:** 鼠标中键点击关闭页签项 ([ef673b5](https://github.com/bhuh12/vue-router-tab/commit/ef673b5dff481795f9c37126d94a3cbb3ee123cb)), closes [#118](https://github.com/bhuh12/vue-router-tab/issues/118)
- **vetur:** 为 Vetur 扩展提供组件语法提示 ([c78a5b6](https://github.com/bhuh12/vue-router-tab/commit/c78a5b62afdf052768df2f82ec69a922c252d0d3))

## [1.2.5](https://github.com/bhuh12/vue-router-tab/compare/v1.2.4...v1.2.5) (2021-03-26)

### Bug Fixes

- **DragSort:** 解决 Firefox 下页签拖拽排序后浏览器打开新的页签 ([b5134cb](https://github.com/bhuh12/vue-router-tab/commit/b5134cbd2b2036b2c1d1584da10bb67fc2a8c143))

## [1.2.4](https://github.com/bhuh12/vue-router-tab/compare/v1.2.3...v1.2.4) (2021-01-23)

### Bug Fixes

- **routerAlive:** 修复页面组件 dom 节点修改后热重载不生效 ([85912a9](https://github.com/bhuh12/vue-router-tab/commit/85912a964374fc8bc77a29f493dadf7643fd3b7e))

## [1.2.3](https://github.com/bhuh12/vue-router-tab/compare/v1.2.2...v1.2.3) (2021-01-09)

### Bug Fixes

- 使用 jsx 生成 TabItem 模板，解决 Vue 2.5.22 版本 TabItem 报错 ([48c6065](https://github.com/bhuh12/vue-router-tab/commit/48c60656f0f086355d170ceb5f21adb469df4ff0))
- **scroll:** 解决有些移动设备页签无法滚动 ([06b12a2](https://github.com/bhuh12/vue-router-tab/commit/06b12a2622487335bd8a90f0e33c7c603ddf02ff))

### Features

- **lang:** 根据浏览器语言自动识别组件语言 ([67a3c26](https://github.com/bhuh12/vue-router-tab/commit/67a3c260393e97d5fccaa63586ca39f961cf94d5))

## [1.2.2](https://github.com/bhuh12/vue-router-tab/compare/v1.2.1...v1.2.2) (2020-11-28)

### Bug Fixes

- **iframe:** 屏蔽 Base64 方式 XSS 攻击链接 ([665b897](https://github.com/bhuh12/vue-router-tab/commit/665b897a898d7fab38505acbedd6f495dffbf5b6))
- **scroll:** 解决页签滚动调整时未获取到当前页签报错 ([61e3a95](https://github.com/bhuh12/vue-router-tab/commit/61e3a95dee9313e62320b30f126224cc96986bbc))

## [1.2.1](https://github.com/bhuh12/vue-router-tab/compare/v1.2.0...v1.2.1) (2020-10-17)

### Bug Fixes

- **iframe:** 解决 vue-router 3.4.6 params 中的链接未解码导致 iframe 页签加载失败 ([9ff5d16](https://github.com/bhuh12/vue-router-tab/commit/9ff5d1687abc5676c8301efc0a0302bfd2bb5359))
- **RouteMatch:** 解决匹配外部路由根路径 `basePath` 时出错 ([f6073d3](https://github.com/bhuh12/vue-router-tab/commit/f6073d39e16a25e0600868d6411f28cdc4e2dff7))

## [1.2.0](https://github.com/bhuh12/vue-router-tab/compare/v1.1.0...v1.2.0) (2020-08-22)

### Bug Fixes

- **contextmenu:** 右键菜单优化 ([0088b63](https://github.com/bhuh12/vue-router-tab/commit/0088b637b29b4f5c1f928e0e7d14f713917d5706))
- 解决浏览器历史前进后退和还原页签时没有 adjust 到当前页签位置 ([66bf4c1](https://github.com/bhuh12/vue-router-tab/commit/66bf4c12a576ee7ad6bc7f3b4540091e4cfceb4a))
- 解决缓存 key 为空时右键菜单不显示 ([f9448de](https://github.com/bhuh12/vue-router-tab/commit/f9448decc310fcd404cdde0fc1abdcb675bf73bc))

### Code Refactoring

- **lang:** 语言配置由 language 修改为 lang ([8866760](https://github.com/bhuh12/vue-router-tab/commit/8866760839fa5f71ab7649f0e868b0e05c5c966c))

### Features

- Nuxt 支持从页面 meta 配置页签 ([02daa90](https://github.com/bhuh12/vue-router-tab/commit/02daa9068c73ad9accb7ae89826c611d287e9c5c))
- 新增配置项：`append` 新页签插入位置 ([458fc34](https://github.com/bhuh12/vue-router-tab/commit/458fc34489b7276200e8dd51ba0f3a9a9de92174))
- **dragsort:** 页签拖拽排序 ([479bfcd](https://github.com/bhuh12/vue-router-tab/commit/479bfcd0cc1b46968e13e68d3e2d7fac0a56718a))

### Performance Improvements

- 新增 Nuxt Iframe 页面路由元配置 ([706e7e6](https://github.com/bhuh12/vue-router-tab/commit/706e7e6626e4eed8a07505d6e540546c55724936))

### BREAKING CHANGES

- **lang:** 组件语言配置由 language 修改为 lang

## [1.1.0](https://github.com/bhuh12/vue-router-tab/compare/v1.0.2...v1.1.0) (2020-07-30)

### Code Refactoring

- 全局 `$routerTab` 修改为 `$tabs` ([6edc214](https://github.com/bhuh12/vue-router-tab/commit/6edc214a21b83fe2f23627bcdfb0318ba4c10ed1))

### Features

- **contextmenu:** 支持自定义右键菜单配置 ([d475ebe](https://github.com/bhuh12/vue-router-tab/commit/d475ebeeade5ee95cda9a3b3636031a8963ac4c2))
- **beforePageLeave** 支持浏览器 `beforeunload` 事件 ([5d57e60](https://github.com/bhuh12/vue-router-tab/commit/5d57e60e50017a913fd3b7c3950f7c4160c40492))

### BREAKING CHANGES

- 全局访问 RouterTab 组件弃用 `this.$routerTab`，修改为 `this.$tabs`
- `beforePageLeave` 弃用参数 resolve, reject，返回 promise 来允许或者阻止页签页面的离开

## [1.0.2](https://github.com/bhuh12/vue-router-tab/compare/v1.0.1...v1.0.2) (2020-07-07)

### Performance Improvements

- **pageLeave:** 页面离开确认支持路由离开当前页签组件 ([c53374b](https://github.com/bhuh12/vue-router-tab/commit/c53374b46fda78d3b49f68c9e0c238b801cf23d0))
- **RouterAlive:** 组件销毁后清理数据 ([a621999](https://github.com/bhuh12/vue-router-tab/commit/a6219990b1d7bd422ebeb16bbbdc086c697e0881))

## [1.0.1](https://github.com/bhuh12/vue-router-tab/compare/v1.0.0...v1.0.1) (2020-06-29)

### Bug Fixes

- 解决页签关闭 close(null) 报错 ([a87bcca](https://github.com/bhuh12/vue-router-tab/commit/a87bcca85917c2dc6389cb7bb1a1be526a98cf2f))

### Performance Improvements

- **RouterAlive:** 页面销毁后清理 cache，避免设置 max 后 keepAlive 销毁的组件无法清理 ([db66372](https://github.com/bhuh12/vue-router-tab/commit/db66372a1178bdf8f16f402f4166a086f450ae2f))

## [1.0.0](https://github.com/bhuh12/vue-router-tab/compare/v1.0.0-alpha.5...v1.0.0) (2020-06-28)

### Code Refactoring

- 样式重构，移除左右页签滚动按钮 ([a17543a](https://github.com/bhuh12/vue-router-tab/commit/a17543a8e4f3e82890a292c46f1185a6a8d21217))

### Features

- **RouterAlive:** RouterAlive 组件使用 keep-alive + router-view 重构 ([ac3a04d](https://github.com/bhuh12/vue-router-tab/commit/ac3a04df2055e673ea5e16993de5df1d4452d9b8))
- **scroll:** 添加页签滚动组件 ([620d17e](https://github.com/bhuh12/vue-router-tab/commit/620d17e2a026511682ebf3ab6e4b1bd418a88a31))

### Performance Improvements

- 缓存的嵌套页面不更新使用 \$forceUpdate 强制刷新 ([a85a51e](https://github.com/bhuh12/vue-router-tab/commit/a85a51e446b9fca7ca962e9b43369f06cf88bd53))
- **RouterAlive:** 通过 \$vnode.data.routerViewDepth 匹配页面路由索引。 ([c0dce87](https://github.com/bhuh12/vue-router-tab/commit/c0dce87278f213c90121bbd51cd322385e003d86))

### BREAKING CHANGES

- 组件节点 class 更改
- **RouterAlive:**
  1. close 方法多参数方式简化，只支持 close(path, to)
  2. 组件配置弃用：alive-id、router-view
  3. 路由 meta 配置 aliveId 更改为 key
  4. 弃用路由页面 \_isRouterPage 标记

## [1.0.0-alpha.5](https://github.com/bhuh12/vue-router-tab/compare/v1.0.0-alpha.4...v1.0.0-alpha.5) (2020-05-29)

### Features

- **scroll:** 鼠标滚轮滚动页签，移动端原生触摸滚动页签 ([dd29942](https://github.com/bhuh12/vue-router-tab/commit/dd29942f89d16dd6caafa4ac51966e979170a000))
- **slot:** 新增 start：页签开始、end：页签结束 插槽 ([34d8542](https://github.com/bhuh12/vue-router-tab/commit/34d85421815f71364c1f8df157d1dbb95798c3e3))

## [1.0.0-alpha.4](https://github.com/bhuh12/vue-router-tab/compare/v1.0.0-alpha.3...v1.0.0-alpha.4) (2020-04-10)

### Bug Fixes

- **operate:** 解决在嵌套路由下关闭或重置页签后重定向到当前页签失效 ([6e27eaa](https://github.com/bhuh12/vue-router-tab/commit/6e27eaa17b6991b010cd0f97174de6bb80d630a4))
- **restore:** 解决刷新还原页签后标题丢失 ([717c03f](https://github.com/bhuh12/vue-router-tab/commit/717c03fe4f1163567e0baa90d88e77e20bb74694))

## [1.0.0-alpha.3](https://github.com/bhuh12/vue-router-tab/compare/v1.0.0-alpha.2...v1.0.0-alpha.3) (2020-03-19)

### Bug Fixes

- 解决默认页面路径为 '/' 时页签重置失败 ([f50d3e8](https://github.com/bhuh12/vue-router-tab/commit/f50d3e838c5017dacc6d555248a60d48876f9270))

### Features

- **tab:** 路由元 meta 支持 closable 和 tabClass 配置 ([b6c92fb](https://github.com/bhuh12/vue-router-tab/commit/b6c92fbb11939c7df84b8c1d77faa48bf17589d8))

### BREAKING CHANGES

- **tab:** 页签插槽作用域变量更改

## [1.0.0-alpha.2](https://github.com/bhuh12/vue-router-tab/compare/v1.0.0-alpha.1...v1.0.0-alpha.2) (2020-02-24)

### Bug Fixes

- 解决某些场景无法访问 `this.$tabs` ([f458763](https://github.com/bhuh12/vue-router-tab/commit/f458763095f982370c674d076293c274abff8bd7))

## [1.0.0-alpha.1](https://github.com/bhuh12/vue-router-tab/compare/v0.2.9...v1.0.0-alpha.1) (2020-01-27)

### Code Refactoring

- **iframe:** 移除 openIframeTab, closeIframeTab, refreshIframeTab 方法 ([87d0d77](https://github.com/bhuh12/vue-router-tab/commit/87d0d770a0b85a9e146023d74ca3f3d737b686c6))

### Features

- **style:** 使用新的样式，css 模拟图标按钮 ([c305603](https://github.com/bhuh12/vue-router-tab/commit/c3056036559ac41075bf573e531efa4c144c15e9))

### BREAKING CHANGES

- **iframe:** 弃用 openIframeTab, closeIframeTab, refreshIframeTab 方法

## [0.2.9](https://github.com/bhuh12/vue-router-tab/compare/v0.2.8...v0.2.9) (2019-11-20)

### Bug Fixes

- **operate:** 全新打开页签刷新旧页签时使用模糊匹配，避免路径不一致的旧页签无法强制刷新 ([150f112](https://github.com/bhuh12/vue-router-tab/commit/150f11220d38b63e1cae82a7996614f652570c06))

## [0.2.8](https://github.com/bhuh12/vue-router-tab/compare/v0.2.7...v0.2.8) (2019-11-15)

### Bug Fixes

- **operate:** 解决 IE11 下无法直接解构 arguments 导致的 close(path, to, match, force) 方式关闭页签出错 ([acb7e7a](https://github.com/bhuh12/vue-router-tab/commit/acb7e7a29bd2855b26e193d92b0b82e483a20402))

### Code Refactoring

- 实例属性 activedTab 更名为 activeTabId，添加计算属性 activeTab: 当前激活的页签 ([4aea0b1](https://github.com/bhuh12/vue-router-tab/commit/4aea0b1a26d6666272a4676b8d4b113d6461d734))

### Features

- **restore:** 添加 restore-watch 参数，监听 restore 改变后自动还原页签 ([d040b23](https://github.com/bhuh12/vue-router-tab/commit/d040b23e3f899dd0791f5185d7580b14acf5f01c))

### BREAKING CHANGES

- 实例属性 activedTab 更名为 activeTabId

## [0.2.7](https://github.com/bhuh12/vue-router-tab/compare/v0.2.6...v0.2.7) (2019-10-28)

### Features

- **restore:** 浏览器刷新后还原页签 ([710ba70](https://github.com/bhuh12/vue-router-tab/commit/710ba70678396975dcd33081d75014bf81c8401a))

## [0.2.6](https://github.com/bhuh12/vue-router-tab/compare/v0.2.5...v0.2.6) (2019-10-15)

### Bug Fixes

- **iframe:** 防止通过 Iframe 页签 XSS 攻击 ([3745813](https://github.com/bhuh12/vue-router-tab/commit/3745813cae029847d3f41df81a745fb1bff3d353))

## [0.2.5](https://github.com/bhuh12/vue-router-tab/compare/v0.2.4...v0.2.5) (2019-10-12)

### Bug Fixes

- **operate:** 解决关闭页签后跳转默认页 ([d30e302](https://github.com/bhuh12/vue-router-tab/commit/d30e302fdfe3d435a5a530abc7dc0d32d5c6e518))

## [0.2.4](https://github.com/bhuh12/vue-router-tab/compare/v0.2.3...v0.2.4) (2019-09-30)

### Features

- **operate:** 添加 open 打开页签方法, close 方法参数优化，补充新增方法文档 ([3bf8c0a](https://github.com/bhuh12/vue-router-tab/commit/3bf8c0ab6df0bff2d55d2d41682fb5c9638d82b4))

## [0.2.3](https://github.com/bhuh12/vue-router-tab/compare/v0.2.2...v0.2.3) (2019-09-20)

### Features

- **close:** 页签 close 方法支持关闭后跳转指定页面 ([cab0d35](https://github.com/bhuh12/vue-router-tab/commit/cab0d35165a8102f6b0889f3c2352deb5e044ccd))
- **reset:** 添加 reset 方法重置 RouterTab 到默认状态 ([95ef4df](https://github.com/bhuh12/vue-router-tab/commit/95ef4df398c9b1e9ceec6b79acbc1f39bba358d8))

## [0.2.2](https://github.com/bhuh12/vue-router-tab/compare/v0.2.1...v0.2.2) (2019-09-07)

### Bug Fixes

- **nest:** 嵌套路由缓存导致页面不匹配时强制更新 ([a21d507](https://github.com/bhuh12/vue-router-tab/commit/a21d5075e0532fed495bf346c62c74957b9eda1c))

## [0.2.1](https://github.com/bhuh12/vue-router-tab/compare/v0.2.0...v0.2.1) (2019-09-04)

### Features

- **iframe:** 添加 RouterTab 事件: iframe-mounted 和 iframe-loaded ([40387df](https://github.com/bhuh12/vue-router-tab/commit/40387df0d98c32eee9de669dcf69f625442d12ec))

### Performance Improvements

- **router-alive:** 组件销毁有清理缓存和组件数据 ([ab4bfd4](https://github.com/bhuh12/vue-router-tab/commit/ab4bfd4838b770b7af96e345e7da89bcc217adb1))

# [0.2.0](https://github.com/bhuh12/vue-router-tab/compare/v0.1.10...v0.2.0) (2019-07-10)

### Features

- **nest:** 页签支持嵌套路由切换 ([cda723d](https://github.com/bhuh12/vue-router-tab/commit/cda723dc36ae4d497e6140e39c313ccc544e5181)), closes [#7](https://github.com/bhuh12/vue-router-tab/issues/7)

## [0.1.10](https://github.com/bhuh12/vue-router-tab/compare/v0.1.9...v0.1.10) (2019-07-10)

### Bug Fixes

- **style:** router-tab 添加最小高度 300px ([f4971ed](https://github.com/bhuh12/vue-router-tab/commit/f4971eda65986bdd7fe6c14035f001c4986f86ba)), closes [#9](https://github.com/bhuh12/vue-router-tab/issues/9)
- **style:** 去除 tab 滚动控制按钮的 element-ui 图标 class ([1404a7f](https://github.com/bhuh12/vue-router-tab/commit/1404a7fc92ebfc18d594fe5b0c7d64437cdd5f8b)), closes [#12](https://github.com/bhuh12/vue-router-tab/issues/12)

## [0.1.9](https://github.com/bhuh12/vue-router-tab/compare/v0.1.8...v0.1.9) (2019-07-10)

### Code Refactoring

- **i18n:** 更改语言配置 props i18n 为 language，i18n 为路由页签信息国际化预留 ([80920f0](https://github.com/bhuh12/vue-router-tab/commit/80920f046da44d3b545e6395b3da2d240887a963))

### Features

- **i18n:** 支持路由页签国际化 ([7fb6d50](https://github.com/bhuh12/vue-router-tab/commit/7fb6d50e0d3beaf82b91950fdb27f54b6ed21b60)), closes [#6](https://github.com/bhuh12/vue-router-tab/issues/6)

### BREAKING CHANGES

- **i18n:** 修改 props i18n 为 language

## [0.1.8](https://github.com/bhuh12/vue-router-tab/compare/v0.1.7...v0.1.8) (2019-07-10)

### Bug Fixes

- **contextmenu:** 右键菜单过渡效果修复 ([d97f172](https://github.com/bhuh12/vue-router-tab/commit/d97f172a430c1ceeb79d39adc4190e4e5fc3868e))

### Features

- **iframe:** Iframe 页签嵌入外部网站 ([5d8d93b](https://github.com/bhuh12/vue-router-tab/commit/5d8d93bfde4d287431767b8d2cda4c40c1c47126)), closes [#3](https://github.com/bhuh12/vue-router-tab/issues/3)

## [0.1.7](https://github.com/bhuh12/vue-router-tab/compare/v0.1.6...v0.1.7) (2019-07-10)

### Bug Fixes

- **contextmenu:** 解决 IE11 下右键菜单定位错误和页签头部高度问题 ([cc4a521](https://github.com/bhuh12/vue-router-tab/commit/cc4a521e46ccc744d7f6c8b4ad980e2446be3487))

## [0.1.6](https://github.com/bhuh12/vue-router-tab/compare/v0.1.5...v0.1.6) (2019-07-10)

### Features

- 内置 fullPath 页签规则，补充相关文档和 Demo ([dc6a718](https://github.com/bhuh12/vue-router-tab/commit/dc6a7183cca74dd7b4918346ac068a85ecc3271a))

## [0.1.5](https://github.com/bhuh12/vue-router-tab/compare/v0.1.4...v0.1.5) (2019-07-10)

## [0.1.4](https://github.com/bhuh12/vue-router-tab/compare/v0.1.3...v0.1.4) (2019-07-10)

### Performance Improvements

- **style:** 优化 routerTab 默认过渡效果 ([b5053f0](https://github.com/bhuh12/vue-router-tab/commit/b5053f0120714c2224a1006b624f716b20dc1cb1))

## [0.1.3](https://github.com/bhuh12/vue-router-tab/compare/v0.1.2...v0.1.3) (2019-07-10)

### Bug Fixes

- 解决无法刷新和关闭相对路径的 location ([6302203](https://github.com/bhuh12/vue-router-tab/commit/63022030e35d0866ade177905be62fc70cb67bad))

## [0.1.2](https://github.com/bhuh12/vue-router-tab/compare/v0.1.1...v0.1.2) (2019-07-10)

## [0.1.1](https://github.com/bhuh12/vue-router-tab/compare/a2f444dda5effae5f7410b8075e20e055e8917dc...v0.1.1) (2019-07-10)

### Bug Fixes

- 当快速频繁切换页签时页面内容空白 ([6b24430](https://github.com/bhuh12/vue-router-tab/commit/6b244305f91dded9addc3b40df59d3e350ac9b27))

### Features

- 新增 close 和 refresh 针对路由操作，closeTab 和 refreshTab 针对页签 id 操作 ([bb86e66](https://github.com/bhuh12/vue-router-tab/commit/bb86e66c908ad55347b093ed1a27bffd1809fc6a))
- **i18n:** 国际化支持 ([416af48](https://github.com/bhuh12/vue-router-tab/commit/416af48f022b93c251deb55e6f765fe9cfe86cbf))
- 添加 Router Tab 组件 ([a2f444d](https://github.com/bhuh12/vue-router-tab/commit/a2f444dda5effae5f7410b8075e20e055e8917dc))

### Performance Improvements

- 使用 promise 代替 async 以减少组件打包体积 ([fe5870b](https://github.com/bhuh12/vue-router-tab/commit/fe5870b62dc939276054b2188c43e6455055198d))
