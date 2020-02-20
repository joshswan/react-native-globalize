# `FormattedMessage`

Formats a message based on the locale, variables and options.

Messages must be loaded before they can be used by `FormattedMessage`. This is done using the [`loadMessages`](utilities.md#loadmessages) utility available as an import from React Native Globalize or from the object returned by `useGlobalize`.

Messages are formatted using the ICU message format pattern and support powerful logic, such as pluralization and gender inflections. Check out the [advanced examples](#advancedexamples) at the bottom of this page, and if you want more information, take a look at the [ICU message format spec](http://userguide.icu-project.org/formatparse/messages).

## Usage

```js
import { loadMessages, FormattedMessage } from 'react-native-globalize';

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
})

const ExampleComponent = () => (
  <FormattedMessage
    id="welcome"
    values={{
      date: <FormattedDate value={new Date(2020, 0, 1)} date="long" />,
      // Variable value can also be a string
      date: 'awesome',
    }}
  />
);
// Hello, today is January 1, 2020
// Hello, today is awesome
```

## Props

- [accessible](https://facebook.github.io/react-native/docs/text#accessible)
- [accessibilityLabel](https://facebook.github.io/react-native/docs/text#accessibilitylabel)
- [adjustsFontSizeToFit](https://facebook.github.io/react-native/docs/text#adjustsfontsizetofit)
- [allowFontScaling](https://facebook.github.io/react-native/docs/text#allowfontscaling)
- [defaultMessage](#defaultMessage)
- [id](#id)
- [style](https://facebook.github.io/react-native/docs/text#style)
- [values](#values)

**Note**: All other props are treated as variables and are merged into `values`. However, using `values` is recommended in case props change in the future. For now, `<FormattedMessage id="welcome" date="awesome" />` is equivalent to `<FormattedMessage id="welcome" values={{ date: 'awesome' }} />`.

### defaultMessage

|  Type  | Required | Default | Description |
| :----: | :------: | :-----: | :---------: |
| string |    No    |   none  | A default string used if a message with the specified `id` has not been loaded (useful when dynamically loading messages). |

```js
<FormattedMessage
  id="unknown/key"
  defaultMessage="Oops"
/>
// Oops
```

**Note:** By default, a error is emitted and logged to the console in development mode, so you may still see a React Native error/red screen when developing. However, if you dismiss the error screen, you'll see the `defaultMessage` value used as expected. You can override the default error logging behavior with the `onError` prop on [`GlobalizeProvider`](../components/GlobalizeProvider.md#onerror).

### id

|  Type  | Required | Default | Description |
| :----: | :------: | :-----: | :---------: |
| string |   Yes    |   none  | Message identifier. |

### values

|  Type  | Required | Default | Description |
| :----: | :------: | :-----: | :---------: |
| object |    No    |   `{}`  | Variables for replacement in message. |

```js
<FormattedMessage
  id="welcome"
  values={{ date: 'awesome' }}
/>
// Hello, today is awesome
```

## Advanced Examples

See more advanced message examples with gender and plural inflections in the [`formatMessage`](../api/formatMessage.md#advancedexamples) docs.
