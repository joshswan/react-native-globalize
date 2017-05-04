/*!
 * React Native Globalize
 *
 * Copyright 2015-2017 Josh Swan
 * Released under the MIT license
 * https://github.com/joshswan/react-native-globalize/blob/master/LICENSE
 */
import moment from 'moment';
import React, { Component, PropTypes } from 'react';
import { Text } from 'react-native';
import { globalizeShape, relativeTimeFormatPropTypes } from '../types';

export default class FormattedRelativeTime extends Component {
  setNativeProps(nativeProps) {
    this._root.setNativeProps(nativeProps);
  }

  render() {
    let value = this.props.value;
    let unit = this.props.unit;

    if (value instanceof Date) {
      const momentValue = moment(value);
      const now = moment();

      if (unit === 'best') {
        const units = ['year', 'month', 'week', 'day', 'hour', 'minute', 'second'];

        for (let i = 0, l = units.length; i < l; i += 1) {
          const diff = momentValue.diff(now, units[i]);

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

    const formatRelativeTime = this.context.globalize.getRelativeTimeFormatter(unit, {
      form: this.props.form,
    });
    const formattedRelativeTime = (this.props.value instanceof Date) ? formatRelativeTime(value) : '';

    return (
      <Text
        ref={(component) => { this._root = component; }}
        style={this.props.style}
      >
        {formattedRelativeTime}
      </Text>
    );
  }
}

FormattedRelativeTime.defaultProps = {
  form: false,
  style: null,
};

FormattedRelativeTime.propTypes = {
  ...relativeTimeFormatPropTypes,
  unit: PropTypes.oneOf(['second', 'minute', 'hour', 'day', 'week', 'month', 'year', 'best']).isRequired,
  value: PropTypes.instanceOf(Date).isRequired,
  form: PropTypes.oneOf(['short', 'narrow', 0, false]),
  style: Text.propTypes.style,
};

FormattedRelativeTime.contextTypes = {
  globalize: globalizeShape,
};
