/*!
 * React Native Globalize
 *
 * Copyright 2015-2020 Josh Swan
 * Released under the MIT license
 * https://github.com/joshswan/react-native-globalize/blob/master/LICENSE
 */

import GlobalizeCore from 'globalize';
import { Cache, memoizeFormatter } from '../cache';
import { Formatters, GlobalizeConfig } from '../types';
import { enhanceCurrencyFormatter } from './currency';
import { enhanceMessageFormatter } from './message';

export function createFormatters(config: GlobalizeConfig, cache: Cache): Formatters {
  // @ts-ignore
  const instance = new GlobalizeCore(config.locale);

  return {
    getCurrencyFormatter: memoizeFormatter(
      enhanceCurrencyFormatter(
        instance.currencyFormatter.bind(instance),
        config,
      ),
      cache.currency,
    ),
    getDateFormatter: memoizeFormatter(
      instance.dateFormatter.bind(instance),
      cache.date,
    ),
    getDateParser: memoizeFormatter(
      instance.dateParser.bind(instance),
      cache.dateParsers,
    ),
    getMessageFormatter: memoizeFormatter(
      enhanceMessageFormatter(
        instance.messageFormatter.bind(instance),
        config,
      ),
      cache.message,
    ),
    getNumberFormatter: memoizeFormatter(
      instance.numberFormatter.bind(instance),
      cache.number,
    ),
    getNumberParser: memoizeFormatter(
      instance.numberParser.bind(instance),
      cache.numberParsers,
    ),
    getPluralGenerator: memoizeFormatter(
      instance.pluralGenerator.bind(instance),
      cache.plural,
    ),
    getRelativeTimeFormatter: memoizeFormatter(
      instance.relativeTimeFormatter.bind(instance),
      cache.relativeTime,
    ),
    getUnitFormatter: memoizeFormatter(
      instance.unitFormatter.bind(instance),
      cache.unit,
    ),
  };
}

export { formatCurrency } from './currency';
export { formatDate, parseDate } from './date';
export { formatMessage } from './message';
export { formatNumber, parseNumber } from './number';
export { formatPlural } from './plural';
export { formatRelativeTime } from './relativeTime';
export { formatUnit } from './unit';
