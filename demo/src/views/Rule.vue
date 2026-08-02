<template>
  <div>
    <h2>页签规则</h2>

    <p>通过配置路由元信息 <code>meta.routerTab.key</code> 来设置页签规则</p>

    <page-timer />

    <table class="demo-table">
      <thead>
        <tr class="demo-table__row">
          <th class="demo-table__head-cell">规则</th>
          <th class="demo-table__head-cell">配置</th>
          <th class="demo-table__head-cell">说明</th>
        </tr>
      </thead>

      <tbody>
        <tr
          v-for="item in rules"
          :key="item.id"
          class="demo-table__row"
          :class="{ 'is-active': curRole === item.id }"
          :style="{ cursor: curRole === item.id ? 'default' : 'pointer' }"
          title="点击切换当前规则"
          @click="curRole !== item.id && $tabs.reset(`../../${item.id}`)"
        >
          <td class="demo-table__cell">
            <label class="rule-radio">
              <input
                class="rule-radio__input"
                type="radio"
                name="rule"
                :value="item.id"
                :checked="curRole === item.id"
                @click.stop="curRole !== item.id && $tabs.reset(`../../${item.id}`)"
              />
              {{ item.label }}
            </label>
          </td>
          <td class="demo-table__cell">
            <code v-if="item.value">{{ item.value }}</code>
          </td>
          <td class="demo-table__cell">{{ item.desc }}</td>
        </tr>
      </tbody>
    </table>

    <h4>选定规则后，点击下面的链接，并观察页签的变化</h4>

    <ul class="catalog-list">
      <li v-for="cat in catalogs" :key="cat" class="catalog-list__item">
        <!--
          用 custom 插槽自行判定激活：router-link 内置的 active 判定忽略 query，
          会让 1、1?q=abc、1?q=def 三个链接同时高亮，此处按 fullPath 全匹配
        -->
        <router-link
          v-for="to in catalogLinks(cat)"
          :key="to"
          v-slot="{ href, navigate, route: linkRoute }"
          :to="to"
          custom
        >
          <a
            class="demo-btn link"
            :class="{ 'is-active': route.fullPath === linkRoute.fullPath }"
            :href="href"
            @click="navigate"
          >
            {{ linkText(to) }}
          </a>
        </router-link>
      </li>
    </ul>

    <h3>路由信息</h3>

    <page-route-info />
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

import { useRouterTab } from 'vue-router-tab'

import PageTimer from '../components/PageTimer.vue'
import PageRouteInfo from '../components/PageRouteInfo.vue'

const $tabs = useRouterTab()
const route = useRoute()

/** 规则说明（对照 v1，desc 照搬） */
const rules = [
  { id: 'default', label: '默认', value: '', desc: '同一路由共用同一个页签' },
  { id: 'path', label: 'path', value: 'path', desc: '相同 route.params 的路由共用页签' },
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
]

/** 当前规则（实例创建时固定，切规则由 $tabs.reset 换整个组件实例，对齐 v1 data()） */
const curRole = /\/rule\/([^/]+)\//.exec(route.path)![1]

const catalogs = ['a', 'b', 'c']
const types = [1, 2]

/** 某个 catalog 下的全部链接地址（types 各一条 + 两条带 query 的） */
function catalogLinks(cat: string) {
  return [...types.map((t) => `../${cat}/${t}`), `../${cat}/1?q=abc`, `../${cat}/1?q=def`]
}

/** 链接文案：去掉相对前缀，直接展示 catalog/type 部分 */
function linkText(to: string) {
  return to.replace('../', '')
}
</script>

<style lang="scss" scoped>
// 规则单选：整行可点，单选按钮只作当前选中项的视觉提示
.rule-radio {
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: inherit;

  &__input {
    margin: 0;
    cursor: inherit;
  }
}

.catalog-list {
  padding: 0;

  &__item {
    list-style: none;
  }
}
</style>
