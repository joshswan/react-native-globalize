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

var FormattedPlural = function (_Component) {
  _inherits(FormattedPlural, _Component);

  function FormattedPlural(props, context) {
    _classCallCheck(this, FormattedPlural);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(FormattedPlural).call(this, props, context));
  }

  _createClass(FormattedPlural, [{
    key: 'setNativeProps',
    value: function setNativeProps(nativeProps) {
      this._root.setNativeProps(nativeProps);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var formatPlural = this.context.globalize.getPluralGenerator(this.props);

      var pluralCategory = typeof this.props.value === 'number' ? formatPlural(this.props.value) : '';
      var formattedPlural = this.props[pluralCategory] || this.props.other;

      return _react2.default.createElement(
        _reactNative.Text,
        {
          ref: function ref(component) {
            _this2._root = component;
          },
          style: this.props.style },
        formattedPlural
      );
    }
  }]);

  return FormattedPlural;
}(_react.Component);

exports.default = FormattedPlural;


FormattedPlural.propTypes = _extends({}, _types.pluralFormatPropTypes, {
  value: _react.PropTypes.any.isRequired,
  other: _react.PropTypes.node.isRequired,
  zero: _react.PropTypes.node,
  one: _react.PropTypes.node,
  two: _react.PropTypes.node,
  few: _react.PropTypes.node,
  many: _react.PropTypes.node,
  style: _reactNative.Text.propTypes.style
});

FormattedPlural.contextTypes = {
  globalize: _types.globalizeShape
};