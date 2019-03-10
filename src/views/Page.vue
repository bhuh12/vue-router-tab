<template>
  <div class="app-page">
    <h2 @click="click">页面{{pageId}}</h2>
    <p>你在<strong>{{pageTime}}</strong>秒前打开本页面</p>

    <h3>页签操作</h3>

    <div class="btn-group">
      <router-link class="btn" :to="'../page/'+ nextId">打开“页面{{nextId}}”</router-link>
    </div>

    <div class="btn-group" v-if="prevId > 0">
      <router-link class="btn" :to="'../page/'+ prevId">打开“页面{{prevId}}”</router-link>

      <router-link
        class="btn"
        :to="'../page/'+ prevId"
        @click.native="$routerTab.refresh('../page/'+ prevId)"
      >
        全新打开“页面{{prevId}}”
      </router-link>
    </div>

    <div class="btn-group">
      <a class="btn" @click="$router.push('../tab-dynamic')">打开“动态更新页签”</a>

      <a class="btn" @click="$routerTab.close('../tab-dynamic')">关闭“动态更新页签”</a>
    </div>

    <div class="btn-group">
      <a class="btn" @click="$routerTab.refresh()">刷新当前页面</a>

      <a class="btn" @click="$routerTab.close()">关闭当前页面</a>
    </div>

    <div>
      <input type="text" />
    </div>

    <h3>路由信息</h3>

    <table class="route-info">
      <tr>
        <th width="80">name</th>
        <td>{{$route.name}}</td>
      </tr>
      <tr>
        <th>path</th>
        <td>{{$route.path}}</td>
      </tr>
      <tr>
        <th>params</th>
        <td>{{$route.params}}</td>
      </tr>
      <tr>
        <th>query</th>
        <td>{{$route.query}}</td>
      </tr>
      <tr>
        <th>hash</th>
        <td>{{$route.hash}}</td>
      </tr>
      <tr>
        <th>fullPath</th>
        <td>{{$route.fullPath}}</td>
      </tr>
    </table>
  </div>
</template>

<style lang="scss" scoped>
.app-page {
  .btn {
    display: inline-block;
    margin-bottom: 1em;
    margin-right: 1em;
    padding: 2px 8px;
    font-size: 14px;
    color: #333;
    text-decoration: none;
    cursor: pointer;
    border-radius: 3px;
    border: 1px solid #ccc;
    transition: all .3s ease;

    &:hover {
      color: $color;
      border-color: $color;
    }

    &:active {
      $activeColor: mix(#000, $color, 20%);
      color: $activeColor;
      border-color: $activeColor;
    }
  }

  .route-info {
    min-width: 300px;
    border-collapse: collapse;

    th, td {
      padding: 5px 8px;
      border: 1px solid #ddd;
    }

    th {
      text-align: left;
      font-weight: 400;
      background-color: #f7f7f7;
    }
  }
}
</style>

<script>
import pageTimer from '@/mixins/pageTimer'

export default {
  name: 'Page',
  mixins: [pageTimer],
  data () {
    let id = this.$route.params.id
    return {
      pageId: id,
      nextId: +id + 1,
      prevId: +id - 1,
      routeTab: {
        title: '页面' + id
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
