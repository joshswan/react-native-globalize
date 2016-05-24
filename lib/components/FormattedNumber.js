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

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

var _types = require('../types');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormattedNumber = function (_Component) {
  _inherits(FormattedNumber, _Component);

  function FormattedNumber(props, context) {
    _classCallCheck(this, FormattedNumber);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(FormattedNumber).call(this, props, context));
  }

  _createClass(FormattedNumber, [{
    key: 'setNativeProps',
    value: function setNativeProps(nativeProps) {
      this._root.setNativeProps(nativeProps);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var formatNumber = this.context.globalize.getNumberFormatter(this.props);

      var formattedNumber = typeof this.props.value === 'number' ? formatNumber(this.props.value) : '';

      return _react2.default.createElement(
        _reactNative.Text,
        {
          ref: function ref(component) {
            _this2._root = component;
          },
          style: this.props.style },
        formattedNumber
      );
    }
  }]);

  return FormattedNumber;
}(_react.Component);

exports.default = FormattedNumber;


FormattedNumber.propTypes = _extends({}, _types.numberFormatPropTypes, {
  value: _react.PropTypes.any.isRequired,
  style: _reactNative.Text.propTypes.style
});

FormattedNumber.contextTypes = {
  globalize: _types.globalizeShape
};