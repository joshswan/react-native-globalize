/*!
 * React Native Globalize
 *
 * Copyright 2015-2018 Josh Swan
 * Released under the MIT license
 * https://github.com/joshswan/react-native-globalize/blob/master/LICENSE
 */

import React from 'react';
import createComponentWithGlobalize from '../../../utils/createComponentWithGlobalize';
import FormattedDate from '../FormattedDate';

const date = new Date(2018, 0, 1);

describe('<FormattedDate />', () => {
  test('renders correctly', () => {
    const tree = createComponentWithGlobalize(<FormattedDate skeleton="yMd" value={date} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
