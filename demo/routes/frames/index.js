import defaults from './default'
import globalRule from './global-rule'
import i18n from './i18n'
import iframe from './iframe'
import initialTabs from './initial-tabs'
import langCustom from './lang-custom'
import langEn from './lang-en'
import slot from './slot'
import transition from './transition'
import closeLastTab from './close-last-tab'

import extendRoutes from '../../utils/extendRoutes'

const routes = [
  defaults,
  globalRule,
  i18n,
  iframe,
  initialTabs,
  langCustom,
  langEn,
  slot,
  transition,
  closeLastTab
]

routes.forEach(extendRoutes)

export default routes
