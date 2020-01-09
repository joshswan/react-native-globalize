/*!
 * React Native Globalize
 *
 * Copyright 2015-2020 Josh Swan
 * Released under the MIT license
 * https://github.com/joshswan/react-native-globalize/blob/master/LICENSE
 */

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import { globalizeShape } from '../types';
import withGlobalize from './withGlobalize';

class FormattedUnit extends PureComponent {
  static propTypes = {
    globalize: globalizeShape.isRequired,
    accessibilityLabel: PropTypes.string,
    adjustsFontSizeToFit: PropTypes.bool,
    allowFontScaling: PropTypes.bool,
    form: PropTypes.oneOf(['long', 'short', 'narrow']),
    numberFormatter: PropTypes.func,
    style: Text.propTypes.style,
    unit: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
  }

  static defaultProps = {
    accessibilityLabel: '',
    adjustsFontSizeToFit: false,
    allowFontScaling: true,
    style: null,
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
      style,
      unit,
      value,
      ...options
    } = this.props;

    const formatUnit = globalize.getUnitFormatter(unit, options);
    const formattedUnit = (typeof value === 'number') ? formatUnit(value) : '';

    return (
      <Text
        ref={(component) => { this._root = component; }}
        accessible
        accessibilityLabel={accessibilityLabel}
        adjustsFontSizeToFit={adjustsFontSizeToFit}
        allowFontScaling={allowFontScaling}
        style={style}
      >
        {formattedUnit}
      </Text>
    );
  }
}

export default withGlobalize(FormattedUnit);
