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

class FormattedDate extends PureComponent {
  static propTypes = {
    globalize: globalizeShape.isRequired,
    accessibilityLabel: PropTypes.string,
    adjustsFontSizeToFit: PropTypes.bool,
    allowFontScaling: PropTypes.bool,
    date: PropTypes.oneOf(['full', 'long', 'medium', 'short']),
    datetime: PropTypes.oneOf(['full', 'long', 'medium', 'short']),
    skeleton: PropTypes.string,
    style: Text.propTypes.style,
    time: PropTypes.oneOf(['full', 'long', 'medium', 'short']),
    value: PropTypes.instanceOf(Date).isRequired,
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
      value,
      ...rest
    } = this.props;

    const formatDate = globalize.getDateFormatter(rest);
    const formattedDate = (value instanceof Date) ? formatDate(value) : '';

    return (
      <Text
        ref={(component) => { this._root = component; }}
        accessibilityLabel={accessibilityLabel}
        adjustsFontSizeToFit={adjustsFontSizeToFit}
        allowFontScaling={allowFontScaling}
        style={style}
      >
        {formattedDate}
      </Text>
    );
  }
}

export default withGlobalize(FormattedDate);
