/*!
 * React Native Globalize
 *
 * Copyright 2015-2020 Josh Swan
 * Released under the MIT license
 * https://github.com/joshswan/react-native-globalize/blob/master/LICENSE
 */

import {
  CurrencyFormatterOptions as GlobalizeCurrencyFormatterOptions,
  dateFormatter,
  DateFormatterOptions,
  dateParser,
  numberFormatter,
  NumberFormatterOptions,
  numberParser,
  NumberParserOptions,
  pluralGenerator,
  PluralGeneratorOptions,
  relativeTimeFormatter,
  RelativeTimeFormatterOptions,
  unitFormatter,
  UnitFormatterOptions as GlobalizeUnitFormatterOptions,
} from 'globalize';
import { ReactElement } from 'react';

export {
  DateFormatterOptions,
  NumberFormatterOptions,
  NumberParserOptions,
  PluralGeneratorOptions,
  RelativeTimeFormatterOptions,
};

export type Messages = Record<string, string>;
export type PluralGroup = 'zero' | 'one' | 'two' | 'few' | 'many' | 'other';
export type Unit = 'year' | 'quarter' | 'month' | 'week' | 'day' | 'hour' | 'minute' | 'second';

export interface CurrencyFormatter {
  (value: number): string;
}

export interface CurrencyFormatterOptions extends GlobalizeCurrencyFormatterOptions {
  // Add symbolForm option to enable alt-narrow currency symbol
  // TODO: Submit PR to DT
  symbolForm?: 'narrow';
}

export interface DateFormatter {
  (value: Date): string;
}

export interface DateParser {
  (value: string): Date;
}

export interface MessageFormatter {
  (values?: string[] | Record<string, string>): string;
  (values: Record<string, string | ReactElement>): string | ReactElement;
}

export interface MessageFormatterOptions {
  defaultMessage?: string;
}

export interface NumberFormatter {
  (value: number): string;
}

export interface NumberParser {
  (value: string): number;
}

export interface PluralGenerator {
  (value: number): PluralGroup;
}

export interface RelativeTimeFormatter {
  (value: number): string;
}

export interface UnitFormatter {
  (value: number): string;
}

export interface UnitFormatterOptions extends Omit<GlobalizeUnitFormatterOptions, 'numberFormatter'> {
  // Fix numberFormatter option definition
  // TODO: Submit PR to DT
  numberFormatter?: (value: number) => string;
}

export interface Formatters {
  getCurrencyFormatter(currency?: string, options?: CurrencyFormatterOptions): CurrencyFormatter;
  getDateFormatter(...args: Parameters<typeof dateFormatter>): DateFormatter;
  getDateParser(...args: Parameters<typeof dateParser>): DateParser;
  getMessageFormatter(id: string | string[], options?: MessageFormatterOptions): MessageFormatter;
  getNumberFormatter(...args: Parameters<typeof numberFormatter>): NumberFormatter;
  getNumberParser(...args: Parameters<typeof numberParser>): NumberParser;
  getPluralGenerator(...args: Parameters<typeof pluralGenerator>): PluralGenerator;
  getRelativeTimeFormatter(
    ...args: Parameters<typeof relativeTimeFormatter>
  ): RelativeTimeFormatter;
  getUnitFormatter(...args: Parameters<typeof unitFormatter>): UnitFormatter;
}

export interface GlobalizeConfig {
  locale: string;
  currencyCode: string;
  fallback: boolean;
  onError(message: string, exception?: Error): void;
}

export interface GlobalizeHelpers {
  getAvailableLocales(): string[];
  getCurrencySymbol(
    currencyCode: string,
    altNarrow?: boolean,
  ): string | null;
  loadCldr(...cldrData: Record<string, any>[]): void;
  loadMessages(messageData: Record<string, Record<string, string | Messages>>): void;
  localeIsLoaded(locale: string): boolean;
}

export interface Globalize extends GlobalizeConfig, GlobalizeHelpers, Formatters {
  formatCurrency(
    value: number,
    currencyCode?: string,
    options?: CurrencyFormatterOptions,
  ): string;
  formatDate(
    value: Date,
    options?: DateFormatterOptions,
  ): string;
  formatMessage(
    id: string | string[],
    values?: string[] | Record<string, string>,
    options?: MessageFormatterOptions,
  ): string;
  formatMessage(
    id: string | string[],
    values?: Record<string, string | ReactElement>,
    options?: MessageFormatterOptions,
  ): string | ReactElement;
  formatNumber(
    value: number,
    options?: NumberFormatterOptions,
  ): string;
  formatPlural(
    value: number,
    options?: PluralGeneratorOptions,
  ): PluralGroup;
  formatRelativeTime(
    value: number,
    unit: Unit,
    options?: RelativeTimeFormatterOptions,
  ): string;
  formatRelativeTime(
    value: Date,
    unit: 'auto' | 'best' | Unit,
    options?: RelativeTimeFormatterOptions,
  ): string;
  formatUnit(
    value: number,
    unit: string,
    options?: UnitFormatterOptions,
  ): string;
  parseDate(
    value: string,
    options?: DateFormatterOptions,
  ): Date;
  parseNumber(
    value: string,
    options?: NumberParserOptions,
  ): number;
}
