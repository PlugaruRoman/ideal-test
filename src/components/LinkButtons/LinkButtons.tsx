'use client'

import { ActionIcon, Group } from '@mantine/core'
import type { ActionIconProps, GroupProps } from '@mantine/core'
import { motion } from 'framer-motion'

import FacebookIcon from '@/icons/facebook.svg'
import ViberIcon from '@/icons/viber.svg'
import Whatsapp from '@/icons/whatsapp.svg'
import Telegram from '@/icons/telegram.svg'
import { SocialMediaType } from '@/types/social-media'

type MotionAnchorProps = {
  component?: string
  href?: string
  target?: string
  onClick?: (event: Event) => void
} & ActionIconProps

const MotionActionIcon = motion.create(
  ActionIcon as React.FC<MotionAnchorProps>,
)

const iconsVariants = {
  hover: (color: string) => ({
    color,
  }),
}

const links = [
  {
    link: 'https://www.facebook.com/idealtestare/',
    label: <FacebookIcon />,
    key: SocialMediaType.FACEBOOK,
    color: '#3B5998',
  },
  {
    link: 'https://wa.me/37360151011',
    label: <Whatsapp />,
    key: SocialMediaType.WHATSAPP,
    color: '#25D366',
  },
  {
    link: 'viber://chat?number=%2B37360151011',
    label: <ViberIcon />,
    key: SocialMediaType.VIBER,
    color: '#7360F2',
  },
  {
    link: 'https://t.me/+37360151011',
    label: <Telegram />,
    key: SocialMediaType.TELEGRAM,
    color: '#2AABEE',
  },
]

type LinkButtonsProps = {
  size?: number
} & GroupProps

export const LinkButtons = ({ size = 36, ...props }: LinkButtonsProps) => {
  return (
    <Group gap={14} justify='space-between' {...props}>
      {links?.map((item) => (
        <MotionActionIcon
          component='a'
          href={item?.link}
          target='_blank'
          key={item.key}
          fz='36px'
          variants={iconsVariants}
          custom={item?.color}
          whileHover='hover'
          color='var(--mantine-color-custom-12)'
          w={size}
          h={size}
          radius='50%'
          variant='subtle'
          aria-label={item.key}
        >
          {item.label}
        </MotionActionIcon>
      ))}
    </Group>
  )
}
