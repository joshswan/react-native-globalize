/*!
 * React Native Globalize
 *
 * Copyright 2015-2020 Josh Swan
 * Released under the MIT license
 * https://github.com/joshswan/react-native-globalize/blob/master/LICENSE
 */

import { useContext } from 'react';
import { Globalize } from '../globalize';
import { GlobalizeContext } from '../context';

export const useGlobalize = <M extends string>(): Globalize<M> => useContext(GlobalizeContext);
