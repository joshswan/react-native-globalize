#React Native Globalize
[![NPM Version][npm-image]][npm-url] [![Build Status][build-image]][build-url] [![Dependency Status][depstat-image]][depstat-url] [![Dev Dependency Status][devdepstat-image]][devdepstat-url]

Simple globalization library for React Native. Provides access to all formatting options as well as easy-to-use React Native components.

## How does it work?

Because it's based on the jQuery Globalize project, React Native Globalize can format and parse numbers, format and parse dates, format currency, and format messages (using the ICU message pattern) using the correct plural rules for the language/locale. Take a look at https://github.com/jquery/globalize for more information.

The important thing to note is all this functionality depends entirely on CLDR data. While a huge number of languages and locales are available in this data, only some are loaded by default. This is done for performance reasons as React Native currently bundles everything into one large JS bundle, and with CLDR data being hundreds of megabytes, it causes some issues. The default languages are listed below, but you can always pass additional CLDR data if you need additional language/locale support:

```javascript
var locales = [
  'am',           // Amharic
  'ar',           // Arabic
  'bg',           // Bulgarian
  'bn',           // Bengali
  'ca',           // Catalan
  'cs',           // Czech
  'da',           // Danish
  'de',           // German
  'el',           // Greek
  'en',           // English
  'en-GB',        // English (Great Britain)
  'en-US',        // English (United States)
  'es',           // Spanish
  'es-419',       // Spanish (Latin America & Caribbean)
  'et',           // Estonian
  'fa',           // Persian
  'fi',           // Finnish
  'fil',          // Filipino
  'fr',           // French
  'gu',           // Gujarati
  'he',           // Hebrew
  'hi',           // Hindi
  'hr',           // Croatian
  'hu',           // Hungarian
  'id',           // Indonesian
  'it',           // Italian
  'ja',           // Japanese
  'kn',           // Kannada
  'ko',           // Korean
  'lt',           // Lithuanian
  'lv',           // Latvian
  'ml',           // Malayalam
  'mr',           // Marathi
  'ms',           // Malay
  'nb',           // Norwegian
  'nl',           // Dutch
  'pl',           // Polish
  'pt',           // Portuguese
  'pt-PT',        // Portuguese (Portugal)
  'ro',           // Romanian
  'ru',           // Russian
  'sk',           // Slovak
  'sl',           // Slovenian
  'sr',           // Serbian
  'sv',           // Swedish
  'sw',           // Swahili
  'ta',           // Tamil
  'te',           // Telugu
  'th',           // Thai
  'tr',           // Turkish
  'uk',           // Ukrainian
  'vi',           // Vietnamese
  'zh',           // Chinese
  'zh-Hans',      // Chinese (Simplified)
  'zh-Hant',      // Chinese (Traditional)
];
```

## Usage

Use the included wrapper at the root of your application to propagate the required context to all components. Alternatively, include `getChildContext()` in your own component (see FormattedWrapper for an example).

```javascript
var RNGlobalize = require('react-native-globalize');
var {
	FormattedWrapper,	
} = RNGlobalize;

class MyApp extends Component {
	render() {
		return (
			<FormattedWrapper locale="en" currency="USD">
				<AppComponent />
			</FormattedWrapper>
		);
	}
}
```

Then you can use the included components anywhere you like.
```javascript
var RNGlobalize = require('react-native-globalize');
var {
	FormattedDate,
} = RNGlobalize;

class MyComponent extends Component {
	render() {
		return (
			<View style={styles.awesomeBackground}>
				<FormattedDate value={new Date()} skeleton="yMMMdhm" />
			</View>
		);
	}
}
```

FormattedMessage can even take components as replacement values. You can pass values as individual named props or pass a `values` object (or both - named props will override `values`).
```javascript
var RNGlobalize = require('react-native-globalize');
var {
  Globalize,
  FormattedDate,
  FormattedMessage,
} = RNGlobalize;

var messages = {
  en: {
    today: 'The date today is: {date}',
  },
};

Globalize.loadMessages(messages);

class MyComponent extends Component {
  render() {
    return (
      <View style={styles.awesomeBackground}>
        <FormattedMessage
          message="today"
          date={<FormattedDate value={new Date()} skeleton="yMMMdhm" />} />
      </View>
    );
  }
}
```

You can also access the formatting functions directly from the context.

```javascript
class MyComponent extends Component {
	doStuff() {
		// Do stuff

		var dateFormatter = this.context.globalize.getDateFormatter({skeleton: "yMMMdhm"});
		var formattedDate = dateFormatter(new Date());

		// Do other stuff
	}
}
```

See https://github.com/jquery/globalize for all available formatting options.

[build-url]: https://travis-ci.org/joshswan/react-native-globalize
[build-image]: https://travis-ci.org/joshswan/react-native-globalize.svg?branch=master
[depstat-url]: https://david-dm.org/joshswan/react-native-globalize
[depstat-image]: https://david-dm.org/joshswan/react-native-globalize.svg
[devdepstat-url]: https://david-dm.org/joshswan/react-native-globalize#info=devDependencies
[devdepstat-image]: https://david-dm.org/joshswan/react-native-globalize/dev-status.svg
[npm-url]: https://www.npmjs.com/package/react-native-globalize
[npm-image]: https://badge.fury.io/js/react-native-globalize.svg
