import { importPage, importFrame } from '../../utils'

export default {
  path: '/i18n/',
  component: importFrame('I18n'),
  redirect: '/i18n/lang',
  children: [{
    path: 'lang',
    component: importPage('I18n'),
    meta: {
      title: 'i18n:i18n',
      icon: 'rt-icon-doc'
    }
  }, {
    path: 'page/:id',
    component: importPage('Page'),
    meta: {
      title: 'i18n:page',
      icon: 'rt-icon-doc'
    }
  }]
}
