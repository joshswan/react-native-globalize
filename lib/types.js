/*!
 * React Native Globalize
 *
 * Copyright 2015 Josh Swan
 * Released under the MIT license
 * https://github.com/joshswan/react-native-globalize/blob/master/LICENSE
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _reactNative = require('react-native');

var globalizePropTypes = {
  locale: _reactNative.PropTypes.string,
  currency: _reactNative.PropTypes.string
};

exports.globalizePropTypes = globalizePropTypes;
var globalizeFormatPropTypes = {
  getCurrencyFormatter: _reactNative.PropTypes.func.isRequired,
  getDateFormatter: _reactNative.PropTypes.func.isRequired,
  getMessageFormatter: _reactNative.PropTypes.func.isRequired,
  getNumberFormatter: _reactNative.PropTypes.func.isRequired,
  getPluralGenerator: _reactNative.PropTypes.func.isRequired,
  getRelativeTimeFormatter: _reactNative.PropTypes.func.isRequired
};

exports.globalizeFormatPropTypes = globalizeFormatPropTypes;
var globalizeShape = _reactNative.PropTypes.shape(_extends({}, globalizePropTypes, globalizeFormatPropTypes));

exports.globalizeShape = globalizeShape;
var currencyFormatPropTypes = {
  style: _reactNative.PropTypes.oneOf(['symbol', 'accounting', 'code', 'name'])
};

exports.currencyFormatPropTypes = currencyFormatPropTypes;
var dateFormatPropTypes = {
  skeleton: _reactNative.PropTypes.string,
  date: _reactNative.PropTypes.oneOf(['full', 'long', 'medium', 'short']),
  time: _reactNative.PropTypes.oneOf(['full', 'long', 'medium', 'short']),
  datetime: _reactNative.PropTypes.oneOf(['full', 'long', 'medium', 'short'])
};

exports.dateFormatPropTypes = dateFormatPropTypes;
var messageFormatPropTypes = {};

exports.messageFormatPropTypes = messageFormatPropTypes;
var numberFormatPropTypes = {
  style: _reactNative.PropTypes.oneOf(['decimal', 'percent']),
  minimumIntegerDigits: _reactNative.PropTypes.number,
  minimumFractionDigits: _reactNative.PropTypes.number,
  maximumFractionDigits: _reactNative.PropTypes.number,
  minimumSignificantDigits: _reactNative.PropTypes.number,
  maximumSignificantDigits: _reactNative.PropTypes.number,
  round: _reactNative.PropTypes.oneOf(['ceil', 'floor', 'round', 'truncate']),
  useGrouping: _reactNative.PropTypes.bool
};

exports.numberFormatPropTypes = numberFormatPropTypes;
var pluralFormatPropTypes = {
  type: _reactNative.PropTypes.oneOf(['cardinal', 'ordinal'])
};

exports.pluralFormatPropTypes = pluralFormatPropTypes;
var relativeTimeFormatPropTypes = {
  form: _reactNative.PropTypes.oneOf(['short', 'narrow'])
};
exports.relativeTimeFormatPropTypes = relativeTimeFormatPropTypes;