'use client'

import { Box, Flex, Grid, GridCol, Title } from '@mantine/core'
import { PageContainer } from '@/components'
import { useTranslation } from '@/i18n'

import { NavSectionsType } from '@/types/sections'
import { products } from '@/components/NavBar/data'
import { ProductCard } from '@/components/ProductCard/ProductCard'
import { useRouter } from 'next/navigation'

export const ProductsSection = () => {
  const { t } = useTranslation()
  const router = useRouter()

  return (
    <Box
      w='100%'
      mih={{ base: '750px', sm: '900px' }}
      h={{ base: '100%', sm: '100vh' }}
      className='overflow-hidden'
    >
      <PageContainer
        mx={{ xs: '0', sm: '25px' }}
        mih={{ base: '100%', sm: '720px' }}
        h='100%'
        id={NavSectionsType.PRODUCTS_SECTION}
        pos='relative'
      >
        <Flex gap='40px'>
          <Title order={2} fz='40px' miw='20%' fw={600}>
            {t('insurance_types')}
          </Title>

          <Grid gutter='20px'>
            {products?.map((product) => (
              <GridCol
                span={4}
                key={product?.key}
                onClick={() => router.push(product?.path)}
              >
                <ProductCard data={product} />
              </GridCol>
            ))}
          </Grid>
        </Flex>
      </PageContainer>
    </Box>
  )
}
