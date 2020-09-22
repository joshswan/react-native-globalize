/*!
 * React Native Globalize
 *
 * Copyright 2015-2020 Josh Swan
 * Released under the MIT license
 * https://github.com/joshswan/react-native-globalize/blob/master/LICENSE
 */

import React from 'react';
import { render } from '@testing-library/react-native';
import {
  GlobalizeProvider,
  Props as GlobalizeProviderProps,
} from '../src/components/GlobalizeProvider';

export function createWithGlobalize(
  children: React.ReactNode,
  props: Omit<GlobalizeProviderProps, 'children'> = { currency: 'USD', locale: 'en' },
) {
  return render(<GlobalizeProvider {...props}>{children}</GlobalizeProvider>);
}
