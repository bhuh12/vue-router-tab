<template>
  <div
    class="app-ct"
    :class="{ 'sidebar-open': sidebarOpen }"
  >
    <app-header @sidebar-change="sidebarOpen = !sidebarOpen" />

    <div class="app-bd">
      <div
        class="app-sd-mask"
        @click="sidebarOpen = false"
      />
      <app-aside />
      <router-view />
    </div>
  </div>
</template>

<style lang="scss" src="./assets/scss/demo.scss"></style>

<script>
import AppHeader from './components/AppHeader.vue'
import AppAside from './components/AppAside.vue'

export default {
  name: 'App',
  components: { AppHeader, AppAside },
  data () {
    return {
      sidebarOpen: false
    }
  },

  watch: {
    // 路由切换
    $route ($route) {
      // 关闭侧边栏
      this.sidebarOpen = false
    }
  }
}
</script>

<style lang="scss" scoped>
$side-width: 200px;
$just-trans: all .2s ease-in-out;

/* 布局 */
.app-ct {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  .app-sd {
    width: $side-width;
    transition: $just-trans;

    @include screen-mob {
      left: -$side-width;
    }
  }

  .app-bd {
    flex: 1;
    height: 0;
    position: relative;
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

.app-sd-mask,
.app-sd {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  height: 100%;
}

.app-sd-mask {
  display: none;
  width: 100%;
}

.app-main {
  padding-left: $side-width;
  height: 100%;
  transition: $just-trans;

  @include screen-mob {
    padding-left: 0;
  }

  /deep/ .router-tab {
    height: 100%;
  }
}
</style>
