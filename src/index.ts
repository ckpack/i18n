interface messages {
  [index: string]: any;
}

class I18n {
  locale: string;
  fallbackLocale: string;
  messages: messages;
  /**
   * 获取I18构造函数
   * ```js
   * const i18n = new I18n({
   *   locale: 'en',
   *   fallbackLocale: 'zh',
   *   messages: {...}
   * });
   * ```
   * @param params - I18n构造参数
   */
  constructor (params: {locale: string, fallbackLocale?: string, messages: messages}) {
    const { locale, fallbackLocale, messages } = params;
    this.locale = locale;
    this.fallbackLocale = fallbackLocale || locale;
    this.messages = messages;
  }

  /**
   * 获取当前语言翻译
   */
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

  /**
   * 设置当前语言环境
   * @param locale - 当前语言
   */
  setLocale (locale: string) {
    if (Object.keys(this.messages).indexOf(locale) !== -1) {
      this.locale = locale;
      return true;
    }
    return false;
  }
}

export default I18n;
