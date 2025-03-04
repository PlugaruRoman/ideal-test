'use client'

import { Center, Flex, Text } from '@mantine/core'
import type { CenterProps, FlexProps } from '@mantine/core'

import { LinkButtons } from '@/components'
import AddressIcon from '@/icons/address-icon.svg'
import EmailIcon from '@/icons/email-icon.svg'
import PhoneIcon from '@/icons/phone-icon.svg'
import SocialIcon from '@/icons/social-icon.svg'
import Company from '@/icons/company.svg'

import './index.scss'

const iconType = {
  address: <AddressIcon />,
  email: <EmailIcon />,
  phone: <PhoneIcon />,
  social: <SocialIcon />,
  company: <Company />,
}

const getValueType = (type: string, value: string) => {
  if (type === 'email') {
    return (
      <Text
        className='contact-item'
        fz='16px'
        lh='30px'
        component='a'
        href={`mailto:${value}`}
      >
        {value}
      </Text>
    )
  }

  if (type === 'phone') {
    return (
      <Text
        className='contact-item'
        fz='16px'
        fw={600}
        lh='30px'
        component='a'
        href={`tel:${value}`}
      >
        {value}
      </Text>
    )
  }

  if (type === 'social') {
    return <LinkButtons />
  }

  return (
    <Text fz='16px' lh='30px'>
      {value}
    </Text>
  )
}

type ContactItemProps = {
  type: string
  value: string
  iconProps?: CenterProps
  textProps?: FlexProps
} & FlexProps

export const ContactItem = ({
  type,
  value,
  iconProps,
  textProps,
  ...props
}: ContactItemProps) => {
  return (
    <Flex
      direction='column'
      gap='20px'
      align='center'
      justify='center'
      h='100%'
      {...props}
    >
      <Center
        className='rounded-full'
        fz='22px'
        c='var(--mantine-color-white)'
        bg='var(--mantine-color-custom-3)'
        p='14px'
        {...iconProps}
      >
        {iconType[type as keyof typeof iconType]}
      </Center>

      <Flex
        direction='column'
        gap='16px'
        align='center'
        justify='center'
        {...textProps}
      >
        {getValueType(type, value)}
      </Flex>
    </Flex>
  )
}
