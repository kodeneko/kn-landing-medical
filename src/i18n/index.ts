import I18nNext from './I18nNext';

const { VITE_I18N: I18N } = import.meta.env;

function getI18n () {
  switch (I18N) {
    case 'i18next':
      return I18nNext.getInstance();
    default:
      return I18nNext.getInstance();
  }
}

function initI18n () {
  getI18n().init();
}

function t (str: string, opts?: { [id: string]: string }) {
  return getI18n().t(str, opts);
}

function changeLang (lang: string) {
  return getI18n().changeLang(lang);
}

export { changeLang, getI18n, initI18n, t };
