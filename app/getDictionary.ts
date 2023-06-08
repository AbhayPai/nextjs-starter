import 'server-only'
import { i18n } from '@/app/i18n-config'

// We enumerate all dictionaries here for better linting and typescript support
// We also get the default import for cleaner types
const dictionaries = {
  en: () => import('@/app/dictionaries/en.json').then((module) => module.default),
  es: () => import('@/app/dictionaries/es.json').then((module) => module.default),
}

export const getDictionary = async (locale: string) => {
  const selectedLocale = i18n.locales.includes(locale) ? locale : i18n.defaultLocale;
  const fetchDictionary = dictionaries[selectedLocale];

  if (fetchDictionary) {
    return await fetchDictionary();
  }

  throw new Error(`Dictionary for locale ${selectedLocale} not found.`);
};
