'use client'

import { Box, Burger, Center, Flex, useMantineTheme } from '@mantine/core'
import type { BoxComponentProps } from '@mantine/core'
import { useDisclosure, useMediaQuery } from '@mantine/hooks'
import {
  motion,
  useAnimation,
  useMotionValueEvent,
  useScroll,
} from 'framer-motion'
import { useRouter } from 'next/navigation'
import { useRef } from 'react'

import {
  ContactItem,
  LanguageSelect,
  NavBar,
  PageContainer,
} from '@/components'
import Logo from '@/icons/logo.svg'

const stickyHeaderVariants = {
  initial: {
    zIndex: 10,
    boxShadow: 'none',
    top: '0px',
    borderRadius: '120px',
  },
  visible: {
    top: '10px',
    zIndex: 10,
    boxShadow: '0px 12px 35px 0px var(--mantine-color-custom-19)',
  },
}

const stickyHeaderVariantsMobile = {
  initial: {
    zIndex: 10,
    boxShadow: 'none',
    borderRadius: '0px',
  },
  visible: {
    zIndex: 10,
    boxShadow: '0px 12px 35px 0px var(--mantine-color-custom-19)',
    borderRadius: '0px',
  },
}

const TRIGGER_SCROLL_POSITION = 200
const DELTA_THRESHOLD = 10

const MotionHeader = motion.create(Box as React.FC<BoxComponentProps>)

export const Header = () => {
  const router = useRouter()
  const theme = useMantineTheme()
  const isMobile = useMediaQuery(`(max-width: ${theme?.breakpoints?.sm})`)

  const [drawerOpened, { toggle: toggleDrawer }] = useDisclosure(false)

  const controls = useAnimation()

  const { scrollY } = useScroll()

  const delta = useRef(0)
  const lastScrollY = useRef(0)

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const diff = Math.abs(latest - lastScrollY.current)
    if (latest >= lastScrollY.current) {
      delta.current =
        delta.current >= DELTA_THRESHOLD
          ? DELTA_THRESHOLD
          : delta.current + diff
    } else {
      delta.current =
        delta.current <= -DELTA_THRESHOLD
          ? -DELTA_THRESHOLD
          : delta.current - diff
    }

    if (delta.current >= DELTA_THRESHOLD && latest > TRIGGER_SCROLL_POSITION) {
      controls.start('visible')
    }
    if (delta.current <= -DELTA_THRESHOLD || latest < TRIGGER_SCROLL_POSITION) {
      controls.start('initial')
    }
    if (delta.current <= -DELTA_THRESHOLD && latest > TRIGGER_SCROLL_POSITION) {
      controls.start('visible')
    }
    lastScrollY.current = latest
  })

  return (
    <MotionHeader
      pos='sticky'
      initial='initial'
      animate={controls}
      variants={isMobile ? stickyHeaderVariantsMobile : stickyHeaderVariants}
      h='100px'
      bg='var(--mantine-color-white)'
      mx='auto'
      px='20px'
      maw='1400px'
    >
      <PageContainer>
        <Flex justify='space-between' align='center' h='100px'>
          <Flex gap='100px'>
            <Center
              fz='80px'
              className='cursor-pointer'
              onClick={() => router.push('/')}
            >
              <Logo />
            </Center>
            <NavBar
              visibleFrom='md'
              navItemProps={{ c: 'var(--mantine-color-custom-2)' }}
            />
          </Flex>

          <Flex align='center' gap='16px'>
            <ContactItem
              type='phone'
              value='+373 60 151 011'
              direction='row'
              align='start'
              justify='start'
              gap='8px'
              iconProps={{
                bg: 'inherit',
                c: 'var(--mantine-color-black)',
                fz: '18px',
                p: '5px 0 0 0',
              }}
              textProps={{
                justify: 'space-between',
                fw: 600,
                align: 'start',
                gap: '0',
              }}
            />
            <LanguageSelect />
          </Flex>

          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            size={18}
            hiddenFrom='md'
          />
        </Flex>
      </PageContainer>
    </MotionHeader>
  )
}
