# Getting Started

The goal of React Native Globalize is to provide an out-of-the-box solution for internationalization (i18n) / localization (l10n) in React Native apps. The data for over 350 locales and 150 currencies is bundled with the package so there's no need for polyfills or complicated configurations. React Native Globalize removes the hassle from internationalizing your apps and lets you start formatting currencies, dates, messages, numbers, relative times, and units right away.

## Installation

React Native Globalize requires **React 16.8.0 or later** and **React Native 0.59.0 or later**

```
yarn add react-native-globalize

# Or using npm
npm i react-native-globalize --save
```

## Locale Data

React Native Globalize bundles the locale data for 350 locales, but none of them are loaded by default. This enables you to fully customize React Native Globalize to your usage needs and avoid wasting time loading anything you don't need.

In order to support the formatting functions for a given locale, simply load the data using the `loadCldr` utility at the root of your app.

```js
import { loadCldr } from 'react-native-globalize';

// Example: loading German, English, and Spanish
loadCldr(
  require('react-native-globalize/locale-data/de'),
  require('react-native-globalize/locale-data/en'),
  require('react-native-globalize/locale-data/es'),
);
```

## `GlobalizeProvider`

React Native Globalize provides the `GlobalizeProvider` component, which makes the formatting functionality available throughout your app.

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

Updating the locale or currency props on `GlobalizeProvider` will propagate those changes throughout your app. Read more in the [`GlobalizeProvider` docs](components/GlobalizeProvider.md).

## Usage

Now that you've got React Native Globalize configured, you're ready to use the various formatting functions throughout your app. Below are a couple of examples using both the `useGlobalize` hook and the `Formatted` components. However, there's much more power at your disposal so please take some time and explore the various functions and components included in React Native Globalize.

### `useGlobalize` Hook

The `useGlobalize` hook injects the Globalize object propagated from the `GlobalizeProvider` into your component. Since it's just an object with functions, you can simply destructure the formatters you need in that particular component.

```js
import React from 'react';
import { Text, View } from 'react-native';
import { loadMessages, useGlobalize } from 'react-native-globalize';

// You can load messages in your components or load
// them all at once at the root of your app
loadMessages({
  de: {
    welcome: 'Hallo, heute ist der {date}',
  },
  en: {
    welcome: 'Hello, today is {date}',
  },
  es: {
    welcome: 'Hola, hoy es {date}',
  },
});

const ExampleComponent = () => {
  const { formatDate, formatMessage } = useGlobalize();

  return (
    <View>
      <Text>
        {formatMessage('welcome', {
          date: formatDate(new Date(), { date: 'long' }),
        })}
      </Text>
    </View>
  );
};
```

**Note:** For more information about messages, see [`formatMessage`](api/formatMessage.md) and [`loadMessages`](api/utilities.md#loadmessages).

### `Formatted` Components

To make React Native Globalize as flexible as possible, `Formatted` components are also available for all the different formatters. These work the same way as the formatting functions and accept the same options as props. In fact, they use the `useGlobalize` hook and formatting functions internally. No matter what you use, you'll get the same results.

```js
import React from 'react';
import { Text, View } from 'react-native';
import { loadMessages, FormattedDate, FormattedMessage } from 'react-native-globalize';

// You can load messages in your components or load
// them all at once at the root of your app
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

const ExampleComponent = () => {
  return (
    <View>
      <FormattedMessage
        id="welcome"
        values={{
          date: (
            <FormattedDate
              value={new Date()}
              date="long"
            />
          )
        }}
      />
    </View>
  );
};
```

Now you know the basics for using React Native Globalize. Check out the rest of docs for details on each function and component. If you want to keep reading, the next topic is [performance](performance.md).
