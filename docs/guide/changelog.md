# Changelog

## [1.2.11](https://github.com/bhuh12/vue-router-tab/compare/v1.2.10...v1.2.11) (2021-12-20)

### Bug Fixes

- **routerPage:** Fix that when `this.$vnode.data.key` does not exist, the tab information cannot be updated ([4aa2e96](https://github.com/bhuh12/vue-router-tab/commit/4aa2e968130bae897b66ff4eb91aa4ed86bc71bf)), closes [#138](https://github.com/bhuh12/vue-router-tab/issues/138)

## [1.2.10](https://github.com/bhuh12/vue-router-tab/compare/v1.2.9...v1.2.10) (2021-12-17)

### Bug Fixes

- **pageLeave:** Fixed the error of page instance does not exist ([2a6265d](https://github.com/bhuh12/vue-router-tab/commit/2a6265d8412c4c45e4f7ffb76ba8e8922de3e272))

## [1.2.9](https://github.com/bhuh12/vue-router-tab/compare/v1.2.8...v1.2.9) (2021-12-09)

### Bug Fixes

- **routerpage:** assign metadata change to correct tab (closes [#135](https://github.com/bhuh12/vue-router-tab/issues/135)) ([ff017a4](https://github.com/bhuh12/vue-router-tab/commit/ff017a4003c31cac3f61f020f64b07df7dc856ea))
- **TabItem:** Fixed Vue Router `tag prop is deprecated` warning ([d969248](https://github.com/bhuh12/vue-router-tab/commit/d969248b892e01a61fd3fe85ca75a52824a32cd2)), closes [#134](https://github.com/bhuh12/vue-router-tab/issues/134)

## [1.2.8](https://github.com/bhuh12/vue-router-tab/compare/v1.2.7...v1.2.8) (2021-11-05)

### Bug Fixes

- **TabScroll:** Fix `TypeError: Cannot read properties of undefined (reading 'clientWidth')` ([9cf924c](https://github.com/bhuh12/vue-router-tab/commit/9cf924c30bbb373a308b1132a2f2e4bf7db6a683)), closes [#131](https://github.com/bhuh12/vue-router-tab/issues/131)

## [1.2.7](https://github.com/bhuh12/vue-router-tab/compare/v1.2.6...v1.2.7) (2021-06-03)

### Bug Fixes

- **RouterAlive:** Solve the problem of failing to remove the cache due to the Vue v2.6.13 version of KeepAlive streamlining the data of the cache component ([93f8418](https://github.com/bhuh12/vue-router-tab/commit/93f8418fb19df5593b08237f322bf5c2937c13a1)), closes [#121](https://github.com/bhuh12/vue-router-tab/issues/121)

## [1.2.6](https://github.com/bhuh12/vue-router-tab/compare/v1.2.5...v1.2.6) (2021-05-09)

### Bug Fixes

- **DragSort:** Fixed the drag and drop sorting failure in dual-core browser compatibility mode ([78ecec3](https://github.com/bhuh12/vue-router-tab/commit/78ecec3bb860ff4eec2c9c0d66ae8bdd3b469491))
- **PageLeave:** Support leave reminder when the tab is not cached ([1d70e03](https://github.com/bhuh12/vue-router-tab/commit/1d70e0334b882382edff7c6a506bbbcec9f0e23b)), closes [#116](https://github.com/bhuh12/vue-router-tab/issues/116)
- **vetur:** Provide component syntax hints for Vetur extension ([c78a5b6](https://github.com/bhuh12/vue-router-tab/commit/c78a5b62afdf052768df2f82ec69a922c252d0d3))

### Features

- **pageScroller:** Keep scroll position after tab switching ([958a85d](https://github.com/bhuh12/vue-router-tab/commit/958a85d7d0f317156ab71b7d35fe79a1874fc1ff)), closes [#108](https://github.com/bhuh12/vue-router-tab/issues/108)
- **TabItem:** Click the middle mouse button to close the tab ([ef673b5](https://github.com/bhuh12/vue-router-tab/commit/ef673b5dff481795f9c37126d94a3cbb3ee123cb)), closes [#118](https://github.com/bhuh12/vue-router-tab/issues/118)

## [1.2.5](https://github.com/bhuh12/vue-router-tab/compare/v1.2.4...v1.2.5) (2021-03-26)

### Bug Fixes

- **DragSort:** Fixed that a new tab will be opened after dragging and sorting the router tab in the Firefox browser ([b5134cb](https://github.com/bhuh12/vue-router-tab/commit/b5134cbd2b2036b2c1d1584da10bb67fc2a8c143))

## [1.2.4](https://github.com/bhuh12/vue-router-tab/compare/v1.2.3...v1.2.4) (2021-01-23)

### Bug Fixes

- **routerAlive:** Fix that the hot reload does not take effect after the dom node of the page component is modified ([85912a9](https://github.com/bhuh12/vue-router-tab/commit/85912a964374fc8bc77a29f493dadf7643fd3b7e))

## [1.2.3](https://github.com/bhuh12/vue-router-tab/compare/v1.2.2...v1.2.3) (2021-01-09)

### Bug Fixes

- Use jsx to generate TabItem template to solve Vue 2.5.22 version TabItem error ([48c6065](https://github.com/bhuh12/vue-router-tab/commit/48c60656f0f086355d170ceb5f21adb469df4ff0))
- **scroll:** Fix that the tab cannot be scrolled on some mobile devices ([06b12a2](https://github.com/bhuh12/vue-router-tab/commit/06b12a2622487335bd8a90f0e33c7c603ddf02ff))

### Features

- **lang:** Automatically recognize component language according to browser language ([67a3c26](https://github.com/bhuh12/vue-router-tab/commit/67a3c260393e97d5fccaa63586ca39f961cf94d5))

## [1.2.2](https://github.com/bhuh12/vue-router-tab/compare/v1.2.1...v1.2.2) (2020-11-28)

### Bug Fixes

- **iframe:** Fix the vulnerability of Base64 XSS attack ([665b897](https://github.com/bhuh12/vue-router-tab/commit/665b897a898d7fab38505acbedd6f495dffbf5b6))
- **scroll:** Fix the error caused by not getting the current tab when scrolling and adjusting the tab ([61e3a95](https://github.com/bhuh12/vue-router-tab/commit/61e3a95dee9313e62320b30f126224cc96986bbc))

## [1.2.1](https://github.com/bhuh12/vue-router-tab/compare/v1.2.0...v1.2.1) (2020-10-17)

### Bug Fixes

- **iframe:** Fix the problem of iframe tab loading failure due to undecoded url in vue-router 3.4.6 params ([9ff5d16](https://github.com/bhuh12/vue-router-tab/commit/9ff5d1687abc5676c8301efc0a0302bfd2bb5359))
- **RouteMatch:** Fix an error when matching the root path `basePath` of external routing ([f6073d3](https://github.com/bhuh12/vue-router-tab/commit/f6073d39e16a25e0600868d6411f28cdc4e2dff7))

## [1.2.0](https://github.com/bhuh12/vue-router-tab/compare/v1.1.0...v1.2.0) (2020-08-22)

### Bug Fixes

- **contextmenu:** Contextmenu Optimize ([0088b63](https://github.com/bhuh12/vue-router-tab/commit/0088b637b29b4f5c1f928e0e7d14f713917d5706))
- Fixed that RouterTab does not adjust to the current tab position when the browser forward or backward in history and RouterTab restores the tab ([66bf4c1](https://github.com/bhuh12/vue-router-tab/commit/66bf4c12a576ee7ad6bc7f3b4540091e4cfceb4a))
- Fixed that the contextmenu does not display when the cache key is a empty string ([f9448de](https://github.com/bhuh12/vue-router-tab/commit/f9448decc310fcd404cdde0fc1abdcb675bf73bc))

### Code Refactoring

- **lang:** The language configuration is changed from `language` to `lang` ([8866760](https://github.com/bhuh12/vue-router-tab/commit/8866760839fa5f71ab7649f0e868b0e05c5c966c))

### Features

- Nuxt supports configuring tabs from the page meta ([02daa90](https://github.com/bhuh12/vue-router-tab/commit/02daa9068c73ad9accb7ae89826c611d287e9c5c))
- New configuration item: `append`, insert position of the new tab ([458fc34](https://github.com/bhuh12/vue-router-tab/commit/458fc34489b7276200e8dd51ba0f3a9a9de92174))
- **dragsort:** Tabs drag sort ([479bfcd](https://github.com/bhuh12/vue-router-tab/commit/479bfcd0cc1b46968e13e68d3e2d7fac0a56718a))

### BREAKING CHANGES

- **lang:** The language configuration is changed from `language` to `lang`

## [1.1.0](https://github.com/bhuh12/vue-router-tab/compare/v1.0.2...v1.1.0) (2020-07-30)

### Code Refactoring

- Global `$routerTab` is changed to `$tabs` ([6edc214](https://github.com/bhuh12/vue-router-tab/commit/6edc214a21b83fe2f23627bcdfb0318ba4c10ed1))

### Features

- **contextmenu:** Custom contextmenu support ([d475ebe](https://github.com/bhuh12/vue-router-tab/commit/d475ebeeade5ee95cda9a3b3636031a8963ac4c2))
- **beforePageLeave** Support browser `beforeunload` event ([5d57e60](https://github.com/bhuh12/vue-router-tab/commit/5d57e60e50017a913fd3b7c3950f7c4160c40492))

### BREAKING CHANGES

- Global access to the RouterTab component `this.$routerTab` has been deprecated and changed to `this.$tabs`
- `beforePageLeave` deprecate the parameters `resolve`, `reject`, return a promise to allow or prevent the tab page from leaving

## [1.0.0](https://github.com/bhuh12/vue-router-tab/compare/v1.0.0-alpha.5...v1.0.0) (2020-06-28)

### Code Refactoring

- Style refactoring, remove left and right tab scroll buttons ([a17543a](https://github.com/bhuh12/vue-router-tab/commit/a17543a8e4f3e82890a292c46f1185a6a8d21217))

- **iframe:** Remove `openIframeTab`, `closeIframeTab`, `refreshIframeTab` methods ([87d0d77](https://github.com/bhuh12/vue-router-tab/commit/87d0d770a0b85a9e146023d74ca3f3d737b686c6))

### Features

- **RouterAlive:** RouterAlive component is refactored using keep-alive + router-view ([ac3a04d](https://github.com/bhuh12/vue-router-tab/commit/ac3a04df2055e673ea5e16993de5df1d4452d9b8))
- **scroll:** Add tab scroll component ([620d17e](https://github.com/bhuh12/vue-router-tab/commit/620d17e2a026511682ebf3ab6e4b1bd418a88a31))-
- **slot:** New Slots: `start` and `end` ([34d8542](https://github.com/bhuh12/vue-router-tab/commit/34d85421815f71364c1f8df157d1dbb95798c3e3))
- **tab:** Mew route meta option: `closable` and `tabClass` ([b6c92fb](https://github.com/bhuh12/vue-router-tab/commit/b6c92fbb11939c7df84b8c1d77faa48bf17589d8))

### Performance Improvements

- Cached nested pages are not updated, use `$forceUpdate` ([a85a51e](https://github.com/bhuh12/vue-router-tab/commit/a85a51e446b9fca7ca962e9b43369f06cf88bd53))
- **RouterAlive:** Match page route depth by `$vnode.data.routerViewDepth` ([c0dce87](https://github.com/bhuh12/vue-router-tab/commit/c0dce87278f213c90121bbd51cd322385e003d86))

### BREAKING CHANGES

- Component node class change
- **tab:** Tab slot scope variable changes
- **iframe:** Remove `openIframeTab`, `closeIframeTab`, `refreshIframeTab` methods
- **RouterAlive:**
  1. Simplify the close method arguments: `close(path, to)`
  2. Deprecated options：`alive-id`、`router-view`
  3. Change meta option `aliveId` to `key`
  4. Deprecated routing page mark `_isRouterPage`

## [0.2.9](https://github.com/bhuh12/vue-router-tab/compare/v0.2.8...v0.2.9) (2019-11-20)

### Bug Fixes

- **operate:** adopt fuzzy matching when force-new opening tabs in case that subtle distinction in route path might prevent force reloading ([150f112](https://github.com/bhuh12/vue-router-tab/commit/150f11220d38b63e1cae82a7996614f652570c06))

## [0.2.8](https://github.com/bhuh12/vue-router-tab/compare/v0.2.7...v0.2.8) (2019-11-15)

### Bug Fixes

- **operate:** fix errors with closing tabs in a way of `close(path, to, match, force)` under IE 11, which is due to the uncompatibility of destructuring assignment ([acb7e7a](https://github.com/bhuh12/vue-router-tab/commit/acb7e7a29bd2855b26e193d92b0b82e483a20402))

### Code Refactoring

- instance property `activedTab` was renamed to `activeTabId`; add computed property `activeTab` ([4aea0b1](https://github.com/bhuh12/vue-router-tab/commit/4aea0b1a26d6666272a4676b8d4b113d6461d734))

### Features

- **restore:** add option `restore-watch` to restore tab content on `restore` change ([d040b23](https://github.com/bhuh12/vue-router-tab/commit/d040b23e3f899dd0791f5185d7580b14acf5f01c))

### BREAKING CHANGES

- instance property `activedTab` was renamed to `activeTabId`

## [0.2.7](https://github.com/bhuh12/vue-router-tab/compare/v0.2.6...v0.2.7) (2019-10-28)

### Features

- **restore:** reopen tabs on page reload ([710ba70](https://github.com/bhuh12/vue-router-tab/commit/710ba70678396975dcd33081d75014bf81c8401a))

## [0.2.6](https://github.com/bhuh12/vue-router-tab/compare/v0.2.5...v0.2.6) (2019-10-15)

### Bug Fixes

- **iframe:** prevent XSS attack through iframe ([3745813](https://github.com/bhuh12/vue-router-tab/commit/3745813cae029847d3f41df81a745fb1bff3d353))

## [0.2.5](https://github.com/bhuh12/vue-router-tab/compare/v0.2.4...v0.2.5) (2019-10-12)

### Bug Fixes

- **operate:** fix errors with default tab jumping after tab closed ([d30e302](https://github.com/bhuh12/vue-router-tab/commit/d30e302fdfe3d435a5a530abc7dc0d32d5c6e518))

## [0.2.4](https://github.com/bhuh12/vue-router-tab/compare/v0.2.3...v0.2.4) (2019-09-30)

### Features

- **operate:** add `open` method for tab operations; update parameters for `close`; update docs ([3bf8c0a](https://github.com/bhuh12/vue-router-tab/commit/3bf8c0ab6df0bff2d55d2d41682fb5c9638d82b4))

## [0.2.3](https://github.com/bhuh12/vue-router-tab/compare/v0.2.2...v0.2.3) (2019-09-20)

### Features

- **close:** you could now designate a route to jump to after tab closed ([cab0d35](https://github.com/bhuh12/vue-router-tab/commit/cab0d35165a8102f6b0889f3c2352deb5e044ccd))
- **reset:** add `reset` for restoring RouterTab to initial state ([95ef4df](https://github.com/bhuh12/vue-router-tab/commit/95ef4df398c9b1e9ceec6b79acbc1f39bba358d8))

## [0.2.2](https://github.com/bhuh12/vue-router-tab/compare/v0.2.1...v0.2.2) (2019-09-07)

### Bug Fixes

- **nest:** force reload when content doesn't match route path, which is caused by the nested routes cache ([a21d507](https://github.com/bhuh12/vue-router-tab/commit/a21d5075e0532fed495bf346c62c74957b9eda1c))

## [0.2.1](https://github.com/bhuh12/vue-router-tab/compare/v0.2.0...v0.2.1) (2019-09-04)

### Features

- **iframe:** add events for RouterTab: `iframe-mounted` and `iframe-loaded` ([40387df](https://github.com/bhuh12/vue-router-tab/commit/40387df0d98c32eee9de669dcf69f625442d12ec))

### Performance Improvements

- **router-alive:** clear cache and data on destroy ([ab4bfd4](https://github.com/bhuh12/vue-router-tab/commit/ab4bfd4838b770b7af96e345e7da89bcc217adb1))

# [0.2.0](https://github.com/bhuh12/vue-router-tab/compare/v0.1.10...v0.2.0) (2019-07-10)

### Features

- **nest:** support nested routes now ([cda723d](https://github.com/bhuh12/vue-router-tab/commit/cda723dc36ae4d497e6140e39c313ccc544e5181)), closes [#7](https://github.com/bhuh12/vue-router-tab/issues/7)

## [0.1.10](https://github.com/bhuh12/vue-router-tab/compare/v0.1.9...v0.1.10) (2019-07-10)

### Bug Fixes

- **style:** `router-tab` now has a min-height of 300px ([f4971ed](https://github.com/bhuh12/vue-router-tab/commit/f4971eda65986bdd7fe6c14035f001c4986f86ba)), closes [#9](https://github.com/bhuh12/vue-router-tab/issues/9)
- **style:** remove ElementUI classname from icons for tab scrollbar buttons ([1404a7f](https://github.com/bhuh12/vue-router-tab/commit/1404a7fc92ebfc18d594fe5b0c7d64437cdd5f8b)), closes [#12](https://github.com/bhuh12/vue-router-tab/issues/12)

## [0.1.9](https://github.com/bhuh12/vue-router-tab/compare/v0.1.8...v0.1.9) (2019-07-10)

### Code Refactoring

- **i18n:** rename property `i18n` to `language` ([80920f0](https://github.com/bhuh12/vue-router-tab/commit/80920f046da44d3b545e6395b3da2d240887a963))

### Features

- **i18n:** ([7fb6d50](https://github.com/bhuh12/vue-router-tab/commit/7fb6d50e0d3beaf82b91950fdb27f54b6ed21b60)), closes [#6](https://github.com/bhuh12/vue-router-tab/issues/6)

### BREAKING CHANGES

- **i18n:** rename property `i18n` to `language`

## [0.1.8](https://github.com/bhuh12/vue-router-tab/compare/v0.1.7...v0.1.8) (2019-07-10)

### Bug Fixes

- **contextmenu:** fix errors with transitions ([d97f172](https://github.com/bhuh12/vue-router-tab/commit/d97f172a430c1ceeb79d39adc4190e4e5fc3868e))

### Features

- **iframe:** use iframes for external websites ([5d8d93b](https://github.com/bhuh12/vue-router-tab/commit/5d8d93bfde4d287431767b8d2cda4c40c1c47126)), closes [#3](https://github.com/bhuh12/vue-router-tab/issues/3)

## [0.1.7](https://github.com/bhuh12/vue-router-tab/compare/v0.1.6...v0.1.7) (2019-07-10)

### Bug Fixes

- **contextmenu:** fix errors with menu's position and tab header's height under IE 11 ([cc4a521](https://github.com/bhuh12/vue-router-tab/commit/cc4a521e46ccc744d7f6c8b4ad980e2446be3487))

## [0.1.6](https://github.com/bhuh12/vue-router-tab/compare/v0.1.5...v0.1.6) (2019-07-10)

### Features

- built-in `fullPath` matching rule, add corresponding docs and demos ([dc6a718](https://github.com/bhuh12/vue-router-tab/commit/dc6a7183cca74dd7b4918346ac068a85ecc3271a))

## [0.1.5](https://github.com/bhuh12/vue-router-tab/compare/v0.1.4...v0.1.5) (2019-07-10)

## [0.1.4](https://github.com/bhuh12/vue-router-tab/compare/v0.1.3...v0.1.4) (2019-07-10)

### Performance Improvements

- **style:** update default transitions of routerTab ([b5053f0](https://github.com/bhuh12/vue-router-tab/commit/b5053f0120714c2224a1006b624f716b20dc1cb1))

## [0.1.3](https://github.com/bhuh12/vue-router-tab/compare/v0.1.2...v0.1.3) (2019-07-10)

### Bug Fixes

- unable to close or reload relative paths ([6302203](https://github.com/bhuh12/vue-router-tab/commit/63022030e35d0866ade177905be62fc70cb67bad))

## [0.1.2](https://github.com/bhuh12/vue-router-tab/compare/v0.1.1...v0.1.2) (2019-07-10)

## [0.1.1](https://github.com/bhuh12/vue-router-tab/compare/a2f444dda5effae5f7410b8075e20e055e8917dc...v0.1.1) (2019-07-10)

### Bug Fixes

- tab content results in blank on rapid switching ([6b24430](https://github.com/bhuh12/vue-router-tab/commit/6b244305f91dded9addc3b40df59d3e350ac9b27))

### Features

- add operations `close` and `refresh` on route path, `closeTab` and `refreshTab` on tab id ([bb86e66](https://github.com/bhuh12/vue-router-tab/commit/bb86e66c908ad55347b093ed1a27bffd1809fc6a))
- **i18n:** ([416af48](https://github.com/bhuh12/vue-router-tab/commit/416af48f022b93c251deb55e6f765fe9cfe86cbf))
- add `Router Tab` component ([a2f444d](https://github.com/bhuh12/vue-router-tab/commit/a2f444dda5effae5f7410b8075e20e055e8917dc))

### Performance Improvements

- use `promise` in place of `async/await` to cut down bundle size. ([fe5870b](https://github.com/bhuh12/vue-router-tab/commit/fe5870b62dc939276054b2188c43e6455055198d))
