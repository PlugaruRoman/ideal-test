'use client'

import {
  Flex,
  Card,
  Checkbox,
  Text,
  Box,
  InputBase,
  Title,
} from '@mantine/core'
import type { CardProps } from '@mantine/core'
import { useForm } from '@mantine/form'
import { useTranslation } from '@/i18n'

import { Button, PageContainer } from '@/components'

export const FormSection = ({ ...props }: CardProps) => {
  const { t } = useTranslation()

  const form = useForm({
    mode: 'uncontrolled',
    validate: {
      start_work: (value) =>
        value ? null : `${t('work_start_date')} ${t('is_required')}`,
      finish_work: (value) =>
        value ? null : `${t('work_end_date')} ${t('is_required')}`,
      confirm_confidentiality_policy: (value) =>
        value ? null : t('privacy_required'),
    },
  })

  return (
    <Box
      w='100%'
      mih={{ base: '750px', sm: '900px' }}
      h={{ base: '100%', sm: '100vh' }}
      className='overflow-hidden'
      pos='relative'
      bg='linear-gradient(135deg, #E0E2E8 -0.69%, rgba(240, 240, 240, 0) 99.31%)'
    >
      <PageContainer
        mx={{ xs: '0', sm: '25px' }}
        py={{ base: '50px' }}
        mih={{ base: '100%', sm: '720px' }}
        h={{ base: '100%', sm: 'calc(100vh - 186px)' }}
        pos='relative'
      >
        <Card
          className='calculator-form'
          p={{ xs: '25px 24px', md: '30px 26px', lg: '40px 35px' }}
          maw={{ xs: '100%', md: '540px' }}
          radius='20px'
          w='100%'
          shadow='0px 24px 40px 0px var(--mantine-color-custom-10)'
          {...props}
        >
          <Title order={3} fz='24px' mb='20px'>
            {t('technical_testing')}
          </Title>

          <form onSubmit={form.onSubmit(() => {})}>
            <Flex direction='column' gap={{ xs: '24px', sm: '30px' }}>
              <Flex direction='column' gap='7px'>
                <InputBase
                  size='md'
                  name='idno'
                  radius='8px'
                  fw={600}
                  label={t('IDNP/IDNO')}
                  placeholder='200123456789'
                  key={form.key('start_work')}
                  {...form.getInputProps('start_work')}
                />

                <InputBase
                  size='md'
                  name='registration_certificate_number'
                  radius='8px'
                  fw={600}
                  label={t('registration_certificate_number')}
                  placeholder='22123456'
                  key={form.key('registration_certificate_number')}
                  {...form.getInputProps('registration_certificate_number')}
                />
              </Flex>

              <Flex direction='column' gap='20px'>
                <Checkbox
                  color='var(--mantine-color-custom-3)'
                  label={
                    <Text
                      fz={{ xs: '12px', sm: '15px' }}
                      c='var(--mantine-color-custom-2)'
                    >
                      {t('agree_terms_and_data_processing')}
                    </Text>
                  }
                  key={form.key('confirm_confidentiality_policy')}
                  name='confirm_confidentiality_policy'
                  {...form.getInputProps('confirm_confidentiality_policy', {
                    type: 'checkbox',
                  })}
                />
              </Flex>

              <Button
                color='var(--mantine-color-hover-3)'
                bg='var(--mantine-color-custom-3)'
                type='submit'
              >
                {t('calculate')}
              </Button>
            </Flex>
          </form>
        </Card>
      </PageContainer>
    </Box>
  )
}
