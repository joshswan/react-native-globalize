# `GlobalizeProvider`

Propagates the Globalize object and formatting functionality throughout the app using React Context.

The `GlobalizeProvider` component makes it simple to enable formatting in all your other components and to change the locale or default currency on demand. Simply set the `locale` and `currency` props appropriately (ensuring that any required locale and message data is loaded using [`loadCldr`](../api/utilities.md#loadcldr) and [`loadMessages`](../api/utilities.md#loadmessages)) to get started. Then update the props to propagate those changes throughout your app.

One recommended recipe is to keep `locale` and `currency` in your application's global state (e.g. Redux). Configured correctly, you can then fire an action in response to a user's selection and update the locale used throughout the app.

To determine the default locale of a user's device, [react-native-localize](https://github.com/react-native-community/react-native-localize) is recommended.

## Usage

```js
import React from 'react';
import { GlobalizeProvider } from 'react-native-globalize';
import App from './App';

const Root = () => (
  <GlobalizeProvider locale="en" currency="USD">
    <App />
  </GlobalizeProvider>
);

export default Root;
```

## Props

- [`currency`](#currency)
- [`locale`](#locale)
- [`localeFallback`](#localeFallback)
- [`onError`](#onerror)

### `currency`

|  Type  | Required | Default | Description |
| :----: | :------: | :-----: | :---------: |
| string |    No    |  `USD`  | Default currency to use when formatting. |

### `locale`

|  Type  | Required | Default | Description |
| :----: | :------: | :-----: | :---------: |
| string |    No    |  `en`   | Locale to use for formatting. |

### `localeFallback`

|  Type   | Required |  Default   | Description |
| :-----: | :------: | :--------: | :---------: |
| boolean |    No    |  `false`   | Whether to fall back to a similar locale if specified locale is not loaded (e.g. `en-GB` -> `en`) |

### `onError`

|   Type   | Required | Default         | Description |
| :------: | :------: | :-------------: | :---------: |
| function |    No    | `console.error` | Error logging/handling function. Function signature is `onError(message: string, exception?: Error)`. The default handler logs messages to `console.error` in development mode only. |
