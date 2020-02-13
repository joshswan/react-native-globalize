/*!
 * React Native Globalize
 *
 * Copyright 2015-2020 Josh Swan
 * Released under the MIT license
 * https://github.com/joshswan/react-native-globalize/blob/master/LICENSE
 */

import React from 'react';
import renderer from 'react-test-renderer';
import { FormattedProvider, FormattedProviderProps } from '../src/components/FormattedProvider';

export default function createComponentWithGlobalize(
  children: React.ReactNode,
  props: Omit<FormattedProviderProps, 'children'> = { currency: 'USD', locale: 'en' },
) {
  return renderer.create((
    // eslint-disable-next-line react/jsx-props-no-spreading
    <FormattedProvider {...props}>
      {children}
    </FormattedProvider>
  ));
}
