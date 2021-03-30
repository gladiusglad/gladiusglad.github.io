webpackHotUpdate_N_E("pages/index",{

/***/ "./components/section/index.tsx":
/*!**************************************!*\
  !*** ./components/section/index.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Section; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../container */ "./components/container/index.tsx");
/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.module.scss */ "./components/section/style.module.scss");
/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_module_scss__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\joshm\\Documents\\_MY-PROJECTS\\gladiusglad.github.io\\components\\section\\index.tsx";



var backTitleStartLength = 2,
    backTitleEndRepeat = 2;
function Section(_ref) {
  var title = _ref.title,
      _ref$gray = _ref.gray,
      gray = _ref$gray === void 0 ? true : _ref$gray,
      children = _ref.children;
  var backTitle = title.toLowerCase(),
      backTitleStart = backTitle.substring(backTitle.length - backTitleStartLength),
      backTitleEnd = backTitle.repeat(backTitleEndRepeat);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _style_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.section,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      className: _style_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.backTitle,
      children: [backTitleStart, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: _style_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.bold,
        children: backTitle
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 54
      }, this), backTitleEnd]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_container__WEBPACK_IMPORTED_MODULE_2__["default"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        className: _style_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.title,
        children: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 7
      }, this), children]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 10
  }, this);
}
_c = Section;

var _c;

$RefreshReg$(_c, "Section");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zZWN0aW9uL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJiYWNrVGl0bGVTdGFydExlbmd0aCIsImJhY2tUaXRsZUVuZFJlcGVhdCIsIlNlY3Rpb24iLCJ0aXRsZSIsImdyYXkiLCJjaGlsZHJlbiIsImJhY2tUaXRsZSIsInRvTG93ZXJDYXNlIiwiYmFja1RpdGxlU3RhcnQiLCJzdWJzdHJpbmciLCJsZW5ndGgiLCJiYWNrVGl0bGVFbmQiLCJyZXBlYXQiLCJzdHlsZXMiLCJzZWN0aW9uIiwiYm9sZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBRUEsSUFBTUEsb0JBQW9CLEdBQUcsQ0FBN0I7QUFBQSxJQUNFQyxrQkFBa0IsR0FBRyxDQUR2QjtBQVFlLFNBQVNDLE9BQVQsT0FBd0Y7QUFBQSxNQUF0RUMsS0FBc0UsUUFBdEVBLEtBQXNFO0FBQUEsdUJBQS9EQyxJQUErRDtBQUFBLE1BQS9EQSxJQUErRCwwQkFBeEQsSUFBd0Q7QUFBQSxNQUFsREMsUUFBa0QsUUFBbERBLFFBQWtEO0FBQ3JHLE1BQUlDLFNBQVMsR0FBR0gsS0FBSyxDQUFDSSxXQUFOLEVBQWhCO0FBQUEsTUFDRUMsY0FBYyxHQUFHRixTQUFTLENBQUNHLFNBQVYsQ0FBb0JILFNBQVMsQ0FBQ0ksTUFBVixHQUFtQlYsb0JBQXZDLENBRG5CO0FBQUEsTUFFRVcsWUFBWSxHQUFHTCxTQUFTLENBQUNNLE1BQVYsQ0FBaUJYLGtCQUFqQixDQUZqQjtBQUlBLHNCQUFPO0FBQUssYUFBUyxFQUFFWSx5REFBTSxDQUFDQyxPQUF2QjtBQUFBLDRCQUNMO0FBQUksZUFBUyxFQUFFRCx5REFBTSxDQUFDUCxTQUF0QjtBQUFBLGlCQUFrQ0UsY0FBbEMsZUFBaUQ7QUFBTSxpQkFBUyxFQUFFSyx5REFBTSxDQUFDRSxJQUF4QjtBQUFBLGtCQUErQlQ7QUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUFqRCxFQUFrR0ssWUFBbEc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREssZUFFTCxxRUFBQyxrREFBRDtBQUFBLDhCQUNFO0FBQUksaUJBQVMsRUFBRUUseURBQU0sQ0FBQ1YsS0FBdEI7QUFBQSxrQkFBOEJBO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixFQUVHRSxRQUZIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBT0Q7S0FadUJILE8iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMzgxYmYyM2RhZWQyYWVlM2Y5ZGIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tICcuLi9jb250YWluZXInXHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGUubW9kdWxlLnNjc3MnXHJcblxyXG5jb25zdCBiYWNrVGl0bGVTdGFydExlbmd0aCA9IDIsXHJcbiAgYmFja1RpdGxlRW5kUmVwZWF0ID0gMjtcclxuXHJcbmludGVyZmFjZSBTZWN0aW9uUHJvcHMge1xyXG4gIHRpdGxlOiBzdHJpbmcsXHJcbiAgZ3JheT86IGJvb2xlYW5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VjdGlvbih7dGl0bGUsIGdyYXkgPSB0cnVlLCBjaGlsZHJlbn06IFJlYWN0LlByb3BzV2l0aENoaWxkcmVuPFNlY3Rpb25Qcm9wcz4pIHtcclxuICBsZXQgYmFja1RpdGxlID0gdGl0bGUudG9Mb3dlckNhc2UoKSxcclxuICAgIGJhY2tUaXRsZVN0YXJ0ID0gYmFja1RpdGxlLnN1YnN0cmluZyhiYWNrVGl0bGUubGVuZ3RoIC0gYmFja1RpdGxlU3RhcnRMZW5ndGgpLFxyXG4gICAgYmFja1RpdGxlRW5kID0gYmFja1RpdGxlLnJlcGVhdChiYWNrVGl0bGVFbmRSZXBlYXQpO1xyXG5cclxuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zZWN0aW9ufT5cclxuICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy5iYWNrVGl0bGV9PntiYWNrVGl0bGVTdGFydH08c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5ib2xkfT57YmFja1RpdGxlfTwvc3Bhbj57YmFja1RpdGxlRW5kfTwvaDE+XHJcbiAgICA8Q29udGFpbmVyPlxyXG4gICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9Pnt0aXRsZX08L2gxPlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICA8L2Rpdj5cclxufSJdLCJzb3VyY2VSb290IjoiIn0=