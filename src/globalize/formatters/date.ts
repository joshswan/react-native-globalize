/*!
 * React Native Globalize
 *
 * Copyright 2015-2020 Josh Swan
 * Released under the MIT license
 * https://github.com/joshswan/react-native-globalize/blob/master/LICENSE
 */

import { DateFormatterOptions, Formatters, GlobalizeConfig } from '../types';

export function formatDate(
  config: GlobalizeConfig,
  getDateFormatter: Formatters['getDateFormatter'],
  value: Date,
  options?: DateFormatterOptions,
) {
  try {
    return getDateFormatter(options)(value);
  } catch (e) {
    config.onError('Error formatting date. Value must be a Date object.', e);
  }

  return String(value);
}

export function parseDate(
  config: GlobalizeConfig,
  getDateParser: Formatters['getDateParser'],
  value: string,
  options?: DateFormatterOptions,
) {
  try {
    return getDateParser(options)(value);
  } catch (e) {
    config.onError('Error parsing date. Value must be a string.', e);
  }

  return new Date();
}
