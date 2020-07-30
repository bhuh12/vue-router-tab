# 动态页签

RouterTab 会监听组件 `this.routeTab` 来动态更新页签信息。您可以通过设置 `this.routeTab` 来更改页签的标题、图标、提示。

<doc-links demo="/default/tab-dynamic" />

## 通过 computed 计算属性（推荐）

**示例：**

```javascript {13,14,17,24}
export default {
  name: 'GoodsDetail',
  data() {
    return {
      goods: {
        goodsName: '商品名',
        goodsDesc: '商品简介'
      }
    }
  },
  computed: {
    // 通过计算属性更新页签
    routeTab() {
      // 1. 只更新页签标题
      return `商品-${this.goods.goodsName}`

      // 2. 更新多个页签信息
      return {
        title: `商品-${this.goods.goodsName}`,
        icon: 'el-icon-goods',
        tips: this.goods.goodsDesc
      }

      // 3. 国际化页签标题
      return {
        // 以数组方式定义带参数列表的国际化，格式：['i18nKey', ...params]
        title: ['routerTab.goods', this.goods.goodsName]
      }
    }
  }
}
```

## 通过 data 响应数据

**示例：**

```javascript {9,15}
export default {
  name: 'GoodsDetail',
  data() {
    return {
      goods: {
        goodsName: '商品名',
        goodsDesc: '商品简介'
      },
      routeTab: null // routeTab 存放在 data 中以支持响应
    }
  },
  mounted() {
    setTimeout(() => {
      // 异步结束后更新页签
      this.routeTab = {
        title: `商品-${this.goods.goodsName}`,
        icon: 'el-icon-goods',
        tips: this.goods.goodsDesc
      }
    }, 300)
  }
}
```

## 通过路由 meta 配置

**示例：**

```javascript {5}
const route = {
  path: '/my-page/:id',
  component: MyPage,
  meta: {
    title: route => `页面${route.params.id}`
  }
}
```
