<template>
  <router-tab>
    <template v-slot="tab">
      <i v-if="tab.icon" class="tab-icon" :class="tab.icon" />
      <span class="tab-title" :title="tab.tips">{{ tab.title }}</span>
      <span class="tab-badge">{{ tab.index }}</span>
      <i v-if="tab.closable" class="tab-close" @click.prevent="tab.close" />
    </template>
  </router-tab>
</template>

<style lang="scss" scoped>
.tab-badge {
  $s: 1.2em;
  display: inline-block;
  margin-left: 3px;
  width:  $s;
  height:  $s;
  font-size: 12px;
  line-height: $s;
  vertical-align: super;
  text-align: center;
  color: #fff;
  background-color: #f80;
  border-radius: 100%;
}

.router-tab-item.actived .tab-badge {
  background-color: #f50;
}
</style>
