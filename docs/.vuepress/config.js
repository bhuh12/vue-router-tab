const demoUrl = 'https://bhuh12.github.io/vue-router-tab/demo/'

module.exports = {
  title: 'Vue Router Tab',
  description: '基于 Vue Router 的路由页签组件',

  // 基础路径
  base: '/vue-router-tab/',

  // 输出目录
  dest: 'dist/docs',

  // 主题配置
  themeConfig: {
    // 页头
    displayAllHeaders: true,

    // 页头导航
    nav: [
      { text: '教程', link: '/guide.html' },
      { text: 'API', link: '/api.html' },
      { text: 'Demo', link: demoUrl },
      { text: '主页', link: 'https://bhuh.net' }
    ],

    // 侧边栏
    sidebar: 'auto',

    // Demo路径
    demoUrl: demoUrl,

    // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
    repo: 'bhuh12/vue-router-tab',

    repoLabel: 'GitHub',

    // 假如文档放在一个特定的分支下：
    docsBranch: 'dev',
    
    lastUpdated: '上次更新',
  },

  // markdow 配置
  markdown: {
    lineNumbers: true,
  },

  plugins: {
    '@vuepress/pwa': {
      serviceWorker: true,
      updatePopup: {
        message: '发现新内容可用',
        buttonText: '刷新'
      }
    },
    '@vuepress/back-to-top': true
  }
}