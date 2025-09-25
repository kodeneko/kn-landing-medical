import I18nNext from './I18nNext';

const { VITE_I18N: I18N } = import.meta.env;

function changeLang(lang: string) {
  return getI18n().changeLang(lang);
}

function getI18n() {
  switch (I18N) {
    case 'i18next':
      return I18nNext.getInstance();
    default:
      return I18nNext.getInstance();
  }
}

function getT() {
  return getI18n().t();
}

function getLang() {
  return getI18n().lang();
}

function initI18n() {
  getI18n().init();
}

export {
  changeLang, getI18n, getLang, getT, initI18n
};
