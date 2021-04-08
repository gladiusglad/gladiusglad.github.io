webpackHotUpdate_N_E("pages/index",{

/***/ "./components/back-title/index.tsx":
/*!*****************************************!*\
  !*** ./components/back-title/index.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BackTitle; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_joshm_Documents_MY_PROJECTS_gladiusglad_github_io_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fade__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../fade */ "./components/fade.tsx");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
/* harmony import */ var _lib_className__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib/className */ "./lib/className.ts");
/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style.module.scss */ "./components/back-title/style.module.scss");
/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_style_module_scss__WEBPACK_IMPORTED_MODULE_6__);



var _jsxFileName = "C:\\Users\\joshm\\Documents\\_MY-PROJECTS\\gladiusglad.github.io\\components\\back-title\\index.tsx";

function _templateObject() {
  var data = Object(C_Users_joshm_Documents_MY_PROJECTS_gladiusglad_github_io_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n      from {\n        transform: translate3d(", "", "em, 0, 0);\n        letter-spacing: 5em;\n      }\n      to {\n        transform: translate3d(0, 0, 0);\n        letter-spacing: normal;\n      }\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}







var stringInLength = function stringInLength(str, length, reverse) {
  if (length === str.length) {
    return str;
  } else if (length < str.length) {
    if (reverse) {
      return str.substring(str.length - length);
    } else {
      return str.substring(0, length);
    }
  } else {
    var repeat = str.repeat(~~(length / str.length)),
        remainder = length % str.length;

    if (reverse) {
      return str.substring(str.length - remainder) + repeat;
    } else {
      return repeat + str.substring(0, remainder);
    }
  }
};

function BackTitle(_ref) {
  var title = _ref.title,
      style = _ref.style,
      className = _ref.className,
      right = _ref.right,
      _ref$startLength = _ref.startLength,
      startLength = _ref$startLength === void 0 ? 2 : _ref$startLength,
      _ref$endRepeat = _ref.endRepeat,
      endRepeat = _ref$endRepeat === void 0 ? 5 : _ref$endRepeat,
      noAnim = _ref.noAnim;
  var backTitle = title.toLowerCase().replace(/\s/g, ''),
      backTitleStart = stringInLength(backTitle, startLength, !right),
      backTitleEnd = backTitle.repeat(endRepeat),
      backTitleKeyframes = Object(_emotion_react__WEBPACK_IMPORTED_MODULE_4__["keyframes"])(_templateObject(), right ? '' : '-', 7.5 * title.length + 62.5);

  var content = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: Object(_lib_className__WEBPACK_IMPORTED_MODULE_5__["default"])(_style_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.backTitle, [right, _style_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.right], className),
    style: style,
    children: [right ? backTitleEnd : backTitleStart, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      className: _style_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.bold,
      children: backTitle
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }, this), right ? backTitleStart : backTitleEnd]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 56,
    columnNumber: 5
  }, this);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: noAnim ? content : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fade__WEBPACK_IMPORTED_MODULE_3__["default"], {
      keyframes: backTitleKeyframes,
      className: _style_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.backTitleFade,
      duration: 2000,
      children: content
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }, this)
  }, void 0, false);
}
_c = BackTitle;

var _c;

