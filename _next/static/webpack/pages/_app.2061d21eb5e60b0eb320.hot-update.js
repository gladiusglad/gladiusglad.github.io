webpackHotUpdate_N_E("pages/_app",{

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_joshm_Documents_MY_PROJECTS_gladiusglad_github_io_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_global_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/global.scss */ "./styles/global.scss");
/* harmony import */ var _styles_global_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_global_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_fontawesome_svg_core_styles_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core/styles.css */ "./node_modules/@fortawesome/fontawesome-svg-core/styles.css");
/* harmony import */ var _fortawesome_fontawesome_svg_core_styles_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_svg_core_styles_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_use_system_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-use-system-theme */ "./node_modules/react-use-system-theme/es/index.js");




var _jsxFileName = "C:\\Users\\joshm\\Documents\\_MY-PROJECTS\\gladiusglad.github.io\\pages\\_app.tsx",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_joshm_Documents_MY_PROJECTS_gladiusglad_github_io_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






function MyApp(_ref) {
  _s();

  var Component = _ref.Component,
      pageProps = _ref.pageProps;
  var theme = Object(react_use_system_theme__WEBPACK_IMPORTED_MODULE_5__["default"])('dark');
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        httpEquiv: "X-UA-Compatible",
        content: "IE=Edge"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:type",
        content: "website"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:url",
        content: "https://gladiusglad.github.io/"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:image",
        content: "https://gladiusglad.github.io/img/gladgladius-banner.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:site_name",
        content: "gladgladius"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "twitter:card",
        content: "summary"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "twitter:domain",
        content: "gladiusglad.github.io"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "twitter:image",
        content: "https://gladiusglad.github.io/img/gladgladius-banner.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "apple-touch-icon",
        sizes: "57x57",
        href: "/icon/apple-icon-57x57.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "apple-touch-icon",
        sizes: "60x60",
        href: "/icon/apple-icon-60x60.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "apple-touch-icon",
        sizes: "72x72",
        href: "/icon/apple-icon-72x72.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "apple-touch-icon",
        sizes: "76x76",
        href: "/icon/apple-icon-76x76.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "apple-touch-icon",
        sizes: "114x114",
        href: "/icon/apple-icon-114x114.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "apple-touch-icon",
        sizes: "120x120",
        href: "/icon/apple-icon-120x120.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "apple-touch-icon",
        sizes: "144x144",
        href: "/icon/apple-icon-144x144.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "apple-touch-icon",
        sizes: "152x152",
        href: "/icon/apple-icon-152x152.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/icon/apple-icon-180x180.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "icon",
        type: "image/png",
        sizes: "192x192",
        href: "/icon/android-icon-192x192.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/icon/favicon-32x32.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "icon",
        type: "image/png",
        sizes: "96x96",
        href: "/icon/favicon-96x96.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/icon/favicon-16x16.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "msapplication-TileColor",
        content: "#2eb185"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "msapplication-TileImage",
        content: "/icon/ms-icon-144x144.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "theme-color",
        content: "#2eb185"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
        crossOrigin: "true"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 5
    }, this)]
  }, void 0, true);
}

_s(MyApp, "pC4698r6rPbJxPU5FDdkGxqgYuk=", false, function () {
  return [react_use_system_theme__WEBPACK_IMPORTED_MODULE_5__["default"]];
});

_c = MyApp;
/* harmony default export */ __webpack_exports__["default"] = (MyApp);

var _c;

