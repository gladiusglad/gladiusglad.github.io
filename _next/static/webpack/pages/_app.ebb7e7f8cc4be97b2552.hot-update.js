webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/blog/index.tsx":
/*!***********************************!*\
  !*** ./components/blog/index.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Blog; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../container */ \"./components/container/index.tsx\");\n/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! luxon */ \"./node_modules/luxon/build/cjs-browser/luxon.js\");\n/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(luxon__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.module.scss */ \"./components/blog/style.module.scss\");\n/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../navbar */ \"./components/navbar/index.tsx\");\n\n\nvar _jsxFileName = \"/home/glad/Documents/Projects/gladiusglad.github.io/components/blog/index.tsx\";\n\n\n\n\n\n\nfunction Blog(props) {\n  var metadata = props.metadata;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: [metadata.title, \" | gladgladius\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 7\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 5\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_navbar__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 5\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _style_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.jumbotron,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _style_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.backLeft,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          className: _style_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.bold,\n          children: \"blog\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 18,\n          columnNumber: 40\n        }, this), \"blogblog\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 7\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_container__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        className: _style_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.container,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n          className: _style_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.title,\n          children: metadata.title.toLowerCase()\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 20,\n          columnNumber: 9\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n          className: _style_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.date,\n          children: luxon__WEBPACK_IMPORTED_MODULE_4__[\"DateTime\"].fromObject(metadata.date).toLocaleString(luxon__WEBPACK_IMPORTED_MODULE_4__[\"DateTime\"].DATE_SHORT)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 21,\n          columnNumber: 9\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n          className: _style_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.topic,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n            href: \"/topic/\".concat(metadata.topic),\n            children: metadata.topic\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 22,\n            columnNumber: 38\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 22,\n          columnNumber: 9\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 7\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 5\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_container__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      children: props.children\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 5\n    }, this)]\n  }, void 0, true);\n}\n_c = Blog;\n\nvar _c;\n\n$RefreshReg$(_c, \"Blog\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ibG9nL2luZGV4LnRzeD81MWIyIl0sIm5hbWVzIjpbIkJsb2ciLCJwcm9wcyIsIm1ldGFkYXRhIiwidGl0bGUiLCJzdHlsZXMiLCJqdW1ib3Ryb24iLCJiYWNrTGVmdCIsImJvbGQiLCJjb250YWluZXIiLCJ0b0xvd2VyQ2FzZSIsImRhdGUiLCJEYXRlVGltZSIsImZyb21PYmplY3QiLCJ0b0xvY2FsZVN0cmluZyIsIkRBVEVfU0hPUlQiLCJ0b3BpYyIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVlLFNBQVNBLElBQVQsQ0FBY0MsS0FBZCxFQUFxQjtBQUNsQyxNQUFNQyxRQUFRLEdBQUdELEtBQUssQ0FBQ0MsUUFBdkI7QUFFQSxzQkFBTztBQUFBLDRCQUNMLHFFQUFDLGdEQUFEO0FBQUEsNkJBQ0U7QUFBQSxtQkFBUUEsUUFBUSxDQUFDQyxLQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREssZUFJTCxxRUFBQywrQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkssZUFLTDtBQUFLLGVBQVMsRUFBRUMseURBQU0sQ0FBQ0MsU0FBdkI7QUFBQSw4QkFDRTtBQUFLLGlCQUFTLEVBQUVELHlEQUFNLENBQUNFLFFBQXZCO0FBQUEsZ0NBQWlDO0FBQU0sbUJBQVMsRUFBRUYseURBQU0sQ0FBQ0csSUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUUscUVBQUMsa0RBQUQ7QUFBVyxpQkFBUyxFQUFFSCx5REFBTSxDQUFDSSxTQUE3QjtBQUFBLGdDQUNFO0FBQUksbUJBQVMsRUFBRUoseURBQU0sQ0FBQ0QsS0FBdEI7QUFBQSxvQkFBOEJELFFBQVEsQ0FBQ0MsS0FBVCxDQUFlTSxXQUFmO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFFRTtBQUFJLG1CQUFTLEVBQUVMLHlEQUFNLENBQUNNLElBQXRCO0FBQUEsb0JBQTZCQyw4Q0FBUSxDQUFDQyxVQUFULENBQW9CVixRQUFRLENBQUNRLElBQTdCLEVBQW1DRyxjQUFuQyxDQUFrREYsOENBQVEsQ0FBQ0csVUFBM0Q7QUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRixlQUdFO0FBQUksbUJBQVMsRUFBRVYseURBQU0sQ0FBQ1csS0FBdEI7QUFBQSxpQ0FBNkI7QUFBRyxnQkFBSSxtQkFBWWIsUUFBUSxDQUFDYSxLQUFyQixDQUFQO0FBQUEsc0JBQXNDYixRQUFRLENBQUNhO0FBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMSyxlQWFMLHFFQUFDLGtEQUFEO0FBQUEsZ0JBQ0dkLEtBQUssQ0FBQ2U7QUFEVDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBYks7QUFBQSxrQkFBUDtBQWlCRDtLQXBCdUJoQixJIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9ibG9nL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBDb250YWluZXIgZnJvbSAnLi4vY29udGFpbmVyJ1xuaW1wb3J0IHsgRGF0ZVRpbWUgfSBmcm9tICdsdXhvbidcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlLm1vZHVsZS5zY3NzJ1xuaW1wb3J0IE5hdmJhciBmcm9tICcuLi9uYXZiYXInXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJsb2cocHJvcHMpIHtcbiAgY29uc3QgbWV0YWRhdGEgPSBwcm9wcy5tZXRhZGF0YVxuXG4gIHJldHVybiA8PlxuICAgIDxIZWFkPlxuICAgICAgPHRpdGxlPnttZXRhZGF0YS50aXRsZX0gfCBnbGFkZ2xhZGl1czwvdGl0bGU+XG4gICAgPC9IZWFkPlxuICAgIDxOYXZiYXIgLz5cbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmp1bWJvdHJvbn0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJhY2tMZWZ0fT48c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5ib2xkfT5ibG9nPC9zcGFuPmJsb2dibG9nPC9kaXY+XG4gICAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+e21ldGFkYXRhLnRpdGxlLnRvTG93ZXJDYXNlKCl9PC9oMT5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLmRhdGV9PntEYXRlVGltZS5mcm9tT2JqZWN0KG1ldGFkYXRhLmRhdGUpLnRvTG9jYWxlU3RyaW5nKERhdGVUaW1lLkRBVEVfU0hPUlQpfTwvaDI+XG4gICAgICAgIDxoMyBjbGFzc05hbWU9e3N0eWxlcy50b3BpY30+PGEgaHJlZj17YC90b3BpYy8ke21ldGFkYXRhLnRvcGljfWB9PnttZXRhZGF0YS50b3BpY308L2E+PC9oMz5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvZGl2PlxuICAgIDxDb250YWluZXI+XG4gICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgPC9Db250YWluZXI+XG4gIDwvPlxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/blog/index.tsx\n");

/***/ })

})