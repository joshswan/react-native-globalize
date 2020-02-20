# Utilities

Various utility functions for working with locale data and messages.

- [`getAvailableLocales`](#getavailablelocales)
- [`getCurrencySymbol`](#getcurrencysymbol)
- [`loadCldr`](#loadcldr)
- [`loadMessages`](#loadmessages)
- [`localeIsLoaded`](#localeisloaded)

## `getAvailableLocales`

`getAvailableLocales()`

Returns an array of locales that have been loaded via [`loadCldr`](#loadcldr). Available as an export from React Native Globalize and on the Globalize object returned by `useGlobalize`.

### Example

```js
import { getAvailableLocales } from 'react-native-globalize';

getAvailableLocales();
// ['en']
```

```js
import { useGlobalize } from 'react-native-globalize';

const ExampleComponent = () => {
  const { getAvailableLocales } = useGlobalize();

  getAvailableLocales();
  // ['en']
};
```

## `getCurrencySymbol`

`getCurrencySymbol(currencyCode, altNarrow?)`

Returns just the symbol for a particular currency. This can be useful in situations where you don't need to format a number as a currency, but you want to show localized currency codes.

### Arguments

- `currencyCode` - *string* - Currency code to get symbol for
- `altNarrow?` - *boolean* - Retrieve alternative narrow symbol (e.g. $ instead of CA$)

### Example

```js
import { useGlobalize } from 'react-native-globalize';

const ExampleComponent = () => {
  const { getCurrencySymbol } = useGlobalize();

  getCurrencySymbol('EUR');
  // €
};
```

`getCurrencySymbol` is also available as an export from React Native Globalize. However, it requires an additional `locale` string argument since it has not been bound to a Globalize object with a specific locale set.

```js
import { getCurrencySymbol } from 'react-native-globalize';

getCurrencySymbol('en', 'EUR');
// €
```

## `loadCldr`

`loadCldr(cldrData)`

Loads (CLDR) data for one or more locales into Globalize to prepare for formatting. Most apps should call this utility function with the locales they support at the application root. This ensures that locale data is loaded and available when formatting. However, `loadCldr` can be called anywhere in an app, as long as it's called before formatting is attempted for a particular locale. Check out the [Performance](../performace.md) and [Advanced](../advanced.md) guides for some additional info and a recipe for situations where more than a handful of locales are supported.

### Arguments

- `cldrData` - *object* - An object containing CLDR data for one or more locales (e.g. data from the React Native Globalize `locale-data` folder)

### Example

```js
import { loadCldr } from 'react-native-globalize';

loadCldr(
  require('react-native-globalize/locale-data/de'),
  require('react-native-globalize/locale-data/en'),
  require('react-native-globalize/locale-data/es'),
);
```

## `loadMessages`

`loadMessages(messageData)`

Loads message data for one or more locales into Globalize to prepare for message formatting. The `loadMessages` function can be called once with all messages and all locales, or bit by bit throughout the application.

### Arguments

- `messageData` - *object* - An object containing message data, keyed by locale

### Example

```js
import { loadMessages } from 'react-native-globalize';

loadMessages({
  de: {
    welcome: 'Hallo, heute ist der {date}',
  },
  en: {
    welcome: 'Welcome, today is {date}',
  },
  es: {
    welcome: 'Hola, hoy es {date}',
  },
});
```

## `localeIsLoaded`

`localeIsLoaded(locale)`

Returns a boolean indicating whether a particular locale has been loaded via [`loadCldr`](#loadcldr). Available as an export from React Native Globalize and on the Globalize object returned by `useGlobalize`.

### Arguments

- `locale` - *string* - A locale identifier

### Example

```js
import { localeIsLoaded } from 'react-native-globalize';

localeIsLoaded('en');
// true
```

```js
import { useGlobalize } from 'react-native-globalize';

const ExampleComponent = () => {
  const { localeIsLoaded } = useGlobalize();

  localeIsLoaded('en');
  // true
};
```
