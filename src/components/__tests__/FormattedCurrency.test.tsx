/*!
 * React Native Globalize
 *
 * Copyright 2015-2020 Josh Swan
 * Released under the MIT license
 * https://github.com/joshswan/react-native-globalize/blob/master/LICENSE
 */

import React from 'react';
import { createWithGlobalize } from '../../../test/createWithGlobalize';
import { FormattedCurrency } from '..';

describe('<FormattedCurrency />', () => {
  test('renders correctly', () => {
    const tree = createWithGlobalize(<FormattedCurrency value={10} />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  describe('symbolForm', () => {
    test('supports symbolForm prop to use alt narrow currency symbol', () => {
      const tree = createWithGlobalize(
        <FormattedCurrency currency="CAD" symbolForm="narrow" value={10} />,
      ).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});
