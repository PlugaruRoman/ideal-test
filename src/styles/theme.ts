'use client'

import { MantineThemeOverride } from '@mantine/core'

export const theme: MantineThemeOverride = {
  fontFamily: 'Onest, sans-serif',
  fontSizes: {
    xs: '13px',
    sm: '16px',
    md: '18px',
    lg: '20px',
    xl: '24px',
    xxl: '64px',
  },
  breakpoints: {
    xs: '0px',
    sm: '820px',
    md: '1024px',
    lg: '1260px',
    xl: '1440px',
  },
  colors: {
    custom: [
      '#401FA4', //Colors/Blue (Dark)      custom-0
      '#0F3FE7', //Colors/Blue (Normal)    custom-1
      '#040707', //Basic/Logo (Heading)    custom-2
      '#FDD910', //Basic/Logo (Yellow)     custom-3
      '#A30A00', //Basic/Red (Dark)        custom-4
      '#F0F0F0', //Basic/Background        custom-5
      '#BEC0C4', //Basic/Grey (Meta)       custom-6
      '#E0E2E8', //Basic/Sep               custom-7
      '#F5F6F6', //Basic/Grey (Background) custom-8
      '#EFF0F6', //Basic/Grey (Subtitles)  custom-9
      '#63626D0D', //Shadow                custom-10
      '#FFFFFFA6', //Gray                  custom-11
      '#00000040', //Opacity/Dark          custom-12
      '#63626D26', //Card/Shadow           custom-13
      '#ECD8F2', //Purple/Gradient         custom-14
      '#333333', //Gray/20                 custom-15
      '#E0E2E840', //Blue/Gradient         custom-16
      '#FF9D42', //Yellow/Gradient         custom-17
      '#D6081490', //Red/Gradient          custom-18
      '#04070726', //Green/Gradient        custom-19
      '#01489B', //Blue/40/Gradient        custom-20
      '#D71A20', //Basic/Logo/Dark (Red)   custom-21
      '#F5F6F6', //Basic/Bg/Section        custom-22
      '#6B6B6B', //Gray/Text/Statistic     custom-23
    ],
    hover: [
      '#5A2FBC', //Colors/Blue (Dark)      custom-0 (lightened slightly)
      '#1C5CE7', //Colors/Blue (Normal)    custom-1 (lightened slightly)
      '#141414', //Basic/Logo (Heading)    custom-2 (darkened slightly)
      '#E0C00E', //Basic/Logo (Red)        custom-3 (lightened slightly)
      '#B22D00', //Basic/Red (Dark)        custom-4 (lightened slightly)
      '#E0E0E0', //Basic/Background        custom-5 (darkened slightly)
      '#D0D2D4', //Basic/Grey (Meta)       custom-6 (darkened slightly)
      '#F22A9B', //                        custom-7 (lightened slightly)
      '#F7F8F8', //Basic/Grey (Background) custom-8 (darkened slightly)
      '#5C6166', //Basic/Grey (Subtitles)  custom-9 (lightened slightly)
      '#63626D0D', //Shadow                custom-10
      '#FFFFFFA6', //Gray                  custom-11
      '#00000080', //Opacity/Dark          custom-12(lightened dark-opacity)
      '#D04545', //Basic/Logo (Red)        custom-13 (lightened slightly)
    ],
  },
}
