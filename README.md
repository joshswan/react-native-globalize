#React Native Globalize

Simple globalization library for React Native. Provides access to all formatting options as well as easy-to-use React Native components.

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
