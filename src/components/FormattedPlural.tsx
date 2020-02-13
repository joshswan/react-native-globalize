/*!
 * React Native Globalize
 *
 * Copyright 2015-2020 Josh Swan
 * Released under the MIT license
 * https://github.com/joshswan/react-native-globalize/blob/master/LICENSE
 */

import { PluralGeneratorOptions } from 'globalize';
import React, { useContext } from 'react';
import { Text, TextStyle } from 'react-native';
import { GlobalizeContext } from '../context';

export interface FormattedPluralProps extends PluralGeneratorOptions {
  accessibilityLabel?: string;
  adjustsFontSizeToFit?: boolean;
  allowFontScaling?: boolean;
  style?: TextStyle;
  value: number;

  other: React.ReactNode;
  zero?: React.ReactNode;
  one?: React.ReactNode;
  two?: React.ReactNode;
  few?: React.ReactNode;
  many?: React.ReactNode;
}

export const FormattedPlural: React.FC<FormattedPluralProps> = ({
  accessibilityLabel = '',
  adjustsFontSizeToFit = false,
  allowFontScaling = true,
  style,
  type,
  value,
  ...options
}) => {
  const globalize = useContext(GlobalizeContext);
  const formatPlural = globalize.getPluralGenerator({ type });
  const pluralCategory = (typeof value === 'number') ? formatPlural(value) : 'other';
  const formattedPlural = options[pluralCategory] || options.other;

  return (
    <Text
      accessible
      accessibilityLabel={accessibilityLabel}
      adjustsFontSizeToFit={adjustsFontSizeToFit}
      allowFontScaling={allowFontScaling}
      style={style}
    >
      {formattedPlural}
    </Text>
  );
};
