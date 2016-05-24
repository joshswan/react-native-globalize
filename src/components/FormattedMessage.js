/*!
 * React Native Globalize
 *
 * Copyright 2015-2016 Josh Swan
 * Released under the MIT license
 * https://github.com/joshswan/react-native-globalize/blob/master/LICENSE
 */
'use strict';

import {Component, PropTypes, createElement, isValidElement} from 'react';
import {Text} from 'react-native';
import {globalizeShape, messageFormatPropTypes} from '../types';

export default class FormattedMessage extends Component {
  constructor(props, context) {
    super(props, context);
  }

  setNativeProps(nativeProps) {
    this._root.setNativeProps(nativeProps);
  }

  render() {
    const formatMessage = this.context.globalize.getMessageFormatter(this.props.message);

    let values = this.props.values || {};

    for (let i in this.props) {
      if (this.props.hasOwnProperty(i) && i !== 'values') {
        values[i] = this.props[i];
      }
    }

    /**
     * Code adapted from https://github.com/yahoo/react-intl
     */

    // Creates a token with a random UID that should not be guessable or
    // conflict with other parts of the `message` string.
    let uid = Math.floor(Math.random() * 0x10000000000).toString(16);
    let tokenRegexp = new RegExp(`(@__ELEMENT-${uid}-\\d+__@)`, 'g');

    let generateToken = (() => {
      let counter = 0;
      return () => `@__ELEMENT-${uid}-${counter += 1}__@`;
    })();

    let tokenizedValues = {};
    let elements        = {};

    // Iterates over the `props` to keep track of any React Element values
    // so they can be represented by the `token` as a placeholder when the
    // `message` is formatted. This allows the formatted message to then be
    // broken-up into parts with references to the React Elements inserted
    // back in.
    Object.keys(values).forEach((name) => {
      let value = values[name];

      if (isValidElement(value)) {
        let token = generateToken();
        tokenizedValues[name] = token;
        elements[token]       = value;
      } else {
        tokenizedValues[name] = value;
      }
    });

    let formattedMessage = formatMessage(tokenizedValues);

    // Split the message into parts so the React Element values captured
    // above can be inserted back into the rendered message. This approach
    // allows messages to render with React Elements while keeping React's
    // virtual diffing working properly.
    let nodes = formattedMessage
        .split(tokenRegexp)
        .filter((part) => !!part)
        .map((part) => elements[part] || part);

    return createElement(Text, {ref: (component) => { this._root = component; }, style: this.props.style}, ...nodes);
  }
}

FormattedMessage.propTypes = {
  ...messageFormatPropTypes,
  message: PropTypes.oneOfType([PropTypes.array, PropTypes.string]).isRequired,
  values: PropTypes.object,
  style: Text.propTypes.style,
};

FormattedMessage.contextTypes = {
  globalize: globalizeShape,
};
