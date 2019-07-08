import { importFrame } from '../../utils'
import getPageRoutes from '../page'

export default {
  path: '/lang-en/',
  component: importFrame('LangEn'),
  redirect: '/lang-en/page/1',
  children: getPageRoutes()
}
