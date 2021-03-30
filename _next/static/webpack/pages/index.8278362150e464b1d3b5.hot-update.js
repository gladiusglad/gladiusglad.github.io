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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9za2lsbHMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIlNraWxscyIsInNraWxscyIsInByb3BzIiwidHlwaW5nIiwic2tpbGxJbmRleCIsImN1cnJlbnRMZW5ndGgiLCJ0aW1lb3V0cyIsInVzZVN0YXRlIiwiY2FyZXQiLCJzZXRDYXJldCIsInNraWxsIiwic2V0U2tpbGwiLCJhZGRUaW1lb3V0IiwiY2FsbGJhY2siLCJtcyIsInB1c2giLCJzZXRUaW1lb3V0IiwidHlwZVNraWxsIiwiY3VycmVudFNraWxsIiwic3Vic3RyaW5nIiwibGVuZ3RoIiwiZGVsZXRlU2tpbGwiLCJNYXRoIiwicmFuZG9tIiwidXNlRWZmZWN0IiwiY2FyZXRJbnRlcnZhbCIsInNldEludGVydmFsIiwicHJldiIsImNsZWFySW50ZXJ2YWwiLCJmb3JFYWNoIiwidCIsImNsZWFyVGltZW91dCIsInN0eWxlcyIsInZpc2liaWxpdHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBRWUsU0FBU0EsTUFBVCxPQUErRjtBQUFBOztBQUFBLE1BQTlFQyxNQUE4RSxRQUE5RUEsTUFBOEU7QUFBQSxNQUFuRUMsS0FBbUU7O0FBQzVHLE1BQUlDLE1BQUo7QUFBQSxNQUFZQyxVQUFVLEdBQUcsQ0FBekI7QUFBQSxNQUE0QkMsYUFBYSxHQUFHLENBQTVDO0FBQ0EsTUFBTUMsUUFBUSxHQUFHLEVBQWpCOztBQUY0RyxrQkFHbEZDLHNEQUFRLENBQUMsSUFBRCxDQUgwRTtBQUFBLE1BR3JHQyxLQUhxRztBQUFBLE1BRzlGQyxRQUg4Rjs7QUFBQSxtQkFJbEZGLHNEQUFRLENBQUMsRUFBRCxDQUowRTtBQUFBLE1BSXJHRyxLQUpxRztBQUFBLE1BSTlGQyxRQUo4Rjs7QUFNNUcsTUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsUUFBRCxFQUFXQyxFQUFYLEVBQWtCO0FBQ25DUixZQUFRLENBQUNTLElBQVQsQ0FBY0MsVUFBVSxDQUFDSCxRQUFELEVBQVdDLEVBQVgsQ0FBeEI7QUFDRCxHQUZEOztBQUlBLE1BQU1HLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFDdEJkLFVBQU0sR0FBRyxJQUFUO0FBQ0EsUUFBSWUsWUFBWSxHQUFHakIsTUFBTSxDQUFDRyxVQUFELENBQXpCO0FBRUFDLGlCQUFhO0FBQ2JNLFlBQVEsQ0FBQ08sWUFBWSxDQUFDQyxTQUFiLENBQXVCLENBQXZCLEVBQTBCZCxhQUExQixDQUFELENBQVI7O0FBRUEsUUFBSUEsYUFBYSxLQUFLYSxZQUFZLENBQUNFLE1BQW5DLEVBQTJDO0FBQ3pDakIsWUFBTSxHQUFHLEtBQVQ7QUFDQVMsZ0JBQVUsQ0FBQ1MsV0FBRCxFQUFjLElBQWQsQ0FBVjtBQUNELEtBSEQsTUFHTztBQUNMVCxnQkFBVSxDQUFDSyxTQUFELEVBQVlLLElBQUksQ0FBQ0MsTUFBTCxLQUFnQixHQUFoQixHQUFzQixFQUFsQyxDQUFWO0FBQ0Q7QUFDRixHQWJEOztBQWVBLE1BQU1GLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDeEJsQixVQUFNLEdBQUcsSUFBVDtBQUNBLFFBQUllLFlBQVksR0FBR2pCLE1BQU0sQ0FBQ0csVUFBRCxDQUF6QjtBQUVBQyxpQkFBYTtBQUNiTSxZQUFRLENBQUNPLFlBQVksQ0FBQ0MsU0FBYixDQUF1QixDQUF2QixFQUEwQmQsYUFBMUIsQ0FBRCxDQUFSOztBQUVBLFFBQUlBLGFBQWEsS0FBSyxDQUF0QixFQUF5QjtBQUN2QkYsWUFBTSxHQUFHLEtBQVQ7O0FBQ0EsVUFBSUMsVUFBVSxLQUFLSCxNQUFNLENBQUNtQixNQUFQLEdBQWdCLENBQW5DLEVBQXNDO0FBQ3BDaEIsa0JBQVUsR0FBRyxDQUFiO0FBQ0QsT0FGRCxNQUVPO0FBQ0xBLGtCQUFVO0FBQ1g7O0FBQ0RRLGdCQUFVLENBQUNLLFNBQUQsRUFBWSxFQUFaLENBQVY7QUFDRCxLQVJELE1BUU87QUFDTEwsZ0JBQVUsQ0FBQ1MsV0FBRCxFQUFlaEIsYUFBYSxLQUFLYSxZQUFZLENBQUNFLE1BQWIsR0FBc0IsQ0FBekMsR0FBOEMsR0FBOUMsR0FBb0QsRUFBbEUsQ0FBVjtBQUNEO0FBQ0YsR0FsQkQ7O0FBb0JBSSx5REFBUyxDQUFDLFlBQU07QUFDZFosY0FBVSxDQUFDSyxTQUFELEVBQVksSUFBWixDQUFWO0FBQ0EsUUFBTVEsYUFBYSxHQUFHQyxXQUFXLENBQUM7QUFBQSxhQUFNakIsUUFBUSxDQUFDLFVBQUNrQixJQUFEO0FBQUEsZUFBVXhCLE1BQU0sSUFBSSxDQUFDd0IsSUFBckI7QUFBQSxPQUFELENBQWQ7QUFBQSxLQUFELEVBQTRDLEdBQTVDLENBQWpDO0FBRUEsV0FBTyxZQUFNO0FBQ1hDLG1CQUFhLENBQUNILGFBQUQsQ0FBYjtBQUNBbkIsY0FBUSxDQUFDdUIsT0FBVCxDQUFpQixVQUFBQyxDQUFDO0FBQUEsZUFBSUMsWUFBWSxDQUFDRCxDQUFELENBQWhCO0FBQUEsT0FBbEI7QUFDRCxLQUhEO0FBSUQsR0FSUSxFQVFOLEVBUk0sQ0FBVDtBQVVBLHNCQUNFO0FBQUssYUFBUyxFQUFFRSx5REFBTSxDQUFDL0IsTUFBdkI7QUFBQSxlQUNHUyxLQURILGVBQ1M7QUFBRyxlQUFTLEVBQUVzQix5REFBTSxDQUFDeEIsS0FBckI7QUFBNEIsV0FBSyxFQUFFO0FBQUN5QixrQkFBVSxFQUFFekIsS0FBSyxHQUFHLFNBQUgsR0FBZTtBQUFqQyxPQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBS0Q7O0dBNUR1QlIsTTs7S0FBQUEsTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC44Mjc4MzYyMTUwZTQ2NGIxZDNiNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZS5tb2R1bGUuc2NzcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNraWxscyh7c2tpbGxzLCAuLi5wcm9wc306IHtza2lsbHM6IHN0cmluZ1tdfSAmIFJlYWN0LkhUTUxBdHRyaWJ1dGVzPEhUTUxEaXZFbGVtZW50Pikge1xyXG4gIGxldCB0eXBpbmcsIHNraWxsSW5kZXggPSAwLCBjdXJyZW50TGVuZ3RoID0gMFxyXG4gIGNvbnN0IHRpbWVvdXRzID0gW11cclxuICBjb25zdCBbY2FyZXQsIHNldENhcmV0XSA9IHVzZVN0YXRlKHRydWUpXHJcbiAgY29uc3QgW3NraWxsLCBzZXRTa2lsbF0gPSB1c2VTdGF0ZSgnJylcclxuXHJcbiAgY29uc3QgYWRkVGltZW91dCA9IChjYWxsYmFjaywgbXMpID0+IHtcclxuICAgIHRpbWVvdXRzLnB1c2goc2V0VGltZW91dChjYWxsYmFjaywgbXMpKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgdHlwZVNraWxsID0gKCkgPT4ge1xyXG4gICAgdHlwaW5nID0gdHJ1ZVxyXG4gICAgbGV0IGN1cnJlbnRTa2lsbCA9IHNraWxsc1tza2lsbEluZGV4XVxyXG5cclxuICAgIGN1cnJlbnRMZW5ndGgrK1xyXG4gICAgc2V0U2tpbGwoY3VycmVudFNraWxsLnN1YnN0cmluZygwLCBjdXJyZW50TGVuZ3RoKSlcclxuXHJcbiAgICBpZiAoY3VycmVudExlbmd0aCA9PT0gY3VycmVudFNraWxsLmxlbmd0aCkge1xyXG4gICAgICB0eXBpbmcgPSBmYWxzZVxyXG4gICAgICBhZGRUaW1lb3V0KGRlbGV0ZVNraWxsLCAyMDAwKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYWRkVGltZW91dCh0eXBlU2tpbGwsIE1hdGgucmFuZG9tKCkgKiAxNTAgKyAxNSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IGRlbGV0ZVNraWxsID0gKCkgPT4ge1xyXG4gICAgdHlwaW5nID0gdHJ1ZVxyXG4gICAgbGV0IGN1cnJlbnRTa2lsbCA9IHNraWxsc1tza2lsbEluZGV4XVxyXG5cclxuICAgIGN1cnJlbnRMZW5ndGgtLVxyXG4gICAgc2V0U2tpbGwoY3VycmVudFNraWxsLnN1YnN0cmluZygwLCBjdXJyZW50TGVuZ3RoKSlcclxuXHJcbiAgICBpZiAoY3VycmVudExlbmd0aCA9PT0gMCkge1xyXG4gICAgICB0eXBpbmcgPSBmYWxzZVxyXG4gICAgICBpZiAoc2tpbGxJbmRleCA9PT0gc2tpbGxzLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICBza2lsbEluZGV4ID0gMFxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNraWxsSW5kZXgrK1xyXG4gICAgICB9XHJcbiAgICAgIGFkZFRpbWVvdXQodHlwZVNraWxsLCA1MClcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGFkZFRpbWVvdXQoZGVsZXRlU2tpbGwsIChjdXJyZW50TGVuZ3RoID09PSBjdXJyZW50U2tpbGwubGVuZ3RoIC0gMSkgPyAzMDAgOiAyMClcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBhZGRUaW1lb3V0KHR5cGVTa2lsbCwgMTAwMClcclxuICAgIGNvbnN0IGNhcmV0SW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiBzZXRDYXJldCgocHJldikgPT4gdHlwaW5nIHx8ICFwcmV2KSwgNTAwKVxyXG5cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIGNsZWFySW50ZXJ2YWwoY2FyZXRJbnRlcnZhbClcclxuICAgICAgdGltZW91dHMuZm9yRWFjaCh0ID0+IGNsZWFyVGltZW91dCh0KSlcclxuICAgIH1cclxuICB9LCBbXSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2tpbGxzfT5cclxuICAgICAge3NraWxsfTxpIGNsYXNzTmFtZT17c3R5bGVzLmNhcmV0fSBzdHlsZT17e3Zpc2liaWxpdHk6IGNhcmV0ID8gJ3Zpc2libGUnIDogJ2hpZGRlbid9fT5fPC9pPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==