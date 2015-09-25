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

  render() {
    const formatTime = this.context.globalize.getDateFormatter(this.props);

    let formattedTime = formatTime(this.props.value);

    return (
      <Text>{formattedTime}</Text>
    );
  }
}

FormattedTime.propTypes = {
  ...dateFormatPropTypes,
  value: PropTypes.any.isRequired,
};

FormattedTime.contextTypes = {
  globalize: globalizeShape,
};
