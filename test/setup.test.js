/*!
 * React Native Globalize
 *
 * Copyright 2015-2020 Josh Swan
 * Released under the MIT license
 * https://github.com/joshswan/react-native-globalize/blob/master/LICENSE
 */

import { loadCldr } from '../src';

beforeAll(() => {
  loadCldr(
    require('../src/cldr.json'),
  );
});
