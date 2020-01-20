import { importPage } from '../utils'

// 404 路由
export default {
  path: '404',
  component: importPage('404'),
  meta: {
    title: '找不到页面',
    icon: 'rt-icon-warning'
  }
}
