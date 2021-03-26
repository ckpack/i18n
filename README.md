# @ckpack/i18n

The smallest fastest internationalization library

# Example

```js
const i18n = new I18n({
  locale: defaultLocale,
  fallbackLocale: defaultLocale,
  messages: {
    zh: {
      hello: "你好 世界",
      say: {
        thanks: "{name} 谢谢"
      }
    },
    en: {
      hello: "hello world",
      say: {
        thanks: "thanks {name}"
      }
    }
  }
});

i18n.t('hello') // 你好 世界
i18n.t('say.thanks', {name: 'xiaohong'}) // xiaohong 谢谢
```

# [Demo](https://codesandbox.io/s/recursing-tu-l5nc3?file=/index.html)

# [Documentation](https://ckpack.github.io/i18n/)
