# 滚动位置

通过设置滚动元素，已经缓存的页签在重新激活时，将会保持滚动位置。

## 全局滚动元素

当滚动条在页面节点外部时，可以通过 RouterTab 组件的`page-scroller` 属性设置全局滚动元素。

RouterTab 默认设置的全局滚动元素是 `.router-tab__container`, 你也可以设置其它的滚动元素。

<doc-links api="#page-scroller" demo="/page-scroller/" />

**示例：**

```html {2}
<template>
  <router-tab page-scroller=".global-page-scroller" />
</template>
```

## 页面滚动元素

当滚动条在页面节点内部时，可以通过页面组件选项 `pageScroller` 设置页面滚动元素。

<doc-links api="#pagecomp-pagescroller" demo="/page-scroller/scroll-position" />

**示例：**

一个滚动元素

```javascript {3}
export default {
  name: 'MyPage',
  pageScroller: '.custom-scroller'
}
```

多个滚动元素

```javascript {3}
export default {
  name: 'MyPage',
  pageScroller: ['.custom-scroller-1', '.custom-scroller-2']
}
```

## 异步滚动

当页面内有异步加载的内容时，可以在异步完成后，通过页面实例 `$emit('page-loaded')` 来通知 RouterTab 还原滚动位置。

<doc-links api="#pagecomp-pagescroller" demo="/page-scroller/scroll-async" />

**示例：**

```javascript {11}
export default {
  name: 'ScrollAsync',

  data() {
    return { list: [] }
  },

  activated() {
    setTimeout(() => {
      this.list = new Array(100)
      this.$emit('page-loaded')
    }, Math.random() * 1000)
  }
}
```
