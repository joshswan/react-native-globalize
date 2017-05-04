/*!
 * React Native Globalize
 *
 * Copyright 2015-2017 Josh Swan
 * Released under the MIT license
 * https://github.com/joshswan/react-native-globalize/blob/master/LICENSE
 */
import { Component, PropTypes } from 'react';
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

FormattedWrapper.defaultProps = {
  cldr: null,
  localeFallback: false,
  messages: null,
};

FormattedWrapper.propTypes = {
  ...globalizePropTypes,
  cldr: PropTypes.array, // eslint-disable-line react/forbid-prop-types
  children: PropTypes.node.isRequired,
  currency: PropTypes.string,
  locale: PropTypes.string,
  localeFallback: PropTypes.bool,
  messages: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

FormattedWrapper.childContextTypes = {
  globalize: globalizeShape,
};

FormattedWrapper.defaultProps = {
  locale: 'en',
  currency: 'USD',
};
