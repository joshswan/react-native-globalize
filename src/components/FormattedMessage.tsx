/*!
 * React Native Globalize
 *
 * Copyright 2015-2020 Josh Swan
 * Released under the MIT license
 * https://github.com/joshswan/react-native-globalize/blob/master/LICENSE
 */

import { createElement, isValidElement, useContext } from 'react';
import { Text, TextStyle } from 'react-native';
import { GlobalizeContext } from '../context';

export interface FormattedMessageProps {
  accessibilityLabel?: string;
  adjustsFontSizeToFit?: boolean;
  allowFontScaling?: boolean;
  defaultMessage?: string;
  message: string[] | string;
  style?: TextStyle;
  values?: Object;
  [variable: string]: any;
}

export const FormattedMessage: React.FC<FormattedMessageProps> = ({
  accessibilityLabel = '',
  adjustsFontSizeToFit = false,
  allowFontScaling = true,
  defaultMessage,
  message,
  style,
  values: valuesProp = {},
  ...rest
}) => {
  const globalize = useContext(GlobalizeContext);
  const formatMessage = globalize.getMessageFormatter(message, { defaultMessage });

  // Assign extra props to values object
  const values: { [key: string]: any } = {
    ...valuesProp,
    ...rest,
  };

  // Creates a token with a random UID that should not be guessable or conflict with other parts of
  // the string.
  const uid = Math.floor(Math.random() * 0x10000000000).toString(16);
  const tokenRegexp = new RegExp(`(@__ELEMENT-${uid}-\\d+__@)`, 'g');
  const generateToken = (() => {
    let counter = 0;
    return () => `@__ELEMENT-${uid}-${counter++}__@`; // eslint-disable-line no-plusplus
  })();

  const tokenizedValues: { [variable: string]: string } = {};
  const elements: { [token: string]: any } = {};

  // Iterate over the variables and keep track of any React Element values so they can be replaced
  // with a token as a placeholder for message formatting. The formatted message can then be
  // broken up into parts based on the tokens and the React Elements inserted appropriately.
  Object.keys(values).forEach((key) => {
    const value = values[key];

    if (isValidElement(value)) {
      const token = generateToken();
      tokenizedValues[key] = token;
      elements[token] = value;
    } else {
      tokenizedValues[key] = value;
    }
  });

  const nodes = formatMessage(tokenizedValues)
    .split(tokenRegexp)
    .filter((part) => !!part)
    .map((part) => elements[part] || part);

  return createElement(Text, {
    accessible: true,
    accessibilityLabel,
    adjustsFontSizeToFit,
    allowFontScaling,
    style,
  }, ...nodes);
};
