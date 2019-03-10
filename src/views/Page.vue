<template>
  <div class="app-page">
    <h2 @click="click">页面{{pageId}}</h2>
    <p>你在<strong>{{pageTime}}</strong>秒前打开本页面</p>

    <h3>页签操作</h3>

    <div class="btn-list">
      <router-link class="btn" :to="'/default/page/'+ nextId">打开“页面{{nextId}}”</router-link>

      <router-link
        class="btn"
        v-if="prevId > 0"
        :to="'/default/page/'+ prevId">
        打开“页面{{prevId}}”
      </router-link>

      <router-link
        class="btn"
        v-if="prevId > 0"
        :to="'/default/page/'+ prevId"
        @click.native="$routerTab.refresh('/default/page/'+ prevId)">刷新并打开“页面{{prevId}}”
      </router-link>

      <router-link class="btn" to="/default/tab-dynamic">打开“动态更新页签”</router-link>

      <a class="btn" @click="$routerTab.close('/default/tab-dynamic')">关闭“动态更新页签”</a>

      <a class="btn" @click="$routerTab.refresh()">刷新当前页面</a>

      <a class="btn" @click="$routerTab.close()">关闭当前页面</a>
    </div>

    <div>
      <input type="text"/>
    </div>

    <h3>路由信息</h3>

    <dl class="route-info">
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
  .btn-list {
    display: inline-flex;
    flex-direction: column;
  }

  .btn {
    display: inline-block;
    margin-bottom: 1em;
    padding: 2px 8px;
    font-size: 14px;
    color: #333;
    text-decoration: none;
    cursor: pointer;
    border-radius: 5px;
    border: 1px solid #ccc;

    &:hover {
      color: $color;
    }
  }

  .route-info {
    dt {
      float: left;
      width: 150px;
      font-weight: 700;
    }

    dd {
      min-height: 1.5em;
    }
  }
}
</style>

<script>
import pageTimer from '@/mixins/pageTimer'

export default {
  name: 'Page',
  mixins: [ pageTimer ],
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
