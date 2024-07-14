// next-i18next.config.js

module.exports = {
  i18n: {
    defaultLocale: 'tr',
    locales: ['en', 'tr'],
  },
  returnObjects: true,
  fallbackLng: {
    default: ['tr'],
  },
  localePath: './public/locales',
};
