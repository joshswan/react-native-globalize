# `useGlobalize`

`useGlobalize` is a hook which gives access to the Globalize object. You can then destructure any formatters you need within the component.

## Example

```js
import { useGlobalize } from 'react-native-globalize';

const ExampleComponent = () => {
  const { formatDate, formatMessage } = useGlobalize();

  return (
    <Text>
      {formatMessage('welcome', {
        date: formatDate(new Date(), { date: 'long' }),
      })}
    </Text>
  )
};
```

## Reference

The following functions and utilities are available on the Globalize object returned by `useGlobalize`:

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
