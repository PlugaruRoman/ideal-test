'use client'

import type { ButtonProps } from '@mantine/core'
import type { MotionProps } from 'framer-motion'

import { useScrollToSection } from '@/hooks/useScrollToSection'
import { NavSectionsType } from '@/types/sections'

import { Button } from '../Button/Button'

type ScrollToSectionButtonProps = {
  scrollSection?: NavSectionsType
  onScroll?: () => void
} & ButtonProps &
  MotionProps

export const ScrollToSectionButton = ({
  scrollSection = NavSectionsType.PRODUCTS_SECTION,
  onScroll,
  children,
  ...props
}: ScrollToSectionButtonProps) => {
  const { scrollToSection } = useScrollToSection()

  const onClickButton = () => {
    scrollToSection(scrollSection)
    onScroll?.()
  }

  return (
    <Button onClick={onClickButton} {...props}>
      {children}
    </Button>
  )
}
