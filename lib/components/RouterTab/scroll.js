import { debounce, scrollTo } from '../../util'

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

      let $cur = this.$el.querySelector('.router-tab-nav .actived')
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
      const { scroller } = this.$refs

      if (space === 'left') {
        space = 100 - scroller.clientWidth
      } else if (space === 'right') {
        space = scroller.clientWidth - 100
      }

      scrollTo(scroller, scroller.scrollLeft + space)
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
        scroller,
        nav: { $el: nav }
      } = this.$refs

      let $cur = nav.querySelector('.actived')
      let hasScroller = (this.hasScroller =
        nav.clientWidth > scroller.clientWidth) // 判断是否需要滚动

      if ($cur && hasScroller) {
        scrollTo(
          scroller,
          $cur.offsetLeft + ($cur.clientWidth - scroller.clientWidth) / 2
        )
      }
    }
  }
}
