exports.default = i18n => ({
  [`${i18n.path}guide/`]: [
    '',
    'installation',
    {
      title: i18n.essentials,
      collapsable: false,
      children: [
        'essentials/',
        'essentials/cache',
        'essentials/operate',
        'essentials/iframe',
        'essentials/i18n'
      ]
    },
    {
      title: i18n.advanced,
      collapsable: false,
      children: [
        'advanced/dynamic-tab-info',
        'advanced/transition',
        'advanced/slot',
        'advanced/initial-tabs',
        'advanced/restore',
        'advanced/page-leave'
      ]
    },
    'solutions'
  ]
})
