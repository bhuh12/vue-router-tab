const demoUrl = 'https://bhuh12.github.io/vue-router-tab/demo/'

module.exports = {
  title: 'Vue Router Tab',
  description: '基于 Vue Router 的路由页签组件',

  head: [
    ['link', { rel: 'icon', href: 'https://bhuh12.github.io/vue-router-tab/demo/img/logo.png' }]
  ],

  // 基础路径
  base: '/vue-router-tab/',

  // 输出目录
  dest: 'dist/docs',

  // 主题配置
  themeConfig: {
    // 页头导航
    nav: [
      { text: '教程', link: '/guide/' },
      { text: 'API', link: '/api/' },
      { text: 'Demo', link: demoUrl },
      { text: '更新日志', link: 'https://github.com/bhuh12/vue-router-tab/releases' },
      { text: '主页', link: 'https://bhuh.net' }
    ],

    // 侧边栏显示所有子集菜单 (默认显示活动)
    // displayAllHeaders: true,

    // 侧边栏
    sidebar: {
      '/guide/': [
        '',
        'installation',
        {
          title: '基础',
          collapsable: false,
          children: [
            'essentials/',
            'essentials/operate',
            'essentials/iframe',
            'essentials/rule',
            'essentials/i18n'
          ]
        },
        {
          title: '进阶',
          collapsable: false,
          children: [
            'advanced/transition',
            'advanced/slot',
            'advanced/initial-tabs',
            'advanced/dynamic-tab-info',
            'advanced/page-leave'
          ]
        }
      ]
    }/* [
      '/guide/',
      '/guide/installation',
      {
        title: '基础',
        collapsable: false,
        children: [
          '/guide/essentials/',
          '/guide/essentials/operate',
          '/guide/essentials/rule',
          '/guide/essentials/i18n'
        ]
      },
      {
        title: '进阶',
        collapsable: false,
        children: [
          '/guide/advanced/',
          '/guide/advanced/transition',
          '/guide/advanced/slot',
          '/guide/advanced/initial-tabs',
          '/guide/advanced/dynamic-tab-info',
          '/guide/advanced/page-leave'
        ]
      }
    ] */,

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