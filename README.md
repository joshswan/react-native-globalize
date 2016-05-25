#React Native Globalize
[![NPM Version][npm-image]][npm-url] [![Build Status][build-image]][build-url] [![Dependency Status][depstat-image]][depstat-url] [![Dev Dependency Status][devdepstat-image]][devdepstat-url]

Simple globalization library for React Native. Provides access to all formatting options as well as easy-to-use React Native components.

## How does it work?

Because it's based on the jQuery Globalize project, React Native Globalize can format and parse numbers, format and parse dates, format currency, and format messages (using the ICU message pattern) using the correct plural rules for the language/locale. Take a look at https://github.com/jquery/globalize for more information.

The important thing to note is all this functionality depends entirely on CLDR data. While a huge number of languages and locales are available in this data, only some are loaded by default. This is done for performance reasons as React Native currently bundles everything into one large JS bundle, and with CLDR data being hundreds of megabytes, it causes some issues. The default languages are listed below, but you can always pass additional CLDR data if you need additional language/locale support:

```javascript
var locales = [
  'am',           // Amharic
  'ar',           // Arabic
  'bg',           // Bulgarian
  'bn',           // Bengali
  'ca',           // Catalan
  'cs',           // Czech
  'da',           // Danish
  'de',           // German
  'el',           // Greek
  'en',           // English
  'en-GB',        // English (Great Britain)
  'en-US',        // English (United States)
  'es',           // Spanish
  'es-419',       // Spanish (Latin America & Caribbean)
  'et',           // Estonian
  'fa',           // Persian
  'fi',           // Finnish
  'fil',          // Filipino
  'fr',           // French
  'gu',           // Gujarati
  'he',           // Hebrew
  'hi',           // Hindi
  'hr',           // Croatian
  'hu',           // Hungarian
  'id',           // Indonesian
  'it',           // Italian
  'ja',           // Japanese
  'kn',           // Kannada
  'ko',           // Korean
  'lt',           // Lithuanian
  'lv',           // Latvian
  'ml',           // Malayalam
  'mr',           // Marathi
  'ms',           // Malay
  'nb',           // Norwegian
  'nl',           // Dutch
  'pl',           // Polish
  'pt',           // Portuguese
  'pt-PT',        // Portuguese (Portugal)
  'ro',           // Romanian
  'ru',           // Russian
  'sk',           // Slovak
  'sl',           // Slovenian
  'sr',           // Serbian
  'sv',           // Swedish
  'sw',           // Swahili
  'ta',           // Tamil
  'te',           // Telugu
  'th',           // Thai
  'tr',           // Turkish
  'uk',           // Ukrainian
  'vi',           // Vietnamese
  'zh',           // Chinese
  'zh-Hans',      // Chinese (Simplified)
  'zh-Hant',      // Chinese (Traditional)
];
```

## Usage

