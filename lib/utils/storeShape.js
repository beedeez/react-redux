'use strict';

exports.__esModule = true;

var _reactNative = require('react-native');

exports["default"] = _reactNative.PropTypes.shape({
  subscribe: _reactNative.PropTypes.func.isRequired,
  dispatch: _reactNative.PropTypes.func.isRequired,
  getState: _reactNative.PropTypes.func.isRequired
});