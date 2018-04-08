/*!
 * React Native Globalize
 *
 * Copyright 2015-2018 Josh Swan
 * Released under the MIT license
 * https://github.com/joshswan/react-native-globalize/blob/master/LICENSE
 */

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Globalize from '../globalize';
import GlobalizeContext from '../context';

/* eslint-disable react/forbid-prop-types, react/no-unused-prop-types */

export default class FormattedProvider extends PureComponent {
  static propTypes = {
    cldr: PropTypes.array,
    children: PropTypes.node.isRequired,
    currency: PropTypes.string,
    locale: PropTypes.string,
    localeFallback: PropTypes.bool,
    messages: PropTypes.object,
    warnOnMissingMessage: PropTypes.bool,
  }

  static defaultProps = {
    cldr: null,
    currency: 'USD',
    locale: 'en',
    localeFallback: false,
    messages: null,
    warnOnMissingMessage: true,
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const {
      currency,
      locale,
      localeFallback: fallback,
      warnOnMissingMessage,
    } = nextProps;

    if (prevState.locale !== locale || prevState.currency !== currency) {
      return {
        currency,
        globalize: new Globalize(locale, currency, {
          fallback,
          warnOnMissingMessage,
        }),
        locale,
      };
    }

    return null;
  }

  constructor(props) {
    super(props);

    const {
      cldr,
      messages,
    } = this.props;

    if (cldr) {
      Globalize.load(cldr);
    }

    if (messages) {
      Globalize.loadMessages(messages);
    }
  }

  state = {}

  render() {
    return (
      <GlobalizeContext.Provider value={this.state.globalize}>
        {this.props.children}
      </GlobalizeContext.Provider>
    );
  }
}
