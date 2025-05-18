interface I18n {
  changeLang: (lang: string) => void
  init: () => void
  t: () => (key: string, opts?: { [key: string]: string }) => string
}

export default I18n;
