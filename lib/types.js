/*!
 * React Native Globalize
 *
 * Copyright 2015-2016 Josh Swan
 * Released under the MIT license
 * https://github.com/joshswan/react-native-globalize/blob/master/LICENSE
 */
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.relativeTimeFormatPropTypes = exports.pluralFormatPropTypes = exports.numberFormatPropTypes = exports.messageFormatPropTypes = exports.dateFormatPropTypes = exports.currencyFormatPropTypes = exports.globalizeShape = exports.globalizeFormatPropTypes = exports.globalizePropTypes = undefined;

var _reactNative = require('react-native');

var globalizePropTypes = exports.globalizePropTypes = {
  locale: _reactNative.PropTypes.string,
  currency: _reactNative.PropTypes.string
};

var globalizeFormatPropTypes = exports.globalizeFormatPropTypes = {
  getCurrencyFormatter: _reactNative.PropTypes.func.isRequired,
  getDateFormatter: _reactNative.PropTypes.func.isRequired,
  getMessageFormatter: _reactNative.PropTypes.func.isRequired,
  getNumberFormatter: _reactNative.PropTypes.func.isRequired,
  getPluralGenerator: _reactNative.PropTypes.func.isRequired,
  getRelativeTimeFormatter: _reactNative.PropTypes.func.isRequired
};

var globalizeShape = exports.globalizeShape = _reactNative.PropTypes.shape(_extends({}, globalizePropTypes, globalizeFormatPropTypes));

var currencyFormatPropTypes = exports.currencyFormatPropTypes = {
  style: _reactNative.PropTypes.oneOf(['symbol', 'accounting', 'code', 'name'])
};

var dateFormatPropTypes = exports.dateFormatPropTypes = {
  skeleton: _reactNative.PropTypes.string,
  date: _reactNative.PropTypes.oneOf(['full', 'long', 'medium', 'short']),
  time: _reactNative.PropTypes.oneOf(['full', 'long', 'medium', 'short']),
  datetime: _reactNative.PropTypes.oneOf(['full', 'long', 'medium', 'short'])
};

var messageFormatPropTypes = exports.messageFormatPropTypes = {};

var numberFormatPropTypes = exports.numberFormatPropTypes = {
  style: _reactNative.PropTypes.oneOf(['decimal', 'percent']),
  minimumIntegerDigits: _reactNative.PropTypes.number,
  minimumFractionDigits: _reactNative.PropTypes.number,
  maximumFractionDigits: _reactNative.PropTypes.number,
  minimumSignificantDigits: _reactNative.PropTypes.number,
  maximumSignificantDigits: _reactNative.PropTypes.number,
  round: _reactNative.PropTypes.oneOf(['ceil', 'floor', 'round', 'truncate']),
  useGrouping: _reactNative.PropTypes.bool
};

var pluralFormatPropTypes = exports.pluralFormatPropTypes = {
  type: _reactNative.PropTypes.oneOf(['cardinal', 'ordinal'])
};

var relativeTimeFormatPropTypes = exports.relativeTimeFormatPropTypes = {
  form: _reactNative.PropTypes.oneOf(['short', 'narrow'])
};