<template>
  <div>
    <h2 @click="click">
      页面{{ pageId }}
    </h2>

    <page-timer />

    <h3>页签操作</h3>

    <p>
      <router-link class="demo-btn" :to="'../page/'+ nextId">
        打开“页面{{ nextId }}”
      </router-link>

      <a
        class="demo-btn"
        @click="$routerTab.open('../page/'+ nextId, true)"
      >
        全新打开“页面{{ nextId }}”
      </a>
    </p>

    <p v-if="prevId > 0">
      <router-link class="demo-btn" :to="'../page/'+ prevId">
        打开“页面{{ prevId }}”
      </router-link>

      <a
        class="demo-btn"
        @click="$routerTab.open('../page/'+ prevId, true)"
      >
        全新打开“页面{{ prevId }}”
      </a>
    </p>

    <p>
      <a class="demo-btn" @click="$router.push('../tab-dynamic')">打开“动态更新页签”</a>

      <a class="demo-btn" @click="$routerTab.close('../tab-dynamic')">关闭“动态更新页签”</a>
    </p>

    <p>
      <a class="demo-btn" @click="$routerTab.refresh()">刷新当前页面</a>

      <a class="demo-btn" @click="$routerTab.close()">关闭当前页面</a>
    </p>

    <p>
      <a class="demo-btn" @click="$routerTab.refreshAll()">刷新所有页面</a>

      <a class="demo-btn" @click="$routerTab.reset()">重置页签</a>
    </p>

    <iframe-operate />

    <h3>路由信息</h3>

    <page-route-info />
  </div>
</template>

<script>
import PageTimer from '../components/PageTimer'
import PageRouteInfo from '../components/PageRouteInfo'
import IframeOperate from './IframeOperate'

export default {
  name: 'Page',
  components: { PageTimer, PageRouteInfo, IframeOperate },
  data () {
    let id = this.$route.params.id
    let isI18nPage = this.$route.fullPath.indexOf('/i18n/') > -1
    return {
      pageId: id,
      nextId: +id + 1,
      prevId: +id - 1,
      routeTab: {
        title: isI18nPage
          ? ['page', id]
          : '页面' + id
      }
    }
  },

  methods: {
    click () {
      console.log(`页面${this.pageId}`)
    }
  }
}
</script>
