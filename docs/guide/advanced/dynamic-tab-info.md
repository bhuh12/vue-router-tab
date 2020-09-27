# Dynamic Update

RouterTab will listen to the component `this.routeTab` to dynamically update the tab info. You can change the title, icon, and tips of the tab by setting `this.routeTab`.

<doc-links demo="/default/tab-dynamic" />

## Computed (recommend)

**Example:**

```javascript  {13,14,17,24}
export default {
  name: 'GoodsDetail',
  data() {
    return {
      goods: {
        goodsName: 'Goods name',
        goodsDesc: 'Goods description'
      }
    }
  },
  computed: {
    // update tab info by computed property
    routeTab() {
      // 1. Only update tab title
      return `Goods-${this.goods.goodsName}`

      // 2. Update tab info
      return {
        title: `Goods-${this.goods.goodsName}`,
        icon: 'el-icon-goods',
        tips: this.goods.goodsDesc
      }

      // 3. International tab title
      return {
        // Define the internationalization with parameter list as an array, the format: ['i18nKey', ...params]
        title: ['routerTab.goods', this.goods.goodsName]
      }
    }
  }
}
```

## Data

**Example:**

```javascript {9,15}
export default {
  name: 'GoodsDetail',
  data() {
    return {
      goods: {
        goodsName: 'Goods name',
        goodsDesc: 'Goods description'
      },
      routeTab: null // routeTab store data for response
    }
  },
  mounted() {
    setTimeout(() => {
      // Update tab info
      this.routeTab = {
        title: `Goods-${this.goodsName}`,
        icon: 'el-icon-goods',
        tips: this.goods.goodsDesc
      }
    }, 300)
  }
}
```

## Route.meta

**Example:**

```javascript {5}
const route = {
  path: '/my-page/:id',
  component: MyPage,
  meta: {
    title: route => `Page ${route.params.id}`
  }
}
```
