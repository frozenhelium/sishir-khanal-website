import en from '@/i18n-strings/en.json';
import np from '@/i18n-strings/np.json';

export const supportedLanguages = ['en', 'np'] as const;

const i18nStrings: Record<typeof supportedLanguages[number], typeof en> = {
    en,
    np,
}

export type Lang = keyof typeof i18nStrings

export function hasLocale(locale: string): locale is Lang {
    return locale in i18nStrings
}

export function getStrings(locale: Lang) {
    return i18nStrings[locale];
}

const EN_LOCALE = 'en-US';
const NP_LOCALE = 'ne';

export const localeByLang: Record<string, string> = {
    en: EN_LOCALE,
    np: NP_LOCALE,
} satisfies Record<Lang, string> ;

export const defaultLang = 'en' satisfies Lang;
export const defaultLocale = localeByLang[defaultLang];

