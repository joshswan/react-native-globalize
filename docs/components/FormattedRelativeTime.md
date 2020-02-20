# `FormattedRelativeTime`

Formats a relative time based on the locale and options.

## Usage

```js
import { FormattedRelativeTime } from 'react-native-globalize';

const ExampleComponent = () => (
  <FormattedRelativeTime
    unit="auto"
    value={new Date()}
  />
);
// now

const ExampleComponent2 = () => (
  <FormattedRelativeTime
    unit="minute"
    value={-30}
  />
);
// 30 minutes ago
```

## Props

- [accessible](https://facebook.github.io/react-native/docs/text#accessible)
- [accessibilityLabel](https://facebook.github.io/react-native/docs/text#accessibilitylabel)
- [adjustsFontSizeToFit](https://facebook.github.io/react-native/docs/text#adjustsfontsizetofit)
- [allowFontScaling](https://facebook.github.io/react-native/docs/text#allowfontscaling)
- [form](#form)
- [style](https://facebook.github.io/react-native/docs/text#style)
- [unit](#unit)
- [value](#value)

### form

|  Type  | Required | Default | Description |
| :----: | :------: | :-----: | :---------: |
| string |    No    |   none  | Use alternate display format. Possible values: `short`, `narrow`. |

```js
<FormattedRelativeTime
  value={-30}
  unit="minute"
  form="short"
/>
// 30 min. ago
```

### unit

|  Type   | Required | Default | Description |
| :-----: | :------: | :-----: | :---------: |
| string  |    Yes   |   none  | Unit of time to use (see note below). |

When `value` is a number, unit can be: `second`, `minute`, `hour`, `day`, `week`, `month`, `quarter`, `year`. When `value` is a Date, `auto` is also supported, which will determine the best unit automatically.

### value

|       Type      | Required | Default | Description |
| :-------------: | :------: | :-----: | :---------: |
| Date or number  |    Yes   |   none  | Date or number to be formatted. |
