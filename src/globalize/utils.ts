/*!
 * React Native Globalize
 *
 * Copyright 2015-2020 Josh Swan
 * Released under the MIT license
 * https://github.com/joshswan/react-native-globalize/blob/master/LICENSE
 */

import Cldr from 'cldrjs';
import moment from 'moment';
import { Unit } from './types';

export function getLocaleId(locale: string): string {
  // iOS returns system locale info with underscores
  return locale.replace(/_/g, '-');
}

export function getAvailableLocales(): string[] {
  return Object.keys((Cldr as any)._raw?.main || {});
}

export function localeIsLoaded(locale: string): boolean {
  return !!((Cldr as any)._raw?.main?.[getLocaleId(locale)]);
}

export function findFallbackLocale(locale: string): string | null {
  const locales = getAvailableLocales();

  for (let i = locale.length - 1; i > 1; i -= 1) {
    const key = locale.substring(0, i);

    if (locales.includes(key)) {
      return key;
    }
  }

  return null;
}

export function getCurrencySymbol(
  locale: string,
  currencyCode: string,
  altNarrow = false,
): string | null {
  // Check whether the locale has been loaded
  if (!locale || !localeIsLoaded(locale)) {
    return null;
  }

  const { currencies } = (Cldr as any)._raw.main[locale].numbers;
  const key = altNarrow ? 'symbol-alt-narrow' : 'symbol';

  return currencies?.[currencyCode][key] || null;
}

export function logError(message: string, exception?: Error) {
  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line no-console
    console.error(`[RNGlobalize] ${message}${exception ? `\n${exception.stack}` : ''}`);
  }
}

const UNITS: Unit[] = ['year', 'month', 'week', 'day', 'hour', 'minute', 'second'];

export function selectTimeUnit(value: any): [number, Unit] {
  if (value instanceof Date) {
    const date = moment(value);
    const now = moment();

    for (let i = 0, l = UNITS.length; i < l; i += 1) {
      const diff = date.diff(now, UNITS[i]);

      if (diff >= 1 || diff <= -1 || i === l - 1) {
        return [diff, UNITS[i]];
      }
    }
  }

  return [Number(value), 'second'];
}
