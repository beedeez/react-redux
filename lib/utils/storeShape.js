'use strict';

exports.__esModule = true;

var _propTypes = require('prop-types');

exports["default"] = _propTypes.PropTypes.shape({
  subscribe: _propTypes.PropTypes.func.isRequired,
  dispatch: _propTypes.PropTypes.func.isRequired,
  getState: _propTypes.PropTypes.func.isRequired
});