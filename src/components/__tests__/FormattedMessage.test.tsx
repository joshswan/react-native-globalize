/*!
 * React Native Globalize
 *
 * Copyright 2015-2020 Josh Swan
 * Released under the MIT license
 * https://github.com/joshswan/react-native-globalize/blob/master/LICENSE
 */

import React from 'react';
import { Text } from 'react-native';
import { loadMessages } from '../../globalize';
import { createWithGlobalize } from '../../../test/createWithGlobalize';
import { FormattedMessage } from '..';

const messages = {
  en: {
    date: 'Todays date is {date}',
    hello: 'Hey {name}!',
    test: 'Test',
  },
};

describe('<FormattedMessage />', () => {
  beforeAll(() => loadMessages(messages));

  test('renders correctly', () => {
    const tree = createWithGlobalize(<FormattedMessage message="test" />, { currency: 'USD', locale: 'en' }).toJSON();

    expect(tree).toMatchSnapshot();
  });

  describe('values', () => {
    test('replaces variables using values prop', () => {
      const tree = createWithGlobalize(<FormattedMessage message="hello" values={{ name: 'Josh' }} />, { currency: 'USD', locale: 'en' }).toJSON();

      expect(tree).toMatchSnapshot();
    });

    test('uses props passed directly to component', () => {
      const tree = createWithGlobalize(<FormattedMessage message="hello" name="Josh" />, { currency: 'USD', locale: 'en' }).toJSON();

      expect(tree).toMatchSnapshot();
    });

    test('renders component values', () => {
      const tree = createWithGlobalize(<FormattedMessage message="date" date={<Text>1/1/2019</Text>} />, { currency: 'USD', locale: 'en' }).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});
