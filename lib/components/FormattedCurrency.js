/*!
 * React Native Globalize
 *
 * Copyright 2015-2018 Josh Swan
 * Released under the MIT license
 * https://github.com/joshswan/react-native-globalize/blob/master/LICENSE
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import { globalizeShape, currencyFormatPropTypes } from '../types';

export default class FormattedCurrency extends Component {
  setNativeProps(nativeProps) {
    this._root.setNativeProps(nativeProps);
  }

  render() {
    const {
      currency,
      numberStyle,
      style,
      value,
      ...other
    } = this.props;

    const formatCurrency = this.context.globalize.getCurrencyFormatter(currency, {
      ...other,
      style: numberStyle,
    });
    const formattedCurrency = (typeof value === 'number') ? formatCurrency(value) : '';

    return (
      <Text
        ref={(component) => { this._root = component; }}
        style={style}
      >
        {formattedCurrency}
      </Text>
    );
  }
}

FormattedCurrency.defaultProps = {
  currency: '',
  numberStyle: 'symbol',
  style: null,
};

FormattedCurrency.propTypes = {
  ...currencyFormatPropTypes,
  currency: PropTypes.string,
  value: PropTypes.number.isRequired,
  style: Text.propTypes.style,
};

FormattedCurrency.contextTypes = {
  globalize: globalizeShape,
};
