/*!
 * React Native Globalize
 *
 * Copyright 2015-2020 Josh Swan
 * Released under the MIT license
 * https://github.com/joshswan/react-native-globalize/blob/master/LICENSE
 */

import React from 'react';
import createWithGlobalize from '../../../test/createWithGlobalize';
import { FormattedRelativeTime } from '../FormattedRelativeTime';

describe('<FormattedRelativeTime />', () => {
  const dateNow = Date.now;

  beforeEach(() => {
    global.Date.now = () => 1514764800000;
  });

  afterEach(() => {
    global.Date.now = dateNow;
  });

  test('renders correctly', () => {
    const tree = createWithGlobalize(<FormattedRelativeTime value={5} unit="minute" />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  describe('unit', () => {
    test('supports best unit option', () => {
      const tree = createWithGlobalize(<FormattedRelativeTime value={new Date('2015-01-01T00:00:00Z')} unit="best" />).toJSON();

      expect(tree).toMatchSnapshot();
    });

    test('renders when best unit selected and non-date value used', () => {
      const tree = createWithGlobalize(<FormattedRelativeTime value={10} unit="best" />).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });

  describe('value', () => {
    test('supports date instances for value', () => {
      const tree = createWithGlobalize(<FormattedRelativeTime value={new Date('2017-01-01T00:00:00Z')} unit="day" />).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});
