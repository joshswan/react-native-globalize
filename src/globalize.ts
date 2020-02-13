/*!
 * React Native Globalize
 *
 * Copyright 2015-2020 Josh Swan
 * Released under the MIT license
 * https://github.com/joshswan/react-native-globalize/blob/master/LICENSE
 */

import Cldr from 'cldrjs';
import GlobalizeLib from 'globalize';

// Load compiled CLDR data
function load(): any[] {
  // Performance compromise: React Native bundles all JS/JSON into one bundle,
  // which grows rather large if all CLDR data is included. A short(er) list
  // of languages is loaded by default and additional CLDR data can be passed
  // via the `load` method below.
  return [
    require('./cldr.json'), // eslint-disable-line global-require
  ];
}

function getCacheKey(args: { [key: string]: any } | string[] | string | undefined): string {
  return JSON.stringify(args || {});
}

function getLocaleKey(locale: string): string {
  // iOS returns system locale info with underscores
  return locale.replace(/_/g, '-');
}

function getAvailableLocales(): string[] {
  return Object.keys((Cldr as any)._raw?.main || {});
}

function localeIsLoaded(locale: string): boolean {
  return !!((Cldr as any)._raw?.main?.[getLocaleKey(locale)]);
}

function findFallbackLocale(locale: string): string | null {
  const locales = getAvailableLocales();

  for (let i = locale.length - 1; i > 1; i -= 1) {
    const key = locale.substring(0, i);

    if (locales.includes(key)) {
      return key;
    }
  }

  return null;
}

function getCurrencySymbol(
  locale: string,
  currencyCode: string,
  altNarrow: boolean,
): string | null {
  // Check whether the locale has been loaded
  if (!localeIsLoaded(locale)) {
    return null;
  }

  const { currencies } = (Cldr as any)._raw.main[locale].numbers;

  // Check whether the given currency code exists within the CLDR file for the given locale
  if (!Object.keys(currencies).includes(currencyCode)) {
    return null;
  }

  // Return the right currency symbol, either the normal one or the alt-narrow one if desired
  return altNarrow ? currencies[currencyCode]['symbol-alt-narrow'] : currencies[currencyCode].symbol;
}

// Load the Cldr data
GlobalizeLib.load(load());

interface Options {
  fallback?: boolean;
  warnOnMissingMessage: boolean;
}

type PluralGroup = 'zero' | 'one' | 'two' | 'few' | 'many' | 'other';
type CurrencyFormatter = (value: number) => string;
type DateFormatter = (value: Date) => string;
type DateParser = (value: string) => Date;
type MessageFormatter = (variables?: string | string[] | Object) => string;
type NumberFormatter = (value: number) => string;
type NumberParser = (value: string) => number;
type PluralGenerator = (value: number) => PluralGroup;
type RelativeTimeFormatter = (value: number) => string;
type UnitFormatter = (value: number) => string;

export class Globalize {
  globalize: typeof GlobalizeLib;
  locale: string;
  currencyCode: string;
  options: Options;

  private currencyFormatters: { [code: string]: { [key: string]: CurrencyFormatter } };
  private dateFormatters: { [key: string]: DateFormatter };
  private dateParsers: { [key: string]: DateParser };
  private messageFormatters: { [key: string]: MessageFormatter };
  private numberFormatters: { [key: string]: NumberFormatter };
  private numberParsers: { [key: string]: NumberParser };
  private pluralGenerators: { [key: string]: PluralGenerator };
  private relativeTimeFormatters: { [unit: string]: { [key: string]: RelativeTimeFormatter } };
  private unitFormatters: { [unit: string]: { [key: string]: UnitFormatter } };

