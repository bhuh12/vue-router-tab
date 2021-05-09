# Scroll Position

By setting the scroll element, the cached tab will maintain the scroll position when it is reactivated.

## Global Scroll Element

When the scroll bar is outside the page node, you can set the global scroll element through the `page-scroller` property of the RouterTab.

The default global scroll element set by RouterTab is `.router-tab__container`, you can also set other scroll elements.

<doc-links api="#page-scroller" demo="/page-scroller/" />

**Example:**

```html {2}
<template>
  <router-tab page-scroller=".global-page-scroller" />
</template>
```

## Page Scroll Element

When the scroll bar is inside the page node, you can set the page scroll element through the page component option `pageScroller`.

<doc-links api="#pagecomp-pagescroller" demo="/page-scroller/scroll-position" />

**Example:**

Only one scroll element.

```javascript {3}
export default {
  name: 'MyPage',
  pageScroller: '.custom-scroller'
}
```

Multiple scroll elements.

```javascript {3}
export default {
  name: 'MyPage',
  pageScroller: ['.custom-scroller-1', '.custom-scroller-2']
}
```

## Async Scrolling

When there is asynchronously loaded content in the page, you can notify RouterTab to restore the scroll position through the page instance `$emit('page-loaded')` after the asynchronous completion.

<doc-links api="#pagecomp-pagescroller" demo="/page-scroller/scroll-async" />

**Example:**

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
