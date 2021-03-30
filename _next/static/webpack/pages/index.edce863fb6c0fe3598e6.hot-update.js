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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.module.scss */ "./components/skills/style.module.scss");
/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_module_scss__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "C:\\Users\\joshm\\Documents\\_MY-PROJECTS\\gladiusglad.github.io\\components\\skills\\index.tsx",
    _s = $RefreshSig$();



function Skills(_ref) {
  _s();

  var skills = _ref.skills;
  var typing,
      skillIndex = 0,
      currentLength = 0;
  var timeouts = [];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      caret = _useState[0],
      setCaret = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
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

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
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
    className: _style_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.skills,
    children: [skill, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
      className: _style_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.caret,
      style: {
        visibility: caret ? 'visible' : 'hidden'
      },
      children: "_"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 12
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 60,
    columnNumber: 10
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9za2lsbHMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIlNraWxscyIsInNraWxscyIsInR5cGluZyIsInNraWxsSW5kZXgiLCJjdXJyZW50TGVuZ3RoIiwidGltZW91dHMiLCJ1c2VTdGF0ZSIsImNhcmV0Iiwic2V0Q2FyZXQiLCJza2lsbCIsInNldFNraWxsIiwiYWRkVGltZW91dCIsImNhbGxiYWNrIiwibXMiLCJwdXNoIiwic2V0VGltZW91dCIsInR5cGVTa2lsbCIsImN1cnJlbnRTa2lsbCIsInN1YnN0cmluZyIsImxlbmd0aCIsImRlbGV0ZVNraWxsIiwiTWF0aCIsInJhbmRvbSIsInVzZUVmZmVjdCIsImNhcmV0SW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsInByZXYiLCJjbGVhckludGVydmFsIiwiZm9yRWFjaCIsInQiLCJjbGVhclRpbWVvdXQiLCJzdHlsZXMiLCJ2aXNpYmlsaXR5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFFZSxTQUFTQSxNQUFULE9BQThDO0FBQUE7O0FBQUEsTUFBN0JDLE1BQTZCLFFBQTdCQSxNQUE2QjtBQUMzRCxNQUFJQyxNQUFKO0FBQUEsTUFBWUMsVUFBVSxHQUFHLENBQXpCO0FBQUEsTUFBNEJDLGFBQWEsR0FBRyxDQUE1QztBQUNBLE1BQU1DLFFBQVEsR0FBRyxFQUFqQjs7QUFGMkQsa0JBR2pDQyxzREFBUSxDQUFDLElBQUQsQ0FIeUI7QUFBQSxNQUdwREMsS0FIb0Q7QUFBQSxNQUc3Q0MsUUFINkM7O0FBQUEsbUJBSWpDRixzREFBUSxDQUFDLEVBQUQsQ0FKeUI7QUFBQSxNQUlwREcsS0FKb0Q7QUFBQSxNQUk3Q0MsUUFKNkM7O0FBTTNELE1BQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLFFBQUQsRUFBV0MsRUFBWCxFQUFrQjtBQUNuQ1IsWUFBUSxDQUFDUyxJQUFULENBQWNDLFVBQVUsQ0FBQ0gsUUFBRCxFQUFXQyxFQUFYLENBQXhCO0FBQ0QsR0FGRDs7QUFJQSxNQUFNRyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQ3RCZCxVQUFNLEdBQUcsSUFBVDtBQUNBLFFBQUllLFlBQVksR0FBR2hCLE1BQU0sQ0FBQ0UsVUFBRCxDQUF6QjtBQUVBQyxpQkFBYTtBQUNiTSxZQUFRLENBQUNPLFlBQVksQ0FBQ0MsU0FBYixDQUF1QixDQUF2QixFQUEwQmQsYUFBMUIsQ0FBRCxDQUFSOztBQUVBLFFBQUlBLGFBQWEsS0FBS2EsWUFBWSxDQUFDRSxNQUFuQyxFQUEyQztBQUN6Q2pCLFlBQU0sR0FBRyxLQUFUO0FBQ0FTLGdCQUFVLENBQUNTLFdBQUQsRUFBYyxJQUFkLENBQVY7QUFDRCxLQUhELE1BR087QUFDTFQsZ0JBQVUsQ0FBQ0ssU0FBRCxFQUFZSyxJQUFJLENBQUNDLE1BQUwsS0FBZ0IsR0FBaEIsR0FBc0IsRUFBbEMsQ0FBVjtBQUNEO0FBQ0YsR0FiRDs7QUFlQSxNQUFNRixXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQ3hCbEIsVUFBTSxHQUFHLElBQVQ7QUFDQSxRQUFJZSxZQUFZLEdBQUdoQixNQUFNLENBQUNFLFVBQUQsQ0FBekI7QUFFQUMsaUJBQWE7QUFDYk0sWUFBUSxDQUFDTyxZQUFZLENBQUNDLFNBQWIsQ0FBdUIsQ0FBdkIsRUFBMEJkLGFBQTFCLENBQUQsQ0FBUjs7QUFFQSxRQUFJQSxhQUFhLEtBQUssQ0FBdEIsRUFBeUI7QUFDdkJGLFlBQU0sR0FBRyxLQUFUOztBQUNBLFVBQUlDLFVBQVUsS0FBS0YsTUFBTSxDQUFDa0IsTUFBUCxHQUFnQixDQUFuQyxFQUFzQztBQUNwQ2hCLGtCQUFVLEdBQUcsQ0FBYjtBQUNELE9BRkQsTUFFTztBQUNMQSxrQkFBVTtBQUNYOztBQUNEUSxnQkFBVSxDQUFDSyxTQUFELEVBQVksRUFBWixDQUFWO0FBQ0QsS0FSRCxNQVFPO0FBQ0xMLGdCQUFVLENBQUNTLFdBQUQsRUFBZWhCLGFBQWEsS0FBS2EsWUFBWSxDQUFDRSxNQUFiLEdBQXNCLENBQXpDLEdBQThDLEdBQTlDLEdBQW9ELEVBQWxFLENBQVY7QUFDRDtBQUNGLEdBbEJEOztBQW9CQUkseURBQVMsQ0FBQyxZQUFNO0FBQ2RaLGNBQVUsQ0FBQ0ssU0FBRCxFQUFZLElBQVosQ0FBVjtBQUNBLFFBQU1RLGFBQWEsR0FBR0MsV0FBVyxDQUFDO0FBQUEsYUFBTWpCLFFBQVEsQ0FBQyxVQUFDa0IsSUFBRDtBQUFBLGVBQVV4QixNQUFNLElBQUksQ0FBQ3dCLElBQXJCO0FBQUEsT0FBRCxDQUFkO0FBQUEsS0FBRCxFQUE0QyxHQUE1QyxDQUFqQztBQUVBLFdBQU8sWUFBTTtBQUNYQyxtQkFBYSxDQUFDSCxhQUFELENBQWI7QUFDQW5CLGNBQVEsQ0FBQ3VCLE9BQVQsQ0FBaUIsVUFBQUMsQ0FBQztBQUFBLGVBQUlDLFlBQVksQ0FBQ0QsQ0FBRCxDQUFoQjtBQUFBLE9BQWxCO0FBQ0QsS0FIRDtBQUlELEdBUlEsRUFRTixFQVJNLENBQVQ7QUFVQSxzQkFBTztBQUFLLGFBQVMsRUFBRUUseURBQU0sQ0FBQzlCLE1BQXZCO0FBQUEsZUFDSlEsS0FESSxlQUNFO0FBQUcsZUFBUyxFQUFFc0IseURBQU0sQ0FBQ3hCLEtBQXJCO0FBQTRCLFdBQUssRUFBRTtBQUFDeUIsa0JBQVUsRUFBRXpCLEtBQUssR0FBRyxTQUFILEdBQWU7QUFBakMsT0FBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUdEOztHQTFEdUJQLE07O0tBQUFBLE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZWRjZTg2M2ZiNmMwZmUzNTk4ZTYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZS5tb2R1bGUuc2NzcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNraWxscyh7c2tpbGxzfToge3NraWxsczogc3RyaW5nW119KSB7XHJcbiAgbGV0IHR5cGluZywgc2tpbGxJbmRleCA9IDAsIGN1cnJlbnRMZW5ndGggPSAwXHJcbiAgY29uc3QgdGltZW91dHMgPSBbXVxyXG4gIGNvbnN0IFtjYXJldCwgc2V0Q2FyZXRdID0gdXNlU3RhdGUodHJ1ZSlcclxuICBjb25zdCBbc2tpbGwsIHNldFNraWxsXSA9IHVzZVN0YXRlKCcnKVxyXG5cclxuICBjb25zdCBhZGRUaW1lb3V0ID0gKGNhbGxiYWNrLCBtcykgPT4ge1xyXG4gICAgdGltZW91dHMucHVzaChzZXRUaW1lb3V0KGNhbGxiYWNrLCBtcykpXHJcbiAgfVxyXG5cclxuICBjb25zdCB0eXBlU2tpbGwgPSAoKSA9PiB7XHJcbiAgICB0eXBpbmcgPSB0cnVlXHJcbiAgICBsZXQgY3VycmVudFNraWxsID0gc2tpbGxzW3NraWxsSW5kZXhdXHJcblxyXG4gICAgY3VycmVudExlbmd0aCsrXHJcbiAgICBzZXRTa2lsbChjdXJyZW50U2tpbGwuc3Vic3RyaW5nKDAsIGN1cnJlbnRMZW5ndGgpKVxyXG5cclxuICAgIGlmIChjdXJyZW50TGVuZ3RoID09PSBjdXJyZW50U2tpbGwubGVuZ3RoKSB7XHJcbiAgICAgIHR5cGluZyA9IGZhbHNlXHJcbiAgICAgIGFkZFRpbWVvdXQoZGVsZXRlU2tpbGwsIDIwMDApXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBhZGRUaW1lb3V0KHR5cGVTa2lsbCwgTWF0aC5yYW5kb20oKSAqIDE1MCArIDE1KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgZGVsZXRlU2tpbGwgPSAoKSA9PiB7XHJcbiAgICB0eXBpbmcgPSB0cnVlXHJcbiAgICBsZXQgY3VycmVudFNraWxsID0gc2tpbGxzW3NraWxsSW5kZXhdXHJcblxyXG4gICAgY3VycmVudExlbmd0aC0tXHJcbiAgICBzZXRTa2lsbChjdXJyZW50U2tpbGwuc3Vic3RyaW5nKDAsIGN1cnJlbnRMZW5ndGgpKVxyXG5cclxuICAgIGlmIChjdXJyZW50TGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHR5cGluZyA9IGZhbHNlXHJcbiAgICAgIGlmIChza2lsbEluZGV4ID09PSBza2lsbHMubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgIHNraWxsSW5kZXggPSAwXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2tpbGxJbmRleCsrXHJcbiAgICAgIH1cclxuICAgICAgYWRkVGltZW91dCh0eXBlU2tpbGwsIDUwKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYWRkVGltZW91dChkZWxldGVTa2lsbCwgKGN1cnJlbnRMZW5ndGggPT09IGN1cnJlbnRTa2lsbC5sZW5ndGggLSAxKSA/IDMwMCA6IDIwKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGFkZFRpbWVvdXQodHlwZVNraWxsLCAxMDAwKVxyXG4gICAgY29uc3QgY2FyZXRJbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHNldENhcmV0KChwcmV2KSA9PiB0eXBpbmcgfHwgIXByZXYpLCA1MDApXHJcblxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgY2xlYXJJbnRlcnZhbChjYXJldEludGVydmFsKVxyXG4gICAgICB0aW1lb3V0cy5mb3JFYWNoKHQgPT4gY2xlYXJUaW1lb3V0KHQpKVxyXG4gICAgfVxyXG4gIH0sIFtdKVxyXG5cclxuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5za2lsbHN9PlxyXG4gICAge3NraWxsfTxpIGNsYXNzTmFtZT17c3R5bGVzLmNhcmV0fSBzdHlsZT17e3Zpc2liaWxpdHk6IGNhcmV0ID8gJ3Zpc2libGUnIDogJ2hpZGRlbid9fT5fPC9pPlxyXG4gIDwvZGl2PlxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==