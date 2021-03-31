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
/* harmony import */ var C_Users_joshm_Documents_MY_PROJECTS_gladiusglad_github_io_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../container */ "./components/container/index.tsx");
/* harmony import */ var _fade__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../fade */ "./components/fade.tsx");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style.module.scss */ "./components/section/style.module.scss");
/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_style_module_scss__WEBPACK_IMPORTED_MODULE_6__);


var _jsxFileName = "C:\\Users\\joshm\\Documents\\_MY-PROJECTS\\gladiusglad.github.io\\components\\section\\index.tsx";

function _templateObject() {
  var data = Object(C_Users_joshm_Documents_MY_PROJECTS_gladiusglad_github_io_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  from {\n    transform: translate3d(-100em, 0, 0);\n    letter-spacing: 5em;\n  }\n  to {\n    transform: translate3d(0, 0, 0);\n    letter-spacing: normal;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var backTitleStartLength = 2,
    backTitleEndRepeat = 5;
var backTitleKeyframes = Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["keyframes"])(_templateObject());
function Section(_ref) {
  var title = _ref.title,
      _ref$gray = _ref.gray,
      gray = _ref$gray === void 0 ? true : _ref$gray,
      children = _ref.children;
  var backTitle = title.toLowerCase(),
      backTitleStart = backTitle.substring(backTitle.length - backTitleStartLength),
      backTitleEnd = backTitle.repeat(backTitleEndRepeat);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _style_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.section,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fade__WEBPACK_IMPORTED_MODULE_4__["default"], {
      keyframes: backTitleKeyframes,
      className: _style_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.backTitleFade,
      duration: 2000,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        className: _style_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.backTitle,
        children: [backTitleStart, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: _style_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.bold,
          children: backTitle
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 56
        }, this), backTitleEnd]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 7
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_container__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: "content ".concat(_style_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.container),
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        className: _style_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.title,
        children: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 7
      }, this), children]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 5
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 32,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zZWN0aW9uL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJiYWNrVGl0bGVTdGFydExlbmd0aCIsImJhY2tUaXRsZUVuZFJlcGVhdCIsImJhY2tUaXRsZUtleWZyYW1lcyIsImtleWZyYW1lcyIsIlNlY3Rpb24iLCJ0aXRsZSIsImdyYXkiLCJjaGlsZHJlbiIsImJhY2tUaXRsZSIsInRvTG93ZXJDYXNlIiwiYmFja1RpdGxlU3RhcnQiLCJzdWJzdHJpbmciLCJsZW5ndGgiLCJiYWNrVGl0bGVFbmQiLCJyZXBlYXQiLCJzdHlsZXMiLCJzZWN0aW9uIiwiYmFja1RpdGxlRmFkZSIsImJvbGQiLCJjb250YWluZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQSxJQUFNQSxvQkFBb0IsR0FBRyxDQUE3QjtBQUFBLElBQ0VDLGtCQUFrQixHQUFHLENBRHZCO0FBR0EsSUFBTUMsa0JBQWtCLEdBQUdDLGdFQUFILG1CQUF4QjtBQWdCZSxTQUFTQyxPQUFULE9BQXdGO0FBQUEsTUFBdEVDLEtBQXNFLFFBQXRFQSxLQUFzRTtBQUFBLHVCQUEvREMsSUFBK0Q7QUFBQSxNQUEvREEsSUFBK0QsMEJBQXhELElBQXdEO0FBQUEsTUFBbERDLFFBQWtELFFBQWxEQSxRQUFrRDtBQUNyRyxNQUFJQyxTQUFTLEdBQUdILEtBQUssQ0FBQ0ksV0FBTixFQUFoQjtBQUFBLE1BQ0VDLGNBQWMsR0FBR0YsU0FBUyxDQUFDRyxTQUFWLENBQW9CSCxTQUFTLENBQUNJLE1BQVYsR0FBbUJaLG9CQUF2QyxDQURuQjtBQUFBLE1BRUVhLFlBQVksR0FBR0wsU0FBUyxDQUFDTSxNQUFWLENBQWlCYixrQkFBakIsQ0FGakI7QUFJQSxzQkFBTztBQUFLLGFBQVMsRUFBRWMseURBQU0sQ0FBQ0MsT0FBdkI7QUFBQSw0QkFDTCxxRUFBQyw2Q0FBRDtBQUFNLGVBQVMsRUFBRWQsa0JBQWpCO0FBQXFDLGVBQVMsRUFBRWEseURBQU0sQ0FBQ0UsYUFBdkQ7QUFBc0UsY0FBUSxFQUFFLElBQWhGO0FBQUEsNkJBQ0U7QUFBSSxpQkFBUyxFQUFFRix5REFBTSxDQUFDUCxTQUF0QjtBQUFBLG1CQUFrQ0UsY0FBbEMsZUFBaUQ7QUFBTSxtQkFBUyxFQUFFSyx5REFBTSxDQUFDRyxJQUF4QjtBQUFBLG9CQUErQlY7QUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFBakQsRUFBa0dLLFlBQWxHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESyxlQUlMLHFFQUFDLGtEQUFEO0FBQVcsZUFBUyxvQkFBYUUseURBQU0sQ0FBQ0ksU0FBcEIsQ0FBcEI7QUFBQSw4QkFDRTtBQUFJLGlCQUFTLEVBQUVKLHlEQUFNLENBQUNWLEtBQXRCO0FBQUEsa0JBQThCQTtBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsRUFFR0UsUUFGSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKSztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQVNEO0tBZHVCSCxPIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjU3YTExNTg5NGYwYWQ4OThlZTY0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAnLi4vY29udGFpbmVyJ1xyXG5pbXBvcnQgRmFkZSBmcm9tICcuLi9mYWRlJ1xyXG5pbXBvcnQgeyBrZXlmcmFtZXMgfSBmcm9tIFwiQGVtb3Rpb24vcmVhY3RcIlxyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlLm1vZHVsZS5zY3NzJ1xyXG5cclxuY29uc3QgYmFja1RpdGxlU3RhcnRMZW5ndGggPSAyLFxyXG4gIGJhY2tUaXRsZUVuZFJlcGVhdCA9IDU7XHJcblxyXG5jb25zdCBiYWNrVGl0bGVLZXlmcmFtZXMgPSBrZXlmcmFtZXNgXHJcbiAgZnJvbSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDBlbSwgMCwgMCk7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogNWVtO1xyXG4gIH1cclxuICB0byB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcclxuICB9XHJcbmBcclxuXHJcbmludGVyZmFjZSBTZWN0aW9uUHJvcHMge1xyXG4gIHRpdGxlOiBzdHJpbmcsXHJcbiAgZ3JheT86IGJvb2xlYW5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VjdGlvbih7dGl0bGUsIGdyYXkgPSB0cnVlLCBjaGlsZHJlbn06IFJlYWN0LlByb3BzV2l0aENoaWxkcmVuPFNlY3Rpb25Qcm9wcz4pIHtcclxuICBsZXQgYmFja1RpdGxlID0gdGl0bGUudG9Mb3dlckNhc2UoKSxcclxuICAgIGJhY2tUaXRsZVN0YXJ0ID0gYmFja1RpdGxlLnN1YnN0cmluZyhiYWNrVGl0bGUubGVuZ3RoIC0gYmFja1RpdGxlU3RhcnRMZW5ndGgpLFxyXG4gICAgYmFja1RpdGxlRW5kID0gYmFja1RpdGxlLnJlcGVhdChiYWNrVGl0bGVFbmRSZXBlYXQpO1xyXG5cclxuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zZWN0aW9ufT5cclxuICAgIDxGYWRlIGtleWZyYW1lcz17YmFja1RpdGxlS2V5ZnJhbWVzfSBjbGFzc05hbWU9e3N0eWxlcy5iYWNrVGl0bGVGYWRlfSBkdXJhdGlvbj17MjAwMH0gPlxyXG4gICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMuYmFja1RpdGxlfT57YmFja1RpdGxlU3RhcnR9PHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuYm9sZH0+e2JhY2tUaXRsZX08L3NwYW4+e2JhY2tUaXRsZUVuZH08L2gxPlxyXG4gICAgPC9GYWRlPlxyXG4gICAgPENvbnRhaW5lciBjbGFzc05hbWU9e2Bjb250ZW50ICR7c3R5bGVzLmNvbnRhaW5lcn1gfT5cclxuICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT57dGl0bGV9PC9oMT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgPC9kaXY+XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9