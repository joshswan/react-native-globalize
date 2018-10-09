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

class FormattedNumber extends PureComponent {
  static propTypes = {
    globalize: globalizeShape.isRequired,
    accessibilityLabel: PropTypes.string,
    adjustsFontSizeToFit: PropTypes.bool,
    allowFontScaling: PropTypes.bool,
    maximumFractionDigits: PropTypes.number,
    minimumFractionDigits: PropTypes.number,
    minimumIntegerDigits: PropTypes.number,
    maximumSignificantDigits: PropTypes.number,
    minimumSignificantDigits: PropTypes.number,
    numberStyle: PropTypes.oneOf(['decimal', 'percent']),
    round: PropTypes.oneOf(['ceil', 'floor', 'round', 'truncate']),
    style: Text.propTypes.style,
    useGrouping: PropTypes.bool,
    value: PropTypes.number.isRequired,
  }

  static defaultProps = {
    accessibilityLabel: '',
    adjustsFontSizeToFit: false,
    allowFontScaling: true,
    numberStyle: 'decimal',
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
      numberStyle,
      style,
      value,
      ...rest
    } = this.props;

    const formatNumber = globalize.getNumberFormatter({
      ...rest,
      style: numberStyle,
    });
    const formattedNumber = (typeof value === 'number') ? formatNumber(value) : '';

    return (
      <Text
        ref={(component) => { this._root = component; }}
        accessibilityLabel={accessibilityLabel}
        adjustsFontSizeToFit={adjustsFontSizeToFit}
        allowFontScaling={allowFontScaling}
        style={style}
      >
        {formattedNumber}
      </Text>
    );
  }
}

export default withGlobalize(FormattedNumber);
