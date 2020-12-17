# Accessing Globalize via ref

Occasionally, you may need to access the formatting functions available via `useGlobalize` outside of your React components. Generally, you should avoid this as much as possible, but sometimes it's necessary (e.g. displaying an alert message directly from a saga with the appropriate translations applied).

For such instances, you can attach a ref to the `GlobalizeProvider` in order to access the current Globalize instance and its formatting functions. **Do not** overuse this approach as it does not handle locale or currency changes at all (that functionality requires the React Context). That said, it's great for quick messages that are only visible for a period of time or for situations where the locale cannot be changed.

To get started, we'll create a `Globalize` module that contains the ref and the functions we want to use:

```javascript
// Globalize.js
import React from 'react';

export const globalizeRef = React.createRef();

export function formatCurrency(value, currencyCode, options) {
  return globalizeRef.current?.formatCurrency(value, currencyCode, options);
}

// ...other formatting functions
```

Then, we'll attach that ref to the `GlobalizeProvider` at the root of our app:

```javascript
// Root.js
import { GlobalizeProvider } from 'react-native-globalize';
import { globalizeRef } from './Globalize';

const Root = () => (
  <GlobalizeProvider ref={globalizeRef} locale="en" currency="USD">
    <App />
  </GlobalizeProvider>
);

export default Root;
```

And finally, we can access the formatting functions on any module throughout the app:

```javascript
import * as Globalize from './path/to/Globalize';

// ...

Globalize.formatCurrency(75);
```

One final note: the ref is only set once `GlobalizeProvider` actually renders. So don't expect to do any formatting during the initial moments when the application is still booting/loading. But once the provider has rendered, you'll have access to formatting wherever you need it.
