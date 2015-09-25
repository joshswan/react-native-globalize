/*!
 * React Native Globalize
 *
 * Copyright 2015 Josh Swan
 * Released under the MIT license
 * https://github.com/joshswan/react-native-globalize/blob/master/LICENSE
 */
'use strict';

var loaders = {
  // @@loaders
};

export default function(locale) {
  return (loaders[locale]) ? loaders[locale]() : [];
}
