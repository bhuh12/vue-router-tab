import { importFrame } from '../../utils'
import getPageRoutes from '../page'

export default {
  path: '/restore/',
  component: importFrame('Restore'),
  redirect: '/restore/page/1',
  children: getPageRoutes()
}
