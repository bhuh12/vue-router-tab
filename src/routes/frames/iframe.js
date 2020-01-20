import { importFrame, importPage } from '../../utils'

export default {
  path: '/iframe/',
  component: importFrame('Iframe'),
  redirect: '/iframe/operate',
  children: [{
    path: '/iframe/operate',
    component: importPage('IframeOperate'),
    meta: {
      title: 'iframe 页签'
    }
  }]
}
