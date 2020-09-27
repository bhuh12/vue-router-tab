# 初始展示页签

通过配置 RouterTab 组件的 `tabs` 属性，可以设置进入页面时默认显示的页签。

::: warning
Nuxt 项目中，页签的配置如果来自于页面 `meta`，将无法自动获取未激活页签的配置。因此，这种场景不能仅通过 `fullpath` 方式配置初始页签。
:::

<doc-links api="#tabs" demo="/initial-tabs/" />

**示例：**

<<< @/src/components/frames/InitialTabs.vue

<!-- {2,10,12,15,18,22,30,34} -->
