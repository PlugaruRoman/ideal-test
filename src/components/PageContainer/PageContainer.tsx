'use client'

import { Box, Container, Flex } from '@mantine/core'
import type { ContainerProps, FlexProps } from '@mantine/core'

type PageContainerProps = {
  containerProps?: ContainerProps
  bgGradient?: string
} & FlexProps

export const PageContainer = ({
  containerProps,
  bgGradient,
  children,
  ...props
}: PageContainerProps) => {
  return (
    <Flex
      pos='relative'
      justify='center'
      align='center'
      {...props}
      component='section'
    >
      {bgGradient && (
        <Box
          bg={bgGradient}
          left={0}
          top={0}
          pos='absolute'
          w='100%'
          h='100%'
          style={{ zIndex: -1 }}
        />
      )}

      <Container maw='1400px' w='100%' px='20px' {...containerProps}>
        {children}
      </Container>
    </Flex>
  )
}
