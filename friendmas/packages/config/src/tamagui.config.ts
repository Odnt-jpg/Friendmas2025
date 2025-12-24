import { defaultConfig } from '@tamagui/config/v4'
import { createTamagui } from 'tamagui'
import { bodyFont, headingFont } from './fonts'
import { animations } from './animations'
import { createAnimations } from '@tamagui/animations-css'


 

export const config = createTamagui({
  ...defaultConfig,
  animations,
  fonts: {
    body: bodyFont,
    heading: headingFont,
  },
  settings:{
    ...defaultConfig.settings,
    onlyAllowShorthands: false
  }
})

