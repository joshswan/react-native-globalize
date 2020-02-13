/*!
 * React Native Globalize
 *
 * Copyright 2015-2020 Josh Swan
 * Released under the MIT license
 * https://github.com/joshswan/react-native-globalize/blob/master/LICENSE
 */

import React, { useContext } from 'react';
import { Text, TextStyle } from 'react-native';
import { UnitFormatterOptions } from 'globalize';
import { GlobalizeContext } from '../context';

export interface FormattedUnitProps extends UnitFormatterOptions {
  accessibilityLabel?: string;
  adjustsFontSizeToFit?: boolean;
  allowFontScaling?: boolean;
  style?: TextStyle;
  unit: string;
  value: number;
}

export const FormattedUnit: React.FC<FormattedUnitProps> = ({
  accessibilityLabel = '',
  adjustsFontSizeToFit = false,
  allowFontScaling = true,
  style,
  unit,
  value,
  ...options
}) => {
  const globalize = useContext(GlobalizeContext);
  const formatUnit = globalize.getUnitFormatter(unit, options);
  const formattedUnit = (typeof value === 'number') ? formatUnit(value) : '';

  return (
    <Text
      accessible
      accessibilityLabel={accessibilityLabel}
      adjustsFontSizeToFit={adjustsFontSizeToFit}
      allowFontScaling={allowFontScaling}
      style={style}
    >
      {formattedUnit}
    </Text>
  );
};
