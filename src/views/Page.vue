<template>
  <div class="app-page">
    <h2 @click="click">RouterTab 实例页</h2>
    <p>你在<strong>{{pageTime}}</strong>秒前打开本页面</p>
    <input type="text">
    <dl>
      <dt>name</dt>
      <dd>{{$route.name}}</dd>
      <dt>path</dt>
      <dd>{{$route.path}}</dd>
      <dt>params</dt>
      <dd>{{$route.params}}</dd>
      <dt>query</dt>
      <dd>{{$route.query}}</dd>
      <dt>hash</dt>
      <dd>{{$route.hash}}</dd>
      <dt>fullPath</dt>
      <dd>{{$route.fullPath}}</dd>
    </dl>
  </div>
</template>

<style lang="scss" scoped>
.app-page {
  dt {
    float: left;
    width: 150px;
    font-weight: 700;
  }

  dd {
    min-height: 1.5em;
  }
}
</style>

<script>
import pageTimer from '@/mixins/pageTimer'

export default {
  name: 'Page',
  mixins: [ pageTimer ],
  data () {
    return {
      routerTab: {
        title: '页面' + this.$route.params.id
      }
    }
  },

  methods: {
    click () {
      console.log('aaa')
    }
  }
}
</script>
