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

- [formatMessage](default.md#formatmessage)
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

Defined in: [index.ts:14](https://github.com/ckpack/i18n/blob/877a4f1/src/index.ts#L14)

## Properties

### fallbackLocale

• **fallbackLocale**: *string*

Defined in: [index.ts:13](https://github.com/ckpack/i18n/blob/877a4f1/src/index.ts#L13)

___

### locale

• **locale**: *string*

Defined in: [index.ts:12](https://github.com/ckpack/i18n/blob/877a4f1/src/index.ts#L12)

___

### messages

• **messages**: messages

Defined in: [index.ts:14](https://github.com/ckpack/i18n/blob/877a4f1/src/index.ts#L14)

## Methods

### formatMessage

▸ `Private`**formatMessage**(`message`: *any*, `params?`: params): *any*

格式化

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`message` | *any* | message   |
`params?` | params | 格式化message的参数    |

**Returns:** *any*

Defined in: [index.ts:57](https://github.com/ckpack/i18n/blob/877a4f1/src/index.ts#L57)

___

### getMessagesByLocale

▸ `Private`**getMessagesByLocale**(`keys`: *string*[], `locale`: *string*): *object*

#### Parameters:

Name | Type |
:------ | :------ |
`keys` | *string*[] |
`locale` | *string* |

**Returns:** *object*

Defined in: [index.ts:43](https://github.com/ckpack/i18n/blob/877a4f1/src/index.ts#L43)

___

### setLocale

▸ **setLocale**(`locale`: *string*): *boolean*

设置当前语言环境

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`locale` | *string* | 当前语言    |

**Returns:** *boolean*

Defined in: [index.ts:82](https://github.com/ckpack/i18n/blob/877a4f1/src/index.ts#L82)

___

### t

▸ **t**(`key`: *string*, `params?`: params): *any*

获取当前语言翻译

#### Parameters:

Name | Type |
:------ | :------ |
`key` | *string* |
`params?` | params |

**Returns:** *any*

Defined in: [index.ts:36](https://github.com/ckpack/i18n/blob/877a4f1/src/index.ts#L36)
