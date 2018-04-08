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
