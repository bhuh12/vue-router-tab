# Transition

You can change the default page and tab transitions by adding the `tab-transition` and `page-transition` attributes to your `router-tab`

::: warning

- If the scope of the CSS component (configured `scoped`), you need to add `>>>` / `/deep/` or `::v-deep` before the selectors

- The .router-tab-item sets the `transition` and `transform-origin` styles by default, you may need to override it to avoid affecting the custom transition effect

:::

<doc-links api="#tab-transition" demo="/transition/" />

**Example:**

```html {2,6,8,21}
<template>
  <router-tab page-transition="page-fade" tab-transition="tab-scale" />
</template>

<style lang="scss" scoped>
  ::v-deep {
    // Page fade transition
    .page-fade {
      &-enter-active,
      &-leave-active {
        transition: opacity 0.5s;
      }

      &-enter,
      &-leave-to {
        opacity: 0;
      }
    }

    // Tab scale transition
    .tab-scale {
      &-enter-active,
      &-leave-active {
        transition: opacity 0.5s, transform 0.5s;
      }

      &-enter,
      &-leave-to {
        opacity: 0;
        transform: scale(1.5);
      }
    }
  }
</style>
```

### Detailed configuration

You can also use the provided object `tab-transition` and `page-transition` value, in order to achieve a detailed configuration of transition effects

> Configuration reference: [Vue - transition](https://vuejs.org/v2/api/#transition)

```html
<router-tab
  :tab-transition="{
    name: 'my-transition',
    'enter-class': 'my-transition-enter'
  }"
/>
```