  constructor(locale: string, currencyCode?: string, options: Partial<Options> = {}) {
    this.locale = getLocaleKey(locale);
    this.currencyCode = currencyCode || 'USD';
    this.options = {
      warnOnMissingMessage: true,
      ...options,
    };

    if (!localeIsLoaded(this.locale)) {
      const fallback = this.options.fallback && findFallbackLocale(this.locale);

      if (fallback) {
        this.locale = fallback;
      } else {
        throw new Error('Globalize: CLDR data for the selected language/locale has not been loaded! Check the locale you\'re using and remember that only certain data is included by default!');
      }
    }

    // @ts-ignore
    this.globalize = new GlobalizeLib(this.locale);

    // Set up caches for generated formatters
    this.currencyFormatters = {};
    this.dateFormatters = {};
    this.dateParsers = {};
    this.messageFormatters = {};
    this.numberFormatters = {};
    this.numberParsers = {};
    this.pluralGenerators = {};
    this.relativeTimeFormatters = {};
    this.unitFormatters = {};
  }

  /**
   * Get array of available locales
   *
   * EN.availableLocales();
   */
  static availableLocales(): string[] {
    return getAvailableLocales();
  }

  /**
   * Load additional CLDR data into Globalize
   *
   * EN.load(CLDR_DATA);
   */
  static load(cldrData: Object): void {
    GlobalizeLib.load(cldrData);
  }

  /**
   * Load ICU MessageFormat strings into Globalize for formatting
   *
   * const messages = {
   *   en: {
   *     hello: 'Hello {name}'
   *   },
   *   pt: {
   *     hello: 'Olá {name}'
   *   }
   * };
   * EN.loadMessages(messages);
   */
  static loadMessages(messageData: Object): void {
    GlobalizeLib.loadMessages(messageData);
  }

  /**
   * Check if a given locale is loaded
   *
   * EN.localeIsLoaded('en');
   */
  static localeIsLoaded(locale: string): boolean {
    return localeIsLoaded(locale);
  }

  /**
   * Get a currency formatter for the given currency and
   * formatting options
   *
   * const formatUSD = EN.getCurrencyFormatter('USD', {style: 'code'});
   * const formatted = formatUSD(25);
   */
  getCurrencyFormatter(
    currencyCode?: string,
    options?: GlobalizeLib.CurrencyFormatterOptions,
  ): CurrencyFormatter {
    const key = getCacheKey(options);
    const currency = currencyCode || this.currencyCode;

    if (!this.currencyFormatters[currency]) {
      this.currencyFormatters[currency] = {};
    }

    if (!this.currencyFormatters[currency][key]) {
      this.currencyFormatters[currency][key] = this.globalize.currencyFormatter(currency, options);
    }

    return this.currencyFormatters[currency][key];
  }

  /**
   * Get only the currency symbol for the given currency and locale
   *
   * const symbol = EN.getCurrencySymbol('en', 'USD', true);
   */
  getCurrencySymbol(
    locale?: string,
    currencyCode?: string,
    altNarrow = false,
  ): string | null {
    return getCurrencySymbol(locale || this.locale, currencyCode || this.currencyCode, altNarrow);
  }

  /**
   * Get a date formatter with the given formatting options
   *
   * const mediumDate = EN.getDateFormatter({date: 'medium'});
   * const formatted = mediumDate(new Date()); // Sep 24, 2015
   */
  getDateFormatter(options?: GlobalizeLib.DateFormatterOptions): DateFormatter {
    const key = getCacheKey(options);

    if (!this.dateFormatters[key]) {
      this.dateFormatters[key] = this.globalize.dateFormatter(options);
    }

    return this.dateFormatters[key];
  }

  /**
   * Get a date parser with the given options (inverse of
   * formatter from getDateFormatter)
   *
   * const mediumDateParser = EN.getDateParser({date: 'medium'});
   * const dateObject = mediumDateParser('Nov 1, 2015'); // new Date(2015, 10, 1, 0, 0, 0)
   */
  getDateParser(options?: GlobalizeLib.DateFormatterOptions): DateParser {
    const key = getCacheKey(options);

    if (!this.dateParsers[key]) {
      this.dateParsers[key] = this.globalize.dateParser(options);
    }

    return this.dateParsers[key];
  }

