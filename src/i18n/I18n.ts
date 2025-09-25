import type { i18n } from 'i18next';

interface I18n {
  changeLang: (lang: string) => void
  getI18n: () => i18n
  init: () => void
  lang: () => string
  t: () => (key: string, opts?: { [key: string]: string }) => string
}

export default I18n;
