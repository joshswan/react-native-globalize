/*!
 * React Native Globalize
 *
 * Copyright 2015-2017 Josh Swan
 * Released under the MIT license
 * https://github.com/joshswan/react-native-globalize/blob/master/LICENSE
 */
import React, { Component, PropTypes } from 'react';
import { Text } from 'react-native';
import { globalizeShape, numberFormatPropTypes } from '../types';

export default class FormattedNumber extends Component {
  setNativeProps(nativeProps) {
    this._root.setNativeProps(nativeProps);
  }

  render() {
    const formatNumber = this.context.globalize.getNumberFormatter(this.props);
    const formattedNumber = (typeof this.props.value === 'number') ? formatNumber(this.props.value) : '';

    return (
      <Text
        ref={(component) => { this._root = component; }}
        style={this.props.style}
      >
        {formattedNumber}
      </Text>
    );
  }
}

FormattedNumber.propTypes = {
  ...numberFormatPropTypes,
  value: PropTypes.number.isRequired,
  style: Text.propTypes.style,
};

FormattedNumber.contextTypes = {
  globalize: globalizeShape,
};
