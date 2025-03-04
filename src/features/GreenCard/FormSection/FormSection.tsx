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
import Image from 'next/image'

import { Button, PageContainer } from '@/components'

export const FormSection = ({ ...props }: CardProps) => {
  const { t } = useTranslation()

  const form = useForm({
    mode: 'uncontrolled',
    validate: {
      idno: (value) => (value ? null : t('is_required')),
      registration_certificate_number: (value) =>
        value ? null : t('is_required'),
      coverage_area: (value) => (value ? null : t('is_required')),
      validity_period: (value) => (value ? null : t('is_required')),
      agree_terms_and_data_processing: (value) =>
        value ? null : t('is_required'),
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
        <Flex align='center'>
          <Card
            className='calculator-form'
            h='max-content'
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
                    label={t('idno')}
                    placeholder='200123456789'
                    key={form.key('idno')}
                    {...form.getInputProps('idno')}
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
                        name='coverage_area'
                        radius='10px'
                        checkIconPosition='right'
                        label={t('coverage_area')}
                        placeholder={t('europe')}
                        data={coverageSelect}
                        defaultValue='europe'
                        comboboxProps={{
                          transitionProps: { transition: 'pop', duration: 200 },
                        }}
                        key={form.key('coverage_area')}
                        {...form.getInputProps('coverage_area')}
                      />
                    </GridCol>

                    <GridCol span={6}>
                      <Select
                        name='validity_period'
                        radius='10px'
                        checkIconPosition='right'
                        label={t('validity_period')}
                        placeholder={t('validity_period')}
                        defaultValue={'15'}
                        data={termSelect}
                        comboboxProps={{
                          transitionProps: { transition: 'pop', duration: 200 },
                        }}
                        key={form.key('validity_period')}
                        {...form.getInputProps('validity_period')}
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
                    key={form.key('agree_terms_and_data_processing')}
                    name='agree_terms_and_data_processing'
                    {...form.getInputProps('agree_terms_and_data_processing', {
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

          <Box w='100%' pos='relative' h='500px'>
            <Image
              src='/green-card-background.png'
              alt='background-image'
              fill
              sizes='100vw'
              style={{
                objectFit: 'contain',
                position: 'absolute',
              }}
              priority
            />
          </Box>
        </Flex>
      </PageContainer>
    </Box>
  )
}
