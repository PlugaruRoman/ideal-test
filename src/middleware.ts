import acceptLanguage from 'accept-language'
import { NextRequest, NextResponse } from 'next/server'

import { fallbackLng, languages, cookieName } from '@/i18n'

acceptLanguage.languages(languages)

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)'],
}

export function middleware(request: NextRequest) {
  let lng = fallbackLng

  if (request.cookies.has('reject_cookies')) {
    const response = NextResponse.next()
    response.cookies.delete(cookieName)
    return response
  }

  if (request.cookies.has(cookieName)) {
    lng = request.cookies.get(cookieName)?.value || fallbackLng
  } else if (request.headers.get('Accept-Language')) {
    lng =
      acceptLanguage.get(request.headers.get('Accept-Language')) || fallbackLng
  }

  const response = NextResponse.next()
  response.cookies.set(cookieName, lng)

  const pathname = request.nextUrl.pathname
  const isMissingLanguageInPath = !languages.some((loc) =>
    pathname.startsWith(`/${loc}`),
  )

  if (
    isMissingLanguageInPath &&
    !pathname.startsWith('/_next') &&
    !pathname.endsWith('.svg') &&
    !pathname.endsWith('.png')
  ) {
    return NextResponse.redirect(new URL(`/${lng}${pathname}`, request.url))
  }

  return response
}
