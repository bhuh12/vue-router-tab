import { debounce, scrollTo } from '../util'

// 页签滚动
export default {
  data() {
    return {
      hasScroller: false
    }
  },

  watch: {
    async activeTabId() {
      if (!this.$el) return

      // 激活页签时，如果当前页签不在可视区域，则滚动显示页签
      await this.$nextTick()

      let $cur = this.$el.querySelector('.router-tab-nav .is-active')
      let $scr = this.$el.querySelector('.router-tab-scroll')
      if ($cur) {
        let cLeft = $cur.offsetLeft
        let sLeft = $scr.scrollLeft
        if (
          cLeft < sLeft ||
          cLeft + $cur.clientWidth > sLeft + $scr.clientWidth
        ) {
          this.adjust()
        }
      }
    }
  },

  created() {
    this.$nextTick(this.adjust)
  },

  mounted() {
    // 页面载入和浏览器窗口大小改变时调整Tab滚动显示
    window.addEventListener('resize', (this.onResize = debounce(this.adjust)))
  },

  destroyed() {
    // 销毁后移除监听事件
    window.removeEventListener('resize', this.onResize)
  },

  methods: {
    // Tab滚动
    tabScroll(space) {
      const { scroll } = this.$refs

      scrollTo(scroll, scroll.scrollLeft + space)
    },

    // 页签鼠标滚动
    tabWheel(e) {
      const now = +new Date()
      const enable = now - (this.lastWheel || 0) > 100

      if (!enable) return

      this.lastWheel = now

      const space = 300
      let isWheelUp = e.deltaY < 0

      this.tabScroll(isWheelUp ? -space : space)
    },

    // 调整Tab滚动显示
    adjust() {
      if (!this.$el) return

      const {
        scroll,
        nav: { $el: nav }
      } = this.$refs

      let $cur = nav.querySelector('.is-active')

      if ($cur) {
        scrollTo(
          scroll,
          $cur.offsetLeft + ($cur.clientWidth - scroll.clientWidth) / 2
        )
      }
    }
  }
}
