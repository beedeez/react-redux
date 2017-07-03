(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("redux"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "redux"], factory);
	else if(typeof exports === 'object')
		exports["ReactRedux"] = factory(require("react"), require("redux"));
	else
		root["ReactRedux"] = factory(root["React"], root["Redux"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_22__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.nativeConnect = exports.updateRouteStack = exports.connect = exports.Provider = undefined;

	var _Provider = __webpack_require__(6);

	var _Provider2 = _interopRequireDefault(_Provider);

	var _connect = __webpack_require__(7);

	var _connect2 = _interopRequireDefault(_connect);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	exports.Provider = _Provider2["default"];
	exports.connect = _connect2["default"];
	exports.updateRouteStack = _connect.updateRouteStack;
	exports.nativeConnect = _connect.connectForNative;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2015-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule react-native-implementation
	 * @flow
	 */
	'use strict';

	const invariant = __webpack_require__(21);

	// Export React, plus some native additions.
	const ReactNative = {
	  // Components
	  get AccessibilityInfo() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"AccessibilityInfo\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get ActivityIndicator() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"ActivityIndicator\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get ART() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"ReactNativeART\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get Button() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"Button\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get DatePickerIOS() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"DatePickerIOS\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get DrawerLayoutAndroid() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"DrawerLayoutAndroid\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get FlatList() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"FlatList\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get Image() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"Image\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get ImageEditor() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"ImageEditor\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get ImageStore() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"ImageStore\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get KeyboardAvoidingView() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"KeyboardAvoidingView\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get ListView() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"ListView\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get Modal() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"Modal\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get NavigatorIOS() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"NavigatorIOS\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get Picker() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"Picker\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get PickerIOS() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"PickerIOS\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get ProgressBarAndroid() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"ProgressBarAndroid\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get ProgressViewIOS() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"ProgressViewIOS\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get ScrollView() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"ScrollView\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get SectionList() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"SectionList\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get SegmentedControlIOS() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"SegmentedControlIOS\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get Slider() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"Slider\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get SnapshotViewIOS() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"SnapshotViewIOS\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get Switch() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"Switch\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get RefreshControl() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"RefreshControl\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get StatusBar() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"StatusBar\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get SwipeableListView() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"SwipeableListView\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get TabBarIOS() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"TabBarIOS\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get Text() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"Text\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get TextInput() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"TextInput\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get ToastAndroid() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"ToastAndroid\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get ToolbarAndroid() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"ToolbarAndroid\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get Touchable() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"Touchable\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get TouchableHighlight() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"TouchableHighlight\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get TouchableNativeFeedback() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"TouchableNativeFeedback\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get TouchableOpacity() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"TouchableOpacity\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get TouchableWithoutFeedback() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"TouchableWithoutFeedback\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get View() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"View\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get ViewPagerAndroid() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"ViewPagerAndroid\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get VirtualizedList() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"VirtualizedList\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get WebView() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"WebView\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },

	  // APIs
	  get ActionSheetIOS() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"ActionSheetIOS\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get AdSupportIOS() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"AdSupportIOS\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get Alert() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"Alert\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get AlertIOS() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"AlertIOS\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get Animated() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"Animated\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get AppRegistry() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"AppRegistry\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get AppState() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"AppState\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get AsyncStorage() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"AsyncStorage\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get BackAndroid() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"BackAndroid\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); }, // deprecated: use BackHandler instead
	  get BackHandler() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"BackHandler\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get CameraRoll() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"CameraRoll\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get Clipboard() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"Clipboard\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get DatePickerAndroid() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"DatePickerAndroid\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get DeviceInfo() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"DeviceInfo\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get Dimensions() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"Dimensions\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get Easing() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"Easing\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get findNodeHandle() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"ReactNative\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())).findNodeHandle; },
	  get I18nManager() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"I18nManager\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get ImagePickerIOS() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"ImagePickerIOS\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get InteractionManager() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"InteractionManager\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get Keyboard() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"Keyboard\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get LayoutAnimation() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"LayoutAnimation\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get Linking() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"Linking\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get NativeEventEmitter() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"NativeEventEmitter\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get NetInfo() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"NetInfo\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get PanResponder() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"PanResponder\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get PermissionsAndroid() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"PermissionsAndroid\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get PixelRatio() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"PixelRatio\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get PushNotificationIOS() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"PushNotificationIOS\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get Settings() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"Settings\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get Share() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"Share\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get StatusBarIOS() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"StatusBarIOS\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get StyleSheet() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"StyleSheet\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get Systrace() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"Systrace\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get TimePickerAndroid() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"TimePickerAndroid\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get TVEventHandler() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"TVEventHandler\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get UIManager() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"UIManager\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get Vibration() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"Vibration\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get VibrationIOS() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"VibrationIOS\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },

	  // Plugins
	  get DeviceEventEmitter() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"RCTDeviceEventEmitter\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get NativeAppEventEmitter() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"RCTNativeAppEventEmitter\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get NativeModules() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"NativeModules\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get Platform() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"Platform\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get processColor() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"processColor\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get requireNativeComponent() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"requireNativeComponent\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get takeSnapshot() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"takeSnapshot\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },

	  // Prop Types
	  get ColorPropType() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"ColorPropType\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get EdgeInsetsPropType() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"EdgeInsetsPropType\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get PointPropType() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"PointPropType\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },
	  get ViewPropTypes() { return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"ViewPropTypes\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())); },

	  // Deprecated
	  get Navigator() {
	    invariant(
	      false,
	      'Navigator is deprecated and has been removed from this package. It can now be installed ' +
	      'and imported from `react-native-deprecated-custom-components` instead of `react-native`. ' +
	      'Learn about alternative navigation solutions at http://facebook.github.io/react-native/docs/navigation.html'
	    );
	  }
	};

	module.exports = ReactNative;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _reactNative = __webpack_require__(1);

	exports["default"] = _reactNative.PropTypes.shape({
	  subscribe: _reactNative.PropTypes.func.isRequired,
	  dispatch: _reactNative.PropTypes.func.isRequired,
	  getState: _reactNative.PropTypes.func.isRequired
	});

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports["default"] = warning;
	/**
	 * Prints a warning in the console if it exists.
	 *
	 * @param {String} message The warning message.
	 * @returns {void}
	 */
	function warning(message) {
	  /* eslint-disable no-console */
	  if (typeof console !== 'undefined' && typeof console.error === 'function') {
	    console.error(message);
	  }
	  /* eslint-enable no-console */
	  try {
	    // This error was thrown as a convenience so that if you enable
	    // "break on all exceptions" in your console,
	    // it would pause the execution at this line.
	    throw new Error(message);
	    /* eslint-disable no-empty */
	  } catch (e) {}
	  /* eslint-enable no-empty */
	}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	var root = __webpack_require__(18);

	/** Built-in value references. */
	var Symbol = root.Symbol;

	module.exports = Symbol;


