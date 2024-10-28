# i18n

A lightweight internationalization library

```js
const i18n = new I18n({
  locale: defaultLocale,
  fallbackLocale: defaultLocale,
  messages: {
    zh: {
      hello: "你好 世界",
      nest: {
        author: "作者: {name}"
      },
      amount: (v: string | number) => `${v}元`
    },
    en: {
      hello: "hello world",
      nest: {
        author: "author: {name}"
      },
      amount: (v: string | number) => `${v}$`
    }
  }
});

// defaultLocale = "zh";
i18n.t('hello') // 你好 世界
i18n.t('nest.author', {name: 'xiaohong'}) // 作者: xiaohong

// defaultLocale = "en";
i18n.t('hello') // hello world
i18n.t('nest.author', {name: 'xiaohong'}) // author: xiaohong
```

## [Demo](https://ckpack.github.io/i18n/)
