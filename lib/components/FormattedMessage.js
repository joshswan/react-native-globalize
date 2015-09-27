/*!
 * React Native Globalize
 *
 * Copyright 2015 Josh Swan
 * Released under the MIT license
 * https://github.com/joshswan/react-native-globalize/blob/master/LICENSE
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _reactNative = require('react-native');

var _reactNative2 = _interopRequireDefault(_reactNative);

var _types = require('../types');

var Text = _reactNative2['default'].Text;

var FormattedMessage = (function (_Component) {
  _inherits(FormattedMessage, _Component);

  function FormattedMessage(props, context) {
    _classCallCheck(this, FormattedMessage);

    _get(Object.getPrototypeOf(FormattedMessage.prototype), 'constructor', this).call(this, props, context);
  }

  _createClass(FormattedMessage, [{
    key: 'render',
    value: function render() {
      var formatMessage = this.context.globalize.getMessageFormatter(this.props.message);

      var values = this.props.values || {};

      for (var i in this.props) {
        if (this.props.hasOwnProperty(i) && i !== 'values') {
          values[i] = this.props[i];
        }
      }

      /**
       * Code adapted from https://github.com/yahoo/react-intl
       */

      // Creates a token with a random UID that should not be guessable or
      // conflict with other parts of the `message` string.
      var uid = Math.floor(Math.random() * 0x10000000000).toString(16);
      var tokenRegexp = new RegExp('(@__ELEMENT-' + uid + '-\\d+__@)', 'g');

      var generateToken = (function () {
        var counter = 0;
        return function () {
          return '@__ELEMENT-' + uid + '-' + (counter += 1) + '__@';
        };
      })();

      var tokenizedValues = {};
      var elements = {};

      // Iterates over the `props` to keep track of any React Element values
      // so they can be represented by the `token` as a placeholder when the
      // `message` is formatted. This allows the formatted message to then be
      // broken-up into parts with references to the React Elements inserted
      // back in.
      Object.keys(values).forEach(function (name) {
        var value = values[name];

        if ((0, _reactNative.isValidElement)(value)) {
          var token = generateToken();
          tokenizedValues[name] = token;
          elements[token] = value;
        } else {
          tokenizedValues[name] = value;
        }
      });

      var formattedMessage = formatMessage(tokenizedValues);

      // Split the message into parts so the React Element values captured
      // above can be inserted back into the rendered message. This approach
      // allows messages to render with React Elements while keeping React's
      // virtual diffing working properly.
      var nodes = formattedMessage.split(tokenRegexp).filter(function (part) {
        return !!part;
      }).map(function (part) {
        return elements[part] || part;
      });

      return _reactNative.createElement.apply(undefined, [Text, null].concat(_toConsumableArray(nodes)));
    }
  }]);

  return FormattedMessage;
})(_reactNative.Component);

exports['default'] = FormattedMessage;

FormattedMessage.propTypes = _extends({}, _types.messageFormatPropTypes, {
  message: _reactNative.PropTypes.string.isRequired,
  values: _reactNative.PropTypes.object
});

FormattedMessage.contextTypes = {
  globalize: _types.globalizeShape
};
module.exports = exports['default'];