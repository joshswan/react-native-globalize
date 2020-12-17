/*!
 * React Native Globalize
 *
 * Copyright 2015-2020 Josh Swan
 * Released under the MIT license
 * https://github.com/joshswan/react-native-globalize/blob/master/LICENSE
 */

import React from 'react';
import renderer from 'react-test-renderer';
import type { Globalize } from '../../globalize';
import { FormattedCurrency, GlobalizeProvider, FormattedUnit } from '..';

describe('<GlobalizeProvider />', () => {
  jest.useFakeTimers();

  test('renders correctly', () => {
    const tree = renderer
      .create(
        <GlobalizeProvider locale="en">
          <FormattedUnit unit="mile-per-hour" value={75} />
        </GlobalizeProvider>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('updates globalize when props change', () => {
    let root;

    renderer.act(() => {
      root = renderer.create(
        <GlobalizeProvider locale="en" currency="USD">
          <FormattedCurrency value={10} />
          <FormattedUnit unit="mile-per-hour" value={75} />
        </GlobalizeProvider>,
      );
    });

    expect(root.toJSON()).toMatchSnapshot();

    renderer.act(() => {
      root = renderer.create(
        <GlobalizeProvider locale="es" currency="USD">
          <FormattedCurrency value={10} />
          <FormattedUnit unit="mile-per-hour" value={75} />
        </GlobalizeProvider>,
      );
    });

    expect(root.toJSON()).toMatchSnapshot();

    renderer.act(() => {
      root = renderer.create(
        <GlobalizeProvider locale="es" currency="EUR">
          <FormattedCurrency value={10} />
          <FormattedUnit unit="mile-per-hour" value={75} />
        </GlobalizeProvider>,
      );
    });

    expect(root.toJSON()).toMatchSnapshot();
  });

  test('exposes Globalize instance via ref', () => {
    const ref = React.createRef<Globalize>();

    renderer.create(
      <GlobalizeProvider ref={ref} locale="en">
        <FormattedUnit unit="mile-per-hour" value={75} />
      </GlobalizeProvider>,
    );

    expect(ref.current).toHaveProperty('locale', 'en');
    expect(ref.current?.formatUnit(75, 'mile-per-hour')).toBe('75 miles per hour');
  });
});
