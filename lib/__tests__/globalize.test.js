/*!
 * React Native Globalize
 *
 * Copyright 2015-2018 Josh Swan
 * Released under the MIT license
 * https://github.com/joshswan/react-native-globalize/blob/master/LICENSE
 */

import Globalize from '../globalize';

describe('Globalize', () => {
  describe('static availableLocales()', () => {
    test('returns list of loaded locales', () => {
      expect(Globalize.availableLocales().sort()).toEqual([
        'am',           // Amharic
        'ar',           // Arabic
        'bg',           // Bulgarian
        'bn',           // Bengali
        'ca',           // Catalan
        'cs',           // Czech
        'da',           // Danish
        'de',           // German
        'el',           // Greek
        'en',           // English (United States)
        'en-GB',        // English (Great Britain)
        'es',           // Spanish
        'es-419',       // Spanish (Latin America & Caribbean)
        'et',           // Estonian
        'fa',           // Farsi
        'fi',           // Finnish
        'fil',          // Filipino
        'fr',           // French
        'gu',           // Gujarati
        'he',           // Hebrew
        'hi',           // Hindi
        'hr',           // Croatian
        'hu',           // Hungarian
        'id',           // Indonesian
        'it',           // Italian
        'ja',           // Japanese
        'kn',           // Kannada
        'ko',           // Korean
        'lt',           // Lithuanian
        'lv',           // Latvian
        'ml',           // Malayalam
        'mr',           // Marathi
        'ms',           // Malay
        'nb',           // Norwegian
        'nl',           // Dutch
        'pl',           // Polish
        'pt',           // Portuguese
        'pt-PT',        // Portuguese (Portugal)
        'ro',           // Romanian
        'ru',           // Russian
        'sk',           // Slovak
        'sl',           // Slovenian
        'sr',           // Serbian
        'sv',           // Swedish
        'sw',           // Swahili
        'ta',           // Tamil
        'te',           // Telugu
        'th',           // Thai
        'tr',           // Turkish
        'uk',           // Ukrainian
        'vi',           // Vietnamese
        'zh',           // Chinese
        'zh-Hans',      // Chinese (Simplified)
        'zh-Hant',      // Chinese (Traditional)
      ]);
    });
  });

  describe('static localeIsLoaded()', () => {
    test('returns true if locale loaded', () => {
      expect(Globalize.localeIsLoaded('en')).toBe(true);
    });

    test('returns false if locale not loaded', () => {
      expect(Globalize.localeIsLoaded('unknown')).toBe(false);
    });
  });

  describe('fallback', () => {
    test('selects closest locale match when fallback option enabled', () => {
      const globalize = new Globalize('en-AU', 'USD', { fallback: true });

      expect(globalize.locale).toBe('en');
    });

    test('throws if fallback not found', () => {
      expect(() => {
        new Globalize('ga', 'USD', { fallback: true }); // eslint-disable-line no-new
      }).toThrowError('Globalize: CLDR data for the selected language/locale has not been loaded! Check the locale you\'re using and remember that only certain data is included by default!');
    });
  });

  describe('warnOnMissingMessage', () => {
    test('logs warning on missing message if enabled', () => {
      const globalize = new Globalize('en', 'USD');

      const spy = jest.spyOn(console, 'warn');
      const messageFormatter = globalize.getMessageFormatter('test');

      expect(spy).toHaveBeenCalledWith('[Globalize] Missing message: test!');
      expect(messageFormatter()).toEqual('test');

      spy.mockRestore();
    });

    test('does not log warning if disabled', () => {
      const globalize = new Globalize('en', 'USD', { warnOnMissingMessage: false });

      const spy = jest.spyOn(console, 'warn');
      const messageFormatter = globalize.getMessageFormatter('test');

      expect(spy).not.toHaveBeenCalled();
      expect(messageFormatter()).toEqual('test');

      spy.mockRestore();
    });
  });

  describe('getDateParser()', () => {
    test('returns a date parser instance', () => {
      const globalize = new Globalize('en', 'USD');
      const dateParser = globalize.getDateParser({ date: 'medium' });

      expect(dateParser('Nov 1, 2015')).toEqual(new Date(2015, 10, 1, 0, 0, 0));
    });
  });

  describe('getMessageFormatter()', () => {
    test('supports array message key', () => {
      const globalize = new Globalize('en', 'USD', { warnOnMissingMessage: false });
      const messageFormatter = globalize.getMessageFormatter(['test', 'key']);

      expect(messageFormatter()).toEqual('test/key');
    });

    test('outputs defaultMessage option if key does not exist', () => {
      const globalize = new Globalize('en', 'USD', { warnOnMissingMessage: false });
      const messageFormatter = globalize.getMessageFormatter(['test', 'key'], { defaultMessage: 'testKeyDefault' });

      expect(messageFormatter()).toEqual('testKeyDefault');
    });
  });

  describe('getNumberParser()', () => {
    test('returns a number parser instance', () => {
      const globalize = new Globalize('en', 'USD');
      const numberParser = globalize.getNumberParser({ style: 'percent' });

      expect(numberParser('50%')).toEqual(0.5);
    });
  });

  describe('getCurrencySymbol()', () => {
    test('returns the right currency symbol for globally set locale and currency: en, USD', () => {
      const globalize = new Globalize('en', 'USD');
      const currencySymbol = globalize.getCurrencySymbol();

      expect(currencySymbol).toEqual('$');
    });

    test('returns the right currency symbol for custom set locale and currency: nl, EUR', () => {
      const globalize = new Globalize('en', 'USD');
      const currencySymbol = globalize.getCurrencySymbol('nl', 'EUR');

      expect(currencySymbol).toEqual('€');
    });

    test('returns the right currency symbol for global set locale and currency: de, CAD with custom alt-narrow set to true', () => {
      const globalize = new Globalize('de', 'CAD');
      const currencySymbol = globalize.getCurrencySymbol(null, null, true);

      expect(currencySymbol).toEqual('$');
    });
  });
});
