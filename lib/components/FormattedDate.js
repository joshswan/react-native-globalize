/*!
 * React Native Globalize
 *
 * Copyright 2015-2017 Josh Swan
 * Released under the MIT license
 * https://github.com/joshswan/react-native-globalize/blob/master/LICENSE
 */
import React, { Component, PropTypes } from 'react';
import { Text } from 'react-native';
import { globalizeShape, dateFormatPropTypes } from '../types';

export default class FormattedDate extends Component {
  setNativeProps(nativeProps) {
    this._root.setNativeProps(nativeProps);
  }

  render() {
    const formatDate = this.context.globalize.getDateFormatter(this.props);
    const formattedDate = (this.props.value instanceof Date) ? formatDate(this.props.value) : '';

    return (
      <Text
        ref={(component) => { this._root = component; }}
        style={this.props.style}
      >
        {formattedDate}
      </Text>
    );
  }
}

FormattedDate.defaultProps = {
  style: null,
};

FormattedDate.propTypes = {
  ...dateFormatPropTypes,
  value: PropTypes.instanceOf(Date).isRequired,
  style: Text.propTypes.style,
};

FormattedDate.contextTypes = {
  globalize: globalizeShape,
};
