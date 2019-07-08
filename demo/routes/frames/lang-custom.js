import { importFrame } from '../../utils'
import getPageRoutes from '../page'

export default {
  path: '/lang-custom/',
  component: importFrame('LangCustom'),
  redirect: '/lang-custom/page/1',
  children: getPageRoutes()
}
