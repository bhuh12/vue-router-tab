import { defineConfigWithTheme } from 'vitepress'
import type { DefaultTheme } from 'vitepress/theme'

/** 自定义主题配置：默认主题 + demoUrl */
export interface ThemeConfig extends DefaultTheme.Config {
  /** demo 站地址，含 base；demo 为 hash 路由，拼接时需补 `#` */
  demoUrl: string
}

export default defineConfigWithTheme<ThemeConfig>({
  base: '/vue-router-tab/',
  title: 'Vue Router Tab',
  description: '基于 Vue Router 的路由页签组件',
  // head 的 href 不经 base 处理，须手写完整路径；与 base 保持同步
  head: [
    ['link', { rel: 'icon', href: '/vue-router-tab/img/logo.svg' }],
    // 语言自适应：仅「首次」访问首页时按浏览器语言分流，非中文去英文站。
    // VitePress 不提供该能力（官方建议服务端按 Language header 重定向，GitHub Pages 不支持），
    // 故用 head 内联脚本在渲染前跳转，避免首屏语言闪现。base 需与上方保持同步。
    // 只跳一次：之后首页由用户自己的语言选择决定，不与用户对抗。
    [
      'script',
      {},
      `(function () {
  var base = '/vue-router-tab/'
  var path = location.pathname
  if (path !== base && path !== base + 'index.html') return
  try {
    if (localStorage.getItem('vrt-docs-lang-redirected')) return
    localStorage.setItem('vrt-docs-lang-redirected', '1')
  } catch (e) {}
  if (!/^zh/i.test(navigator.language || '')) location.replace(base + 'en/')
})()`
    ]
  ],
  lastUpdated: true,
  markdown: {
    lineNumbers: true
  },
  vite: {
    // 共用仓库根的 public/：logo 一份文件，docs / demo / README 同源
    publicDir: '../public',
    server: {
      // dev 启动自动打开浏览器
      open: true
    }
  },
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      themeConfig: {
        nav: [
          { text: '教程', link: '/guide/' },
          { text: 'API', link: '/api/' },
          // 值不带 base：VitePress 会为 nav 内部链接自动补 base（写全会变成 /vue-router-tab/vue-router-tab/demo/）
          { text: 'Demo', link: '/demo/', target: '_blank' },
          { text: 'GitHub', link: 'https://github.com/bhuh12/vue-router-tab' }
        ],
        sidebar: {
          '/guide/': [
            { text: '介绍', link: '/guide/' },
            {
              text: '基础',
              collapsed: false,
              items: [
                { text: '安装', link: '/guide/essentials/installation' },
                { text: '入门', link: '/guide/essentials/' },
                { text: 'Nuxt', link: '/guide/essentials/nuxt' },
                { text: '页签操作', link: '/guide/essentials/operate' },
                { text: '页签规则', link: '/guide/essentials/rule' },
                { text: 'iframe 页签', link: '/guide/essentials/iframe' }
              ]
            },
            {
              text: '个性化',
              collapsed: false,
              items: [
                { text: '页签行为', link: '/guide/custom/' },
                { text: '过渡效果', link: '/guide/custom/transition' },
                { text: '页签插槽', link: '/guide/custom/slot' },
                { text: '右键菜单', link: '/guide/custom/contextmenu' },
                { text: '国际化', link: '/guide/custom/i18n' },
                { text: '滚动条', link: '/guide/custom/scroll' },
                { text: '主题定制', link: '/guide/custom/theme' }
              ]
            },
            {
              text: '进阶',
              collapsed: false,
              items: [
                { text: '页签缓存', link: '/guide/advanced/cache' },
                { text: '动态页签信息', link: '/guide/advanced/dynamic-tab-info' },
                { text: '初始页签', link: '/guide/advanced/initial-tabs' },
                { text: '页签恢复', link: '/guide/advanced/restore' },
                { text: '离开页面提示', link: '/guide/advanced/page-leave' },
                { text: '多实例', link: '/guide/advanced/multi-instance' }
              ]
            },
            {
              text: '更多',
              collapsed: false,
              items: [
                { text: '实现原理', link: '/guide/meta/internals' },
                { text: '常见问题', link: '/guide/meta/faqs' },
                { text: '卸载组件', link: '/guide/meta/uninstall' }
              ]
            },
            { text: '从 v1 迁移', link: '/guide/migration' },
            { text: '更新日志', link: '/guide/changelog' }
          ],
          '/api/': [
            { text: 'API 总览', link: '/api/' },
            { text: 'RouterTab', link: '/api/router-tab' },
            { text: 'RouterAlive', link: '/api/router-alive' },
            { text: 'useRouterTab', link: '/api/use-router-tab' },
            { text: 'useRouterPage', link: '/api/use-router-page' },
            { text: '路由元信息', link: '/api/route-meta' },
            { text: '类型导出', link: '/api/types' },
            { text: '其他导出', link: '/api/misc' }
          ]
        },
        editLink: {
          pattern: 'https://github.com/bhuh12/vue-router-tab/edit/main/docs/:path',
          text: '在 GitHub 上编辑此页'
        },
        lastUpdated: {
          text: '上次更新'
        },
        outline: { level: [2, 3], label: '本页目录' },
        docFooter: { prev: '上一页', next: '下一页' },
        returnToTopLabel: '返回顶部',
        darkModeSwitchLabel: '外观',
        sidebarMenuLabel: '菜单',
        langMenuLabel: '选择语言'
      }
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      themeConfig: {
        nav: [
          { text: 'Guide', link: '/en/guide/' },
          { text: 'API', link: '/en/api/' },
          { text: 'Demo', link: '/demo/', target: '_blank' },
          { text: 'GitHub', link: 'https://github.com/bhuh12/vue-router-tab' }
        ],
        sidebar: {
          '/en/guide/': [
            { text: 'Introduction', link: '/en/guide/' },
            {
              text: 'Essentials',
              collapsed: false,
              items: [
                { text: 'Installation', link: '/en/guide/essentials/installation' },
                { text: 'Getting Started', link: '/en/guide/essentials/' },
                { text: 'Nuxt', link: '/en/guide/essentials/nuxt' },
                { text: 'Tab Operations', link: '/en/guide/essentials/operate' },
                { text: 'Tab Rules', link: '/en/guide/essentials/rule' },
                { text: 'Iframe Tabs', link: '/en/guide/essentials/iframe' }
              ]
            },
            {
              text: 'Customization',
              collapsed: false,
              items: [
                { text: 'Tab Behavior', link: '/en/guide/custom/' },
                { text: 'Transitions', link: '/en/guide/custom/transition' },
                { text: 'Tab Slots', link: '/en/guide/custom/slot' },
                { text: 'Context Menu', link: '/en/guide/custom/contextmenu' },
                { text: 'Internationalization', link: '/en/guide/custom/i18n' },
                { text: 'Scrollbar', link: '/en/guide/custom/scroll' },
                { text: 'Theming', link: '/en/guide/custom/theme' }
              ]
            },
            {
              text: 'Advanced',
              collapsed: false,
              items: [
                { text: 'Tab Caching', link: '/en/guide/advanced/cache' },
                { text: 'Dynamic Tab Info', link: '/en/guide/advanced/dynamic-tab-info' },
                { text: 'Initial Tabs', link: '/en/guide/advanced/initial-tabs' },
                { text: 'Tab Restoration', link: '/en/guide/advanced/restore' },
                { text: 'Leave Confirmation', link: '/en/guide/advanced/page-leave' },
                { text: 'Multiple Instances', link: '/en/guide/advanced/multi-instance' }
              ]
            },
            {
              text: 'More',
              collapsed: false,
              items: [
                { text: 'Internals', link: '/en/guide/meta/internals' },
                { text: 'FAQ', link: '/en/guide/meta/faqs' },
                { text: 'Uninstalling', link: '/en/guide/meta/uninstall' }
              ]
            },
            { text: 'Migrating from v1', link: '/en/guide/migration' },
            { text: 'Changelog', link: '/en/guide/changelog' }
          ],
          '/en/api/': [
            { text: 'Overview', link: '/en/api/' },
            { text: 'RouterTab', link: '/en/api/router-tab' },
            { text: 'RouterAlive', link: '/en/api/router-alive' },
            { text: 'useRouterTab', link: '/en/api/use-router-tab' },
            { text: 'useRouterPage', link: '/en/api/use-router-page' },
            { text: 'Route Meta', link: '/en/api/route-meta' },
            { text: 'Type Exports', link: '/en/api/types' },
            { text: 'Misc Exports', link: '/en/api/misc' }
          ]
        },
        editLink: {
          pattern: 'https://github.com/bhuh12/vue-router-tab/edit/main/docs/:path',
          text: 'Edit this page on GitHub'
        },
        lastUpdated: {
          text: 'Last updated'
        },
        outline: { level: [2, 3], label: 'On this page' },
        docFooter: { prev: 'Previous page', next: 'Next page' },
        returnToTopLabel: 'Return to top',
        darkModeSwitchLabel: 'Appearance',
        sidebarMenuLabel: 'Menu',
        langMenuLabel: 'Change language'
      }
    }
  },
  themeConfig: {
    demoUrl: '/vue-router-tab/demo/',
    logo: '/img/logo.svg',
    socialLinks: [{ icon: 'github', link: 'https://github.com/bhuh12/vue-router-tab' }],
    // v1 首页 frontmatter 的 footer 字段在 VitePress home layout 无对应项，改由此承载
    footer: {
      message: 'MIT Licensed',
      copyright: 'Copyright © 2019-present 碧海幽虹'
    }
  }
})
