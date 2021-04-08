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
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Source+Serif+Pro:ital,wght@0,400;0,700;1,400;1,700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "* {\n  box-sizing: border-box;\n  color-scheme: dark;\n}\n\nhtml {\n  margin: 0;\n  background-color: #000;\n}\n\nbody {\n  color: #ddd;\n  background-color: #000;\n  font-family: \"Source Serif Pro\", Cambria, Cochin, Georgia, Times, \"Times New Roman\", serif;\n  line-height: 1.6;\n  text-align: left;\n  font-weight: 400;\n  margin: 0;\n  font-size: 1rem;\n  overflow-x: hidden;\n}\n@media (min-width: 768px) {\n  body {\n    font-size: 1.1rem;\n  }\n}\n\nh1, h2, h3, h4, h5, h6 {\n  font-family: \"Montserrat\", \"Source Serif Pro\", Cambria, Cochin, Georgia, Times, \"Times New Roman\", serif;\n  font-weight: 700;\n  margin-top: 0;\n  margin-bottom: 0.5rem;\n}\n\nh1 {\n  font-size: 2rem;\n}\n@media (min-width: 768px) {\n  h1 {\n    font-size: 3rem;\n  }\n}\n\nh2 {\n  font-size: 1.5rem;\n}\n@media (min-width: 768px) {\n  h2 {\n    font-size: 2.4rem;\n  }\n}\n\nh3 {\n  font-size: 1.2rem;\n}\n@media (min-width: 768px) {\n  h3 {\n    font-size: 2rem;\n  }\n}\n\np {\n  font-size: 15px;\n  margin-top: 1rem;\n}\n@media (min-width: 768px) {\n  p {\n    font-size: 20px;\n  }\n}\n\ni {\n  color: #4de0af;\n  font-style: normal;\n}\n\na {\n  color: #127ed6;\n}\n\n.content a {\n  color: #ddd;\n  text-decoration: underline;\n  -webkit-text-decoration-color: #127ed6;\n          text-decoration-color: #127ed6;\n  text-decoration-thickness: 3px;\n  -webkit-text-decoration-skip-ink: none;\n          text-decoration-skip-ink: none;\n  box-shadow: inset 0 0 0 -1px #127ed6;\n  transition: box-shadow 0.15s ease-out;\n}\n.content a:hover {\n  box-shadow: inset 0 -1.4em 0 -1px #127ed6;\n}\n\ns {\n  text-decoration-thickness: 2px;\n}", "",{"version":3,"sources":["webpack://global.scss","webpack://_variables.scss"],"names":[],"mappings":"AAGA;EACE,sBAAA;EACA,kBAAA;AAAF;;AAGA;EACE,SAAA;EACA,sBAAA;AAAF;;AAGA;EACE,WCZK;EDaL,sBAAA;EACA,0FCNK;EDOL,gBAAA;EACA,gBAAA;EACA,gBAAA;EACA,SAAA;EACA,eAAA;EACA,kBAAA;AAAF;ACIE;EDbF;IAYI,iBAAA;EACF;AACF;;AAEA;EACE,wGCnBW;EDoBX,gBAAA;EACA,aAAA;EACA,qBAAA;AACF;;AAEA;EACE,eAAA;AACF;ACZE;EDUF;IAII,eAAA;EAEF;AACF;;AACA;EACE,iBAAA;AAEF;ACrBE;EDkBF;IAII,iBAAA;EAGF;AACF;;AAAA;EACE,iBAAA;AAGF;AC9BE;ED0BF;IAII,eAAA;EAIF;AACF;;AADA;EACE,eAAA;EACA,gBAAA;AAIF;ACxCE;EDkCF;IAKI,eAAA;EAKF;AACF;;AAFA;EACE,cC/DO;EDgEP,kBAAA;AAKF;;AAFA;EACE,cClEK;ADuEP;;AAFA;EACE,WC7EK;ED8EL,0BAAA;EACA,sCCxEK;UDwEL,8BCxEK;EDyEL,8BAAA;EACA,sCAAA;UAAA,8BAAA;EACA,oCAAA;EACA,qCAAA;AAKF;AAHE;EACE,yCAAA;AAKJ;;AADA;EACE,8BAAA;AAIF","sourcesContent":["@use './variables' as *;\r\n@use './fonts';\r\n\r\n* {\r\n  box-sizing: border-box;\r\n  color-scheme: dark;\r\n}\r\n\r\nhtml {\r\n  margin: 0;\r\n  background-color: #000;\r\n}\r\n\r\nbody {\r\n  color: $text;\r\n  background-color: #000;\r\n  font-family: $font;\r\n  line-height: 1.6;\r\n  text-align: left;\r\n  font-weight: 400;\r\n  margin: 0;\r\n  font-size: 1rem;\r\n  overflow-x: hidden;\r\n\r\n  @include from(md) {\r\n    font-size: 1.1rem;\r\n  }\r\n}\r\n\r\nh1, h2, h3, h4, h5, h6 {\r\n  font-family: $black-font;\r\n  font-weight: 700;\r\n  margin-top: 0;\r\n  margin-bottom: 0.5rem;\r\n}\r\n\r\nh1 {\r\n  font-size: 2rem;\r\n\r\n  @include from(md) {\r\n    font-size: 3rem;\r\n  }\r\n}\r\n\r\nh2 {\r\n  font-size: 1.5rem;\r\n\r\n  @include from(md) {\r\n    font-size: 2.4rem;\r\n  }\r\n}\r\n\r\nh3 {\r\n  font-size: 1.2rem;\r\n\r\n  @include from(md) {\r\n    font-size: 2rem;\r\n  }\r\n}\r\n\r\np {\r\n  font-size: 15px;\r\n  margin-top: 1rem;\r\n\r\n  @include from(md) {\r\n    font-size: 20px;\r\n  }\r\n}\r\n\r\ni {\r\n  color: $accent;\r\n  font-style: normal;\r\n}\r\n\r\na {\r\n  color: $link;\r\n}\r\n\r\n.content a {\r\n  color: $text;\r\n  text-decoration: underline;\r\n  text-decoration-color: $link;\r\n  text-decoration-thickness: 3px;\r\n  text-decoration-skip-ink: none;\r\n  box-shadow: inset 0 0 0 -1px $link;\r\n  transition: box-shadow .15s ease-out;\r\n  \r\n  &:hover {\r\n    box-shadow: inset 0 -1.4em 0 -1px $link;\r\n  }\r\n}\r\n\r\ns {\r\n  text-decoration-thickness: 2px;\r\n}","@use \"sass:map\";\r\n\r\n$text: #ddd;\r\n$muted: #777d7a;\r\n$gray: #2b2c2c;\r\n$dark-gray: #151615;\r\n$black: #000;\r\n$accent: #4de0af;\r\n$dark-accent: #2eb185;\r\n$link: #127ed6;\r\n$font: 'Source Serif Pro', Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\r\n$black-font: 'Montserrat', $font;\r\n\r\n$sm: 576px;\r\n$md: 768px;\r\n$lg: 992px;\r\n$xl: 1200px;\r\n\r\n$breakpoints: (\r\n  sm: $sm,\r\n  md: $md,\r\n  lg: $lg,\r\n  xl: $xl\r\n);\r\n\r\n@mixin from($name) {\r\n  @media (min-width: map.get($breakpoints, $name)) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin to($name) {\r\n  @media (max-width: map.get($breakpoints, $name)) {\r\n    @content;\r\n  }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL2dsb2JhbC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUMrRjtBQUMvRiw4QkFBOEIseUZBQTJCO0FBQ3pELDhCQUE4QixRQUFTLDRFQUE0RSxJQUFJLElBQUksa0JBQWtCO0FBQzdJLDhCQUE4QixRQUFTLHlGQUF5RixNQUFNLE1BQU0sb0JBQW9CO0FBQ2hLO0FBQ0EsOEJBQThCLFFBQVMsTUFBTSwyQkFBMkIsdUJBQXVCLEdBQUcsVUFBVSxjQUFjLDJCQUEyQixHQUFHLFVBQVUsZ0JBQWdCLDJCQUEyQixtR0FBbUcscUJBQXFCLHFCQUFxQixxQkFBcUIsY0FBYyxvQkFBb0IsdUJBQXVCLEdBQUcsNkJBQTZCLFVBQVUsd0JBQXdCLEtBQUssR0FBRyw0QkFBNEIsbUhBQW1ILHFCQUFxQixrQkFBa0IsMEJBQTBCLEdBQUcsUUFBUSxvQkFBb0IsR0FBRyw2QkFBNkIsUUFBUSxzQkFBc0IsS0FBSyxHQUFHLFFBQVEsc0JBQXNCLEdBQUcsNkJBQTZCLFFBQVEsd0JBQXdCLEtBQUssR0FBRyxRQUFRLHNCQUFzQixHQUFHLDZCQUE2QixRQUFRLHNCQUFzQixLQUFLLEdBQUcsT0FBTyxvQkFBb0IscUJBQXFCLEdBQUcsNkJBQTZCLE9BQU8sc0JBQXNCLEtBQUssR0FBRyxPQUFPLG1CQUFtQix1QkFBdUIsR0FBRyxPQUFPLG1CQUFtQixHQUFHLGdCQUFnQixnQkFBZ0IsK0JBQStCLDJDQUEyQywyQ0FBMkMsbUNBQW1DLDJDQUEyQywyQ0FBMkMseUNBQXlDLDBDQUEwQyxHQUFHLG9CQUFvQiw4Q0FBOEMsR0FBRyxPQUFPLG1DQUFtQyxHQUFHLE9BQU8sd0dBQXdHLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxLQUFLLEtBQUssS0FBSyxXQUFXLEtBQUssTUFBTSxLQUFLLFlBQVksWUFBWSxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLEtBQUssVUFBVSxLQUFLLE1BQU0sS0FBSyxXQUFXLEtBQUssTUFBTSxNQUFNLFdBQVcsS0FBSyxNQUFNLEtBQUssV0FBVyxLQUFLLE1BQU0sTUFBTSxVQUFVLEtBQUssTUFBTSxLQUFLLFVBQVUsV0FBVyxLQUFLLE1BQU0sTUFBTSxVQUFVLEtBQUssTUFBTSxLQUFLLFdBQVcsWUFBWSxNQUFNLEtBQUssV0FBVyxPQUFPLEtBQUssV0FBVyxZQUFZLFlBQVksYUFBYSxZQUFZLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsTUFBTSxLQUFLLFdBQVcsaURBQWlELG1CQUFtQixXQUFXLDZCQUE2Qix5QkFBeUIsS0FBSyxjQUFjLGdCQUFnQiw2QkFBNkIsS0FBSyxjQUFjLG1CQUFtQiw2QkFBNkIseUJBQXlCLHVCQUF1Qix1QkFBdUIsdUJBQXVCLGdCQUFnQixzQkFBc0IseUJBQXlCLDZCQUE2QiwwQkFBMEIsT0FBTyxLQUFLLGdDQUFnQywrQkFBK0IsdUJBQXVCLG9CQUFvQiw0QkFBNEIsS0FBSyxZQUFZLHNCQUFzQiw2QkFBNkIsd0JBQXdCLE9BQU8sS0FBSyxZQUFZLHdCQUF3Qiw2QkFBNkIsMEJBQTBCLE9BQU8sS0FBSyxZQUFZLHdCQUF3Qiw2QkFBNkIsd0JBQXdCLE9BQU8sS0FBSyxXQUFXLHNCQUFzQix1QkFBdUIsNkJBQTZCLHdCQUF3QixPQUFPLEtBQUssV0FBVyxxQkFBcUIseUJBQXlCLEtBQUssV0FBVyxtQkFBbUIsS0FBSyxvQkFBb0IsbUJBQW1CLGlDQUFpQyxtQ0FBbUMscUNBQXFDLHFDQUFxQyx5Q0FBeUMsMkNBQTJDLHFCQUFxQixnREFBZ0QsT0FBTyxLQUFLLFdBQVcscUNBQXFDLEtBQUsscUJBQXFCLG9CQUFvQixvQkFBb0IsbUJBQW1CLHdCQUF3QixpQkFBaUIscUJBQXFCLDBCQUEwQixtQkFBbUIseUZBQXlGLHFDQUFxQyxtQkFBbUIsZUFBZSxlQUFlLGdCQUFnQixvRkFBb0YsNEJBQTRCLHdEQUF3RCxpQkFBaUIsT0FBTyxLQUFLLDBCQUEwQix3REFBd0QsaUJBQWlCLE9BQU8sS0FBSyxtQkFBbUI7QUFDdm5KO0FBQ2Usc0ZBQXVCLEVBQUMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4wNzlhNTdhNGIwNzgyMDJmZTU4Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TW9udHNlcnJhdDp3Z2h0QDEwMDszMDA7NDAwOzcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Tb3VyY2UrU2VyaWYrUHJvOml0YWwsd2dodEAwLDQwMDswLDcwMDsxLDQwMDsxLDcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBjb2xvci1zY2hlbWU6IGRhcms7XFxufVxcblxcbmh0bWwge1xcbiAgbWFyZ2luOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXG59XFxuXFxuYm9keSB7XFxuICBjb2xvcjogI2RkZDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XFxuICBmb250LWZhbWlseTogXFxcIlNvdXJjZSBTZXJpZiBQcm9cXFwiLCBDYW1icmlhLCBDb2NoaW4sIEdlb3JnaWEsIFRpbWVzLCBcXFwiVGltZXMgTmV3IFJvbWFuXFxcIiwgc2VyaWY7XFxuICBsaW5lLWhlaWdodDogMS42O1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBtYXJnaW46IDA7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgYm9keSB7XFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgfVxcbn1cXG5cXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTW9udHNlcnJhdFxcXCIsIFxcXCJTb3VyY2UgU2VyaWYgUHJvXFxcIiwgQ2FtYnJpYSwgQ29jaGluLCBHZW9yZ2lhLCBUaW1lcywgXFxcIlRpbWVzIE5ldyBSb21hblxcXCIsIHNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIG1hcmdpbi10b3A6IDA7XFxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxufVxcblxcbmgxIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICBoMSB7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gIH1cXG59XFxuXFxuaDIge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgaDIge1xcbiAgICBmb250LXNpemU6IDIuNHJlbTtcXG4gIH1cXG59XFxuXFxuaDMge1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgaDMge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICB9XFxufVxcblxcbnAge1xcbiAgZm9udC1zaXplOiAxNXB4O1xcbiAgbWFyZ2luLXRvcDogMXJlbTtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICBwIHtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgfVxcbn1cXG5cXG5pIHtcXG4gIGNvbG9yOiAjNGRlMGFmO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5hIHtcXG4gIGNvbG9yOiAjMTI3ZWQ2O1xcbn1cXG5cXG4uY29udGVudCBhIHtcXG4gIGNvbG9yOiAjZGRkO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICAtd2Via2l0LXRleHQtZGVjb3JhdGlvbi1jb2xvcjogIzEyN2VkNjtcXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiAjMTI3ZWQ2O1xcbiAgdGV4dC1kZWNvcmF0aW9uLXRoaWNrbmVzczogM3B4O1xcbiAgLXdlYmtpdC10ZXh0LWRlY29yYXRpb24tc2tpcC1pbms6IG5vbmU7XFxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbi1za2lwLWluazogbm9uZTtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIC0xcHggIzEyN2VkNjtcXG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4xNXMgZWFzZS1vdXQ7XFxufVxcbi5jb250ZW50IGE6aG92ZXIge1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAtMS40ZW0gMCAtMXB4ICMxMjdlZDY7XFxufVxcblxcbnMge1xcbiAgdGV4dC1kZWNvcmF0aW9uLXRoaWNrbmVzczogMnB4O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vZ2xvYmFsLnNjc3NcIixcIndlYnBhY2s6Ly9fdmFyaWFibGVzLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBR0E7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0FBQUY7O0FBR0E7RUFDRSxTQUFBO0VBQ0Esc0JBQUE7QUFBRjs7QUFHQTtFQUNFLFdDWks7RURhTCxzQkFBQTtFQUNBLDBGQ05LO0VET0wsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUFGO0FDSUU7RURiRjtJQVlJLGlCQUFBO0VBQ0Y7QUFDRjs7QUFFQTtFQUNFLHdHQ25CVztFRG9CWCxnQkFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtBQUNGO0FDWkU7RURVRjtJQUlJLGVBQUE7RUFFRjtBQUNGOztBQUNBO0VBQ0UsaUJBQUE7QUFFRjtBQ3JCRTtFRGtCRjtJQUlJLGlCQUFBO0VBR0Y7QUFDRjs7QUFBQTtFQUNFLGlCQUFBO0FBR0Y7QUM5QkU7RUQwQkY7SUFJSSxlQUFBO0VBSUY7QUFDRjs7QUFEQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQUlGO0FDeENFO0VEa0NGO0lBS0ksZUFBQTtFQUtGO0FBQ0Y7O0FBRkE7RUFDRSxjQy9ETztFRGdFUCxrQkFBQTtBQUtGOztBQUZBO0VBQ0UsY0NsRUs7QUR1RVA7O0FBRkE7RUFDRSxXQzdFSztFRDhFTCwwQkFBQTtFQUNBLHNDQ3hFSztVRHdFTCw4QkN4RUs7RUR5RUwsOEJBQUE7RUFDQSxzQ0FBQTtVQUFBLDhCQUFBO0VBQ0Esb0NBQUE7RUFDQSxxQ0FBQTtBQUtGO0FBSEU7RUFDRSx5Q0FBQTtBQUtKOztBQURBO0VBQ0UsOEJBQUE7QUFJRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAdXNlICcuL3ZhcmlhYmxlcycgYXMgKjtcXHJcXG5AdXNlICcuL2ZvbnRzJztcXHJcXG5cXHJcXG4qIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBjb2xvci1zY2hlbWU6IGRhcms7XFxyXFxufVxcclxcblxcclxcbmh0bWwge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBjb2xvcjogJHRleHQ7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xcclxcbiAgZm9udC1mYW1pbHk6ICRmb250O1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuNjtcXHJcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcclxcblxcclxcbiAgQGluY2x1ZGUgZnJvbShtZCkge1xcclxcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiB7XFxyXFxuICBmb250LWZhbWlseTogJGJsYWNrLWZvbnQ7XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgbWFyZ2luLXRvcDogMDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuaDEge1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcblxcclxcbiAgQGluY2x1ZGUgZnJvbShtZCkge1xcclxcbiAgICBmb250LXNpemU6IDNyZW07XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbmgyIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcblxcclxcbiAgQGluY2x1ZGUgZnJvbShtZCkge1xcclxcbiAgICBmb250LXNpemU6IDIuNHJlbTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuaDMge1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuXFxyXFxuICBAaW5jbHVkZSBmcm9tKG1kKSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxucCB7XFxyXFxuICBmb250LXNpemU6IDE1cHg7XFxyXFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcclxcblxcclxcbiAgQGluY2x1ZGUgZnJvbShtZCkge1xcclxcbiAgICBmb250LXNpemU6IDIwcHg7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbmkge1xcclxcbiAgY29sb3I6ICRhY2NlbnQ7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxufVxcclxcblxcclxcbmEge1xcclxcbiAgY29sb3I6ICRsaW5rO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudCBhIHtcXHJcXG4gIGNvbG9yOiAkdGV4dDtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiAkbGluaztcXHJcXG4gIHRleHQtZGVjb3JhdGlvbi10aGlja25lc3M6IDNweDtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbi1za2lwLWluazogbm9uZTtcXHJcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIC0xcHggJGxpbms7XFxyXFxuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IC4xNXMgZWFzZS1vdXQ7XFxyXFxuICBcXHJcXG4gICY6aG92ZXIge1xcclxcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIC0xLjRlbSAwIC0xcHggJGxpbms7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbnMge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uLXRoaWNrbmVzczogMnB4O1xcclxcbn1cIixcIkB1c2UgXFxcInNhc3M6bWFwXFxcIjtcXHJcXG5cXHJcXG4kdGV4dDogI2RkZDtcXHJcXG4kbXV0ZWQ6ICM3NzdkN2E7XFxyXFxuJGdyYXk6ICMyYjJjMmM7XFxyXFxuJGRhcmstZ3JheTogIzE1MTYxNTtcXHJcXG4kYmxhY2s6ICMwMDA7XFxyXFxuJGFjY2VudDogIzRkZTBhZjtcXHJcXG4kZGFyay1hY2NlbnQ6ICMyZWIxODU7XFxyXFxuJGxpbms6ICMxMjdlZDY7XFxyXFxuJGZvbnQ6ICdTb3VyY2UgU2VyaWYgUHJvJywgQ2FtYnJpYSwgQ29jaGluLCBHZW9yZ2lhLCBUaW1lcywgJ1RpbWVzIE5ldyBSb21hbicsIHNlcmlmO1xcclxcbiRibGFjay1mb250OiAnTW9udHNlcnJhdCcsICRmb250O1xcclxcblxcclxcbiRzbTogNTc2cHg7XFxyXFxuJG1kOiA3NjhweDtcXHJcXG4kbGc6IDk5MnB4O1xcclxcbiR4bDogMTIwMHB4O1xcclxcblxcclxcbiRicmVha3BvaW50czogKFxcclxcbiAgc206ICRzbSxcXHJcXG4gIG1kOiAkbWQsXFxyXFxuICBsZzogJGxnLFxcclxcbiAgeGw6ICR4bFxcclxcbik7XFxyXFxuXFxyXFxuQG1peGluIGZyb20oJG5hbWUpIHtcXHJcXG4gIEBtZWRpYSAobWluLXdpZHRoOiBtYXAuZ2V0KCRicmVha3BvaW50cywgJG5hbWUpKSB7XFxyXFxuICAgIEBjb250ZW50O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWl4aW4gdG8oJG5hbWUpIHtcXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiBtYXAuZ2V0KCRicmVha3BvaW50cywgJG5hbWUpKSB7XFxyXFxuICAgIEBjb250ZW50O1xcclxcbiAgfVxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==