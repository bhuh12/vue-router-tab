<template>
  <main class="app-main">
    <router-tab>
      <template v-slot="{ tab: { id, title, icon, closable }, tabs, index}">
      <i v-if="icon" class="tab-icon" :class="icon"></i>
      <span class="tab-index">{{index}}</span>
      <span class="tab-title">{{title || '未命名页签'}}</span>
      <i class="tab-close el-icon-close" v-if="closable !== false &&tabs.length > 1" @click.prevent="close(id)"></i>
    </template>
    </router-tab>
  </main>
</template>

<style lang="scss" scoped>
.tab-index {
  display: inline-block;
  margin-right: 3px;
  width: 1.2em;
  height: 1.2em;
  line-height: 1.2;
  text-align: center;
  background-color: #f5f5f5;
  border-radius: 100%;
}

.router-tab-item.actived .tab-index {
  background-color: rgba(255,255,255,.2);
}
</style>
