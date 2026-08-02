# 卸载组件

相对于单页应用，多页签框架为跨页操作带来了更好的体验，但也意味着更复杂的交互场景。如果项目不再需要 RouterTab，按以下步骤移除。

## 一、替换命令式调用

批量查找 `useRouterTab()` 取到的实例调用，参考下表替换为原生 Vue Router：

| 方法                                                          | 说明               | 替换方案                                                                                                                       |
| ------------------------------------------------------------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `tabs.open`                                                   | 全新打开页签       | `router.push(path)`                                                                                                            |
| `tabs.close`                                                  | 关闭页签并跳转     | `router.replace(path)`                                                                                                         |
| `tabs.refresh` / `tabs.refreshAll` / `tabs.refreshTab`        | 刷新页签           | 组件内部自行提供刷新数据的方法                                                                                                 |
| `tabs.reset`                                                  | 重置到默认或指定页 | `router.replace(path)`                                                                                                         |
| `tabs.reload`                                                 | 重载当前视图       | 组件内部自行提供刷新方法                                                                                                       |
| `tabs.adjust`                                                 | 重算页签滚动       | 无需替代（页签栏本身已移除）                                                                                                   |
| `tabs.openIframe` / `tabs.closeIframe` / `tabs.refreshIframe` | iframe 页签相关    | 自行封装 iframe 容器与操作方法                                                                                                 |
| `useRouterPage({ beforePageLeave })`                          | 页面离开确认       | Vue Router 的[组件内守卫](https://router.vuejs.org/zh/guide/advanced/navigation-guards.html#组件内的守卫) `onBeforeRouteLeave` |
| `useRouterPage({ routeTab })`                                 | 动态页签信息       | 无需替代（页签栏本身已移除）                                                                                                   |
| `useRouterPage({ pageScroller })` / `restoreScroll()`         | 滚动位置记忆       | 自行用 `onActivated` / `onDeactivated` 实现，或依赖浏览器原生滚动恢复                                                          |

## 二、去除组件

1. 用 `<router-view>` 替换布局中的 `<RouterTab>`。

2. 参考[入门](../essentials/#路由配置)反向操作，移除：
   - 入口文件里的 `app.use(RouterTab)` 与样式引入 `import 'vue-router-tab/dist/index.css'`
   - 路由配置里注入的 `RouterTabRoutes`
   - 路由 `meta.routerTab` 里的页签配置字段（`title` / `key` / `keepAlive` 等，视业务需要决定是否保留 `title` 等字段供其他用途）

3. 移除依赖：

   ```bash
   pnpm remove vue-router-tab
   ```

## 三、调整页面交互方式

改为单页方式意味着不再支持跨页操作。原来靠切换页签完成的流程，需要改造为单页内部的交互，比如：

- 弹窗 / 抽屉：临时展示的表单、详情
- 路由 tab（不缓存）：仍需要 URL 区分状态，但不需要多页签管理
- 页面内部状态切换：不涉及路由变化的场景，用组件内部的 `ref` / `reactive` 控制展示

选择哪种方式取决于原页签承载的具体业务场景，没有通用方案。
