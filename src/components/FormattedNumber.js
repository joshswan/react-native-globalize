/*!
 * React Native Globalize
 *
 * Copyright 2015 Josh Swan
 * Released under the MIT license
 * https://github.com/joshswan/react-native-globalize/blob/master/LICENSE
 */
'use strict';

import React, {Component, PropTypes} from 'react-native';
import {globalizeShape, numberFormatPropTypes} from '../types';

const {
  Text,
} = React;

export default class FormattedNumber extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const formatNumber = this.context.globalize.getNumberFormatter(this.props);

    let formattedNumber = formatNumber(this.props.value);

    return (
      <Text>{formattedNumber}</Text>
    );
  }
}

FormattedNumber.propTypes = {
  ...numberFormatPropTypes,
  value: PropTypes.any.isRequired,
};

FormattedNumber.contextTypes = {
  globalize: globalizeShape,
};
