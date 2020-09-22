/*!
 * React Native Globalize
 *
 * Copyright 2015-2020 Josh Swan
 * Released under the MIT license
 * https://github.com/joshswan/react-native-globalize/blob/master/LICENSE
 */

import React from 'react';
import { Text } from 'react-native';
import { Globalize, PluralGeneratorOptions } from '../globalize';
import { useGlobalize } from '../hooks';
import { createPropFilter, TextProps } from './utils';

type Props = PluralGeneratorOptions &
  TextProps & {
    value: Parameters<Globalize['formatPlural']>[0];
    other: React.ReactNode;
    zero?: React.ReactNode;
    one?: React.ReactNode;
    two?: React.ReactNode;
    few?: React.ReactNode;
    many?: React.ReactNode;
  };

const filterProps = createPropFilter<Props, Parameters<Globalize['formatPlural']>>(
  ({ type, value }) => [value, { type }],
);

export const FormattedPlural: React.FC<Props> = ({ children, ...props }) => {
  const { formatPlural } = useGlobalize();
  const [args, textProps] = filterProps(props);
  const plural = formatPlural(...args);
  const { [plural]: formatted, other } = props;

  return (
    <Text {...textProps}>
      {formatted || other}
      {children}
    </Text>
  );
};
