# @ckpack/i18n

The smallest fastest internationalization library

# DEMO

```js
const i18n = new I18n({
  locale: 'en',
  fallbackLocale: 'zh',
  messages: {
    zh: { hello: '你好 世界'},
    en: { hello: 'hello world'},
  }
});
i18n.t('hello')
```

# [Documentation](https://ckpack.github.io/i18n/)
