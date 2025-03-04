'use client'

import {
  Badge,
  Box,
  Card,
  CardProps,
  Flex,
  MantineStyleProp,
  Text,
} from '@mantine/core'

import { useTranslation } from '@/i18n'
import TechnicalTestingIcon from '@/icons/technical-testing-icon.svg'
import CarInsurance from '@/icons/car-insurance.svg'
import EuropeIcon from '@/icons/europe.svg'
import { ActivitiesType } from '@/types/activities'
import { motion } from 'framer-motion'

const cardIcons = {
  rca: <CarInsurance />,
  green_card: <EuropeIcon />,
  technical_testing: <TechnicalTestingIcon />,
}

type FieldsActivityCardProps = {
  data: ActivitiesType
} & CardProps

const MotionCard = motion.create(
  Card as React.FC<FieldsActivityCardProps & MantineStyleProp>,
)

export const ProductCard = ({ data }: FieldsActivityCardProps) => {
  const { t } = useTranslation()

  const { label, key, description, color, disabled } = data

  return (
    <MotionCard
      shadow='lg'
      padding='30px'
      radius='25px'
      mih='240px'
      miw={{ sm: '200px' }}
      w='100%'
      h='100%'
      whileHover={
        !disabled
          ? {
              cursor: 'pointer',
              scale: 1.03,
              boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.2)',
            }
          : {}
      }
      pos='relative'
      transition={{ type: 'spring', stiffness: 100 }}
    >
      <Flex direction='column' justify='center' gap={{ xs: '20', lg: '20px' }}>
        <Flex align='center' justify='center'>
          <Box h='80px' c={color} fz='80px'>
            {cardIcons?.[key as keyof typeof cardIcons]}
          </Box>

          {disabled && (
            <Badge
              fz='16px'
              pos='absolute'
              right='10px'
              size='lg'
              top='20px'
              color='#4E525A'
              style={{ zIndex: 1 }}
            >
              {t('in_progress')}
            </Badge>
          )}
        </Flex>

        <Text fw={700} fz='24px'>
          {t(label)}
        </Text>

        <Text c='#4E525A' fw={500} fz='16px'>
          {t(description)}
        </Text>
      </Flex>

      {disabled && (
        <Box
          opacity='0.5'
          w='100%'
          pos='absolute'
          h='100%'
          bg=' #F5F6F6 '
          left={0}
          bottom={0}
        />
      )}
    </MotionCard>
  )
}
