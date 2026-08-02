<template>
  <div>
    <h2 @click="click">页面{{ pageId }}</h2>

    <page-timer />

    <h3>页签操作</h3>

    <p>
      <router-link class="demo-btn" :to="nextId">打开“页面{{ nextId }}”</router-link>

      <a class="demo-btn" @click="$tabs.open(nextId, true)">全新打开“页面{{ nextId }}”</a>
    </p>

    <p v-if="+prevId > 0">
      <router-link class="demo-btn" :to="prevId">打开“页面{{ prevId }}”</router-link>

      <a class="demo-btn" @click="$tabs.open(prevId, true)">全新打开“页面{{ prevId }}”</a>
    </p>

    <p>
      <a class="demo-btn" @click="router.push('../tab-dynamic')">打开“动态更新页签”</a>

      <a class="demo-btn" @click="$tabs.close('../tab-dynamic')">关闭“动态更新页签”</a>
    </p>

    <p>
      <a class="demo-btn" @click="$tabs.refresh()">刷新当前页面</a>

      <a class="demo-btn" @click="$tabs.close()">关闭当前页面</a>

      <a class="demo-btn" @click="$tabs.close(undefined, '../tab-dynamic')">关闭当前并跳转</a>
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

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'

import { useRouterTab, useRouterPage } from 'vue-router-tab'

import PageTimer from '../components/PageTimer.vue'
import PageRouteInfo from '../components/PageRouteInfo.vue'
import IframeOperate from './IframeOperate.vue'

const $tabs = useRouterTab()
const router = useRouter()
const route = useRoute()

// 注册滚动位置记忆时机（frame 级容器取自 $tabs.pageScroller，无需传参）
useRouterPage()

/** 当前页面 id（对齐 v1 data()：实例创建时固定，缓存命中不重算） */
const pageId = route.params.id as string

/** 下一页 id */
const nextId = +pageId + 1 + ''

/** 上一页 id */
const prevId = +pageId - 1 + ''

/** 点击标题打印当前页面 */
function click() {
  console.log(`页面${pageId}`)
}
</script>
