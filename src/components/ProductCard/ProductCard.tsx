'use client'

import {
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

  const { label, key, description, color } = data

  return (
    <MotionCard
      className='cursor-pointer'
      shadow='lg'
      padding='30px'
      radius='25px'
      mih='240px'
      miw={{ sm: '200px' }}
      w='100%'
      h='100%'
      whileHover={{
        scale: 1.03,
        boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.2)',
      }}
      transition={{ type: 'spring', stiffness: 100 }}
    >
      <Flex direction='column' justify='center' gap={{ xs: '20', lg: '20px' }}>
        <Flex align='center' justify='center'>
          <Box h='80px' c={color} fz='80px'>
            {cardIcons?.[key as keyof typeof cardIcons]}
          </Box>
        </Flex>

        <Text fw={700} fz='24px'>
          {t(label)}
        </Text>

        <Text c='#4E525A' fw={500} fz='16px'>
          {t(description)}
        </Text>
      </Flex>
    </MotionCard>
  )
}
