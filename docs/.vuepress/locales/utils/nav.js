exports.default = i18n => [
  { text: i18n.guide, link: `${i18n.path}guide/` },
  { text: 'API', link: `${i18n.path}api/` },
  { text: 'Demo', link: '/vue-router-tab/demo/', target: '_blank' },
  { text: i18n.changelog, link: `${i18n.path}guide/changelog` }
]
