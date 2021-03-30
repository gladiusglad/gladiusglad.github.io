webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_joshm_Documents_MY_PROJECTS_gladiusglad_github_io_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_joshm_Documents_MY_PROJECTS_gladiusglad_github_io_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_joshm_Documents_MY_PROJECTS_gladiusglad_github_io_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_joshm_Documents_MY_PROJECTS_gladiusglad_github_io_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_section__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/section */ "./components/section/index.tsx");
/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/container */ "./components/container/index.tsx");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
/* harmony import */ var _styles_index_module_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../styles/index.module.scss */ "./styles/index.module.scss");
/* harmony import */ var _styles_index_module_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_index_module_scss__WEBPACK_IMPORTED_MODULE_10__);





var _jsxFileName = "C:\\Users\\joshm\\Documents\\_MY-PROJECTS\\gladiusglad.github.io\\pages\\index.tsx",
    _s = $RefreshSig$();









var title = 'gladgladius',
    description = 'hello! i\'m a new developer currently dabbling in react, java, and more. learn more about me!',
    skills = ['react', 'javascript', 'html', 'css/scss/sass', 'mongoDB', 'mySQL', 'webpack', 'next.js', 'java', 'c#', 'wpf', 'graphics', 'video editing'];
function Home() {
  _s();

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

    var fluid = /*#__PURE__*/function () {
      var _ref = Object(C_Users_joshm_Documents_MY_PROJECTS_gladiusglad_github_io_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_joshm_Documents_MY_PROJECTS_gladiusglad_github_io_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
        var WebglFluid;
        return C_Users_joshm_Documents_MY_PROJECTS_gladiusglad_github_io_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.t.bind(null, /*! webgl-fluid */ "./node_modules/webgl-fluid/dist/webgl-fluid.umd.min.js", 7));

              case 2:
                WebglFluid = _context.sent["default"];
                WebglFluid(document.querySelector('canvas'), {
                  BLOOM: false,
                  SUNRAYS: false
                });

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function fluid() {
        return _ref.apply(this, arguments);
      };
    }();

    fluid();
    return function () {
      clearInterval(caretInterval);
      timeouts.forEach(function (t) {
        return clearTimeout(t);
      });
    };
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "description",
        content: description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:title",
        content: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:description",
        content: description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "twitter:title",
        content: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_index_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.jumbotron,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("canvas", {
        width: 0,
        height: 0,
        className: _styles_index_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.canvas
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_container__WEBPACK_IMPORTED_MODULE_7__["default"], {
        className: _styles_index_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.container,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          style: {
            fontWeight: 300,
            marginBottom: '-0.5rem'
          },
          children: "hello! i'm"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_5___default.a, {
          unoptimized: true,
          src: "./img/gladgladius-logo.png",
          width: 475,
          height: 220,
          alt: "gladgladius"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_index_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.skills,
          children: [skill, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
            className: _styles_index_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.caret,
            style: {
              visibility: caret ? 'visible' : 'hidden'
            },
            children: "_"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 108,
            columnNumber: 18
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            marginTop: '3rem',
            padding: '2rem 0 0 0',
            textAlign: 'center'
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              title: "gladiusglad",
              className: "".concat(_styles_index_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.contact, " ").concat(_styles_index_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.icon),
              href: "https://github.com/gladiusglad",
              target: "__blank",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
                icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_9__["faGithub"]
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 113,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 112,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              title: "glad#2095",
              className: "".concat(_styles_index_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.contact, " ").concat(_styles_index_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.icon),
              href: "https://discord.com/users/443441102805270528",
              target: "__blank",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
                icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_9__["faDiscord"]
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 116,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 115,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            style: {
              marginTop: 5
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              className: "".concat(_styles_index_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.contact, " ").concat(_styles_index_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.email),
              href: "mailto:defoverthought@gmail.com",
              children: "defoverthought@gmail.com"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 120,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 119,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_section__WEBPACK_IMPORTED_MODULE_6__["default"], {
      title: "About",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: ["Hello! I'm GladGladius. I'm a new developer currently dabbling in React, Next.js, and more. Although still a ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("em", {
          children: "couple"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 26
        }, this), " years away from a computer science degree, I'm pursuing web development - mostly front-end."]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: ["I love coding. I've been doing it since I was 8! As any other self-respecting nerdy preteen, I started with coding simple games. First with Scratch, then ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("em", {
          children: "real"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 34
        }, this), " game engines such as GameMaker and Unity. But I also dipped my toes in website-making - I'd steal some HTML by Inspect Element-ing websites and restyle it with my own CSS. My first deep dive, though, was not until 2020 when I wrote a website for a Minecraft server. It was at that moment that I found my true passion - ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strike", {
          children: "stealing code"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 62
        }, this), " web development. I've been coding ever since! I'm proficient in React, Next.js, and TypeScript. I'm also experienced in MySQL, Java, and C#. Besides coding, I can do some graphic design and video editing too."]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 5
    }, this)]
  }, void 0, true);
}

