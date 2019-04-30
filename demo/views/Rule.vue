<template>
  <div>
    <h2>{{ curRule.label }}页签规则</h2>

    <p>你在 <strong class="text-strong">{{ pageTime }}</strong> 秒前打开本页面</p>

    <table class="demo-table">
      <tr>
        <th>规则类型</th>
        <td>{{ curRule.type }}</td>
      </tr>
      <tr>
        <th>实现方法</th>
        <td class="rule-fn">
          {{ curRule.fn }}
        </td>
      </tr>
      <tr>
        <th>规则说明</th>
        <td>{{ curRule.desc }}</td>
      </tr>
    </table>

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
          {{ cat }}/{{ t }}
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
import pageTimer from '../mixins/pageTimer'
import PageRouteInfo from '../components/PageRouteInfo'

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

    let rules = {
      default: {
        label: '默认',
        type: '内置规则："path"',
        fn: 'route => route.path',
        desc: '相同route.params的路由共用页签'
      },
      global: {
        label: '全局',
        type: '内置规则："fullPath"',
        fn: 'route => route.fullPath.replace(route.hash, \'\')',
        desc: '相同route.params和route.query的路由共用页签'
      },
      route: {
        label: '路由',
        type: '自定义规则',
        fn: 'route => \'route-rule/\' + route.params.catalog',
        desc: '相同catalog参数的路由共用页签'
      }
    }

    let curRule = rules[ruleType]

    return {
      curRule,
      catalog,
      type,
      catalogs: ['a', 'b', 'c'],
      types: [ 1, 2 ],
      link: { catalog, type },
      routeTab: `${curRule.label}规则${catalog}/${type}`
    }
  }
}
</script>

<style lang="scss" scoped>
.rule-fn {
  font-size: 1rem;
  font-style: italic;
  color: $color;
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
