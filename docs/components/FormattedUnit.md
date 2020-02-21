# `FormattedUnit`

Formats a unit based on the locale and options.

## Usage

```js
import { FormattedUnit } from 'react-native-globalize';

const ExampleComponent = () => (
  <FormattedUnit
    unit="mile-per-hour"
    value={50}
  />
);
// 50 miles per hour

const ExampleComponent2 = () => (
  <FormattedUnit
    unit="kilometer-per-hour"
    value={50}
  />
);
// 50 kilometers per hour
```

## Props

- [`accessible`](https://facebook.github.io/react-native/docs/text#accessible)
- [`accessibilityLabel`](https://facebook.github.io/react-native/docs/text#accessibilitylabel)
- [`adjustsFontSizeToFit`](https://facebook.github.io/react-native/docs/text#adjustsfontsizetofit)
- [`allowFontScaling`](https://facebook.github.io/react-native/docs/text#allowfontscaling)
- [`form`](#form)
- [`numberFormatter`](#numberformatter)
- [`style`](https://facebook.github.io/react-native/docs/text#style)
- [`unit`](#unit)
- [`value`](#value)

### `form`

|  Type  | Required | Default | Description |
| :----: | :------: | :-----: | :---------: |
| string |    No    |   none  | Use alternate display format. Possible values: `short`, `narrow`. |

```js
<FormattedUnit
  unit="mile-per-hour"
  value={50}
  form="short"
/>
// 50 mph
```

### `numberFormatter`

|   Type   | Required |         Default        | Description |
| :------: | :------: | :--------------------: | :---------: |
| function |    No    | `getNumberFormatter()` | Customize the number formatting function. |

```js
const { getNumberFormatter } = useGlobalize();

<FormattedUnit
  unit="gigabyte"
  value={5000}
  numberFormatter={getNumberFormatter({
    minimumFractionDigits: 2,
    useGrouping: false,
  })}
/>
// 5000.00 gigabytes
```

### `unit`

|  Type   | Required | Default | Description |
| :-----: | :------: | :-----: | :---------: |
| string  |    Yes   |   none  | Unit to use (see note below). |

The `unit` argument can be a unit of time (e.g. `second`, `day`, etc.), a unit of measurement (e.g. `mile`, `meter`, `gigabyte`), or a compound unit (e.g. `mile-per-hour`, `kilowatt-hour`).

### `value`

|  Type   | Required | Default | Description |
| :-----: | :------: | :-----: | :---------: |
| number  |    Yes   |   none  | Number to be formatted. |
