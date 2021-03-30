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
            marginTop: '4rem',
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
        }, this), " years away from a computer science degree, I'm pursuing ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
          children: "web development"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 98
        }, this), " - mostly front-end."]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: ["I love coding. I've been doing it since I was 8! As any other self-respecting nerdy preteen, I started with coding simple games. First with ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "https://scratch.mit.edu/",
          children: "Scratch"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 20
        }, this), ", then ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("em", {
          children: "real"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 73
        }, this), " game engines such as GameMaker and Unity. But I also dipped my toes in website-making - I'd steal some HTML by Inspect Element-ing websites and restyle it with my own CSS. My first deep dive, though, was not until 2020 when I wrote a website for a Minecraft server. It was at that moment that I found my true passion - ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strike", {
          children: "stealing code"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 62
        }, this), " web development. I've been coding ever since! I'm proficient in React, ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "https://nextjs.org/",
          children: "Next.js"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 63
        }, this), ", and TypeScript. I'm also experienced in MySQL, Java, and C#. Besides coding, I can do some graphic design and video editing too."]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbInRpdGxlIiwiZGVzY3JpcHRpb24iLCJza2lsbHMiLCJIb21lIiwidHlwaW5nIiwic2tpbGxJbmRleCIsImN1cnJlbnRMZW5ndGgiLCJ0aW1lb3V0cyIsInVzZVN0YXRlIiwiY2FyZXQiLCJzZXRDYXJldCIsInNraWxsIiwic2V0U2tpbGwiLCJhZGRUaW1lb3V0IiwiY2FsbGJhY2siLCJtcyIsInB1c2giLCJzZXRUaW1lb3V0IiwidHlwZVNraWxsIiwiY3VycmVudFNraWxsIiwic3Vic3RyaW5nIiwibGVuZ3RoIiwiZGVsZXRlU2tpbGwiLCJNYXRoIiwicmFuZG9tIiwidXNlRWZmZWN0IiwiY2FyZXRJbnRlcnZhbCIsInNldEludGVydmFsIiwicHJldiIsImZsdWlkIiwiV2ViZ2xGbHVpZCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIkJMT09NIiwiU1VOUkFZUyIsImNsZWFySW50ZXJ2YWwiLCJmb3JFYWNoIiwidCIsImNsZWFyVGltZW91dCIsInN0eWxlcyIsImp1bWJvdHJvbiIsImNhbnZhcyIsImNvbnRhaW5lciIsImZvbnRXZWlnaHQiLCJtYXJnaW5Cb3R0b20iLCJ2aXNpYmlsaXR5IiwibWFyZ2luVG9wIiwidGV4dEFsaWduIiwiY29udGFjdCIsImljb24iLCJmYUdpdGh1YiIsImZhRGlzY29yZCIsImVtYWlsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBLElBQU1BLEtBQUssR0FBRyxhQUFkO0FBQUEsSUFDRUMsV0FBVyxHQUFHLCtGQURoQjtBQUFBLElBRUVDLE1BQU0sR0FBRyxDQUNQLE9BRE8sRUFFUCxZQUZPLEVBR1AsTUFITyxFQUlQLGVBSk8sRUFLUCxTQUxPLEVBTVAsT0FOTyxFQU9QLFNBUE8sRUFRUCxTQVJPLEVBU1AsTUFU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QTtBQUFBO0FBQUE7QUFBQSxZQS9CSztBQUFBLGtCQUFQO0FBK0NEOztHQWhIdUJqRCxJOztLQUFBQSxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjBiNGNhNGQyY2M0ZjZkODk3Mzk4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCBTZWN0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvc2VjdGlvbidcbmltcG9ydCBDb250YWluZXIgZnJvbSAnLi4vY29tcG9uZW50cy9jb250YWluZXInXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnXG5pbXBvcnQgeyBmYURpc2NvcmQsIGZhR2l0aHViIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtYnJhbmRzLXN2Zy1pY29ucydcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvaW5kZXgubW9kdWxlLnNjc3MnXG5cbmNvbnN0IHRpdGxlID0gJ2dsYWRnbGFkaXVzJyxcbiAgZGVzY3JpcHRpb24gPSAnaGVsbG8hIGlcXCdtIGEgbmV3IGRldmVsb3BlciBjdXJyZW50bHkgZGFiYmxpbmcgaW4gcmVhY3QsIGphdmEsIGFuZCBtb3JlLiBsZWFybiBtb3JlIGFib3V0IG1lIScsXG4gIHNraWxscyA9IFtcbiAgICAncmVhY3QnLFxuICAgICdqYXZhc2NyaXB0JyxcbiAgICAnaHRtbCcsXG4gICAgJ2Nzcy9zY3NzL3Nhc3MnLFxuICAgICdtb25nb0RCJyxcbiAgICAnbXlTUUwnLFxuICAgICd3ZWJwYWNrJyxcbiAgICAnbmV4dC5qcycsXG4gICAgJ2phdmEnLFxuICAgICdjIycsXG4gICAgJ3dwZicsXG4gICAgJ2dyYXBoaWNzJyxcbiAgICAndmlkZW8gZWRpdGluZycsXG4gIF1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgbGV0IHR5cGluZywgc2tpbGxJbmRleCA9IDAsIGN1cnJlbnRMZW5ndGggPSAwXG4gIGNvbnN0IHRpbWVvdXRzID0gW11cbiAgY29uc3QgW2NhcmV0LCBzZXRDYXJldF0gPSB1c2VTdGF0ZSh0cnVlKVxuICBjb25zdCBbc2tpbGwsIHNldFNraWxsXSA9IHVzZVN0YXRlKCcnKVxuXG4gIGNvbnN0IGFkZFRpbWVvdXQgPSAoY2FsbGJhY2ssIG1zKSA9PiB7XG4gICAgdGltZW91dHMucHVzaChzZXRUaW1lb3V0KGNhbGxiYWNrLCBtcykpXG4gIH1cblxuICBjb25zdCB0eXBlU2tpbGwgPSAoKSA9PiB7XG4gICAgdHlwaW5nID0gdHJ1ZVxuICAgIGxldCBjdXJyZW50U2tpbGwgPSBza2lsbHNbc2tpbGxJbmRleF1cblxuICAgIGN1cnJlbnRMZW5ndGgrK1xuICAgIHNldFNraWxsKGN1cnJlbnRTa2lsbC5zdWJzdHJpbmcoMCwgY3VycmVudExlbmd0aCkpXG5cbiAgICBpZiAoY3VycmVudExlbmd0aCA9PT0gY3VycmVudFNraWxsLmxlbmd0aCkge1xuICAgICAgdHlwaW5nID0gZmFsc2VcbiAgICAgIGFkZFRpbWVvdXQoZGVsZXRlU2tpbGwsIDIwMDApXG4gICAgfSBlbHNlIHtcbiAgICAgIGFkZFRpbWVvdXQodHlwZVNraWxsLCBNYXRoLnJhbmRvbSgpICogMTUwICsgMTUpXG4gICAgfVxuICB9XG5cbiAgY29uc3QgZGVsZXRlU2tpbGwgPSAoKSA9PiB7XG4gICAgdHlwaW5nID0gdHJ1ZVxuICAgIGxldCBjdXJyZW50U2tpbGwgPSBza2lsbHNbc2tpbGxJbmRleF1cblxuICAgIGN1cnJlbnRMZW5ndGgtLVxuICAgIHNldFNraWxsKGN1cnJlbnRTa2lsbC5zdWJzdHJpbmcoMCwgY3VycmVudExlbmd0aCkpXG5cbiAgICBpZiAoY3VycmVudExlbmd0aCA9PT0gMCkge1xuICAgICAgdHlwaW5nID0gZmFsc2VcbiAgICAgIGlmIChza2lsbEluZGV4ID09PSBza2lsbHMubGVuZ3RoIC0gMSkge1xuICAgICAgICBza2lsbEluZGV4ID0gMFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2tpbGxJbmRleCsrXG4gICAgICB9XG4gICAgICBhZGRUaW1lb3V0KHR5cGVTa2lsbCwgNTApXG4gICAgfSBlbHNlIHtcbiAgICAgIGFkZFRpbWVvdXQoZGVsZXRlU2tpbGwsIChjdXJyZW50TGVuZ3RoID09PSBjdXJyZW50U2tpbGwubGVuZ3RoIC0gMSkgPyAzMDAgOiAyMClcbiAgICB9XG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGFkZFRpbWVvdXQodHlwZVNraWxsLCAxMDAwKVxuICAgIGNvbnN0IGNhcmV0SW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiBzZXRDYXJldCgocHJldikgPT4gdHlwaW5nIHx8ICFwcmV2KSwgNTAwKVxuXG4gICAgY29uc3QgZmx1aWQgPSBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCBXZWJnbEZsdWlkID0gKGF3YWl0IGltcG9ydCgnd2ViZ2wtZmx1aWQnKSkuZGVmYXVsdFxuICAgICAgV2ViZ2xGbHVpZChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdjYW52YXMnKSwge1xuICAgICAgICBCTE9PTTogZmFsc2UsXG4gICAgICAgIFNVTlJBWVM6IGZhbHNlXG4gICAgICB9KVxuICAgIH1cblxuICAgIGZsdWlkKClcbiAgICBcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY2xlYXJJbnRlcnZhbChjYXJldEludGVydmFsKVxuICAgICAgdGltZW91dHMuZm9yRWFjaCh0ID0+IGNsZWFyVGltZW91dCh0KSlcbiAgICB9XG4gIH0sIFtdKVxuXG4gIHJldHVybiA8PlxuICAgIDxIZWFkPlxuICAgICAgPHRpdGxlPnt0aXRsZX08L3RpdGxlPlxuICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17ZGVzY3JpcHRpb259IC8+XG4gICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD17dGl0bGV9IC8+XG4gICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCIgY29udGVudD17ZGVzY3JpcHRpb259IC8+XG4gICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjp0aXRsZVwiIGNvbnRlbnQ9e3RpdGxlfSAvPlxuICAgIDwvSGVhZD5cbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmp1bWJvdHJvbn0+XG4gICAgICA8Y2FudmFzIHdpZHRoPXswfSBoZWlnaHQ9ezB9IGNsYXNzTmFtZT17c3R5bGVzLmNhbnZhc30gLz5cbiAgICAgIDxDb250YWluZXIgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgICAgPGgxIHN0eWxlPXt7Zm9udFdlaWdodDogMzAwLCBtYXJnaW5Cb3R0b206ICctMC41cmVtJ319PmhlbGxvISBpJ208L2gxPlxuICAgICAgICA8SW1hZ2UgdW5vcHRpbWl6ZWQgc3JjPVwiLi9pbWcvZ2xhZGdsYWRpdXMtbG9nby5wbmdcIiB3aWR0aD17NDc1fSBoZWlnaHQ9ezIyMH0gYWx0PVwiZ2xhZGdsYWRpdXNcIiAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNraWxsc30+XG4gICAgICAgICAge3NraWxsfTxpIGNsYXNzTmFtZT17c3R5bGVzLmNhcmV0fSBzdHlsZT17e3Zpc2liaWxpdHk6IGNhcmV0ID8gJ3Zpc2libGUnIDogJ2hpZGRlbid9fT5fPC9pPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpblRvcDogJzRyZW0nLCB0ZXh0QWxpZ246ICdjZW50ZXInfX0+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxhIHRpdGxlPVwiZ2xhZGl1c2dsYWRcIiBjbGFzc05hbWU9e2Ake3N0eWxlcy5jb250YWN0fSAke3N0eWxlcy5pY29ufWB9IGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vZ2xhZGl1c2dsYWRcIiB0YXJnZXQ9XCJfX2JsYW5rXCI+XG4gICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFHaXRodWJ9IC8+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8YSB0aXRsZT1cImdsYWQjMjA5NVwiIGNsYXNzTmFtZT17YCR7c3R5bGVzLmNvbnRhY3R9ICR7c3R5bGVzLmljb259YH0gaHJlZj1cImh0dHBzOi8vZGlzY29yZC5jb20vdXNlcnMvNDQzNDQxMTAyODA1MjcwNTI4XCIgdGFyZ2V0PVwiX19ibGFua1wiPlxuICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhRGlzY29yZH0gLz5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luVG9wOiA1fX0+XG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9e2Ake3N0eWxlcy5jb250YWN0fSAke3N0eWxlcy5lbWFpbH1gfSBocmVmPVwibWFpbHRvOmRlZm92ZXJ0aG91Z2h0QGdtYWlsLmNvbVwiPmRlZm92ZXJ0aG91Z2h0QGdtYWlsLmNvbTwvYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L2Rpdj5cbiAgICA8U2VjdGlvbiB0aXRsZT1cIkFib3V0XCI+XG4gICAgICA8cD5cbiAgICAgICAgSGVsbG8hIEknbSBHbGFkR2xhZGl1cy4gSSdtIGEgbmV3IGRldmVsb3BlciBjdXJyZW50bHkgZGFiYmxpbmcgaW4gUmVhY3QsIE5leHQuanMsIGFuZCBtb3JlLlxuICAgICAgICBBbHRob3VnaCBzdGlsbCBhIDxlbT5jb3VwbGU8L2VtPiB5ZWFycyBhd2F5IGZyb20gYSBjb21wdXRlciBzY2llbmNlIGRlZ3JlZSwgSSdtIHB1cnN1aW5nIDxpPndlYiBkZXZlbG9wbWVudDwvaT4gLSBtb3N0bHkgZnJvbnQtZW5kLlxuICAgICAgPC9wPlxuICAgICAgPHA+XG4gICAgICAgIEkgbG92ZSBjb2RpbmcuIEkndmUgYmVlbiBkb2luZyBpdCBzaW5jZSBJIHdhcyA4ISBBcyBhbnkgb3RoZXIgc2VsZi1yZXNwZWN0aW5nIG5lcmR5IHByZXRlZW4sIEkgc3RhcnRlZCB3aXRoIGNvZGluZyBzaW1wbGUgZ2FtZXMuXG4gICAgICAgIEZpcnN0IHdpdGggPGEgaHJlZj1cImh0dHBzOi8vc2NyYXRjaC5taXQuZWR1L1wiPlNjcmF0Y2g8L2E+LCB0aGVuIDxlbT5yZWFsPC9lbT4gZ2FtZSBlbmdpbmVzIHN1Y2ggYXMgR2FtZU1ha2VyIGFuZCBVbml0eS5cbiAgICAgICAgQnV0IEkgYWxzbyBkaXBwZWQgbXkgdG9lcyBpbiB3ZWJzaXRlLW1ha2luZyAtIEknZCBzdGVhbCBzb21lIEhUTUwgYnkgSW5zcGVjdCBFbGVtZW50LWluZyB3ZWJzaXRlcyBhbmQgcmVzdHlsZSBpdCB3aXRoIG15IG93biBDU1MuXG4gICAgICAgIE15IGZpcnN0IGRlZXAgZGl2ZSwgdGhvdWdoLCB3YXMgbm90IHVudGlsIDIwMjAgd2hlbiBJIHdyb3RlIGEgd2Vic2l0ZSBmb3IgYSBNaW5lY3JhZnQgc2VydmVyLlxuICAgICAgICBJdCB3YXMgYXQgdGhhdCBtb21lbnQgdGhhdCBJIGZvdW5kIG15IHRydWUgcGFzc2lvbiAtIDxzdHJpa2U+c3RlYWxpbmcgY29kZTwvc3RyaWtlPiB3ZWIgZGV2ZWxvcG1lbnQuXG4gICAgICAgIEkndmUgYmVlbiBjb2RpbmcgZXZlciBzaW5jZSEgSSdtIHByb2ZpY2llbnQgaW4gUmVhY3QsIDxhIGhyZWY9XCJodHRwczovL25leHRqcy5vcmcvXCI+TmV4dC5qczwvYT4sIGFuZCBUeXBlU2NyaXB0LlxuICAgICAgICBJJ20gYWxzbyBleHBlcmllbmNlZCBpbiBNeVNRTCwgSmF2YSwgYW5kIEMjLiBCZXNpZGVzIGNvZGluZywgSSBjYW4gZG8gc29tZSBncmFwaGljIGRlc2lnbiBhbmQgdmlkZW8gZWRpdGluZyB0b28uXG4gICAgICA8L3A+XG4gICAgPC9TZWN0aW9uPlxuICA8Lz5cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=