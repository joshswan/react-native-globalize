/*!
 * React Native Globalize
 *
 * Copyright 2015-2020 Josh Swan
 * Released under the MIT license
 * https://github.com/joshswan/react-native-globalize/blob/master/LICENSE
 */

import React from 'react';
import createWithGlobalize from '../../../test/createWithGlobalize';
import { FormattedPlural } from '../FormattedPlural';

describe('<FormattedPlural />', () => {
  test('renders correctly', () => {
    const tree = createWithGlobalize(<FormattedPlural value={1} zero=":(" other=":)" />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
