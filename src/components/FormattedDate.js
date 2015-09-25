/*!
 * React Native Globalize
 *
 * Copyright 2015 Josh Swan
 * Released under the MIT license
 * https://github.com/joshswan/react-native-globalize/blob/master/LICENSE
 */
'use strict';

import React, {Component, PropTypes} from 'react-native';
import {globalizeShape, dateFormatPropTypes} from '../types';

const {
  Text,
} = React;

export default class FormattedDate extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const formatDate = this.context.globalize.getDateFormatter(this.props);

    let formattedDate = formatDate(this.props.value);

    return (
      <Text>{formattedDate}</Text>
    );
  }
}

FormattedDate.propTypes = {
  ...dateFormatPropTypes,
  value: PropTypes.any.isRequired,
};

FormattedDate.contextTypes = {
  globalize: globalizeShape,
};
