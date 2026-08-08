# Uninstalling

Compared to a single-page app, a multi-tab framework provides a better experience for cross-page operations, but it also means more complex interaction scenarios. If your project no longer needs RouterTab, follow these steps to remove it.

## 1. Replace Imperative Calls

Search for all instance calls obtained via `useRouterTab()`, and replace them with native Vue Router equivalents per the table below:

| Method                                                        | Description                      | Replacement                                                                                                                                 |
| ------------------------------------------------------------- | -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| `tabs.open`                                                   | Open a brand new tab             | `router.push(path)`                                                                                                                         |
| `tabs.close`                                                  | Close a tab and navigate away    | `router.replace(path)`                                                                                                                      |
| `tabs.refresh` / `tabs.refreshAll` / `tabs.refreshTab`        | Refresh tabs                     | Provide your own data-refresh method inside the component                                                                                   |
| `tabs.reset`                                                  | Reset to default or a given page | `router.replace(path)`                                                                                                                      |
| `tabs.reload`                                                 | Reload the current view          | Provide your own refresh method inside the component                                                                                        |
| `tabs.adjust`                                                 | Recompute tab bar scroll         | No replacement needed (the tab bar itself is removed)                                                                                       |
| `tabs.openIframe` / `tabs.closeIframe` / `tabs.refreshIframe` | Iframe tab operations            | Implement your own iframe container and operation methods                                                                                   |
| `useRouterPage({ beforePageLeave })`                          | Leave confirmation               | Vue Router's [In-Component Guards](https://router.vuejs.org/guide/advanced/navigation-guards.html#In-Component-Guards) `onBeforeRouteLeave` |
| `useRouterPage({ routeTab })`                                 | Dynamic tab info                 | No replacement needed (the tab bar itself is removed)                                                                                       |
| `useRouterPage({ pageScroller })` / `restoreScroll()`         | Scroll position memory           | Implement it yourself with `onActivated` / `onDeactivated`, or rely on native browser scroll restoration                                    |

## 2. Remove the Component

1. Replace `<RouterTab>` in your layout with `<router-view>`.

2. Following [Getting Started](../essentials/#route-configuration) in reverse, remove:
   - `app.use(RouterTab)` and the style import `import 'vue-router-tab/dist/index.css'` from your entry file
   - `RouterTabRoutes` injected into your route config
   - The tab config fields under route `meta.routerTab` (`title` / `key` / `keepAlive` etc. — decide based on your business needs whether to keep fields like `title` for other purposes)

3. Remove the dependency:

   ```bash
   pnpm remove vue-router-tab
   ```

## 3. Adjust Page Interaction Patterns

Moving to a single-page approach means cross-page operations are no longer supported. Flows that used to rely on switching tabs need to be reworked as in-page interactions, for example:

- Modal / drawer: temporary forms or detail views
- Route-based tabs (uncached): still need the URL to distinguish state, but don't need multi-tab management
- Internal page state switching: scenarios that don't involve route changes, controlled with component-internal `ref` / `reactive`

Which approach to use depends on the specific business scenario the original tabs served — there's no one-size-fits-all solution.
