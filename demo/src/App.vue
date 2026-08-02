<template>
  <div class="app-ct" :class="{ 'sidebar-open': sidebarOpen }">
    <AppHeader @sidebar-change="sidebarOpen = !sidebarOpen" />

    <div class="app-bd">
      <div class="app-sd-mask" @click="sidebarOpen = false" />
      <AppAside class="app-sd" />
      <main class="app-main">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

import AppHeader from './components/AppHeader.vue'
import AppAside from './components/AppAside.vue'

const route = useRoute()

/** 移动端侧边栏是否展开 */
const sidebarOpen = ref(false)

// 路由切换关闭移动端侧边栏
watch(
  () => route.fullPath,
  () => (sidebarOpen.value = false)
)
</script>

<style lang="scss" scoped>
$side-width: 200px;
$just-trans: all 0.2s ease-in-out;

/* 布局：整体两行（顶栏 + 主体），主体两列（侧栏 + 主区） */
.app-ct {
  display: grid;
  grid-template-rows: auto 1fr;
  width: 100%;
  height: 100%;
}

// 侧栏宽度只在此声明一次，主区由 1fr 自动占满剩余（无需再写 left 偏移）
// position 供移动端抽屉与遮罩作定位上下文
.app-bd {
  display: grid;
  position: relative;
  grid-template-columns: $side-width 1fr;
  // grid 项默认 min-height:auto 会被内容撑高，置 0 才能让子项内部滚动
  min-height: 0;

  @include screen-mob {
    // 移动端侧栏改为抽屉浮层，不占列宽
    grid-template-columns: 0 1fr;
  }
}

.app-sd {
  width: $side-width;

  // 移动端抽屉需盖在内容之上，故仍脱离文档流
  @include screen-mob {
    position: absolute;
    top: 0;
    left: -$side-width;
    z-index: 10;
    height: 100%;
    transition: $just-trans;
  }
}

.sidebar-open {
  @include screen-mob {
    .app-sd-mask {
      display: block;
    }

    .app-sd {
      left: 0;
    }
  }
}

.app-sd-mask {
  display: none;

  @include screen-mob {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    width: 100%;
    height: 100%;
  }
}

// 显式占第 2 列：移动端侧栏转 absolute 脱离网格流后，
// 主区会自动顶到第 1 列（宽 0）导致内容不可见
.app-main {
  grid-column: 2;
  // 同 .app-bd：撑满所在网格单元并允许内部滚动
  min-width: 0;
  min-height: 0;

  :deep(.router-tab) {
    height: 100%;
  }

  // 路由页面：v2 库已移除 v1 的 pageClass 机制（其滚动容器职责改由 pageScroller prop 承担），
  // 页面根元素不再带 .router-tab-page，故按层级选中 RouterAlive 的直接子元素
  :deep(.router-alive > *) {
    padding: 15px;
    font-size: 14px;
    line-height: 1.5;
  }
}
</style>

<style lang="scss" src="./assets/scss/demo.scss"></style>
