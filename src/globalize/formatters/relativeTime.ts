/*!
 * React Native Globalize
 *
 * Copyright 2015-2020 Josh Swan
 * Released under the MIT license
 * https://github.com/joshswan/react-native-globalize/blob/master/LICENSE
 */

import dayjs from 'dayjs';
import {
  Formatters,
  GlobalizeConfig,
  RelativeTimeFormatterOptions,
  Unit,
} from '../types';
import { selectTimeUnit } from '../utils';

export function formatRelativeTime(
  config: GlobalizeConfig,
  getRelativeTimeFormatter: Formatters['getRelativeTimeFormatter'],
  value: Date | number,
  unit: 'auto' | 'best' | Unit,
  options?: RelativeTimeFormatterOptions,
): string {
  let resolvedValue: number;
  let resolvedUnit: Unit;

  if (unit === 'auto' || unit === 'best') {
    [resolvedValue, resolvedUnit] = selectTimeUnit(value);
  } else {
    resolvedValue = value instanceof Date ? dayjs(value).diff(dayjs(), unit) : value;
    resolvedUnit = unit;
  }

  try {
    return getRelativeTimeFormatter(resolvedUnit, options)(resolvedValue);
  } catch (e) {
    config.onError('Error formatting relative time. Unit must be a valid time unit and value must be a number', e);
  }

  return `${String(value)} ${String(unit)}`;
}
