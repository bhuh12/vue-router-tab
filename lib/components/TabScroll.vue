<template>
  <div class="router-tab__scroll" @wheel.prevent="onWheel" @mouseenter="update">
    <div
      ref="container"
      class="router-tab__scroll-container"
      :class="{ 'is-mobile': isMobile }"
      @scroll="update"
    >
      <slot />
    </div>

    <div
      v-show="hasScroller"
      ref="bar"
      class="router-tab__scrollbar"
      :class="{ 'is-dragging': dragData }"
    >
      <div
        ref="thumb"
        class="router-tab__scrollbar-thumb"
        :style="{
          width: `${thumbWidth}px`,
          transform: `translateX(${thumbLeft}px`
        }"
        @mousedown.prevent="onDragStart"
      />
    </div>
  </div>
</template>

<script>
import { scrollTo, scrollIntoView, getScrollbarWidth } from '../util'

// 滚动条
export default {
  name: 'TabScroll',

  props: {
    // 每次滚动距离
    space: {
      type: Number,
      default: 300
    }
  },

  data() {
    return {
      isMobile: false, // 是否移动端

      scrollData: {
        clientWidth: 0,
        scrollWidth: 0,
        scrollLeft: 0
      },

      dragData: null
    }
  },

  computed: {
    // 是否拥有滚动条
    hasScroller() {
      return (
        !this.isMobile &&
        !this.$tabs.onDragSort &&
        this.scrollData.scrollWidth > this.scrollData.clientWidth
      )
    },

    // 滑块宽度
    thumbWidth() {
      if (!this.hasScroller) return

      const { clientWidth, scrollWidth } = this.scrollData
      return (clientWidth / scrollWidth) * clientWidth
    },

    // 滑块 left
    thumbLeft() {
      if (!this.hasScroller) return

      // 拖拽滚动
      if (this.dragData) {
        return this.dragData.thumbLeft
      }

      const { clientWidth, scrollWidth, scrollLeft } = this.scrollData

      return (
        (clientWidth - this.thumbWidth) *
        (scrollLeft / (scrollWidth - clientWidth))
      )
    }
  },

  mounted() {
    this.update()
  },

  methods: {
    // 更新滚动数据
    update() {
      const { container } = this.$refs

      if (!container) return

      const { clientWidth, scrollWidth, scrollLeft } = container

      // 判断是否移动端
      // userAgent 中包含 mobile 字段，或者浏览器滚动条宽度为 0
      this.isMobile =
        /mobile/i.test(navigator.userAgent) || !getScrollbarWidth()

      Object.assign(this.scrollData, { clientWidth, scrollWidth, scrollLeft })
    },

    // 滚动到指定位置
    scrollTo(left, smooth = true) {
      scrollTo({ wrap: this.$refs.container, left, smooth })
    },

    // 滚动到元素
    scrollIntoView(el) {
      scrollIntoView({ el, wrap: this.$refs.container, inline: 'center' })
    },

    // 判断子节点是否完全在可视区域
    isInView(el) {
      const { container } = this.$refs
      const offsetLeft = el.offsetLeft
      const scrollLeft = container.scrollLeft

      if (
        offsetLeft < scrollLeft ||
        offsetLeft + el.clientWidth > scrollLeft + container.clientWidth
      ) {
        return false
      }

      return true
    },

    // 页签鼠标滚动
    onWheel(e) {
      const now = +new Date()
      const enable = now - (this.lastWheel || 0) > 100

      if (!enable) return

      this.lastWheel = now

      const { space } = this
      const isWheelUp = e.deltaY < 0

      this.scrollTo(
        this.$refs.container.scrollLeft + (isWheelUp ? -space : space)
      )
    },

    // 拖拽
    onDragStart(e) {
      const { thumbLeft } = this

      this.dragData = {
        startPageX: e.pageX,
        startScrollLeft: this.$refs.container.scrollLeft,
        startThumbLeft: thumbLeft,
        thumbLeft
      }

      document.addEventListener('mousemove', this.onDragMove)
      document.addEventListener('mouseup', this.onDragEnd)
    },

    // 拖拽移动
    onDragMove(e) {
      const { dragData, thumbWidth } = this
      const { clientWidth, scrollWidth } = this.scrollData
      let thumbLeft = dragData.startThumbLeft + e.pageX - dragData.startPageX
      const maxThumbLeft = clientWidth - thumbWidth

      if (thumbLeft < 0) {
        thumbLeft = 0
      } else if (thumbLeft > maxThumbLeft) {
        thumbLeft = maxThumbLeft
      }

      // 更新滑块定位
      dragData.thumbLeft = thumbLeft

      // 滚动
      this.scrollTo(
        (thumbLeft * (scrollWidth - clientWidth)) / (clientWidth - thumbWidth),
        false
      )

      e.preventDefault()
    },

    // 拖拽结束
    onDragEnd(e) {
      this.dragData = null

      document.removeEventListener('mousemove', this.onDragMove)
      document.removeEventListener('mouseup', this.onDragEnd)

      e.preventDefault()
    }
  }
}
</script>
