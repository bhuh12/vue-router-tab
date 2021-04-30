<script>
import ScrollPosition from './ScrollPosition.vue'

export default {
  name: 'ScrollAsync',
  extends: ScrollPosition,

  activated() {
    this.list = []
    this.loading = true

    setTimeout(() => {
      this.list = new Array(100)
      this.loading = false
      // 异步加载数据的页面需要在数据加载成功后抛出事件“page-loaded”
      this.$emit('page-loaded')
    }, Math.random() * 1000)
  }
}
</script>
