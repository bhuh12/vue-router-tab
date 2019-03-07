<template>
  <div class="doc-links">
    <router-link v-if="api" :to="'/api.html'+ api">查看API</router-link>
    <demo-link v-if="demo" :href="demo">Demo演示</demo-link>
  </div>
</template>

<script>
// 演示链接
export default {
  props: {
    api: String,
    demo: String
  }
}
</script>

<style lang="stylus" scoped>
.doc-links
  float right
  margin-top -5px
  padding 5px 1em
  background-color #f7f7f7
  border-radius 2em

  > a
    margin-right 1em

    &:last-child
      margin-right 0
</style>

