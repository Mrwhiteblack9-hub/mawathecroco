'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
export default function LanguageSwitcher({ currentLang }) {
  const pathname = usePathname()
  const languages = [{ code: 'en', name: '🇬🇧' },{ code: 'fr', name: '🇫🇷' },{ code: 'zh', name: '🇨🇳' }]
  const redirectedPathName = (locale) => {
    if (!pathname) return '/'
    const segments = pathname.split('/')
    segments[1] = locale
    return segments.join('/')
  }
  return (
    <div className="flex items-center gap-2 bg-mawa-card border border-white/10 rounded-full p-1">
      {languages.map((lang) => (
        <Link key={lang.code} href={redirectedPathName(lang.code)}
          className={`w-8 h-8 rounded-full grid place-items-center text-sm transition-colors ${
            currentLang === lang.code ? 'bg-mawa-blue text-black font-semibold' : 'hover:bg-white/10'
          }`}>
          {lang.name}
        </Link>
      ))}
    </div>
  )
}
