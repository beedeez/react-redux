'use strict';

exports.__esModule = true;
exports.nativeConnect = exports.updateRouteStack = exports.connect = exports.Provider = undefined;

var _Provider = require('./components/Provider');

var _Provider2 = _interopRequireDefault(_Provider);

var _connect = require('./components/connect');

var _connect2 = _interopRequireDefault(_connect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Provider = _Provider2.default;
exports.connect = _connect2.default;
exports.updateRouteStack = _connect.updateRouteStack;
exports.nativeConnect = _connect.connectForNative;