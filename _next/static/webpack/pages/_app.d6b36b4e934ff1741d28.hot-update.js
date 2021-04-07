webpackHotUpdate_N_E("pages/_app",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./styles/global.scss":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-7-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-7-2!(webpack)/resolve-url-loader??ref--5-oneOf-7-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-7-4!./styles/global.scss ***!
  \**************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Source+Serif+Pro:ital,wght@0,400;0,700;1,400;1,700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "* {\n  box-sizing: border-box;\n  color-scheme: dark;\n}\n\nhtml {\n  margin: 0;\n  background-color: #000;\n}\n\nbody {\n  color: #ddd;\n  background-color: #000;\n  font-family: \"Source Serif Pro\", Cambria, Cochin, Georgia, Times, \"Times New Roman\", serif;\n  line-height: 1.6;\n  text-align: left;\n  font-weight: 400;\n  margin: 0;\n  font-size: 1rem;\n  overflow-x: hidden;\n}\n@media (min-width: 768px) {\n  body {\n    font-size: 1.1rem;\n  }\n}\n\nh1, h2, h3, h4, h5, h6 {\n  font-family: \"Montserrat\", \"Source Serif Pro\", Cambria, Cochin, Georgia, Times, \"Times New Roman\", serif;\n  font-weight: 700;\n  margin-top: 0;\n  margin-bottom: 0.5rem;\n}\n\nh1 {\n  font-size: 1.5rem;\n}\n@media (min-width: 768px) {\n  h1 {\n    font-size: 3rem;\n  }\n}\n\nh2 {\n  font-size: 1.3rem;\n}\n@media (min-width: 768px) {\n  h2 {\n    font-size: 2rem;\n  }\n}\n\nh3 {\n  font-size: 1.2rem;\n}\n@media (min-width: 768px) {\n  h3 {\n    font-size: 2rem;\n  }\n}\n\np {\n  font-size: 15px;\n  margin-top: 1rem;\n}\n@media (min-width: 768px) {\n  p {\n    font-size: 20px;\n  }\n}\n\ni {\n  color: #4de0af;\n  font-style: normal;\n}\n\na {\n  color: #127ed6;\n}\n\n.content a {\n  color: #ddd;\n  text-decoration: underline;\n  -webkit-text-decoration-color: #127ed6;\n          text-decoration-color: #127ed6;\n  text-decoration-thickness: 3px;\n  -webkit-text-decoration-skip-ink: none;\n          text-decoration-skip-ink: none;\n  box-shadow: inset 0 0 0 -1px #127ed6;\n  transition: box-shadow 0.15s ease-out;\n}\n.content a:hover {\n  box-shadow: inset 0 -1.4em 0 -1px #127ed6;\n}\n\ns {\n  text-decoration-thickness: 2px;\n}", "",{"version":3,"sources":["webpack://global.scss","webpack://_variables.scss"],"names":[],"mappings":"AAGA;EACE,sBAAA;EACA,kBAAA;AAAF;;AAGA;EACE,SAAA;EACA,sBAAA;AAAF;;AAGA;EACE,WCZK;EDaL,sBAAA;EACA,0FCLK;EDML,gBAAA;EACA,gBAAA;EACA,gBAAA;EACA,SAAA;EACA,eAAA;EACA,kBAAA;AAAF;ACKE;EDdF;IAYI,iBAAA;EACF;AACF;;AAEA;EACE,wGClBW;EDmBX,gBAAA;EACA,aAAA;EACA,qBAAA;AACF;;AAEA;EACE,iBAAA;AACF;ACXE;EDSF;IAII,eAAA;EAEF;AACF;;AACA;EACE,iBAAA;AAEF;ACpBE;EDiBF;IAII,eAAA;EAGF;AACF;;AAAA;EACE,iBAAA;AAGF;AC7BE;EDyBF;IAII,eAAA;EAIF;AACF;;AADA;EACE,eAAA;EACA,gBAAA;AAIF;ACvCE;EDiCF;IAKI,eAAA;EAKF;AACF;;AAFA;EACE,cC9DO;ED+DP,kBAAA;AAKF;;AAFA;EACE,cCjEK;ADsEP;;AAFA;EACE,WC7EK;ED8EL,0BAAA;EACA,sCCvEK;UDuEL,8BCvEK;EDwEL,8BAAA;EACA,sCAAA;UAAA,8BAAA;EACA,oCAAA;EACA,qCAAA;AAKF;AAHE;EACE,yCAAA;AAKJ;;AADA;EACE,8BAAA;AAIF","sourcesContent":["@use './variables' as *;\r\n@use './fonts';\r\n\r\n* {\r\n  box-sizing: border-box;\r\n  color-scheme: dark;\r\n}\r\n\r\nhtml {\r\n  margin: 0;\r\n  background-color: #000;\r\n}\r\n\r\nbody {\r\n  color: $text;\r\n  background-color: #000;\r\n  font-family: $font;\r\n  line-height: 1.6;\r\n  text-align: left;\r\n  font-weight: 400;\r\n  margin: 0;\r\n  font-size: 1rem;\r\n  overflow-x: hidden;\r\n\r\n  @include from(md) {\r\n    font-size: 1.1rem;\r\n  }\r\n}\r\n\r\nh1, h2, h3, h4, h5, h6 {\r\n  font-family: $black-font;\r\n  font-weight: 700;\r\n  margin-top: 0;\r\n  margin-bottom: 0.5rem;\r\n}\r\n\r\nh1 {\r\n  font-size: 1.5rem;\r\n\r\n  @include from(md) {\r\n    font-size: 3rem;\r\n  }\r\n}\r\n\r\nh2 {\r\n  font-size: 1.3rem;\r\n\r\n  @include from(md) {\r\n    font-size: 2rem;\r\n  }\r\n}\r\n\r\nh3 {\r\n  font-size: 1.2rem;\r\n\r\n  @include from(md) {\r\n    font-size: 2rem;\r\n  }\r\n}\r\n\r\np {\r\n  font-size: 15px;\r\n  margin-top: 1rem;\r\n\r\n  @include from(md) {\r\n    font-size: 20px;\r\n  }\r\n}\r\n\r\ni {\r\n  color: $accent;\r\n  font-style: normal;\r\n}\r\n\r\na {\r\n  color: $link;\r\n}\r\n\r\n.content a {\r\n  color: $text;\r\n  text-decoration: underline;\r\n  text-decoration-color: $link;\r\n  text-decoration-thickness: 3px;\r\n  text-decoration-skip-ink: none;\r\n  box-shadow: inset 0 0 0 -1px $link;\r\n  transition: box-shadow .15s ease-out;\r\n  \r\n  &:hover {\r\n    box-shadow: inset 0 -1.4em 0 -1px $link;\r\n  }\r\n}\r\n\r\ns {\r\n  text-decoration-thickness: 2px;\r\n}","@use \"sass:map\";\r\n\r\n$text: #ddd;\r\n$muted: #777d7a;\r\n$light-gray: #565a58;\r\n$gray: #414643;\r\n$dark-gray: #151615;\r\n$black: #000;\r\n$accent: #4de0af;\r\n$dark-accent: #2eb185;\r\n$link: #127ed6;\r\n$font: 'Source Serif Pro', Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\r\n$black-font: 'Montserrat', $font;\r\n\r\n$sm: 576px;\r\n$md: 768px;\r\n$lg: 992px;\r\n$xl: 1200px;\r\n\r\n$breakpoints: (\r\n  sm: $sm,\r\n  md: $md,\r\n  lg: $lg,\r\n  xl: $xl\r\n);\r\n\r\n@mixin from($name) {\r\n  @media (min-width: map.get($breakpoints, $name)) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin to($name) {\r\n  @media (max-width: map.get($breakpoints, $name)) {\r\n    @content;\r\n  }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL2dsb2JhbC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUMrRjtBQUMvRiw4QkFBOEIseUZBQTJCO0FBQ3pELDhCQUE4QixRQUFTLDRFQUE0RSxJQUFJLGtCQUFrQjtBQUN6SSw4QkFBOEIsUUFBUyx5RkFBeUYsTUFBTSxNQUFNLG9CQUFvQjtBQUNoSztBQUNBLDhCQUE4QixRQUFTLE1BQU0sMkJBQTJCLHVCQUF1QixHQUFHLFVBQVUsY0FBYywyQkFBMkIsR0FBRyxVQUFVLGdCQUFnQiwyQkFBMkIsbUdBQW1HLHFCQUFxQixxQkFBcUIscUJBQXFCLGNBQWMsb0JBQW9CLHVCQUF1QixHQUFHLDZCQUE2QixVQUFVLHdCQUF3QixLQUFLLEdBQUcsNEJBQTRCLG1IQUFtSCxxQkFBcUIsa0JBQWtCLDBCQUEwQixHQUFHLFFBQVEsc0JBQXNCLEdBQUcsNkJBQTZCLFFBQVEsc0JBQXNCLEtBQUssR0FBRyxRQUFRLHNCQUFzQixHQUFHLDZCQUE2QixRQUFRLHNCQUFzQixLQUFLLEdBQUcsUUFBUSxzQkFBc0IsR0FBRyw2QkFBNkIsUUFBUSxzQkFBc0IsS0FBSyxHQUFHLE9BQU8sb0JBQW9CLHFCQUFxQixHQUFHLDZCQUE2QixPQUFPLHNCQUFzQixLQUFLLEdBQUcsT0FBTyxtQkFBbUIsdUJBQXVCLEdBQUcsT0FBTyxtQkFBbUIsR0FBRyxnQkFBZ0IsZ0JBQWdCLCtCQUErQiwyQ0FBMkMsMkNBQTJDLG1DQUFtQywyQ0FBMkMsMkNBQTJDLHlDQUF5QywwQ0FBMEMsR0FBRyxvQkFBb0IsOENBQThDLEdBQUcsT0FBTyxtQ0FBbUMsR0FBRyxPQUFPLHdHQUF3RyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsS0FBSyxLQUFLLEtBQUssV0FBVyxLQUFLLE1BQU0sS0FBSyxZQUFZLFlBQVksVUFBVSxXQUFXLE1BQU0sS0FBSyxXQUFXLEtBQUssS0FBSyxLQUFLLFVBQVUsS0FBSyxNQUFNLEtBQUssV0FBVyxLQUFLLE1BQU0sTUFBTSxVQUFVLEtBQUssTUFBTSxLQUFLLFdBQVcsS0FBSyxNQUFNLE1BQU0sVUFBVSxLQUFLLE1BQU0sS0FBSyxVQUFVLFdBQVcsS0FBSyxNQUFNLE1BQU0sVUFBVSxLQUFLLE1BQU0sS0FBSyxXQUFXLFlBQVksTUFBTSxLQUFLLFdBQVcsT0FBTyxLQUFLLFdBQVcsWUFBWSxZQUFZLGFBQWEsWUFBWSxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLGlEQUFpRCxtQkFBbUIsV0FBVyw2QkFBNkIseUJBQXlCLEtBQUssY0FBYyxnQkFBZ0IsNkJBQTZCLEtBQUssY0FBYyxtQkFBbUIsNkJBQTZCLHlCQUF5Qix1QkFBdUIsdUJBQXVCLHVCQUF1QixnQkFBZ0Isc0JBQXNCLHlCQUF5Qiw2QkFBNkIsMEJBQTBCLE9BQU8sS0FBSyxnQ0FBZ0MsK0JBQStCLHVCQUF1QixvQkFBb0IsNEJBQTRCLEtBQUssWUFBWSx3QkFBd0IsNkJBQTZCLHdCQUF3QixPQUFPLEtBQUssWUFBWSx3QkFBd0IsNkJBQTZCLHdCQUF3QixPQUFPLEtBQUssWUFBWSx3QkFBd0IsNkJBQTZCLHdCQUF3QixPQUFPLEtBQUssV0FBVyxzQkFBc0IsdUJBQXVCLDZCQUE2Qix3QkFBd0IsT0FBTyxLQUFLLFdBQVcscUJBQXFCLHlCQUF5QixLQUFLLFdBQVcsbUJBQW1CLEtBQUssb0JBQW9CLG1CQUFtQixpQ0FBaUMsbUNBQW1DLHFDQUFxQyxxQ0FBcUMseUNBQXlDLDJDQUEyQyxxQkFBcUIsZ0RBQWdELE9BQU8sS0FBSyxXQUFXLHFDQUFxQyxLQUFLLHFCQUFxQixvQkFBb0Isb0JBQW9CLHlCQUF5QixtQkFBbUIsd0JBQXdCLGlCQUFpQixxQkFBcUIsMEJBQTBCLG1CQUFtQix5RkFBeUYscUNBQXFDLG1CQUFtQixlQUFlLGVBQWUsZ0JBQWdCLG9GQUFvRiw0QkFBNEIsd0RBQXdELGlCQUFpQixPQUFPLEtBQUssMEJBQTBCLHdEQUF3RCxpQkFBaUIsT0FBTyxLQUFLLG1CQUFtQjtBQUNocEo7QUFDZSxzRkFBdUIsRUFBQyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmQ2YjM2YjRlOTM0ZmYxNzQxZDI4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Nb250c2VycmF0OndnaHRAMTAwOzMwMDs3MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9U291cmNlK1NlcmlmK1BybzppdGFsLHdnaHRAMCw0MDA7MCw3MDA7MSw0MDA7MSw3MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgY29sb3Itc2NoZW1lOiBkYXJrO1xcbn1cXG5cXG5odG1sIHtcXG4gIG1hcmdpbjogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XFxufVxcblxcbmJvZHkge1xcbiAgY29sb3I6ICNkZGQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTb3VyY2UgU2VyaWYgUHJvXFxcIiwgQ2FtYnJpYSwgQ29jaGluLCBHZW9yZ2lhLCBUaW1lcywgXFxcIlRpbWVzIE5ldyBSb21hblxcXCIsIHNlcmlmO1xcbiAgbGluZS1oZWlnaHQ6IDEuNjtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gIGJvZHkge1xcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXG4gIH1cXG59XFxuXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiB7XFxuICBmb250LWZhbWlseTogXFxcIk1vbnRzZXJyYXRcXFwiLCBcXFwiU291cmNlIFNlcmlmIFByb1xcXCIsIENhbWJyaWEsIENvY2hpbiwgR2VvcmdpYSwgVGltZXMsIFxcXCJUaW1lcyBOZXcgUm9tYW5cXFwiLCBzZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBtYXJnaW4tdG9wOiAwO1xcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcbn1cXG5cXG5oMSB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICBoMSB7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gIH1cXG59XFxuXFxuaDIge1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgaDIge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICB9XFxufVxcblxcbmgzIHtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gIGgzIHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgfVxcbn1cXG5cXG5wIHtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgcCB7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gIH1cXG59XFxuXFxuaSB7XFxuICBjb2xvcjogIzRkZTBhZjtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuYSB7XFxuICBjb2xvcjogIzEyN2VkNjtcXG59XFxuXFxuLmNvbnRlbnQgYSB7XFxuICBjb2xvcjogI2RkZDtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgLXdlYmtpdC10ZXh0LWRlY29yYXRpb24tY29sb3I6ICMxMjdlZDY7XFxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogIzEyN2VkNjtcXG4gIHRleHQtZGVjb3JhdGlvbi10aGlja25lc3M6IDNweDtcXG4gIC13ZWJraXQtdGV4dC1kZWNvcmF0aW9uLXNraXAtaW5rOiBub25lO1xcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb24tc2tpcC1pbms6IG5vbmU7XFxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAtMXB4ICMxMjdlZDY7XFxuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuMTVzIGVhc2Utb3V0O1xcbn1cXG4uY29udGVudCBhOmhvdmVyIHtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgLTEuNGVtIDAgLTFweCAjMTI3ZWQ2O1xcbn1cXG5cXG5zIHtcXG4gIHRleHQtZGVjb3JhdGlvbi10aGlja25lc3M6IDJweDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL2dsb2JhbC5zY3NzXCIsXCJ3ZWJwYWNrOi8vX3ZhcmlhYmxlcy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUdBO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtBQUFGOztBQUdBO0VBQ0UsU0FBQTtFQUNBLHNCQUFBO0FBQUY7O0FBR0E7RUFDRSxXQ1pLO0VEYUwsc0JBQUE7RUFDQSwwRkNMSztFRE1MLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFBRjtBQ0tFO0VEZEY7SUFZSSxpQkFBQTtFQUNGO0FBQ0Y7O0FBRUE7RUFDRSx3R0NsQlc7RURtQlgsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0FBQ0Y7QUNYRTtFRFNGO0lBSUksZUFBQTtFQUVGO0FBQ0Y7O0FBQ0E7RUFDRSxpQkFBQTtBQUVGO0FDcEJFO0VEaUJGO0lBSUksZUFBQTtFQUdGO0FBQ0Y7O0FBQUE7RUFDRSxpQkFBQTtBQUdGO0FDN0JFO0VEeUJGO0lBSUksZUFBQTtFQUlGO0FBQ0Y7O0FBREE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFJRjtBQ3ZDRTtFRGlDRjtJQUtJLGVBQUE7RUFLRjtBQUNGOztBQUZBO0VBQ0UsY0M5RE87RUQrRFAsa0JBQUE7QUFLRjs7QUFGQTtFQUNFLGNDakVLO0FEc0VQOztBQUZBO0VBQ0UsV0M3RUs7RUQ4RUwsMEJBQUE7RUFDQSxzQ0N2RUs7VUR1RUwsOEJDdkVLO0VEd0VMLDhCQUFBO0VBQ0Esc0NBQUE7VUFBQSw4QkFBQTtFQUNBLG9DQUFBO0VBQ0EscUNBQUE7QUFLRjtBQUhFO0VBQ0UseUNBQUE7QUFLSjs7QUFEQTtFQUNFLDhCQUFBO0FBSUZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQHVzZSAnLi92YXJpYWJsZXMnIGFzICo7XFxyXFxuQHVzZSAnLi9mb250cyc7XFxyXFxuXFxyXFxuKiB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgY29sb3Itc2NoZW1lOiBkYXJrO1xcclxcbn1cXHJcXG5cXHJcXG5odG1sIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgY29sb3I6ICR0ZXh0O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXHJcXG4gIGZvbnQtZmFtaWx5OiAkZm9udDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjY7XFxyXFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXHJcXG5cXHJcXG4gIEBpbmNsdWRlIGZyb20obWQpIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYge1xcclxcbiAgZm9udC1mYW1pbHk6ICRibGFjay1mb250O1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gIG1hcmdpbi10b3A6IDA7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxyXFxufVxcclxcblxcclxcbmgxIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcblxcclxcbiAgQGluY2x1ZGUgZnJvbShtZCkge1xcclxcbiAgICBmb250LXNpemU6IDNyZW07XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbmgyIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcblxcclxcbiAgQGluY2x1ZGUgZnJvbShtZCkge1xcclxcbiAgICBmb250LXNpemU6IDJyZW07XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbmgzIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcblxcclxcbiAgQGluY2x1ZGUgZnJvbShtZCkge1xcclxcbiAgICBmb250LXNpemU6IDJyZW07XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbnAge1xcclxcbiAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgbWFyZ2luLXRvcDogMXJlbTtcXHJcXG5cXHJcXG4gIEBpbmNsdWRlIGZyb20obWQpIHtcXHJcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5pIHtcXHJcXG4gIGNvbG9yOiAkYWNjZW50O1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbn1cXHJcXG5cXHJcXG5hIHtcXHJcXG4gIGNvbG9yOiAkbGluaztcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnQgYSB7XFxyXFxuICBjb2xvcjogJHRleHQ7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogJGxpbms7XFxyXFxuICB0ZXh0LWRlY29yYXRpb24tdGhpY2tuZXNzOiAzcHg7XFxyXFxuICB0ZXh0LWRlY29yYXRpb24tc2tpcC1pbms6IG5vbmU7XFxyXFxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAtMXB4ICRsaW5rO1xcclxcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAuMTVzIGVhc2Utb3V0O1xcclxcbiAgXFxyXFxuICAmOmhvdmVyIHtcXHJcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAtMS40ZW0gMCAtMXB4ICRsaW5rO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5zIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbi10aGlja25lc3M6IDJweDtcXHJcXG59XCIsXCJAdXNlIFxcXCJzYXNzOm1hcFxcXCI7XFxyXFxuXFxyXFxuJHRleHQ6ICNkZGQ7XFxyXFxuJG11dGVkOiAjNzc3ZDdhO1xcclxcbiRsaWdodC1ncmF5OiAjNTY1YTU4O1xcclxcbiRncmF5OiAjNDE0NjQzO1xcclxcbiRkYXJrLWdyYXk6ICMxNTE2MTU7XFxyXFxuJGJsYWNrOiAjMDAwO1xcclxcbiRhY2NlbnQ6ICM0ZGUwYWY7XFxyXFxuJGRhcmstYWNjZW50OiAjMmViMTg1O1xcclxcbiRsaW5rOiAjMTI3ZWQ2O1xcclxcbiRmb250OiAnU291cmNlIFNlcmlmIFBybycsIENhbWJyaWEsIENvY2hpbiwgR2VvcmdpYSwgVGltZXMsICdUaW1lcyBOZXcgUm9tYW4nLCBzZXJpZjtcXHJcXG4kYmxhY2stZm9udDogJ01vbnRzZXJyYXQnLCAkZm9udDtcXHJcXG5cXHJcXG4kc206IDU3NnB4O1xcclxcbiRtZDogNzY4cHg7XFxyXFxuJGxnOiA5OTJweDtcXHJcXG4keGw6IDEyMDBweDtcXHJcXG5cXHJcXG4kYnJlYWtwb2ludHM6IChcXHJcXG4gIHNtOiAkc20sXFxyXFxuICBtZDogJG1kLFxcclxcbiAgbGc6ICRsZyxcXHJcXG4gIHhsOiAkeGxcXHJcXG4pO1xcclxcblxcclxcbkBtaXhpbiBmcm9tKCRuYW1lKSB7XFxyXFxuICBAbWVkaWEgKG1pbi13aWR0aDogbWFwLmdldCgkYnJlYWtwb2ludHMsICRuYW1lKSkge1xcclxcbiAgICBAY29udGVudDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1peGluIHRvKCRuYW1lKSB7XFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogbWFwLmdldCgkYnJlYWtwb2ludHMsICRuYW1lKSkge1xcclxcbiAgICBAY29udGVudDtcXHJcXG4gIH1cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJzb3VyY2VSb290IjoiIn0=