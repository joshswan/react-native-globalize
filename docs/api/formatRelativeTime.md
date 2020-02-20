# `formatRelativeTime`

Formats a relative time based on the locale and options.

`formatRelativeTime(value, unit, options?)`

## Arguments

- `value` - *Date* or *number* - Date to be formatted
- `unit` - *string* - Unit of time to use (see below)
- [`options?`](#options) - *object* - Formatting options

When `value` is a number, unit can be: `second`, `minute`, `hour`, `day`, `week`, `month`, `quarter`, `year`. When `value` is a Date, `auto` is also supported, which will determine the best unit automatically.

## Example

```js
import { useGlobalize } from 'react-native-globalize';

const ExampleComponent = () => {
  const { formatRelativeTime } = useGlobalize();

  formatRelativeTime(new Date(), 'auto');
  // now

  formatRelativeTime(-30, 'minute');
  // 30 minutes ago
};
```

## Options

- [form](#form)

### form

|  Type  | Required | Default | Description |
| :----: | :------: | :-----: | :---------: |
| string |    No    |   none  | Use alternate display format. Possible values: `short`, `narrow`. |

```js
formatRelativeTime(-30, 'minute', { form: 'short' });
// 30 min. ago
```
