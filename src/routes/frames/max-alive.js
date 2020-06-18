import { importFrame } from '../../utils'
import getPageRoutes from '../page'

export default {
  path: '/max-alive/',
  component: importFrame('MaxAlive'),
  redirect: '/max-alive/page/1',
  children: getPageRoutes()
}
