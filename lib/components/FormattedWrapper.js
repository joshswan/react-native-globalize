/*!
 * React Native Globalize
 *
 * Copyright 2015-2017 Josh Swan
 * Released under the MIT license
 * https://github.com/joshswan/react-native-globalize/blob/master/LICENSE
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { globalizeShape, globalizePropTypes } from '../types';
import Globalize from '../globalize';

export default class FormattedWrapper extends Component {
  constructor(props) {
    super(props);

    if (props.cldr) {
      Globalize.load(props.cldr);
    }

    if (props.messages) {
      Globalize.loadMessages(props.messages);
    }

    const instance = new Globalize(props.locale, props.currency, {
      fallback: props.localeFallback,
      warnOnMissingMessage: props.warnOnMissingMessage,
    });

    this.state = {
      globalize: instance,
    };
  }

  getChildContext() {
    return {
      globalize: this.state.globalize,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.locale !== nextProps.locale || this.props.currency !== nextProps.currency) {
      const instance = new Globalize(nextProps.locale, nextProps.currency, {
        fallback: nextProps.localeFallback,
        warnOnMissingMessage: nextProps.warnOnMissingMessage,
      });

      this.setState({
        globalize: instance,
      });
    }
  }

  render() {
    return this.props.children;
  }
}

FormattedWrapper.propTypes = {
  ...globalizePropTypes,
  cldr: PropTypes.array, // eslint-disable-line react/forbid-prop-types
  children: PropTypes.node.isRequired,
  currency: PropTypes.string,
  locale: PropTypes.string,
  localeFallback: PropTypes.bool,
  messages: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  warnOnMissingMessage: PropTypes.bool,
};

FormattedWrapper.childContextTypes = {
  globalize: globalizeShape,
};

FormattedWrapper.defaultProps = {
  cldr: null,
  currency: 'USD',
  locale: 'en',
  localeFallback: false,
  messages: null,
  warnOnMissingMessage: true,
};
