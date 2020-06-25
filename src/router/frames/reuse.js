import { importFrame } from '../../utils'
import getPageRoutes from '../page'

export default {
  path: '/reuse/',
  component: importFrame('Reuse'),
  redirect: '/reuse/rule/default/',
  children: getPageRoutes()
}
