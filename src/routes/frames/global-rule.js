import { importFrame } from '../../utils'
import getPageRoutes from '../page'

export default {
  path: '/global-rule/',
  component: importFrame('GlobalRule'),
  redirect: '/global-rule/rule/a/1',
  children: getPageRoutes()
}
