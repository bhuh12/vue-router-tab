<template>
  <router-tab :class="{ 'is-fullscreen': fullscreen }">
    <!-- 页签开始 -->
    <template #start>
      <router-link
        class="tab-slot-icon rt-icon-home"
        to="/slot/"
        title="首页"
      />
    </template>

    <!-- 页签结束 -->
    <template #end>
      <a
        class="tab-slot-icon rt-icon-fullscreen"
        :title="fullscreen ? '退出全屏' : '全屏'"
        @click="fullscreen = !fullscreen"
      />
    </template>

    <!-- 页签项插槽 -->
    <template #default="tab">
      <i v-if="tab.icon" class="router-tab__item-icon" :class="tab.icon" />
      <span class="router-tab__item-title" :title="tab.tips">{{
        tab.title
      }}</span>
      <span class="tab-badge">{{ tab.index }}</span>
      <i
        v-if="tab.closable"
        class="router-tab__item-close"
        @click.prevent="tab.close"
      />
    </template>
  </router-tab>
</template>

<script>
export default {
  data() {
    return {
      fullscreen: false
    }
  },

  watch: {
    // 切换全屏后更新滚动
    async fullscreen() {
      await this.$nextTick()
      this.$routerTab.adjust()
    }
  }
}
</script>

<style lang="scss" scoped>
.tab-badge {
  $s: 1.2em;
  display: inline-block;
  margin-left: 3px;
  width: $s;
  height: $s;
  font-size: 12px;
  line-height: $s;
  vertical-align: super;
  text-align: center;
  color: #fff;
  background-color: #f80;
  border-radius: 100%;
}

.router-tab__item.is-active .tab-badge {
  background-color: #f50;
}

// 全屏
.router-tab.is-fullscreen {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
  background: #fff;
}

// 页签前后插槽样式
.router-tab ::v-deep {
  .router-tab__slot-start,
  .router-tab__slot-end {
    display: flex;
    align-items: center;
  }
}

.tab-slot-icon {
  margin: 0 5px;
  color: #2c3e50;
  font-size: 20px;
  text-decoration: none;
  cursor: pointer;

  &:active {
    opacity: 0.8;
  }
}
</style>
