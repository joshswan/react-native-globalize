/*!
 * React Native Globalize
 *
 * Copyright 2015-2018 Josh Swan
 * Released under the MIT license
 * https://github.com/joshswan/react-native-globalize/blob/master/LICENSE
 */

import Cldr from 'cldrjs';
import Globalize from 'globalize';

// Load compiled CLDR data
function load() {
  // Performance compromise: React Native bundles all JS/JSON into one bundle,
  // which grows rather large if all CLDR data is included. A short(er) list
  // of languages is loaded by default and additional CLDR data can be passed
  // via the `load` method below.
  return [
    require('./cldr.json'), // eslint-disable-line global-require
  ];
}

// Helper to create cache key from formatter arguments
function cacheKey(args) {
  return JSON.stringify(args || {});
}

// Get array of available locales
function getAvailableLocales() {
  if (Cldr._raw && Cldr._raw.main) {
    return Object.keys(Cldr._raw.main);
  }

  return [];
}

// Find a fallback locale
function findFallbackLocale(locale) {
  const locales = getAvailableLocales();

  for (let i = locale.length - 1; i > 1; i -= 1) {
    const key = locale.substring(0, i);

    if (locales.includes(key)) {
      return key;
    }
  }

  return null;
}

// Helper to convert locale keys
function getLocaleKey(locale) {
  // iOS returns system locale info with underscores
  return locale.replace(/_/g, '-');
}

// Check if CLDR data loaded for a given locale
function localeIsLoaded(locale) {
  return !!(Cldr._raw && Cldr._raw.main && Cldr._raw.main[getLocaleKey(locale)]);
}

// Returns only the currency symbol from the CLDR file
function getCurrencySymbol(locale, currencyCode, altNarrow) {
  // Check whether the locale has been loaded
  if (!localeIsLoaded(locale)) {
    return null;
  }

  const currencies = Cldr._raw.main[locale].numbers.currencies;

  // Check whether the given currency code exists within the CLDR file for the given locale
  if (!Object.keys(currencies).includes(currencyCode)) {
    return null;
  }

  // Return the right currency symbol, either the normal one or the alt-narrow one if desired
  return altNarrow ? currencies[currencyCode]['symbol-alt-narrow'] : currencies[currencyCode].symbol;
}

// Load the Cldr data
Globalize.load(load());

export default class {
  /**
   * Create a new Globalize instance for internal use using
   * the given locale. Optionally add a default currency for
   * currency formatting.
   *
   * const ReactNativeGlobalize = require('react-native-globalize');
   * const EN = new ReactNativeGlobalize('en');
   */
  constructor(locale, currencyCode, options = {}) {
    // Determine if locale data is loaded
    if (localeIsLoaded(locale)) {
      // Data is loaded, set the locale
      this.locale = getLocaleKey(locale);
    } else if (options.fallback) {
      // Fallback mode: try to find appropriate fallback
      this.locale = findFallbackLocale(locale);
    }

    // Throw error if no locale
    if (!this.locale) {
      throw new Error('Globalize: CLDR data for the selected language/locale has not been loaded! Check the locale you\'re using and remember that only certain data is included by default!');
    }

    // Set options
    this.options = Object.assign({
      warnOnMissingMessage: true,
    }, options);

    // Set currency code
    this.currencyCode = currencyCode || 'USD';

    // Create new Globalize instance
    this.globalize = new Globalize(this.locale);

    // Set up caches for generated formatters
    this._currencyFormatters = {};
    this._dateFormatters = {};
    this._dateParsers = {};
    this._messageFormatters = {};
    this._numberFormatters = {};
    this._numberParsers = {};
    this._pluralGenerators = {};
    this._relativeTimeFormatters = {};
  }

  /**
   * Get array of available locales
   *
   * EN.availableLocales();
   */
  static availableLocales() {
    return getAvailableLocales();
  }

