/* eslint-env jest */
import I18n from '../src';

console.log(I18n);
describe('test i18n', () => {
  const messages = {
    zh: {
      message: {
        confirm: '确认',
        cancel: '取消',
        logout: '退出登录',
        update_password: '修改密码',
        upload: '上传',
        search: '搜索'
      },
      tt: 3
    },
    en: {
      message: {
        confirm: 'Confirm',
        cancel: 'Cancel',
        logout: 'Sign Out',
        update_password: 'Change password',
        upload: 'Upload'
      },
      tt: 'three'
    }
  };

  it('i18n.t', () => {
    const i18n = new I18n({
      locale: 'en',
      fallbackLocale: 'zh',
      messages: messages
    });
    expect(i18n.t('message.confirm')).toBe('Confirm');
    expect(i18n.t('message.search')).toBe('搜索');
    expect(i18n.t('message.confirm', { locale: 'zh' })).toBe('确认');
  });
  it('i18n.setLocale', () => {
    const i18n = new I18n({
      locale: 'en',
      fallbackLocale: 'zh',
      messages: messages
    });
    expect(i18n.t('message.confirm')).toBe('Confirm');
    i18n.setLocale('zh');
    expect(i18n.t('message.confirm')).toBe('确认');
  });

  it('i18n.t', () => {
    const i18n = new I18n({
      locale: 'zh',
      messages: messages
    });
    expect(i18n.t('message.confirm')).toBe('确认');
    i18n.setLocale('en');
    expect(i18n.t('message.search')).toBe('搜索');
    expect(i18n.setLocale('en')).toBe(true);
    expect(i18n.setLocale('en-')).toBe(false);
  });
});
