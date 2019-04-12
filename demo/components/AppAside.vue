<template>
  <aside class="app-sd">
    <div class="app-sd-menu">
      <menu-group
        v-for="(item, index) in menu"
        :key="index"
        :data="item"
      />
    </div>
    <footer class="app-sd-ft">
      <site-link />
    </footer>
  </aside>
</template>

<script>
import MenuGroup from './MenuGroup.vue'
import SiteLink from './SiteLink.vue'

export default {
  name: 'AppAside',
  components: { MenuGroup, SiteLink },
  data () {
    return {
      menu: [{
        text: 'RouterTab 配置',
        children: [
          { text: '默认配置', to: '/default/' },
          { text: '过渡效果', to: '/transition/' },
          { text: '初始展示页签', to: '/initial-tabs/' },
          {
            text: '语言配置',
            children: [
              { text: '指定语言', to: '/lang-en/' },
              { text: '自定义语言', to: '/lang-custom' }
            ]
          },
          { text: '自定义页签模板', to: '/slot/' }
        ]
      }, {
        text: '页签规则',
        children: [
          { text: '默认页签规则', to: '/default/rule/a/1' },
          { text: '全局页签规则', to: '/global-rule/rule/a/1' },
          { text: '路由页签规则', to: '/default/route-rule/a/1' }
        ]
      }, {
        text: '页面配置',
        children: [
          { text: '动态更新页签配置', to: '/default/tab-dynamic' },
          { text: '页面离开确认', to: '/initial-tabs/page-leave' }
        ]
      }]
    }
  }
}
</script>

<style lang="scss" scoped>
.app-sd {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  background-color: #fff;
  border-right: 1px solid #eaecef;

  &-menu {
    flex: auto;
    padding: 2rem 0;
    height: 0;
    overflow-y: auto;

    > .menu-group {
      margin-bottom: 1rem;
    }
  }

  &-ft {
    border-top: 1px solid #eee;

    @include screen-pc {
      .site-link {
        display: none;
      }
    }
  }
}
</style>
