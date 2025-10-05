import i18n, { use as useI18n } from 'i18next';
import { initReactI18next } from 'react-i18next';

import { en, es } from './locale';

const resources = {
  en: { translation: en },
  es: { translation: es }
};

useI18n(initReactI18next)
  .init({
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    },
    lng: 'en',
    resources
  });

export default i18n;
