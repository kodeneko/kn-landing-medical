import I18nNext from './I18nNext';

const { VITE_I18N: I18N } = import.meta.env;

function initI18n () {
  switch (I18N) {
    case 'i18next':
      return I18nNext.getInstance().init();
    default:
      return I18nNext.getInstance().init();
  }
}

export { initI18n };