$RefreshReg$(_c, "BackTitle");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9iYWNrLXRpdGxlL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJzdHJpbmdJbkxlbmd0aCIsInN0ciIsImxlbmd0aCIsInJldmVyc2UiLCJzdWJzdHJpbmciLCJyZXBlYXQiLCJyZW1haW5kZXIiLCJCYWNrVGl0bGUiLCJ0aXRsZSIsInN0eWxlIiwiY2xhc3NOYW1lIiwicmlnaHQiLCJzdGFydExlbmd0aCIsImVuZFJlcGVhdCIsIm5vQW5pbSIsImJhY2tUaXRsZSIsInRvTG93ZXJDYXNlIiwicmVwbGFjZSIsImJhY2tUaXRsZVN0YXJ0IiwiYmFja1RpdGxlRW5kIiwiYmFja1RpdGxlS2V5ZnJhbWVzIiwia2V5ZnJhbWVzIiwiY29udGVudCIsImMiLCJzdHlsZXMiLCJib2xkIiwiYmFja1RpdGxlRmFkZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7O0FBWUEsSUFBTUEsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDQyxHQUFELEVBQWNDLE1BQWQsRUFBOEJDLE9BQTlCLEVBQW9EO0FBQ3pFLE1BQUlELE1BQU0sS0FBS0QsR0FBRyxDQUFDQyxNQUFuQixFQUEyQjtBQUN6QixXQUFPRCxHQUFQO0FBQ0QsR0FGRCxNQUVPLElBQUlDLE1BQU0sR0FBR0QsR0FBRyxDQUFDQyxNQUFqQixFQUF5QjtBQUM5QixRQUFJQyxPQUFKLEVBQWE7QUFDWCxhQUFPRixHQUFHLENBQUNHLFNBQUosQ0FBY0gsR0FBRyxDQUFDQyxNQUFKLEdBQWFBLE1BQTNCLENBQVA7QUFDRCxLQUZELE1BRU87QUFDTCxhQUFPRCxHQUFHLENBQUNHLFNBQUosQ0FBYyxDQUFkLEVBQWlCRixNQUFqQixDQUFQO0FBQ0Q7QUFDRixHQU5NLE1BTUE7QUFDTCxRQUFNRyxNQUFNLEdBQUdKLEdBQUcsQ0FBQ0ksTUFBSixDQUFXLENBQUMsRUFBRUgsTUFBTSxHQUFHRCxHQUFHLENBQUNDLE1BQWYsQ0FBWixDQUFmO0FBQUEsUUFDRUksU0FBUyxHQUFHSixNQUFNLEdBQUdELEdBQUcsQ0FBQ0MsTUFEM0I7O0FBR0EsUUFBSUMsT0FBSixFQUFhO0FBQ1gsYUFBT0YsR0FBRyxDQUFDRyxTQUFKLENBQWNILEdBQUcsQ0FBQ0MsTUFBSixHQUFhSSxTQUEzQixJQUF3Q0QsTUFBL0M7QUFDRCxLQUZELE1BRU87QUFDTCxhQUFPQSxNQUFNLEdBQUdKLEdBQUcsQ0FBQ0csU0FBSixDQUFjLENBQWQsRUFBaUJFLFNBQWpCLENBQWhCO0FBQ0Q7QUFDRjtBQUNGLENBbkJEOztBQXFCZSxTQUFTQyxTQUFULE9BQTZHO0FBQUEsTUFBekZDLEtBQXlGLFFBQXpGQSxLQUF5RjtBQUFBLE1BQWxGQyxLQUFrRixRQUFsRkEsS0FBa0Y7QUFBQSxNQUEzRUMsU0FBMkUsUUFBM0VBLFNBQTJFO0FBQUEsTUFBaEVDLEtBQWdFLFFBQWhFQSxLQUFnRTtBQUFBLDhCQUF6REMsV0FBeUQ7QUFBQSxNQUF6REEsV0FBeUQsaUNBQTNDLENBQTJDO0FBQUEsNEJBQXhDQyxTQUF3QztBQUFBLE1BQXhDQSxTQUF3QywrQkFBNUIsQ0FBNEI7QUFBQSxNQUF6QkMsTUFBeUIsUUFBekJBLE1BQXlCO0FBQzFILE1BQU1DLFNBQVMsR0FBR1AsS0FBSyxDQUFDUSxXQUFOLEdBQW9CQyxPQUFwQixDQUE0QixLQUE1QixFQUFtQyxFQUFuQyxDQUFsQjtBQUFBLE1BQ0VDLGNBQWMsR0FBR2xCLGNBQWMsQ0FBQ2UsU0FBRCxFQUFZSCxXQUFaLEVBQXlCLENBQUNELEtBQTFCLENBRGpDO0FBQUEsTUFFRVEsWUFBWSxHQUFHSixTQUFTLENBQUNWLE1BQVYsQ0FBaUJRLFNBQWpCLENBRmpCO0FBQUEsTUFHRU8sa0JBQWtCLEdBQUdDLGdFQUFILG9CQUVXVixLQUFLLEdBQUcsRUFBSCxHQUFRLEdBRnhCLEVBRThCLE1BQU1ILEtBQUssQ0FBQ04sTUFBWixHQUFxQixJQUZuRCxDQUhwQjs7QUFjQSxNQUFNb0IsT0FBTyxnQkFDWDtBQUFLLGFBQVMsRUFBRUMsOERBQUMsQ0FBQ0MseURBQU0sQ0FBQ1QsU0FBUixFQUFtQixDQUFDSixLQUFELEVBQVFhLHlEQUFNLENBQUNiLEtBQWYsQ0FBbkIsRUFBMENELFNBQTFDLENBQWpCO0FBQXVFLFNBQUssRUFBRUQsS0FBOUU7QUFBQSxlQUNHRSxLQUFLLEdBQUdRLFlBQUgsR0FBa0JELGNBRDFCLGVBRUU7QUFBTSxlQUFTLEVBQUVNLHlEQUFNLENBQUNDLElBQXhCO0FBQUEsZ0JBQStCVjtBQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkYsRUFHR0osS0FBSyxHQUFHTyxjQUFILEdBQW9CQyxZQUg1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjs7QUFRQSxzQkFBTztBQUFBLGNBQ0pMLE1BQU0sR0FBR1EsT0FBSCxnQkFDTCxxRUFBQyw2Q0FBRDtBQUFNLGVBQVMsRUFBRUYsa0JBQWpCO0FBQXFDLGVBQVMsRUFBRUkseURBQU0sQ0FBQ0UsYUFBdkQ7QUFBc0UsY0FBUSxFQUFFLElBQWhGO0FBQUEsZ0JBQ0dKO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZHLG1CQUFQO0FBT0Q7S0E5QnVCZixTIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmNlZmRiMzZkMTUzYTAyMmZhZmYxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBGYWRlIGZyb20gJy4uL2ZhZGUnXHJcbmltcG9ydCB7IGtleWZyYW1lcyB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiXHJcblxyXG5pbXBvcnQgYyBmcm9tICcuLi8uLi9saWIvY2xhc3NOYW1lJ1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlLm1vZHVsZS5zY3NzJ1xyXG5cclxuaW50ZXJmYWNlIEJhY2tUaXRsZVByb3BzIHtcclxuICB0aXRsZTogc3RyaW5nLFxyXG4gIHN0eWxlPzogUmVhY3QuQ1NTUHJvcGVydGllcyxcclxuICBjbGFzc05hbWU/OiBzdHJpbmcsXHJcbiAgcmlnaHQ/OiBib29sZWFuLFxyXG4gIHN0YXJ0TGVuZ3RoPzogbnVtYmVyLFxyXG4gIGVuZFJlcGVhdD86IG51bWJlcixcclxuICBub0FuaW0/OiBib29sZWFuXHJcbn1cclxuXHJcbmNvbnN0IHN0cmluZ0luTGVuZ3RoID0gKHN0cjogc3RyaW5nLCBsZW5ndGg6IG51bWJlciwgcmV2ZXJzZT86IGJvb2xlYW4pID0+IHtcclxuICBpZiAobGVuZ3RoID09PSBzdHIubGVuZ3RoKSB7XHJcbiAgICByZXR1cm4gc3RyXHJcbiAgfSBlbHNlIGlmIChsZW5ndGggPCBzdHIubGVuZ3RoKSB7XHJcbiAgICBpZiAocmV2ZXJzZSkge1xyXG4gICAgICByZXR1cm4gc3RyLnN1YnN0cmluZyhzdHIubGVuZ3RoIC0gbGVuZ3RoKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHN0ci5zdWJzdHJpbmcoMCwgbGVuZ3RoKVxyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zdCByZXBlYXQgPSBzdHIucmVwZWF0KH5+KGxlbmd0aCAvIHN0ci5sZW5ndGgpKSxcclxuICAgICAgcmVtYWluZGVyID0gbGVuZ3RoICUgc3RyLmxlbmd0aFxyXG5cclxuICAgIGlmIChyZXZlcnNlKSB7XHJcbiAgICAgIHJldHVybiBzdHIuc3Vic3RyaW5nKHN0ci5sZW5ndGggLSByZW1haW5kZXIpICsgcmVwZWF0XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gcmVwZWF0ICsgc3RyLnN1YnN0cmluZygwLCByZW1haW5kZXIpXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCYWNrVGl0bGUoe3RpdGxlLCBzdHlsZSwgY2xhc3NOYW1lLCByaWdodCwgc3RhcnRMZW5ndGggPSAyLCBlbmRSZXBlYXQgPSA1LCBub0FuaW19OiBCYWNrVGl0bGVQcm9wcykge1xyXG4gIGNvbnN0IGJhY2tUaXRsZSA9IHRpdGxlLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvXFxzL2csICcnKSxcclxuICAgIGJhY2tUaXRsZVN0YXJ0ID0gc3RyaW5nSW5MZW5ndGgoYmFja1RpdGxlLCBzdGFydExlbmd0aCwgIXJpZ2h0KSxcclxuICAgIGJhY2tUaXRsZUVuZCA9IGJhY2tUaXRsZS5yZXBlYXQoZW5kUmVwZWF0KSxcclxuICAgIGJhY2tUaXRsZUtleWZyYW1lcyA9IGtleWZyYW1lc2BcclxuICAgICAgZnJvbSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgke3JpZ2h0ID8gJycgOiAnLSd9JHs3LjUgKiB0aXRsZS5sZW5ndGggKyA2Mi41fWVtLCAwLCAwKTtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogNWVtO1xyXG4gICAgICB9XHJcbiAgICAgIHRvIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XHJcbiAgICAgIH1cclxuICAgIGBcclxuXHJcbiAgY29uc3QgY29udGVudCA9IChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjKHN0eWxlcy5iYWNrVGl0bGUsIFtyaWdodCwgc3R5bGVzLnJpZ2h0XSwgY2xhc3NOYW1lKX0gc3R5bGU9e3N0eWxlfT5cclxuICAgICAge3JpZ2h0ID8gYmFja1RpdGxlRW5kIDogYmFja1RpdGxlU3RhcnR9XHJcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmJvbGR9PntiYWNrVGl0bGV9PC9zcGFuPlxyXG4gICAgICB7cmlnaHQgPyBiYWNrVGl0bGVTdGFydCA6IGJhY2tUaXRsZUVuZH1cclxuICAgIDwvZGl2PlxyXG4gIClcclxuXHJcbiAgcmV0dXJuIDw+XHJcbiAgICB7bm9BbmltID8gY29udGVudCA6XHJcbiAgICAgIDxGYWRlIGtleWZyYW1lcz17YmFja1RpdGxlS2V5ZnJhbWVzfSBjbGFzc05hbWU9e3N0eWxlcy5iYWNrVGl0bGVGYWRlfSBkdXJhdGlvbj17MjAwMH0gPlxyXG4gICAgICAgIHtjb250ZW50fVxyXG4gICAgICA8L0ZhZGU+XHJcbiAgICB9XHJcbiAgPC8+XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==