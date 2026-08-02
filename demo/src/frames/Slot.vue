<template>
  <RouterTab :class="{ 'is-fullscreen': fullscreen }">
    <!-- 页签开始：首页链接 -->
    <template #start>
      <router-link class="tab-slot-icon rt-icon-home" to="/slot/" title="首页" />
    </template>

    <!-- 页签结束：全屏切换（toggle 内切状态并调 adjust 重算页签滚动） -->
    <template #end>
      <a
        class="tab-slot-icon"
        :class="fullscreen ? 'rt-icon-fullscreen-exit' : 'rt-icon-fullscreen'"
        :title="fullscreen ? '退出全屏' : '全屏'"
        @click="toggle"
      />
    </template>

    <!-- 页签项插槽：v2 scope 为 { tab, closable } -->
    <template #default="{ tab, closable }">
      <i v-if="tab.icon" class="router-tab__item-icon" :class="tab.icon" />
      <span class="router-tab__item-title" :title="tab.tips || tab.title">{{ tab.title }}</span>
      <i v-if="closable" class="router-tab__item-close" @click.prevent.stop="closeTab(tab.id)" />
    </template>
  </RouterTab>
</template>

<script setup lang="ts">
import { useRouterTab } from 'vue-router-tab'

import { useFullscreen } from '../composables/useFullscreen'

const { fullscreen, toggle } = useFullscreen()

/**
 * 关闭指定页签（惰性取实例）
 *
 * frame setup 期内层 <RouterTab> 尚未注册实例，顶层调 useRouterTab() 会抛错，
 * 故在模板事件触发时才取用（此时实例已注册）。
 */
function closeTab(
  /** 页签 id */
  id: string
) {
  useRouterTab().closeTab(id)
}
</script>

<style lang="scss" scoped>
// 页签前后插槽容器
.router-tab {
  :deep(.router-tab__slot-start),
  :deep(.router-tab__slot-end) {
    display: flex;
    align-items: center;
  }
}

// 插槽内图标（首页 / 全屏）
.tab-slot-icon {
  margin: 0 5px;
  font-size: 20px;
  color: #2c3e50;
  text-decoration: none;
  cursor: pointer;

  &:active {
    opacity: 0.8;
  }
}
</style>
