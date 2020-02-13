/*!
 * React Native Globalize
 *
 * Copyright 2015-2020 Josh Swan
 * Released under the MIT license
 * https://github.com/joshswan/react-native-globalize/blob/master/LICENSE
 */

import { NumberFormatterOptions } from 'globalize';
import React, { useContext } from 'react';
import { Text, TextStyle } from 'react-native';
import { GlobalizeContext } from '../context';

export interface FormattedNumberProps extends Omit<NumberFormatterOptions, 'style'> {
  accessibilityLabel?: string;
  adjustsFontSizeToFit?: boolean;
  allowFontScaling?: boolean;
  numberStyle?: 'decimal' | 'percent';
  style?: TextStyle;
  value: number;
}

export const FormattedNumber: React.FC<FormattedNumberProps> = ({
  accessibilityLabel = '',
  adjustsFontSizeToFit = false,
  allowFontScaling = true,
  numberStyle = 'decimal',
  style,
  value,
  ...options
}) => {
  const globalize = useContext(GlobalizeContext);
  const formatNumber = globalize.getNumberFormatter({
    useGrouping: true,
    ...options,
    style: numberStyle,
  });
  const formattedNumber = (typeof value === 'number') ? formatNumber(value) : '';

  return (
    <Text
      accessible
      accessibilityLabel={accessibilityLabel}
      adjustsFontSizeToFit={adjustsFontSizeToFit}
      allowFontScaling={allowFontScaling}
      style={style}
    >
      {formattedNumber}
    </Text>
  );
};
