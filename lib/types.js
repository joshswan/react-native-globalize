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
exports.relativeTimeFormatPropTypes = exports.pluralFormatPropTypes = exports.numberFormatPropTypes = exports.messageFormatPropTypes = exports.dateFormatPropTypes = exports.currencyFormatPropTypes = exports.globalizeShape = exports.globalizeFormatPropTypes = exports.globalizePropTypes = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var globalizePropTypes = exports.globalizePropTypes = {
  locale: _react.PropTypes.string,
  currency: _react.PropTypes.string
};

var globalizeFormatPropTypes = exports.globalizeFormatPropTypes = {
  getCurrencyFormatter: _react.PropTypes.func.isRequired,
  getDateFormatter: _react.PropTypes.func.isRequired,
  getMessageFormatter: _react.PropTypes.func.isRequired,
  getNumberFormatter: _react.PropTypes.func.isRequired,
  getPluralGenerator: _react.PropTypes.func.isRequired,
  getRelativeTimeFormatter: _react.PropTypes.func.isRequired
};

var globalizeShape = exports.globalizeShape = _react.PropTypes.shape(_extends({}, globalizePropTypes, globalizeFormatPropTypes));

var currencyFormatPropTypes = exports.currencyFormatPropTypes = {
  style: _react.PropTypes.oneOf(['symbol', 'accounting', 'code', 'name'])
};

var dateFormatPropTypes = exports.dateFormatPropTypes = {
  skeleton: _react.PropTypes.string,
  date: _react.PropTypes.oneOf(['full', 'long', 'medium', 'short']),
  time: _react.PropTypes.oneOf(['full', 'long', 'medium', 'short']),
  datetime: _react.PropTypes.oneOf(['full', 'long', 'medium', 'short'])
};

var messageFormatPropTypes = exports.messageFormatPropTypes = {};

var numberFormatPropTypes = exports.numberFormatPropTypes = {
  style: _react.PropTypes.oneOf(['decimal', 'percent']),
  minimumIntegerDigits: _react.PropTypes.number,
  minimumFractionDigits: _react.PropTypes.number,
  maximumFractionDigits: _react.PropTypes.number,
  minimumSignificantDigits: _react.PropTypes.number,
  maximumSignificantDigits: _react.PropTypes.number,
  round: _react.PropTypes.oneOf(['ceil', 'floor', 'round', 'truncate']),
  useGrouping: _react.PropTypes.bool
};

var pluralFormatPropTypes = exports.pluralFormatPropTypes = {
  type: _react.PropTypes.oneOf(['cardinal', 'ordinal'])
};

var relativeTimeFormatPropTypes = exports.relativeTimeFormatPropTypes = {
  form: _react.PropTypes.oneOf(['short', 'narrow'])
};