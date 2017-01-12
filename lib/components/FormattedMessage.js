/*!
 * React Native Globalize
 *
 * Copyright 2015-2017 Josh Swan
 * Released under the MIT license
 * https://github.com/joshswan/react-native-globalize/blob/master/LICENSE
 */
import { Component, PropTypes, createElement, isValidElement } from 'react';
import { Text } from 'react-native';
import { globalizeShape, messageFormatPropTypes } from '../types';

export default class FormattedMessage extends Component {
  setNativeProps(nativeProps) {
    this._root.setNativeProps(nativeProps);
  }

  render() {
    const formatMessage = this.context.globalize.getMessageFormatter(this.props.message);

    const values = this.props.values || {};

    Object.keys(this.props).forEach((key) => {
      if (key !== 'values') {
        values[key] = this.props[key];
      }
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
      style: this.props.style,
    }, ...nodes);
  }
}

FormattedMessage.propTypes = {
  ...messageFormatPropTypes,
  message: PropTypes.oneOfType([PropTypes.array, PropTypes.string]).isRequired,
  values: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  style: Text.propTypes.style,
};

FormattedMessage.contextTypes = {
  globalize: globalizeShape,
};
