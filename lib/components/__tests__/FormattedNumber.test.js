/*!
 * React Native Globalize
 *
 * Copyright 2015-2018 Josh Swan
 * Released under the MIT license
 * https://github.com/joshswan/react-native-globalize/blob/master/LICENSE
 */

import React from 'react';
import createComponentWithGlobalize from '../../../utils/createComponentWithGlobalize';
import FormattedNumber from '../FormattedNumber';

describe('<FormattedNumber />', () => {
  test('renders correctly', () => {
    const tree = createComponentWithGlobalize(<FormattedNumber value={1000} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
