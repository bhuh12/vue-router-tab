# 移除 RouterTab

相对于单页应用，多页签框架为用户同时处理多个业务时的跨页操作带来了更好的体验，但这也使得我们要处理更多的页面交互场景，代码相对会更加复杂。

如果你的项目不再需要使用 RouterTab，你可以通过下面的步骤来移除 RouterTab。

## 一、替换 `this.$tabs` 调用

批量查找 `$tabs` 全局调用，参考下表使用替换方案。

| 方法                                                               | 说明                       | 替换方案                                                                                                                                                                                        |
| ------------------------------------------------------------------ | -------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `$tabs.open`                                                       | 全新打开页签               | `$router.push(path)`                                                                                                                                                                            |
| `$tabs.close`                                                      | 关闭页签并跳转新页面       | `$router.replace(path)`                                                                                                                                                                         |
| `$tabs.refresh`<br>`$tabs.refreshAll`                              | 刷新页签                   | 组件内部提供刷新数据方法                                                                                                                                                                        |
| `$tabs.reset`                                                      | 重置页签，回到默认或指定页 | `$router.replace(path)`                                                                                                                                                                         |
| `$tabs.openIframe`<br>`$tabs.closeIframe`<br>`$tabs.refreshIframe` | iframe 页签相关方法        | 需要添加全局 iframe 路由用于嵌入页面，并封装方法用于操作 iframe 页面                                                                                                                            |
| `beforePageLeave`                                                  | 页面离开确认               | `beforeRouteLeave(to, from, next)`<br>参考：[Vue-Router 组件内的守卫](https://router.vuejs.org/zh/guide/advanced/navigation-guards.html#%E7%BB%84%E4%BB%B6%E5%86%85%E7%9A%84%E5%AE%88%E5%8D%AB) |

## 二、去除 `<router-tab>` 组件

1. 使用 `<router-view>` 替换布局框架组件内的 `<router-tab>`

2. 参考 [入门](../essentials/README.md) 说明移除相关代码：

   1. 入口文件移除 RouterTab 安装代码

   2. 路由配置文件移除 RouterTab 内置路由和页签相关配置

3. 移除 RouterTab 依赖

   推荐使用 yarn：

   ```bash
   yarn remove vue-router-tab
   ```

   你也可以用 npm：

   ```bash
   npm uninstall vue-router-tab
   ```

## 三、调整页面交互方式

使用单页方式，意味着不再支持跨页操作

你需要将原来切换页签操作的流程，更改为单页内部的操作，可以使用例如弹窗、抽屉、子页面等交互方式。
