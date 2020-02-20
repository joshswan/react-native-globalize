# `parseNumber`

Parses a number based on the locale and options.

`parseNumber(value, options?)`

## Arguments

- `value` - *string* - Number string to be parsed
- [`options?`](#options) - *object* - Parsing options

## Example

```js
import { useGlobalize } from 'react-native-globalize';

const ExampleComponent = () => {
  const { parseNumber } = useGlobalize();

  parseNumber('100,000.00');
  // Number(100000)
};
```

## Options

- [style](#style)

### style

|  Type  | Required | Default | Description |
| :----: | :------: | :-----: | :---------: |
| string |    No    | `decimal` | Change parsing style. Possible values: `decimal`, `percent`. |

```js
parseNumber('0.45', { style: 'decimal' });
// Number(0.45)
formatNumber('45%', { style: 'percent' });
// Number(0.45)
```
