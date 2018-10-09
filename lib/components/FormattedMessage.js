/*!
 * React Native Globalize
 *
 * Copyright 2015-2018 Josh Swan
 * Released under the MIT license
 * https://github.com/joshswan/react-native-globalize/blob/master/LICENSE
 */

import { PureComponent, createElement, isValidElement } from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import { globalizeShape } from '../types';
import withGlobalize from './withGlobalize';

class FormattedMessage extends PureComponent {
  static propTypes = {
    globalize: globalizeShape.isRequired,
    accessibilityLabel: PropTypes.string,
    adjustsFontSizeToFit: PropTypes.bool,
    allowFontScaling: PropTypes.bool,
    defaultMessage: PropTypes.string,
    message: PropTypes.oneOfType([PropTypes.array, PropTypes.string]).isRequired,
    style: Text.propTypes.style,
    values: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  }

  static defaultProps = {
    accessibilityLabel: '',
    adjustsFontSizeToFit: false,
    allowFontScaling: true,
    defaultMessage: null,
    style: null,
    values: {},
  }

  setNativeProps(nativeProps) {
    this._root.setNativeProps(nativeProps);
  }

  render() {
    const {
      accessibilityLabel,
      adjustsFontSizeToFit,
      allowFontScaling,
      globalize,
      defaultMessage,
      message,
      style,
      values,
      ...rest
    } = this.props;

    const formatMessage = globalize.getMessageFormatter(message, {
      defaultMessage,
    });

    // Assign extra props to values object
    Object.keys(rest).forEach((key) => {
      values[key] = rest[key];
    });

    /**
     * Code adapted from https://github.com/yahoo/react-intl
     */

    // Creates a token with a random UID that should not be guessable or
    // conflict with other parts of the `message` string.
    const uid = Math.floor(Math.random() * 0x10000000000).toString(16);
    const tokenRegexp = new RegExp(`(@__ELEMENT-${uid}-\\d+__@)`, 'g');

    const generateToken = (() => {
      let counter = 0;
      return () => `@__ELEMENT-${uid}-${counter += 1}__@`; // eslint-disable-line no-return-assign
    })();

    const tokenizedValues = {};
    const elements = {};

    // Iterates over the `props` to keep track of any React Element values
    // so they can be represented by the `token` as a placeholder when the
    // `message` is formatted. This allows the formatted message to then be
    // broken-up into parts with references to the React Elements inserted
    // back in.
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

    const formattedMessage = formatMessage(tokenizedValues);

    // Split the message into parts so the React Element values captured
    // above can be inserted back into the rendered message. This approach
    // allows messages to render with React Elements while keeping React's
    // virtual diffing working properly.
    const nodes = formattedMessage
        .split(tokenRegexp)
        .filter(part => !!part)
        .map(part => elements[part] || part);

    return createElement(Text, {
      ref: (component) => { this._root = component; },
      accessibilityLabel,
      adjustsFontSizeToFit,
      allowFontScaling,
      style,
    }, ...nodes);
  }
}

export default withGlobalize(FormattedMessage);
