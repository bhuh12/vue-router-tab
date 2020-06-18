import defaults from './default'
import reuse from './reuse'
import maxAlive from './max-alive'
import transition from './transition'
import initialTabs from './initial-tabs'
import restore from './restore'
import slot from './slot'
import iframe from './iframe'
import closeLastTab from './close-last-tab'

import i18n from './i18n'
import langEn from './lang-en'
import langCustom from './lang-custom'

import extendRoutes from '../../utils/extendRoutes'

const routes = [
  defaults,
  reuse,
  maxAlive,
  transition,
  initialTabs,
  restore,
  slot,
  iframe,
  closeLastTab,
  i18n,
  langEn,
  langCustom
]

routes.forEach(extendRoutes)

export default routes
