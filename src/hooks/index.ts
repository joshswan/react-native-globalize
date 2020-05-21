/*!
 * React Native Globalize
 *
 * Copyright 2015-2020 Josh Swan
 * Released under the MIT license
 * https://github.com/joshswan/react-native-globalize/blob/master/LICENSE
 */

import { useContext } from 'react';
import { GlobalizeContext } from '../context';

export const useGlobalize = () => useContext(GlobalizeContext);
