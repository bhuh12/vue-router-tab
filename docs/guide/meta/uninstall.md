# Uninstall

Compared with single-page applications, the multi-tab framework brings a better experience for users to cross-page operations when processing multiple businesses at the same time, but it also makes us deal with more page interaction scenarios, and the code is relatively more complicated.

If your project no longer needs to use RouterTab, you can use the following steps to remove RouterTab.

## 1. Replace `this.$tabs` call

Find all the global calls of `$tabs` in your project, refer to the table below to use the replacement scheme.

| Method                                                             | Description                                          | Alternative Plan                                                                                                                                                      |
| ------------------------------------------------------------------ | ---------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `$tabs.open`                                                       | Newly opened tab                                     | `$router.push(path)`                                                                                                                                                  |
| `$tabs.close`                                                      | Close tab and jump to a new page                     | `$router.replace(path)`                                                                                                                                               |
| `$tabs.refresh`<br>`$tabs.refreshAll`                              | Refresh tab                                          | Provide refresh data method inside the component                                                                                                                      |
| `$tabs.reset`                                                      | Reset tabs and jump to the default or specified page | `$router.replace(path)`                                                                                                                                               |
| `$tabs.openIframe`<br>`$tabs.closeIframe`<br>`$tabs.refreshIframe` | Iframe tab related methods                           | Need to add a global iframe route to embed the page, and encapsulate method to operate the iframe page 面                                                             |
| `beforePageLeave`                                                  | Page leave confirmation                              | `beforeRouteLeave(to, from, next)`<br>Reference：[Vue-Router In-Component Guards](https://router.vuejs.org/guide/advanced/navigation-guards.html#in-component-guards) |

## 2. Remove the `<router-tab>` component

1. Use `<router-view>` to replace `<router-tab>` in the layout frame component

2. Refer to [Getting Started](../essentials/README.md) instructions to remove related codes:

   1. Remove the RouterTab installation code from the entry file

   2. Remove RouterTab built-in routing and tab related configuration from routing configuration file

3. Remove RouterTab dependency

   yarn (recommended):

   ```bash
   yarn remove vue-router-tab
   ```

   你也可以用 npm：

   ```bash
   npm uninstall vue-router-tab
   ```

## 3. Adjust the page interaction

Using single-page mode means that cross-page operations are no longer supported

You need to change the cross-page operations to the internal operations of a single page. You can use UI components such as dialogs, drawers, and subpages.
