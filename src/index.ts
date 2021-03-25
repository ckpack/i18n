interface messages {
  [locale: string]: {
    [message: string]: any;
  };
}
interface params {
  [template: string]: any;
  [template: number]: any;
}

class I18n {
  locale: string;
  fallbackLocale: string;
  messages: messages;
  /**
   * I18n构造函数
   *
   * ```js
   * const i18n = new I18n({
   *   locale: 'en',
   *   fallbackLocale: 'zh',
   *   messages: {
   *     zh: { hello: '你好 世界'},
   *     en: { hello: 'hello world'},
   *   }
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
   * 获取语言环境内容；如果设置的`locale`内容不存在，返回`fallbackLocale`语言环境
   * ```js
   * i18n.t('message.search')
   * ```
   * @param key - 当前语言对应的key，如果是嵌套对象用`.`链接，如`message.hello`
   * @param params - 用于格式化语言对应的内容;如`message.hello`对应值为`{msg} world`, 那么`t('message.hello', { msg: 'hello' }) } ` 输出 `hello world`
   * @returns - 语言对应的内容
   */
  t (key: string, params?: params) {
    const locale = this.locale;
    const keys = key.split('.');
    const message = this.getMessagesByLocale(keys, locale) || this.getMessagesByLocale(keys, this.fallbackLocale);
    return this.formatMessage(message, params);
  }

  /**
   * 获取语言环境内容
   * @param keys - 当前语言对应的key，如果是嵌套对象用`.`链接，如`message.hello`
   * @param locale - 当前语言
   * @returns - 语言对应的内容
   */
  private getMessagesByLocale (keys: string[], locale: string) {
    return keys.reduce((val, cur) => {
      if (val && cur in val) {
        return val[cur];
      }
      return undefined;
    }, this.messages[locale]);
  }

  /**
   * 格式化
   * @param message - 格式化前语言对应的内容
   * @param params - 格式化message的参数
   * @returns - 格式化后语言对应的内容
   */
  private formatMessage (message: any, params?: params) {
    if (!message || typeof message !== 'string' || !params) return message;
    const messageArr = message.split(/[{}]/);

    let messageFormat = '';
    for (let index = 0; index < messageArr.length; index += 1) {
      const item = messageArr[index];
      if (!item) continue;
      if (index % 2 !== 0) {
        if (item in params || Array.isArray(params)) {
          messageFormat += params[item];
        } else {
          throw new Error(`${item} not in params`);
        }
      } else {
        messageFormat += item;
      }
    }
    return messageFormat;
  }

  /**
   * 设置当前语言环境
   * @param locale - 当前语言
   * @returns - 返回是否设置成功
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
