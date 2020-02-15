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

interface Props {
  children: React.ReactNode;
  currency?: string;
  locale?: string;
  localeFallback?: boolean;
}

export const FormattedProvider: React.FC<Props> = ({
  children,
  currency: currencyCode = 'USD',
  locale = 'en',
  localeFallback: fallback = false,
}) => {
  const [globalize, setGlobalize] = useState(() => createGlobalize({
    locale,
    currencyCode,
    fallback,
  }));

  useEffect(() => {
    setGlobalize(createGlobalize({ locale, currencyCode, fallback }));
  }, [currencyCode, locale, fallback]);

  return (
    <GlobalizeContext.Provider value={globalize}>
      {children}
    </GlobalizeContext.Provider>
  );
};
