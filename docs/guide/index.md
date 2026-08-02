# 介绍

Vue Router Tab 是基于 Vue 3 和 Vue Router 的路由页签组件，用来实现多页签页面的管理。

<DocLinks :demo="DEMO_ROUTES.Default" />

<script setup>
import { DEMO_ROUTES } from '../.vitepress/demoRoutes'
</script>

## 包含的功能

✅ 响应路由变化来打开或切换页签

✅ 页签过多鼠标滚轮滚动

✅ 页签拖拽排序

✅ 支持页签打开、切换、关闭、刷新、重置等[操作](./essentials/operate)

✅ [Iframe 页签](./essentials/iframe)嵌入外部网站

✅ 组件个性化设置：[过渡效果](./custom/transition)、[自定义插槽](./custom/slot)、[页签右键菜单](./custom/contextmenu)

✅ [多语言支持](./custom/i18n)

✅ 页签切换后[保留滚动位置](./custom/scroll)

✅ [CSS 变量主题定制](./custom/theme)

✅ [缓存控制](./advanced/cache)：页签规则、页签是否缓存、最大缓存数、是否复用组件等

✅ [动态页签信息](./advanced/dynamic-tab-info)：标题、图标、提示

✅ [初始页签数据](./advanced/initial-tabs)，进入页面时默认显示的页签

✅ [页签刷新还原](./advanced/restore)，在浏览器刷新后恢复页签

✅ [页面离开前确认](./advanced/page-leave)

✅ [多实例](./advanced/multi-instance)，同一应用注册多个独立页签实例

## 环境要求

| 依赖         | 版本         |
| ------------ | ------------ |
| `vue`        | `^3.5.0`     |
| `vue-router` | `^4 \|\| ^5` |

组件使用组合式 API 实现，仅支持 Vue 3。Vue 2 项目请使用 v1 版本。

::: warning 不支持 Nuxt
暂不支持 Nuxt，详见 [Nuxt 说明](./essentials/nuxt)。
:::
