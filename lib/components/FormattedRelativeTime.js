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

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormattedRelativeTime = function (_Component) {
  _inherits(FormattedRelativeTime, _Component);

  function FormattedRelativeTime(props, context) {
    _classCallCheck(this, FormattedRelativeTime);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(FormattedRelativeTime).call(this, props, context));
  }

  _createClass(FormattedRelativeTime, [{
    key: 'setNativeProps',
    value: function setNativeProps(nativeProps) {
      this._root.setNativeProps(nativeProps);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var value = this.props.value;
      var unit = this.props.unit;

      if (value instanceof Date) {
        var momentValue = (0, _moment2.default)(value);
        var now = (0, _moment2.default)();

        if (unit === 'best') {
          var units = ['year', 'month', 'week', 'day', 'hour', 'minute', 'second'];

          for (var i = 0, l = units.length; i < l; i++) {
            var diff = momentValue.diff(now, units[i]);

            if (diff >= 1 || diff <= -1 || units[i] === 'second') {
              value = diff;
              unit = units[i];
              break;
            }
          }
        } else {
          value = momentValue.diff(now, unit);
        }
      }

      // Globalize really doesn't like incorrect values
      if (unit === 'best') {
        unit = 'second';
      }

      var formatRelativeTime = this.context.globalize.getRelativeTimeFormatter(unit, { form: this.props.form });

      var formattedRelativeTime = this.props.value instanceof Date ? formatRelativeTime(value) : '';

      return _react2.default.createElement(
        _reactNative.Text,
        {
          ref: function ref(component) {
            _this2._root = component;
          },
          style: this.props.style },
        formattedRelativeTime
      );
    }
  }]);

  return FormattedRelativeTime;
}(_react.Component);

exports.default = FormattedRelativeTime;


FormattedRelativeTime.propTypes = _extends({}, _types.relativeTimeFormatPropTypes, {
  unit: _react.PropTypes.oneOf(['second', 'minute', 'hour', 'day', 'week', 'month', 'year', 'best']).isRequired,
  value: _react.PropTypes.any.isRequired,
  form: _react.PropTypes.oneOf(['short', 'narrow', 0, false]),
  style: _reactNative.Text.propTypes.style
});

FormattedRelativeTime.contextTypes = {
  globalize: _types.globalizeShape
};