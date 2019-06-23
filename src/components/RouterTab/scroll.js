import { debounce } from '../../util'
import { scrollTo } from '../../util/dom'

// 页签滚动
export default {
  watch: {
    async activedTab () {
      if (!this.$el) return

      // 激活页签时，如果当前页签不在可视区域，则滚动显示页签
      await this.$nextTick()

      let $cur = this.$el.querySelector('.router-tab-nav .actived')
      let $scr = this.$el.querySelector('.router-tab-scroll')
      if ($cur) {
        let cLeft = $cur.offsetLeft
        let sLeft = $scr.scrollLeft
        if (cLeft < sLeft || cLeft + $cur.clientWidth > sLeft + $scr.clientWidth) {
          this.adjust()
        }
      }
    }
  },

  created () {
    this.$nextTick(this.adjust)
  },

  mounted () {
    // 页面载入和浏览器窗口大小改变时调整Tab滚动显示
    window.addEventListener('resize', this.onResize = debounce(this.adjust))
  },

  destroyed () {
    // 销毁后移除监听事件
    window.removeEventListener('resize', this.onResize)
  },

  methods: {
    // Tab滚动
    tabScroll (direction) {
      let $tab = this.$el.querySelector('.router-tab-header')
      let $scr = $tab.querySelector('.router-tab-scroll')
      let space = $tab.clientWidth - 110

      scrollTo($scr, $scr.scrollLeft + (direction === 'left' ? -space : space))
    },

    // 调整Tab滚动显示
    adjust () {
      if (!this.$el) return

      let $tab = this.$el.querySelector('.router-tab-header')
      let $scr = $tab.querySelector('.router-tab-scroll')
      let $nav = $scr.querySelector('.router-tab-nav')
      let $cur = $nav.querySelector('.actived')
      let isScroll = $nav.clientWidth > $scr.clientWidth // 判断是否需要滚动

      $tab.classList[isScroll ? 'add' : 'remove']('is-scroll')

      if ($cur && isScroll) {
        scrollTo($scr, $cur.offsetLeft + ($cur.clientWidth - $scr.clientWidth) / 2)
      }
    }
  }
}
