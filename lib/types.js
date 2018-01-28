/*!
 * React Native Globalize
 *
 * Copyright 2015-2018 Josh Swan
 * Released under the MIT license
 * https://github.com/joshswan/react-native-globalize/blob/master/LICENSE
 */
import PropTypes from 'prop-types';

export const globalizePropTypes = {
  locale: PropTypes.string,
  currency: PropTypes.string,
};

export const globalizeFormatPropTypes = {
  getCurrencyFormatter: PropTypes.func.isRequired,
  getDateFormatter: PropTypes.func.isRequired,
  getMessageFormatter: PropTypes.func.isRequired,
  getNumberFormatter: PropTypes.func.isRequired,
  getPluralGenerator: PropTypes.func.isRequired,
  getRelativeTimeFormatter: PropTypes.func.isRequired,
};

export const globalizeShape = PropTypes.shape({
  ...globalizePropTypes,
  ...globalizeFormatPropTypes,
});

export const currencyFormatPropTypes = {
  numberStyle: PropTypes.oneOf(['symbol', 'accounting', 'code', 'name']),
};

export const dateFormatPropTypes = {
  skeleton: PropTypes.string,
  date: PropTypes.oneOf(['full', 'long', 'medium', 'short']),
  time: PropTypes.oneOf(['full', 'long', 'medium', 'short']),
  datetime: PropTypes.oneOf(['full', 'long', 'medium', 'short']),
};

export const messageFormatPropTypes = {

};

export const numberFormatPropTypes = {
  numberStyle: PropTypes.oneOf(['decimal', 'percent']),
  minimumIntegerDigits: PropTypes.number,
  minimumFractionDigits: PropTypes.number,
  maximumFractionDigits: PropTypes.number,
  minimumSignificantDigits: PropTypes.number,
  maximumSignificantDigits: PropTypes.number,
  round: PropTypes.oneOf(['ceil', 'floor', 'round', 'truncate']),
  useGrouping: PropTypes.bool,
};

export const pluralFormatPropTypes = {
  type: PropTypes.oneOf(['cardinal', 'ordinal']),
};

export const relativeTimeFormatPropTypes = {
  form: PropTypes.oneOf(['short', 'narrow']),
};
