# Introduction

A tab router component based on Vue Router.

### Features

✅ Open or switch to tabs responding to route change

✅ Support context menu on tabs

✅ [Route Matching](essentials/rule.md)

✅ Built-in [Transition](advanced/transition.md): support custom configuration

✅ [Custom Tab Template](advanced/slot.md)

✅ [Initial Tabs](advanced/initial-tabs.md): initially opened tabs when entering page

✅ [Tabs Caching](advanced/restore.md): reopen tabs on page reload

✅ [Reset Tabs](essentials/operate.md#重置页签): reset tabs to initial

✅ [Dynamic Tab Info](advanced/dynamic-tab-info.md) (title/icon/tooltip)

✅ [iframe](essentials/iframe.md): for external website

✅ [Leave Prompt](advanced/page-leave.md)

✅ [i18n](essentials/i18n.md)

### Cons to existing solutions

There is [an existing solution](https://panjiachen.github.io/vue-element-admin-site/guide/essentials/tags-view.html) for multiple tabs on `Vue.js` via `<keep-alive>` and `<router-view>`. It has, however, a few drawbacks due to the usage of `name` property for caching:

1. Hard to configure. `name` must be provided both in components and corresponding route configurations, and guaranteed unique in global.

2. One page component couldn't be reused in separate routes.

3. Releasing tab cache could be complicated. Hooks are required to update tab data.

4. Unable to customize tab display behavior.

There is yet another solution which handles router and cache control by itself instead of Vue Router. It offers a bunch of APIs to operate tabs (e.g., opening and switching), which in practice, will lead to a deep refactoring in existing Vue Router project.

---

### Pros to Vue Router Tab

To solve the problems above, we developed `<router-alive>` to handle tab caching. See [Problems and Solutions](solutions.md)

Even more:

1. Vue Router Tab completely responds to Vue Router. You could take whole benefit from Vue Router and manage tabs in the familiar way, e.g., `<router-link>` and `router.push`.

2. Except Vue.js and Vue Router, there's no extra dependencies.

3. Easy to use. Import, set `route.meta`, and you're good to go.

4. Convenient yet accurate control on tab behavior.

5. Highly customizable.

6. Detailed documentation, code snippets and demos.

---

### Browser compatibility

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari-ios/safari-ios_48x48.png" alt="iOS Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>iOS Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Opera |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| IE10, IE11, Edge                                                                                                                                                                                                | last 2 versions                                                                                                                                                                                                   | last 2 versions                                                                                                                                                                                               | last 2 versions                                                                                                                                                                                               | last 2 versions                                                                                                                                                                                                               | last 2 versions                                                                                                                                                                                           |
