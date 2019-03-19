<template>
  <div class="app-page">
    <h2>{{ ruleLabel }}页签规则</h2>

    <p>你在 <strong class="text-strong">{{ pageTime }}</strong> 秒前打开本页面</p>

    <h3>{{ ruleLabel }}页签规则</h3>

    <p
      v-if="ruleType === 'global'"
      class="rule-desc"
    >
      页签ID: <strong>route => route.fullPath.replace(route.hash, '')`</strong>
    </p>

    <p
      v-else-if="ruleType === 'route'"
      class="rule-desc"
    >
      页签ID: <strong>route => `route-rule/${route.params.catalog}`</strong>
    </p>

    <p
      v-else
      class="rule-desc"
    >
      页签ID: <strong>route.path</strong>
    </p>

    <h4>点击下面的链接，并观察页签的变化</h4>

    <ul class="btn-list">
      <li
        v-for="cat in catalogs"
        :key="cat"
      >
        <router-link
          v-for="t in types"
          :key="t"
          class="demo-btn"
          :to="`../${cat}/${t}`"
        >
          {{ cat }}/{{ type }}
        </router-link>
        <router-link
          class="demo-btn"
          :to="`../${cat}/1?q=abc`"
        >
          {{ cat }}/1?q=abc
        </router-link>
        <router-link
          class="demo-btn"
          :to="`../${cat}/1?q=def`"
        >
          {{ cat }}/1?q=def
        </router-link>
      </li>
    </ul>

    <h3>路由信息</h3>

    <page-route-info />
  </div>
</template>

<script>
import pageTimer from '@/mixins/pageTimer'
import PageRouteInfo from '@/components/PageRouteInfo'

export default {
  name: 'Rule',
  components: { PageRouteInfo },
  mixins: [ pageTimer ],
  data () {
    let route = this.$route
    let { catalog, type } = route.params

    let ruleType = 'default'

    if (route.meta.aliveId) {
      ruleType = 'route'
    } else if (route.fullPath.indexOf('/global-rule/') > -1) {
      ruleType = 'global'
    }

    let ruleLabel = {
      default: '默认',
      route: '路由',
      global: '全局'
    }[ruleType]

    return {
      ruleType,
      ruleLabel,
      catalog,
      type,
      catalogs: ['a', 'b', 'c'],
      types: [ 1, 2 ],
      link: { catalog, type },
      routeTab: `${ruleLabel}规则${catalog}/${type}`
    }
  }
}
</script>

<style lang="scss" scoped>
.rule-desc {
  strong {
    font-size: 1rem;
    font-weight: 600;
    color: $color-primary;
  }
}

.btn-list {
  padding: 0;

  li {
    list-style: none;

    .demo-btn {
      margin-right: .5em;

      &:hover {
        color: $color-primary;
        border-color: $color-primary;
      }

      &.router-link-exact-active {
        color: #fff;
        background-color: $color-primary;
        border-color: rgba(0,0,0,.05);
      }
    }
  }
}
</style>
