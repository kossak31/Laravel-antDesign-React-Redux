"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["NotFoundPage"],{

/***/ "./resources/js/pages/NotFound.jsx":
/*!*****************************************!*\
  !*** ./resources/js/pages/NotFound.jsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var antd_lib_result__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/result */ "./node_modules/antd/lib/result/index.js");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/button */ "./node_modules/antd/lib/button/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_history__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/history */ "./resources/js/utils/history.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");







var NotFound = function NotFound() {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    _utils_history__WEBPACK_IMPORTED_MODULE_1__["default"].replace("/notfound");
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(antd_lib_result__WEBPACK_IMPORTED_MODULE_3__["default"], {
      status: "404",
      title: "404",
      subTitle: "Sorry, the page you visited does not exist.",
      extra: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(antd_lib_button__WEBPACK_IMPORTED_MODULE_4__["default"], {
        href: "/",
        type: "primary",
        children: "Back Home"
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotFound);

/***/ })

}]);