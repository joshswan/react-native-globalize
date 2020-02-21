# `formatUnit`

Formats a unit based on the locale and options.

`formatUnit(value, unit, options?)`

## Arguments

- `value` - *number* - Number to be formatted
- `unit` - *string* - Unit to use (see below)
- [`options?`](#options) - *object* - Formatting options

The `unit` argument can be a unit of time (e.g. `second`, `day`, etc.), a unit of measurement (e.g. `mile`, `meter`, `gigabyte`), or a compound unit (e.g. `mile-per-hour`, `kilowatt-hour`).

## Example

```js
import { useGlobalize } from 'react-native-globalize';

const ExampleComponent = () => {
  const { formatUnit } = useGlobalize();

  formatUnit(50, 'mile-per-hour');
  // 50 miles per hour

  formatUNit(50, 'kilometer-per-hour');
  // 50 kilometers per hour
};
```

## Options

- [`form`](#form)
- [`numberFormatter`](#numberformatter)

### `form`

|  Type  | Required | Default | Description |
| :----: | :------: | :-----: | :---------: |
| string |    No    |   none  | Use alternate display format. Possible values: `short`, `narrow`. |

```js
formatUnit(50, 'mile-per-hour', { form: 'short' });
// 50 mph
```

### `numberFormatter`

|   Type   | Required |         Default        | Description |
| :------: | :------: | :--------------------: | :---------: |
| function |    No    | `getNumberFormatter()` | Customize the number formatting function. |

```js
const { getNumberFormatter } = useGlobalize();

formatUnit(5000, 'gigabyte', {
  numberFormatter: getNumberFormatter({
    minimumFractionDigits: 2,
    useGrouping: false,
  }),
});
// 5000.00 gigabytes
```
