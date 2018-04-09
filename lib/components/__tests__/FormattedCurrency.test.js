/*!
 * React Native Globalize
 *
 * Copyright 2015-2018 Josh Swan
 * Released under the MIT license
 * https://github.com/joshswan/react-native-globalize/blob/master/LICENSE
 */

import React from 'react';
import createComponentWithGlobalize from '../../../utils/createComponentWithGlobalize';
import FormattedCurrency from '../FormattedCurrency';

describe('<FormattedCurrency />', () => {
  test('renders correctly', () => {
    const tree = createComponentWithGlobalize(<FormattedCurrency value={10} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
