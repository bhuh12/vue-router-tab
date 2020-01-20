import { importFrame } from '../../utils'
import getPageRoutes from '../page'

export default {
  path: '/initial-tabs/',
  component: importFrame('InitialTabs'),
  redirect: '/initial-tabs/page/1',
  children: getPageRoutes()
}
