# `FormattedCurrency`

Formats a number as currency based on the locale and options.

## Usage

```js
import { FormattedCurrency } from 'react-native-globalize';

const ExampleComponent = () => (
  <FormattedCurrency value={1000.99} />
);
// $1,000.99;
```

## Props

- [accessible](https://facebook.github.io/react-native/docs/text#accessible)
- [accessibilityLabel](https://facebook.github.io/react-native/docs/text#accessibilitylabel)
- [adjustsFontSizeToFit](https://facebook.github.io/react-native/docs/text#adjustsfontsizetofit)
- [allowFontScaling](https://facebook.github.io/react-native/docs/text#allowfontscaling)
- [compact](#compact)
- [maximumFractionDigits](#maximumfractiondigits)
- [maximumSignificantDigits](#maximumsignificantdigits)
- [minimumFractionDigits](#minimumfractiondigits)
- [minimumIntegerDigits](#minimumintegerdigits)
- [minimumSignificantDigits](#minimumsignificantdigits)
- [numberStyle](#numberStyle)
- [round](#round)
- [style](https://facebook.github.io/react-native/docs/text#style)
- [symbolForm](#symbolform)
- [useGrouping](#usegrouping)
- [value](#value)

### compact

|  Type  | Required | Default | Description |
| :----: | :------: | :-----: | :---------: |
| string |    No    |   none  | Use compact number format. Possible values: `short`, `long`. |

```js
<FormattedCurrency
  value={1000.99}
  compact="short"
/>
// $1K
```

### maximumFractionDigits

|  Type  | Required | Default | Description |
| :----: | :------: | :-----: | :---------: |
| number |    No    |   none  | Override maximum fraction digits. Numbers will be rounded if needed based on [`round`](#round) option. |

```js
<FormattedCurrency
  value={1000.99}
  maximumFractionDigits={0}
/>
// $1,001
```

### maximumSignificantDigits

|  Type  | Required | Default | Description |
| :----: | :------: | :-----: | :---------: |
| number |    No    |   none  | Override maximum significant (integer + fraction) digits. Numbers will be rounded if needed based on [`round`](#round) option. Must also specify [`minimumSignificantDigits`](#minimumsignificantdigits). |

```js
<FormattedCurrency
  value={1000.99}
  maximumSignificantDigits={4}
  minimumSignificantDigits={2}
/>
// $1,001
```

### minimumFractionDigits

|  Type  | Required | Default | Description |
| :----: | :------: | :-----: | :---------: |
| number |    No    |   none  | Override minimum fraction digits. Numbers will be rounded based on [`round`](#round) option or padded if needed. |

```js
<FormattedCurrency
  value={1000.99}
  minimumFractionDigits={4}
/>
// $1,000.9900
```

### minimumIntegerDigits

|  Type  | Required | Default | Description |
| :----: | :------: | :-----: | :---------: |
| number |    No    |   none  | Override minimum integer digits. Numbers will be padded if needed. |

```js
<FormattedCurrency
  value={1000.99}
  minimumIntegerDigits={6}
/>
// $001,000.99
```

### minimumSignificantDigits

|  Type  | Required | Default | Description |
| :----: | :------: | :-----: | :---------: |
| number |    No    |   none  | Override minimum significant (integer + fraction) digits. Numbers will be padded if needed. Must also specify [`maximumSignificantDigits`](#maximumsignificantdigits). |

```js
<FormattedCurrency
  value={1000.99}
  minimumSignificantDigits={8}
  maximumSignificantDigits={10}
/>
// $1,000.9900
```

### numberStyle

|  Type  | Required | Default | Description |
| :----: | :------: | :-----: | :---------: |
| string |    No    | `symbol` | Change display style. Possible values: `symbol`, `accounting`, `code`, `name`. |

```js
<FormattedCurrency
  value={-1000.99}
  numberStyle="accounting"
/>
// ($1,000.99)
<FormattedCurrency
  value={1000.99}
  numberStyle="code"
/>
// 1,000.99 USD
<FormattedCurrency
  value={1000.99}
  numberStyle="name"
/>
// 1,000.99 US dollars
```

### round

|  Type  | Required | Default | Description |
| :----: | :------: | :-----: | :---------: |
| string |    No    | `round` | Specify rounding behavior. Possible values: `ceil`, `floor`, `round`, `truncate`. |

```js
<FormattedCurrency
  value={1000.99}
  maximumFractionDigits={0}
  round="floor"
/>
// $1,000
```

### symbolForm

|  Type  | Required | Default | Description |
| :----: | :------: | :-----: | :---------: |
| string |    No    |  none   | Use alternative narrow currency symbol. Possible values: `narrow`. |

```js
<FormattedCurrency
  value={1000.99}
  currency="CAD"
/>
// CA$1,000.99
<FormattedCurrency
  value={1000.99}
  currency="CAD"
  symbolForm="narrow"
/>
// $1,000.99
```

### useGrouping

|  Type  | Required | Default | Description |
| :----: | :------: | :-----: | :---------: |
| boolean |   No    |  `true` | Whether to use grouping separator. |

```js
<FormattedCurrency
  value={1000.99}
  useGrouping={false}
/>
// $1000.99
```

### value

|  Type  | Required | Default | Description |
| :----: | :------: | :-----: | :---------: |
| number |   Yes    |  none   | Number to be formatted. |

```js
<FormattedCurrency value={1000.99} />
// $1000.99
```
