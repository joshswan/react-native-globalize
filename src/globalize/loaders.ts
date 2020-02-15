/*!
 * React Native Globalize
 *
 * Copyright 2015-2020 Josh Swan
 * Released under the MIT license
 * https://github.com/joshswan/react-native-globalize/blob/master/LICENSE
 */

import GlobalizeCore from 'globalize';
import { Messages } from './types';

export function loadCldr(...cldrData: Record<string, any>[]): void {
  GlobalizeCore.load(cldrData);
}

export function loadMessages(messageData: Record<string, Record<string, string | Messages>>): void {
  GlobalizeCore.loadMessages(messageData);
}

// For backwards-compatibility
export const load = loadCldr;
