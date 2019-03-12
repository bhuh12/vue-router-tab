<template>
  <div class="app-page">
    <h2>{{$route.meta.title}}：目录{{catalog}}，分类{{type}}</h2>

    <p>你在 <strong class="text-strong">{{pageTime}}</strong> 秒前打开本页面</p>

    <h3>{{ruleLabel}}页签规则</h3>

    <p class="text-tips" v-if="ruleType === 'global'">不同“目录”、“分类”或 “query” 的页面打开独立的页签</p>

    <p class="text-tips" v-else-if="ruleType === 'route'">相同“目录”的页面共用同一页签，不同“目录”打开不同页签</p>

    <p class="text-tips" v-else>不同“目录”或“分类”的页面打开独立的页签，相同“目录”、“分类”但不同 “query” 的页面共用页签</p>

    <table>
      <tr v-for="cat in catalogs" :key="cat">
        <td v-for="type in types" :key="type">
          <router-link class="demo-btn" :to="`../../rule/${cat}/${type}`">{{cat}}/{{type}}</router-link>
        </td>
        <td>
          <router-link class="demo-btn" :to="`../../rule/${cat}/1?query=abc`">{{cat}}/1?query=abc</router-link>
        </td>
      </tr>
    </table>

    <h3>路由信息</h3>

    <page-route-info/>
  </div>
</template>

<script>
import pageTimer from '@/mixins/pageTimer'
import PageRouteInfo from '@/components/PageRouteInfo'

export default {
  name: 'Rule',
  mixins: [ pageTimer ],
  components: { PageRouteInfo },
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
      types: [ 1, 2, 3 ],
      link: { catalog, type },
      routeTab: `${ruleLabel}规则${catalog}/${type}`
    }
  }
}
</script>
