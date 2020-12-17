# React Native Globalize

[![Version][version-image]][package-url] [![Downloads][downloads-image]][package-url] [![Build Status][build-image]][build-url] [![Coverage][coverage-image]][coverage-url] [![License][license-image]][license-url]

React Native Globalize provides an easy-to-use and powerful solution for internationalization (i18n) in React Native apps.

## Example

Using the `useGlobalize()` hook:

```javascript
import { useGlobalize } from 'react-native-globalize';

export const HookExample = () => {
  const { formatCurrency } = useGlobalize();

  return (
    <Text>
      {formatCurrency(1000, 'USD', {
        maximumFractionDigits: 0,
        useGrouping: true,
      })}
    </Text>
  );
};
```

Using a `Formatted` component:

```javascript
import { FormattedCurrency } from 'react-native-globalize';

export const ComponentExample = () => (
  <FormattedCurrency currencyCode="USD" maximumFractionDigits={0} useGrouping value={1000} />
);
```

## Docs

- [Installation](docs/getting-started.md)
- [Upgrading to v4](docs/migration-v4.md)
- [Usage](docs/getting-started.md#usage)
- [Performance](docs/performance.md)
- [Advanced](docs/advanced.md)
- [Usage Outside React](docs/ref-usage.md)
- [Usage on the Web](docs/web-usage.md)
- API
  - [`useGlobalize`](docs/api/useGlobalize.md)
  - [`formatCurrency`](docs/api/formatCurrency.md)
  - [`formatDate`](docs/api/formatDate.md)
  - [`formatMessage`](docs/api/formatMessage.md)
  - [`formatNumber`](docs/api/formatNumber.md)
  - [`formatPlural`](docs/api/formatPlural.md)
  - [`formatRelativeTime`](docs/api/formatRelativeTime.md)
  - [`formatUnit`](docs/api/formatUnit.md)
  - [`parseDate`](docs/api/parseDate.md)
  - [`parseNumber`](docs/api/parseNumber.md)
  - [Utilities](docs/api/utilities.md)
    - [`getAvailableLocales`](docs/api/utilities.md#getavailablelocales)
    - [`getCurrencySymbol`](docs/api/utilities.md#getcurrencysymbol)
    - [`loadCldr`](docs/api/utilities.md#loadcldr)
    - [`loadMessages`](docs/api/utilities.md#loadmessages)
    - [`localeIsLoaded`](docs/api/utilities.md#localeisloaded)
- Components
  - [`GlobalizeProvider`](docs/components/GlobalizeProvider.md)
  - [`FormattedCurrency`](docs/components/FormattedCurrency.md)
  - [`FormattedDate`](docs/components/FormattedDate.md)
  - [`FormattedMessage`](docs/components/FormattedMessage.md)
  - [`FormattedNumber`](docs/components/FormattedNumber.md)
  - [`FormattedPlural`](docs/components/FormattedPlural.md)
  - [`FormattedRelativeTime`](docs/components/FormattedRelativeTime.md)
  - [`FormattedUnit`](docs/components/FormattedUnit.md)
  - [`withGlobalize`](docs/components/withGlobalize.md)

## Supported By

<a href="https://www.disruptivelabs.io">
  <img src="https://www.disruptivelabs.io/images/logo.png" alt="Disruptive Labs" width="150" />
</a>

## License

```text
 Copyright (c) 2015-2020 Josh Swan

 Licensed under the The MIT License (MIT) (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

    https://raw.githubusercontent.com/joshswan/react-native-globalize/master/LICENSE

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.

 See the License for the specific language governing permissions and
 limitations under the License.
```

[build-image]: https://img.shields.io/circleci/build/gh/joshswan/react-native-globalize?style=flat-square
[build-url]: https://circleci.com/gh/joshswan/react-native-globalize
[coverage-image]: https://img.shields.io/coveralls/github/joshswan/react-native-globalize?style=flat-square
[coverage-url]: https://coveralls.io/github/joshswan/react-native-globalize
[downloads-image]: https://img.shields.io/npm/dm/react-native-globalize?style=flat-square
[license-image]: https://img.shields.io/npm/l/react-native-globalize?color=blue&style=flat-square
[license-url]: https://github.com/joshswan/react-native-globalize/blob/master/LICENSE
[package-url]: https://www.npmjs.com/package/react-native-globalize
[version-image]: https://img.shields.io/npm/v/react-native-globalize?style=flat-square
