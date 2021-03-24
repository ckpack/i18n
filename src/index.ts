interface messages {
  [index: string]: any;
}

class I18n {
  locale: string;
  fallbackLocale: string;
  messages: messages;
  constructor (params: {locale: string, fallbackLocale?: string, messages: messages}) {
    const { locale, fallbackLocale, messages } = params;
    this.locale = locale;
    this.fallbackLocale = fallbackLocale || locale;
    this.messages = messages;
  }

  t (key: string, options: {locale?: string} = {}) {
    const locale = options.locale || this.locale;
    const keys = key.split('.');
    return this.getMessagesByLocale(keys, locale) || this.getMessagesByLocale(keys, this.fallbackLocale);
  }

  private getMessagesByLocale (keys: string[], locale: string) {
    return keys.reduce((val, cur) => {
      if (val && cur in val) {
        return val[cur];
      }
      return undefined;
    }, this.messages[locale]);
  }

  setLocale (locale: string) {
    this.locale = locale;
  }
}

export default I18n;
