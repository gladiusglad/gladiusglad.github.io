webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./styles/index.module.scss":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-3-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-3-2!(webpack)/resolve-url-loader??ref--5-oneOf-3-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-3-4!./styles/index.module.scss ***!
  \********************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".styles_canvas__34FM0 {\n  width: 100vw;\n  height: 100vh;\n  min-height: 40rem;\n  max-height: 45rem;\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: #000;\n}\n\n.styles_wrapper__1CpRO {\n  width: 100%;\n}\n\n.styles_jumbotron__2yGlb {\n  display: flex;\n  height: 100vh;\n  min-height: 40rem;\n  max-height: 45rem;\n  padding: 2rem;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.styles_jumbotron__2yGlb .styles_container__3yd9V {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.styles_jumbotron__2yGlb *:not(.styles_container__3yd9V) {\n  z-index: 1;\n}\n\n.styles_skills__1L_M5 {\n  margin-top: 4rem;\n  font-size: 1.5rem;\n  font-weight: 700;\n  font-family: \"Montserrat\", \"Source Sans Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, sans-serif;\n  color: #4de0af;\n}\n.styles_skills__1L_M5:before, .styles_skills__1L_M5 .styles_caret__RQY_h {\n  color: #777d7a;\n}\n.styles_skills__1L_M5:before {\n  content: \">\";\n  margin-right: 1rem;\n}\n@media (min-width: 768px) {\n  .styles_skills__1L_M5 {\n    font-size: 2.5rem;\n  }\n}\n\n.styles_contact__2RRiV {\n  color: #ddd;\n  text-decoration: none;\n  font-size: 1.2rem;\n  margin: 0 0.9rem;\n  transition: all 0.15s;\n}\n.styles_contact__2RRiV:hover, .styles_contact__2RRiV:focus {\n  color: #4de0af;\n}\n@media (min-width: 768px) {\n  .styles_contact__2RRiV {\n    font-size: 1.5rem;\n  }\n}\n\n.styles_icon__29pKf {\n  font-size: 2.5rem;\n}\n@media (min-width: 768px) {\n  .styles_icon__29pKf {\n    font-size: 2.8rem;\n  }\n}\n\n.styles_email__1x4q_ {\n  color: #777d7a;\n}", "",{"version":3,"sources":["webpack://index.module.scss","webpack://_variables.scss"],"names":[],"mappings":"AAEA;EACE,YAAA;EACA,aAAA;EACA,iBAAA;EACA,iBAAA;EACA,kBAAA;EACA,MAAA;EACA,OAAA;EACA,sBAAA;AADF;;AAIA;EACE,WAAA;AADF;;AAIA;EACE,aAAA;EACA,aAAA;EACA,iBAAA;EACA,iBAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,uBAAA;AADF;AAGE;EACE,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,uBAAA;AADJ;AAIE;EACE,UAAA;AAFJ;;AAMA;EACE,gBAAA;EACA,iBAAA;EACA,gBAAA;EACA,+HAAA;EACA,cCtCO;ADmCT;AAKE;EACE,cC9CI;AD2CR;AAME;EACE,YAAA;EACA,kBAAA;AAJJ;AAOE;EAhBF;IAiBI,iBAAA;EAJF;AACF;;AAOA;EACE,WC7DK;ED8DL,qBAAA;EACA,iBAAA;EACA,gBAAA;EACA,qBAAA;AAJF;AAME;EACE,cC9DK;AD0DT;AAOE;EAXF;IAYI,iBAAA;EAJF;AACF;;AAOA;EACE,iBAAA;AAJF;AAME;EAHF;IAII,iBAAA;EAHF;AACF;;AAMA;EACE,cCpFM;ADiFR","sourcesContent":["@use './variables' as *;\r\n\r\n.canvas {\r\n  width: 100vw;\r\n  height: 100vh;\r\n  min-height: 40rem;\r\n  max-height: 45rem;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  background-color: #000;\r\n}\r\n\r\n.wrapper {\r\n  width: 100%;\r\n}\r\n\r\n.jumbotron {\r\n  display: flex;\r\n  height: 100vh;\r\n  min-height: 40rem;\r\n  max-height: 45rem;\r\n  padding: 2rem;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n\r\n  .container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n  }\r\n\r\n  *:not(.container) {\r\n    z-index: 1;\r\n  }\r\n}\r\n\r\n.skills {\r\n  margin-top: 4rem;\r\n  font-size: 1.5rem;\r\n  font-weight: 700;\r\n  font-family: 'Montserrat', $font;\r\n  color: $accent;\r\n\r\n  &:before, .caret {\r\n    color: $muted;\r\n  }\r\n\r\n  &:before {\r\n    content: \">\";\r\n    margin-right: 1rem;\r\n  }\r\n\r\n  @media (min-width: $md) {\r\n    font-size: 2.5rem;\r\n  }\r\n}\r\n\r\n.contact {\r\n  color: $text;\r\n  text-decoration: none;\r\n  font-size: 1.2rem;\r\n  margin: 0 0.9rem;\r\n  transition: all .15s;\r\n\r\n  &:hover, &:focus {\r\n    color: $accent;\r\n  }\r\n\r\n  @media (min-width: $md) {\r\n    font-size: 1.5rem;\r\n  }\r\n}\r\n\r\n.icon {\r\n  font-size: 2.5rem;\r\n\r\n  @media (min-width: $md) {\r\n    font-size: 2.8rem;\r\n  }\r\n}\r\n\r\n.email {\r\n  color: $muted;\r\n}","$text: #ddd;\r\n$muted: rgb(119, 125, 122);\r\n$light-gray: rgb(86, 90, 88);\r\n$gray: rgb(65, 70, 67);\r\n$dark-gray: rgb(26, 29, 27);\r\n$black: #000;\r\n$accent: #4de0af;\r\n$font: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;\r\n\r\n$sm: 576px;\r\n$md: 768px;\r\n$lg: 992px;\r\n$xl: 1200px;"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"canvas": "styles_canvas__34FM0",
	"wrapper": "styles_wrapper__1CpRO",
	"jumbotron": "styles_jumbotron__2yGlb",
	"container": "styles_container__3yd9V",
	"skills": "styles_skills__1L_M5",
	"caret": "styles_caret__RQY_h",
	"contact": "styles_contact__2RRiV",
	"icon": "styles_icon__29pKf",
	"email": "styles_email__1x4q_"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL2luZGV4Lm1vZHVsZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsaUhBQXNEO0FBQ2hHO0FBQ0E7QUFDQSw4QkFBOEIsUUFBUywwQkFBMEIsaUJBQWlCLGtCQUFrQixzQkFBc0Isc0JBQXNCLHVCQUF1QixXQUFXLFlBQVksMkJBQTJCLEdBQUcsNEJBQTRCLGdCQUFnQixHQUFHLDhCQUE4QixrQkFBa0Isa0JBQWtCLHNCQUFzQixzQkFBc0Isa0JBQWtCLDJCQUEyQix3QkFBd0IsNEJBQTRCLEdBQUcscURBQXFELGtCQUFrQiwyQkFBMkIsd0JBQXdCLDRCQUE0QixHQUFHLDREQUE0RCxlQUFlLEdBQUcsMkJBQTJCLHFCQUFxQixzQkFBc0IscUJBQXFCLDBJQUEwSSxtQkFBbUIsR0FBRyw0RUFBNEUsbUJBQW1CLEdBQUcsZ0NBQWdDLG1CQUFtQix1QkFBdUIsR0FBRyw2QkFBNkIsMkJBQTJCLHdCQUF3QixLQUFLLEdBQUcsNEJBQTRCLGdCQUFnQiwwQkFBMEIsc0JBQXNCLHFCQUFxQiwwQkFBMEIsR0FBRyw4REFBOEQsbUJBQW1CLEdBQUcsNkJBQTZCLDRCQUE0Qix3QkFBd0IsS0FBSyxHQUFHLHlCQUF5QixzQkFBc0IsR0FBRyw2QkFBNkIseUJBQXlCLHdCQUF3QixLQUFLLEdBQUcsMEJBQTBCLG1CQUFtQixHQUFHLE9BQU8sOEdBQThHLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxLQUFLLEtBQUssTUFBTSxZQUFZLEtBQUssTUFBTSxLQUFLLFdBQVcsWUFBWSxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxNQUFNLEtBQUssS0FBSyxXQUFXLEtBQUssTUFBTSxLQUFLLFdBQVcsS0FBSyxLQUFLLEtBQUssV0FBVyxLQUFLLE1BQU0sS0FBSyxXQUFXLGtEQUFrRCxpQkFBaUIsbUJBQW1CLG9CQUFvQix3QkFBd0Isd0JBQXdCLHlCQUF5QixhQUFhLGNBQWMsNkJBQTZCLEtBQUssa0JBQWtCLGtCQUFrQixLQUFLLG9CQUFvQixvQkFBb0Isb0JBQW9CLHdCQUF3Qix3QkFBd0Isb0JBQW9CLDZCQUE2QiwwQkFBMEIsOEJBQThCLHNCQUFzQixzQkFBc0IsK0JBQStCLDRCQUE0QixnQ0FBZ0MsT0FBTyw2QkFBNkIsbUJBQW1CLE9BQU8sS0FBSyxpQkFBaUIsdUJBQXVCLHdCQUF3Qix1QkFBdUIsdUNBQXVDLHFCQUFxQiw0QkFBNEIsc0JBQXNCLE9BQU8sb0JBQW9CLHVCQUF1QiwyQkFBMkIsT0FBTyxtQ0FBbUMsMEJBQTBCLE9BQU8sS0FBSyxrQkFBa0IsbUJBQW1CLDRCQUE0Qix3QkFBd0IsdUJBQXVCLDJCQUEyQiw0QkFBNEIsdUJBQXVCLE9BQU8sbUNBQW1DLDBCQUEwQixPQUFPLEtBQUssZUFBZSx3QkFBd0IsbUNBQW1DLDBCQUEwQixPQUFPLEtBQUssZ0JBQWdCLG9CQUFvQixLQUFLLGVBQWUsK0JBQStCLGlDQUFpQywyQkFBMkIsZ0NBQWdDLGlCQUFpQixxQkFBcUIsZ0hBQWdILG1CQUFtQixlQUFlLGVBQWUsZ0JBQWdCLG1CQUFtQjtBQUNqdEk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZTM0M2FhNmE2NmQxMjc5NzZlZDIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5zdHlsZXNfY2FudmFzX18zNEZNMCB7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgbWluLWhlaWdodDogNDByZW07XFxuICBtYXgtaGVpZ2h0OiA0NXJlbTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xcbn1cXG5cXG4uc3R5bGVzX3dyYXBwZXJfXzFDcFJPIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uc3R5bGVzX2p1bWJvdHJvbl9fMnlHbGIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBtaW4taGVpZ2h0OiA0MHJlbTtcXG4gIG1heC1oZWlnaHQ6IDQ1cmVtO1xcbiAgcGFkZGluZzogMnJlbTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5zdHlsZXNfanVtYm90cm9uX18yeUdsYiAuc3R5bGVzX2NvbnRhaW5lcl9fM3lkOVYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5zdHlsZXNfanVtYm90cm9uX18yeUdsYiAqOm5vdCguc3R5bGVzX2NvbnRhaW5lcl9fM3lkOVYpIHtcXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbi5zdHlsZXNfc2tpbGxzX18xTF9NNSB7XFxuICBtYXJnaW4tdG9wOiA0cmVtO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNb250c2VycmF0XFxcIiwgXFxcIlNvdXJjZSBTYW5zIFByb1xcXCIsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXFxcIlNlZ29lIFVJXFxcIiwgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgc2Fucy1zZXJpZjtcXG4gIGNvbG9yOiAjNGRlMGFmO1xcbn1cXG4uc3R5bGVzX3NraWxsc19fMUxfTTU6YmVmb3JlLCAuc3R5bGVzX3NraWxsc19fMUxfTTUgLnN0eWxlc19jYXJldF9fUlFZX2gge1xcbiAgY29sb3I6ICM3NzdkN2E7XFxufVxcbi5zdHlsZXNfc2tpbGxzX18xTF9NNTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIj5cXFwiO1xcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gIC5zdHlsZXNfc2tpbGxzX18xTF9NNSB7XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgfVxcbn1cXG5cXG4uc3R5bGVzX2NvbnRhY3RfXzJSUmlWIHtcXG4gIGNvbG9yOiAjZGRkO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBtYXJnaW46IDAgMC45cmVtO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMTVzO1xcbn1cXG4uc3R5bGVzX2NvbnRhY3RfXzJSUmlWOmhvdmVyLCAuc3R5bGVzX2NvbnRhY3RfXzJSUmlWOmZvY3VzIHtcXG4gIGNvbG9yOiAjNGRlMGFmO1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gIC5zdHlsZXNfY29udGFjdF9fMlJSaVYge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gIH1cXG59XFxuXFxuLnN0eWxlc19pY29uX18yOXBLZiB7XFxuICBmb250LXNpemU6IDIuNXJlbTtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAuc3R5bGVzX2ljb25fXzI5cEtmIHtcXG4gICAgZm9udC1zaXplOiAyLjhyZW07XFxuICB9XFxufVxcblxcbi5zdHlsZXNfZW1haWxfXzF4NHFfIHtcXG4gIGNvbG9yOiAjNzc3ZDdhO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vaW5kZXgubW9kdWxlLnNjc3NcIixcIndlYnBhY2s6Ly9fdmFyaWFibGVzLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0Esc0JBQUE7QUFERjs7QUFJQTtFQUNFLFdBQUE7QUFERjs7QUFJQTtFQUNFLGFBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFERjtBQUdFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQURKO0FBSUU7RUFDRSxVQUFBO0FBRko7O0FBTUE7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrSEFBQTtFQUNBLGNDdENPO0FEbUNUO0FBS0U7RUFDRSxjQzlDSTtBRDJDUjtBQU1FO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0FBSko7QUFPRTtFQWhCRjtJQWlCSSxpQkFBQTtFQUpGO0FBQ0Y7O0FBT0E7RUFDRSxXQzdESztFRDhETCxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQUpGO0FBTUU7RUFDRSxjQzlESztBRDBEVDtBQU9FO0VBWEY7SUFZSSxpQkFBQTtFQUpGO0FBQ0Y7O0FBT0E7RUFDRSxpQkFBQTtBQUpGO0FBTUU7RUFIRjtJQUlJLGlCQUFBO0VBSEY7QUFDRjs7QUFNQTtFQUNFLGNDcEZNO0FEaUZSXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkB1c2UgJy4vdmFyaWFibGVzJyBhcyAqO1xcclxcblxcclxcbi5jYW52YXMge1xcclxcbiAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIG1pbi1oZWlnaHQ6IDQwcmVtO1xcclxcbiAgbWF4LWhlaWdodDogNDVyZW07XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXHJcXG59XFxyXFxuXFxyXFxuLndyYXBwZXIge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5qdW1ib3Ryb24ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICBtaW4taGVpZ2h0OiA0MHJlbTtcXHJcXG4gIG1heC1oZWlnaHQ6IDQ1cmVtO1xcclxcbiAgcGFkZGluZzogMnJlbTtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFxyXFxuICAuY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAqOm5vdCguY29udGFpbmVyKSB7XFxyXFxuICAgIHotaW5kZXg6IDE7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5za2lsbHMge1xcclxcbiAgbWFyZ2luLXRvcDogNHJlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsICRmb250O1xcclxcbiAgY29sb3I6ICRhY2NlbnQ7XFxyXFxuXFxyXFxuICAmOmJlZm9yZSwgLmNhcmV0IHtcXHJcXG4gICAgY29sb3I6ICRtdXRlZDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICY6YmVmb3JlIHtcXHJcXG4gICAgY29udGVudDogXFxcIj5cXFwiO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICBAbWVkaWEgKG1pbi13aWR0aDogJG1kKSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdCB7XFxyXFxuICBjb2xvcjogJHRleHQ7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gIG1hcmdpbjogMCAwLjlyZW07XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgLjE1cztcXHJcXG5cXHJcXG4gICY6aG92ZXIsICY6Zm9jdXMge1xcclxcbiAgICBjb2xvcjogJGFjY2VudDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIEBtZWRpYSAobWluLXdpZHRoOiAkbWQpIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5pY29uIHtcXHJcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcclxcblxcclxcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRtZCkge1xcclxcbiAgICBmb250LXNpemU6IDIuOHJlbTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmVtYWlsIHtcXHJcXG4gIGNvbG9yOiAkbXV0ZWQ7XFxyXFxufVwiLFwiJHRleHQ6ICNkZGQ7XFxyXFxuJG11dGVkOiByZ2IoMTE5LCAxMjUsIDEyMik7XFxyXFxuJGxpZ2h0LWdyYXk6IHJnYig4NiwgOTAsIDg4KTtcXHJcXG4kZ3JheTogcmdiKDY1LCA3MCwgNjcpO1xcclxcbiRkYXJrLWdyYXk6IHJnYigyNiwgMjksIDI3KTtcXHJcXG4kYmxhY2s6ICMwMDA7XFxyXFxuJGFjY2VudDogIzRkZTBhZjtcXHJcXG4kZm9udDogJ1NvdXJjZSBTYW5zIFBybycsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgc2Fucy1zZXJpZjtcXHJcXG5cXHJcXG4kc206IDU3NnB4O1xcclxcbiRtZDogNzY4cHg7XFxyXFxuJGxnOiA5OTJweDtcXHJcXG4keGw6IDEyMDBweDtcIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJjYW52YXNcIjogXCJzdHlsZXNfY2FudmFzX18zNEZNMFwiLFxuXHRcIndyYXBwZXJcIjogXCJzdHlsZXNfd3JhcHBlcl9fMUNwUk9cIixcblx0XCJqdW1ib3Ryb25cIjogXCJzdHlsZXNfanVtYm90cm9uX18yeUdsYlwiLFxuXHRcImNvbnRhaW5lclwiOiBcInN0eWxlc19jb250YWluZXJfXzN5ZDlWXCIsXG5cdFwic2tpbGxzXCI6IFwic3R5bGVzX3NraWxsc19fMUxfTTVcIixcblx0XCJjYXJldFwiOiBcInN0eWxlc19jYXJldF9fUlFZX2hcIixcblx0XCJjb250YWN0XCI6IFwic3R5bGVzX2NvbnRhY3RfXzJSUmlWXCIsXG5cdFwiaWNvblwiOiBcInN0eWxlc19pY29uX18yOXBLZlwiLFxuXHRcImVtYWlsXCI6IFwic3R5bGVzX2VtYWlsX18xeDRxX1wiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJzb3VyY2VSb290IjoiIn0=