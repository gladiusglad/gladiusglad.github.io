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

  var skills = _ref.skillList;
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

/***/ }),

/***/ "./components/skills/style.module.scss":
/*!*********************************************!*\
  !*** ./components/skills/style.module.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-3-1!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../../node_modules/next/dist/compiled/resolve-url-loader??ref--5-oneOf-3-3!../../node_modules/next/dist/compiled/sass-loader/cjs.js??ref--5-oneOf-3-4!./style.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./components/skills/style.module.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a,b,isNamedExport){if(!a&&b||a&&!b){return false;}let p;for(p in a){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(a[p]!==b[p]){return false;}}for(p in b){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(!a[p]){return false;}}return true;};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-3-1!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../../node_modules/next/dist/compiled/resolve-url-loader??ref--5-oneOf-3-3!../../node_modules/next/dist/compiled/sass-loader/cjs.js??ref--5-oneOf-3-4!./style.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./components/skills/style.module.scss",
      function () {
        content = __webpack_require__(/*! !../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-3-1!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../../node_modules/next/dist/compiled/resolve-url-loader??ref--5-oneOf-3-3!../../node_modules/next/dist/compiled/sass-loader/cjs.js??ref--5-oneOf-3-4!./style.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./components/skills/style.module.scss");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./components/skills/style.module.scss":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-3-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-3-2!(webpack)/resolve-url-loader??ref--5-oneOf-3-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-3-4!./components/skills/style.module.scss ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".style_skills__19k29 {\n  margin-top: 4rem;\n  font-size: 1.5rem;\n  font-weight: 700;\n  font-family: \"Montserrat\", \"Source Sans Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, sans-serif;\n  color: #4de0af;\n}\n.style_skills__19k29:before, .style_skills__19k29 .style_caret__12JB5 {\n  color: #777d7a;\n}\n.style_skills__19k29:before {\n  content: \">\";\n  margin-right: 1rem;\n}\n@media (min-width: 768px) {\n  .style_skills__19k29 {\n    font-size: 2.5rem;\n  }\n}", "",{"version":3,"sources":["webpack://style.module.scss","webpack://../../styles/_variables.scss"],"names":[],"mappings":"AAEA;EACE,gBAAA;EACA,iBAAA;EACA,gBAAA;EACA,+HCGW;EDFX,cCDO;ADAT;AAGE;EACE,cCTI;ADQR;AAIE;EACE,YAAA;EACA,kBAAA;AAFJ;AAKE;EAhBF;IAiBI,iBAAA;EAFF;AACF","sourcesContent":["@use '/styles/variables' as *;\r\n\r\n.skills {\r\n  margin-top: 4rem;\r\n  font-size: 1.5rem;\r\n  font-weight: 700;\r\n  font-family: $black-font;\r\n  color: $accent;\r\n\r\n  &:before, .caret {\r\n    color: $muted;\r\n  }\r\n\r\n  &:before {\r\n    content: \">\";\r\n    margin-right: 1rem;\r\n  }\r\n\r\n  @media (min-width: $md) {\r\n    font-size: 2.5rem;\r\n  }\r\n}","$text: #ddd;\r\n$muted: rgb(119, 125, 122);\r\n$light-gray: rgb(86, 90, 88);\r\n$gray: rgb(65, 70, 67);\r\n$dark-gray: rgb(26, 29, 27);\r\n$black: #000;\r\n$accent: #4de0af;\r\n$link: #127ed6;\r\n$font: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;\r\n$black-font: 'Montserrat', $font;\r\n$serif-font: 'Merriweather', $font;\r\n\r\n$sm: 576px;\r\n$md: 768px;\r\n$lg: 992px;\r\n$xl: 1200px;"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"skills": "style_skills__19k29",
	"caret": "style_caret__12JB5"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

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
/* harmony import */ var _components_skills__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/skills */ "./components/skills/index.tsx");





var _jsxFileName = "C:\\Users\\joshm\\Documents\\_MY-PROJECTS\\gladiusglad.github.io\\pages\\index.tsx",
    _s = $RefreshSig$();










