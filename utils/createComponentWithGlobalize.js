/*!
 * React Native Globalize
 *
 * Copyright 2015-2020 Josh Swan
 * Released under the MIT license
 * https://github.com/joshswan/react-native-globalize/blob/master/LICENSE
 */

import React from 'react';
import renderer from 'react-test-renderer'; // eslint-disable-line import/no-extraneous-dependencies
import FormattedProvider from '../lib/components/FormattedProvider';

export default function createComponentWithGlobalize(children, props = { currency: 'USD', locale: 'en' }) {
  return renderer.create((
    <FormattedProvider {...props}>
      {children}
    </FormattedProvider>
  ));
}
