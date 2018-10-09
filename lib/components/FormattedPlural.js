/*!
 * React Native Globalize
 *
 * Copyright 2015-2018 Josh Swan
 * Released under the MIT license
 * https://github.com/joshswan/react-native-globalize/blob/master/LICENSE
 */

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import { globalizeShape } from '../types';
import withGlobalize from './withGlobalize';

class FormattedPlural extends PureComponent {
  static propTypes = {
    globalize: globalizeShape.isRequired,
    value: PropTypes.number.isRequired,
    other: PropTypes.node.isRequired,
    zero: PropTypes.node,
    one: PropTypes.node,
    two: PropTypes.node,
    few: PropTypes.node,
    many: PropTypes.node,
    accessibilityLabel: PropTypes.string,
    adjustsFontSizeToFit: PropTypes.bool,
    allowFontScaling: PropTypes.bool,
    style: Text.propTypes.style,
    type: PropTypes.oneOf(['cardinal', 'ordinal']),
  }

  static defaultProps = {
    zero: null,
    one: null,
    two: null,
    few: null,
    many: null,
    accessibilityLabel: '',
    adjustsFontSizeToFit: false,
    allowFontScaling: true,
    style: null,
    type: 'cardinal',
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
      other,
      style,
      type,
      value,
      ...rest
    } = this.props;

    const formatPlural = globalize.getPluralGenerator({ type });
    const pluralCategory = (typeof value === 'number') ? formatPlural(value) : '';
    const formattedPlural = rest[pluralCategory] || other;

    return (
      <Text
        ref={(component) => { this._root = component; }}
        accessibilityLabel={accessibilityLabel}
        adjustsFontSizeToFit={adjustsFontSizeToFit}
        allowFontScaling={allowFontScaling}
        style={style}
      >
        {formattedPlural}
      </Text>
    );
  }
}

export default withGlobalize(FormattedPlural);
