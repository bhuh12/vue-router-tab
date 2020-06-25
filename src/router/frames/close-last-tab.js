import { importFrame } from '../../utils'
import getPageRoutes from '../page'

export default {
  path: '/close-last-tab/',
  component: importFrame('CloseLastTab'),
  redirect: '/close-last-tab/page/1',
  children: getPageRoutes()
}
