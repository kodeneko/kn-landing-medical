import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import I18n from './I18n';
import { en, es } from './locale';

class I18nNext implements I18n {

  private _instance: I18nNext;

  private constructor () {
  }

  static public getInstance (): I18nNext {
    if (!this._instance) {
      this._instance = new I18nNext();
    }
    return this._instance;
  }

  init () {
    i18next.
      use(initReactI18next).
      init({
        fallbackLng: 'en',
        interpolation: { escapeValue: false },
        lng: 'en',
        resources: {
          en,
          es
        }
      });
  }

}

export default I18nNext;
