<template>
  <div class="nest-page">
    <header class="nest-page__header">
      嵌套路由{{ route.params.nestId }}
      <input class="nest-page__input" type="text" />
    </header>

    <div class="nest-page__content">
      <nav class="nest-page__nav">
        <router-link class="nest-page__link" to="./page1">页面1</router-link>
        <router-link class="nest-page__link" to="./page2">页面2</router-link>
      </nav>

      <!-- Vue3 内层缓存必须走 v-slot：直接 <keep-alive><router-view/></keep-alive> 缓存不到页面组件 -->
      <router-view v-slot="{ Component }">
        <keep-alive>
          <component :is="Component" class="nest-page__body" />
        </keep-alive>
      </router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<style lang="scss" scoped>
.nest-page {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 0 !important;
}

.nest-page__header {
  padding: 15px;
  font-size: 18px;
  line-height: 1;
  border-bottom: 1px solid #ddd;
}

.nest-page__content {
  display: flex;
  flex: auto;
  overflow: auto;
}

.nest-page__nav {
  flex-shrink: 0;
  width: 100px;
  height: 100%;
  border-right: 1px solid #ddd;
}

.nest-page__link {
  display: block;
  padding: 0.8em 1em;
  color: #2c3e50;
  text-decoration: none;
  border-bottom: 1px solid #ddd;

  &:hover {
    color: $color;
  }

  &.router-link-active {
    color: $color;
    background-color: #f7f7f7;
  }
}

.nest-page__body {
  height: 100%;
  padding-left: 20px;
  overflow: auto;
}
</style>
