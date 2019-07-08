import { importFrame } from '../../utils'
import getPageRoutes from '../page'

export default {
  path: '/default/',
  component: importFrame('Default'),
  redirect: '/default/page/1',
  children: getPageRoutes()
}
