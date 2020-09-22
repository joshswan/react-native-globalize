/*!
 * React Native Globalize
 *
 * Copyright 2015-2020 Josh Swan
 * Released under the MIT license
 * https://github.com/joshswan/react-native-globalize/blob/master/LICENSE
 */

import { Formatters, GlobalizeConfig, NumberFormatterOptions, NumberParserOptions } from '../types';

export function formatNumber(
  config: GlobalizeConfig,
  getNumberFormatter: Formatters['getNumberFormatter'],
  value: number,
  options?: NumberFormatterOptions,
): string {
  try {
    return getNumberFormatter(options)(value);
  } catch (e) {
    config.onError('Error formatting number. Value must be a number.', e);
  }

  return String(value);
}

export function parseNumber(
  config: GlobalizeConfig,
  getNumberParser: Formatters['getNumberParser'],
  value: string,
  options?: NumberParserOptions,
): number {
  try {
    return getNumberParser(options)(value);
  } catch (e) {
    config.onError('Error parsing number. Value must be a string.', e);
  }

  return Number(value);
}