  /**
   * Get a message parser for the given message key. Pass message
   * replacement variables as arguments or arrays for numbered
   * variables and as objects for named variables.
   *
   * const helloFormatter = EN.getMessageFormatter('hello');
   * const formatted = helloFormatter({ name: 'Josh' }); // Hello Josh
   */
  getMessageFormatter(
    path: string | string[],
    options: { defaultMessage?: string } = {},
  ): MessageFormatter {
    const key = getCacheKey(path);

    if (!this.messageFormatters[key]) {
      try {
        this.messageFormatters[key] = this.globalize.messageFormatter(path);
      } catch (err) {
        if (this.options.warnOnMissingMessage) {
          console.warn(`[Globalize] Missing message: ${key}!`); // eslint-disable-line no-console
        }

        this.messageFormatters[key] = (): string => {
          if (typeof options.defaultMessage === 'string') return options.defaultMessage;

          return Array.isArray(key) ? key.join('/') : key;
        };
      }
    }

    return this.messageFormatters[key];
  }

  /**
   * Get a number formatter with the given formatting options
   *
   * const fiveDecimalNumber = EN.getNumberFormatter({
   *   minimumFractionDigits: 5,
   *   maxiumumFractionDigits: 5,
   * });
   * const formatted = fiveDecimalNumber(Math.PI); // "3.14159"
   */
  getNumberFormatter(options?: GlobalizeLib.NumberFormatterOptions): NumberFormatter {
    const key = getCacheKey(options);

    if (!this.numberFormatters[key]) {
      this.numberFormatters[key] = this.globalize.numberFormatter(options);
    }

    return this.numberFormatters[key];
  }

  /**
   * Get a number parserwith the given options (inverse of
   * formatter from getNumberFormatter)
   *
   * const percentParser = EN.getNumberParser({style: 'percent'});
   * const number = percentParser('50%'); // 0.5
   */
  getNumberParser(options?: GlobalizeLib.NumberParserOptions): NumberParser {
    const key = getCacheKey(options);

    if (!this.numberParsers[key]) {
      this.numberParsers[key] = this.globalize.numberParser(options);
    }

    return this.numberParsers[key];
  }

  /**
   * Get a plural generator that will return a value's plural group
   *
   * const pluralGenerator = EN.getPluralGenerator();
   * const pluralGroupName = pluralGenerator(5); // "other"
   */
  getPluralGenerator(options?: GlobalizeLib.PluralGeneratorOptions): PluralGenerator {
    const key = getCacheKey(options);

    if (!this.pluralGenerators[key]) {
      this.pluralGenerators[key] = this.globalize.pluralGenerator(options) as PluralGenerator;
    }

    return this.pluralGenerators[key];
  }

  /**
   * Get a relative date formatter using the given units and
   * formatting options
   *
   * const relativeDateInMonths = EN.getRelativeTimeFormatter('month');
   * const formatted = relativeDateInMonths(-3); // "3 months ago"
   */
  getRelativeTimeFormatter(
    unit: string,
    options?: GlobalizeLib.RelativeTimeFormatterOptions,
  ): RelativeTimeFormatter {
    const key = getCacheKey(options);

    if (!this.relativeTimeFormatters[unit]) {
      this.relativeTimeFormatters[unit] = {};
    }

    if (!this.relativeTimeFormatters[unit][key]) {
      this.relativeTimeFormatters[unit][key] = this.globalize.relativeTimeFormatter(unit, options);
    }

    return this.relativeTimeFormatters[unit][key];
  }

  /**
   * Get a unit formatter with the given formatting options
   *
   * let unitFormatter = EN.getUnitFormatter('mile-per-hour');
   * let formatted = unitFormatter(5); // "5 miles/hour"
   */
  getUnitFormatter(unit: string, options?: GlobalizeLib.UnitFormatterOptions): UnitFormatter {
    const key = getCacheKey(options);

    if (!this.unitFormatters[unit]) {
      this.unitFormatters[unit] = {};
    }

    if (!this.unitFormatters[unit][key]) {
      this.unitFormatters[unit][key] = this.globalize.unitFormatter(unit, options);
    }

    return this.unitFormatters[unit][key];
  }
}
