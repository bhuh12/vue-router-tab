import { importFrame } from '../../utils'
import getPageRoutes from '../page'

export default {
  path: '/transition/',
  component: importFrame('Transition'),
  redirect: '/transition/page/1',
  children: getPageRoutes()
}
