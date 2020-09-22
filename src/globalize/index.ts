/*!
 * React Native Globalize
 *
 * Copyright 2015-2020 Josh Swan
 * Released under the MIT license
 * https://github.com/joshswan/react-native-globalize/blob/master/LICENSE
 */

import { createCache } from './cache';
import {
  createFormatters,
  formatCurrency,
  formatDate,
  formatMessage,
  formatNumber,
  formatPlural,
  formatRelativeTime,
  formatUnit,
  parseDate,
  parseNumber,
} from './formatters';
import {
  findFallbackLocale,
  getAvailableLocales,
  getCurrencySymbol,
  getLocaleId,
  localeIsLoaded,
  logError,
} from './utils';
import { Globalize, GlobalizeConfig } from './types';
import * as loaders from './loaders';

const configDefaults = {
  currencyCode: 'USD',
  fallback: false,
  onError: logError,
};

type Config = Omit<GlobalizeConfig, keyof typeof configDefaults> & Partial<GlobalizeConfig>;

export function createGlobalize(config: Config): Globalize {
  const cfg = {
    ...configDefaults,
    ...config,
    locale: getLocaleId(config.locale),
  };

  if (!localeIsLoaded(cfg.locale)) {
    cfg.locale = (cfg.fallback && findFallbackLocale(cfg.fallback)) as string;

    if (!cfg.locale) {
      throw new Error('[RNGlobalize] CLDR data for the selected language/locale has not been loaded!');
    }
  }

  const cache = createCache();
  const formatters = createFormatters(cfg, cache);

  return {
    ...cfg,
    ...formatters,
    ...loaders,
    getAvailableLocales,
    getCurrencySymbol(
      currencyCode?: string,
      altNarrow?: boolean,
    ) {
      return getCurrencySymbol(
        cfg.locale,
        currencyCode || cfg.currencyCode,
        altNarrow,
      );
    },
    localeIsLoaded,
    formatCurrency: formatCurrency.bind(
      null,
      cfg,
      formatters.getCurrencyFormatter,
    ),
    formatDate: formatDate.bind(
      null,
      cfg,
      formatters.getDateFormatter,
    ),
    formatMessage: formatMessage.bind(
      null,
      cfg,
      formatters.getMessageFormatter,
    ),
    formatNumber: formatNumber.bind(
      null,
      cfg,
      formatters.getNumberFormatter,
    ),
    formatPlural: formatPlural.bind(
      null,
      cfg,
      formatters.getPluralGenerator,
    ),
    formatRelativeTime: formatRelativeTime.bind(
      null,
      cfg,
      formatters.getRelativeTimeFormatter,
    ),
    formatUnit: formatUnit.bind(
      null,
      cfg,
      formatters.getUnitFormatter,
    ),
    parseDate: parseDate.bind(
      null,
      cfg,
      formatters.getDateParser,
    ),
    parseNumber: parseNumber.bind(
      null,
      cfg,
      formatters.getNumberParser,
    ),
  };
}

export * from './loaders';
export * from './types';
export * from './utils';
