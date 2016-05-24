/*!
 * React Native Globalize
 *
 * Copyright 2015-2016 Josh Swan
 * Released under the MIT license
 * https://github.com/joshswan/react-native-globalize/blob/master/LICENSE
 */
'use strict';

import React, {Component, PropTypes} from 'react';
import {Text} from 'react-native';
import {globalizeShape, pluralFormatPropTypes} from '../types';

export default class FormattedPlural extends Component {
  constructor(props, context) {
    super(props, context);
  }

  setNativeProps(nativeProps) {
    this._root.setNativeProps(nativeProps);
  }

  render() {
    const formatPlural = this.context.globalize.getPluralGenerator(this.props);

    let pluralCategory = (typeof this.props.value === 'number') ? formatPlural(this.props.value) : '';
    let formattedPlural = this.props[pluralCategory] || this.props.other;

    return (
      <Text
        ref={(component) => { this._root = component; }}
        style={this.props.style}>
          {formattedPlural}
      </Text>
    );
  }
}

FormattedPlural.propTypes = {
  ...pluralFormatPropTypes,
  value: PropTypes.any.isRequired,
  other: PropTypes.node.isRequired,
  zero: PropTypes.node,
  one: PropTypes.node,
  two: PropTypes.node,
  few: PropTypes.node,
  many: PropTypes.node,
  style: Text.propTypes.style,
};

FormattedPlural.contextTypes = {
  globalize: globalizeShape,
};
