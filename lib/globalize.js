/*!
 * React Native Globalize
 *
 * Copyright 2015-2016 Josh Swan
 * Released under the MIT license
 * https://github.com/joshswan/react-native-globalize/blob/master/LICENSE
 */
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Cldr = require('cldrjs');
var Globalize = require('globalize');

// Load compiled CLDR data
function load() {
  // Performance compromise: React Native bundles all JS/JSON into one bundle,
  // which grows rather large if all CLDR data is included. A short(er) list
  // of languages is loaded by default and additional CLDR data can be passed
  // via the `load` method below.
  return [require('./cldr.json')];
}

// Helper to create cache key from formatter arguments
function cacheKey(args) {
  return JSON.stringify(args || {});
}

// Initialize the Cldr loader
// https://github.com/rxaviers/cldrjs/issues/30
Cldr.setAvailableBundlesHack = function (availableLocales) {
  availableLocales.splice(availableLocales.indexOf('root'), 1);
  this._availableBundleMapQueue = availableLocales;
};

// Assign availableLocales to Cldr
Cldr.load(require('cldr-data/supplemental/likelySubtags.json'));
Cldr.setAvailableBundlesHack(require('cldr-data/availableLocales.json').availableLocales);

// Load the Cldr data
Globalize.load(load());

var _class = function () {
  /**
   * Create a new Globalize instance for internal use using
   * the given locale. Optionally add a default currency for
   * currency formatting.
   *
   * const ReactNativeGlobalize = require('react-native-globalize');
   * const EN = new ReactNativeGlobalize('en');
   */

  function _class(locale, currencyCode) {
    _classCallCheck(this, _class);

    this.locale = locale;
    this.currencyCode = currencyCode || 'USD';

    try {
      // Create Globalize object
      this.globalize = new Globalize(locale);
    } catch (err) {
      console.error('Only certain CLDR data is included! Be sure to add your own data if using a less common language/locale!');

      throw err;
    }

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
   * Load additional CLDR data into Globalize
   *
   * EN.load(CLDR_DATA);
   */


  _createClass(_class, [{
    key: 'getCurrencyFormatter',


    /**
     * Get a currency formatter for the given currency and
     * formatting options
     *
     * let formatUSD = EN.getCurrencyFormatter('USD', {style: 'code'});
     * let formatted = formatUSD(25);
     */
    value: function getCurrencyFormatter(currencyCode, options) {
      var key = cacheKey(options);
      var currency = currencyCode || this.currencyCode;

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

  }, {
    key: 'getDateFormatter',
    value: function getDateFormatter(options) {
      var key = cacheKey(options);

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

  }, {
    key: 'getDateParser',
    value: function getDateParser(options) {
      var key = cacheKey(options);

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

  }, {
    key: 'getMessageFormatter',
    value: function getMessageFormatter(key) {
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

  }, {
    key: 'getNumberFormatter',
    value: function getNumberFormatter(options) {
      var key = cacheKey(options);

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

  }, {
    key: 'getNumberParser',
    value: function getNumberParser(options) {
      var key = cacheKey(options);

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

  }, {
    key: 'getPluralGenerator',
    value: function getPluralGenerator(options) {
      var key = cacheKey(options);

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

  }, {
    key: 'getRelativeTimeFormatter',
    value: function getRelativeTimeFormatter(unit, options) {
      var key = cacheKey(options);

      if (!this._relativeTimeFormatters[unit]) {
        this._relativeTimeFormatters[unit] = {};
      }

      if (!this._relativeTimeFormatters[unit][key]) {
        this._relativeTimeFormatters[unit][key] = this.globalize.relativeTimeFormatter(unit, options);
      }

      return this._relativeTimeFormatters[unit][key];
    }
  }], [{
    key: 'load',
    value: function load(cldrData) {
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

  }, {
    key: 'loadMessages',
    value: function loadMessages(messageData) {
      return Globalize.loadMessages(messageData);
    }
  }]);

  return _class;
}();

exports.default = _class;