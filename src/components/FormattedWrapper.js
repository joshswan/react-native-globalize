/*!
 * React Native Globalize
 *
 * Copyright 2015-2016 Josh Swan
 * Released under the MIT license
 * https://github.com/joshswan/react-native-globalize/blob/master/LICENSE
 */
'use strict';

import {Component, PropTypes} from 'react';
import {globalizeShape, globalizePropTypes} from '../types';
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

    let instance = new Globalize(props.locale, props.currency);

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
      let instance = new Globalize(nextProps.locale, nextProps.currency);

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
  cldr: PropTypes.array,
  children: PropTypes.node,
  currency: PropTypes.string,
  locale: PropTypes.string,
  messages: PropTypes.object,
};

FormattedWrapper.childContextTypes = {
  globalize: globalizeShape,
};

FormattedWrapper.defaultProps = {
  locale: 'en',
  currency: 'USD',
};
