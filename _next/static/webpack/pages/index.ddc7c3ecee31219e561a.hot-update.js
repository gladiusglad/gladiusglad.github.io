webpackHotUpdate_N_E("pages/index",{

/***/ "./components/skills/index.tsx":
/*!*************************************!*\
  !*** ./components/skills/index.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Skills; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_joshm_Documents_MY_PROJECTS_gladiusglad_github_io_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.module.scss */ "./components/skills/style.module.scss");
/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_module_scss__WEBPACK_IMPORTED_MODULE_3__);



var _jsxFileName = "C:\\Users\\joshm\\Documents\\_MY-PROJECTS\\gladiusglad.github.io\\components\\skills\\index.tsx",
    _s = $RefreshSig$();



function Skills(_ref) {
  _s();

  var skills = _ref.skills,
      props = Object(C_Users_joshm_Documents_MY_PROJECTS_gladiusglad_github_io_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["skills"]);

  var typing,
      skillIndex = 0,
      currentLength = 0;
  var timeouts = [];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(true),
      caret = _useState[0],
      setCaret = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      skill = _useState2[0],
      setSkill = _useState2[1];

  var addTimeout = function addTimeout(callback, ms) {
    timeouts.push(setTimeout(callback, ms));
  };

  var typeSkill = function typeSkill() {
    typing = true;
    var currentSkill = skills[skillIndex];
    currentLength++;
    setSkill(currentSkill.substring(0, currentLength));

    if (currentLength === currentSkill.length) {
      typing = false;
      addTimeout(deleteSkill, 2000);
    } else {
      addTimeout(typeSkill, Math.random() * 150 + 15);
    }
  };

  var deleteSkill = function deleteSkill() {
    typing = true;
    var currentSkill = skills[skillIndex];
    currentLength--;
    setSkill(currentSkill.substring(0, currentLength));

    if (currentLength === 0) {
      typing = false;

      if (skillIndex === skills.length - 1) {
        skillIndex = 0;
      } else {
        skillIndex++;
      }

      addTimeout(typeSkill, 50);
    } else {
      addTimeout(deleteSkill, currentLength === currentSkill.length - 1 ? 300 : 20);
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    addTimeout(typeSkill, 1000);
    var caretInterval = setInterval(function () {
      return setCaret(function (prev) {
        return typing || !prev;
      });
    }, 500);
    return function () {
      clearInterval(caretInterval);
      timeouts.forEach(function (t) {
        return clearTimeout(t);
      });
    };
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _style_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.skills,
    children: [skill, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
      className: _style_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.caret,
      style: {
        visibility: caret ? 'visible' : 'hidden'
      },
      children: "_"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 14
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 61,
    columnNumber: 5
  }, this);
}

_s(Skills, "ezw/S+rSFbVrD1s921HDasvnfFw=");

_c = Skills;

var _c;

$RefreshReg$(_c, "Skills");

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

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutProperties; });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9za2lsbHMvaW5kZXgudHN4Iiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlLmpzIl0sIm5hbWVzIjpbIlNraWxscyIsInNraWxscyIsInByb3BzIiwidHlwaW5nIiwic2tpbGxJbmRleCIsImN1cnJlbnRMZW5ndGgiLCJ0aW1lb3V0cyIsInVzZVN0YXRlIiwiY2FyZXQiLCJzZXRDYXJldCIsInNraWxsIiwic2V0U2tpbGwiLCJhZGRUaW1lb3V0IiwiY2FsbGJhY2siLCJtcyIsInB1c2giLCJzZXRUaW1lb3V0IiwidHlwZVNraWxsIiwiY3VycmVudFNraWxsIiwic3Vic3RyaW5nIiwibGVuZ3RoIiwiZGVsZXRlU2tpbGwiLCJNYXRoIiwicmFuZG9tIiwidXNlRWZmZWN0IiwiY2FyZXRJbnRlcnZhbCIsInNldEludGVydmFsIiwicHJldiIsImNsZWFySW50ZXJ2YWwiLCJmb3JFYWNoIiwidCIsImNsZWFyVGltZW91dCIsInN0eWxlcyIsInZpc2liaWxpdHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBRWUsU0FBU0EsTUFBVCxPQUF5RjtBQUFBOztBQUFBLE1BQXhFQyxNQUF3RSxRQUF4RUEsTUFBd0U7QUFBQSxNQUE3REMsS0FBNkQ7O0FBQ3RHLE1BQUlDLE1BQUo7QUFBQSxNQUFZQyxVQUFVLEdBQUcsQ0FBekI7QUFBQSxNQUE0QkMsYUFBYSxHQUFHLENBQTVDO0FBQ0EsTUFBTUMsUUFBUSxHQUFHLEVBQWpCOztBQUZzRyxrQkFHNUVDLHNEQUFRLENBQUMsSUFBRCxDQUhvRTtBQUFBLE1BRy9GQyxL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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0p4QjtBQUFBO0FBQUE7QUFBbUc7QUFDcEY7QUFDZjtBQUNBLGVBQWUsdUdBQTRCO0FBQzNDOztBQUVBO0FBQ0E7O0FBRUEsZUFBZSw2QkFBNkI7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDbEJBO0FBQUE7QUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGFBQWEsdUJBQXVCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5kZGM3YzNlY2VlMzEyMTllNTYxYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlLm1vZHVsZS5zY3NzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2tpbGxzKHtza2lsbHMsIC4uLnByb3BzfToge3NraWxsczogc3RyaW5nW119ICYgSFRNTEF0dHJpYnV0ZXM8SFRNTERpdkVsZW1lbnQ+KSB7XHJcbiAgbGV0IHR5cGluZywgc2tpbGxJbmRleCA9IDAsIGN1cnJlbnRMZW5ndGggPSAwXHJcbiAgY29uc3QgdGltZW91dHMgPSBbXVxyXG4gIGNvbnN0IFtjYXJldCwgc2V0Q2FyZXRdID0gdXNlU3RhdGUodHJ1ZSlcclxuICBjb25zdCBbc2tpbGwsIHNldFNraWxsXSA9IHVzZVN0YXRlKCcnKVxyXG5cclxuICBjb25zdCBhZGRUaW1lb3V0ID0gKGNhbGxiYWNrLCBtcykgPT4ge1xyXG4gICAgdGltZW91dHMucHVzaChzZXRUaW1lb3V0KGNhbGxiYWNrLCBtcykpXHJcbiAgfVxyXG5cclxuICBjb25zdCB0eXBlU2tpbGwgPSAoKSA9PiB7XHJcbiAgICB0eXBpbmcgPSB0cnVlXHJcbiAgICBsZXQgY3VycmVudFNraWxsID0gc2tpbGxzW3NraWxsSW5kZXhdXHJcblxyXG4gICAgY3VycmVudExlbmd0aCsrXHJcbiAgICBzZXRTa2lsbChjdXJyZW50U2tpbGwuc3Vic3RyaW5nKDAsIGN1cnJlbnRMZW5ndGgpKVxyXG5cclxuICAgIGlmIChjdXJyZW50TGVuZ3RoID09PSBjdXJyZW50U2tpbGwubGVuZ3RoKSB7XHJcbiAgICAgIHR5cGluZyA9IGZhbHNlXHJcbiAgICAgIGFkZFRpbWVvdXQoZGVsZXRlU2tpbGwsIDIwMDApXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBhZGRUaW1lb3V0KHR5cGVTa2lsbCwgTWF0aC5yYW5kb20oKSAqIDE1MCArIDE1KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgZGVsZXRlU2tpbGwgPSAoKSA9PiB7XHJcbiAgICB0eXBpbmcgPSB0cnVlXHJcbiAgICBsZXQgY3VycmVudFNraWxsID0gc2tpbGxzW3NraWxsSW5kZXhdXHJcblxyXG4gICAgY3VycmVudExlbmd0aC0tXHJcbiAgICBzZXRTa2lsbChjdXJyZW50U2tpbGwuc3Vic3RyaW5nKDAsIGN1cnJlbnRMZW5ndGgpKVxyXG5cclxuICAgIGlmIChjdXJyZW50TGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHR5cGluZyA9IGZhbHNlXHJcbiAgICAgIGlmIChza2lsbEluZGV4ID09PSBza2lsbHMubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgIHNraWxsSW5kZXggPSAwXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2tpbGxJbmRleCsrXHJcbiAgICAgIH1cclxuICAgICAgYWRkVGltZW91dCh0eXBlU2tpbGwsIDUwKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYWRkVGltZW91dChkZWxldGVTa2lsbCwgKGN1cnJlbnRMZW5ndGggPT09IGN1cnJlbnRTa2lsbC5sZW5ndGggLSAxKSA/IDMwMCA6IDIwKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGFkZFRpbWVvdXQodHlwZVNraWxsLCAxMDAwKVxyXG4gICAgY29uc3QgY2FyZXRJbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHNldENhcmV0KChwcmV2KSA9PiB0eXBpbmcgfHwgIXByZXYpLCA1MDApXHJcblxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgY2xlYXJJbnRlcnZhbChjYXJldEludGVydmFsKVxyXG4gICAgICB0aW1lb3V0cy5mb3JFYWNoKHQgPT4gY2xlYXJUaW1lb3V0KHQpKVxyXG4gICAgfVxyXG4gIH0sIFtdKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5za2lsbHN9PlxyXG4gICAgICB7c2tpbGx9PGkgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZXR9IHN0eWxlPXt7dmlzaWJpbGl0eTogY2FyZXQgPyAndmlzaWJsZScgOiAnaGlkZGVuJ319Pl88L2k+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn0iLCJpbXBvcnQgb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZVwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG4gIHZhciB0YXJnZXQgPSBvYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpO1xuICB2YXIga2V5LCBpO1xuXG4gIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgdmFyIHNvdXJjZVN5bWJvbEtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZSk7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgc291cmNlU3ltYm9sS2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAga2V5ID0gc291cmNlU3ltYm9sS2V5c1tpXTtcbiAgICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzb3VyY2UsIGtleSkpIGNvbnRpbnVlO1xuICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG4gIHZhciB0YXJnZXQgPSB7fTtcbiAgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICB2YXIga2V5LCBpO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAga2V5ID0gc291cmNlS2V5c1tpXTtcbiAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufSJdLCJzb3VyY2VSb290IjoiIn0=