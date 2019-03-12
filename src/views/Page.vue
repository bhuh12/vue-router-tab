<template>
  <div class="app-page">
    <h2 @click="click">页面{{pageId}}</h2>

    <p>你在 <strong class="text-strong">{{pageTime}}</strong> 秒前打开本页面</p>

    <h3>页签操作</h3>

    <p>
      <router-link class="demo-btn" :to="'../page/'+ nextId">打开“页面{{nextId}}”</router-link>
    </p>

    <p v-if="prevId > 0">
      <router-link class="demo-btn" :to="'../page/'+ prevId">打开“页面{{prevId}}”</router-link>

      <router-link
        class="demo-btn"
        :to="'../page/'+ prevId"
        @click.native="$routerTab.refresh('../page/'+ prevId)"
      >
        全新打开“页面{{prevId}}”
      </router-link>
    </p>

    <p>
      <a class="demo-btn" @click="$router.push('../tab-dynamic')">打开“动态更新页签”</a>

      <a class="demo-btn" @click="$routerTab.close('../tab-dynamic')">关闭“动态更新页签”</a>
    </p>

    <p>
      <a class="demo-btn" @click="$routerTab.refresh()">刷新当前页面</a>

      <a class="demo-btn" @click="$routerTab.close()">关闭当前页面</a>
    </p>

    <div>
      <input type="text" />
    </div>

    <h3>路由信息</h3>

    <page-route-info/>
  </div>
</template>

<script>
import pageTimer from '@/mixins/pageTimer'
import PageRouteInfo from '@/components/PageRouteInfo'

export default {
  name: 'Page',
  mixins: [ pageTimer ],
  components: { PageRouteInfo },
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