var title = 'gladgladius',
    description = 'hello! i\'m a new developer currently dabbling in react, java, and more. learn more about me!',
    skills = ['react', 'javascript', 'html', 'css/scss/sass', 'mongoDB', 'mySQL', 'webpack', 'next.js', 'java', 'c#', 'wpf', 'graphics', 'video editing'];
function Home() {
  _s();

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
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
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "description",
        content: description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:title",
        content: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:description",
        content: description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "twitter:title",
        content: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_index_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.jumbotron,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("canvas", {
        width: 0,
        height: 0,
        className: _styles_index_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.canvas
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
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
          lineNumber: 55,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_5___default.a, {
          unoptimized: true,
          src: "./img/gladgladius-logo.png",
          width: 475,
          height: 220,
          alt: "gladgladius"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_skills__WEBPACK_IMPORTED_MODULE_11__["default"], {
          skills: skills
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
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
                lineNumber: 61,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 60,
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
                lineNumber: 64,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 59,
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
              lineNumber: 68,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_section__WEBPACK_IMPORTED_MODULE_6__["default"], {
      title: "About",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: ["Hello! I'm GladGladius. I'm a new developer currently dabbling in React, Next.js, and more. Although still a ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("em", {
          children: "couple"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 26
        }, this), " years away from a computer science degree, I'm pursuing ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
          children: "web development"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 98
        }, this), " - mostly front-end."]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: ["I'm proficient in React, ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "https://nextjs.org/",
          children: "Next.js"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 34
        }, this), ", and TypeScript. I'm also experienced in MySQL, MongoDB, Java, and C#. Besides coding, I can do some graphic design and video editing too."]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: ["I love coding. I've been doing it since I was 8! As any other self-respecting nerdy preteen, I started with coding simple games. First with ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "https://scratch.mit.edu/",
          children: "Scratch"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 20
        }, this), ", then ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("em", {
          children: "real"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 73
        }, this), " game engines such as GameMaker and Unity. But I also dipped my toes in website-making - I'd steal some HTML by Inspect Element-ing websites and restyle it with my own CSS. My first deep dive, though, was not until 2020 when I wrote a website for a Minecraft server. It was at that moment that I found my true passion - ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strike", {
          children: "stealing code"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 62
        }, this), " web development. I've been coding ever since!"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_container__WEBPACK_IMPORTED_MODULE_7__["default"], {
      className: _styles_index_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.comingSoon,
      children: "more coming soon\u2122!"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 5
    }, this)]
  }, void 0, true);
}

