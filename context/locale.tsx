import * as Localization from 'expo-localization';
import React, { PropsWithChildren } from 'react';

import enStrings from '../languages/english.json';
import frStrings from '../languages/french.json';

// This is an object so we can do "keyof typeof" below. Otherwise an array would make sense.
const supportedLanguages = {
  en: 'English',
  fr: 'French',
};

type SupportedLanguage = keyof typeof supportedLanguages;

type LocaleContextType = {
  language: SupportedLanguage;
  strings: {
    [key in SupportedLanguage]: typeof enStrings;
  };
};

const strings: LocaleContextType['strings'] = {
  en: enStrings,
  fr: frStrings,
};

const LocaleContext = React.createContext<LocaleContextType>(null!);

export function useLocale() {
  return React.useContext(LocaleContext);
}

export function LocaleProvider(props: PropsWithChildren) {
  const locales = Localization.useLocales();

  // This is a bit wonky, but we want to find the first user-preferred languageCode
  // that's one of our supported ones, otherwise fall back to 'en' in a type safe way.
  const language = (locales.find((locale) => {
    return (
      supportedLanguages[locale.languageCode as SupportedLanguage] !== undefined
    );
  })?.languageCode ?? 'en') as SupportedLanguage;

  return (
    <LocaleContext.Provider value={{ language, strings }}>
      {props.children}
    </LocaleContext.Provider>
  );
}
