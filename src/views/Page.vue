<template>
  <div>
    <h2 @click="click">页面{{ pageId }}</h2>

    <page-timer />

    <h3>页签操作</h3>

    <p>
      <router-link class="demo-btn" :to="nextId">
        打开“页面{{ nextId }}”
      </router-link>

      <a class="demo-btn" @click="$tabs.open(nextId, true)">
        全新打开“页面{{ nextId }}”
      </a>
    </p>

    <p v-if="prevId > 0">
      <router-link class="demo-btn" :to="prevId">
        打开“页面{{ prevId }}”
      </router-link>

      <a class="demo-btn" @click="$tabs.open(prevId, true)">
        全新打开“页面{{ prevId }}”
      </a>
    </p>

    <p>
      <a class="demo-btn" @click="$router.push('../tab-dynamic')">
        打开“动态更新页签”
      </a>

      <a class="demo-btn" @click="$tabs.close('../tab-dynamic')">
        关闭“动态更新页签”
      </a>
    </p>

    <p>
      <a class="demo-btn" @click="$tabs.refresh()">刷新当前页面</a>

      <a class="demo-btn" @click="$tabs.close()">关闭当前页面</a>

      <a class="demo-btn" @click="$tabs.close(null, '../tab-dynamic')">
        关闭当前并跳转
      </a>
    </p>

    <p>
      <a class="demo-btn" @click="$tabs.refreshAll()">刷新所有页面</a>

      <a class="demo-btn" @click="$tabs.reset()">重置页签</a>
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
  data() {
    let id = this.$route.params.id
    return {
      pageId: id,
      nextId: +id + 1 + '',
      prevId: +id - 1 + ''
    }
  },

  methods: {
    click() {
      console.log(`页面${this.pageId}`)
    }
  }
}
</script>
