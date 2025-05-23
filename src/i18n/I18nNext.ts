import { use as i18nextUse } from 'i18next';
import { initReactI18next, useTranslation } from 'react-i18next';

import I18n from './I18n';
import { en, es } from './locale';

class I18nNext implements I18n {
  private static _instance: I18nNext;

  private constructor() {
  }

  public static getInstance(): I18nNext {
    if (!this._instance) {
      this._instance = new I18nNext();
    }
    return this._instance;
  }

  public changeLang(lang: string): void {
    const { i18n } = useTranslation();
    i18n.changeLanguage(lang);
  }

  init() {
    i18nextUse(initReactI18next)
      .init({
        fallbackLng: 'en',
        interpolation: { escapeValue: false },
        lng: 'en',
        resources: {
          en: { translation: en },
          es: { translation: es }
        }
      });
  }

  public t(): (key: string, opts?: { [key: string]: string }) => string {
    return useTranslation().t;
  }
}

export default I18nNext;
