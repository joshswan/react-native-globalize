/*!
 * React Native Globalize
 *
 * Copyright 2015-2016 Josh Swan
 * Released under the MIT license
 * https://github.com/joshswan/react-native-globalize/blob/master/LICENSE
 */
'use strict';

import React, {Component, PropTypes} from 'react';
import {Text} from 'react-native';
import {globalizeShape, currencyFormatPropTypes} from '../types';

export default class FormattedCurrency extends Component {
  constructor(props, context) {
    super(props, context);
  }

  setNativeProps(nativeProps) {
    this._root.setNativeProps(nativeProps);
  }

  render() {
    let {
      currency,
      style,
      value,
      ...other,
    } = this.props;

    const formatCurrency = this.context.globalize.getCurrencyFormatter(currency, other);

    let formattedCurrency = (typeof value === 'number') ? formatCurrency(value) : '';

    return (
      <Text
        ref={(component) => { this._root = component; }}
        style={style}>
          {formattedCurrency}
      </Text>
    );
  }
}

FormattedCurrency.propTypes = {
  ...currencyFormatPropTypes,
  currency: PropTypes.string,
  value: PropTypes.any.isRequired,
  style: Text.propTypes.style,
};

FormattedCurrency.contextTypes = {
  globalize: globalizeShape,
};
