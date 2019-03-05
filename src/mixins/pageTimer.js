// 页面计时器
export default {
  data () {
    return {
      openTime: new Date(),
      pageTime: 0
    }
  },

  activated () {
    this.updatePageTime()
  },

  deactivated () {
    this.clearPageTimer()
  },

  beforeDestroy () {
    this.clearPageTimer()
  },

  methods: {
    calcPageTime () {
      this.pageTime = Math.floor((new Date() - this.openTime) / 1000)
    },

    updatePageTime () {
      this.calcPageTime()

      this.clearPageTimer()

      // 定时更新事件
      this.pageTimer = setInterval(this.calcPageTime, 1000)
    },

    clearPageTimer () {
      clearInterval(this.pageTimer)
    }
  }
}
