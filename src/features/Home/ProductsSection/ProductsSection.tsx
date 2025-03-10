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
      h={{ base: '100%', sm: 'min-content' }}
      className='overflow-hidden'
    >
      <PageContainer
        mx={{ xs: '0', sm: '25px' }}
        h='100%'
        pt='50px'
        pb='200px'
        id={NavSectionsType.PRODUCTS_SECTION}
        pos='relative'
      >
        <Flex gap='40px'>
          <Grid gutter='20px'>
            {products?.map((product) => (
              <GridCol
                span={4}
                key={product?.key}
                onClick={() => !product?.disabled && router.push(product?.path)}
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
