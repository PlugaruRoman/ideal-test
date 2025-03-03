'use client'

import { Box, Flex, Title } from '@mantine/core'
import { PageContainer } from '@/components'
import { useTranslation } from '@/i18n'

import { NavSectionsType } from '@/types/sections'

export const HeroSection = () => {
  const { t } = useTranslation()

  return (
    <Box
      w='100%'
      mih={{ base: '750px', sm: '900px' }}
      h={{ base: '100%', sm: '100vh' }}
      className='overflow-hidden'
    >
      <PageContainer
        mx={{ xs: '0', sm: '25px' }}
        py={{ base: '50px' }}
        mih={{ base: '100%', sm: '720px' }}
        h={{ base: '100%', sm: 'calc(100vh - 186px)' }}
        id={NavSectionsType.HERO_SECTION}
        pos='relative'
      >
        <Flex direction='column' gap='20px' maw='600px'>
          <Title order={1} fw={600} fz='30px'>
            {t('vehicle_inspection')}
          </Title>

          <Title order={2} fw={600} fz='22px'>
            {t('compliance_safety')}
          </Title>
        </Flex>
      </PageContainer>
    </Box>
  )
}
