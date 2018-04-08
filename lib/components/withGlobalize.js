/*!
 * React Native Globalize
 *
 * Copyright 2015-2018 Josh Swan
 * Released under the MIT license
 * https://github.com/joshswan/react-native-globalize/blob/master/LICENSE
 */

import React from 'react';
import GlobalizeContext from '../context';

export default function withGlobalize(Component) {
  return function FormattedComponent(props) {
    return (
      <GlobalizeContext.Consumer>
        {globalize => <Component {...props} globalize={globalize} />}
      </GlobalizeContext.Consumer>
    );
  };
}
