<template>
  <router-link v-if="data.to" class="menu-item" :class="{ 'is-active': active }" :to="data.to">
    {{ data.text }}
  </router-link>

  <div v-else-if="data.children && data.children.length" class="menu-group">
    <h3 class="menu-group__title">{{ data.text }}</h3>
    <div class="menu-group__list">
      <MenuItem v-for="(item, index) in data.children" :key="index" :data="item" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import type { MenuNode } from '../config/menu'

const props = defineProps<{
  /** 菜单节点（有 to 渲染为链接，否则渲染为分组标题） */
  data: MenuNode
}>()

const route = useRoute()
const router = useRouter()

/**
 * 是否高亮（按路径前缀判定，复刻 vue-router 3 的 isIncludedRoute）。
 * 不用内置的 router-link-active：vue-router 4/5 改为按 matched 记录包含判定，
 * 而菜单里「页签规则」这类地址是独立的 redirect 记录、不在目标路由的 matched 链上，
 * 内置 class 永远不会加上（如 /default/rule 与 /default/rule/path/:catalog/:type 是平级记录）。
 */
const active = computed(() => {
  if (!props.data.to) return false

  const target = router.resolve(props.data.to).path.replace(/\/$/, '')
  const cur = route.path.replace(/\/$/, '')

  // border 判定：避免 /default 误命中 /default-x 这类同前缀的兄弟路径
  return cur === target || cur.startsWith(target + '/')
})
</script>

<style lang="scss" scoped>
.menu-item {
  display: block;
  padding: 0.35rem 1rem 0.35rem 1.25rem;
  color: #2c3e50;
  font-size: 0.875rem;
  text-decoration: none;
  cursor: pointer;

  &.is-active,
  &:hover {
    color: $color;
  }

  &.is-active {
    font-weight: 700;
  }
}

.menu-group {
  &__title {
    margin: 0.5rem 0;
    padding: 0 1.25rem;
    font-weight: 600;
    font-size: 1em;
  }

  &__list {
    margin: 0;
    padding: 0;
    padding-left: 1rem;
  }
}
</style>
