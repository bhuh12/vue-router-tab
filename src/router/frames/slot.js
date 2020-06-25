import { importFrame } from '../../utils'
import getPageRoutes from '../page'

export default {
  path: '/slot/',
  component: importFrame('Slot'),
  redirect: '/slot/page/1',
  children: getPageRoutes()
}
