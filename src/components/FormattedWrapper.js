/*!
 * React Native Globalize
 *
 * Copyright 2015 Josh Swan
 * Released under the MIT license
 * https://github.com/joshswan/react-native-globalize/blob/master/LICENSE
 */
'use strict';

import {Component, PropTypes} from 'react-native';
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

  render() {
    return this.props.children;
  }
}

FormattedWrapper.propTypes = {
  ...globalizePropTypes,
  cldr: PropTypes.array,
  messages: PropTypes.object,
};

FormattedWrapper.defaultProps = {
  locale: 'en',
  currency: 'USD',
};

FormattedWrapper.childContextTypes = {
  globalize: globalizeShape,
};
