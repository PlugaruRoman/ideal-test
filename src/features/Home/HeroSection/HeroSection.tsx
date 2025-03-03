'use client'

import { Box, Flex, Title } from '@mantine/core'
import { PageContainer } from '@/components'
import { useTranslation } from '@/i18n'
import Image from 'next/image'

import { NavSectionsType } from '@/types/sections'

export const HeroSection = () => {
  const { t } = useTranslation()

  return (
    <Box
      w='100%'
      mih={{ base: '750px', sm: '900px' }}
      h={{ base: '100%', sm: '100vh' }}
      className='overflow-hidden'
      pos='relative'
    >
      <Box bg='white' h='100px' pos='absolute' top={0} left={0} />

      <Box
        w='1400px'
        h='1400px'
        bg='linear-gradient(135deg, #FDD910 0%, rgba(253, 217, 16, 0) 100%)'
        pos='absolute'
        left='-30%'
        top='-70%'
        className='rounded-full'
      />

      <PageContainer
        mx={{ xs: '0', sm: '25px' }}
        py={{ base: '50px' }}
        mih={{ base: '100%', sm: '720px' }}
        h={{ base: '100%', sm: 'calc(100vh - 186px)' }}
        id={NavSectionsType.HERO_SECTION}
        pos='relative'
      >
        <Flex align='center'>
          <Flex direction='column' gap='20px' maw='600px'>
            <Title order={1} fw={700} fz='46px'>
              {t('vehicle_inspection')}
            </Title>

            <Title c='#4E525A' order={2} fw={600} fz='22px'>
              {t('compliance_safety')}
            </Title>
          </Flex>

          <Box w='100%' pos='relative' h='500px'>
            <Image
              src='/background-insurance.png'
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
