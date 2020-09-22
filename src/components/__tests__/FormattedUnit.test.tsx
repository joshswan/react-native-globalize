/*!
 * React Native Globalize
 *
 * Copyright 2015-2020 Josh Swan
 * Released under the MIT license
 * https://github.com/joshswan/react-native-globalize/blob/master/LICENSE
 */

import React from 'react';
import { createWithGlobalize } from '../../../test/createWithGlobalize';
import { createGlobalize } from '../../globalize';
import { FormattedUnit } from '..';

describe('<FormattedUnit />', () => {
  test('renders correctly', () => {
    const tree = createWithGlobalize(<FormattedUnit unit="mile-per-hour" value={75} />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('uses a custom number formatter function', () => {
    const globalize = createGlobalize({ locale: 'en' });
    const numberFormatter = globalize.getNumberFormatter({
      minimumFractionDigits: 2,
      useGrouping: false,
    });

    const tree = createWithGlobalize(
      <FormattedUnit
        form="narrow"
        numberFormatter={numberFormatter}
        unit="area-square-mile"
        value={5000}
      />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
