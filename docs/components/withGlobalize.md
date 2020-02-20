# `withGlobalize`

Higher-order component (HOC) to inject the Globalize object as a prop.

This component is mainly included to maintain backwards compatibility as the `useGlobalize` hook is now the recommended way to access React Native Globalize's formatting functionality. This component itself uses `useGlobalize` to get access to the Globalize object for injecting. However, while it is not favored compared to the hook, `withGlobalize` is NOT currently deprecated.

## Usage

```js
import React from 'react';
import { withGlobalize } from 'react-native-globalize';

const ExampleComponent = ({ globalize }) => {
  // Prop `globalize` is the same as returned by `useGlobalize`
  const { formatCurrency } = globalize;
};

export default withGlobalize(ExampleComponent);
```
