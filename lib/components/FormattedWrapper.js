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

var _types = require('../types');

var _globalize = require('../globalize');

var _globalize2 = _interopRequireDefault(_globalize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormattedWrapper = function (_Component) {
  _inherits(FormattedWrapper, _Component);

  function FormattedWrapper(props) {
    _classCallCheck(this, FormattedWrapper);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(FormattedWrapper).call(this, props));

    if (props.cldr) {
      _globalize2.default.load(props.cldr);
    }

    if (props.messages) {
      _globalize2.default.loadMessages(props.messages);
    }

    var instance = new _globalize2.default(props.locale, props.currency);

    _this.state = {
      globalize: instance
    };
    return _this;
  }

  _createClass(FormattedWrapper, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        globalize: this.state.globalize
      };
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.locale !== nextProps.locale || this.props.currency !== nextProps.currency) {
        var instance = new _globalize2.default(nextProps.locale, nextProps.currency);

        this.setState({
          globalize: instance
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return this.props.children;
    }
  }]);

  return FormattedWrapper;
}(_react.Component);

exports.default = FormattedWrapper;


FormattedWrapper.propTypes = _extends({}, _types.globalizePropTypes, {
  cldr: _react.PropTypes.array,
  children: _react.PropTypes.node,
  currency: _react.PropTypes.string,
  locale: _react.PropTypes.string,
  messages: _react.PropTypes.object
});

FormattedWrapper.childContextTypes = {
  globalize: _types.globalizeShape
};

FormattedWrapper.defaultProps = {
  locale: 'en',
  currency: 'USD'
};