/***/ }),
/* 5 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports["default"] = undefined;

	var _react = __webpack_require__(5);

	var _reactNative = __webpack_require__(1);

	var _storeShape = __webpack_require__(2);

	var _storeShape2 = _interopRequireDefault(_storeShape);

	var _warning = __webpack_require__(3);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var didWarnAboutReceivingStore = false;
	function warnAboutReceivingStore() {
	  if (didWarnAboutReceivingStore) {
	    return;
	  }
	  didWarnAboutReceivingStore = true;

	  (0, _warning2["default"])('<Provider> does not support changing `store` on the fly. ' + 'It is most likely that you see this error because you updated to ' + 'Redux 2.x and React Redux 2.x which no longer hot reload reducers ' + 'automatically. See https://github.com/reactjs/react-redux/releases/' + 'tag/v2.0.0 for the migration instructions.');
	}

	var Provider = function (_Component) {
	  _inherits(Provider, _Component);

	  Provider.prototype.getChildContext = function getChildContext() {
	    return { store: this.store };
	  };

	  function Provider(props, context) {
	    _classCallCheck(this, Provider);

	    var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

	    _this.store = props.store;
	    return _this;
	  }

	  Provider.prototype.render = function render() {
	    return _react.Children.only(this.props.children);
	  };

	  return Provider;
	}(_react.Component);

	exports["default"] = Provider;


	if (true) {
	  Provider.prototype.componentWillReceiveProps = function (nextProps) {
	    var store = this.store;
	    var nextStore = nextProps.store;


	    if (store !== nextStore) {
	      warnAboutReceivingStore();
	    }
	  };
	}

	Provider.propTypes = {
	  store: _storeShape2["default"].isRequired,
	  children: _reactNative.PropTypes.element.isRequired
	};
	Provider.childContextTypes = {
	  store: _storeShape2["default"].isRequired
	};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.updateRouteStack = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.connectForNative = connectForNative;
	exports["default"] = connect;

	var _react = __webpack_require__(5);

	var _reactNative = __webpack_require__(1);

	var _storeShape = __webpack_require__(2);

	var _storeShape2 = _interopRequireDefault(_storeShape);

	var _shallowEqual = __webpack_require__(8);

	var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

	var _wrapActionCreators = __webpack_require__(9);

	var _wrapActionCreators2 = _interopRequireDefault(_wrapActionCreators);

	var _warning = __webpack_require__(3);

	var _warning2 = _interopRequireDefault(_warning);

	var _isPlainObject = __webpack_require__(20);

	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

	var _hoistNonReactStatics = __webpack_require__(10);

	var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

	var _invariant = __webpack_require__(11);

	var _invariant2 = _interopRequireDefault(_invariant);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var defaultMapStateToProps = function defaultMapStateToProps(state) {
		return {};
	}; // eslint-disable-line no-unused-vars
	var defaultMapDispatchToProps = function defaultMapDispatchToProps(dispatch) {
		return { dispatch: dispatch };
	};
	var defaultMergeProps = function defaultMergeProps(stateProps, dispatchProps, parentProps) {
		return _extends({}, parentProps, stateProps, dispatchProps);
	};

	function getDisplayName(WrappedComponent) {
		return WrappedComponent.displayName || WrappedComponent.name || 'Component';
	}

	var errorObject = { value: null };
	function tryCatch(fn, ctx) {
		try {
			return fn.apply(ctx);
		} catch (e) {
			errorObject.value = e;
			return errorObject;
		}
	}

	// Helps track hot reloading.
	var nextVersion = 0;
	var routeStack = [];
	var updateRouteStack = exports.updateRouteStack = function updateRouteStack(stack) {
		return routeStack = stack;
	};
	function connectForNative(mapStateToProps, mapDispatchToProps, mergeProps) {
		var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

		options.skipUpdatesCondition = function (props, context) {
			if (routeStack && props && props.route && props.route.name !== routeStack[routeStack.length - 1].name) {
				return false;
			}
			if (routeStack && context && context.currentRoute && context.currentRoute.name !== routeStack[routeStack.length - 1].name) {
				return false;
			}
			if (routeStack && context && context.currentRoute && context.currentRoute.lessonId !== routeStack[routeStack.length - 1].lessonId) {
				return false;
			}
			// Skip updates if tab is not inside an active route, unless, forced ny props
			if (context.isInsideInactiveRoute && context.isInsideInactiveRoute(context.store, props)) {
				return false;
			}

			return true;
		};
		return connect(mapStateToProps, mapDispatchToProps, mergeProps, options);
	}

	function connect(mapStateToProps, mapDispatchToProps, mergeProps) {
		var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

		var shouldSubscribe = Boolean(mapStateToProps);
		var mapState = mapStateToProps || defaultMapStateToProps;

		var mapDispatch = void 0;
		if (typeof mapDispatchToProps === 'function') {
			mapDispatch = mapDispatchToProps;
		} else if (!mapDispatchToProps) {
			mapDispatch = defaultMapDispatchToProps;
		} else {
			mapDispatch = (0, _wrapActionCreators2["default"])(mapDispatchToProps);
		}

		var finalMergeProps = mergeProps || defaultMergeProps;
		var _options$pure = options.pure,
		    pure = _options$pure === undefined ? true : _options$pure,
		    _options$withRef = options.withRef,
		    withRef = _options$withRef === undefined ? false : _options$withRef;

		var checkMergedEquals = pure && finalMergeProps !== defaultMergeProps;

		// Helps track hot reloading.
		var version = nextVersion++;

		return function wrapWithConnect(WrappedComponent) {
			var connectDisplayName = 'Connect(' + getDisplayName(WrappedComponent) + ')';

			function checkStateShape(props, methodName) {
				if (!(0, _isPlainObject2["default"])(props)) {
					(0, _warning2["default"])(methodName + '() in ' + connectDisplayName + ' must return a plain object. ' + ('Instead received ' + props + '.'));
				}
			}

			function computeMergedProps(stateProps, dispatchProps, parentProps) {
				var mergedProps = finalMergeProps(stateProps, dispatchProps, parentProps);
				if (true) {
					checkStateShape(mergedProps, 'mergeProps');
				}
				return mergedProps;
			}

			var Connect = function (_Component) {
				_inherits(Connect, _Component);

				Connect.prototype.shouldComponentUpdate = function shouldComponentUpdate() {
					return !pure || this.haveOwnPropsChanged || this.hasStoreStateChanged;
				};

				function Connect(props, context) {
					_classCallCheck(this, Connect);

					var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

					_this.version = version;
					_this.store = props.store || context.store;

					(0, _invariant2["default"])(_this.store, 'Could not find "store" in either the context or ' + ('props of "' + connectDisplayName + '". ') + 'Either wrap the root component in a <Provider>, ' + ('or explicitly pass "store" as a prop to "' + connectDisplayName + '".'));

					var storeState = _this.store.getState();
					_this.state = { storeState: storeState };
					_this.clearCache();
					return _this;
				}

				Connect.prototype.computeStateProps = function computeStateProps(store, props) {
					if (!this.finalMapStateToProps) {
						return this.configureFinalMapState(store, props);
					}

					var state = store.getState();
					var stateProps = this.doStatePropsDependOnOwnProps ? this.finalMapStateToProps(state, props) : this.finalMapStateToProps(state);

					if (true) {
						checkStateShape(stateProps, 'mapStateToProps');
					}
					return stateProps;
				};

				Connect.prototype.configureFinalMapState = function configureFinalMapState(store, props) {
					var mappedState = mapState(store.getState(), props);
					var isFactory = typeof mappedState === 'function';

					this.finalMapStateToProps = isFactory ? mappedState : mapState;
					this.doStatePropsDependOnOwnProps = this.finalMapStateToProps.length !== 1;

					if (isFactory) {
						return this.computeStateProps(store, props);
					}

					if (true) {
						checkStateShape(mappedState, 'mapStateToProps');
					}
					return mappedState;
				};

				Connect.prototype.computeDispatchProps = function computeDispatchProps(store, props) {
					if (!this.finalMapDispatchToProps) {
						return this.configureFinalMapDispatch(store, props);
					}

					var dispatch = store.dispatch;

					var dispatchProps = this.doDispatchPropsDependOnOwnProps ? this.finalMapDispatchToProps(dispatch, props) : this.finalMapDispatchToProps(dispatch);

					if (true) {
						checkStateShape(dispatchProps, 'mapDispatchToProps');
					}
					return dispatchProps;
				};

				Connect.prototype.configureFinalMapDispatch = function configureFinalMapDispatch(store, props) {
					var mappedDispatch = mapDispatch(store.dispatch, props);
					var isFactory = typeof mappedDispatch === 'function';

					this.finalMapDispatchToProps = isFactory ? mappedDispatch : mapDispatch;
					this.doDispatchPropsDependOnOwnProps = this.finalMapDispatchToProps.length !== 1;

					if (isFactory) {
						return this.computeDispatchProps(store, props);
					}

					if (true) {
						checkStateShape(mappedDispatch, 'mapDispatchToProps');
					}
					return mappedDispatch;
				};

				Connect.prototype.updateStatePropsIfNeeded = function updateStatePropsIfNeeded() {
					var nextStateProps = this.computeStateProps(this.store, this.props);
					if (this.stateProps && (0, _shallowEqual2["default"])(nextStateProps, this.stateProps)) {
						return false;
					}

					this.stateProps = nextStateProps;
					return true;
				};

				Connect.prototype.updateDispatchPropsIfNeeded = function updateDispatchPropsIfNeeded() {
					var nextDispatchProps = this.computeDispatchProps(this.store, this.props);
					if (this.dispatchProps && (0, _shallowEqual2["default"])(nextDispatchProps, this.dispatchProps)) {
						return false;
					}

					this.dispatchProps = nextDispatchProps;
					return true;
				};

				Connect.prototype.updateMergedPropsIfNeeded = function updateMergedPropsIfNeeded() {
					var nextMergedProps = computeMergedProps(this.stateProps, this.dispatchProps, this.props);
					if (this.mergedProps && checkMergedEquals && (0, _shallowEqual2["default"])(nextMergedProps, this.mergedProps)) {
						return false;
					}

					this.mergedProps = nextMergedProps;
					return true;
				};

				Connect.prototype.isSubscribed = function isSubscribed() {
					return typeof this.unsubscribe === 'function';
				};

				Connect.prototype.trySubscribe = function trySubscribe() {
					if (shouldSubscribe && !this.unsubscribe) {
						this.unsubscribe = this.store.subscribe(this.handleChange.bind(this));
						this.handleChange();
					}
				};

				Connect.prototype.tryUnsubscribe = function tryUnsubscribe() {
					if (this.unsubscribe) {
						this.unsubscribe();
						this.unsubscribe = null;
					}
				};

				Connect.prototype.componentDidMount = function componentDidMount() {
					this.trySubscribe();
				};

				Connect.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
					if (!pure || !(0, _shallowEqual2["default"])(nextProps, this.props)) {
						this.haveOwnPropsChanged = true;
					}
				};

				Connect.prototype.componentWillUnmount = function componentWillUnmount() {
					this.tryUnsubscribe();
					this.clearCache();
				};

				Connect.prototype.clearCache = function clearCache() {
					this.dispatchProps = null;
					this.stateProps = null;
					this.mergedProps = null;
					this.haveOwnPropsChanged = true;
					this.hasStoreStateChanged = true;
					this.haveStatePropsBeenPrecalculated = false;
					this.statePropsPrecalculationError = null;
					this.renderedElement = null;
					this.finalMapDispatchToProps = null;
					this.finalMapStateToProps = null;
				};

				Connect.prototype.handleChange = function handleChange() {
					var skipUpdates = options.skipUpdatesCondition && !options.skipUpdatesCondition.call(this, this.props, this.context);
					if (!this.unsubscribe || skipUpdates) {
						return;
					}

					var storeState = this.store.getState();
					var prevStoreState = this.state.storeState;
					if (pure && prevStoreState === storeState) {
						return;
					}

					if (pure && !this.doStatePropsDependOnOwnProps) {
						var haveStatePropsChanged = tryCatch(this.updateStatePropsIfNeeded, this);
						if (!haveStatePropsChanged) {
							return;
						}
						if (haveStatePropsChanged === errorObject) {
							this.statePropsPrecalculationError = errorObject.value;
						}
						this.haveStatePropsBeenPrecalculated = true;
					}

					this.hasStoreStateChanged = true;
					this.setState({ storeState: storeState });
				};

				Connect.prototype.getWrappedInstance = function getWrappedInstance() {
					(0, _invariant2["default"])(withRef, 'To access the wrapped instance, you need to specify ' + '{ withRef: true } as the fourth argument of the connect() call.');

					return this.refs.wrappedInstance;
				};

				Connect.prototype.render = function render() {
					var haveOwnPropsChanged = this.haveOwnPropsChanged,
					    hasStoreStateChanged = this.hasStoreStateChanged,
					    haveStatePropsBeenPrecalculated = this.haveStatePropsBeenPrecalculated,
					    statePropsPrecalculationError = this.statePropsPrecalculationError,
					    renderedElement = this.renderedElement;


					this.haveOwnPropsChanged = false;
					this.hasStoreStateChanged = false;
					this.haveStatePropsBeenPrecalculated = false;
					this.statePropsPrecalculationError = null;

					if (statePropsPrecalculationError) {
						throw statePropsPrecalculationError;
					}

					var shouldUpdateStateProps = true;
					var shouldUpdateDispatchProps = true;
					if (pure && renderedElement) {
						shouldUpdateStateProps = hasStoreStateChanged || haveOwnPropsChanged && this.doStatePropsDependOnOwnProps;
						shouldUpdateDispatchProps = haveOwnPropsChanged && this.doDispatchPropsDependOnOwnProps;
					}

					var haveStatePropsChanged = false;
					var haveDispatchPropsChanged = false;
					if (haveStatePropsBeenPrecalculated) {
						haveStatePropsChanged = true;
					} else if (shouldUpdateStateProps) {
						haveStatePropsChanged = this.updateStatePropsIfNeeded();
					}
					if (shouldUpdateDispatchProps) {
						haveDispatchPropsChanged = this.updateDispatchPropsIfNeeded();
					}

					var haveMergedPropsChanged = true;
					if (haveStatePropsChanged || haveDispatchPropsChanged || haveOwnPropsChanged) {
						haveMergedPropsChanged = this.updateMergedPropsIfNeeded();
					} else {
						haveMergedPropsChanged = false;
					}

					if (!haveMergedPropsChanged && renderedElement) {
						return renderedElement;
					}

					if (withRef) {
						this.renderedElement = (0, _react.createElement)(WrappedComponent, _extends({}, this.mergedProps, {
							ref: 'wrappedInstance'
						}));
					} else {
						this.renderedElement = (0, _react.createElement)(WrappedComponent, this.mergedProps);
					}

					return this.renderedElement;
				};

				return Connect;
			}(_react.Component);

			Connect.displayName = connectDisplayName;
			Connect.WrappedComponent = WrappedComponent;
			Connect.contextTypes = {
				store: _storeShape2["default"],
				currentRoute: _reactNative.PropTypes.object,
				isInsideInactiveRoute: _reactNative.PropTypes.func
			};
			Connect.propTypes = {
				store: _storeShape2["default"]
			};

			if (true) {
				Connect.prototype.componentWillUpdate = function componentWillUpdate() {
					if (this.version === version) {
						return;
					}

					// We are hot reloading!
					this.version = version;
					this.trySubscribe();
					this.clearCache();
				};
			}

			return (0, _hoistNonReactStatics2["default"])(Connect, WrappedComponent);
		};
	}

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports["default"] = shallowEqual;
	function shallowEqual(objA, objB) {
	  if (objA === objB) {
	    return true;
	  }

	  var keysA = Object.keys(objA);
	  var keysB = Object.keys(objB);

	  if (keysA.length !== keysB.length) {
	    return false;
	  }

	  // Test for A's keys different from B.
	  var hasOwn = Object.prototype.hasOwnProperty;
	  for (var i = 0; i < keysA.length; i++) {
	    if (!hasOwn.call(objB, keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
	      return false;
	    }
	  }

	  return true;
	}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports["default"] = wrapActionCreators;

	var _redux = __webpack_require__(22);

	function wrapActionCreators(actionCreators) {
	  return function (dispatch) {
	    return (0, _redux.bindActionCreators)(actionCreators, dispatch);
	  };
	}

/***/ }),
/* 10 */
/***/ (function(module, exports) {

	/**
	 * Copyright 2015, Yahoo! Inc.
	 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
	 */
	'use strict';

	var REACT_STATICS = {
	    childContextTypes: true,
	    contextTypes: true,
	    defaultProps: true,
	    displayName: true,
	    getDefaultProps: true,
	    mixins: true,
	    propTypes: true,
	    type: true
	};

	var KNOWN_STATICS = {
	    name: true,
	    length: true,
	    prototype: true,
	    caller: true,
	    arguments: true,
	    arity: true
	};

	var isGetOwnPropertySymbolsAvailable = typeof Object.getOwnPropertySymbols === 'function';

	module.exports = function hoistNonReactStatics(targetComponent, sourceComponent, customStatics) {
	    if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components
	        var keys = Object.getOwnPropertyNames(sourceComponent);

	        /* istanbul ignore else */
	        if (isGetOwnPropertySymbolsAvailable) {
	            keys = keys.concat(Object.getOwnPropertySymbols(sourceComponent));
	        }

	        for (var i = 0; i < keys.length; ++i) {
	            if (!REACT_STATICS[keys[i]] && !KNOWN_STATICS[keys[i]] && (!customStatics || !customStatics[keys[i]])) {
	                try {
	                    targetComponent[keys[i]] = sourceComponent[keys[i]];
	                } catch (error) {

	                }
	            }
	        }
	    }

	    return targetComponent;
	};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	var invariant = function(condition, format, a, b, c, d, e, f) {
	  if (true) {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error(
	        'Minified exception occurred; use the non-minified dev environment ' +
	        'for the full error message and additional helpful warnings.'
	      );
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(
	        format.replace(/%s/g, function() { return args[argIndex++]; })
	      );
	      error.name = 'Invariant Violation';
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	};

	module.exports = invariant;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(4),
	    getRawTag = __webpack_require__(15),
	    objectToString = __webpack_require__(16);

	/** `Object#toString` result references. */
	var nullTag = '[object Null]',
	    undefinedTag = '[object Undefined]';

	/** Built-in value references. */
	var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

	/**
	 * The base implementation of `getTag` without fallbacks for buggy environments.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function baseGetTag(value) {
	  if (value == null) {
	    return value === undefined ? undefinedTag : nullTag;
	  }
	  return (symToStringTag && symToStringTag in Object(value))
	    ? getRawTag(value)
	    : objectToString(value);
	}

	module.exports = baseGetTag;


/***/ }),
/* 13 */
/***/ (function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

	module.exports = freeGlobal;

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()) || Function('return this')()))

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	var overArg = __webpack_require__(17);

	/** Built-in value references. */
	var getPrototype = overArg(Object.getPrototypeOf, Object);

	module.exports = getPrototype;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(4);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;

	/** Built-in value references. */
	var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

	/**
	 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the raw `toStringTag`.
	 */
	function getRawTag(value) {
	  var isOwn = hasOwnProperty.call(value, symToStringTag),
	      tag = value[symToStringTag];

	  try {
	    value[symToStringTag] = undefined;
	    var unmasked = true;
	  } catch (e) {}

	  var result = nativeObjectToString.call(value);
	  if (unmasked) {
	    if (isOwn) {
	      value[symToStringTag] = tag;
	    } else {
	      delete value[symToStringTag];
	    }
	  }
	  return result;
	}

	module.exports = getRawTag;


