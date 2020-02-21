# `formatMessage`

Formats a message based on the locale, variables and options.

`formatMessage(id, values?, options?)`

Messages must be loaded before they can be used by `formatMessage`. This is done using the [`loadMessages`](utilities.md#loadmessages) utility available as an import from React Native Globalize or from the object returned by `useGlobalize`.

Messages are formatted using the ICU message format pattern and support powerful logic, such as pluralization and gender inflections. Check out the [advanced examples](#advancedexamples) at the bottom of this page, and if you want more information, take a look at the [ICU message format spec](http://userguide.icu-project.org/formatparse/messages).

## Arguments

- `id` - *string* or *string[]* - Message identifier
- `values` - *object* - Variables for replacement in message
- [`options?`](#options) - *object* - Formatting options

## Example

```js
import { loadMessages, useGlobalize } from 'react-native-globalize';

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

const ExampleComponent = () => {
  const { formatDate, formatMessage } = useGlobalize();

  formatMessage('welcome', {
    date: formatDate(new Date(2020, 0, 1), { date: 'long' }),
    // Variable value can also be a string
    date: 'awesome',
    // Or a React component
    date: <Text>cool</Text>,
  });
  // Hello, today is January 1, 2020
  // Hello, today is awesome
  // Hello, today is cool
};
```

## Options

- [`defaultMessage`](#defaultMessage)

### `defaultMessage`

|  Type  | Required | Default | Description |
| :----: | :------: | :-----: | :---------: |
| string |    No    |   none  | A default string used if a message with the specified `id` has not been loaded (useful when dynamically loading messages). |

```js
formatMessage('unknown/key', {}, { defaultMessage: 'Oops' });
// Oops
```

**Note:** By default, a error is emitted and logged to the console in development mode, so you may still see a React Native error/red screen when developing. However, if you dismiss the error screen, you'll see the `defaultMessage` value used as expected. You can override the default error logging behavior with the `onError` prop on [`GlobalizeProvider`](../components/GlobalizeProvider.md#onerror).

## Advanced Examples

**Gender Inflections**: Use `select` to format message variations similar to a `switch` statement:

```js
import { loadMessages, useGlobalize } from 'react-native-globalize';

loadMessages({
  // Advanced examples only in english for brevity
  en: {
    party: {
      invite: `
        {gender, select,
          female {{host} invites {guest} to her party}
            male {{host} invites {guest} to his party}
           other {{host} invites {guest} to their party}
        }
      `,
    }
  },
})

const ExampleComponent = () => {
  const { formatMessage } = useGlobalize();

  formatMessage('party/invite', { gender: 'male', host: 'Morpheus', guest: 'Neo' });
  // Morpheus invites Neo to his party
  formatMessage('party/invite', { gender: 'female', host: 'Trinity', guest: 'Neo' });
  // Trinity invites Neo to her party
  formatMessage('party/invite', { gender: '', host: 'Someone', guest: 'Neo' });
  // Someone invites Neo to their party
};
```

**Plural Inflections**: Use `plural` to format messages based on plural groups: `zero`, `one`, `two`, `few`, `many`, `other` (required). Some languages only use some of these groups (e.g. English uses `one` and `other`). For more information about plural groups, check out [`formatPlural`](formatPlural.md). You can also use literal numberic keys (e.g. `=12` in the example below) to match specific numbers.

```js
import { loadMessages, useGlobalize } from 'react-native-globalize';

loadMessages({
  // Advanced examples only in english for brevity
  en: {
    party: {
      guests: `
        There {count, plural,
            =12 {are a dozen guests}
            one {is one guest}
          other {are {formattedCount} guests}
        } attending the party
      `,
    }
  },
})

const ExampleComponent = () => {
  const { formatMessage, formatNumber } = useGlobalize();

  formatMessage('party/guests', {
    count: 1,
    formattedCount: formatNumber(1),
  });
  // There is one guest attending the party
  formatMessage('party/guests', {
    count: 1000,
    formattedCount: formatNumber(1000),
  });
  // There are 1,000 guests attending the party
  formatMessage('party/guests', {
    count: 12,
    formattedCount: formatNumber(12),
  });
  // There are a dozen guests attending the party
};
```

**Plural offset**: Sometimes it's useful to calculate the plural group with an offset applied. You can even use the calculated number in the message using `#`. *Note*: Literal numeric keys (e.g. `=0` and `=1` in the example below) do NOT take offset into account - they match the number literally.

```js
import { loadMessages, useGlobalize } from 'react-native-globalize';

loadMessages({
  // Advanced examples only in english for brevity
  en: {
    party: {
      register: `
        {count, plural, offset:1
             =0 {Be the first to register}
             =1 {You have registered}
            one {You and someone else have registered}
          other {You and # others have registered}
        } to attend
      `,
    }
  },
})

const ExampleComponent = () => {
  const { formatMessage, formatNumber } = useGlobalize();

  formatMessage('party/register', { count: 0 });
  // Be the first to register to attend
  formatMessage('party/register', { count: 1 });
  // You have registered to attend
  formatMessage('party/register', { count: 2 });
  // You and someone else have registered to attend
  formatMessage('party/register', { count: 3 });
  // You and 2 others have registered to attend
};
```
