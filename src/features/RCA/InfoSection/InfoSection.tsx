'use client'

import { Flex, Text, Title } from '@mantine/core'

import { PageContainer } from '@/components'
import { useTranslation } from '@/i18n'

export const InfoSection = () => {
  const { t } = useTranslation()

  return (
    <PageContainer align='start'>
      <Flex
        gap={{ xs: '30px', sm: '40px' }}
        direction='column'
        justify={{ xs: 'center', sm: 'start' }}
        py={{ xs: '40px', sm: '60px' }}
      >
        <Title order={3} fz={{ xs: '36px', sm: '44px' }} lh='48px' fw={700}>
          {t('rca')}
        </Title>

        <Text c='#4E525A'>{t('rca_description')}</Text>
      </Flex>
    </PageContainer>
  )
}
