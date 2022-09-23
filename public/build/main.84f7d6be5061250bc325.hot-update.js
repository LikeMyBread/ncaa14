"use strict";
self["webpackHotUpdate"]("main",{

/***/ "./App.tsx":
/*!*****************!*\
  !*** ./App.tsx ***!
  \*****************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ App; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ "../node_modules/@mui/material/InputLabel/InputLabel.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ "../node_modules/@mui/material/Select/Select.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ "../node_modules/@mui/material/MenuItem/MenuItem.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "../node_modules/@mui/material/Rating/Rating.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ "../node_modules/@mui/material/Input/Input.js");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.css */ "./App.css");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "../node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../node_modules/react-refresh/runtime.js */ "../node_modules/react-refresh/runtime.js");

var _s2 = __webpack_require__.$Refresh$.signature();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});
function App() {
  _s2();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    position: 'Head Coach',
    prestige: 2,
    rating: 99,
    offer: 1,
    year: new Date().getFullYear()
  }),
      _useState2 = _slicedToArray(_useState, 2),
      values = _useState2[0],
      setValues = _useState2[1];

  function updateOffer(change) {
    var updatedValues = _objectSpread(_objectSpread({}, values), change);

    var predictionRating = 0;
    var predictionPrestige = 0;
    var prediction2013 = 0; // Calculate a base value based on the school data.

    if (updatedValues.position === "Head Coach") {
      predictionRating = 3508 * Math.exp(0.0754 * updatedValues.rating);
      predictionPrestige = 635330 * updatedValues.prestige - 108038;
      prediction2013 = 0.4927441715 * predictionRating + 0.5254323619 * predictionPrestige - 115931.163;
    } else if (updatedValues.position === "Offensive Coordinator") {
      predictionRating = 3041 * Math.exp(0.0554 * updatedValues.rating);
      predictionPrestige = 84983 * updatedValues.prestige + 56641;
      prediction2013 = 0.4505756884 * predictionRating + 0.5633165777 * predictionPrestige - 19044.52237;
    } else {
      predictionRating = 1651 * Math.exp(0.0655 * updatedValues.rating);
      predictionPrestige = 116478 * updatedValues.prestige + 24404;
      prediction2013 = 0.3586890779 * predictionRating + 0.6870167964 * predictionPrestige - 29152.95258;
    } // Adjust for inflation.


    var predictionInflation = prediction2013 * 2.20589e-36 * Math.exp(0.0485 * updatedValues.year) / 5545890.20; // Adjust for the popularity of college football over time.

    var predictionPopularity = predictionInflation * (15650000 / (1 + Math.exp(-0.06 * (updatedValues.year - 2023)))) / 5545479;
    updatedValues.offer = predictionPopularity;
    setValues(updatedValues);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _App_css__WEBPACK_IMPORTED_MODULE_1__["default"].container
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "NCAA 14 Contract Estimator"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], {
    id: "position-label"
  }, "Position"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
    labelid: "position-label",
    id: "position",
    value: values.position,
    label: "Position",
    onChange: function onChange(e) {
      updateOffer({
        position: e.target.value
      });
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    value: "Head Coach"
  }, "Head Coach"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    value: "Offensive Coordinator"
  }, "Offensive Coordinator"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    value: "Defensive Coordinator"
  }, "Defensive Coordinator")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], {
    id: "prestige-label"
  }, "School Prestige"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    name: "prestige",
    max: 6,
    value: values.prestige,
    onChange: function onChange(e) {
      updateOffer({
        prestige: e.target.value
      });
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], {
    id: "rating-label"
  }, "Rating"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    labelid: "rating-label",
    id: "rating",
    name: "rating",
    label: "Rating",
    type: "number",
    value: values.rating,
    onChange: function onChange(e) {
      updateOffer({
        rating: e.target.value
      });
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], {
    id: "year-label"
  }, "Year"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    labelId: "year-label",
    id: "year",
    name: "year",
    label: "Year",
    type: "number",
    value: values.year,
    onChange: function onChange(e) {
      updateOffer({
        year: e.target.value
      });
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "Total Offer: ", formatter.format(values.offer))));
}

_s2(App, "FwB08lQOqW6G4zSXJfTOJ2FFpnI=");

_c = App;

var _c;

__webpack_require__.$Refresh$.register(_c, "App");

var $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
var $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		var errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		var testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "10517203318b717ef795"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=main.84f7d6be5061250bc325.hot-update.js.map