$RefreshReg$(_c, "MyApp");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC50c3giXSwibmFtZXMiOlsiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJ0aGVtZSIsInVzZVN5c3RlbVRoZW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBOztBQUVBLFNBQVNBLEtBQVQsT0FBeUM7QUFBQTs7QUFBQSxNQUF4QkMsU0FBd0IsUUFBeEJBLFNBQXdCO0FBQUEsTUFBYkMsU0FBYSxRQUFiQSxTQUFhO0FBQ3ZDLE1BQU1DLEtBQUssR0FBR0Msc0VBQWMsQ0FBQyxNQUFELENBQTVCO0FBRUEsc0JBQU87QUFBQSw0QkFDTCxxRUFBQyxnREFBRDtBQUFBLDhCQUNFO0FBQU0sWUFBSSxFQUFDLFVBQVg7QUFBc0IsZUFBTyxFQUFDO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQU0saUJBQVMsRUFBQyxpQkFBaEI7QUFBa0MsZUFBTyxFQUFDO0FBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRixlQUdFO0FBQU0sZ0JBQVEsRUFBQyxTQUFmO0FBQXlCLGVBQU8sRUFBQztBQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEYsZUFJRTtBQUFNLGdCQUFRLEVBQUMsUUFBZjtBQUF3QixlQUFPLEVBQUM7QUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpGLGVBS0U7QUFBTSxnQkFBUSxFQUFDLFVBQWY7QUFBMEIsZUFBTyxFQUFDO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FMRixlQU1FO0FBQU0sZ0JBQVEsRUFBQyxjQUFmO0FBQThCLGVBQU8sRUFBQztBQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTkYsZUFPRTtBQUFNLFlBQUksRUFBQyxjQUFYO0FBQTBCLGVBQU8sRUFBQztBQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUEYsZUFRRTtBQUFNLFlBQUksRUFBQyxnQkFBWDtB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REssZUE2QkwscUVBQUMsU0FBRCxvQkFBZUYsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBN0JLO0FBQUEsa0JBQVA7QUErQkQ7O0dBbENRRixLO1VBQ09JLDhEOzs7S0FEUEosSztBQW9DTUEsb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4yMDYxZDIxZWI1ZTYwYjBlYjMyMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuXG5pbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWwuc2NzcydcbmltcG9ydCAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLXN2Zy1jb3JlL3N0eWxlcy5jc3MnXG5pbXBvcnQgdXNlU3lzdGVtVGhlbWUgZnJvbSAncmVhY3QtdXNlLXN5c3RlbS10aGVtZSdcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIGNvbnN0IHRoZW1lID0gdXNlU3lzdGVtVGhlbWUoJ2RhcmsnKVxuXG4gIHJldHVybiA8PlxuICAgIDxIZWFkPlxuICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjBcIiAvPlxuICAgICAgPG1ldGEgaHR0cEVxdWl2PVwiWC1VQS1Db21wYXRpYmxlXCIgY29udGVudD1cIklFPUVkZ2VcIi8+XG4gICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnR5cGVcIiBjb250ZW50PVwid2Vic2l0ZVwiIC8+XG4gICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnVybFwiIGNvbnRlbnQ9XCJodHRwczovL2dsYWRpdXNnbGFkLmdpdGh1Yi5pby9cIiAvPlxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZVwiIGNvbnRlbnQ9XCJodHRwczovL2dsYWRpdXNnbGFkLmdpdGh1Yi5pby9pbWcvZ2xhZGdsYWRpdXMtYmFubmVyLnBuZ1wiLz5cbiAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6c2l0ZV9uYW1lXCIgY29udGVudD1cImdsYWRnbGFkaXVzXCIgLz5cbiAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmNhcmRcIiBjb250ZW50PVwic3VtbWFyeVwiIC8+XG4gICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjpkb21haW5cIiBjb250ZW50PVwiZ2xhZGl1c2dsYWQuZ2l0aHViLmlvXCIgLz5cbiAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmltYWdlXCIgY29udGVudD1cImh0dHBzOi8vZ2xhZGl1c2dsYWQuZ2l0aHViLmlvL2ltZy9nbGFkZ2xhZGl1cy1iYW5uZXIucG5nXCIvPlxuICAgICAgPGxpbmsgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiIHNpemVzPVwiNTd4NTdcIiBocmVmPVwiL2ljb24vYXBwbGUtaWNvbi01N3g1Ny5wbmdcIi8+XG4gICAgICA8bGluayByZWw9XCJhcHBsZS10b3VjaC1pY29uXCIgc2l6ZXM9XCI2MHg2MFwiIGhyZWY9XCIvaWNvbi9hcHBsZS1pY29uLTYweDYwLnBuZ1wiLz5cbiAgICAgIDxsaW5rIHJlbD1cImFwcGxlLXRvdWNoLWljb25cIiBzaXplcz1cIjcyeDcyXCIgaHJlZj1cIi9pY29uL2FwcGxlLWljb24tNzJ4NzIucG5nXCIvPlxuICAgICAgPGxpbmsgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiIHNpemVzPVwiNzZ4NzZcIiBocmVmPVwiL2ljb24vYXBwbGUtaWNvbi03Nng3Ni5wbmdcIi8+XG4gICAgICA8bGluayByZWw9XCJhcHBsZS10b3VjaC1pY29uXCIgc2l6ZXM9XCIxMTR4MTE0XCIgaHJlZj1cIi9pY29uL2FwcGxlLWljb24tMTE0eDExNC5wbmdcIi8+XG4gICAgICA8bGluayByZWw9XCJhcHBsZS10b3VjaC1pY29uXCIgc2l6ZXM9XCIxMjB4MTIwXCIgaHJlZj1cIi9pY29uL2FwcGxlLWljb24tMTIweDEyMC5wbmdcIi8+XG4gICAgICA8bGluayByZWw9XCJhcHBsZS10b3VjaC1pY29uXCIgc2l6ZXM9XCIxNDR4MTQ0XCIgaHJlZj1cIi9pY29uL2FwcGxlLWljb24tMTQ0eDE0NC5wbmdcIi8+XG4gICAgICA8bGluayByZWw9XCJhcHBsZS10b3VjaC1pY29uXCIgc2l6ZXM9XCIxNTJ4MTUyXCIgaHJlZj1cIi9pY29uL2FwcGxlLWljb24tMTUyeDE1Mi5wbmdcIi8+XG4gICAgICA8bGluayByZWw9XCJhcHBsZS10b3VjaC1pY29uXCIgc2l6ZXM9XCIxODB4MTgwXCIgaHJlZj1cIi9pY29uL2FwcGxlLWljb24tMTgweDE4MC5wbmdcIi8+XG4gICAgICA8bGluayByZWw9XCJpY29uXCIgdHlwZT1cImltYWdlL3BuZ1wiIHNpemVzPVwiMTkyeDE5MlwiICBocmVmPVwiL2ljb24vYW5kcm9pZC1pY29uLTE5MngxOTIucG5nXCIvPlxuICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIHR5cGU9XCJpbWFnZS9wbmdcIiBzaXplcz1cIjMyeDMyXCIgaHJlZj1cIi9pY29uL2Zhdmljb24tMzJ4MzIucG5nXCIvPlxuICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIHR5cGU9XCJpbWFnZS9wbmdcIiBzaXplcz1cIjk2eDk2XCIgaHJlZj1cIi9pY29uL2Zhdmljb24tOTZ4OTYucG5nXCIvPlxuICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIHR5cGU9XCJpbWFnZS9wbmdcIiBzaXplcz1cIjE2eDE2XCIgaHJlZj1cIi9pY29uL2Zhdmljb24tMTZ4MTYucG5nXCIvPlxuICAgICAgPG1ldGEgbmFtZT1cIm1zYXBwbGljYXRpb24tVGlsZUNvbG9yXCIgY29udGVudD1cIiMyZWIxODVcIi8+XG4gICAgICA8bWV0YSBuYW1lPVwibXNhcHBsaWNhdGlvbi1UaWxlSW1hZ2VcIiBjb250ZW50PVwiL2ljb24vbXMtaWNvbi0xNDR4MTQ0LnBuZ1wiLz5cbiAgICAgIDxtZXRhIG5hbWU9XCJ0aGVtZS1jb2xvclwiIGNvbnRlbnQ9XCIjMmViMTg1XCIgLz5cbiAgICAgIDxsaW5rIHJlbD1cInByZWNvbm5lY3RcIiBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbVwiIGNyb3NzT3JpZ2luPVwidHJ1ZVwiIC8+XG4gICAgPC9IZWFkPlxuICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgPC8+XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwXG4iXSwic291cmNlUm9vdCI6IiJ9