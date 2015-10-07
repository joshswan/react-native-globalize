/*!
 * React Native Globalize
 *
 * Copyright 2015 Josh Swan
 * Released under the MIT license
 * https://github.com/joshswan/react-native-globalize/blob/master/LICENSE
 */
'use strict';

import React, {Component, PropTypes} from 'react-native';
import {globalizeShape, dateFormatPropTypes} from '../types';

const {
  Text,
} = React;

export default class FormattedTime extends Component {
  constructor(props, context) {
    super(props, context);
  }

  setNativeProps(nativeProps) {
    this._root.setNativeProps(nativeProps);
  }

  render() {
    const formatTime = this.context.globalize.getDateFormatter(this.props);

    let formattedTime = formatTime(this.props.value);

    return (
      <Text
        ref={(component) => { this._root = component; }}
        style={this.props.style}>
          {formattedTime}
      </Text>
    );
  }
}

FormattedTime.propTypes = {
  ...dateFormatPropTypes,
  value: PropTypes.any.isRequired,
  style: Text.propTypes.style,
};

FormattedTime.contextTypes = {
  globalize: globalizeShape,
};
