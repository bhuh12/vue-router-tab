import defaults from './default'
import globalRule from './global-rule'
import i18n from './i18n'
import initialTabs from './initial-tabs'
import langCustom from './lang-custom'
import langEn from './lang-en'
import slot from './slot'
import transition from './transition'

import extendRoutes from '../../utils/extendRoutes'

const routes = [
  defaults,
  globalRule,
  i18n,
  initialTabs,
  langCustom,
  langEn,
  slot,
  transition
]

routes.forEach(extendRoutes)

export default routes
