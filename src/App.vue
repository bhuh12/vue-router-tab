<template>
  <div class="app-ct" :class="{ 'sidebar-open': sidebarOpen }">
    <app-header @sidebar-change="sidebarOpen = !sidebarOpen"/>

    <div class="app-bd">
      <div class="app-sd-mask" @click="sidebarOpen = false"></div>
      <app-side :menu="menu"/>
      <router-view/>
    </div>
  </div>
</template>

<style lang="scss" src="./assets/scss/demo.scss"></style>

<script>
import AppHeader from '@/components/AppHeader.vue'
import AppSide from '@/components/AppSide.vue'

export default {
  name: 'App',
  components: { AppHeader, AppSide },
  data () {
    return {
      sidebarOpen: false,
      menu: [{
        title: 'RouterTab 配置',
        data: [
          { text: '默认配置', to: '/default/' },
          { text: '过渡效果', to: '/transition/' },
          { text: '初始展示页签', to: '/initial-tabs/' },
          {
            text: '语言配置',
            to: '/language/',
            children: {
              data: [
                { text: '自定义语言', to: '/language/custom' }
              ]
            }
          },
          { text: '自定义页签模板', to: '/slot/' }
        ]
      }, {
        title: '页面配置',
        data: [
          { text: '动态更新页签配置', to: '/default/tab-dynamic' },
          { text: '页面离开确认', to: '/initial-tabs/page-leave' }
        ]
      }]
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
