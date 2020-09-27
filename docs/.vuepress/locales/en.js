const nav = require('./utils/nav').default
const sidebar = require('./utils/sidebar').default

const i18n = {
  path: '/',
  guide: 'Guide',
  changelog: 'Changelog',
  essentials: 'Essentials',
  custom: 'Customized',
  advanced: 'Advanced',
  meta: 'Meta'
}

// 站点配置
exports.default = {
  lang: 'en-US', // 将会被设置为 <html> 的 lang 属性
  title: 'Vue Router Tab',
  description: 'Vue.js tab component, based on Vue Router.'
}

// 主题配置
exports.theme = {
  selectText: 'Languages',

  label: 'English',

  ariaLabel: 'Languages',

  editLinkText: 'Edit this page on GitHub',

  lastUpdated: 'Last updated',

  // 页头导航
  nav: nav(i18n),

  // 侧边栏
  sidebar: sidebar(i18n)
}
