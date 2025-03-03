'use client'

import {
  Flex,
  Card,
  Checkbox,
  Text,
  Box,
  InputBase,
  Title,
  Select,
  Grid,
  GridCol,
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

  const coverageSelect = [
    { label: t('europe'), value: 'europe' },
    { label: t('ukraine'), value: 'ukraine' },
  ]

  const termSelect = [
    { label: `15 ${t('days')}`, value: '15' },
    { label: `1 ${t('month')}`, value: '1' },
    { label: `2 ${t('months')}`, value: '2' },
    { label: `3 ${t('months')}`, value: '3' },
    { label: `4 ${t('months')}`, value: '4' },
    { label: `5 ${t('months')}`, value: '5' },
    { label: `6 ${t('months')}`, value: '6' },
    { label: `7 ${t('months')}`, value: '7' },
    { label: `8 ${t('months')}`, value: '8' },
    { label: `9 ${t('months')}`, value: '9' },
    { label: `10 ${t('months')}`, value: '10' },
    { label: `11 ${t('months')}`, value: '11' },
    { label: `1 ${t('age')}`, value: '111' },
  ]

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
          <Title order={3} fz='28px' mb='20px'>
            {t('green_card')}
          </Title>

          <form onSubmit={form.onSubmit(() => {})}>
            <Flex direction='column' gap={{ xs: '24px', sm: '30px' }}>
              <Flex direction='column' gap='7px'>
                <InputBase
                  size='md'
                  name='idno'
                  radius='10px'
                  fw={600}
                  label={t('IDNP/IDNO')}
                  placeholder='200123456789'
                  key={form.key('start_work')}
                  {...form.getInputProps('start_work')}
                />

                <InputBase
                  size='md'
                  name='registration_certificate_number'
                  radius='10px'
                  fw={600}
                  label={t('registration_certificate_number')}
                  placeholder='22123456'
                  key={form.key('registration_certificate_number')}
                  {...form.getInputProps('registration_certificate_number')}
                />

                <Grid>
                  <GridCol span={6}>
                    <Select
                      radius='10px'
                      checkIconPosition='right'
                      label={t('coverage_area')}
                      placeholder={t('europe')}
                      data={coverageSelect}
                      defaultValue={'europe'}
                      comboboxProps={{
                        transitionProps: { transition: 'pop', duration: 200 },
                      }}
                    />
                  </GridCol>

                  <GridCol span={6}>
                    <Select
                      radius='10px'
                      checkIconPosition='right'
                      label={t('validity_period')}
                      placeholder={t('validity_period')}
                      defaultValue={'15'}
                      data={termSelect}
                      comboboxProps={{
                        transitionProps: { transition: 'pop', duration: 200 },
                      }}
                    />
                  </GridCol>
                </Grid>
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
