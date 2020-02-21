# Web Usage

React Native Globalize can be used on the web just like on mobile using [react-native-web](https://github.com/necolas/react-native-web). The following guide will illustrate how to set up a website with React Native Globalize using create-react-app.

In general, React Native Globalize is compatible out-of-the-box with an RN website using react-native-web. One change needs to be made to the Webpack configuration to ensure components load correctly. If you already have a website using react-native-web, skip straight to Step 2.

## 1. Basic Setup

Create a fresh project using create-react-app:

```shell
create-react-app my-app
cd my-app
```

Add React Native Globalize and other dependencies:

```shell
yarn add react-native-globalize react-native-web

yarn add --dev customize-cra react-app-rewired
```

We'll use [customize-cra](https://github.com/arackaf/customize-cra) and [react-app-rewired](https://github.com/timarney/react-app-rewired) to customize the default configuration used by CRA. To do so, let's change the scripts in `package.json`:

```diff
  "scripts": {
-   "start": "react-scripts start",
+   "start": "react-app-rewired start",
-   "build": "react-scripts build",
+   "build": "react-app-rewired build",
-   "test": "react-scripts test",
+   "test": "react-app-rewired test",
    "eject": "react-scripts eject"
  }
```

## 2. Webpack Config

To customize CRA, create a `config-overrides.js` in the project root.

```js
const { override, addWebpackModuleRule } = require('customize-cra');

module.exports = override(
  addWebpackModuleRule({
    test: /globalize/,
    parser: { amd: false },
  }),
);
```

If you aren't using CRA, simply place the rule above in the `module.rules` section of your Webpack config:

```js
{
  module: {
    rules: [
      { test: /globalize/, parser: { amd: false } }
    ]
  }
}
```

## 3. Globalize

At this point, React Native Globalize is ready to use on the web! Follow the steps in the [Getting Started](getting-started.md) to set up React Native Globalize and start formatting.

For web usage, it is recommended to load locale (CLDR) data only as needed rather than bundling all possible locales into your web bundle. This keeps the bundle smaller and speeds up the initial load of your site. Check out the section on loading locale data on-demand in the [Advanced](advanced.md) guide. In general, using `import()` to dynamically load the files from the `locale-data` folder is recommended:

```js
const localeLoaders = {
  de: () => import('react-native-globalize/locale-data/de'),
  en: () => import('react-native-globalize/locale-data/en'),
  es: () => import('react-native-globalize/locale-data/es'),
};

const onChangeLocale = async (locale) => {
  // Load locale data dynamically
  const data = await localeLoaders[locale]();

  // Once downloaded, load data into Globalize
  loadCldr(data);

  // Update locale on <GlobalizeProvider> using
  // state, redux action, etc.
  switchLocale(locale);
};
```
