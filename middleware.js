import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'

let locales = ['en', 'fr', 'zh']
let defaultLocale = 'en'

function getLocale(request) {
  const negotiatorHeaders = {}
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value))
  const languages = new Negotiator({ headers: negotiatorHeaders }).languages()
  try {
    return match(languages, locales, defaultLocale)
  } catch(e) {
    return defaultLocale
  }
}

export function middleware(request) {
  const { pathname } = request.nextUrl
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request)
    return Response.redirect(
      new URL(`/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`, request.url)
    )
  }
}
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|logo.jpg|banner.jpg|croco.svg).*)'],
}
