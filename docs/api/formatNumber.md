# `formatNumber`

Formats a number based on the locale and options.

`formatNumber(value, options?)`

## Arguments

- `value` - *number* - Number to be formatted
- [`options?`](#options) - *object* - Formatting options

## Example

```js
import { useGlobalize } from 'react-native-globalize';

const ExampleComponent = () => {
  const { formatNumber } = useGlobalize();

  formatNumber(100000);
  // 100,000
};
```

## Options

- [`compact`](#compact)
- [`maximumFractionDigits`](#maximumfractiondigits)
- [`maximumSignificantDigits`](#maximumsignificantdigits)
- [`minimumFractionDigits`](#minimumfractiondigits)
- [`minimumIntegerDigits`](#minimumintegerdigits)
- [`minimumSignificantDigits`](#minimumsignificantdigits)
- [`round`](#round)
- [`style`](#style)
- [`useGrouping`](#usegrouping)

### `compact`

|  Type  | Required | Default | Description |
| :----: | :------: | :-----: | :---------: |
| string |    No    |   none  | Use compact number format. Possible values: `short`, `long`. |

```js
formatNumber(100000, { compact: 'short' });
// 100K
```

### `maximumFractionDigits`

|  Type  | Required | Default | Description |
| :----: | :------: | :-----: | :---------: |
| number |    No    |   none  | Override maximum fraction digits. Numbers will be rounded if needed based on [`round`](#round) option. |

```js
formatNumber(10.45, { maximumFractionDigits: 0 });
// 10
```

### `maximumSignificantDigits`

|  Type  | Required | Default | Description |
| :----: | :------: | :-----: | :---------: |
| number |    No    |   none  | Override maximum significant (integer + fraction) digits. Numbers will be rounded if needed based on [`round`](#round) option. Must also specify [`minimumSignificantDigits`](#minimumsignificantdigits). |

```js
formatNumber(10.45, { minimumSignificantDigits: 1, maximumSignificantDigits: 3 });
// 10.5
```

### `minimumFractionDigits`

|  Type  | Required | Default | Description |
| :----: | :------: | :-----: | :---------: |
| number |    No    |   none  | Override minimum fraction digits. Numbers will be rounded based on [`round`](#round) option or padded if needed. |

```js
formatNumber(10.45, { minimumFractionDigits: 4 });
// 10.4500
```

### `minimumIntegerDigits`

|  Type  | Required | Default | Description |
| :----: | :------: | :-----: | :---------: |
| number |    No    |   none  | Override minimum integer digits. Numbers will be padded if needed. |

```js
formatNumber(10.45, { minimumIntegerDigits: 3 });
// 010.45
```

### `minimumSignificantDigits`

|  Type  | Required | Default | Description |
| :----: | :------: | :-----: | :---------: |
| number |    No    |   none  | Override minimum significant (integer + fraction) digits. Numbers will be padded if needed. Must also specify [`maximumSignificantDigits`](#maximumsignificantdigits). |

```js
formatNumber(10.45, { minimumSignificantDigits: 6, maximumSignificantDigits: 8 });
// 10.4500
```

### `round`

|  Type  | Required | Default | Description |
| :----: | :------: | :-----: | :---------: |
| string |    No    | `round` | Specify rounding behavior. Possible values: `ceil`, `floor`, `round`, `truncate`. |

```js
formatNumber(10.45, { maximumFractionDigits: 0, round: 'ceil' });
// 11
```

### `style`

|  Type  | Required | Default | Description |
| :----: | :------: | :-----: | :---------: |
| string |    No    | `decimal` | Change display style. Possible values: `decimal`, `percent`. |

```js
formatNumber(0.45, { style: 'decimal' });
// 0.45
formatNumber(0.45, { style: 'percent' });
// 45%
```

### `useGrouping`

|  Type  | Required | Default | Description |
| :----: | :------: | :-----: | :---------: |
| boolean |   No    |  `true` | Whether to use grouping separator. |

```js
formatNumber(100000, { useGrouping: false });
// 100000
```
