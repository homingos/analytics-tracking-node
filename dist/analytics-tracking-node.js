(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@adjustcom/adjust-web-sdk"), require("react-gtm-module"), require("uuid"));
	else if(typeof define === 'function' && define.amd)
		define(["@adjustcom/adjust-web-sdk", "react-gtm-module", "uuid"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("@adjustcom/adjust-web-sdk"), require("react-gtm-module"), require("uuid")) : factory(root["@adjustcom/adjust-web-sdk"], root["react-gtm-module"], root["uuid"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE__694__, __WEBPACK_EXTERNAL_MODULE__273__, __WEBPACK_EXTERNAL_MODULE__459__) {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 651:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.adjust = adjust;
exports.adjustEvent = adjustEvent;
exports["default"] = void 0;
exports.init = init;
exports.tagManager = tagManager;

var Adjust = _interopRequireWildcard(__webpack_require__(694));

var _reactGtmModule = _interopRequireDefault(__webpack_require__(273));

var _uuid = __webpack_require__(459);

var _warn = _interopRequireDefault(__webpack_require__(543));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * adjust:
 * Adjust init set method
 * @param {String} enviornment - enviornment can be either `sandbox` or `production`
 * @param {String} adjustToken - App Token recieved from Adjust.com
 */
function adjust(enviornment, adjustToken) {
  var adjustinit = Adjust.initSdk({
    appToken: adjustToken,
    environment: enviornment === 'production' ? enviornment : 'sandbox',
    logLevel: enviornment === 'production' ? 'none' : 'verbose'
  });
  return adjustinit;
}
/**
 * adjustEvent:
 * Adjust event function
 * @param {String} EventToken - Event Token recieved from Adjust.com
 * @param {Object} params - params to pass for adjust events
 */


function adjustEvent(EventToken, eventName, eventAttributes) {
  var timeStamp = new Date().toJSON().split('.').slice(0, -1).toString();
  var uuid = (0, _uuid.v4)();
  var event = Adjust.trackEvent({
    eventToken: EventToken,
    partnerParams: [{
      key: 'name',
      value: eventName
    }, {
      key: 'attributes',
      value: eventAttributes
    }, {
      key: 'date',
      value: timeStamp
    }, {
      key: 'uuid',
      value: uuid
    }]
  });
  return event;
}
/**
 * tagManager:
 * Tag Manager event
 * @param {Object} tagManagerArgs - Google Tag manager Arguments
 */


function tagManager(tagManagerArgs) {
  return _reactGtmModule["default"].initialize(tagManagerArgs);
}
/**
 * tagManager:
 * Tag Manager event
 * @param {Object} tagManagerArgs - Google Tag manager Arguments
 */


function init(_ref) {
  var _ref$enviornment = _ref.enviornment,
      enviornment = _ref$enviornment === void 0 ? 'sandbox' : _ref$enviornment,
      adjustToken = _ref.adjustToken,
      tagManagerArgs = _ref.tagManagerArgs;

  if (enviornment === 'sandbox') {
    (0, _warn["default"])('Using sandbox Enviornment !!');
  }

  if (adjustToken) adjust(enviornment, adjustToken);
  if (tagManagerArgs) tagManager(tagManagerArgs);
}

var _default = {
  init: init,
  tagManager: tagManager,
  adjustEvent: adjustEvent,
  adjust: adjust
};
exports["default"] = _default;

/***/ }),

/***/ 543:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var warn = function warn(warning) {
  console.warn('[analytics-tracking]', warning);
};

var _default = warn;
exports["default"] = _default;

/***/ }),

/***/ 694:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__694__;

/***/ }),

/***/ 273:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__273__;

/***/ }),

/***/ 459:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__459__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.tagManager = exports.init = exports["default"] = exports.adjustEvent = exports.adjust = void 0;

var Defaults = _interopRequireWildcard(__webpack_require__(651));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var init = Defaults.init;
exports.init = init;
var tagManager = Defaults.tagManager;
exports.tagManager = tagManager;
var adjustEvent = Defaults.adjustEvent;
exports.adjustEvent = adjustEvent;
var adjust = Defaults.adjust;
exports.adjust = adjust;

var _default = _objectSpread({}, Defaults);

exports["default"] = _default;
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});