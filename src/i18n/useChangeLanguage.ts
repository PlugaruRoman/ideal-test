'use client'

import { usePathname, useRouter } from 'next/navigation'

import { cookieName, useTranslation } from '@/i18n'

export const useChangeLanguage = () => {
  const { i18n } = useTranslation()
  const router = useRouter()
  const pathname = usePathname()

  const onChangeLanguage = (value: string) => {
    i18n.changeLanguage(value?.toLowerCase())

    document.cookie = `${cookieName}=${value}; path=/`

    router.push(`/${value?.toLowerCase?.()}${pathname?.slice(3) || ''}`)
    router.refresh()
  }

  return { onChangeLanguage }
}