  /**
   * Load additional CLDR data into Globalize
   *
   * EN.load(CLDR_DATA);
   */
  static load(cldrData) {
    return Globalize.load(cldrData);
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
  static loadMessages(messageData) {
    return Globalize.loadMessages(messageData);
  }

  /**
   * Check if a given locale is loaded
   *
   * EN.localeIsLoaded('en');
   */
  static localeIsLoaded(locale) {
    return localeIsLoaded(locale);
  }

  /**
   * Get a currency formatter for the given currency and
   * formatting options
   *
   * let formatUSD = EN.getCurrencyFormatter('USD', {style: 'code'});
   * let formatted = formatUSD(25);
   */
  getCurrencyFormatter(currencyCode, options) {
    const key = cacheKey(options);
    const currency = currencyCode || this.currencyCode;

    if (!this._currencyFormatters[currency]) {
      this._currencyFormatters[currency] = {};
    }

    if (!this._currencyFormatters[currency][key]) {
      this._currencyFormatters[currency][key] = this.globalize.currencyFormatter(currency, options);
    }

    return this._currencyFormatters[currency][key];
  }

  /**
   * Get only the currency symbol for the given currency and locale
   *
   * let symbol = EN.getCurrencySymbol('en', 'USD', true);
   */
  getCurrencySymbol(customLocale, customCurrencyCode, altNarrow = false) {
    const currencyCode = customCurrencyCode || this.currencyCode;
    const locale = customLocale || this.locale;

    return getCurrencySymbol(locale, currencyCode, altNarrow);
  }

  /**
   * Get a date formatter with the given formatting options
   *
   * let mediumDate = EN.getDateFormatter({date: 'medium'});
   * let formatted = mediumDate(new Date()); // Sep 24, 2015
   */
  getDateFormatter(options) {
    const key = cacheKey(options);

    if (!this._dateFormatters[key]) {
      this._dateFormatters[key] = this.globalize.dateFormatter(options);
    }

    return this._dateFormatters[key];
  }

  /**
   * Get a date parser with the given options (inverse of
   * formatter from getDateFormatter)
   *
   * let mediumDateParser = EN.getDateParser({date: 'medium'});
   * let dateObject = mediumDateParser('Nov 1, 2015'); // new Date(2015, 10, 1, 0, 0, 0)
   */
  getDateParser(options) {
    const key = cacheKey(options);

    if (!this._dateParsers[key]) {
      this._dateParsers[key] = this.globalize.dateParser(options);
    }

    return this._dateParsers[key];
  }

  /**
   * Get a message parser for the given message key. Pass message
   * replacement variables as arguments or arrays for numbered
   * variables and as objects for named variables.
   *
   * let helloFormatter = EN.getMessageFormatter('hello');
   * let formatted = helloFormatter({name: 'Josh'}); // Hello Josh
   */
  getMessageFormatter(key, options = {}) {
    if (!this._messageFormatters[key]) {
      try {
        this._messageFormatters[key] = this.globalize.messageFormatter(key);
      } catch (err) {
        if (this.options.warnOnMissingMessage) {
          console.warn(`[Globalize] Missing message: ${key}!`); // eslint-disable-line no-console
        }

        this._messageFormatters[key] = () => {
          if (typeof options.defaultMessage === 'string') return options.defaultMessage;

          return Array.isArray(key) ? key.join('/') : key;
        };
      }
    }

    return this._messageFormatters[key];
  }

  /**
   * Get a number formatter with the given formatting options
   *
   * let fiveDecimalNumber = EN.getNumberFormatter({
   *   minimumFractionDigits: 5,
   *   maxiumumFractionDigits: 5,
   * });
   * let formatted = fiveDecimalNumber(Math.PI); // "3.14159"
   */
  getNumberFormatter(options) {
    const key = cacheKey(options);

    if (!this._numberFormatters[key]) {
      this._numberFormatters[key] = this.globalize.numberFormatter(options);
    }

    return this._numberFormatters[key];
  }

  /**
   * Get a number parserwith the given options (inverse of
   * formatter from getNumberFormatter)
   *
   * let percentParser = EN.getNumberParser({style: 'percent'});
   * let number = percentParser('50%'); // 0.5
   */
  getNumberParser(options) {
    const key = cacheKey(options);

    if (!this._numberParsers[key]) {
      this._numberParsers[key] = this.globalize.numberParser(options);
    }

    return this._numberParsers[key];
  }

  /**
   * Get a plural generator that will return a value's plural group
   *
   * let pluralGenerator = EN.getPluralGenerator();
   * let pluralGroupName = pluralGenerator(5); // "other"
   */
  getPluralGenerator(options) {
    const key = cacheKey(options);

    if (!this._pluralGenerators[key]) {
      this._pluralGenerators[key] = this.globalize.pluralGenerator(options);
    }

    return this._pluralGenerators[key];
  }

  /**
   * Get a relative date formatter using the given units and
   * formatting options
   *
   * let relativeDateInMonths = EN.getRelativeTimeFormatter('month');
   * let formatted = relativeDateInMonths(-3); // "3 months ago"
   */
  getRelativeTimeFormatter(unit, options) {
    const key = cacheKey(options);

    if (!this._relativeTimeFormatters[unit]) {
      this._relativeTimeFormatters[unit] = {};
    }

    if (!this._relativeTimeFormatters[unit][key]) {
      this._relativeTimeFormatters[unit][key] = this.globalize.relativeTimeFormatter(unit, options);
    }

    return this._relativeTimeFormatters[unit][key];
  }
}
