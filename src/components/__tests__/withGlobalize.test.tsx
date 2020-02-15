/*!
 * React Native Globalize
 *
 * Copyright 2015-2020 Josh Swan
 * Released under the MIT license
 * https://github.com/joshswan/react-native-globalize/blob/master/LICENSE
 */

import React from 'react';
import { Text } from 'react-native';
import { createWithGlobalize } from '../../../test/createWithGlobalize';
import { withGlobalize, WithGlobalizeProps } from '../withGlobalize';

describe('withGlobalize()', () => {
  test('injects Globalize instance', () => {
    const Component: React.FC<WithGlobalizeProps> = ({ globalize }) => {
      expect(typeof globalize).toBe('object');
      expect(globalize).toHaveProperty('getCurrencyFormatter');
      expect(globalize).toHaveProperty('formatCurrency');

      const formatter = globalize.getCurrencyFormatter();

      return (
        <Text>
          {formatter(10)}
        </Text>
      );
    };

    const WrappedComponent = withGlobalize(Component);

    const tree = createWithGlobalize(<WrappedComponent />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