Use `FormattedWrapper` at the root of your application to propagate the required context to all components. Alternatively, include `getChildContext()` in your own component (see [FormattedWrapper](https://github.com/joshswan/react-native-globalize/blob/master/src/components/FormattedWrapper.js) for an example). Then use any of the included components or access the formatting functions directly from the React Context (see below) anywhere in your application.

### FormattedWrapper
This component takes care of propagating the required context throughout your application when included at the root. You can also set your language/locale and currency via props on this component, and you can load your messages as well.

```javascript
import { FormattedWrapper } from 'react-native-globalize';

const Messages = {
  en: {
    hello: 'Hello',
  },
  es: {
    hello: 'Hola',
  },
};

class MyApp extends Component {
  render() {
    return (
      <FormattedWrapper locale="en" currency="USD" messages={Messages}>
        <App />
      </FormattedWrapper>
    )
  }
}
```

### FormattedCurrency

#### Props
| Prop | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| `value` | `Number` | | ***Required.*** The number you want to format. |
| `currency` | `String` | | Defaults to currency set on `FormattedWrapper`. |
| `style` | `TextStyle` | | Styles to apply to resulting `Text` node. |
| `minimumFractionDigits` | `Int` | | Non-negative integer indicating the minimum fraction digits to be shown. Numbers will be rounded or padded with trailing zeroes as necessary. *This overrides the default minimum fraction digits derived from CLDR.* |
| `maximumFractionDigits` | `Int` | | Non-negative integer indicating the maximum fraction digits to be shown. Numbers will be rounded or padded with trailing zeroes as necessary. *This overrides the default maximum fraction digits derived from CLDR.* |
| `round` | `String` | `round` | Rounding method: `ceil`, `floor`, `round`, or `truncate`.
| `useGrouping` | `Boolean` | true | Whether a grouping separator should be used. *This overrides the language default derived from CLDR.* |

```javascript
import { FormattedCurrency } from 'react-native-globalize';

class MyComponent extends Component {
  render() {
    return (
      <FormattedCurrency
        value={9.99}
        currency="USD"
        style={{ color: 'red' }} />
    );
  }
}
// $9.99
```

### FormattedDate

#### Props
| Prop | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| `value` | `Date` | | ***Required.*** The date object you want to format. |
| `style` | `TextStyle` | | Styles to apply to resulting `Text` node. |
| `skeleton` | `String` | | Date format skeleton. See the [CLDR documentation](http://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table). *Not all options work* |
| `date` | `String` | | One of: `full`, `long`, `medium`, `short`. Outputs just a date (e.g. `Monday, November 1, 2010`). |
| `time` | `String` | | One of: `full`, `long`, `medium`, `short`. Outputs just a time (e.g. `5:55:00 PM GMT-02:00`). |
| `datetime` | `String` | | One of: `full`, `long`, `medium`, `short`. Outputs a datetime (e.g. `Monday, November 1, 2010 at 5:55:00 PM GMT-02:00`). |

***Only ONE of `skeleton`, `date`, `time`, and `datetime` should be specified.***

```javascript
import { FormattedDate } from 'react-native-globalize';

class MyComponent extends Component {
  render() {
    return (
      <FormattedDate
        value={new Date()}
        style={{ color: 'red' }}
        skeleton="yMd" />
    );
  }
}
// 12/31/2015
```

### FormattedMessage
Format a message based on the ICU message format pattern and variables.

#### Props
| Prop | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| `message` | `Array/String` | | ***Required.*** The key of the message you want to format. Can be passed as a string (e.g. test/hello) or an array (e.g. ['test', 'hello']). |
| `values` | `Object` | `{}` | Variables for replacement/formatting. |
| `style` | `TextStyle` | | Styles to apply to resulting `Text` node. |

* Values/variables can also be passed as props. Any additional props other than the 3 above will be merged with the `values` object (props will overwrite values in the object if both are given and key collide).
* Values ***can also be components***. See the last example below.
* See [ICU message formatting guidelines](http://userguide.icu-project.org/formatparse/messages) for more info.

```javascript
// Messages added via FormattedWrapper
const Messages = {
  en: {
    hello: 'Hey {first} {middle} {last},',
    test: {
      select: '{gender, select, female {{host} invites {guest} to her party} male {{host} invites {guest} to his party} other {{host} invites {guest} to their party}}',
      plural: 'You have {count, plural, one {one task} other {{count} tasks}} remaining',
      component: 'Hey {name}, you asked me to remind you about {item} at {time}!',
    },
  },
};

// Example 1
import { FormattedMessage } from 'react-native-globalize';

class MyComponent extends Component {
  render() {
    return (
      <FormattedMessage
        message="hello"
        first="John"
        middle="William"
        last="Smith"
        style={{ color: 'red' }} />
    );
  }
}
// Hey John William Smith,

// Example 2
import { FormattedMessage } from 'react-native-globalize';

class MyComponent extends Component {
  render() {
    return (
      <FormattedMessage
        message="test/select"
        values={{ gender: 'male', host: 'Josh', guest: 'Andrea' }}
        style={{ color: 'red' }} />
    );
  }
}
// Josh invites Andrea to his party

// Example 3
import { FormattedMessage } from 'react-native-globalize';

class MyComponent extends Component {
  render() {
    return (
      <FormattedMessage
        message={['test', 'select']}
        gender="female"
        host="Jennifer"
        guest="Michael"
        style={{ color: 'red' }} />
    );
  }
}
// Jennifer invites Micael to her party

// Example 4
import { FormattedMessage } from 'react-native-globalize';

class MyComponent extends Component {
  render() {
    return (
      <FormattedMessage
        message="test/plural"
        values={{ count: 4 }}
        style={{ color: 'red' }} />
    );
  }
}
// You have 4 tasks remaining

// Example 5
import { FormattedMessage } from 'react-native-globalize';

class MyComponent extends Component {
  render() {
    return (
      <FormattedMessage
        message="test/component"
        name="Josh"
        item="buying groceries"
        time={<FormattedDate value={new Date()} time="short" />} />
    );
  }
}
// Hey Josh, you asked me to remind you about buying groceries at 4:00 PM
```

### FormattedNumber

#### Props
| Prop | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| `value` | `Number` | | ***Required.*** The number you want to format. |
| `style` | `TextStyle` | | Styles to apply to resulting `Text` node. |
| `minimumFractionDigits` | `Int` | | Non-negative integer indicating the minimum fraction digits to be shown. Numbers will be rounded or padded with trailing zeroes as necessary. *This overrides the default minimum fraction digits derived from CLDR.* |
| `maximumFractionDigits` | `Int` | | Non-negative integer indicating the maximum fraction digits to be shown. Numbers will be rounded or padded with trailing zeroes as necessary. *This overrides the default maximum fraction digits derived from CLDR.* |
| `round` | `String` | `round` | Rounding method: `ceil`, `floor`, `round`, or `truncate`.
| `useGrouping` | `Boolean` | true | Whether a grouping separator should be used. *This overrides the language default derived from CLDR.* |

```javascript
import { FormattedNumber } from 'react-native-globalize';

class MyComponent extends Component {
  render() {
    return (
      <FormattedNumber
        value={1.5}
        minimumFractionDigits={2}
        style={{ color: 'red' }} />
    )
  }
}
// 1.50

// Arabic (ar) selected
import { FormattedNumber } from 'react-native-globalize';

class MyComponent extends Component {
  render() {
    return (
      <FormattedNumber
        value={3.141592}
        style={{ color: 'red' }} />
    )
  }
}
// ٣٫١٤٢
```

### FormattedPlural

#### Props
| Prop | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| `value` | `Number` | | ***Required.*** The value you want to base plural selection on. |
| `style` | `TextStyle` | | Styles to apply to resulting `Text` node. |
| `other` | `Node` | | Node to output when plural type is `other` or when node for type is not specified. |
| `zero` | `Node` | | Node to output when plural type is `zero`. |
| `one` | `Node` | | Node to output when plural type is `one`. |
| `two` | `Node` | | Node to output when plural type is `two`. |
| `few` | `Node` | | Node to output when plural type is `few`. |
| `many` | `Node` | | Node to output when plural type is `many`. |

```javascript
import { FormattedPlural } from 'react-native-globalize';

class MyComponent extends Component {
  render() {
    return (
      <FormattedPlural
        count={0}
        zero={<Text>:(</Text>}
        other={<Text>:)</Text>} />
    );
  }
}
// :(
```

### FormattedRelativeTime

#### Props
| Prop | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| `value` | `Date` | | ***Required.*** The date you want to use to compute the difference from. |
| `unit` | `String` | | *** Required.*** One of: `best`, `second`, `minute`, `hour`, `day`, `week`, `month`, `year`. |
| `style` | `TextStyle` | | Styles to apply to resulting `Text` node. |
| `form` | `Mixed`  | | One of: `short`, `narrow`, `0`, `false`. Change output type. |

```javascript
import { FormattedRelativeTime } from 'react-native-globalize';

class MyComponent extends Component {
  render() {
    return (
      <FormattedRelativeTime
        value={myDateObject}
        unit="best"
        style={{ color: 'red' }} />
    );
  }
}
// 2 days ago
```

### FormattedTime

See `FormattedDate`. All props and functionality are identical.

### Context
You can access formatting functions via the context should you need programmatic access to the results or if a component is not appropriate. For this to work, you must still have `FormattedWrapper` at the root of you application, or you must be providing an alternative `getChildContext` in a parent component.

```javascript
import { PropTypes } from 'react-native-globalize';

class MyComponent extends Component {
  myFunction() {
    const dateFormatter = this.context.globalize.getDateFormatter({skeleton: 'yMd'});
    const formattedDate = dateFormatter(new Date());

    const currencyFormatter = this.context.globalize.getCurrencyFormatter('USD', { minimumFractionDigits: 0, maximumFractionDigits: 0 });
    const formattedCurrency = currencyFormatter(9.99);
  }
}

MyComponent.contextTypes = {
  globalize: PropTypes.globalizeShape,
};
```

[build-url]: https://travis-ci.org/joshswan/react-native-globalize
[build-image]: https://travis-ci.org/joshswan/react-native-globalize.svg?branch=master
[depstat-url]: https://david-dm.org/joshswan/react-native-globalize
[depstat-image]: https://david-dm.org/joshswan/react-native-globalize.svg
[devdepstat-url]: https://david-dm.org/joshswan/react-native-globalize#info=devDependencies
[devdepstat-image]: https://david-dm.org/joshswan/react-native-globalize/dev-status.svg
[npm-url]: https://www.npmjs.com/package/react-native-globalize
[npm-image]: https://badge.fury.io/js/react-native-globalize.svg
