# `formatCurrency`

Formats a number as currency based on the locale and options.

`formatCurrency(value, currencyCode?, options?)`

## Arguments

- `value` - *number* - Number to be formatted
- `currencyCode?` - *string* - Currency code (defaults to currency set on `GlobalizeProvider`)
- [`options?`](#options) - *object* - Formatting options

## Example

```js
import { useGlobalize } from 'react-native-globalize';

const ExampleComponent = () => {
  const { formatCurrency } = useGlobalize();

  formatCurrency(1000.99, 'USD');
  // $1,000.99
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
- [`symbolForm`](#symbolform)
- [`useGrouping`](#usegrouping)

### `compact`

|  Type  | Required | Default | Description |
| :----: | :------: | :-----: | :---------: |
| string |    No    |   none  | Use compact number format. Possible values: `short`, `long`. |

```js
formatCurrency(1000.99, 'USD', { compact: 'short' });
// $1K
```

### `maximumFractionDigits`

|  Type  | Required | Default | Description |
| :----: | :------: | :-----: | :---------: |
| number |    No    |   none  | Override maximum fraction digits. Numbers will be rounded if needed based on [`round`](#round) option. |

```js
formatCurrency(1000.99, 'USD', { maximumFractionDigits: 0 });
// $1,001
```

### `maximumSignificantDigits`

|  Type  | Required | Default | Description |
| :----: | :------: | :-----: | :---------: |
| number |    No    |   none  | Override maximum significant (integer + fraction) digits. Numbers will be rounded if needed based on [`round`](#round) option. Must also specify [`minimumSignificantDigits`](#minimumsignificantdigits). |

```js
formatCurrency(1000.99, 'USD', { minimumSignificantDigits: 2, maximumSignificantDigits: 4 });
// $1,001
```

### `minimumFractionDigits`

|  Type  | Required | Default | Description |
| :----: | :------: | :-----: | :---------: |
| number |    No    |   none  | Override minimum fraction digits. Numbers will be rounded based on [`round`](#round) option or padded if needed. |

```js
formatCurrency(1000.99, 'USD', { minimumFractionDigits: 4 });
// $1,000.9900
```

### `minimumIntegerDigits`

|  Type  | Required | Default | Description |
| :----: | :------: | :-----: | :---------: |
| number |    No    |   none  | Override minimum integer digits. Numbers will be padded if needed. |

```js
formatCurrency(1000.99, 'USD', { minimumIntegerDigits: 6 });
// $001,000.99
```

### `minimumSignificantDigits`

|  Type  | Required | Default | Description |
| :----: | :------: | :-----: | :---------: |
| number |    No    |   none  | Override minimum significant (integer + fraction) digits. Numbers will be padded if needed. Must also specify [`maximumSignificantDigits`](#maximumsignificantdigits). |

```js
formatCurrency(1000.99, 'USD', { minimumSignificantDigits: 8, maximumSignificantDigits: 10 });
// $1,000.9900
```

### `round`

|  Type  | Required | Default | Description |
| :----: | :------: | :-----: | :---------: |
| string |    No    | `round` | Specify rounding behavior. Possible values: `ceil`, `floor`, `round`, `truncate`. |

```js
formatCurrency(1000.99, 'USD', { maximumFractionDigits: 0, round: 'floor' });
// $1,000
```

### `style`

|  Type  | Required | Default | Description |
| :----: | :------: | :-----: | :---------: |
| string |    No    | `symbol` | Change display style. Possible values: `symbol`, `accounting`, `code`, `name`. |

```js
formatCurrency(-1000.99, 'USD', { style: 'accounting' });
// ($1,000.99)
formatCurrency(1000.99, 'USD', { style: 'code' });
// 1,000.99 USD
formatCurrency(1000.99, 'USD', { style: 'name' });
// 1,000.99 US dollars
```

### `symbolForm`

|  Type  | Required | Default | Description |
| :----: | :------: | :-----: | :---------: |
| string |    No    |  none   | Use alternative narrow currency symbol. Possible values: `narrow`. |

```js
formatCurrency(1000.99, 'CAD');
// CA$1,000.99
formatCurrency(1000.99, 'CAD', { symbolForm: 'narrow' });
// $1,000.99
```

### `useGrouping`

|  Type  | Required | Default | Description |
| :----: | :------: | :-----: | :---------: |
| boolean |   No    |  `true` | Whether to use grouping separator. |

```js
formatCurrency(1000.99, 'USD', { useGrouping: false });
// $1000.99
```
