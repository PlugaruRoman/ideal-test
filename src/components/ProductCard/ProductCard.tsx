'use client'

import { Box, Card, CardProps, Flex, Text } from '@mantine/core'

import { useTranslation } from '@/i18n'
import TechnicalTestingIcon from '@/icons/technical-testing-icon.svg'
import CarInsurance from '@/icons/car-insurance.svg'
import { ActivitiesType } from '@/types/activities'

const cardIcons = {
  rca: <CarInsurance />,
  green_card: <CarInsurance />,
  technical_testing: <TechnicalTestingIcon />,
}

type FieldsActivityCardProps = {
  data: ActivitiesType
} & CardProps

export const ProductCard = ({ data, ...props }: FieldsActivityCardProps) => {
  const { t } = useTranslation()

  const { label, key, description } = data

  return (
    <Card
      className='cursor-pointer'
      shadow='lg'
      padding='30px'
      radius='25px'
      mih='240px'
      miw={{ sm: '200px' }}
      w='100%'
      h='100%'
      {...props}
    >
      <Flex direction='column' justify='center' gap={{ xs: '20', lg: '20px' }}>
        <Flex align='center' justify='center'>
          <Box h='80px' c='var(--mantine-color-black)' fz='80px'>
            {cardIcons?.[key as keyof typeof cardIcons]}
          </Box>
        </Flex>

        <Text fw={700} fz='24px'>
          {t(label)}
        </Text>

        <Text fw={500} fz='16px'>
          {t(description)}
        </Text>
      </Flex>
    </Card>
  )
}
