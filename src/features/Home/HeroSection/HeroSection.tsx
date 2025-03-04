'use client'

import { Box, BoxProps, Flex, FlexProps, Title } from '@mantine/core'
import { PageContainer } from '@/components'
import { useTranslation } from '@/i18n'
import Image from 'next/image'
import ArrowDown from '@/icons/arrow-down.svg'
import { NavSectionsType } from '@/types/sections'
import { motion } from 'framer-motion'
import { useScrollToSection } from '@/hooks/useScrollToSection'

type MotionBoxProps = {
  onClick?: (event: Event) => void
} & BoxProps

const MotionBox = motion.create(Box as React.FC<MotionBoxProps>)
const MotionFlex = motion.create(Flex as React.FC<FlexProps>)

const arrowVariants = {
  initial: { y: 0 },
  hover: {
    color: '#FDD910',
    y: [0, -10, 0],
    transition: {
      repeat: Infinity,
      duration: 1,
      color: '#FDD910',
      ease: 'easeInOut',
    },
  },
}

export const HeroSection = () => {
  const { t } = useTranslation()
  const { scrollToSection } = useScrollToSection()

  return (
    <Box
      w='100%'
      mih={{ base: '750px', sm: '1000px' }}
      h={{ base: '100%', sm: '100%' }}
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

        <MotionFlex
          justify='center'
          direction='column'
          align='center'
          pos='absolute'
          whileHover='hover'
          className='cursor-pointer'
          left='50%'
          bottom='0'
          onClick={() => scrollToSection(NavSectionsType.PRODUCTS_SECTION)}
        >
          <Title
            c='#4E525A'
            order={3}
            fz={{ base: '16px', sm: '22px' }}
            fw={700}
          >
            {t('insurances')}
          </Title>
          <MotionBox
            c='#4E525A'
            variants={arrowVariants}
            w='50px'
            h='20px'
            fz='50px'
          >
            <ArrowDown />
          </MotionBox>

          <MotionBox
            c='#4E525A'
            w='50px'
            variants={arrowVariants}
            h='20px'
            fz='50px'
          >
            <ArrowDown />
          </MotionBox>
        </MotionFlex>
      </PageContainer>
    </Box>
  )
}
