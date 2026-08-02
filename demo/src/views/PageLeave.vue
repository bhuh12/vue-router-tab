<template>
  <div>
    <h2>页面离开确认</h2>

    <page-timer />

    <p>页面在页签关闭/刷新/被替换时将会确认提示</p>

    <p>
      <a class="demo-btn" @click="$tabs.refresh(undefined, true, false)">刷新页签</a>

      <a class="demo-btn" @click="$tabs.close({ force: false })">关闭页签</a>

      <router-link class="demo-btn" :to="`?id=${+(route.query.id || 0) + 1}`">替换页签</router-link>

      <router-link class="demo-btn" to="/default/page/1">离开路由</router-link>

      <a class="demo-btn" @click="reload">刷新浏览器</a>
    </p>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

import { useRouterTab, useRouterPage } from 'vue-router-tab'
import type { Tab, PageLeaveType } from 'vue-router-tab'

import PageTimer from '../components/PageTimer.vue'

const $tabs = useRouterTab()
const route = useRoute()

/** 页面离开前确认（对照 v1 beforePageLeave，五种类型齐全） */
function beforePageLeave(
  /** 当前页签 */
  tab: Tab | undefined,
  /** 离开类型 */
  type: PageLeaveType
) {
  // 浏览器刷新/关闭：返回字符串触发原生确认
  if (type === 'unload') return `您在“${tab?.title}”页签的更改尚未完成，是否要离开？`

  const action = { close: '关闭', refresh: '刷新', replace: '替换', leave: '离开', unload: '' }[
    type
  ]
  const msg = `您确认要${action}页签“${tab?.title}”吗？`

  // 返回 promise：resolve 离开，reject 阻止
  return new Promise<void>((resolve, reject) => {
    if (confirm(msg)) resolve()
    else reject(`您拒绝了${action}页签`)
  })
}

useRouterPage({ beforePageLeave })

/** 浏览器刷新 */
function reload() {
  location.reload()
}
</script>
