# `formatDate`

Formats a date based on the locale and options.

`formatDate(value, options?)`

## Arguments

- `value` - *Date* - Date object to be formatted
- [`options?`](#options) - *object* - Formatting options

## Example

```js
import { useGlobalize } from 'react-native-globalize';

const ExampleComponent = () => {
  const { formatDate } = useGlobalize();

  formatDate(new Date(2020, 0, 1), { skeleton: 'yMd' });
  // 1/1/2020
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
| string |    No    |   none  | Shorthand date-only formatting specification. Possible values: `full`, `long`, `medium`, `short`. |

```js
formatDate(new Date(2020, 0, 1), { date: 'full' });
// Wednesday, January 1, 2020
```

### datetime

|  Type  | Required | Default | Description |
| :----: | :------: | :-----: | :---------: |
| string |    No    |   none  | Shorthand date and time formatting specification. Possible values: `full`, `long`, `medium`, `short`. |

```js
formatDate(new Date(2020, 0, 1), { datetime: 'full' });
// Wednesday, January 1, 2020 at 12:00:00 AM GMT-08:00
```

### skeleton

|  Type  | Required | Default | Description |
| :----: | :------: | :-----: | :---------: |
| string |    No    |   none  | Flexible formatting mechanism using a pattern with fields in canonical order. See [list](http://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table) of skeleton patterns (not all options supported). |

```js
formatDate(new Date(2020, 0, 1), { skeleton: 'yMMMdhm' });
// Jan 1, 2020, 12:00 AM
```

### time

|  Type  | Required | Default | Description |
| :----: | :------: | :-----: | :---------: |
| string |    No    |   none  | Shorthand time-only formatting specification. Possible values: `full`, `long`, `medium`, `short`. |

```js
formatDate(new Date(2020, 0, 1), { time: 'full' });
// 12:00:00 AM GMT-08:00
```
