[@ckpack/i18n](../README.md) / [Exports](../modules.md) / default

# Class: default

## Table of contents

### Constructors

- [constructor](default.md#constructor)

### Properties

- [fallbackLocale](default.md#fallbacklocale)
- [locale](default.md#locale)
- [messages](default.md#messages)

### Methods

- [getMessagesByLocale](default.md#getmessagesbylocale)
- [setLocale](default.md#setlocale)
- [t](default.md#t)

## Constructors

### constructor

\+ **new default**(`params`: { `fallbackLocale?`: *string* ; `locale`: *string* ; `messages`: messages  }): [*default*](default.md)

获取I18构造函数
```js
const i18n = new I18n({
  locale: 'en',
  fallbackLocale: 'zh',
  messages: {...}
});
```

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`params` | *object* | I18n构造参数    |
`params.fallbackLocale?` | *string* | - |
`params.locale` | *string* | - |
`params.messages` | messages | - |

**Returns:** [*default*](default.md)

Defined in: [index.ts:8](https://github.com/ckpack/i18n/blob/71614d6/src/index.ts#L8)

## Properties

### fallbackLocale

• **fallbackLocale**: *string*

Defined in: [index.ts:7](https://github.com/ckpack/i18n/blob/71614d6/src/index.ts#L7)

___

### locale

• **locale**: *string*

Defined in: [index.ts:6](https://github.com/ckpack/i18n/blob/71614d6/src/index.ts#L6)

___

### messages

• **messages**: messages

Defined in: [index.ts:8](https://github.com/ckpack/i18n/blob/71614d6/src/index.ts#L8)

## Methods

### getMessagesByLocale

▸ `Private`**getMessagesByLocale**(`keys`: *string*[], `locale`: *string*): *any*

#### Parameters:

Name | Type |
:------ | :------ |
`keys` | *string*[] |
`locale` | *string* |

**Returns:** *any*

Defined in: [index.ts:36](https://github.com/ckpack/i18n/blob/71614d6/src/index.ts#L36)

___

### setLocale

▸ **setLocale**(`locale`: *string*): *boolean*

设置当前语言环境

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`locale` | *string* | 当前语言    |

**Returns:** *boolean*

Defined in: [index.ts:49](https://github.com/ckpack/i18n/blob/71614d6/src/index.ts#L49)

___

### t

▸ **t**(`key`: *string*, `options?`: { `locale?`: *string*  }): *any*

获取当前语言翻译

#### Parameters:

Name | Type |
:------ | :------ |
`key` | *string* |
`options` | *object* |
`options.locale?` | *string* |

**Returns:** *any*

Defined in: [index.ts:30](https://github.com/ckpack/i18n/blob/71614d6/src/index.ts#L30)
