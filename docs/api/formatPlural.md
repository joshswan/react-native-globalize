# `formatPlural`

Returns the corresponding plural group based on the locale and options.

`formatPlural(value, options?)`

Possible plural groups are: `zero`, `one`, `two`, `few`, `many`, `other`. However, some languages only use some of these groups (e.g. English uses `one` (1) and `other` (=/= 1) for cardinal numbers and `one` (1st), `two` (2nd), `few` (3rd), and `other` (0,4-9th) for ordinal numbers).

## Arguments

- `value` - *number* - Number to be formatted
- [`options?`](#options) - *object* - Formatting options

## Example

```js
import { useGlobalize } from 'react-native-globalize';

const ExampleComponent = () => {
  const { formatPlural } = useGlobalize();

  formatPlural(2);
  // other
};
```

## Options

- [type](#type)

### type

|  Type  | Required |  Default   | Description |
| :----: | :------: | :--------: | :---------: |
| string |    No    | `cardinal` | Whether to use cardinal (1, 2, 3, 4...) or cardinal (1st, 2nd, 3rd, 4th...) groupings. Possible values: `cardinal`, `ordinal`. |

```js
formatPlural(2, { type: 'ordinal' });
// two
```
