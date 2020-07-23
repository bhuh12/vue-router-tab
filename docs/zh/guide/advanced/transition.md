# 过渡效果

您可以通过配置 RouterTab 组件的 `tab-transition` 和 `page-transition` 属性，分别替换默认的**页签**和**页面**过渡效果

::: warning

- 如果是组件作用域内的 CSS(配置了 `scoped`)，需要在选择器前添加 `>>>`、 `/deep/` 或 `::v-deep` 才能生效

- 页签项 `.router-tab-item` 默认设置了 `transition` 和 `transform-origin` 的样式，您可能需要覆盖它已避免影响到自定义的过渡效果

:::

<doc-links api="#tab-transition" demo="/transition/" />

**示例：**

<<< @/src/components/frames/Transition.vue

<!-- {2,6,8,21} -->

### 详细配置

您还可以使用对象的方式设置 `tab-transition` 和 `page-transition` 的值，以实现详细的过渡效果配置

> 配置参考: [Vue - transition](https://cn.vuejs.org/v2/api/#transition)

```html
<router-tab
  :tab-transition="{
    name: 'my-transition',
    'enter-class': 'my-transition-enter'
  }"
/>
```
