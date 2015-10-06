/*!
 * React Native Globalize
 *
 * Copyright 2015 Josh Swan
 * Released under the MIT license
 * https://github.com/joshswan/react-native-globalize/blob/master/LICENSE
 */
'use strict';

import React, {Component, PropTypes} from 'react-native';
import {globalizeShape, relativeTimeFormatPropTypes} from '../types';
import moment from 'moment';

const {
  Text,
} = React;

export default class FormattedRelativeTime extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const formatRelativeTime = this.context.globalize.getRelativeTimeFormatter(this.props.unit, this.props);

    let value = this.props.value;

    if (value instanceof Date) {
      let momentValue = moment(value);
      value = momentValue.diff(moment(), this.props.unit);
    }

    let formattedRelativeTime = formatRelativeTime(value);

    return (
      <Text style={this.props.style}>{formattedRelativeTime}</Text>
    );
  }
}

FormattedRelativeTime.propTypes = {
  ...relativeTimeFormatPropTypes,
  unit: PropTypes.oneOf(['second', 'minute', 'hour', 'day', 'week', 'month', 'year']).isRequired,
  value: PropTypes.any.isRequired,
  style: Text.propTypes.style,
};

FormattedRelativeTime.contextTypes = {
  globalize: globalizeShape,
};
