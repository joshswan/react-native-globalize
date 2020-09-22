/*!
 * React Native Globalize
 *
 * Copyright 2015-2020 Josh Swan
 * Released under the MIT license
 * https://github.com/joshswan/react-native-globalize/blob/master/LICENSE
 */

import MockDate from 'mockdate';
import {
  createGlobalize,
  getAvailableLocales,
  getCurrencySymbol,
  loadMessages,
  localeIsLoaded,
} from '..';
import { Globalize } from '../types';

describe('core', () => {
  describe('createGlobalize()', () => {
    test('creates globalize object', () => {
      const globalize = createGlobalize({ locale: 'en' });

      expect(typeof globalize).toBe('object');
      expect(globalize.locale).toBe('en');
      expect(globalize.currencyCode).toBe('USD');
      expect(globalize).toHaveProperty('getCurrencyFormatter');
      expect(globalize).toHaveProperty('formatCurrency');
    });

    test('memoizes formatter creators', () => {
      const globalize = createGlobalize({ locale: 'en' });
      const dateFormatter1 = globalize.getDateFormatter();
      const dateFormatter2 = globalize.getDateFormatter();

      expect(dateFormatter2).toBe(dateFormatter1);
    });

    test('selects closest locale match when fallback option enabled', () => {
      const globalize = createGlobalize({ locale: 'en-AU', fallback: true });

      expect(globalize.locale).toBe('en');
    });

    test('uses defaultLocale if specified and locale not found', () => {
      expect(() => {
        createGlobalize({ locale: 'ga', defaultLocale: 'en' });
      }).not.toThrow();

      const globalize = createGlobalize({ locale: 'ga', defaultLocale: 'en' });
      expect(globalize.locale).toBe('en');
    });

    test('throws when locale not found and no defaultLocale specified', () => {
      const message = '[RNGlobalize] CLDR data for the selected language/locale has not been loaded!';

      expect(() => {
        createGlobalize({ locale: 'ga' });
      }).toThrowError(message);

      expect(() => {
        createGlobalize({ locale: 'ga', fallback: true });
      }).toThrowError(message);
    });

    test('logs errors to console', () => {
      const globalize = createGlobalize({ locale: 'en' });

      const spy = jest.spyOn(console, 'error').mockImplementation(() => {});
      // @ts-ignore
      globalize.formatDate(0);

      expect(spy).toHaveBeenCalledTimes(1);
      expect(spy.mock.calls[0][0]).toMatch('[RNGlobalize] Error formatting date. Value must be a Date object.');

      spy.mockRestore();
    });

    test('does not log errors if onError overridden', () => {
      const globalize = createGlobalize({ locale: 'en', onError: () => {} });

      const spy = jest.spyOn(console, 'error');
      // @ts-ignore
      globalize.formatDate(0);

      expect(spy).not.toHaveBeenCalled();

      spy.mockRestore();
    });
  });

  describe('getAvailableLocales()', () => {
    test('returns array of loaded locales', () => {
      const globalize = createGlobalize({ locale: 'en' });

      expect(globalize.getAvailableLocales()).toEqual(['de', 'en', 'es']);
      expect(getAvailableLocales()).toEqual(globalize.getAvailableLocales());
    });
  });

  describe('localeIsLoaded()', () => {
    test('returns true when locale is loaded', () => {
      const globalize = createGlobalize({ locale: 'en' });

      expect(globalize.localeIsLoaded('en')).toBe(true);
      expect(localeIsLoaded('en')).toBe(true);
    });

    test('returns false when locale is not loaded', () => {
      const globalize = createGlobalize({ locale: 'en' });

      expect(globalize.localeIsLoaded('unknown')).toBe(false);
      expect(localeIsLoaded('unknown')).toBe(false);
    });
  });

  describe('getCurrencySymbol()', () => {
    test('returns currency symbol based on instance locale', () => {
      const globalize = createGlobalize({ locale: 'en' });

      expect(globalize.getCurrencySymbol('CAD')).toBe('CA$');
    });

    test('returns currency symbol based on instance currency if no argument passed', () => {
      const globalize = createGlobalize({ locale: 'en' });
      expect(globalize.getCurrencySymbol()).toBe('$');
    });

    test('returns currency symbol based on supplied locale', () => {
      expect(getCurrencySymbol('en', 'USD')).toBe('$');
    });

    test('returns alt narrow currency symbol if specified', () => {
      expect(getCurrencySymbol('de', 'CAD', true)).toBe('$');
    });

    test('returns null for locales that are not loaded', () => {
      expect(getCurrencySymbol('unknown', 'CAD')).toBeNull();
    });
  });

  describe('formatters', () => {
    let globalize: Globalize;
    let consoleError: jest.SpyInstance;

    beforeEach(() => {
      globalize = createGlobalize({ locale: 'en' });
      consoleError = jest.spyOn(console, 'error').mockImplementation(() => {});
    });

    afterEach(() => {
      MockDate.reset();
      consoleError.mockRestore();
    });

    describe('formatCurrency()', () => {
      test('outputs formatted currency string', () => {
        expect(globalize.formatCurrency(10)).toBe('$10.00');
      });

      test('errors on non-number value', () => {
        // @ts-ignore
        expect(globalize.formatCurrency('10')).toBe('10');
        expect(consoleError).toHaveBeenCalled();
      });
    });

    describe('formatDate()', () => {
      test('outputs formatted date string', () => {
        expect(globalize.formatDate(new Date(2020, 0, 1))).toBe('1/1/2020');
      });

      test('errors on non-date value', () => {
        // @ts-ignore
        expect(globalize.formatDate(0)).toBe('0');
        expect(consoleError).toHaveBeenCalled();
      });
    });

    describe('formatMessage()', () => {
      beforeAll(() => {
        loadMessages({
          en: {
            test: 'Hello {name}!',
            nested: {
              key: 'Hello {name}!',
              simple: 'Hi!',
            },
          },
        });
      });

      test('outputs formatted message string', () => {
        expect(globalize.formatMessage('test', { name: 'world' })).toBe('Hello world!');
        expect(globalize.formatMessage('nested/key', { name: 'world' })).toBe('Hello world!');
        expect(globalize.formatMessage(['nested', 'key'], { name: 'world' })).toBe('Hello world!');
        expect(globalize.formatMessage('nested/simple')).toBe('Hi!');
      });

      test('errors when message key undefined', () => {
        expect(globalize.formatMessage('unknown/key')).toBe('unknown/key');
        expect(consoleError).toHaveBeenCalled();
      });

      test('errors when invalid values are supplied', () => {
        expect(globalize.formatMessage('test', null)).toBe('test');
        expect(consoleError).toHaveBeenCalled();
      });

      test('returns defaultMessage if supplied and key undefined', () => {
        expect(globalize.formatMessage('unknown/key', {}, { defaultMessage: 'Uh oh!' })).toBe('Uh oh!');
        expect(consoleError).toHaveBeenCalled();
      });
    });

    describe('formatNumber()', () => {
      test('outputs formatted number string', () => {
        expect(globalize.formatNumber(100000)).toBe('100,000');
      });

      test('errors on non-number value', () => {
        // @ts-ignore
        expect(globalize.formatNumber('test')).toBe('test');
        expect(consoleError).toHaveBeenCalled();
      });
    });

    describe('formatPlural()', () => {
      test('outputs plural group based on value', () => {
        expect(globalize.formatPlural(0)).toBe('other');
        expect(globalize.formatPlural(1)).toBe('one');
        expect(globalize.formatPlural(2)).toBe('other');
      });

      test('errors on non-number value', () => {
        // @ts-ignore
        expect(globalize.formatPlural('test')).toBe('other');
        expect(consoleError).toHaveBeenCalled();
      });
    });

    describe('formatRelativeTime()', () => {
      test('outputs formatted relative time string', () => {
        expect(globalize.formatRelativeTime(10, 'second')).toBe('in 10 seconds');
        expect(globalize.formatRelativeTime(-10, 'minute')).toBe('10 minutes ago');
      });

      test('handle values of type Date', () => {
        const date = new Date(2020, 0, 2);
        MockDate.set('2020-01-01');

        expect(globalize.formatRelativeTime(date, 'day')).toBe('tomorrow');
      });

      test('finds appropriate unit if "auto" specified', () => {
        const date = new Date(2020, 1, 1);
        MockDate.set('2020-01-01');

        expect(globalize.formatRelativeTime(date, 'auto')).toBe('next month');
      });

      test('errors on non-number value', () => {
        // @ts-ignore
        expect(globalize.formatRelativeTime('test', 'second')).toBe('test second');
        expect(consoleError).toHaveBeenCalled();
      });
    });

    describe('formatUnit()', () => {
      test('outputs formatted unit string', () => {
        expect(globalize.formatUnit(100, 'mile')).toBe('100 miles');
      });

      test('errors on non-number value', () => {
        // @ts-ignore
        expect(globalize.formatUnit('test', 'hour')).toBe('test hour');
        expect(consoleError).toHaveBeenCalled();
      });
    });

    describe('parseDate()', () => {
      test('returns Date parsed from string', () => {
        expect(globalize.parseDate('1/1/2020')).toEqual(new Date(2020, 0, 1));
      });

      test('errors on non-string value', () => {
        MockDate.set('2020-01-01');

        // @ts-ignore
        expect(globalize.parseDate(0)).toEqual(new Date());
        expect(consoleError).toHaveBeenCalled();
      });
    });

    describe('parseNumber()', () => {
      test('returns number parsed from string', () => {
        expect(globalize.parseNumber('100,000')).toBe(100000);
      });

      test('errors on non-string value', () => {
        // @ts-ignore
        expect(globalize.parseNumber({})).toBe(NaN);
        expect(consoleError).toHaveBeenCalled();
      });
    });
  });
});
