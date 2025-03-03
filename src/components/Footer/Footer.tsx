'use client'

import { Flex, Divider, Text, Title, Box, BoxProps } from '@mantine/core'

import { PageContainer, ContactItem, LinkButtons } from '@/components'
import { useTranslation } from '@/i18n'
import Logo from '@/icons/logo.svg'
import dayjs from 'dayjs'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { products } from '../NavBar/data'

type MotionBoxProps = {
  onClick?: (event: Event) => void
} & BoxProps

const MotionBox = motion.create(Box as React.FC<MotionBoxProps>)

const itemsVariants = {
  active: (isFooterSide: boolean) => ({
    fontWeight: isFooterSide ? 400 : 600,
    transition: { duration: 0.3 },
  }),
  hover: {
    color: 'var(--mantine-color-custom-3)',
  },
}

export const Footer = () => {
  const { t } = useTranslation()
  const router = useRouter()

  return (
    <PageContainer
      py='30px'
      bgGradient='linear-gradient(180deg, #F5F6F6 0%, rgba(255, 255, 255, 0) 100%);'
    >
      <Flex direction='column' gap={{ xs: '0', lg: '30px' }} justify='center'>
        <Flex align='start' justify='space-between' gap={100}>
          <Flex gap={20} direction='column'>
            <Box
              h='60px'
              fz='60px'
              className='cursor-pointer'
              onClick={() => router.push('/')}
            >
              <Logo />
            </Box>

            <Flex gap={2} direction='column'>
              <ContactItem
                type='company'
                value='Ideal Test SRL'
                direction='row'
                align='start'
                justify='start'
                gap='8px'
                iconProps={{
                  bg: 'inherit',
                  c: 'var(--mantine-color-black)',
                  fz: '18px',
                  p: '5px 0 0 0',
                }}
                textProps={{
                  justify: 'space-between',
                  align: 'start',
                  gap: '0',
                }}
              />

              <ContactItem
                type='address'
                value='strada Vadul lui Vodă 120, Chisinau, Moldova'
                direction='row'
                align='start'
                justify='start'
                gap='8px'
                iconProps={{
                  bg: 'inherit',
                  c: 'var(--mantine-color-black)',
                  fz: '18px',
                  p: '5px 0 0 0',
                }}
                textProps={{
                  justify: 'space-between',
                  align: 'start',
                  gap: '0',
                }}
              />
            </Flex>
          </Flex>

          <Flex direction='column' gap={8}>
            <Title
              c='#4E525A'
              order={3}
              fz={{ base: '16px', sm: '22px' }}
              fw={700}
            >
              {t('insurances')}
            </Title>

            <Flex gap={4} direction='column'>
              {products.map((product) => (
                <MotionBox
                  key={product?.key}
                  fz='16px'
                  fw='600'
                  className='cursor-pointer'
                  pos='relative'
                  variants={itemsVariants}
                  initial='initial'
                  whileHover='hover'
                  onClick={() => console.log(product.key)}
                >
                  {t(product?.label)}
                </MotionBox>
              ))}
            </Flex>
          </Flex>

          <Flex direction='column' gap={8}>
            <Title
              c='#4E525A'
              order={3}
              fz={{ base: '16px', sm: '22px' }}
              fw={700}
            >
              {t('contacts')}
            </Title>

            <Flex gap={4} direction='column'>
              <ContactItem
                type='phone'
                value='0601 51 011'
                direction='row'
                align='start'
                justify='start'
                gap='8px'
                iconProps={{
                  bg: 'inherit',
                  c: 'var(--mantine-color-black)',
                  fz: '18px',
                  p: '5px 0 0 0',
                }}
                textProps={{
                  justify: 'space-between',
                  align: 'start',
                  gap: '0',
                }}
              />

              <ContactItem
                type='email'
                value='idealtest2020@mail.ru'
                direction='row'
                align='start'
                justify='start'
                gap='8px'
                iconProps={{
                  bg: 'inherit',
                  c: 'var(--mantine-color-black)',
                  fz: '18px',
                  p: '5px 0 0 0',
                }}
                textProps={{
                  justify: 'space-between',
                  align: 'start',
                  gap: '0',
                }}
              />

              <LinkButtons />
            </Flex>
          </Flex>
        </Flex>

        <Divider p={0} size='1px' color='var(--mantine-color-custom-9)' />

        <Flex justify='space-between' align='center' direction='row' gap={50}>
          <Text fz='14px' fw={500} c='var(--mantine-color-black)'>
            {`${dayjs().format('YYYY')} Ideal Test SRL, ${t('all_rights_reserved')}`}
          </Text>

          <Text
            fz='14px'
            fw={500}
            href='/privacy-policy'
            component='a'
            c='var(--mantine-color-black)'
            className='text-center'
          >
            {t('privacy_policy')}
          </Text>
        </Flex>
      </Flex>
    </PageContainer>
  )
}
