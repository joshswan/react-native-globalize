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

export interface FormattedCurrencyProps extends Omit<NumberFormatterOptions, 'style'> {
  accessibilityLabel?: string;
  adjustsFontSizeToFit?: boolean;
  allowFontScaling?: boolean;
  currency?: string;
  numberStyle?: 'symbol' | 'accounting' | 'code' | 'name';
  style?: TextStyle;
  symbolForm?: 'narrow';
  value: number;
}

export const FormattedCurrency: React.FC<FormattedCurrencyProps> = ({
  accessibilityLabel = '',
  adjustsFontSizeToFit = false,
  allowFontScaling = true,
  currency,
  numberStyle = 'symbol',
  style,
  value,
  ...options
}) => {
  const globalize = useContext(GlobalizeContext);
  const formatCurrency = globalize.getCurrencyFormatter(currency, {
    useGrouping: true,
    ...options,
    style: numberStyle,
  });
  const formattedCurrency = (typeof value === 'number') ? formatCurrency(value) : '';

  return (
    <Text
      accessible
      accessibilityLabel={accessibilityLabel}
      adjustsFontSizeToFit={adjustsFontSizeToFit}
      allowFontScaling={allowFontScaling}
      style={style}
    >
      {formattedCurrency}
    </Text>
  );
};
