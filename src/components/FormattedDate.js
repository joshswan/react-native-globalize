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
import {globalizeShape, dateFormatPropTypes} from '../types';

export default class FormattedDate extends Component {
  constructor(props, context) {
    super(props, context);
  }

  setNativeProps(nativeProps) {
    this._root.setNativeProps(nativeProps);
  }

  render() {
    const formatDate = this.context.globalize.getDateFormatter(this.props);

    let formattedDate = (this.props.value instanceof Date) ? formatDate(this.props.value) : '';

    return (
      <Text
        ref={(component) => { this._root = component; }}
        style={this.props.style}>
          {formattedDate}
      </Text>
    );
  }
}

FormattedDate.propTypes = {
  ...dateFormatPropTypes,
  value: PropTypes.any.isRequired,
  style: Text.propTypes.style,
};

FormattedDate.contextTypes = {
  globalize: globalizeShape,
};
