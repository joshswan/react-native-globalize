/*!
 * React Native Globalize
 *
 * Copyright 2015-2020 Josh Swan
 * Released under the MIT license
 * https://github.com/joshswan/react-native-globalize/blob/master/LICENSE
 */

import { DateFormatterOptions } from 'globalize';
import React, { useContext } from 'react';
import { Text, TextStyle } from 'react-native';
import { GlobalizeContext } from '../context';

export interface FormattedDateProps extends DateFormatterOptions {
  accessibilityLabel?: string;
  adjustsFontSizeToFit?: boolean;
  allowFontScaling?: boolean;
  style?: TextStyle;
  value: Date;
}

export const FormattedDate: React.FC<FormattedDateProps> = ({
  accessibilityLabel = '',
  adjustsFontSizeToFit = false,
  allowFontScaling = true,
  style,
  value,
  ...options
}) => {
  const globalize = useContext(GlobalizeContext);
  const formatDate = globalize.getDateFormatter(options);
  const formattedDate = (value instanceof Date) ? formatDate(value) : '';

  return (
    <Text
      accessible
      accessibilityLabel={accessibilityLabel}
      adjustsFontSizeToFit={adjustsFontSizeToFit}
      allowFontScaling={allowFontScaling}
      style={style}
    >
      {formattedDate}
    </Text>
  );
};
