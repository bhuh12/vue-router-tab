exports.default = i18n => [
  { text: i18n.guide, link: `${i18n.path}guide/` },
  {
    text: 'API',
    ariaLabel: 'API Menu',
    items: [
      { text: 'API - RouterTab', link: `${i18n.path}api/` },
      { text: 'API - RouterAlive', link: `${i18n.path}api/router-alive/` }
    ]
  },
  { text: 'Demo', link: '/vue-router-tab/demo/', target: '_blank' },
  { text: i18n.changelog, link: `${i18n.path}guide/changelog` }
]
