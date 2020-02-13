/*!
 * React Native Globalize
 *
 * Copyright 2015-2020 Josh Swan
 * Released under the MIT license
 * https://github.com/joshswan/react-native-globalize/blob/master/LICENSE
 */

import React, { useEffect, useState } from 'react';
import { Globalize } from '../globalize';
import { GlobalizeContext } from '../context';

export interface FormattedProviderProps {
  cldr?: Object[];
  children: React.ReactNode;
  currency?: string;
  locale?: string;
  localeFallback?: boolean;
  messages?: Object;
  warnOnMissingMessage?: boolean;
}

export const FormattedProvider: React.FC<FormattedProviderProps> = ({
  cldr,
  children,
  currency = 'USD',
  locale = 'en',
  localeFallback: fallback = false,
  messages,
  warnOnMissingMessage = true,
}) => {
  const [globalize, setGlobalize] = useState(() => {
    if (cldr) Globalize.load(cldr);
    if (messages) Globalize.loadMessages(messages);

    return new Globalize(locale, currency, {
      fallback,
      warnOnMissingMessage,
    });
  });

  useEffect(() => {
    setGlobalize(new Globalize(locale, currency, { fallback, warnOnMissingMessage }));
  }, [currency, locale, fallback, warnOnMissingMessage]);

  return (
    <GlobalizeContext.Provider value={globalize}>
      {children}
    </GlobalizeContext.Provider>
  );
};
