/*!
 * React Native Globalize
 *
 * Copyright 2015-2017 Josh Swan
 * Released under the MIT license
 * https://github.com/joshswan/react-native-globalize/blob/master/LICENSE
 */
import React, { Component, PropTypes } from 'react';
import { Text } from 'react-native';
import { globalizeShape, pluralFormatPropTypes } from '../types';

export default class FormattedPlural extends Component {
  setNativeProps(nativeProps) {
    this._root.setNativeProps(nativeProps);
  }

  render() {
    const formatPlural = this.context.globalize.getPluralGenerator(this.props);
    const pluralCategory = (typeof this.props.value === 'number') ? formatPlural(this.props.value) : '';
    const formattedPlural = this.props[pluralCategory] || this.props.other;

    return (
      <Text
        ref={(component) => { this._root = component; }}
        style={this.props.style}
      >
        {formattedPlural}
      </Text>
    );
  }
}

FormattedPlural.defaultProps = {
  zero: null,
  one: null,
  two: null,
  few: null,
  many: null,
  style: null,
};

FormattedPlural.propTypes = {
  ...pluralFormatPropTypes,
  value: PropTypes.number.isRequired,
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
