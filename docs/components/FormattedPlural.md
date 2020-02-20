# `FormattedPlural`

Returns the corresponding plural group based on the locale and options.

Possible plural groups are: `zero`, `one`, `two`, `few`, `many`, `other`. However, some languages only use some of these groups (e.g. English uses `one` (1) and `other` (=/= 1) for cardinal numbers and `one` (1st), `two` (2nd), `few` (3rd), and `other` (0,4-9th) for ordinal numbers).

## Usage

```js
import { FormattedPlural } from 'react-native-globalize';

const ExampleComponent = () => (
  <FormattedPlural
    value={2}
    one={<Text>Show this for 1</Text>}
    other={<Text>Show this for other</Text>}
  />
);
```

## Props

- [accessible](https://facebook.github.io/react-native/docs/text#accessible)
- [accessibilityLabel](https://facebook.github.io/react-native/docs/text#accessibilitylabel)
- [adjustsFontSizeToFit](https://facebook.github.io/react-native/docs/text#adjustsfontsizetofit)
- [allowFontScaling](https://facebook.github.io/react-native/docs/text#allowfontscaling)
- [style](https://facebook.github.io/react-native/docs/text#style)
- [type](#type)
- [value](#value)

**Note**: The `other` prop is *required*. All other groups are optional. All accept a string or a React component.

### type

|  Type  | Required |  Default   | Description |
| :----: | :------: | :--------: | :---------: |
| string |    No    | `cardinal` | Whether to use cardinal (1, 2, 3, 4...) or cardinal (1st, 2nd, 3rd, 4th...) groupings. Possible values: `cardinal`, `ordinal`. |

```js
<FormattedPlural
  value={2}
  one={<Text>Show this for 1</Text>}
  two={<Text>Show this for 2</Text>}
  other={<Text>Show this for other</Text>}
/>
// Show this for 2
```

### value

|  Type  | Required | Default | Description |
| :----: | :------: | :-----: | :---------: |
| number |    Yes   |   none  | Number to use for plural formatting. |
