/*!
 * React Native Globalize
 *
 * Copyright 2015-2020 Josh Swan
 * Released under the MIT license
 * https://github.com/joshswan/react-native-globalize/blob/master/LICENSE
 */

import moment from 'moment';
import React, { useContext } from 'react';
import { RelativeTimeFormatterOptions } from 'globalize';
import { Text, TextStyle } from 'react-native';
import { GlobalizeContext } from '../context';

type Unit = 'year' | 'month' | 'week' | 'day' | 'hour' | 'minute' | 'second';

export interface FormattedRelativeTimeProps extends RelativeTimeFormatterOptions {
  accessibilityLabel?: string;
  adjustsFontSizeToFit?: boolean;
  allowFontScaling?: boolean;
  style?: TextStyle;
  unit: 'best' | Unit;
  value: Date | number;
}

export const FormattedRelativeTime: React.FC<FormattedRelativeTimeProps> = ({
  accessibilityLabel = '',
  adjustsFontSizeToFit = false,
  allowFontScaling = true,
  form,
  style,
  unit: unitProp,
  value,
}) => {
  let diff = value;
  let unit = unitProp;

  if (value instanceof Date) {
    const momentValue = moment(value);
    const now = moment();

    if (unit === 'best') {
      const units: Unit[] = ['year', 'month', 'week', 'day', 'hour', 'minute', 'second'];

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

  const globalize = useContext(GlobalizeContext);
  const formatRelativeTime = globalize.getRelativeTimeFormatter(unit, { form });
  const formattedRelativeTime = formatRelativeTime(diff as number);

  return (
    <Text
      accessible
      accessibilityLabel={accessibilityLabel}
      adjustsFontSizeToFit={adjustsFontSizeToFit}
      allowFontScaling={allowFontScaling}
      style={style}
    >
      {formattedRelativeTime}
    </Text>
  );
};
