/*!
 * React Native Globalize
 *
 * Copyright 2015-2020 Josh Swan
 * Released under the MIT license
 * https://github.com/joshswan/react-native-globalize/blob/master/LICENSE
 */

import React, { useEffect, useState } from 'react';
import { createGlobalize } from '../globalize';
import { GlobalizeContext } from '../context';

export interface Props {
  children: React.ReactNode;
  currency?: string;
  locale?: string;
  localeFallback?: boolean;
  onError?(message: string, exception?: Error): void;
}

export const GlobalizeProvider: React.FC<Props> = ({
  children,
  currency: currencyCode = 'USD',
  locale = 'en',
  localeFallback: fallback = false,
  ...options
}) => {
  const [globalize, setGlobalize] = useState(() => createGlobalize({
    ...options,
    locale,
    currencyCode,
    fallback,
  }));

  useEffect(() => {
    setGlobalize(createGlobalize({
      ...options,
      locale,
      currencyCode,
      fallback,
    }));
  }, [currencyCode, locale, fallback]);

  return (
    <GlobalizeContext.Provider value={globalize}>
      {children}
    </GlobalizeContext.Provider>
  );
};
