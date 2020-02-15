/*!
 * React Native Globalize
 *
 * Copyright 2015-2020 Josh Swan
 * Released under the MIT license
 * https://github.com/joshswan/react-native-globalize/blob/master/LICENSE
 */

import React from 'react';
import { createWithGlobalize } from '../../../test/createWithGlobalize';
import { FormattedDate } from '..';

const date = new Date(2019, 0, 1);

describe('<FormattedDate />', () => {
  test('renders correctly', () => {
    const tree = createWithGlobalize(<FormattedDate skeleton="yMd" value={date} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
