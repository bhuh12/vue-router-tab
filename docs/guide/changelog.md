# Changelog


## [0.2.9](https://github.com/bhuh12/vue-router-tab/compare/v0.2.8...v0.2.9) (2019-11-20)


### Bug Fixes

* **operate:** adopt fuzzy matching when force-new opening tabs in case that subtle distinction in route path might prevent force reloading ([150f112](https://github.com/bhuh12/vue-router-tab/commit/150f11220d38b63e1cae82a7996614f652570c06))



## [0.2.8](https://github.com/bhuh12/vue-router-tab/compare/v0.2.7...v0.2.8) (2019-11-15)


### Bug Fixes

* **operate:** fix errors with closing tabs in a way of `close(path, to, match, force)` under IE 11, which is due to the uncompatibility of destructuring assignment ([acb7e7a](https://github.com/bhuh12/vue-router-tab/commit/acb7e7a29bd2855b26e193d92b0b82e483a20402))


### Code Refactoring

* instance property `activedTab` was renamed to `activeTabId`; add computed property `activeTab` ([4aea0b1](https://github.com/bhuh12/vue-router-tab/commit/4aea0b1a26d6666272a4676b8d4b113d6461d734))


### Features

* **restore:** add option `restore-watch` to restore tab content on `restore` change ([d040b23](https://github.com/bhuh12/vue-router-tab/commit/d040b23e3f899dd0791f5185d7580b14acf5f01c))


### BREAKING CHANGES

* instance property `activedTab` was renamed to `activeTabId`



## [0.2.7](https://github.com/bhuh12/vue-router-tab/compare/v0.2.6...v0.2.7) (2019-10-28)


### Features

* **restore:** reopen tabs on page reload ([710ba70](https://github.com/bhuh12/vue-router-tab/commit/710ba70678396975dcd33081d75014bf81c8401a))



## [0.2.6](https://github.com/bhuh12/vue-router-tab/compare/v0.2.5...v0.2.6) (2019-10-15)


### Bug Fixes

* **iframe:** prevent XSS attack through iframe ([3745813](https://github.com/bhuh12/vue-router-tab/commit/3745813cae029847d3f41df81a745fb1bff3d353))



## [0.2.5](https://github.com/bhuh12/vue-router-tab/compare/v0.2.4...v0.2.5) (2019-10-12)


### Bug Fixes

* **operate:** fix errors with default tab jumping after tab closed ([d30e302](https://github.com/bhuh12/vue-router-tab/commit/d30e302fdfe3d435a5a530abc7dc0d32d5c6e518))



## [0.2.4](https://github.com/bhuh12/vue-router-tab/compare/v0.2.3...v0.2.4) (2019-09-30)


### Features

* **operate:** add `open` method for tab operations; update parameters for `close`; update docs ([3bf8c0a](https://github.com/bhuh12/vue-router-tab/commit/3bf8c0ab6df0bff2d55d2d41682fb5c9638d82b4))



## [0.2.3](https://github.com/bhuh12/vue-router-tab/compare/v0.2.2...v0.2.3) (2019-09-20)


### Features

* **close:** you could now designate a route to jump to after tab closed ([cab0d35](https://github.com/bhuh12/vue-router-tab/commit/cab0d35165a8102f6b0889f3c2352deb5e044ccd))
* **reset:** add `reset` for restoring RouterTab to initial state ([95ef4df](https://github.com/bhuh12/vue-router-tab/commit/95ef4df398c9b1e9ceec6b79acbc1f39bba358d8))



## [0.2.2](https://github.com/bhuh12/vue-router-tab/compare/v0.2.1...v0.2.2) (2019-09-07)


### Bug Fixes

* **nest:** force reload when content doesn't match route path, which is caused by the nested routes cache ([a21d507](https://github.com/bhuh12/vue-router-tab/commit/a21d5075e0532fed495bf346c62c74957b9eda1c))



## [0.2.1](https://github.com/bhuh12/vue-router-tab/compare/v0.2.0...v0.2.1) (2019-09-04)


### Features

* **iframe:** add events for RouterTab: `iframe-mounted` and `iframe-loaded` ([40387df](https://github.com/bhuh12/vue-router-tab/commit/40387df0d98c32eee9de669dcf69f625442d12ec))


### Performance Improvements

* **router-alive:** clear cache and data on destroy ([ab4bfd4](https://github.com/bhuh12/vue-router-tab/commit/ab4bfd4838b770b7af96e345e7da89bcc217adb1))



# [0.2.0](https://github.com/bhuh12/vue-router-tab/compare/v0.1.10...v0.2.0) (2019-07-10)


### Features

* **nest:** support nested routes now ([cda723d](https://github.com/bhuh12/vue-router-tab/commit/cda723dc36ae4d497e6140e39c313ccc544e5181)), closes [#7](https://github.com/bhuh12/vue-router-tab/issues/7)



## [0.1.10](https://github.com/bhuh12/vue-router-tab/compare/v0.1.9...v0.1.10) (2019-07-10)


### Bug Fixes

* **style:** `router-tab` now has a min-height of 300px ([f4971ed](https://github.com/bhuh12/vue-router-tab/commit/f4971eda65986bdd7fe6c14035f001c4986f86ba)), closes [#9](https://github.com/bhuh12/vue-router-tab/issues/9)
* **style:** remove ElementUI classname from icons for tab scrollbar buttons ([1404a7f](https://github.com/bhuh12/vue-router-tab/commit/1404a7fc92ebfc18d594fe5b0c7d64437cdd5f8b)), closes [#12](https://github.com/bhuh12/vue-router-tab/issues/12)



## [0.1.9](https://github.com/bhuh12/vue-router-tab/compare/v0.1.8...v0.1.9) (2019-07-10)


### Code Refactoring

* **i18n:** rename property `i18n` to `language` ([80920f0](https://github.com/bhuh12/vue-router-tab/commit/80920f046da44d3b545e6395b3da2d240887a963))


### Features

* **i18n:** ([7fb6d50](https://github.com/bhuh12/vue-router-tab/commit/7fb6d50e0d3beaf82b91950fdb27f54b6ed21b60)), closes [#6](https://github.com/bhuh12/vue-router-tab/issues/6)


### BREAKING CHANGES

* **i18n:** rename property `i18n` to `language`



## [0.1.8](https://github.com/bhuh12/vue-router-tab/compare/v0.1.7...v0.1.8) (2019-07-10)


### Bug Fixes

* **contextmenu:** fix errors with transitions ([d97f172](https://github.com/bhuh12/vue-router-tab/commit/d97f172a430c1ceeb79d39adc4190e4e5fc3868e))


### Features

* **iframe:** use iframes for external websites ([5d8d93b](https://github.com/bhuh12/vue-router-tab/commit/5d8d93bfde4d287431767b8d2cda4c40c1c47126)), closes [#3](https://github.com/bhuh12/vue-router-tab/issues/3)



## [0.1.7](https://github.com/bhuh12/vue-router-tab/compare/v0.1.6...v0.1.7) (2019-07-10)


### Bug Fixes

* **contextmenu:** fix errors with menu's position and tab header's height under IE 11 ([cc4a521](https://github.com/bhuh12/vue-router-tab/commit/cc4a521e46ccc744d7f6c8b4ad980e2446be3487))



## [0.1.6](https://github.com/bhuh12/vue-router-tab/compare/v0.1.5...v0.1.6) (2019-07-10)


### Features

* built-in `fullPath` matching rule, add corresponding docs and demos ([dc6a718](https://github.com/bhuh12/vue-router-tab/commit/dc6a7183cca74dd7b4918346ac068a85ecc3271a))



## [0.1.5](https://github.com/bhuh12/vue-router-tab/compare/v0.1.4...v0.1.5) (2019-07-10)



## [0.1.4](https://github.com/bhuh12/vue-router-tab/compare/v0.1.3...v0.1.4) (2019-07-10)


### Performance Improvements

* **style:** update default transitions of routerTab ([b5053f0](https://github.com/bhuh12/vue-router-tab/commit/b5053f0120714c2224a1006b624f716b20dc1cb1))



## [0.1.3](https://github.com/bhuh12/vue-router-tab/compare/v0.1.2...v0.1.3) (2019-07-10)


### Bug Fixes

* unable to close or reload relative paths ([6302203](https://github.com/bhuh12/vue-router-tab/commit/63022030e35d0866ade177905be62fc70cb67bad))



## [0.1.2](https://github.com/bhuh12/vue-router-tab/compare/v0.1.1...v0.1.2) (2019-07-10)



## [0.1.1](https://github.com/bhuh12/vue-router-tab/compare/a2f444dda5effae5f7410b8075e20e055e8917dc...v0.1.1) (2019-07-10)


### Bug Fixes

* tab content results in blank on rapid switching ([6b24430](https://github.com/bhuh12/vue-router-tab/commit/6b244305f91dded9addc3b40df59d3e350ac9b27))


### Features

* add operations `close` and `refresh` on route path, `closeTab` and `refreshTab` on tab id ([bb86e66](https://github.com/bhuh12/vue-router-tab/commit/bb86e66c908ad55347b093ed1a27bffd1809fc6a))
* **i18n:** ([416af48](https://github.com/bhuh12/vue-router-tab/commit/416af48f022b93c251deb55e6f765fe9cfe86cbf))
* add `Router Tab` component ([a2f444d](https://github.com/bhuh12/vue-router-tab/commit/a2f444dda5effae5f7410b8075e20e055e8917dc))


### Performance Improvements

* use `promise` in place of `async/await` to cut down bundle size. ([fe5870b](https://github.com/bhuh12/vue-router-tab/commit/fe5870b62dc939276054b2188c43e6455055198d))



