/*!
 * React Native Globalize
 *
 * Copyright 2015-2018 Josh Swan
 * Released under the MIT license
 * https://github.com/joshswan/react-native-globalize/blob/master/LICENSE
 */

import React from 'react';
import createComponentWithGlobalize from '../../../utils/createComponentWithGlobalize';
import FormattedPlural from '../FormattedPlural';

describe('<FormattedPlural />', () => {
  test('renders correctly', () => {
    const tree = createComponentWithGlobalize(<FormattedPlural value={1} zero=":(" other=":)" />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
