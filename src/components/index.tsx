/*!
 * React Native Globalize
 *
 * Copyright 2015-2020 Josh Swan
 * Released under the MIT license
 * https://github.com/joshswan/react-native-globalize/blob/master/LICENSE
 */

import { createFormattedComponent } from './utils';
import { GlobalizeProvider } from './GlobalizeProvider';

export const FormattedCurrency = createFormattedComponent('formatCurrency');
export const FormattedDate = createFormattedComponent('formatDate');
export const FormattedMessage = createFormattedComponent('formatMessage');
export const FormattedNumber = createFormattedComponent('formatNumber');
export const FormattedRelativeTime = createFormattedComponent('formatRelativeTime');
export const FormattedUnit = createFormattedComponent('formatUnit');
export const FormattedTime = FormattedDate;

export * from './FormattedPlural';
export { GlobalizeProvider, GlobalizeProvider as FormattedProvider };
export * from './withGlobalize';
export { TextProps } from './utils';