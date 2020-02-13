/*!
 * React Native Globalize
 *
 * Copyright 2015-2020 Josh Swan
 * Released under the MIT license
 * https://github.com/joshswan/react-native-globalize/blob/master/LICENSE
 */

import React, { useContext } from 'react';
import { Globalize } from '../globalize';
import { GlobalizeContext } from '../context';

/* eslint-disable react/jsx-props-no-spreading */

export interface WithGlobalizeProps {
  globalize: Globalize;
}

export const withGlobalize = <P extends WithGlobalizeProps>(
  Component: React.ComponentType<P>,
): React.FC<Omit<P, keyof WithGlobalizeProps>> => (props) => {
    const globalize = useContext(GlobalizeContext);

    return <Component {...props as P} globalize={globalize} />;
  };
