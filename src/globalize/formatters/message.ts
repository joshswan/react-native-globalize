/*!
 * React Native Globalize
 *
 * Copyright 2015-2020 Josh Swan
 * Released under the MIT license
 * https://github.com/joshswan/react-native-globalize/blob/master/LICENSE
 */

import { messageFormatter } from 'globalize';
import { Fragment, ReactElement, createElement, isValidElement } from 'react';
import { Formatters, GlobalizeConfig, MessageFormatter, MessageFormatterOptions } from '../types';

/**
 * The globalize core library only supports number/string replacement values when formatting
 * messages. To support React Element values, a random UID token that does not conflict with other
 * parts of the string is used as a placeholder during message formatting. The formatted message
 * can then be broken up into parts based on the tokens and the React Element(s) inserted.
 * @param getMessageFormatter The normal Globalize messageFormatter function
 */
export function enhanceMessageFormatter(
  getMessageFormatter: typeof messageFormatter,
  config: GlobalizeConfig,
): (id: string | string[], options?: MessageFormatterOptions) => MessageFormatter {
  return (id: string | string[], options: MessageFormatterOptions = {}) => {
    let formatter: MessageFormatter;

    try {
      formatter = getMessageFormatter(id);
    } catch (e) {
      const msgId = Array.isArray(id) ? id.join('/') : id;

      config.onError(`Error processing message ${msgId}.`, e);

      if (typeof options.defaultMessage === 'string') {
        return () => options.defaultMessage;
      }

      return () => msgId;
    }

    return (values: string[] | Record<string, string | number | ReactElement> = {}): any => {
      const uid = Math.floor(Math.random() * 0x10000000000).toString(16);
      const tokenRegexp = new RegExp(`(@__ELEMENT-${uid}-\\d+__@)`, 'g');
      const generateToken = (() => {
        let counter = 0;
        return () => `@__ELEMENT-${uid}-${counter++}__@`; // eslint-disable-line no-plusplus
      })();
      const tokenizedValues: { [value: string]: string } = {};
      const elements: { [token: string]: any } = {};

      Object.keys(values).forEach((key) => {
        const index = key as keyof typeof values;
        const value = values[index];

        if (isValidElement(value)) {
          const token = generateToken();
          tokenizedValues[key] = token;
          elements[token] = value;
        } else {
          tokenizedValues[key] = value as string;
        }
      });

      const nodes = formatter(tokenizedValues)
        .split(tokenRegexp)
        .filter((part) => !!part)
        .map((part) => elements[part] || part);

      if (nodes.length === 1 && typeof nodes[0] === 'string') {
        return nodes[0] as string;
      }

      return createElement(Fragment, null, ...nodes);
    };
  };
}

export function formatMessage(
  config: GlobalizeConfig,
  getMessageFormatter: Formatters['getMessageFormatter'],
  id: string | string[],
  values?: Record<string, string>,
  options?: MessageFormatterOptions,
): string;
export function formatMessage(
  config: GlobalizeConfig,
  getMessageFormatter: Formatters['getMessageFormatter'],
  id: string | string[],
  values: Record<string, string | ReactElement> = {},
  options?: MessageFormatterOptions,
): string | ReactElement {
  try {
    return getMessageFormatter(id, options)(values);
  } catch (e) {
    const msgId = Array.isArray(id) ? id.join('/') : id;
    config.onError(`Error formatting message ${msgId}.`, e);

    return String(msgId);
  }
}
