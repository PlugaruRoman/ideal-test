'use client'

import { Flex, Title } from '@mantine/core'

import { PageContainer, QuestionsAccordion } from '@/components'
import { useTranslation } from '@/i18n'

import { questionsSectionData } from './data'

import './index.scss'

export const QuestionsSection = () => {
  const { t } = useTranslation()

  return (
    <PageContainer
      bg='linear-gradient(180deg, var(--mantine-color-custom-8) 0%, rgba(255, 255, 255, 0) 100%)'
      align='start'
    >
      <Flex
        gap={{ xs: '30px', sm: '40px' }}
        direction='column'
        justify={{ xs: 'center', sm: 'start' }}
        py={{ xs: '40px', sm: '100px' }}
      >
        <Title order={3} fz={{ xs: '36px', sm: '44px' }} lh='48px' fw={700}>
          {t('frequently_asked_questions')}
        </Title>

        <QuestionsAccordion data={questionsSectionData} />
      </Flex>
    </PageContainer>
  )
}
