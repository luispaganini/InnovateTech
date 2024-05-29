import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import 'intl-pluralrules'; // Polyfill for Intl.PluralRules

// Arquivos JSON de tradução
import enTranslation from '../public/locales/en/translation.json';
import ptTranslation from '../public/locales/pt/translation.json';

const resources = {
  en: {
    translation: enTranslation,
  },
  pt: {
    translation: ptTranslation,
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    lng: 'pt', // Default language
    interpolation: {
      escapeValue: false, // React already escapes by default
    },
    react: {
      useSuspense: false, // Disable suspense to prevent issues with React Native
    },
  })
  .then(() => console.log('i18n initialized successfully'))
  .catch((error) => console.error('i18n initialization failed', error));

export default i18n;