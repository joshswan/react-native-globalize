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
import {globalizeShape, numberFormatPropTypes} from '../types';

export default class FormattedNumber extends Component {
  constructor(props, context) {
    super(props, context);
  }

  setNativeProps(nativeProps) {
    this._root.setNativeProps(nativeProps);
  }

  render() {
    const formatNumber = this.context.globalize.getNumberFormatter(this.props);

    let formattedNumber = (typeof this.props.value === 'number') ? formatNumber(this.props.value) : '';

    return (
      <Text
        ref={(component) => { this._root = component; }}
        style={this.props.style}>
          {formattedNumber}
      </Text>
    );
  }
}

FormattedNumber.propTypes = {
  ...numberFormatPropTypes,
  value: PropTypes.any.isRequired,
  style: Text.propTypes.style,
};

FormattedNumber.contextTypes = {
  globalize: globalizeShape,
};
