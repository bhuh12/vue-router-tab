exports.default = (i18n) => ({
  [`${i18n.path}guide/`]: [
    '',
    'installation',
    {
      title: i18n.essentials,
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
      title: i18n.advanced,
      collapsable: false,
      children: [
        'advanced/transition',
        'advanced/slot',
        'advanced/initial-tabs',
        'advanced/restore',
        'advanced/dynamic-tab-info',
        'advanced/page-leave'
      ]
    },
    'program'
  ]
})
