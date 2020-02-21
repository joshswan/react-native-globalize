# `FormattedNumber`

Formats a number based on the locale and options.

## Usage

```js
import { FormattedNumber } from 'react-native-globalize';

const ExampleComponent = () => (
  <FormattedNumber value={100000} />
);
// 100,000
```

## Props

- [`accessible`](https://facebook.github.io/react-native/docs/text#accessible)
- [`accessibilityLabel`](https://facebook.github.io/react-native/docs/text#accessibilitylabel)
- [`adjustsFontSizeToFit`](https://facebook.github.io/react-native/docs/text#adjustsfontsizetofit)
- [`allowFontScaling`](https://facebook.github.io/react-native/docs/text#allowfontscaling)
- [`compact`](#compact)
- [`maximumFractionDigits`](#maximumfractiondigits)
- [`maximumSignificantDigits`](#maximumsignificantdigits)
- [`minimumFractionDigits`](#minimumfractiondigits)
- [`minimumIntegerDigits`](#minimumintegerdigits)
- [`minimumSignificantDigits`](#minimumsignificantdigits)
- [`numberStyle`](#numberstyle)
- [`round`](#round)
- [`style`](https://facebook.github.io/react-native/docs/text#style)
- [`useGrouping`](#usegrouping)
- [`value`](#value)

### `compact`

|  Type  | Required | Default | Description |
| :----: | :------: | :-----: | :---------: |
| string |    No    |   none  | Use compact number format. Possible values: `short`, `long`. |

```js
<FormattedNumber
  value={100000}
  compact="short"
/>
// 100K
```

### `maximumFractionDigits`

|  Type  | Required | Default | Description |
| :----: | :------: | :-----: | :---------: |
| number |    No    |   none  | Override maximum fraction digits. Numbers will be rounded if needed based on [`round`](#round) option. |

```js
<FormattedNumber
  value={10.45}
  maximumFractionDigits={0}
/>
// 10
```

### `maximumSignificantDigits`

|  Type  | Required | Default | Description |
| :----: | :------: | :-----: | :---------: |
| number |    No    |   none  | Override maximum significant (integer + fraction) digits. Numbers will be rounded if needed based on [`round`](#round) option. Must also specify [`minimumSignificantDigits`](#minimumsignificantdigits). |

```js
<FormattedNumber
  value={10.45}
  maximumSignificantDigits={3}
  minimumSignificantDigits={1}
/>
// 10.5
```

### `minimumFractionDigits`

|  Type  | Required | Default | Description |
| :----: | :------: | :-----: | :---------: |
| number |    No    |   none  | Override minimum fraction digits. Numbers will be rounded based on [`round`](#round) option or padded if needed. |

```js
<FormattedNumber
  value={10.45}
  minimumFractionDigits={4}
/>
// 10.4500
```

### `minimumIntegerDigits`

|  Type  | Required | Default | Description |
| :----: | :------: | :-----: | :---------: |
| number |    No    |   none  | Override minimum integer digits. Numbers will be padded if needed. |

```js
<FormattedNumber
  value={10.45}
  minimumIntegerDigits={3}
/>
// 010.45
```

### `minimumSignificantDigits`

|  Type  | Required | Default | Description |
| :----: | :------: | :-----: | :---------: |
| number |    No    |   none  | Override minimum significant (integer + fraction) digits. Numbers will be padded if needed. Must also specify [`maximumSignificantDigits`](#maximumsignificantdigits). |

```js
<FormattedNumber
  value={10.45}
  minimumSignificantDigits={6}
  maximumSignificantDigits={8}
/>
// 10.4500
```

### `numberStyle`

|  Type  | Required | Default | Description |
| :----: | :------: | :-----: | :---------: |
| string |    No    | `decimal` | Change display style. Possible values: `decimal`, `percent`. |

```js
<FormattedNumber
  value={0.45}
  numberStyle="decimal"
/>
// 0.45
<FormattedNumber
  value={0.45}
  numberStyle="percent"
/>
// 45%
```

### `round`

|  Type  | Required | Default | Description |
| :----: | :------: | :-----: | :---------: |
| string |    No    | `round` | Specify rounding behavior. Possible values: `ceil`, `floor`, `round`, `truncate`. |

```js
<FormattedNumber
  value={10.45}
  maximumFractionDigits={0}
  round="ceil"
/>
// 11
```

### `useGrouping`

|  Type  | Required | Default | Description |
| :----: | :------: | :-----: | :---------: |
| boolean |   No    |  `true` | Whether to use grouping separator. |

```js
<FormattedNumber
  value={100000}
  useGrouping={false}
/>
// 100000
```

### `value`

|  Type  | Required | Default | Description |
| :----: | :------: | :-----: | :---------: |
| number |   Yes    |   none  | Number to be formatted. |
