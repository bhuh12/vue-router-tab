<template>
  <div class="app-page-container">
    <h1 @click="click">RouterTab 实例页</h1>
    <p>你在<strong>{{second}}</strong>秒前打开本页面</p>
    <input type="text">
    <dl>
      <dt>name</dt>
      <dd>{{$route.name}}</dd>
      <dt>path</dt>
      <dd>{{$route.path}}</dd>
      <dt>params</dt>
      <dd>{{$route.params}}</dd>
      <dt>query</dt>
      <dd>{{$route.query}}</dd>
      <dt>hash</dt>
      <dd>{{$route.hash}}</dd>
      <dt>fullPath</dt>
      <dd>{{$route.fullPath}}</dd>
    </dl>
  </div>
</template>

<style lang="scss" scoped>
.app-page-container {
  padding: 15px;
  font-size: 14px;
  line-height: 1.5;

  dt {
    float: left;
    width: 150px;
    font-weight: 700;
  }

  dd {
    min-height: 1.5em;
  }
}
</style>

<script>
export default {
  name: 'router-tab-page',
  data () {
    return {
      openTime: new Date(),
      second: 0,
      routerTab: {
        title: '页签实例' + this.$route.params.id
      }
    }
  },

  activated () {
    this.updateOpenTime()
  },

  deactivated () {
    this.clearOpenTimeInterval()
  },

  beforeDestroy () {
    this.clearOpenTimeInterval()
  },

  // 页面离开前提示
  beforePageLeave (resolve, reject, tab, type) {
    const action = (type === 'close' && '关闭') ||
      (type === 'refresh' && '刷新') ||
      (type === 'replace' && '替换')

    const msg = `您确认要${action}页签“${tab.title}”吗？`

    if (confirm(msg)) {
      resolve()
    } else {
      reject('拒绝了页面离开')
    }

    /* this.$confirm(msg, '提示', { closeOnHashChange: false })
      .then(resolve)
      .catch(reject) */
  },

  methods: {
    update () {
      this.second = Math.floor((new Date() - this.openTime) / 1000)
    },

    updateOpenTime () {
      this.update()

      this.clearOpenTimeInterval()

      // 定时更新事件
      this.openTimeInterval = setInterval(this.update, 1000)
    },

    clearOpenTimeInterval () {
      clearInterval(this.openTimeInterval)
    },

    click () {
      console.log('aaa')
    }
  }
}
</script>
