# `parseDate`

Parses a date based on the locale and options.

`parseDate(value, options?)`

## Arguments

- `value` - *string* - Date string to be parsed
- [`options?`](#options) - *object* - Parsing options

## Example

```js
import { useGlobalize } from 'react-native-globalize';

const ExampleComponent = () => {
  const { parseDate } = useGlobalize();

  parseDate('1/1/2020', { skeleton: 'yMd' });
  // Date(2020, 0, 1)
};
```

## Options

- [date](#date)
- [datetime](#datetime)
- [skeleton](#skeleton)
- [time](#time)

**Note**: Specify one of `date`, `datetime`, `skeleton`, or `time`.

### date

|  Type  | Required | Default | Description |
| :----: | :------: | :-----: | :---------: |
| string |    No    |   none  | Shorthand date-only parsing specification. Possible values: `full`, `long`, `medium`, `short`. |

```js
parseDate('January 1, 2020', { date: 'long' });
// Date(2020, 0, 1)
```

### datetime

|  Type  | Required | Default | Description |
| :----: | :------: | :-----: | :---------: |
| string |    No    |   none  | Shorthand date and time parsing specification. Possible values: `full`, `long`, `medium`, `short`. |

```js
parseDate('1/1/20, 12:00 AM', { datetime: 'short' });
// Date(2020, 0, 1)
```

### skeleton

|  Type  | Required | Default | Description |
| :----: | :------: | :-----: | :---------: |
| string |    No    |   none  | Flexible parsing mechanism using a pattern with fields in canonical order. See [list](http://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table) of skeleton patterns (not all options supported). |

```js
parseDate('Jan 1, 2020, 12:00 AM', { skeleton: 'yMMMdhm' });
// Date(2020, 0, 1)
```

### time

|  Type  | Required | Default | Description |
| :----: | :------: | :-----: | :---------: |
| string |    No    |   none  | Shorthand time-only parsing specification. Possible values: `full`, `long`, `medium`, `short`. |

```js
parseDate('12:00 AM', { time: 'full' });
// Date(today @ 00:00:00)
```