/***/ }),
/* 16 */
/***/ (function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;

	/**
	 * Converts `value` to a string using `Object.prototype.toString`.
	 *
	 * @private
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 */
	function objectToString(value) {
	  return nativeObjectToString.call(value);
	}

	module.exports = objectToString;


/***/ }),
/* 17 */
/***/ (function(module, exports) {

	/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function(arg) {
	    return func(transform(arg));
	  };
	}

	module.exports = overArg;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	var freeGlobal = __webpack_require__(13);

	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();

	module.exports = root;


/***/ }),
/* 19 */
/***/ (function(module, exports) {

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return value != null && typeof value == 'object';
	}

	module.exports = isObjectLike;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(12),
	    getPrototype = __webpack_require__(14),
	    isObjectLike = __webpack_require__(19);

	/** `Object#toString` result references. */
	var objectTag = '[object Object]';

	/** Used for built-in method references. */
	var funcProto = Function.prototype,
	    objectProto = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Used to infer the `Object` constructor. */
	var objectCtorString = funcToString.call(Object);

	/**
	 * Checks if `value` is a plain object, that is, an object created by the
	 * `Object` constructor or one with a `[[Prototype]]` of `null`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.8.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * _.isPlainObject(new Foo);
	 * // => false
	 *
	 * _.isPlainObject([1, 2, 3]);
	 * // => false
	 *
	 * _.isPlainObject({ 'x': 0, 'y': 0 });
	 * // => true
	 *
	 * _.isPlainObject(Object.create(null));
	 * // => true
	 */
	function isPlainObject(value) {
	  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
	    return false;
	  }
	  var proto = getPrototype(value);
	  if (proto === null) {
	    return true;
	  }
	  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
	  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
	    funcToString.call(Ctor) == objectCtorString;
	}

	module.exports = isPlainObject;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	var validateFormat = function validateFormat(format) {};

	if (true) {
	  validateFormat = function validateFormat(format) {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  };
	}

	function invariant(condition, format, a, b, c, d, e, f) {
	  validateFormat(format);

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(format.replace(/%s/g, function () {
	        return args[argIndex++];
	      }));
	      error.name = 'Invariant Violation';
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	}

	module.exports = invariant;

/***/ }),
/* 22 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_22__;

/***/ })
/******/ ])
});
;