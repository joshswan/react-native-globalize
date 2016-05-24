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
import {globalizeShape, relativeTimeFormatPropTypes} from '../types';
import moment from 'moment';

export default class FormattedRelativeTime extends Component {
  constructor(props, context) {
    super(props, context);
  }

  setNativeProps(nativeProps) {
    this._root.setNativeProps(nativeProps);
  }

  render() {
    let value = this.props.value;
    let unit = this.props.unit;

    if (value instanceof Date) {
      let momentValue = moment(value);
      let now = moment();

      if (unit === 'best') {
        let units = ['year', 'month', 'week', 'day', 'hour', 'minute', 'second'];

        for (let i = 0, l = units.length; i < l; i++) {
          let diff = momentValue.diff(now, units[i]);

          if (diff >= 1 || diff <= -1 || units[i] === 'second') {
            value = diff;
            unit = units[i];
            break;
          }
        }
      } else {
        value = momentValue.diff(now, unit);
      }
    }

    // Globalize really doesn't like incorrect values
    if (unit === 'best') {
      unit = 'second';
    }

    const formatRelativeTime = this.context.globalize.getRelativeTimeFormatter(unit, {form: this.props.form});

    let formattedRelativeTime = (this.props.value instanceof Date) ? formatRelativeTime(value) : '';

    return (
      <Text
        ref={(component) => { this._root = component; }}
        style={this.props.style}>
          {formattedRelativeTime}
      </Text>
    );
  }
}

FormattedRelativeTime.propTypes = {
  ...relativeTimeFormatPropTypes,
  unit: PropTypes.oneOf(['second', 'minute', 'hour', 'day', 'week', 'month', 'year', 'best']).isRequired,
  value: PropTypes.any.isRequired,
  form: PropTypes.oneOf(['short', 'narrow', 0, false]),
  style: Text.propTypes.style,
};

FormattedRelativeTime.contextTypes = {
  globalize: globalizeShape,
};
