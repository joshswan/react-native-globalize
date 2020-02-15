/*!
 * React Native Globalize
 *
 * Copyright 2015-2020 Josh Swan
 * Released under the MIT license
 * https://github.com/joshswan/react-native-globalize/blob/master/LICENSE
 */

import React, { useContext } from 'react';
import { Text, TextProps as RNTextProps } from 'react-native';
import {
  CurrencyFormatterOptions,
  DateFormatterOptions,
  Globalize,
  NumberFormatterOptions,
  RelativeTimeFormatterOptions,
  UnitFormatterOptions,
  MessageFormatterOptions,
} from '../globalize';
import { GlobalizeContext } from '../context';

export type TextProps = Pick<RNTextProps,
  | 'accessible'
  | 'accessibilityLabel'
  | 'adjustsFontSizeToFit'
  | 'allowFontScaling'
  | 'style'
>

export const filterTextProps: <T extends RNTextProps>(
  props: T,
) => [Omit<T, keyof TextProps>, TextProps] = ({
  accessible = true,
  accessibilityLabel = '',
  adjustsFontSizeToFit = false,
  allowFontScaling = true,
  style,
  ...props
}) => [props, {
  accessible,
  accessibilityLabel,
  adjustsFontSizeToFit,
  allowFontScaling,
  style,
}];

export const createPropFilter: <T extends RNTextProps, P>(
  fn: (props: Omit<T, keyof TextProps>) => P,
) => (props: T) => [P, TextProps] = (fn) => (props) => {
  const [filtered, textProps] = filterTextProps(props);
  return [fn(filtered), textProps];
};

enum DisplayName {
  formatCurrency = 'FormattedCurrency',
  formatDate = 'FormattedDate',
  formatMessage = 'FormattedMessage',
  formatNumber = 'FormattedNumber',
  formatRelativeTime = 'FormattedRelativeTime',
  formatUnit = 'FormattedUnit',
}

type Formatted = {
  formatCurrency: Omit<CurrencyFormatterOptions, 'style'> & {
    currency?: string;
    numberStyle?: CurrencyFormatterOptions['style'];
    value: Parameters<Globalize['formatCurrency']>[0];
  };
  formatDate: DateFormatterOptions & {
    value: Parameters<Globalize['formatDate']>[0];
  };
  formatMessage: MessageFormatterOptions & {
    message: Parameters<Globalize['formatMessage']>[0];
    values?: Parameters<Globalize['formatMessage']>[1];
    [value: string]: any;
  };
  formatNumber: Omit<NumberFormatterOptions, 'style'> & {
    numberStyle?: NumberFormatterOptions['style'];
    value: Parameters<Globalize['formatNumber']>[0];
  };
  formatRelativeTime: RelativeTimeFormatterOptions & {
    unit: Parameters<Globalize['formatRelativeTime']>[1];
    value: Date | number;
  };
  formatUnit: UnitFormatterOptions & {
    unit: Parameters<Globalize['formatUnit']>[1];
    value: Parameters<Globalize['formatUnit']>[0];
  };
};

const extractArgs: {
  [Name in keyof Formatted]: (
    props: Formatted[Name] & TextProps & { value: Parameters<Globalize[Name]>[0] },
  ) => [Parameters<Globalize[Name]>, TextProps]
} = {
  formatCurrency: createPropFilter(({
    currency,
    numberStyle = 'symbol',
    value,
    ...options
  }) => [value, currency, {
    useGrouping: true,
    ...options,
    style: numberStyle as CurrencyFormatterOptions['style'],
  }]),
  formatDate: createPropFilter(({ value, ...options }) => [value, options]),
  formatMessage: createPropFilter(({
    defaultMessage,
    message,
    values = {},
    ...rest
  }) => [message, { ...values, ...rest }, { defaultMessage }]),
  formatNumber: createPropFilter(({ numberStyle = 'decimal', value, ...options }) => [value, {
    useGrouping: true,
    ...options,
    style: numberStyle as NumberFormatterOptions['style'],
  }]),
  formatRelativeTime: createPropFilter(({ form, unit, value }) => [value, unit, { form }]),
  formatUnit: createPropFilter(({ unit, value, ...options }) => [value, unit, options]),
};

export function createFormattedComponent<Name extends keyof Formatted>(
  name: Name,
): React.FC<
  Formatted[Name] & TextProps
> {
  type Props = Formatted[Name] & TextProps;

  const Component: React.FC<Props> = ({ children, ...props }) => {
    const globalize = useContext(GlobalizeContext);
    const [args, textProps] = extractArgs[name](props as any);
    // @ts-ignore
    const formatted = globalize[name](...args);

    return (
      <Text {...textProps}>
        {formatted}
        {children}
      </Text>
    );
  };
  Component.displayName = DisplayName[name];

  return Component;
}
