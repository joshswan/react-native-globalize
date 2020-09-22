/*!
 * React Native Globalize
 *
 * Copyright 2015-2020 Josh Swan
 * Released under the MIT license
 * https://github.com/joshswan/react-native-globalize/blob/master/LICENSE
 */

import MockDate from 'mockdate';
import React from 'react';
import { createWithGlobalize } from '../../../test/createWithGlobalize';
import { FormattedRelativeTime } from '..';

describe('<FormattedRelativeTime />', () => {
  const date1 = new Date('2017-01-01T00:00:00Z');
  const date2 = new Date('2019-01-01T00:00:00Z');

  beforeEach(() => {
    MockDate.set('2020-01-01');
  });

  afterEach(() => {
    MockDate.reset();
  });

  test('renders correctly', () => {
    const tree = createWithGlobalize(<FormattedRelativeTime value={5} unit="minute" />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  describe('unit', () => {
    test('supports auto unit option', () => {
      const tree = createWithGlobalize(
        <FormattedRelativeTime value={date1} unit="auto" />,
      ).toJSON();

      expect(tree).toMatchSnapshot();
    });

    test('renders when auto unit selected and non-date value used', () => {
      const tree = createWithGlobalize(<FormattedRelativeTime value={10} unit="auto" />).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });

  describe('value', () => {
    test('supports date instances for value', () => {
      const tree = createWithGlobalize(<FormattedRelativeTime value={date2} unit="day" />).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});
