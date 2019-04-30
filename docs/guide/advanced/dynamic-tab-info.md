# 动态更新页签

`RouterTab` 会监听组件 `this.routeTab` 来动态更新页签信息。您可以通过设置 `this.routeTab` 来更改页签的标题、图标、提示。

<doc-links demo="/default/tab-dynamic"></doc-links>

**示例：**

``` javascript {7,15,18,27}
export default {
  name: 'goods',
  data () {
    return {
      goodsName: '商品名',
      goodsDesc: '商品简介',
      routeTab: null // routeTab 存放在 data 中以支持响应
    }
  },
  mounted () {
    setTimeout(() => {
      let { id } = this.$route.params

      // 只更新页签标题
      this.routeTab = `页面${id}动态标题`

      // 更新多个页签信息
      this.routeTab = {
        title: `商品-${this.goodsName}`,
        icon: 'el-icon-goods',
        tips: this.goodsDesc
      }

      // 国际化页签标题
      this.routeTab = {
        // 以数组方式定义带参数列表的国际化，格式：['i18nKey', ...params]
        title: ['routerTab.goods', this.goodsName]
      }
      
    }, 300)
  }
}
```
