/*!
 * React Native Globalize
 *
 * Copyright 2015-2020 Josh Swan
 * Released under the MIT license
 * https://github.com/joshswan/react-native-globalize/blob/master/LICENSE
 */

import { createContext } from 'react';
import { Globalize } from './globalize';

export const GlobalizeContext = createContext<Globalize>(null!);
