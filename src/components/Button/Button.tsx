'use client'

import { Button as MantineButton } from '@mantine/core'
import type { ButtonProps as MantineButtonProps } from '@mantine/core'
import { motion } from 'framer-motion'
import type { MotionProps } from 'framer-motion'

const MotionButton = motion.create(MantineButton as React.FC<ButtonProps>)

const buttonVariants = {
  hover: (bg: string) => ({
    backgroundColor: bg,
  }),
}

type ButtonProps = {
  type?: string
  onClick?: () => void
} & MantineButtonProps &
  MotionProps

export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <MotionButton
      variant='filled'
      radius='8px'
      w='100%'
      fz={{ xs: '16px', md: '18px', lg: '20px' }}
      h={{ xs: '46px', md: '56px', lg: '60px' }}
      fw={600}
      variants={buttonVariants}
      custom={props?.color}
      whileHover='hover'
      {...props}
    >
      {children}
    </MotionButton>
  )
}
