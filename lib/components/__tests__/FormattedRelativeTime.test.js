/*!
 * React Native Globalize
 *
 * Copyright 2015-2018 Josh Swan
 * Released under the MIT license
 * https://github.com/joshswan/react-native-globalize/blob/master/LICENSE
 */

import React from 'react';
import createComponentWithGlobalize from '../../../utils/createComponentWithGlobalize';
import FormattedRelativeTime from '../FormattedRelativeTime';

describe('<FormattedRelativeTime />', () => {
  const dateNow = Date.now;

  beforeEach(() => {
    global.Date.now = () => 1514764800000;
  });

  afterEach(() => {
    global.Date.now = dateNow;
  });

  test('renders correctly', () => {
    const tree = createComponentWithGlobalize(<FormattedRelativeTime value={5} unit="minute" />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  describe('unit', () => {
    test('supports best unit option', () => {
      const tree = createComponentWithGlobalize(<FormattedRelativeTime value={new Date('2015-01-01T00:00:00Z')} unit="best" />).toJSON();

      expect(tree).toMatchSnapshot();
    });

    test('renders when best unit selected and non-date value used', () => {
      const tree = createComponentWithGlobalize(<FormattedRelativeTime value={10} unit="best" />).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });

  describe('value', () => {
    test('supports date instances for value', () => {
      const tree = createComponentWithGlobalize(<FormattedRelativeTime value={new Date('2017-01-01T00:00:00Z')} unit="day" />).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});