_s(Home, "ezw/S+rSFbVrD1s921HDasvnfFw=");

_c = Home;

var _c;

$RefreshReg$(_c, "Home");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbInRpdGxlIiwiZGVzY3JpcHRpb24iLCJza2lsbHMiLCJIb21lIiwidHlwaW5nIiwic2tpbGxJbmRleCIsImN1cnJlbnRMZW5ndGgiLCJ0aW1lb3V0cyIsInVzZVN0YXRlIiwiY2FyZXQiLCJzZXRDYXJldCIsInNraWxsIiwic2V0U2tpbGwiLCJhZGRUaW1lb3V0IiwiY2FsbGJhY2siLCJtcyIsInB1c2giLCJzZXRUaW1lb3V0IiwidHlwZVNraWxsIiwiY3VycmVudFNraWxsIiwic3Vic3RyaW5nIiwibGVuZ3RoIiwiZGVsZXRlU2tpbGwiLCJNYXRoIiwicmFuZG9tIiwidXNlRWZmZWN0IiwiY2FyZXRJbnRlcnZhbCIsInNldEludGVydmFsIiwicHJldiIsImZsdWlkIiwiV2ViZ2xGbHVpZCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIkJMT09NIiwiU1VOUkFZUyIsImNsZWFySW50ZXJ2YWwiLCJmb3JFYWNoIiwidCIsImNsZWFyVGltZW91dCIsInN0eWxlcyIsImp1bWJvdHJvbiIsImNhbnZhcyIsImNvbnRhaW5lciIsImZvbnRXZWlnaHQiLCJtYXJnaW5Cb3R0b20iLCJ2aXNpYmlsaXR5IiwibWFyZ2luVG9wIiwicGFkZGluZyIsInRleHRBbGlnbiIsImNvbnRhY3QiLCJpY29uIiwiZmFHaXRodWIiLCJmYURpc2NvcmQiLCJlbWFpbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQSxJQUFNQSxLQUFLLEdBQUcsYUFBZDtBQUFBLElBQ0VDLFdBQVcsR0FBRywrRkFEaEI7QUFBQSxJQUVFQyxNQUFNLEdBQUcsQ0FDUCxPQURPLEVBRVAsWUFGTyxFQUdQLE1BSE8sRUFJUCxlQUpPLEVBS1AsU0FMTyxFQU1QLE9BTk8sRUFPUCxTQVBPLEVBUVAsU0FS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QUNXLElBQTlCLENBQTlCO0FBQW9FLGtCQUFJLEVBQUMsOENBQXpFO0FBQXdILG9CQUFNLEVBQUMsU0FBL0g7QUFBQSxxQ0FDRSxxRUFBQyw4RUFBRDtBQUFpQixvQkFBSSxFQUFFRSw0RUFBU0E7QUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBU0U7QUFBSyxpQkFBSyxFQUFFO0FBQUNOLHVCQUFTLEVBQUU7QUFBWixhQUFaO0FBQUEsbUNBQ0U7QUFBRyx1QkFBUyxZQUFLUCxpRUFBTSxDQUFDVSxPQUFaLGNBQXVCVixpRUFBTSxDQUFDYyxLQUE5QixDQUFaO0FBQW1ELGtCQUFJLEVBQUMsaUNBQXhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUkssZUErQkwscUVBQUMsMkRBQUQ7QUFBUyxXQUFLLEVBQUMsT0FBZjtBQUFBLDhCQUNFO0FBQUEsaUpBRW1CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUtFO0FBQUEsOExBRTJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUYzQixtVkFLdUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTHZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQS9CSztBQUFBLGtCQUFQO0FBK0NEOztHQWhIdUJsRCxJOztLQUFBQSxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjFhMjhmYjhiZDljMjg3NTcyZWI2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCBTZWN0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvc2VjdGlvbidcbmltcG9ydCBDb250YWluZXIgZnJvbSAnLi4vY29tcG9uZW50cy9jb250YWluZXInXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnXG5pbXBvcnQgeyBmYURpc2NvcmQsIGZhR2l0aHViIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtYnJhbmRzLXN2Zy1pY29ucydcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvaW5kZXgubW9kdWxlLnNjc3MnXG5cbmNvbnN0IHRpdGxlID0gJ2dsYWRnbGFkaXVzJyxcbiAgZGVzY3JpcHRpb24gPSAnaGVsbG8hIGlcXCdtIGEgbmV3IGRldmVsb3BlciBjdXJyZW50bHkgZGFiYmxpbmcgaW4gcmVhY3QsIGphdmEsIGFuZCBtb3JlLiBsZWFybiBtb3JlIGFib3V0IG1lIScsXG4gIHNraWxscyA9IFtcbiAgICAncmVhY3QnLFxuICAgICdqYXZhc2NyaXB0JyxcbiAgICAnaHRtbCcsXG4gICAgJ2Nzcy9zY3NzL3Nhc3MnLFxuICAgICdtb25nb0RCJyxcbiAgICAnbXlTUUwnLFxuICAgICd3ZWJwYWNrJyxcbiAgICAnbmV4dC5qcycsXG4gICAgJ2phdmEnLFxuICAgICdjIycsXG4gICAgJ3dwZicsXG4gICAgJ2dyYXBoaWNzJyxcbiAgICAndmlkZW8gZWRpdGluZycsXG4gIF1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgbGV0IHR5cGluZywgc2tpbGxJbmRleCA9IDAsIGN1cnJlbnRMZW5ndGggPSAwXG4gIGNvbnN0IHRpbWVvdXRzID0gW11cbiAgY29uc3QgW2NhcmV0LCBzZXRDYXJldF0gPSB1c2VTdGF0ZSh0cnVlKVxuICBjb25zdCBbc2tpbGwsIHNldFNraWxsXSA9IHVzZVN0YXRlKCcnKVxuXG4gIGNvbnN0IGFkZFRpbWVvdXQgPSAoY2FsbGJhY2ssIG1zKSA9PiB7XG4gICAgdGltZW91dHMucHVzaChzZXRUaW1lb3V0KGNhbGxiYWNrLCBtcykpXG4gIH1cblxuICBjb25zdCB0eXBlU2tpbGwgPSAoKSA9PiB7XG4gICAgdHlwaW5nID0gdHJ1ZVxuICAgIGxldCBjdXJyZW50U2tpbGwgPSBza2lsbHNbc2tpbGxJbmRleF1cblxuICAgIGN1cnJlbnRMZW5ndGgrK1xuICAgIHNldFNraWxsKGN1cnJlbnRTa2lsbC5zdWJzdHJpbmcoMCwgY3VycmVudExlbmd0aCkpXG5cbiAgICBpZiAoY3VycmVudExlbmd0aCA9PT0gY3VycmVudFNraWxsLmxlbmd0aCkge1xuICAgICAgdHlwaW5nID0gZmFsc2VcbiAgICAgIGFkZFRpbWVvdXQoZGVsZXRlU2tpbGwsIDIwMDApXG4gICAgfSBlbHNlIHtcbiAgICAgIGFkZFRpbWVvdXQodHlwZVNraWxsLCBNYXRoLnJhbmRvbSgpICogMTUwICsgMTUpXG4gICAgfVxuICB9XG5cbiAgY29uc3QgZGVsZXRlU2tpbGwgPSAoKSA9PiB7XG4gICAgdHlwaW5nID0gdHJ1ZVxuICAgIGxldCBjdXJyZW50U2tpbGwgPSBza2lsbHNbc2tpbGxJbmRleF1cblxuICAgIGN1cnJlbnRMZW5ndGgtLVxuICAgIHNldFNraWxsKGN1cnJlbnRTa2lsbC5zdWJzdHJpbmcoMCwgY3VycmVudExlbmd0aCkpXG5cbiAgICBpZiAoY3VycmVudExlbmd0aCA9PT0gMCkge1xuICAgICAgdHlwaW5nID0gZmFsc2VcbiAgICAgIGlmIChza2lsbEluZGV4ID09PSBza2lsbHMubGVuZ3RoIC0gMSkge1xuICAgICAgICBza2lsbEluZGV4ID0gMFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2tpbGxJbmRleCsrXG4gICAgICB9XG4gICAgICBhZGRUaW1lb3V0KHR5cGVTa2lsbCwgNTApXG4gICAgfSBlbHNlIHtcbiAgICAgIGFkZFRpbWVvdXQoZGVsZXRlU2tpbGwsIChjdXJyZW50TGVuZ3RoID09PSBjdXJyZW50U2tpbGwubGVuZ3RoIC0gMSkgPyAzMDAgOiAyMClcbiAgICB9XG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGFkZFRpbWVvdXQodHlwZVNraWxsLCAxMDAwKVxuICAgIGNvbnN0IGNhcmV0SW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiBzZXRDYXJldCgocHJldikgPT4gdHlwaW5nIHx8ICFwcmV2KSwgNTAwKVxuXG4gICAgY29uc3QgZmx1aWQgPSBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCBXZWJnbEZsdWlkID0gKGF3YWl0IGltcG9ydCgnd2ViZ2wtZmx1aWQnKSkuZGVmYXVsdFxuICAgICAgV2ViZ2xGbHVpZChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdjYW52YXMnKSwge1xuICAgICAgICBCTE9PTTogZmFsc2UsXG4gICAgICAgIFNVTlJBWVM6IGZhbHNlXG4gICAgICB9KVxuICAgIH1cblxuICAgIGZsdWlkKClcbiAgICBcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY2xlYXJJbnRlcnZhbChjYXJldEludGVydmFsKVxuICAgICAgdGltZW91dHMuZm9yRWFjaCh0ID0+IGNsZWFyVGltZW91dCh0KSlcbiAgICB9XG4gIH0sIFtdKVxuXG4gIHJldHVybiA8PlxuICAgIDxIZWFkPlxuICAgICAgPHRpdGxlPnt0aXRsZX08L3RpdGxlPlxuICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17ZGVzY3JpcHRpb259IC8+XG4gICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD17dGl0bGV9IC8+XG4gICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCIgY29udGVudD17ZGVzY3JpcHRpb259IC8+XG4gICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjp0aXRsZVwiIGNvbnRlbnQ9e3RpdGxlfSAvPlxuICAgIDwvSGVhZD5cbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmp1bWJvdHJvbn0+XG4gICAgICA8Y2FudmFzIHdpZHRoPXswfSBoZWlnaHQ9ezB9IGNsYXNzTmFtZT17c3R5bGVzLmNhbnZhc30gLz5cbiAgICAgIDxDb250YWluZXIgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgICAgPGgxIHN0eWxlPXt7Zm9udFdlaWdodDogMzAwLCBtYXJnaW5Cb3R0b206ICctMC41cmVtJ319PmhlbGxvISBpJ208L2gxPlxuICAgICAgICA8SW1hZ2UgdW5vcHRpbWl6ZWQgc3JjPVwiLi9pbWcvZ2xhZGdsYWRpdXMtbG9nby5wbmdcIiB3aWR0aD17NDc1fSBoZWlnaHQ9ezIyMH0gYWx0PVwiZ2xhZGdsYWRpdXNcIiAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNraWxsc30+XG4gICAgICAgICAge3NraWxsfTxpIGNsYXNzTmFtZT17c3R5bGVzLmNhcmV0fSBzdHlsZT17e3Zpc2liaWxpdHk6IGNhcmV0ID8gJ3Zpc2libGUnIDogJ2hpZGRlbid9fT5fPC9pPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpblRvcDogJzNyZW0nLCBwYWRkaW5nOiAnMnJlbSAwIDAgMCcsIHRleHRBbGlnbjogJ2NlbnRlcid9fT5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGEgdGl0bGU9XCJnbGFkaXVzZ2xhZFwiIGNsYXNzTmFtZT17YCR7c3R5bGVzLmNvbnRhY3R9ICR7c3R5bGVzLmljb259YH0gaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9nbGFkaXVzZ2xhZFwiIHRhcmdldD1cIl9fYmxhbmtcIj5cbiAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUdpdGh1Yn0gLz5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDxhIHRpdGxlPVwiZ2xhZCMyMDk1XCIgY2xhc3NOYW1lPXtgJHtzdHlsZXMuY29udGFjdH0gJHtzdHlsZXMuaWNvbn1gfSBocmVmPVwiaHR0cHM6Ly9kaXNjb3JkLmNvbS91c2Vycy80NDM0NDExMDI4MDUyNzA1MjhcIiB0YXJnZXQ9XCJfX2JsYW5rXCI+XG4gICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFEaXNjb3JkfSAvPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5Ub3A6IDV9fT5cbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17YCR7c3R5bGVzLmNvbnRhY3R9ICR7c3R5bGVzLmVtYWlsfWB9IGhyZWY9XCJtYWlsdG86ZGVmb3ZlcnRob3VnaHRAZ21haWwuY29tXCI+ZGVmb3ZlcnRob3VnaHRAZ21haWwuY29tPC9hPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvZGl2PlxuICAgIDxTZWN0aW9uIHRpdGxlPVwiQWJvdXRcIj5cbiAgICAgIDxwPlxuICAgICAgICBIZWxsbyEgSSdtIEdsYWRHbGFkaXVzLiBJJ20gYSBuZXcgZGV2ZWxvcGVyIGN1cnJlbnRseSBkYWJibGluZyBpbiBSZWFjdCwgTmV4dC5qcywgYW5kIG1vcmUuXG4gICAgICAgIEFsdGhvdWdoIHN0aWxsIGEgPGVtPmNvdXBsZTwvZW0+IHllYXJzIGF3YXkgZnJvbSBhIGNvbXB1dGVyIHNjaWVuY2UgZGVncmVlLCBJJ20gcHVyc3Vpbmcgd2ViIGRldmVsb3BtZW50IC0gbW9zdGx5IGZyb250LWVuZC5cbiAgICAgIDwvcD5cbiAgICAgIDxwPlxuICAgICAgICBJIGxvdmUgY29kaW5nLiBJJ3ZlIGJlZW4gZG9pbmcgaXQgc2luY2UgSSB3YXMgOCEgQXMgYW55IG90aGVyIHNlbGYtcmVzcGVjdGluZyBuZXJkeSBwcmV0ZWVuLCBJIHN0YXJ0ZWQgd2l0aCBjb2Rpbmcgc2ltcGxlIGdhbWVzLlxuICAgICAgICBGaXJzdCB3aXRoIFNjcmF0Y2gsIHRoZW4gPGVtPnJlYWw8L2VtPiBnYW1lIGVuZ2luZXMgc3VjaCBhcyBHYW1lTWFrZXIgYW5kIFVuaXR5LlxuICAgICAgICBCdXQgSSBhbHNvIGRpcHBlZCBteSB0b2VzIGluIHdlYnNpdGUtbWFraW5nIC0gSSdkIHN0ZWFsIHNvbWUgSFRNTCBieSBJbnNwZWN0IEVsZW1lbnQtaW5nIHdlYnNpdGVzIGFuZCByZXN0eWxlIGl0IHdpdGggbXkgb3duIENTUy5cbiAgICAgICAgTXkgZmlyc3QgZGVlcCBkaXZlLCB0aG91Z2gsIHdhcyBub3QgdW50aWwgMjAyMCB3aGVuIEkgd3JvdGUgYSB3ZWJzaXRlIGZvciBhIE1pbmVjcmFmdCBzZXJ2ZXIuXG4gICAgICAgIEl0IHdhcyBhdCB0aGF0IG1vbWVudCB0aGF0IEkgZm91bmQgbXkgdHJ1ZSBwYXNzaW9uIC0gPHN0cmlrZT5zdGVhbGluZyBjb2RlPC9zdHJpa2U+IHdlYiBkZXZlbG9wbWVudC5cbiAgICAgICAgSSd2ZSBiZWVuIGNvZGluZyBldmVyIHNpbmNlISBJJ20gcHJvZmljaWVudCBpbiBSZWFjdCwgTmV4dC5qcywgYW5kIFR5cGVTY3JpcHQuIEknbSBhbHNvIGV4cGVyaWVuY2VkIGluIE15U1FMLCBKYXZhLCBhbmQgQyMuXG4gICAgICAgIEJlc2lkZXMgY29kaW5nLCBJIGNhbiBkbyBzb21lIGdyYXBoaWMgZGVzaWduIGFuZCB2aWRlbyBlZGl0aW5nIHRvby5cbiAgICAgIDwvcD5cbiAgICA8L1NlY3Rpb24+XG4gIDwvPlxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==