/*!
 * React Native Globalize
 *
 * Copyright 2015-2018 Josh Swan
 * Released under the MIT license
 * https://github.com/joshswan/react-native-globalize/blob/master/LICENSE
 */

import moment from 'moment';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import { globalizeShape } from '../types';
import withGlobalize from './withGlobalize';

class FormattedRelativeTime extends PureComponent {
  static propTypes = {
    globalize: globalizeShape.isRequired,
    accessibilityLabel: PropTypes.string,
    adjustsFontSizeToFit: PropTypes.bool,
    allowFontScaling: PropTypes.bool,
    form: PropTypes.oneOf(['short', 'narrow', 0, false]),
    style: Text.propTypes.style,
    unit: PropTypes.oneOf(['second', 'minute', 'hour', 'day', 'week', 'month', 'year', 'best']).isRequired,
    value: PropTypes.oneOfType([
      PropTypes.instanceOf(Date),
      PropTypes.number,
    ]).isRequired,
  }

  static defaultProps = {
    accessibilityLabel: '',
    adjustsFontSizeToFit: false,
    allowFontScaling: true,
    form: false,
    style: null,
  }

  setNativeProps(nativeProps) {
    this._root.setNativeProps(nativeProps);
  }

  render() {
    const {
      accessibilityLabel,
      adjustsFontSizeToFit,
      allowFontScaling,
      globalize,
      form,
      style,
      unit: unitProp,
      value,
    } = this.props;

    let diff = value;
    let unit = unitProp;

    if (value instanceof Date) {
      const momentValue = moment(value);
      const now = moment();

      if (unit === 'best') {
        const units = ['year', 'month', 'week', 'day', 'hour', 'minute', 'second'];

        for (let i = 0, l = units.length; i < l; i += 1) {
          const d = momentValue.diff(now, units[i]);

          if (d >= 1 || d <= -1 || units[i] === 'second') {
            diff = d;
            unit = units[i];
            break;
          }
        }
      } else {
        diff = momentValue.diff(now, unit);
      }
    }

    // Globalize really doesn't like incorrect values
    if (unit === 'best') {
      unit = 'second';
    }

    const formatRelativeTime = globalize.getRelativeTimeFormatter(unit, {
      form,
    });
    const formattedRelativeTime = formatRelativeTime(diff);

    return (
      <Text
        ref={(component) => { this._root = component; }}
        accessibilityLabel={accessibilityLabel}
        adjustsFontSizeToFit={adjustsFontSizeToFit}
        allowFontScaling={allowFontScaling}
        style={style}
      >
        {formattedRelativeTime}
      </Text>
    );
  }
}

export default withGlobalize(FormattedRelativeTime);
