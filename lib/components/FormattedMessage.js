/*!
 * React Native Globalize
 *
 * Copyright 2015-2016 Josh Swan
 * Released under the MIT license
 * https://github.com/joshswan/react-native-globalize/blob/master/LICENSE
 */
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _reactNative = require('react-native');

var _types = require('../types');

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormattedMessage = function (_Component) {
  _inherits(FormattedMessage, _Component);

  function FormattedMessage(props, context) {
    _classCallCheck(this, FormattedMessage);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(FormattedMessage).call(this, props, context));
  }

  _createClass(FormattedMessage, [{
    key: 'setNativeProps',
    value: function setNativeProps(nativeProps) {
      this._root.setNativeProps(nativeProps);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

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

      var generateToken = function () {
        var counter = 0;
        return function () {
          return '@__ELEMENT-' + uid + '-' + (counter += 1) + '__@';
        };
      }();

      var tokenizedValues = {};
      var elements = {};

      // Iterates over the `props` to keep track of any React Element values
      // so they can be represented by the `token` as a placeholder when the
      // `message` is formatted. This allows the formatted message to then be
      // broken-up into parts with references to the React Elements inserted
      // back in.
      Object.keys(values).forEach(function (name) {
        var value = values[name];

        if ((0, _react.isValidElement)(value)) {
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

      return _react.createElement.apply(undefined, [_reactNative.Text, { ref: function ref(component) {
          _this2._root = component;
        }, style: this.props.style }].concat(_toConsumableArray(nodes)));
    }
  }]);

  return FormattedMessage;
}(_react.Component);

exports.default = FormattedMessage;


FormattedMessage.propTypes = _extends({}, _types.messageFormatPropTypes, {
  message: _react.PropTypes.oneOfType([_react.PropTypes.array, _react.PropTypes.string]).isRequired,
  values: _react.PropTypes.object,
  style: _reactNative.Text.propTypes.style
});

FormattedMessage.contextTypes = {
  globalize: _types.globalizeShape
};