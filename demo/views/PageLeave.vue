<template>
  <div class="app-page">
    <h2>页面离开确认</h2>

    <p>你在 <strong class="text-strong">{{ pageTime }}</strong> 秒前打开本页面</p>

    <p>
      <strong class="text-strong">修改输入框的值</strong>后，页面在页签关闭/刷新/被替换时将会确认提示
    </p>

    <input
      v-model="editValue"
      type="text"
    >

    <p>
      <a
        class="demo-btn"
        @click="$routerTab.refresh()"
      >刷新</a>

      <a
        class="demo-btn"
        @click="$routerTab.close()"
      >关闭</a>

      <router-link
        class="demo-btn"
        :to="`?id=${+(this.$route.query.id || 0) + 1}`"
      >
        替换
      </router-link>
    </p>
  </div>
</template>

<script>
import pageTimer from '../mixins/pageTimer'

export default {
  name: 'PageLeave',
  mixins: [pageTimer],

  data () {
    let value = '初始值'
    return {
      value,
      editValue: value
    }
  },

  // 页面离开前确认
  beforePageLeave (resolve, reject, tab, type) {
    // 离开类型
    const action = {
      close: '关闭',
      refresh: '刷新',
      replace: '替换'
    }[type]

    const msg = `您确认要${action}页签“${tab.title}”吗？`

    // 值未改变，则直接离开页签
    if (this.editValue === this.value) {
      resolve()
      return
    }

    // 值改变则确认提示
    if (confirm(msg)) {
      resolve()
    } else {
      reject('拒绝了页面离开')
    }

    /*
    // 此处使用了 Element 的 confirm 组件
    // 需将 closeOnHashChange 配置为 false，以避免路由切换导致确认框关闭
    this.$confirm(msg, '提示', { closeOnHashChange: false })
      .then(resolve)
      .catch(reject)
    */
  }
}
</script>
