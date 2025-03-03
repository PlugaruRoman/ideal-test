'use client'

import { Accordion, Flex, Text } from '@mantine/core'
import { useTranslation } from '@/i18n'
import PlusIcon from '@/icons/plus-icon.svg'
import { QuestionType } from '@/types/questions'

import './index.scss'

type QuestionsAccordionProps = {
  data: QuestionType[]
}

export const QuestionsAccordion = ({ data }: QuestionsAccordionProps) => {
  const { t } = useTranslation()

  return (
    <Accordion
      transitionDuration={500}
      bg='var(--mantine-color-white)'
      className='question-accordion'
      classNames={{ chevron: 'questions-chevron' }}
      chevron={
        <Flex
          className='questions-chevron'
          c='var(--mantine-color-custom-6)'
          fz={{ xs: '13px', sm: '16px' }}
        >
          <PlusIcon />
        </Flex>
      }
    >
      {data?.map((question) => (
        <Accordion.Item
          key={question?.id}
          value={question?.title}
          className='question-accordion__item'
        >
          <Accordion.Control
            h='100px'
            c='var(--mantine-color-custom-3)'
            fz={{ xs: '18px', sm: '23px' }}
            p='20px'
          >
            <Text
              maw='95%'
              c='var(--mantine-color-black)'
              fz={{ xs: '18px', sm: '24px' }}
              fw={{ xs: 600, sm: 700 }}
              lh={{ xs: '27px', sm: '36px' }}
            >
              {t(question?.title)}
            </Text>
          </Accordion.Control>

          <Accordion.Panel>
            <Text
              fz={{ xs: '15px', sm: '18px' }}
              c='var(--mantine-color-custom-2)'
            >
              {t(question?.description)}
            </Text>
          </Accordion.Panel>
        </Accordion.Item>
      ))}
    </Accordion>
  )
}
