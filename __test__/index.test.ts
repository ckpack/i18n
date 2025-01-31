import { describe, expect, it } from 'vitest';
import I18n from '../src';

describe('test i18n', () => {
  const messages = {
    zh: {
      message: {
        confirm: '确认',
        cancel: '取消',
        logout: '{name} 退出登录',
        update_password: '修改密码',
        upload: '上传',
        search: '搜索',
        amount: (v: string | number) => `${v}元`
      },
      tt: 3,
    },
    en: {
      message: {
        confirm: 'Confirm',
        cancel: 'Cancel',
        logout: 'Sign Out {name}',
        logout1: 'Sign Out {0}',
        update_password: 'Change password',
        upload: 'Upload',
        amount: (v: string | number) => `${v}$`
      },
      tt: 'three',
    },
  };

  it('i18n.t', () => {
    const i18n = new I18n({
      locale: 'en',
      fallbackLocale: 'zh',
      messages: messages,
    });
    expect(i18n.t('message.confirm')).toBe('Confirm');
    expect(i18n.t('message.search')).toBe('搜索');
    expect(i18n.t('message.logout', { name: 'username' })).toBe('Sign Out username');
    expect(i18n.t('message.logout')).toBe('Sign Out {name}');
    expect(i18n.t('message.logout1', ['username'])).toBe('Sign Out username');
    expect(i18n.t('message.amount', [6])).toBe('6$');
  });
  it('i18n.setLocale', () => {
    const i18n = new I18n({
      locale: 'en',
      fallbackLocale: 'zh',
      messages: messages,
    });
    expect(i18n.t('message.confirm')).toBe('Confirm');
    i18n.setLocale('zh');
    expect(i18n.t('message.confirm')).toBe('确认');
  });

  it('i18n.t', () => {
    const i18n = new I18n({
      locale: 'zh',
      messages: messages,
    });
    expect(i18n.t('message.logout', { name: 'chenkai' })).toBe('chenkai 退出登录');
    try {
      i18n.t('message.logout', { test: 'chenkai' });
    } catch (error) {
      expect(error.message).toBe('name not in params');
    }
    expect(i18n.t('message.confirm')).toBe('确认');
    i18n.setLocale('en');
    expect(i18n.t('message.search')).toBe('搜索');
    expect(i18n.setLocale('en')).toBe(true);
    expect(i18n.setLocale('en-')).toBe(false);
  });

  it('i18n.setLocaleMessage', () => {
    const i18n = new I18n({
      locale: 'zh',
      messages: {},
    });

    i18n.setLocaleMessage('zh', messages.zh);
    expect(i18n.t('message.confirm')).toBe('确认');
  });
});



