/*!
 * React Native Globalize
 *
 * Copyright 2015 Josh Swan
 * Released under the MIT license
 * https://github.com/joshswan/react-native-globalize/blob/master/LICENSE
 */
'use strict';

const Cldr = require('cldrjs');
const Globalize = require('globalize');

// Load all required supplemental files
function supplementalFiles() {
  return [
    require('cldr-data/supplemental/currencyData.json'),
    require('cldr-data/supplemental/likelySubtags.json'),
    require('cldr-data/supplemental/numberingSystems.json'),
    require('cldr-data/supplemental/ordinals.json'),
    require('cldr-data/supplemental/plurals.json'),
    require('cldr-data/supplemental/timeData.json'),
    require('cldr-data/supplemental/weekData.json'),
  ];
}

// Helper to create cache key from formatter arguments
function cacheKey(args) {
  return JSON.stringify(args || {});
}

// Initialize the Cldr loader
// https://github.com/rxaviers/cldrjs/issues/30
Cldr.setAvailableBundlesHack = function(availableLocales) {
  availableLocales.splice(availableLocales.indexOf('root'), 1);
  this._availableBundleMapQueue = availableLocales;
};

// Assign availableLocales to Cldr
Cldr.load(require('cldr-data/supplemental/likelySubtags.json'));
Cldr.setAvailableBundlesHack(require('cldr-data/availableLocales.json').availableLocales);

// Load the supplemental files
Globalize.load(supplementalFiles());

export default class {
  /**
   * Create a new Globalize instance for internal use using
   * the given locale. Optionally add a default currency for
   * currency formatting.
   *
   * const ReactNativeGlobalize = require('react-native-globalize');
   * const EN = new ReactNativeGlobalize('en');
   */
  constructor(locale, currencyCode) {
    this.locale = locale;
    this.currencyCode = currencyCode || 'USD';

    // Create Globalize object
    this.globalize = new Globalize(locale);

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

  static load(cldrData) {
    Globalize.load(cldrData);
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
   * Get a currency formatter for the given currency and
   * formatting options
   *
   * let formatUSD = EN.getCurrencyFormatter('USD', {style: 'code'});
   * let formatted = formatUSD(25);
   */
  getCurrencyFormatter(currencyCode, options) {
    let key = cacheKey(options);
    let currency = currencyCode || this.currencyCode;

    if (!this._currencyFormatters[currency]) {
      this._currencyFormatters[currency] = {};
    }

    if (!this._currencyFormatters[currency][key]) {
      this._currencyFormatters[currency][key] = this.globalize.currencyFormatter(currency, options);
    }

    return this._currencyFormatters[currency][key];
  }

  /**
   * Get a date formatter with the given formatting options
   *
   * let mediumDate = EN.getDateFormatter({date: 'medium'});
   * let formatted = mediumDate(new Date()); // Sep 24, 2015
   */
  getDateFormatter(options) {
    let key = cacheKey(options);

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
    let key = cacheKey(options);

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
  getMessageFormatter(key) {
    if (!this._messageFormatters[key]) {
      this._messageFormatters[key] = this.globalize.messageFormatter(key);
    }

    return this._messageFormatters[key];
  }

  /**
   * Get a number formatter with the given formatting options
   *
   * let fiveDecimalNumber = EN.getNumberFormatter({minimumFractionDigits: 5, maxiumumFractionDigits: 5});
   * let formatted = fiveDecimalNumber(Math.PI); // "3.14159"
   */
  getNumberFormatter(options) {
    let key = cacheKey(options);

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
    let key = cacheKey(options);

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
    let key = cacheKey(options);

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
    let key = cacheKey(options);

    if (!this._relativeTimeFormatters[unit]) {
      this._relativeTimeFormatters[unit] = {};
    }

    if (!this._relativeTimeFormatters[unit][key]) {
      this._relativeTimeFormatters[unit][key] = this.globalize.relativeTimeFormatter(unit, options);
    }

    return this._relativeTimeFormatters[unit][key];
  }
}
