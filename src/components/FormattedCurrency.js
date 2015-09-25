/*!
 * React Native Globalize
 *
 * Copyright 2015 Josh Swan
 * Released under the MIT license
 * https://github.com/joshswan/react-native-globalize/blob/master/LICENSE
 */
'use strict';

import React, {Component, PropTypes} from 'react-native';
import {globalizeShape, currencyFormatPropTypes} from '../types';

const {
  Text,
} = React;

export default class FormattedCurrency extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const formatCurrency = this.context.globalize.getCurrencyFormatter(this.props.currency, this.props);

    let formattedCurrency = formatCurrency(this.props.value);

    return (
      <Text>{formattedCurrency}</Text>
    );
  }
}

FormattedCurrency.propTypes = {
  ...currencyFormatPropTypes,
  currency: PropTypes.string,
  value: PropTypes.any.isRequired,
};

FormattedCurrency.contextTypes = {
  globalize: globalizeShape,
};
