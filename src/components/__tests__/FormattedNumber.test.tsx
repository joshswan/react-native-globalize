/*!
 * React Native Globalize
 *
 * Copyright 2015-2020 Josh Swan
 * Released under the MIT license
 * https://github.com/joshswan/react-native-globalize/blob/master/LICENSE
 */

import React from 'react';
import { createWithGlobalize } from '../../../test/createWithGlobalize';
import { FormattedNumber } from '..';

describe('<FormattedNumber />', () => {
  test('renders correctly', () => {
    const tree = createWithGlobalize(<FormattedNumber value={1000} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
