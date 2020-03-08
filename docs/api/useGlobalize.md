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

- [`formatCurrency`](formatCurrency.md)
- [`formatDate`](formatDate.md)
- [`formatMessage`](formatMessage.md)
- [`formatNumber`](formatNumber.md)
- [`formatPlural`](formatPlural.md)
- [`formatRelativeTime`](formatRelativeTime.md)
- [`formatUnit`](formatUnit.md)
- [`parseDate`](parseDate.md)
- [`parseNumber`](parseNumber.md)
- [Utilities](utilities.md)
  - [`getAvailableLocales`](utilities.md#getavailablelocales)
  - [`getCurrencySymbol`](utilities.md#getcurrencysymbol)
  - [`loadCldr`](utilities.md#loadcldr)
  - [`loadMessages`](utilities.md#loadmessages)
  - [`localeIsLoaded`](utilities.md#localeisloaded)
