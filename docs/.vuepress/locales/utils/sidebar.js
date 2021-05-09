exports.default = i18n => ({
  [`${i18n.path}guide/`]: [
    '',
    {
      title: i18n.essentials,
      collapsable: false,
      children: [
        'essentials/installation',
        'essentials/',
        'essentials/nuxt',
        'essentials/operate',
        'essentials/rule',
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
        'custom/i18n',
        'custom/',
        'custom/scroll'
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
    {
      title: i18n.meta,
      collapsable: false,
      children: ['meta/solutions', 'meta/faqs', 'meta/uninstall']
    }
  ]
})
