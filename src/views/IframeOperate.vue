<template>
  <div>
    <h3>Iframe 页签操作</h3>

    <p>
      <a class="demo-btn" @click="$tabs.openIframe(site.src, site.title, icon)">
        打开“{{ site.title }}”
      </a>

      <a class="demo-btn" @click="$tabs.refreshIframe(site.src)">
        刷新“{{ site.title }}”
      </a>

      <a class="demo-btn" @click="$tabs.closeIframe(site.src)">
        关闭“{{ site.title }}”
      </a>
    </p>

    <p>
      <a
        class="demo-btn"
        title="XSS 跨站链接的 iframe 将展示空白页面"
        @click="$tabs.openIframe(xss.js, 'XSS - JS', icon)"
      >
        XSS - JS
      </a>

      <a
        class="demo-btn"
        title="XSS 跨站链接的 iframe 将展示空白页面"
        @click="$tabs.openIframe(xss.base64, 'XSS - Base64', icon)"
      >
        XSS - Base64
      </a>
    </p>

    <h3>打开 Iframe 页签</h3>

    <div class="custom-iframe">
      <label>
        名称：
        <input v-model="iframe.title" name="title" placeholder="页签标题" />
      </label>

      <label>
        网址：
        <input v-model="iframe.src" name="src" placeholder="请输入完整的网址" />
      </label>

      <a
        class="demo-btn primary"
        @click="iframe.src && $tabs.openIframe(iframe.src, iframe.title, icon)"
      >
        打开页签
      </a>
    </div>

    <template v-if="/^\/iframe\//.test($route.path)">
      <h3 class="text-strong">
        提示：
      </h3>

      <p>
        开启浏览器开发者工具的 console 页签，打开 Iframe 页签并查看
        <code>iframe-mounted</code>
        和
        <code>iframe-loaded</code>
        事件的参数打印
      </p>
    </template>
  </div>
</template>

<script>
export default {
  name: 'IframeOperate',
  data() {
    return {
      icon: 'rt-icon-web',

      site: {
        src: 'https://cn.vuejs.org',
        title: 'Vue.js'
      },

      iframe: {
        src: 'https://router.vuejs.org/zh/',
        title: 'Vue Router'
      },

      xss: {
        js: 'javascript:alert(1)',
        base64:
          'data:text/html;base64,' +
          window.btoa('<script>alert(1)</s' + 'cript>')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.custom-iframe {
  label {
    display: block;
    margin-bottom: 0.8em;
  }

  input {
    padding: 0.4em 0.8em;
  }
}
</style>
