'use client'

import { Flex, SegmentedControl, Text } from '@mantine/core'
import { usePathname } from 'next/navigation'

import { useChangeLanguage, useTranslation } from '@/i18n'
import { languagePickerOptions } from '@/utils/constants'

import './index.scss'

export const LanguageSwitcher = () => {
  const pathname = usePathname()
  const { onChangeLanguage } = useChangeLanguage()
  const { t } = useTranslation()

  const activeLanguage = pathname.slice(1, 3)

  return (
    <Flex direction='column' justify='center' align='center' gap={15}>
      <Text fz='12px'>{t('my_language_is')}</Text>

      <SegmentedControl
        defaultValue={activeLanguage}
        color='var(--mantine-color-custom-2)'
        bg='none'
        className='language-switcher'
        radius='20px'
        onChange={onChangeLanguage}
        data={languagePickerOptions}
      />
    </Flex>
  )
}
