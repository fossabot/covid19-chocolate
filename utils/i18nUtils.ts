/* eslint-disable simple-import-sort/imports */
import { LinkPropertyHref } from 'vue-meta'
import type { Locale, LocaleObject } from 'nuxt-i18n'
/* eslint-enable simple-import-sort/imports */

export const getLinksLanguageAlternative = (
  routeBaseName: string,
  locales?: Array<Locale | LocaleObject>,
  defaultLocale?: string
) => {
  const links: LinkPropertyHref[] = []
  const getFullPathWihLocale = (locale: string) => {
    const pathLocale = locale === 'ja' ? '' : `/${locale}`
    if (routeBaseName === 'index') {
      return `https://sagamihara-stopcovid19.com${pathLocale}`
    } else {
      return `https://sagamihara-stopcovid19.com${pathLocale}/${routeBaseName}`
    }
  }

  if (locales) {
    for (const locale of locales) {
      if (typeof locale === 'string') continue
      if (locale.code === 'ja-basic') continue

      links.push({
        hid: `alternate-hreflang-${locale.iso}`,
        rel: 'alternate',
        href: getFullPathWihLocale(locale.code),
        hreflang: locale.iso,
      })
    }
  }
  if (defaultLocale) {
    links.push({
      hid: 'alternate-hreflang-x-default',
      rel: 'alternate',
      href: getFullPathWihLocale(defaultLocale),
      hreflang: 'x-default',
    })
  }

  return links
}
