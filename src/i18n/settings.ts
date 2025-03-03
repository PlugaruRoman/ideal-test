export const fallbackLng = 'ro'
export const languages = [fallbackLng, 'ru', 'uk']
export const cookieName = 'i18next'
export const defaultNS = 'translation'

export function getOptions(lng = fallbackLng, ns = defaultNS) {
  return {
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  }
}
