# 过渡效果

您可以通过配置 `router-tab` 组件的 `tab-transition` 和 `page-transition` 属性，分别替换默认的**页签**和**页面**过渡效果

::: warning
- 如果是组件作用域内的 CSS(配置了 `scoped`)，需要在选择器前添加 `/deep/`才能生效

- 页签项 `.router-tab-item` 默认设置了 `transition` 和 `transform-origin` 的样式，您可能需要覆盖它已避免影响到自定义的过渡效果
:::

<doc-links api="#tab-transition" demo="/transition/"></doc-links>

## 页签过渡效果

``` html {2,6}
<template>
  <router-tab tab-transition="tab-scale"/>
</template>

<style lang="scss" scoped>
/deep/ .tab-scale {
  &-enter-active,
  &-leave-active {
    transition: opacity .5s, transform .5s;
  }

  &-enter,
  &-leave-to {
    opacity: 0;
    transform: scale(1.5);
  }
}
</style>
```

<doc-links api="#page-transition" demo="/transition/"></doc-links>

## 页面过渡效果

``` html {2,6}
<template>
  <router-tab page-transition="page-fade"/>
</template>

<style lang="scss" scoped>
/deep/ .page-fade {
  &-enter-active,
  &-leave-active {
    transition: opacity .5s;
  }

  &-enter,
  &-leave-to {
    opacity: 0;
  }
}
</style>
```

## 详细配置

您还可以使用对象的方式设置 `tab-transition` 和 `page-transition` 的值，以实现详细的过渡效果配置

配置参考: [Vue - transition](https://cn.vuejs.org/v2/api/#transition)

``` html
<router-tab :tab-transition="{
  name: 'my-transition',
  'enter-class': 'my-transition-enter'
}"/>
```