_s(Home, "OD7bBpZva5O2jO+Puf00hKivP7c=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9za2lsbHMvaW5kZXgudHN4Iiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3NraWxscy9zdHlsZS5tb2R1bGUuc2Nzcz9jMDIzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3NraWxscy9zdHlsZS5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIlNraWxscyIsInNraWxscyIsInNraWxsTGlzdCIsInR5cGluZyIsInNraWxsSW5kZXgiLCJjdXJyZW50TGVuZ3RoIiwidGltZW91dHMiLCJ1c2VTdGF0ZSIsImNhcmV0Iiwic2V0Q2FyZXQiLCJza2lsbCIsInNldFNraWxsIiwiYWRkVGltZW91dCIsImNhbGxiYWNrIiwibXMiLCJwdXNoIiwic2V0VGltZW91dCIsInR5cGVTa2lsbCIsImN1cnJlbnRTa2lsbCIsInN1YnN0cmluZyIsImxlbmd0aCIsImRlbGV0ZVNraWxsIiwiTWF0aCIsInJhbmRvbSIsInVzZUVmZmVjdCIsImNhcmV0SW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsInByZXYiLCJjbGVhckludGVydmFsIiwiZm9yRWFjaCIsInQiLCJjbGVhclRpbWVvdXQiLCJzdHlsZXMiLCJ2aXNpYmlsaXR5IiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsIkhvbWUiLCJmbHVpZCIsIldlYmdsRmx1aWQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJCTE9PTSIsIlNVTlJBWVMiLCJqdW1ib3Ryb24iLCJjYW52YXMiLCJjb250YWluZXIiLCJmb250V2VpZ2h0IiwibWFyZ2luQm90dG9tIiwibWFyZ2luVG9wIiwidGV4dEFsaWduIiwiY29udGFjdCIsImljb24iLCJmYUdpdGh1YiIsImZhRGlzY29yZCIsImVtYWlsIiwiY29taW5nU29vbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBRWUsU0FBU0Es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aG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZS5tb2R1bGUuc2NzcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNraWxscyh7c2tpbGxMaXN0OiBza2lsbHN9OiB7c2tpbGxMaXN0OiBzdHJpbmdbXX0pIHtcclxuICBsZXQgdHlwaW5nLCBza2lsbEluZGV4ID0gMCwgY3VycmVudExlbmd0aCA9IDBcclxuICBjb25zdCB0aW1lb3V0cyA9IFtdXHJcbiAgY29uc3QgW2NhcmV0LCBzZXRDYXJldF0gPSB1c2VTdGF0ZSh0cnVlKVxyXG4gIGNvbnN0IFtza2lsbCwgc2V0U2tpbGxdID0gdXNlU3RhdGUoJycpXHJcblxyXG4gIGNvbnN0IGFkZFRpbWVvdXQgPSAoY2FsbGJhY2ssIG1zKSA9PiB7XHJcbiAgICB0aW1lb3V0cy5wdXNoKHNldFRpbWVvdXQoY2FsbGJhY2ssIG1zKSlcclxuICB9XHJcblxyXG4gIGNvbnN0IHR5cGVTa2lsbCA9ICgpID0+IHtcclxuICAgIHR5cGluZyA9IHRydWVcclxuICAgIGxldCBjdXJyZW50U2tpbGwgPSBza2lsbHNbc2tpbGxJbmRleF1cclxuXHJcbiAgICBjdXJyZW50TGVuZ3RoKytcclxuICAgIHNldFNraWxsKGN1cnJlbnRTa2lsbC5zdWJzdHJpbmcoMCwgY3VycmVudExlbmd0aCkpXHJcblxyXG4gICAgaWYgKGN1cnJlbnRMZW5ndGggPT09IGN1cnJlbnRTa2lsbC5sZW5ndGgpIHtcclxuICAgICAgdHlwaW5nID0gZmFsc2VcclxuICAgICAgYWRkVGltZW91dChkZWxldGVTa2lsbCwgMjAwMClcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGFkZFRpbWVvdXQodHlwZVNraWxsLCBNYXRoLnJhbmRvbSgpICogMTUwICsgMTUpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBkZWxldGVTa2lsbCA9ICgpID0+IHtcclxuICAgIHR5cGluZyA9IHRydWVcclxuICAgIGxldCBjdXJyZW50U2tpbGwgPSBza2lsbHNbc2tpbGxJbmRleF1cclxuXHJcbiAgICBjdXJyZW50TGVuZ3RoLS1cclxuICAgIHNldFNraWxsKGN1cnJlbnRTa2lsbC5zdWJzdHJpbmcoMCwgY3VycmVudExlbmd0aCkpXHJcblxyXG4gICAgaWYgKGN1cnJlbnRMZW5ndGggPT09IDApIHtcclxuICAgICAgdHlwaW5nID0gZmFsc2VcclxuICAgICAgaWYgKHNraWxsSW5kZXggPT09IHNraWxscy5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgc2tpbGxJbmRleCA9IDBcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBza2lsbEluZGV4KytcclxuICAgICAgfVxyXG4gICAgICBhZGRUaW1lb3V0KHR5cGVTa2lsbCwgNTApXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBhZGRUaW1lb3V0KGRlbGV0ZVNraWxsLCAoY3VycmVudExlbmd0aCA9PT0gY3VycmVudFNraWxsLmxlbmd0aCAtIDEpID8gMzAwIDogMjApXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgYWRkVGltZW91dCh0eXBlU2tpbGwsIDEwMDApXHJcbiAgICBjb25zdCBjYXJldEludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4gc2V0Q2FyZXQoKHByZXYpID0+IHR5cGluZyB8fCAhcHJldiksIDUwMClcclxuXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBjbGVhckludGVydmFsKGNhcmV0SW50ZXJ2YWwpXHJcbiAgICAgIHRpbWVvdXRzLmZvckVhY2godCA9PiBjbGVhclRpbWVvdXQodCkpXHJcbiAgICB9XHJcbiAgfSwgW10pXHJcblxyXG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNraWxsc30+XHJcbiAgICB7c2tpbGx9PGkgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZXR9IHN0eWxlPXt7dmlzaWJpbGl0eTogY2FyZXQgPyAndmlzaWJsZScgOiAnaGlkZGVuJ319Pl88L2k+XHJcbiAgPC9kaXY+XHJcbn0iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXN0eWxlLWxvYWRlci9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMiEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LW9uZU9mLTMtMyEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Nhc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtNCEuL3N0eWxlLm1vZHVsZS5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gZnVuY3Rpb24oZWxlbWVudCl7Ly8gVGhlc2UgZWxlbWVudHMgc2hvdWxkIGFsd2F5cyBleGlzdC4gSWYgdGhleSBkbyBub3QsXG4vLyB0aGlzIGNvZGUgc2hvdWxkIGZhaWwuXG52YXIgYW5jaG9yRWxlbWVudD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjX19uZXh0X2Nzc19fRE9fTk9UX1VTRV9fJyk7dmFyIHBhcmVudE5vZGU9YW5jaG9yRWxlbWVudC5wYXJlbnROb2RlOy8vIE5vcm1hbGx5IDxoZWFkPlxuLy8gRWFjaCBzdHlsZSB0YWcgc2hvdWxkIGJlIHBsYWNlZCByaWdodCBiZWZvcmUgb3VyXG4vLyBhbmNob3IuIEJ5IGluc2VydGluZyBiZWZvcmUgYW5kIG5vdCBhZnRlciwgd2UgZG8gbm90XG4vLyBuZWVkIHRvIHRyYWNrIHRoZSBsYXN0IGluc2VydGVkIGVsZW1lbnQuXG5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlbGVtZW50LGFuY2hvckVsZW1lbnQpO307XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsYixpc05hbWVkRXhwb3J0KXtpZighYSYmYnx8YSYmIWIpe3JldHVybiBmYWxzZTt9bGV0IHA7Zm9yKHAgaW4gYSl7aWYoaXNOYW1lZEV4cG9ydCYmcD09PSdkZWZhdWx0Jyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG5jb250aW51ZTt9aWYoYVtwXSE9PWJbcF0pe3JldHVybiBmYWxzZTt9fWZvcihwIGluIGIpe2lmKGlzTmFtZWRFeHBvcnQmJnA9PT0nZGVmYXVsdCcpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuY29udGludWU7fWlmKCFhW3BdKXtyZXR1cm4gZmFsc2U7fX1yZXR1cm4gdHJ1ZTt9O1xuICAgIHZhciBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0zLTEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0zLTIhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS1vbmVPZi0zLTMhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9zYXNzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0zLTQhLi9zdHlsZS5tb2R1bGUuc2Nzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMiEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LW9uZU9mLTMtMyEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Nhc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtNCEuL3N0eWxlLm1vZHVsZS5zY3NzXCIpO1xuXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBjb250ZW50LmxvY2FscykpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5zdHlsZV9za2lsbHNfXzE5azI5IHtcXG4gIG1hcmdpbi10b3A6IDRyZW07XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBmb250LWZhbWlseTogXFxcIk1vbnRzZXJyYXRcXFwiLCBcXFwiU291cmNlIFNhbnMgUHJvXFxcIiwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcXFwiU2Vnb2UgVUlcXFwiLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBzYW5zLXNlcmlmO1xcbiAgY29sb3I6ICM0ZGUwYWY7XFxufVxcbi5zdHlsZV9za2lsbHNfXzE5azI5OmJlZm9yZSwgLnN0eWxlX3NraWxsc19fMTlrMjkgLnN0eWxlX2NhcmV0X18xMkpCNSB7XFxuICBjb2xvcjogIzc3N2Q3YTtcXG59XFxuLnN0eWxlX3NraWxsc19fMTlrMjk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCI+XFxcIjtcXG4gIG1hcmdpbi1yaWdodDogMXJlbTtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAuc3R5bGVfc2tpbGxzX18xOWsyOSB7XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3R5bGUubW9kdWxlLnNjc3NcIixcIndlYnBhY2s6Ly8uLi8uLi9zdHlsZXMvX3ZhcmlhYmxlcy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsK0hDR1c7RURGWCxjQ0RPO0FEQVQ7QUFHRTtFQUNFLGNDVEk7QURRUjtBQUlFO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0FBRko7QUFLRTtFQWhCRjtJQWlCSSxpQkFBQTtFQUZGO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQHVzZSAnL3N0eWxlcy92YXJpYWJsZXMnIGFzICo7XFxyXFxuXFxyXFxuLnNraWxscyB7XFxyXFxuICBtYXJnaW4tdG9wOiA0cmVtO1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgZm9udC1mYW1pbHk6ICRibGFjay1mb250O1xcclxcbiAgY29sb3I6ICRhY2NlbnQ7XFxyXFxuXFxyXFxuICAmOmJlZm9yZSwgLmNhcmV0IHtcXHJcXG4gICAgY29sb3I6ICRtdXRlZDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICY6YmVmb3JlIHtcXHJcXG4gICAgY29udGVudDogXFxcIj5cXFwiO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICBAbWVkaWEgKG1pbi13aWR0aDogJG1kKSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcclxcbiAgfVxcclxcbn1cIixcIiR0ZXh0OiAjZGRkO1xcclxcbiRtdXRlZDogcmdiKDExOSwgMTI1LCAxMjIpO1xcclxcbiRsaWdodC1ncmF5OiByZ2IoODYsIDkwLCA4OCk7XFxyXFxuJGdyYXk6IHJnYig2NSwgNzAsIDY3KTtcXHJcXG4kZGFyay1ncmF5OiByZ2IoMjYsIDI5LCAyNyk7XFxyXFxuJGJsYWNrOiAjMDAwO1xcclxcbiRhY2NlbnQ6ICM0ZGUwYWY7XFxyXFxuJGxpbms6ICMxMjdlZDY7XFxyXFxuJGZvbnQ6ICdTb3VyY2UgU2FucyBQcm8nLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIHNhbnMtc2VyaWY7XFxyXFxuJGJsYWNrLWZvbnQ6ICdNb250c2VycmF0JywgJGZvbnQ7XFxyXFxuJHNlcmlmLWZvbnQ6ICdNZXJyaXdlYXRoZXInLCAkZm9udDtcXHJcXG5cXHJcXG4kc206IDU3NnB4O1xcclxcbiRtZDogNzY4cHg7XFxyXFxuJGxnOiA5OTJweDtcXHJcXG4keGw6IDEyMDBweDtcIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJza2lsbHNcIjogXCJzdHlsZV9za2lsbHNfXzE5azI5XCIsXG5cdFwiY2FyZXRcIjogXCJzdHlsZV9jYXJldF9fMTJKQjVcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCBTZWN0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvc2VjdGlvbidcbmltcG9ydCBDb250YWluZXIgZnJvbSAnLi4vY29tcG9uZW50cy9jb250YWluZXInXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnXG5pbXBvcnQgeyBmYURpc2NvcmQsIGZhR2l0aHViIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtYnJhbmRzLXN2Zy1pY29ucydcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvaW5kZXgubW9kdWxlLnNjc3MnXG5pbXBvcnQgU2tpbGxzIGZyb20gJy4uL2NvbXBvbmVudHMvc2tpbGxzJ1xuXG5jb25zdCB0aXRsZSA9ICdnbGFkZ2xhZGl1cycsXG4gIGRlc2NyaXB0aW9uID0gJ2hlbGxvISBpXFwnbSBhIG5ldyBkZXZlbG9wZXIgY3VycmVudGx5IGRhYmJsaW5nIGluIHJlYWN0LCBqYXZhLCBhbmQgbW9yZS4gbGVhcm4gbW9yZSBhYm91dCBtZSEnLFxuICBza2lsbHMgPSBbXG4gICAgJ3JlYWN0JyxcbiAgICAnamF2YXNjcmlwdCcsXG4gICAgJ2h0bWwnLFxuICAgICdjc3Mvc2Nzcy9zYXNzJyxcbiAgICAnbW9uZ29EQicsXG4gICAgJ215U1FMJyxcbiAgICAnd2VicGFjaycsXG4gICAgJ25leHQuanMnLFxuICAgICdqYXZhJyxcbiAgICAnYyMnLFxuICAgICd3cGYnLFxuICAgICdncmFwaGljcycsXG4gICAgJ3ZpZGVvIGVkaXRpbmcnLFxuICBdXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBmbHVpZCA9IGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IFdlYmdsRmx1aWQgPSAoYXdhaXQgaW1wb3J0KCd3ZWJnbC1mbHVpZCcpKS5kZWZhdWx0XG4gICAgICBXZWJnbEZsdWlkKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2NhbnZhcycpLCB7XG4gICAgICAgIEJMT09NOiBmYWxzZSxcbiAgICAgICAgU1VOUkFZUzogZmFsc2VcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgZmx1aWQoKVxuICB9LCBbXSlcblxuICByZXR1cm4gPD5cbiAgICA8SGVhZD5cbiAgICAgIDx0aXRsZT57dGl0bGV9PC90aXRsZT5cbiAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e2Rlc2NyaXB0aW9ufSAvPlxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9e3RpdGxlfSAvPlxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e2Rlc2NyaXB0aW9ufSAvPlxuICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6dGl0bGVcIiBjb250ZW50PXt0aXRsZX0gLz5cbiAgICA8L0hlYWQ+XG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5qdW1ib3Ryb259PlxuICAgICAgPGNhbnZhcyB3aWR0aD17MH0gaGVpZ2h0PXswfSBjbGFzc05hbWU9e3N0eWxlcy5jYW52YXN9IC8+XG4gICAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgIDxoMSBzdHlsZT17e2ZvbnRXZWlnaHQ6IDMwMCwgbWFyZ2luQm90dG9tOiAnLTAuNXJlbSd9fT5oZWxsbyEgaSdtPC9oMT5cbiAgICAgICAgPEltYWdlIHVub3B0aW1pemVkIHNyYz1cIi4vaW1nL2dsYWRnbGFkaXVzLWxvZ28ucG5nXCIgd2lkdGg9ezQ3NX0gaGVpZ2h0PXsyMjB9IGFsdD1cImdsYWRnbGFkaXVzXCIgLz5cbiAgICAgICAgPFNraWxscyBza2lsbHM9e3NraWxsc30gLz5cbiAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpblRvcDogJzRyZW0nLCB0ZXh0QWxpZ246ICdjZW50ZXInfX0+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxhIHRpdGxlPVwiZ2xhZGl1c2dsYWRcIiBjbGFzc05hbWU9e2Ake3N0eWxlcy5jb250YWN0fSAke3N0eWxlcy5pY29ufWB9IGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vZ2xhZGl1c2dsYWRcIiB0YXJnZXQ9XCJfX2JsYW5rXCI+XG4gICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFHaXRodWJ9IC8+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8YSB0aXRsZT1cImdsYWQjMjA5NVwiIGNsYXNzTmFtZT17YCR7c3R5bGVzLmNvbnRhY3R9ICR7c3R5bGVzLmljb259YH0gaHJlZj1cImh0dHBzOi8vZGlzY29yZC5jb20vdXNlcnMvNDQzNDQxMTAyODA1MjcwNTI4XCIgdGFyZ2V0PVwiX19ibGFua1wiPlxuICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhRGlzY29yZH0gLz5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luVG9wOiA1fX0+XG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9e2Ake3N0eWxlcy5jb250YWN0fSAke3N0eWxlcy5lbWFpbH1gfSBocmVmPVwibWFpbHRvOmRlZm92ZXJ0aG91Z2h0QGdtYWlsLmNvbVwiPmRlZm92ZXJ0aG91Z2h0QGdtYWlsLmNvbTwvYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L2Rpdj5cbiAgICA8U2VjdGlvbiB0aXRsZT1cIkFib3V0XCI+XG4gICAgICA8cD5cbiAgICAgICAgSGVsbG8hIEknbSBHbGFkR2xhZGl1cy4gSSdtIGEgbmV3IGRldmVsb3BlciBjdXJyZW50bHkgZGFiYmxpbmcgaW4gUmVhY3QsIE5leHQuanMsIGFuZCBtb3JlLlxuICAgICAgICBBbHRob3VnaCBzdGlsbCBhIDxlbT5jb3VwbGU8L2VtPiB5ZWFycyBhd2F5IGZyb20gYSBjb21wdXRlciBzY2llbmNlIGRlZ3JlZSwgSSdtIHB1cnN1aW5nIDxpPndlYiBkZXZlbG9wbWVudDwvaT4gLSBtb3N0bHkgZnJvbnQtZW5kLlxuICAgICAgPC9wPlxuICAgICAgPHA+XG4gICAgICAgIEknbSBwcm9maWNpZW50IGluIFJlYWN0LCA8YSBocmVmPVwiaHR0cHM6Ly9uZXh0anMub3JnL1wiPk5leHQuanM8L2E+LCBhbmQgVHlwZVNjcmlwdC5cbiAgICAgICAgSSdtIGFsc28gZXhwZXJpZW5jZWQgaW4gTXlTUUwsIE1vbmdvREIsIEphdmEsIGFuZCBDIy4gQmVzaWRlcyBjb2RpbmcsIEkgY2FuIGRvIHNvbWUgZ3JhcGhpYyBkZXNpZ24gYW5kIHZpZGVvIGVkaXRpbmcgdG9vLlxuICAgICAgPC9wPlxuICAgICAgPHA+XG4gICAgICAgIEkgbG92ZSBjb2RpbmcuIEkndmUgYmVlbiBkb2luZyBpdCBzaW5jZSBJIHdhcyA4ISBBcyBhbnkgb3RoZXIgc2VsZi1yZXNwZWN0aW5nIG5lcmR5IHByZXRlZW4sIEkgc3RhcnRlZCB3aXRoIGNvZGluZyBzaW1wbGUgZ2FtZXMuXG4gICAgICAgIEZpcnN0IHdpdGggPGEgaHJlZj1cImh0dHBzOi8vc2NyYXRjaC5taXQuZWR1L1wiPlNjcmF0Y2g8L2E+LCB0aGVuIDxlbT5yZWFsPC9lbT4gZ2FtZSBlbmdpbmVzIHN1Y2ggYXMgR2FtZU1ha2VyIGFuZCBVbml0eS5cbiAgICAgICAgQnV0IEkgYWxzbyBkaXBwZWQgbXkgdG9lcyBpbiB3ZWJzaXRlLW1ha2luZyAtIEknZCBzdGVhbCBzb21lIEhUTUwgYnkgSW5zcGVjdCBFbGVtZW50LWluZyB3ZWJzaXRlcyBhbmQgcmVzdHlsZSBpdCB3aXRoIG15IG93biBDU1MuXG4gICAgICAgIE15IGZpcnN0IGRlZXAgZGl2ZSwgdGhvdWdoLCB3YXMgbm90IHVudGlsIDIwMjAgd2hlbiBJIHdyb3RlIGEgd2Vic2l0ZSBmb3IgYSBNaW5lY3JhZnQgc2VydmVyLlxuICAgICAgICBJdCB3YXMgYXQgdGhhdCBtb21lbnQgdGhhdCBJIGZvdW5kIG15IHRydWUgcGFzc2lvbiAtIDxzdHJpa2U+c3RlYWxpbmcgY29kZTwvc3RyaWtlPiB3ZWIgZGV2ZWxvcG1lbnQuXG4gICAgICAgIEkndmUgYmVlbiBjb2RpbmcgZXZlciBzaW5jZSFcbiAgICAgIDwvcD5cbiAgICA8L1NlY3Rpb24+XG4gICAgPENvbnRhaW5lciBjbGFzc05hbWU9e3N0eWxlcy5jb21pbmdTb29ufT5cbiAgICAgIG1vcmUgY29taW5nIHNvb27ihKIhXG4gICAgPC9Db250YWluZXI+XG4gIDwvPlxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==