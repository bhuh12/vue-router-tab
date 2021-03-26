// 引入多语言配置
const { default: localeZh, theme: localeZhTheme } = require('./locales/zh')
const { default: localeEn, theme: localeEnTheme } = require('./locales/en')

module.exports = {
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/demo/img/logo.png'
      }
    ]
  ],

  // 基础路径
  base: '/vue-router-tab/',

  // 输出目录
  dest: 'dist/docs',

  host: 'localhost',

  // 多语言
  locales: {
    '/zh/': localeZh,
    '/': localeEn
  },

  // 主题配置
  themeConfig: {
    locales: {
      '/zh/': localeZhTheme,
      '/': localeEnTheme
    },

    // Demo路径
    demoUrl: '/vue-router-tab/demo/',

    // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
    repo: 'bhuh12/vue-router-tab',

    repoLabel: 'GitHub',

    docsBranch: 'main',

    // Algolia 搜索
    algolia: {
      apiKey: 'fdd2c011c382dd55036237094d62bd9e',
      indexName: 'vue-router-tab'
    }
  },

  // markdow 配置
  markdown: {
    lineNumbers: true
  },

  plugins: {
    '@vuepress/pwa': {
      serviceWorker: true,
      updatePopup: true
    },
    '@vuepress/back-to-top': true
  }
}
