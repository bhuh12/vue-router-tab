import { debounce } from '../util/decorator'

// 页签滚动
export default {
  watch: {
    activeTabId: {
      async handler() {
        if (!this.$el) return

        // 激活页签时，如果当前页签不在可视区域，则滚动显示页签
        await this.$nextTick()

        this.adjust()
      },

      immediate: true
    }
  },

  mounted() {
    // 浏览器窗口大小改变时调整Tab滚动显示
    window.addEventListener('resize', this.adjust)
  },

  destroyed() {
    // 销毁后移除监听事件
    window.removeEventListener('resize', this.adjust)
  },

  methods: {
    // 调整页签滚动，保证当前页签在可视区域
    @debounce()
    adjust() {
      if (!this.$el) return

      const { scroll } = this.$refs
      const cur = this.$el.querySelector('.router-tab__item.is-active')

      if (scroll && cur && !scroll.isInView(cur)) scroll.scrollIntoView(cur)

      // 关闭右键菜单
      this.hideContextmenu()
    },

    // 页签过渡
    onTabTrans() {
      this.adjust()
    }
  }
}
