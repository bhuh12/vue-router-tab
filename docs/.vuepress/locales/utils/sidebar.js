exports.default = i18n => ({
  [`${i18n.path}guide/`]: [
    '',
    {
      title: i18n.essentials,
      collapsable: false,
      children: [
        'essentials/installation',
        'essentials/',
        'essentials/operate',
        'essentials/iframe'
      ]
    },
    {
      title: i18n.custom,
      collapsable: false,
      children: [
        'custom/transition',
        'custom/slot',
        'custom/contextmenu',
        'custom/i18n'
      ]
    },
    {
      title: i18n.advanced,
      collapsable: false,
      children: [
        'advanced/cache',
        'advanced/dynamic-tab-info',
        'advanced/initial-tabs',
        'advanced/restore',
        'advanced/page-leave'
      ]
    },
    'solutions'
  ]
})
