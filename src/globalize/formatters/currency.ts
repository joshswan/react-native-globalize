/*!
 * React Native Globalize
 *
 * Copyright 2015-2020 Josh Swan
 * Released under the MIT license
 * https://github.com/joshswan/react-native-globalize/blob/master/LICENSE
 */

import { currencyFormatter } from 'globalize';
import { CurrencyFormatter, CurrencyFormatterOptions, Formatters, GlobalizeConfig } from '../types';

export function enhanceCurrencyFormatter(
  getCurrencyFormatter: typeof currencyFormatter,
  config: GlobalizeConfig,
): (currency: string, options?: CurrencyFormatterOptions) => CurrencyFormatter {
  return (currency?: string, options?: CurrencyFormatterOptions) =>
    getCurrencyFormatter(currency || config.currencyCode, options);
}

export function formatCurrency(
  config: GlobalizeConfig,
  getCurrencyFormatter: Formatters['getCurrencyFormatter'],
  value: number,
  currencyCode?: string,
  options?: CurrencyFormatterOptions,
): string {
  try {
    return getCurrencyFormatter(currencyCode || config.currencyCode, options)(value);
  } catch (e) {
    config.onError('Error formatting currency. Value must be a number.', e);
  }

  return String(value);
}
