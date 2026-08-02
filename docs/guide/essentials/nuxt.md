# Nuxt

::: warning 暂不支持 Nuxt
当前版本未适配 Nuxt。页签配置统一走 `meta.routerTab`（见[入门](./)），页面级动态信息走 [`useRouterPage()`](../advanced/dynamic-tab-info)。未适配的原因详见下文 [SSR 的限制](#ssr-的限制)。
:::

## SSR 的限制

页签缓存本身与 SSR 存在冲突：

- 缓存依赖 `KeepAlive` 与客户端组件实例的存活，服务端渲染阶段没有「页签历史」概念
- 页签恢复（`restore`）依赖 `sessionStorage`，服务端不可用
- iframe 页签只能在客户端挂载

因此即便未来适配 Nuxt 3，也只能以**纯客户端插件**方式运行（`ssr: false` 或包在 `<ClientOnly>` 内），这一路径尚未验证。

## 替代方案

需要 SSR 的项目，建议只在后台管理区（通常不需要 SEO 与首屏 SSR）使用页签，将该区域配置为客户端渲染。

如果你在 Nuxt 3 下成功接入，欢迎在 [GitHub Issues](https://github.com/bhuh12/vue-router-tab/issues) 反馈实践方案。
