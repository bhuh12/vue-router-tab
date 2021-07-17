<template>
  <div>
    <h2>页签规则</h2>

    <p>通过配置路由元信息 <code>meta.key</code> 来设置页签规则</p>

    <page-timer />

    <table class="demo-table">
      <thead>
        <tr>
          <th>规则</th>
          <th>配置</th>
          <th>说明</th>
        </tr>
      </thead>

      <tbody>
        <tr
          v-for="item in rules"
          :key="item.id"
          :class="{ on: curRole === item.id }"
          :style="{ cursor: curRole === item.id ? 'default' : 'pointer' }"
          title="点击切换当前规则"
          @click="curRole !== item.id && $tabs.reset(`../../${item.id}`)"
        >
          <td>{{ item.label }}</td>
          <td>
            <code v-if="item.value">{{ item.value }}</code>
          </td>
          <td>{{ item.desc }}</td>
        </tr>
      </tbody>
    </table>

    <h4>选定规则后，点击下面的链接，并观察页签的变化</h4>

    <ul class="btn-list">
      <li v-for="cat in catalogs" :key="cat">
        <router-link
          v-for="t in types"
          :key="t"
          class="demo-btn link"
          :to="`../${cat}/${t}`"
        >
          {{ cat }}/{{ t }}
        </router-link>

        <router-link class="demo-btn link" :to="`../${cat}/1?q=abc`">
          {{ cat }}/1?q=abc
        </router-link>

        <router-link class="demo-btn link" :to="`../${cat}/1?q=def`">
          {{ cat }}/1?q=def
        </router-link>
      </li>
    </ul>

    <h3>路由信息</h3>

    <page-route-info />
  </div>
</template>

<script>
import PageTimer from '../components/PageTimer'
import PageRouteInfo from '../components/PageRouteInfo'

export default {
  name: 'Rule',
  components: { PageTimer, PageRouteInfo },
  data() {
    let route = this.$route
    let { catalog, type } = route.params

    return {
      rules: [
        {
          id: 'default',
          label: '默认',
          value: '',
          desc: '同一路由共用同一个页签'
        },
        {
          id: 'path',
          label: 'path',
          value: 'path',
          desc: '相同 route.params 的路由共用页签'
        },
        {
          id: 'fullPath',
          label: 'fullPath',
          value: 'fullPath',
          desc: '相同 route.params 和 route.query 的路由共用页签'
        },
        {
          id: 'custom',
          label: '自定义',
          value: "route => 'route-rule/' + route.params.catalog",
          desc: '相同 catalog 参数的路由共用页签'
        }
      ],

      curRole: /\/rule\/([^/]+)\//.exec(route.path)[1],
      catalog,
      type,
      catalogs: ['a', 'b', 'c'],
      types: [1, 2],
      link: { catalog, type }
    }
  }
}
</script>

<style lang="scss" scoped>
.rule-fn {
  color: $color;
  font-size: 1rem;
  font-style: italic;
}

.btn-list {
  padding: 0;

  li {
    list-style: none;

    .demo-btn {
      margin-right: 0.5em;
    }
  }
}
</style>
