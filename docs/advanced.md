# Advanced

Assuming you're aware of the potential pitfalls covered by the [Performance](performance.md) guide, it's unlikely you'll need to actually use any of the recipes included in this section. Nonetheless, some users will find themselves needing to optimize their React Native Globalize usage in order to keep apps buttery smooth.

## On-Demand Loading of Locales

As mentioned previously, only the locales that are actually going to be used should be loaded in order to avoid wasted costs. However, some apps require supporting many more locales than others. However, it's unlikely that one user of the app is actually going to use more than a couple of locales. Therefore, loading all the necessary locales on startup would just slow down the app boot and load up the device memory with data that won't be needed.

A better strategy would be to only load the locale data once it's needed (i.e. when a user switches locales or once you detect the device locale). There's one caveat, however. The React Native bundler will only include files that are directly referenced in a `require` call. So we can't just fire off `loadCldr` with a template string and be done unfortunately.

Below is an example that loads locale data on-demand and is meant to inspire your own solution:

```js
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { loadCldr } from 'react-native-globalize';

const localeLoaders = {
  de: () => loadCldr(require('react-native-globalize/locale-data/de')),
  en: () => loadCldr(require('react-native-globalize/locale-data/de')),
  ds: () => loadCldr(require('react-native-globalize/locale-data/de')),
};

const LocaleSwitcher = () => (
  <View>
    {['de', 'en', 'es'].map((locale) => (
      <TouchableOpacity
        key={locale}
        onPress={() => {
          // Load locale data
          localeLoaders[locale]();

          // Update locale on <GlobalizeProvider> using
          // state, redux action, etc.
          switchLocale(locale);
        }}
      >
        <View>
          <Text>Switch to {locale}</Text>
        </View>
      </TouchableOpacity>
    ))}
  </View>
);
```

## Formatting Function Creators

As described in the previous guide, React Native Globalize memoizes the formatting function creators, eliminating the cost of building the same formatting function repeatedly. However, there is still a slight cost associated with serializing the formatting options and retrieving the formatter from the cache. This should basically never be an issue unless you're doing some high-performance rendering or otherwise calling the formatter repeatedly in rapid succession.

For situations such as these, you can take advantage of the `getFormatter` functions on the Globalize object. The main functions, such as `formatDate`, use these `getFormatter` functions internally in order to build or retrieve their formatting functions. But to avoid repeatedly going to the cache, you can simply call them directly yourself and hold the reference to the function within your component.

```js
import React from 'react';
import { Text, View } from 'react-native';
import { useGlobalize } from 'react-native-globalize';

const ExpensiveComponent = ({ list }) => {
  // `getDateFormatter` returns a direct reference to a date formatter
  // function and does not require retrieval from the memoization cache
  // even if called repeatedly
  const { getDateFormatter } = useGlobalize();
  const format = getDateFormatter({ skeleton: 'yMd' });

  return (
    <View>
      {list.map((item) => (
        <Text>
          {myDateFormatter(item.date)}
        </Text>
      ))}
    </View>
  )
};
```
