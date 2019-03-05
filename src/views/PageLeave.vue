<template>
  <div class="app-page">
    <h2>页面离开提示</h2>
    <p>
      修改输入框的值后，页面在页签关闭/刷新/被替换时将会确认提示
    </p>
    <input type="text" v-model="editValue">
  </div>
</template>

<script>
export default {
  name: 'PageLeave',

  data () {
    let value = '初始值'
    return {
      value,
      editValue: value
    }
  },

  // 页面离开前提示
  beforePageLeave (resolve, reject, tab, type) {
    const action = (type === 'close' && '关闭') ||
      (type === 'refresh' && '刷新') ||
      (type === 'replace' && '替换')

    const msg = `您确认要${action}页签“${tab.title}”吗？`

    // 值未改变，直接离开；值改变则确认提示
    if (this.editValue === this.value) {
      resolve()
    } else if (confirm(msg)) {
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
