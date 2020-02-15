/*!
 * React Native Globalize
 *
 * Copyright 2015-2020 Josh Swan
 * Released under the MIT license
 * https://github.com/joshswan/react-native-globalize/blob/master/LICENSE
 */

import {
  CurrencyFormatter,
  DateFormatter,
  DateParser,
  MessageFormatter,
  NumberFormatter,
  NumberParser,
  PluralGenerator,
  RelativeTimeFormatter,
  UnitFormatter,
} from './types';

export interface Cache {
  currency: Record<string, CurrencyFormatter>;
  date: Record<string, DateFormatter>;
  dateParsers: Record<string, DateParser>;
  message: Record<string, MessageFormatter>;
  number: Record<string, NumberFormatter>;
  numberParsers: Record<string, NumberParser>;
  plural: Record<string, PluralGenerator>;
  relativeTime: Record<string, RelativeTimeFormatter>;
  unit: Record<string, UnitFormatter>;
}

export type CacheValue =
  | CurrencyFormatter
  | DateFormatter
  | DateParser
  | MessageFormatter
  | NumberFormatter
  | NumberParser
  | PluralGenerator
  | RelativeTimeFormatter
  | UnitFormatter
  | any;

export function createCache(): Cache {
  return {
    currency: {},
    date: {},
    dateParsers: {},
    message: {},
    number: {},
    numberParsers: {},
    plural: {},
    relativeTime: {},
    unit: {},
  };
}

function orderedProps(obj: Record<string, any>) {
  return Object.keys(obj).sort().map((key) => ({ [key]: obj[key] }));
}

function getCacheKey(args: any[]) {
  return JSON.stringify(args.map((arg) => (!!arg && typeof arg === 'object' ? orderedProps(arg) : arg)));
}

interface MemoizeFormatterFn {
  <T extends {(...args: any[]): any}>(
    builder: T,
    cache: Record<string, CacheValue>,
  ): (...args: Parameters<T>) => any;
}

export const memoizeFormatter: MemoizeFormatterFn = (
  formatterCreator: any,
  cache: Record<string, any>,
) => (...args: any[]) => {
  const cacheId = getCacheKey(args);

  if (!cache[cacheId]) {
    // eslint-disable-next-line no-param-reassign
    cache[cacheId] = formatterCreator(...args);
  }

  return cache[cacheId];
};
