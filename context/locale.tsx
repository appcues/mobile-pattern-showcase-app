import * as Localization from 'expo-localization';
import React, { PropsWithChildren } from 'react';

import arStrings from '../languages/arabic.json';
import enStrings from '../languages/english.json';
import frStrings from '../languages/french.json';
import heStrings from '../languages/hebrew.json';
import ptStrings from '../languages/portugese.json';
import esStrings from '../languages/spanish.json';

const strings = {
  en: enStrings,
  ar: arStrings,
  fr: frStrings,
  he: heStrings,
  pt: ptStrings,
  es: esStrings,
};

const defaultLanguage: SupportedLanguage = 'en';

type SupportedLanguage = keyof typeof strings;

type LocaleContextType = {
  language: SupportedLanguage;
  strings: {
    [key in SupportedLanguage]: typeof enStrings;
  };
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
    return strings[locale.languageCode as SupportedLanguage] !== undefined;
  })?.languageCode ?? defaultLanguage) as SupportedLanguage;

  return (
    <LocaleContext.Provider value={{ language, strings }}>
      {props.children}
    </LocaleContext.Provider>
  );
}
