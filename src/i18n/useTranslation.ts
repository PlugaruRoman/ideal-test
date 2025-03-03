'use client'

import i18next from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import resourcesToBackend from 'i18next-resources-to-backend'
import { useParams } from 'next/navigation'
import {
  UseTranslationOptions,
  initReactI18next,
  useTranslation as useTranslationOrg,
} from 'react-i18next'

import { getOptions, languages } from './settings'

const runsOnServerSide = typeof window === 'undefined'

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(
    resourcesToBackend(
      (language: string) => import(`./locales/${language}.json`),
    ),
  )
  .init({
    ...getOptions(),
    lng: undefined, // let detect the language on client side
    detection: { order: ['path', 'htmlTag', 'cookie', 'navigator'] },
    preload: runsOnServerSide ? languages : [],
  })

export function useTranslation(
  keyPrefix?: string,
  options?: UseTranslationOptions<undefined>,
) {
  const { locale: langFromParams } = useParams()
  const lang = Array.isArray(langFromParams)
    ? langFromParams[0]
    : langFromParams

  const ret = useTranslationOrg(lang, { ...options, keyPrefix })
  const { i18n } = ret
  if (runsOnServerSide && i18n.resolvedLanguage !== lang) {
    i18n.changeLanguage(lang)
  }
  return ret
}
