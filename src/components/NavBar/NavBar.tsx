'use client'

import { Box, Flex } from '@mantine/core'
import type { BoxProps, FlexProps } from '@mantine/core'
import { motion } from 'framer-motion'
import type { MotionProps } from 'framer-motion'

import { useTranslation } from '@/i18n'

import { products } from './data'
import { usePathname, useRouter } from 'next/navigation'

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

const lineVariants = {
  initial: {
    opacity: 0,
  },
  active: {
    opacity: 1,
    transition: { duration: 0.3 },
  },
}

export type NavBarProps = {
  isFooterSide?: boolean
  navItemProps?: BoxProps & MotionProps
} & FlexProps

export const NavBar = ({
  navItemProps,
  isFooterSide,
  ...props
}: NavBarProps) => {
  const pathname = usePathname()
  const { t } = useTranslation()
  const router = useRouter()

  const parts = pathname.split('/')
  const currentPath = parts.length > 2 ? `/${parts[2]}` : pathname
  console.log(currentPath)
  return (
    <Flex
      gap={{ base: 10, sm: 25, lg: 38 }}
      align='center'
      direction='row'
      {...props}
    >
      {products?.map((product) => (
        <MotionBox
          fz='16px'
          fw='600'
          className='cursor-pointer'
          pos='relative'
          variants={itemsVariants}
          custom={isFooterSide}
          initial='initial'
          whileHover='hover'
          animate={currentPath === product.path ? 'active' : 'initial'}
          key={product.id}
          onClick={() => router.push(product.path)}
          {...navItemProps}
        >
          {t(product.label)}

          <MotionBox
            variants={lineVariants}
            initial='initial'
            whileHover='hover'
            animate={currentPath === product.path ? 'active' : 'initial'}
            h='2px'
            w='100%'
            pos='absolute'
            bottom='-4px'
            bg='var(--mantine-color-custom-3)'
          />
        </MotionBox>
      ))}
    </Flex>
  )
}
