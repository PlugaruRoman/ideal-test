import { NavSectionsType } from '@/types/sections'

export const pageSections = [
  {
    label: 'products',
    key: NavSectionsType.PRODUCTS_SECTION,
  },
]

export const products = [
  {
    id: 1,
    color: '#0F3FE7',
    key: 'rca',
    label: 'RCA',
    description: 'mandatory_internal_auto_liability_insurance',
    path: '/rca',
    disabled: false,
  },
  {
    id: 2,
    color: '#E67E22',
    key: 'green_card',
    label: 'green_card',
    description: 'mandatory_external_auto_liability_insurance',
    path: '/green-card',
    disabled: false,
  },
  {
    id: 3,
    color: '#E67E22',
    key: 'technical_testing',
    label: 'technical_testing',
    description: 'technical_inspection',
    path: '/technical-testing',
    disabled: true,
  },
]
