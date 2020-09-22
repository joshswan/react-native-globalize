/*!
 * React Native Globalize
 *
 * Copyright 2015-2020 Josh Swan
 * Released under the MIT license
 * https://github.com/joshswan/react-native-globalize/blob/master/LICENSE
 */

import { Formatters, GlobalizeConfig, PluralGeneratorOptions, PluralGroup } from '../types';

export function formatPlural(
  config: GlobalizeConfig,
  getPluralGenerator: Formatters['getPluralGenerator'],
  value: number,
  options?: PluralGeneratorOptions,
): PluralGroup {
  try {
    return getPluralGenerator(options)(value);
  } catch (e) {
    config.onError('Error formatting plural. Value must be a number.', e);
  }

  return 'other';
}
