# Dynamic update

RouterTab will monitor the component `this.routeTab` to dynamically update the tab information. You can change the title, icon, and prompt of the tab by setting `this.routeTab`

<doc-links demo="/default/tab-dynamic"></doc-links>

**Example**

```javascript {7,15,18,27}
export default {
  name: 'goods',
  data() {
    return {
      goodsName: 'Product name',
      goodsDesc: 'Product description',
      routeTab: null // routeTab store data for response
    }
  },
  mounted() {
    setTimeout(() => {
      let { id } = this.$route.params

      //Only update tab title
      this.routeTab = `Page ${id} dynamic title`

      // Update tab object
      this.routeTab = {
        title: `Product-${this.goodsName}`,
        icon: 'el-icon-goods',
        tips: this.goodsDesc
      }

      // International tab title
      this.routeTab = {
        // Define the internationalization with parameter list as an array, the format: ['i18nKey', ...params]
        title: ['routerTab.goods', this.goodsName]
      }
    }, 300)
  }
}
```
