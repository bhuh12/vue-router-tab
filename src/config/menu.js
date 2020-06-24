export default [
  {
    text: 'RouterTab 配置',
    children: [
      { text: '默认配置', to: '/default/' },
      { text: '复用组件', to: '/reuse/' },
      { text: '最大缓存', to: '/max-alive/' },
      { text: '过渡效果', to: '/transition/' },
      { text: '初始展示页签', to: '/initial-tabs/' },
      { text: '刷新还原页签', to: '/restore/' },
      { text: '自定义插槽', to: '/slot/' },
      { text: 'iframe 页签', to: '/iframe/' },
      { text: '关闭最后的页签', to: '/close-last-tab/' }
    ]
  },
  {
    text: '页签规则',
    children: [
      { text: '默认', to: '/default/rule/default/' },
      { text: 'path', to: '/default/rule/path/' },
      { text: 'fullPath', to: '/default/rule/fullPath/' },
      { text: '自定义', to: '/default/rule/custom/' }
    ]
  },
  {
    text: '页面功能',
    children: [
      { text: '动态页签配置', to: '/default/tab-dynamic' },
      { text: '页面离开确认', to: '/initial-tabs/page-leave' },
      { text: '嵌套路由', to: '/default/nest/1/page1' }
    ]
  },
  {
    text: '多语言支持',
    children: [
      { text: '页签国际化', to: '/i18n/' },
      { text: '组件语言', to: '/lang-en/' },
      { text: '组件自定义语言', to: '/lang-custom' }
    ]
  }
]
