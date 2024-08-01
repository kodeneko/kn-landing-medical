interface I18n {
  init: () => void;
  t: (key: string, opts?: { [key: string]: string }) => string;
  changeLang: (lang: string) => void;
}

export default I18n;
