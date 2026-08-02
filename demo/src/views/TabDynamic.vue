<template>
  <div>
    <h2>动态页签</h2>

    <div class="tab-dynamic__form-item">
      <label>
        <p class="tab-dynamic__hint">修改页签标题</p>
        <input v-model="routeTab.title" class="tab-dynamic__input" type="text" />
      </label>
    </div>

    <div class="tab-dynamic__form-item">
      <label>
        <p class="tab-dynamic__hint">修改页签提示</p>
        <input v-model="routeTab.tips" class="tab-dynamic__input" type="text" />
      </label>
    </div>

    <div class="tab-dynamic__form-item">
      <p class="tab-dynamic__hint">切换图标</p>

      <a
        v-for="icon in icons"
        :key="icon"
        class="tab-dynamic__icon"
        :class="[icon, { 'is-active': icon === routeTab.icon }]"
        title="设置页签图标"
        @click="routeTab.icon = icon"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, reactive } from 'vue'

import { useRouterPage } from 'vue-router-tab'

/** 动态页签信息（响应式，改动即更新当前页签） */
const routeTab = reactive({
  /** 页签标题 */
  title: '动态页签',
  /** 页签图标 */
  icon: 'rt-icon-log',
  /** 页签提示 */
  tips: ''
})

/** 可选图标（对照 v1） */
const icons = ['rt-icon-log', 'rt-icon-doc', 'rt-icon-contact']

// 传 computed 而非 toRef(() => ({...}))：后者每次求值都产生新对象，配 watch deep 会冗余触发
useRouterPage({ routeTab: computed(() => ({ ...routeTab })) })
</script>

<style lang="scss" scoped>
.tab-dynamic__form-item {
  margin-bottom: 1rem;
}

.tab-dynamic__hint {
  margin: 0.5em 0;
}

.tab-dynamic__icon {
  margin-right: 1em;
  font-size: 20px;
  cursor: pointer;

  &.is-active {
    color: $color;
  }
}
</style>
