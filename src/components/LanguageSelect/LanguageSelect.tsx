'use client'

import { Button, Divider, Flex, Menu, Text } from '@mantine/core'
import type { ButtonProps } from '@mantine/core'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

import { useChangeLanguage } from '@/i18n'
import CheckIcon from '@/icons/check-icon.svg'
import { languagePickerLabelOptions } from '@/utils/constants'

import './index.scss'

const MotionButton = motion.create(Button as React.FC<ButtonProps>)

const textVariants = {
  hover: {
    color: 'var(--mantine-color-custom-3)',
  },
}

export const LanguageSelect = () => {
  const pathname = usePathname()
  const { onChangeLanguage } = useChangeLanguage()

  const pathLanguage = pathname.slice(1, 3)

  return (
    <Menu
      radius='10px'
      width='dropdown'
      withinPortal
      position='bottom-end'
      shadow='0px 24px 40px 0px var(--mantine-color-custom-13)'
    >
      <Menu.Target>
        <MotionButton
          className='language-switcher-dropdown__selected'
          fw={600}
          fz='16px'
          radius='16px'
          variant='transparent'
          variants={textVariants}
          whileHover='hover'
          bg='var(--mantine-color-custom-9)'
          pos='relative'
          c='var(--mantine-color-black)'
        >
          {pathLanguage.toUpperCase()}
        </MotionButton>
      </Menu.Target>

      <Menu.Dropdown className='language-switcher-dropdown'>
        {languagePickerLabelOptions?.map((item) => {
          const isSelected = item?.key === pathLanguage

          return (
            <Menu.Item
              leftSection={
                <Flex gap='12px'>
                  <Text w='30px'>{item?.shortLabel}</Text>

                  <Divider orientation='vertical' />
                </Flex>
              }
              onClick={() => onChangeLanguage(item.key)}
              key={item.label}
              rightSection={isSelected && <CheckIcon />}
              fz='15px'
              fw={isSelected ? 600 : 400}
            >
              {item.label}
            </Menu.Item>
          )
        })}
      </Menu.Dropdown>
    </Menu>
  )
}
