webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./components/section/style.module.scss":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-3-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-3-2!(webpack)/resolve-url-loader??ref--5-oneOf-3-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-3-4!./components/section/style.module.scss ***!
  \********************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".style_section__yTP1Y {\n  width: 100%;\n  background-color: #1a1d1b;\n  min-height: 20rem;\n  padding: 4rem 0;\n  position: relative;\n  overflow: hidden;\n}\n\n.style_backTitle__1qwj3 {\n  position: absolute;\n  top: 0;\n  left: -0.2em;\n  font-size: 6rem;\n  font-weight: 100;\n  margin-top: -0.5em;\n  color: #000;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.style_backTitle__1qwj3 .style_bold__2jjvt {\n  font-weight: 700;\n}\n@media (min-width: 768px) {\n  .style_backTitle__1qwj3 {\n    font-size: 8rem;\n  }\n}\n@media (min-width: 1200px) {\n  .style_backTitle__1qwj3 {\n    font-size: 12rem;\n  }\n}\n\n.style_backTitleFade__CUjT8 {\n  position: absolute;\n  top: 0;\n}\n\n.style_container__3WjIO {\n  position: relative;\n  z-index: 2;\n}", "",{"version":3,"sources":["webpack://style.module.scss","webpack://../../styles/_variables.scss"],"names":[],"mappings":"AAEA;EACE,WAAA;EACA,yBCEU;EDDV,iBAAA;EACA,eAAA;EACA,kBAAA;EACA,gBAAA;AADF;;AAIA;EACE,kBAAA;EACA,MAAA;EACA,YAAA;EACA,eAAA;EACA,gBAAA;EACA,kBAAA;EACA,WCXM;EDYN,yBAAA;KAAA,sBAAA;MAAA,qBAAA;UAAA,iBAAA;AADF;AAGE;EACE,gBAAA;AADJ;ACME;EDhBF;IAeI,eAAA;EADF;AACF;ACCE;EDhBF;IAmBI,gBAAA;EAAF;AACF;;AAGA;EACE,kBAAA;EACA,MAAA;AAAF;;AAGA;EACE,kBAAA;EACA,UAAA;AAAF","sourcesContent":["@use '/styles/variables' as *;\r\n\r\n.section {\r\n  width: 100%;\r\n  background-color: $dark-gray;\r\n  min-height: 20rem;\r\n  padding: 4rem 0;\r\n  position: relative;\r\n  overflow: hidden;\r\n}\r\n\r\n.backTitle {\r\n  position: absolute;\r\n  top: 0;\r\n  left: -0.2em;\r\n  font-size: 6rem;\r\n  font-weight: 100;\r\n  margin-top: -0.5em;\r\n  color: $black;\r\n  user-select: none;\r\n  \r\n  .bold {\r\n    font-weight: 700;\r\n  }\r\n  \r\n  @include from(md) {\r\n    font-size: 8rem;\r\n  }\r\n  \r\n  @include from(xl) {\r\n    font-size: 12rem;\r\n  }\r\n}\r\n\r\n.backTitleFade {\r\n  position: absolute;\r\n  top: 0;\r\n}\r\n\r\n.container {\r\n  position: relative;\r\n  z-index: 2;\r\n}","@use \"sass:map\";\r\n\r\n$text: #ddd;\r\n$muted: rgb(119, 125, 122);\r\n$light-gray: rgb(86, 90, 88);\r\n$gray: rgb(65, 70, 67);\r\n$dark-gray: rgb(26, 29, 27);\r\n$black: #000;\r\n$accent: #4de0af;\r\n$link: #127ed6;\r\n$font: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;\r\n$black-font: 'Montserrat', $font;\r\n$serif-font: 'Merriweather', $font;\r\n\r\n$sm: 576px;\r\n$md: 768px;\r\n$lg: 992px;\r\n$xl: 1200px;\r\n\r\n$breakpoints: (\r\n  sm: $sm,\r\n  md: $md,\r\n  lg: $lg,\r\n  xl: $xl\r\n);\r\n\r\n@mixin from($name) {\r\n  @media (min-width: map.get($breakpoints, $name)) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin to($name) {\r\n  @media (max-width: map.get($breakpoints, $name)) {\r\n    @content;\r\n  }\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"section": "style_section__yTP1Y",
	"backTitle": "style_backTitle__1qwj3",
	"bold": "style_bold__2jjvt",
	"backTitleFade": "style_backTitleFade__CUjT8",
	"container": "style_container__3WjIO"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zZWN0aW9uL3N0eWxlLm1vZHVsZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsb0hBQXlEO0FBQ25HO0FBQ0E7QUFDQSw4QkFBOEIsUUFBUywwQkFBMEIsZ0JBQWdCLDhCQUE4QixzQkFBc0Isb0JBQW9CLHVCQUF1QixxQkFBcUIsR0FBRyw2QkFBNkIsdUJBQXVCLFdBQVcsaUJBQWlCLG9CQUFvQixxQkFBcUIsdUJBQXVCLGdCQUFnQiw4QkFBOEIsOEJBQThCLDhCQUE4Qiw4QkFBOEIsR0FBRyw4Q0FBOEMscUJBQXFCLEdBQUcsNkJBQTZCLDZCQUE2QixzQkFBc0IsS0FBSyxHQUFHLDhCQUE4Qiw2QkFBNkIsdUJBQXVCLEtBQUssR0FBRyxpQ0FBaUMsdUJBQXVCLFdBQVcsR0FBRyw2QkFBNkIsdUJBQXVCLGVBQWUsR0FBRyxPQUFPLDJIQUEySCxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxNQUFNLFVBQVUsS0FBSyxLQUFLLEtBQUssTUFBTSxZQUFZLEtBQUssTUFBTSxLQUFLLFdBQVcsVUFBVSxNQUFNLEtBQUssV0FBVyxVQUFVLHVEQUF1RCxrQkFBa0Isa0JBQWtCLG1DQUFtQyx3QkFBd0Isc0JBQXNCLHlCQUF5Qix1QkFBdUIsS0FBSyxvQkFBb0IseUJBQXlCLGFBQWEsbUJBQW1CLHNCQUFzQix1QkFBdUIseUJBQXlCLG9CQUFvQix3QkFBd0IsbUJBQW1CLHlCQUF5QixPQUFPLCtCQUErQix3QkFBd0IsT0FBTywrQkFBK0IseUJBQXlCLE9BQU8sS0FBSyx3QkFBd0IseUJBQXlCLGFBQWEsS0FBSyxvQkFBb0IseUJBQXlCLGlCQUFpQixLQUFLLHFCQUFxQixvQkFBb0IsK0JBQStCLGlDQUFpQywyQkFBMkIsZ0NBQWdDLGlCQUFpQixxQkFBcUIsbUJBQW1CLGdIQUFnSCxxQ0FBcUMsdUNBQXVDLG1CQUFtQixlQUFlLGVBQWUsZ0JBQWdCLG9GQUFvRiw0QkFBNEIsd0RBQXdELGlCQUFpQixPQUFPLEtBQUssMEJBQTBCLHdEQUF3RCxpQkFBaUIsT0FBTyxLQUFLLG1CQUFtQjtBQUMxekY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjY1YmJkNGZjYWQzYjNjMTk3MmJlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuc3R5bGVfc2VjdGlvbl9feVRQMVkge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWExZDFiO1xcbiAgbWluLWhlaWdodDogMjByZW07XFxuICBwYWRkaW5nOiA0cmVtIDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4uc3R5bGVfYmFja1RpdGxlX18xcXdqMyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAtMC4yZW07XFxuICBmb250LXNpemU6IDZyZW07XFxuICBmb250LXdlaWdodDogMTAwO1xcbiAgbWFyZ2luLXRvcDogLTAuNWVtO1xcbiAgY29sb3I6ICMwMDA7XFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG4uc3R5bGVfYmFja1RpdGxlX18xcXdqMyAuc3R5bGVfYm9sZF9fMmpqdnQge1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAuc3R5bGVfYmFja1RpdGxlX18xcXdqMyB7XFxuICAgIGZvbnQtc2l6ZTogOHJlbTtcXG4gIH1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xcbiAgLnN0eWxlX2JhY2tUaXRsZV9fMXF3ajMge1xcbiAgICBmb250LXNpemU6IDEycmVtO1xcbiAgfVxcbn1cXG5cXG4uc3R5bGVfYmFja1RpdGxlRmFkZV9fQ1VqVDgge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbn1cXG5cXG4uc3R5bGVfY29udGFpbmVyX18zV2pJTyB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB6LWluZGV4OiAyO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3R5bGUubW9kdWxlLnNjc3NcIixcIndlYnBhY2s6Ly8uLi8uLi9zdHlsZXMvX3ZhcmlhYmxlcy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0UsV0FBQTtFQUNBLHlCQ0VVO0VERFYsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQURGOztBQUlBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0NYTTtFRFlOLHlCQUFBO0tBQUEsc0JBQUE7TUFBQSxxQkFBQTtVQUFBLGlCQUFBO0FBREY7QUFHRTtFQUNFLGdCQUFBO0FBREo7QUNNRTtFRGhCRjtJQWVJLGVBQUE7RUFERjtBQUNGO0FDQ0U7RURoQkY7SUFtQkksZ0JBQUE7RUFBRjtBQUNGOztBQUdBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0FBQUY7O0FBR0E7RUFDRSxrQkFBQTtFQUNBLFVBQUE7QUFBRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAdXNlICcvc3R5bGVzL3ZhcmlhYmxlcycgYXMgKjtcXHJcXG5cXHJcXG4uc2VjdGlvbiB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICRkYXJrLWdyYXk7XFxyXFxuICBtaW4taGVpZ2h0OiAyMHJlbTtcXHJcXG4gIHBhZGRpbmc6IDRyZW0gMDtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi5iYWNrVGl0bGUge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogLTAuMmVtO1xcclxcbiAgZm9udC1zaXplOiA2cmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDEwMDtcXHJcXG4gIG1hcmdpbi10b3A6IC0wLjVlbTtcXHJcXG4gIGNvbG9yOiAkYmxhY2s7XFxyXFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gIFxcclxcbiAgLmJvbGQge1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICBAaW5jbHVkZSBmcm9tKG1kKSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogOHJlbTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgQGluY2x1ZGUgZnJvbSh4bCkge1xcclxcbiAgICBmb250LXNpemU6IDEycmVtO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uYmFja1RpdGxlRmFkZSB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDA7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXIge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgei1pbmRleDogMjtcXHJcXG59XCIsXCJAdXNlIFxcXCJzYXNzOm1hcFxcXCI7XFxyXFxuXFxyXFxuJHRleHQ6ICNkZGQ7XFxyXFxuJG11dGVkOiByZ2IoMTE5LCAxMjUsIDEyMik7XFxyXFxuJGxpZ2h0LWdyYXk6IHJnYig4NiwgOTAsIDg4KTtcXHJcXG4kZ3JheTogcmdiKDY1LCA3MCwgNjcpO1xcclxcbiRkYXJrLWdyYXk6IHJnYigyNiwgMjksIDI3KTtcXHJcXG4kYmxhY2s6ICMwMDA7XFxyXFxuJGFjY2VudDogIzRkZTBhZjtcXHJcXG4kbGluazogIzEyN2VkNjtcXHJcXG4kZm9udDogJ1NvdXJjZSBTYW5zIFBybycsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgc2Fucy1zZXJpZjtcXHJcXG4kYmxhY2stZm9udDogJ01vbnRzZXJyYXQnLCAkZm9udDtcXHJcXG4kc2VyaWYtZm9udDogJ01lcnJpd2VhdGhlcicsICRmb250O1xcclxcblxcclxcbiRzbTogNTc2cHg7XFxyXFxuJG1kOiA3NjhweDtcXHJcXG4kbGc6IDk5MnB4O1xcclxcbiR4bDogMTIwMHB4O1xcclxcblxcclxcbiRicmVha3BvaW50czogKFxcclxcbiAgc206ICRzbSxcXHJcXG4gIG1kOiAkbWQsXFxyXFxuICBsZzogJGxnLFxcclxcbiAgeGw6ICR4bFxcclxcbik7XFxyXFxuXFxyXFxuQG1peGluIGZyb20oJG5hbWUpIHtcXHJcXG4gIEBtZWRpYSAobWluLXdpZHRoOiBtYXAuZ2V0KCRicmVha3BvaW50cywgJG5hbWUpKSB7XFxyXFxuICAgIEBjb250ZW50O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWl4aW4gdG8oJG5hbWUpIHtcXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiBtYXAuZ2V0KCRicmVha3BvaW50cywgJG5hbWUpKSB7XFxyXFxuICAgIEBjb250ZW50O1xcclxcbiAgfVxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJzZWN0aW9uXCI6IFwic3R5bGVfc2VjdGlvbl9feVRQMVlcIixcblx0XCJiYWNrVGl0bGVcIjogXCJzdHlsZV9iYWNrVGl0bGVfXzFxd2ozXCIsXG5cdFwiYm9sZFwiOiBcInN0eWxlX2JvbGRfXzJqanZ0XCIsXG5cdFwiYmFja1RpdGxlRmFkZVwiOiBcInN0eWxlX2JhY2tUaXRsZUZhZGVfX0NValQ4XCIsXG5cdFwiY29udGFpbmVyXCI6IFwic3R5bGVfY29udGFpbmVyX18zV2pJT1wiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJzb3VyY2VSb290IjoiIn0=