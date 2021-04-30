export default [
  {
    text: 'RouterTab 配置',
    children: [
      { text: '默认配置', to: '/default' },
      { text: '初始展示页签', to: '/initial-tabs' },
      { text: '刷新还原页签', to: '/restore' },
      { text: 'Iframe 页签', to: '/iframe' }
    ]
  },
  {
    text: '个性化',
    children: [
      { text: '过渡效果', to: '/transition' },
      { text: '插槽', to: '/slot' },
      { text: '右键菜单', to: '/contextmenu' },
      { text: '拖拽排序-禁用', to: '/dragsort' },
      { text: '新页签插入位置', to: '/append' },
      { text: '关闭最后的页签', to: '/close-last-tab' },
      { text: '滚动位置', to: '/page-scroller/' }
    ]
  },
  {
    text: '缓存控制',
    children: [
      { text: '页签规则', to: '/default/rule' },
      { text: '页签缓存-禁用', to: '/default/no-cache' },
      { text: '最大缓存数', to: '/max-alive' },
      { text: '复用组件', to: '/reuse' }
    ]
  },
  {
    text: '页面功能',
    children: [
      { text: '动态页签配置', to: '/default/tab-dynamic' },
      { text: '页面离开确认', to: '/initial-tabs/page-leave' },
      { text: '嵌套路由', to: '/default/nest/1' }
    ]
  },
  {
    text: '多语言支持',
    children: [
      { text: '页签国际化', to: '/i18n' },
      { text: '组件语言', to: '/lang-en' },
      { text: '组件自定义语言', to: '/lang-custom' }
    ]
  }
]
