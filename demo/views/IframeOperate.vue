<template>
  <div>
    <h3>iframe 页签操作</h3>

    <p>
      <a
        class="demo-btn"
        @click="$routerTab.openIframe('https://www.baidu.com', '百度', 'rt-icon-web')"
      >打开“百度”</a>

      <a
        class="demo-btn"
        @click="$routerTab.refreshIframe('https://www.baidu.com')"
      >刷新“百度”</a>

      <a
        class="demo-btn"
        @click="$routerTab.closeIframe('https://www.baidu.com')"
      >关闭“百度”</a>
    </p>

    <h3>打开 iframe 页签</h3>

    <div class="custom-iframe">
      <label>
        名称：
        <input v-model="iframe.title" name="title" placeholder="页签标题">
      </label>

      <label>
        网址：
        <input v-model="iframe.src" name="src" placeholder="请输入完整的网址">
      </label>

      <a
        class="demo-btn primary"
        @click="iframe.src && $routerTab.openIframe(iframe.src, iframe.title, 'rt-icon-web')"
      >打开页签</a>
    </div>

    <template v-if="/^\/iframe\//.test($route.path)">
      <h3 class="text-strong">
        提示：
      </h3>

      <p>
        开启浏览器开发者工具的 console 页签，打开 iframe 页签并查看 <code>iframe-mounted</code> 和 <code>iframe-loaded</code> 事件的参数打印
      </p>
    </template>
  </div>
</template>

<script>
export default {
  name: 'IframeOperate',
  data () {
    return {
      iframe: {
        src: 'https://www.hao123.com/',
        title: 'Hao123'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.custom-iframe {
  label {
    display: block;
    margin-bottom: .8em;
  }

  input {
    padding: .4em .8em;
  }
}
</style>
