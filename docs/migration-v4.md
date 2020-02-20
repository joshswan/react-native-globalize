# Migration Guide (v4)

React Native Globalize v4 has been in the making for a while, and now that it's out, here are just a few things you need to do in order to upgrade your existing React Native Globalize installation. Thanks in advance for your patience in dealing with the handful of breaking changes!

## Intro

Before diving into the changes for apps using v3, let's quickly discuss the improvements that v4 brings:

- **Hooks support**: The new `useGlobalize` hook provides easy access to all the formatting functions within any component - and all the `Formatted` components have been rewritten to use the new hook
- **Typescript types**: React Native Globalize has been rewritten in TypeScript, which provides a better development experience and generates perfect up-to-date types that are bundled with the package
- **Locale data**: CLDR data for over 350 locales and over 150 currencies is now bundled with the package, allowing app developers to load the locales they need, and only the locales they need
- **Simplified API**: In conjunction with the new `useGlobalize` hook, new simpler formatting functions (e.g. `formatDate`) are included on the Globalize object to let you jump right into formatting without needing to create formatters with the `getFormatter` functions (which are still included of course)

## Requirements

Since v4 is built around hooks, **React 16.8.0** and **React Native 0.59.0** are now the minimum supported versions!

## Breaking Changes

### Locale Data

The `cldr.json` file that contained 54 locales and a few currencies has been removed entirely so **no locale data is loaded by default**. Instead, you'll need to load the locales you need from the `locale-data` folder. These files also contain over 150 currencies, so you should be covered. Thankfully, there should no longer be a need to fork and generate CLDR files in order to customize anymore!

To migrate, call `loadCldr` at the root of your app with the relevent locales. For example:

```js
import { loadCldr, loadMessages, GlobalizeProvider } from 'react-native-globalize';
import App from './App';
import messages from './messages';

loadCldr(
  // Load the locales you actually need
  require('react-native-globalize/locale-data/de'),
  require('react-native-globalize/locale-data/en'),
  require('react-native-globalize/locale-data/es'),
);

loadMessages(messages);

const Root = () => (
  <GlobalizeProvider locale="en" currency="USD">
    <App />
  </GlobalizeProvider>
);
```

### `FormattedProvider`

The `FormattedProvider` component has been renamed `GlobalizeProvider`, but it's still exported under the old name as well so you don't need to change. However, the component no longer accepts the `cldr` and `messages` props as they were unreliable with regards to updates of their values. You should use the `loadCldr` and `loadMessages` functions directly if you were using either of these props (see the previous example).

### `Globalize`

To enable the new simpler API, Globalize is no longer a class. It is instead an object with all the formatting functions, loaders, etc. still included. This shouldn't cause issues for most apps unless you were doing something more advanced with the Globalize class itself. Creating an instance of Globalize is now done using the `createGlobalize(options)` function.

For an example that shows why this change was made, check out how simple formatting a date is now using the `useGlobalize` hook:

```js
import React from 'react';
import { useGlobalize } from 'react-native-globalize';

const ExampleComponent = () => {
  const { formatDate } = useGlobalize();

  return (
    <Text>
      {formatDate(new Date())}
    </Text>
  );
};
```
