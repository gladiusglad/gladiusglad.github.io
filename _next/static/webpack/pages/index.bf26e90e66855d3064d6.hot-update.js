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
/* harmony import */ var C_Users_joshm_Documents_MY_PROJECTS_gladiusglad_github_io_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_joshm_Documents_MY_PROJECTS_gladiusglad_github_io_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.module.scss */ "./components/skills/style.module.scss");
/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_module_scss__WEBPACK_IMPORTED_MODULE_4__);




var _jsxFileName = "C:\\Users\\joshm\\Documents\\_MY-PROJECTS\\gladiusglad.github.io\\components\\skills\\index.tsx",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_joshm_Documents_MY_PROJECTS_gladiusglad_github_io_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



function Skills(_ref) {
  _s();

  var skills = _ref.skills,
      props = Object(C_Users_joshm_Documents_MY_PROJECTS_gladiusglad_github_io_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, ["skills"]);

  var typing,
      skillIndex = 0,
      currentLength = 0;
  var timeouts = [];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(true),
      caret = _useState[0],
      setCaret = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
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

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
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
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", _objectSpread(_objectSpread({
    className: _style_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.skills
  }, props), {}, {
    children: [skill, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("i", {
      className: _style_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.caret,
      style: {
        visibility: caret ? 'visible' : 'hidden'
      },
      children: "_"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 14
    }, this)]
  }), void 0, true, {
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9za2lsbHMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIlNraWxscyIsInNraWxscyIsInByb3BzIiwidHlwaW5nIiwic2tpbGxJbmRleCIsImN1cnJlbnRMZW5ndGgiLCJ0aW1lb3V0cyIsInVzZVN0YXRlIiwiY2FyZXQiLCJzZXRDYXJldCIsInNraWxsIiwic2V0U2tpbGwiLCJhZGRUaW1lb3V0IiwiY2FsbGJhY2siLCJtcyIsInB1c2giLCJzZXRUaW1lb3V0IiwidHlwZVNraWxsIiwiY3VycmVudFNraWxsIiwic3Vic3RyaW5nIiwibGVuZ3RoIiwiZGVsZXRlU2tpbGwiLCJNYXRoIiwicmFuZG9tIiwidXNlRWZmZWN0IiwiY2FyZXRJbnRlcnZhbCIsInNldEludGVydmFsIiwicHJldiIsImNsZWFySW50ZXJ2YWwiLCJmb3JFYWNoIiwidCIsImNsZWFyVGltZW91dCIsInN0eWxlcyIsInZpc2liaWxpdHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBRWUsU0FBU0EsTUFBVCxPQUErRjtBQUFBOztBQUFBLE1BQTlFQyxNQUE4RSxRQUE5RUEsTUFBOEU7QUFBQSxNQUFuRUMsS0FBbUU7O0FBQzVHLE1BQUlDLE1BQUo7QUFBQSxNQUFZQyxVQUFVLEdBQUcsQ0FBekI7QUFBQSxNQUE0QkMsYUFBYSxHQUFHLENBQTVDO0FBQ0EsTUFBTUMsUUFBUSxHQUFHLEVBQWpCOztBQUY0RyxrQkFHbEZDLHNEQUFRLENBQUMsSUFBRCxDQUgwRTtBQUFBLE1BR3JHQyxLQUhxRztBQUFBLE1BRzlGQyxRQUg4Rjs7QUFBQSxtQkFJbEZGLHNEQUFRLENBQUMsRUFBRCxDQUowRTtBQUFBLE1BSXJHRyxLQUpxRztBQUFBLE1BSTlGQyxRQUo4Rjs7QUFNNUcsTUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsUUFBRCxFQUFXQyxFQUFYLEVBQWtCO0FBQ25DUixZQUFRLENBQUNTLElBQVQsQ0FBY0MsVUFBVSxDQUFDSCxRQUFELEVBQVdDLEVBQVgsQ0FBeEI7QUFDRCxHQUZEOztBQUlBLE1BQU1HLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFDdEJkLFVBQU0sR0FBRyxJQUFUO0FBQ0EsUUFBSWUsWUFBWSxHQUFHakIsTUFBTSxDQUFDRyxVQUFELENBQXpCO0FBRUFDLGlCQUFhO0FBQ2JNLFlBQVEsQ0FBQ08sWUFBWSxDQUFDQyxTQUFiLENBQXVCLENBQXZCLEVBQTBCZCxhQUExQixDQUFELENBQVI7O0FBRUEsUUFBSUEsYUFBYSxLQUFLYSxZQUFZLENBQUNFLE1BQW5DLEVBQTJDO0FBQ3pDakIsWUFBTSxHQUFHLEtBQVQ7QUFDQVMsZ0JBQVUsQ0FBQ1MsV0FBRCxFQUFjLElBQWQsQ0FBVjtBQUNELEtBSEQsTUFHTztBQUNMVCxnQkFBVSxDQUFDSyxTQUFELEVBQVlLLElBQUksQ0FBQ0MsTUFBTCxLQUFnQixHQUFoQixHQUFzQixFQUFsQyxDQUFWO0FBQ0Q7QUFDRixHQWJEOztBQWVBLE1BQU1GLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDeEJsQixVQUFNLEdBQUcsSUFBVDtBQUNBLFFBQUllLFlBQVksR0FBR2pCLE1BQU0sQ0FBQ0csVUFBRCxDQUF6QjtBQUVBQyxpQkFBYTtBQUNiTSxZQUFRLENBQUNPLFlBQVksQ0FBQ0MsU0FBYixDQUF1QixDQUF2QixFQUEwQmQsYUFBMUIsQ0FBRCxDQUFSOztBQUVBLFFBQUlBLGFBQWEsS0FBSyxDQUF0QixFQUF5QjtBQUN2QkYsWUFBTSxHQUFHLEtBQVQ7O0FBQ0EsVUFBSUMsVUFBVSxLQUFLSCxNQUFNLENBQUNtQixNQUFQLEdBQWdCLENBQW5DLEVBQXNDO0FBQ3BDaEIsa0JBQVUsR0FBRyxDQUFiO0FBQ0QsT0FGRCxNQUVPO0FBQ0xBLGtCQUFVO0FBQ1g7O0FBQ0RRLGdCQUFVLENBQUNLLFNBQUQsRUFBWSxFQUFaLENBQVY7QUFDRCxLQVJELE1BUU87QUFDTEwsZ0JBQVUsQ0FBQ1MsV0FBRCxFQUFlaEIsYUFBYSxLQUFLYSxZQUFZLENBQUNFLE1BQWIsR0FBc0IsQ0FBekMsR0FBOEMsR0FBOUMsR0FBb0QsRUFBbEUsQ0FBVjtBQUNEO0FBQ0YsR0FsQkQ7O0FBb0JBSSx5REFBUyxDQUFDLFlBQU07QUFDZFosY0FBVSxDQUFDSyxTQUFELEVBQVksSUFBWixDQUFWO0FBQ0EsUUFBTVEsYUFBYSxHQUFHQyxXQUFXLENBQUM7QUFBQSxhQUFNakIsUUFBUSxDQUFDLFVBQUNrQixJQUFEO0FBQUEsZUFBVXhCLE1BQU0sSUFBSSxDQUFDd0IsSUFBckI7QUFBQSxPQUFELENBQWQ7QUFBQSxLQUFELEVBQTRDLEdBQTVDLENBQWpDO0FBRUEsV0FBTyxZQUFNO0FBQ1hDLG1CQUFhLENBQUNILGFBQUQsQ0FBYjtBQUNBbkIsY0FBUSxDQUFDdUIsT0FBVCxDQUFpQixVQUFBQyxDQUFDO0FBQUEsZUFBSUMsWUFBWSxDQUFDRCxDQUFELENBQWhCO0FBQUEsT0FBbEI7QUFDRCxLQUhEO0FBSUQsR0FSUSxFQVFOLEVBUk0sQ0FBVDtBQVVBLHNCQUNFO0FBQUssYUFBUyxFQUFFRSx5REFBTSxDQUFDL0I7QUFBdkIsS0FBbUNDLEtBQW5DO0FBQUEsZUFDR1EsS0FESCxlQUNTO0FBQUcsZUFBUyxFQUFFc0IseURBQU0sQ0FBQ3hCLEtBQXJCO0FBQTRCLFdBQUssRUFBRTtBQUFDeUIsa0JBQVUsRUFBRXpCLEtBQUssR0FBRyxTQUFILEdBQWU7QUFBakMsT0FBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFEVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQUtEOztHQTVEdUJSLE07O0tBQUFBLE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYmYyNmU5MGU2Njg1NWQzMDY0ZDYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGUubW9kdWxlLnNjc3MnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTa2lsbHMoe3NraWxscywgLi4ucHJvcHN9OiB7c2tpbGxzOiBzdHJpbmdbXX0gJiBSZWFjdC5IVE1MQXR0cmlidXRlczxIVE1MRGl2RWxlbWVudD4pIHtcclxuICBsZXQgdHlwaW5nLCBza2lsbEluZGV4ID0gMCwgY3VycmVudExlbmd0aCA9IDBcclxuICBjb25zdCB0aW1lb3V0cyA9IFtdXHJcbiAgY29uc3QgW2NhcmV0LCBzZXRDYXJldF0gPSB1c2VTdGF0ZSh0cnVlKVxyXG4gIGNvbnN0IFtza2lsbCwgc2V0U2tpbGxdID0gdXNlU3RhdGUoJycpXHJcblxyXG4gIGNvbnN0IGFkZFRpbWVvdXQgPSAoY2FsbGJhY2ssIG1zKSA9PiB7XHJcbiAgICB0aW1lb3V0cy5wdXNoKHNldFRpbWVvdXQoY2FsbGJhY2ssIG1zKSlcclxuICB9XHJcblxyXG4gIGNvbnN0IHR5cGVTa2lsbCA9ICgpID0+IHtcclxuICAgIHR5cGluZyA9IHRydWVcclxuICAgIGxldCBjdXJyZW50U2tpbGwgPSBza2lsbHNbc2tpbGxJbmRleF1cclxuXHJcbiAgICBjdXJyZW50TGVuZ3RoKytcclxuICAgIHNldFNraWxsKGN1cnJlbnRTa2lsbC5zdWJzdHJpbmcoMCwgY3VycmVudExlbmd0aCkpXHJcblxyXG4gICAgaWYgKGN1cnJlbnRMZW5ndGggPT09IGN1cnJlbnRTa2lsbC5sZW5ndGgpIHtcclxuICAgICAgdHlwaW5nID0gZmFsc2VcclxuICAgICAgYWRkVGltZW91dChkZWxldGVTa2lsbCwgMjAwMClcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGFkZFRpbWVvdXQodHlwZVNraWxsLCBNYXRoLnJhbmRvbSgpICogMTUwICsgMTUpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBkZWxldGVTa2lsbCA9ICgpID0+IHtcclxuICAgIHR5cGluZyA9IHRydWVcclxuICAgIGxldCBjdXJyZW50U2tpbGwgPSBza2lsbHNbc2tpbGxJbmRleF1cclxuXHJcbiAgICBjdXJyZW50TGVuZ3RoLS1cclxuICAgIHNldFNraWxsKGN1cnJlbnRTa2lsbC5zdWJzdHJpbmcoMCwgY3VycmVudExlbmd0aCkpXHJcblxyXG4gICAgaWYgKGN1cnJlbnRMZW5ndGggPT09IDApIHtcclxuICAgICAgdHlwaW5nID0gZmFsc2VcclxuICAgICAgaWYgKHNraWxsSW5kZXggPT09IHNraWxscy5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgc2tpbGxJbmRleCA9IDBcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBza2lsbEluZGV4KytcclxuICAgICAgfVxyXG4gICAgICBhZGRUaW1lb3V0KHR5cGVTa2lsbCwgNTApXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBhZGRUaW1lb3V0KGRlbGV0ZVNraWxsLCAoY3VycmVudExlbmd0aCA9PT0gY3VycmVudFNraWxsLmxlbmd0aCAtIDEpID8gMzAwIDogMjApXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgYWRkVGltZW91dCh0eXBlU2tpbGwsIDEwMDApXHJcbiAgICBjb25zdCBjYXJldEludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4gc2V0Q2FyZXQoKHByZXYpID0+IHR5cGluZyB8fCAhcHJldiksIDUwMClcclxuXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBjbGVhckludGVydmFsKGNhcmV0SW50ZXJ2YWwpXHJcbiAgICAgIHRpbWVvdXRzLmZvckVhY2godCA9PiBjbGVhclRpbWVvdXQodCkpXHJcbiAgICB9XHJcbiAgfSwgW10pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNraWxsc30gey4uLnByb3BzfT5cclxuICAgICAge3NraWxsfTxpIGNsYXNzTmFtZT17c3R5bGVzLmNhcmV0fSBzdHlsZT17e3Zpc2liaWxpdHk6IGNhcmV0ID8gJ3Zpc2libGUnIDogJ2hpZGRlbid9fT5fPC9pPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==