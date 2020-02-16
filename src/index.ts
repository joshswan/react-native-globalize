/*!
 * React Native Globalize
 *
 * Copyright 2015-2020 Josh Swan
 * Released under the MIT license
 * https://github.com/joshswan/react-native-globalize/blob/master/LICENSE
 */

import { loadCldr } from './globalize';

// Load CLDR core data
// eslint-disable-next-line @typescript-eslint/no-var-requires
loadCldr(require('../locale-data/core'));


export * from './components';
export * from './context';
export * from './globalize';
export * from './hooks';
