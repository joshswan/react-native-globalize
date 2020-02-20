/*!
 * React Native Globalize
 *
 * Copyright 2015-2020 Josh Swan
 * Released under the MIT license
 * https://github.com/joshswan/react-native-globalize/blob/master/LICENSE
 */

import { UnitFormatterOptions as GlobalizeUnitFormatterOptions } from 'globalize';
import { Formatters, GlobalizeConfig, UnitFormatterOptions } from '../types';

export function formatUnit(
  config: GlobalizeConfig,
  getUnitFormatter: Formatters['getUnitFormatter'],
  value: number,
  unit: string,
  options?: UnitFormatterOptions,
) {
  try {
    return getUnitFormatter(unit, options as GlobalizeUnitFormatterOptions)(value);
  } catch (e) {
    config.onError('Error formatting unit. Unit must be a string and value must be a number.', e);
  }

  return `${String(value)} ${String(unit)}`;
}
