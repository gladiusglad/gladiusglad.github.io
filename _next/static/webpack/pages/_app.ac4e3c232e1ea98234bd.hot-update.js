webpackHotUpdate_N_E("pages/_app",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./components/blog/style.module.scss":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-3-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-3-2!(webpack)/resolve-url-loader??ref--5-oneOf-3-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-3-4!./components/blog/style.module.scss ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/css-loader/api.js */ \"./node_modules/next/dist/compiled/css-loader/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".style_jumbotron__8nqeo {\\n  padding: 3rem;\\n  background-color: #151615;\\n  margin-bottom: 2rem;\\n}\\n@media (min-width: 768px) {\\n  .style_jumbotron__8nqeo {\\n    padding: 4rem;\\n  }\\n}\\n@media (min-width: 1200px) {\\n  .style_jumbotron__8nqeo {\\n    padding: 6rem;\\n  }\\n}\\n\\n.style_container__27NWC {\\n  width: -webkit-fit-content;\\n  width: -moz-fit-content;\\n  width: fit-content;\\n}\\n\\n.style_title__3TATq {\\n  text-align: center;\\n  font-family: \\\"Montserrat\\\", \\\"PT Serif\\\", Cambria, Cochin, Georgia, Times, \\\"Times New Roman\\\", serif;\\n  font-size: 2rem;\\n  line-height: normal;\\n}\\n@media (min-width: 768px) {\\n  .style_title__3TATq {\\n    font-size: 3rem;\\n  }\\n}\\n@media (min-width: 1200px) {\\n  .style_title__3TATq {\\n    font-size: 4rem;\\n  }\\n}\\n\\n.style_date__SlnrG {\\n  text-align: right;\\n  color: #2eb185;\\n}\\n\\n.style_backLeft__UuEub {\\n  -ms-writing-mode: tb-lr;\\n      writing-mode: vertical-lr;\\n  position: absolute;\\n  font-family: \\\"Montserrat\\\", \\\"PT Serif\\\", Cambria, Cochin, Georgia, Times, \\\"Times New Roman\\\", serif;\\n  font-size: 2rem;\\n  transform: rotate(-180deg);\\n}\\n@media (min-width: 768px) {\\n  .style_backLeft__UuEub {\\n    font-size: 3rem;\\n  }\\n}\\n@media (min-width: 1200px) {\\n  .style_backLeft__UuEub {\\n    font-size: 4rem;\\n  }\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://style.module.scss\",\"webpack://../../styles/_variables.scss\"],\"names\":[],\"mappings\":\"AAEA;EACE,aAAA;EACA,yBCCU;EDAV,mBAAA;AADF;ACsBE;EDxBF;IAMI,aAAA;EAAF;AACF;ACiBE;EDxBF;IASI,aAAA;EAEF;AACF;;AACA;EACE,0BAAA;EAAA,uBAAA;EAAA,kBAAA;AAEF;;AACA;EACE,kBAAA;EACA,gGCVW;EDWX,eAAA;EACA,mBAAA;AAEF;ACCE;EDPF;IAOI,eAAA;EAGF;AACF;ACJE;EDPF;IAUI,eAAA;EAKF;AACF;;AAFA;EACE,iBAAA;EACA,cC3BY;ADgCd;;AAFA;EACE,uBAAA;MAAA,yBAAA;EACA,kBAAA;EACA,gGC9BW;ED+BX,eAAA;EACA,0BAAA;AAKF;ACtBE;EDYF;IAQI,eAAA;EAMF;AACF;AC3BE;EDYF;IAWI,eAAA;EAQF;AACF\",\"sourcesContent\":[\"@use '/styles/variables' as *;\\n\\n.jumbotron {\\n  padding: 3rem;\\n  background-color: $dark-gray;\\n  margin-bottom: 2rem;\\n\\n  @include from(md) {\\n    padding: 4rem;\\n  }\\n  @include from(xl) {\\n    padding: 6rem;\\n  }\\n}\\n\\n.container {\\n  width: fit-content;\\n}\\n\\n.title {\\n  text-align: center;\\n  font-family: $black-font;\\n  font-size: 2rem;\\n  line-height: normal;\\n\\n  @include from(md) {\\n    font-size: 3rem;\\n  }\\n  @include from(xl) {\\n    font-size: 4rem;\\n  }\\n}\\n\\n.date {\\n  text-align: right;\\n  color: $dark-accent;\\n}\\n\\n.backLeft {\\n  writing-mode: vertical-lr;\\n  position: absolute;\\n  font-family: $black-font;\\n  font-size: 2rem;\\n  transform: rotate(-180deg);\\n\\n  @include from(md) {\\n    font-size: 3rem;\\n  }\\n  @include from(xl) {\\n    font-size: 4rem;\\n  }\\n}\",\"@use \\\"sass:map\\\";\\n\\n$text: #ddd;\\n$muted: #777d7a;\\n$gray: #2b2c2c;\\n$dark-gray: #151615;\\n$black: #000;\\n$accent: #4de0af;\\n$dark-accent: #2eb185;\\n$link: $dark-accent;\\n$font: 'PT Serif', Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\\n$black-font: 'Montserrat', $font;\\n\\n$sm: 576px;\\n$md: 768px;\\n$lg: 992px;\\n$xl: 1200px;\\n\\n$breakpoints: (\\n  sm: $sm,\\n  md: $md,\\n  lg: $lg,\\n  xl: $xl\\n);\\n\\n@mixin from($name) {\\n  @media (min-width: map.get($breakpoints, $name)) {\\n    @content;\\n  }\\n}\\n\\n@mixin to($name) {\\n  @media (max-width: map.get($breakpoints, $name)) {\\n    @content;\\n  }\\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"jumbotron\": \"style_jumbotron__8nqeo\",\n\t\"container\": \"style_container__27NWC\",\n\t\"title\": \"style_title__3TATq\",\n\t\"date\": \"style_date__SlnrG\",\n\t\"backLeft\": \"style_backLeft__UuEub\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ibG9nL3N0eWxlLm1vZHVsZS5zY3NzPzM3OTMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyxvSEFBeUQ7QUFDbkc7QUFDQTtBQUNBLDhCQUE4QixRQUFTLDRCQUE0QixrQkFBa0IsOEJBQThCLHdCQUF3QixHQUFHLDZCQUE2Qiw2QkFBNkIsb0JBQW9CLEtBQUssR0FBRyw4QkFBOEIsNkJBQTZCLG9CQUFvQixLQUFLLEdBQUcsNkJBQTZCLCtCQUErQiw0QkFBNEIsdUJBQXVCLEdBQUcseUJBQXlCLHVCQUF1QiwyR0FBMkcsb0JBQW9CLHdCQUF3QixHQUFHLDZCQUE2Qix5QkFBeUIsc0JBQXNCLEtBQUssR0FBRyw4QkFBOEIseUJBQXlCLHNCQUFzQixLQUFLLEdBQUcsd0JBQXdCLHNCQUFzQixtQkFBbUIsR0FBRyw0QkFBNEIsNEJBQTRCLGtDQUFrQyx1QkFBdUIsMkdBQTJHLG9CQUFvQiwrQkFBK0IsR0FBRyw2QkFBNkIsNEJBQTRCLHNCQUFzQixLQUFLLEdBQUcsOEJBQThCLDRCQUE0QixzQkFBc0IsS0FBSyxHQUFHLE9BQU8sMkhBQTJILFVBQVUsV0FBVyxXQUFXLEtBQUssTUFBTSxNQUFNLFVBQVUsS0FBSyxLQUFLLE1BQU0sTUFBTSxVQUFVLEtBQUssTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsVUFBVSxXQUFXLEtBQUssS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLEtBQUssS0FBSyxVQUFVLEtBQUssTUFBTSxLQUFLLFdBQVcsV0FBVyxPQUFPLEtBQUssV0FBVyxXQUFXLFdBQVcsWUFBWSxXQUFXLFdBQVcsS0FBSyxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssTUFBTSxLQUFLLFVBQVUsS0FBSyx1REFBdUQsZ0JBQWdCLGtCQUFrQixpQ0FBaUMsd0JBQXdCLHlCQUF5QixvQkFBb0IsS0FBSyx1QkFBdUIsb0JBQW9CLEtBQUssR0FBRyxnQkFBZ0IsdUJBQXVCLEdBQUcsWUFBWSx1QkFBdUIsNkJBQTZCLG9CQUFvQix3QkFBd0IseUJBQXlCLHNCQUFzQixLQUFLLHVCQUF1QixzQkFBc0IsS0FBSyxHQUFHLFdBQVcsc0JBQXNCLHdCQUF3QixHQUFHLGVBQWUsOEJBQThCLHVCQUF1Qiw2QkFBNkIsb0JBQW9CLCtCQUErQix5QkFBeUIsc0JBQXNCLEtBQUssdUJBQXVCLHNCQUFzQixLQUFLLEdBQUcscUJBQXFCLGdCQUFnQixrQkFBa0IsaUJBQWlCLHNCQUFzQixlQUFlLG1CQUFtQix3QkFBd0Isc0JBQXNCLCtFQUErRSxtQ0FBbUMsZUFBZSxhQUFhLGFBQWEsY0FBYyxzRUFBc0Usd0JBQXdCLHNEQUFzRCxlQUFlLEtBQUssR0FBRyxzQkFBc0Isc0RBQXNELGVBQWUsS0FBSyxHQUFHLG1CQUFtQjtBQUMxdkc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Nhc3MtbG9hZGVyL2Nqcy5qcz8hLi9jb21wb25lbnRzL2Jsb2cvc3R5bGUubW9kdWxlLnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuc3R5bGVfanVtYm90cm9uX184bnFlbyB7XFxuICBwYWRkaW5nOiAzcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE1MTYxNTtcXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgLnN0eWxlX2p1bWJvdHJvbl9fOG5xZW8ge1xcbiAgICBwYWRkaW5nOiA0cmVtO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XFxuICAuc3R5bGVfanVtYm90cm9uX184bnFlbyB7XFxuICAgIHBhZGRpbmc6IDZyZW07XFxuICB9XFxufVxcblxcbi5zdHlsZV9jb250YWluZXJfXzI3TldDIHtcXG4gIHdpZHRoOiAtd2Via2l0LWZpdC1jb250ZW50O1xcbiAgd2lkdGg6IC1tb3otZml0LWNvbnRlbnQ7XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxufVxcblxcbi5zdHlsZV90aXRsZV9fM1RBVHEge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNb250c2VycmF0XFxcIiwgXFxcIlBUIFNlcmlmXFxcIiwgQ2FtYnJpYSwgQ29jaGluLCBHZW9yZ2lhLCBUaW1lcywgXFxcIlRpbWVzIE5ldyBSb21hblxcXCIsIHNlcmlmO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAuc3R5bGVfdGl0bGVfXzNUQVRxIHtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XFxuICAuc3R5bGVfdGl0bGVfXzNUQVRxIHtcXG4gICAgZm9udC1zaXplOiA0cmVtO1xcbiAgfVxcbn1cXG5cXG4uc3R5bGVfZGF0ZV9fU2xuckcge1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICBjb2xvcjogIzJlYjE4NTtcXG59XFxuXFxuLnN0eWxlX2JhY2tMZWZ0X19VdUV1YiB7XFxuICAtbXMtd3JpdGluZy1tb2RlOiB0Yi1scjtcXG4gICAgICB3cml0aW5nLW1vZGU6IHZlcnRpY2FsLWxyO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNb250c2VycmF0XFxcIiwgXFxcIlBUIFNlcmlmXFxcIiwgQ2FtYnJpYSwgQ29jaGluLCBHZW9yZ2lhLCBUaW1lcywgXFxcIlRpbWVzIE5ldyBSb21hblxcXCIsIHNlcmlmO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTE4MGRlZyk7XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgLnN0eWxlX2JhY2tMZWZ0X19VdUV1YiB7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gIH1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xcbiAgLnN0eWxlX2JhY2tMZWZ0X19VdUV1YiB7XFxuICAgIGZvbnQtc2l6ZTogNHJlbTtcXG4gIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3N0eWxlLm1vZHVsZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi4vLi4vc3R5bGVzL192YXJpYWJsZXMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLGFBQUE7RUFDQSx5QkNDVTtFREFWLG1CQUFBO0FBREY7QUNzQkU7RUR4QkY7SUFNSSxhQUFBO0VBQUY7QUFDRjtBQ2lCRTtFRHhCRjtJQVNJLGFBQUE7RUFFRjtBQUNGOztBQUNBO0VBQ0UsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0FBRUY7O0FBQ0E7RUFDRSxrQkFBQTtFQUNBLGdHQ1ZXO0VEV1gsZUFBQTtFQUNBLG1CQUFBO0FBRUY7QUNDRTtFRFBGO0lBT0ksZUFBQTtFQUdGO0FBQ0Y7QUNKRTtFRFBGO0lBVUksZUFBQTtFQUtGO0FBQ0Y7O0FBRkE7RUFDRSxpQkFBQTtFQUNBLGNDM0JZO0FEZ0NkOztBQUZBO0VBQ0UsdUJBQUE7TUFBQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0dDOUJXO0VEK0JYLGVBQUE7RUFDQSwwQkFBQTtBQUtGO0FDdEJFO0VEWUY7SUFRSSxlQUFBO0VBTUY7QUFDRjtBQzNCRTtFRFlGO0lBV0ksZUFBQTtFQVFGO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQHVzZSAnL3N0eWxlcy92YXJpYWJsZXMnIGFzICo7XFxuXFxuLmp1bWJvdHJvbiB7XFxuICBwYWRkaW5nOiAzcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJGRhcmstZ3JheTtcXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XFxuXFxuICBAaW5jbHVkZSBmcm9tKG1kKSB7XFxuICAgIHBhZGRpbmc6IDRyZW07XFxuICB9XFxuICBAaW5jbHVkZSBmcm9tKHhsKSB7XFxuICAgIHBhZGRpbmc6IDZyZW07XFxuICB9XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbn1cXG5cXG4udGl0bGUge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1mYW1pbHk6ICRibGFjay1mb250O1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcXG5cXG4gIEBpbmNsdWRlIGZyb20obWQpIHtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgfVxcbiAgQGluY2x1ZGUgZnJvbSh4bCkge1xcbiAgICBmb250LXNpemU6IDRyZW07XFxuICB9XFxufVxcblxcbi5kYXRlIHtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgY29sb3I6ICRkYXJrLWFjY2VudDtcXG59XFxuXFxuLmJhY2tMZWZ0IHtcXG4gIHdyaXRpbmctbW9kZTogdmVydGljYWwtbHI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBmb250LWZhbWlseTogJGJsYWNrLWZvbnQ7XFxuICBmb250LXNpemU6IDJyZW07XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTgwZGVnKTtcXG5cXG4gIEBpbmNsdWRlIGZyb20obWQpIHtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgfVxcbiAgQGluY2x1ZGUgZnJvbSh4bCkge1xcbiAgICBmb250LXNpemU6IDRyZW07XFxuICB9XFxufVwiLFwiQHVzZSBcXFwic2FzczptYXBcXFwiO1xcblxcbiR0ZXh0OiAjZGRkO1xcbiRtdXRlZDogIzc3N2Q3YTtcXG4kZ3JheTogIzJiMmMyYztcXG4kZGFyay1ncmF5OiAjMTUxNjE1O1xcbiRibGFjazogIzAwMDtcXG4kYWNjZW50OiAjNGRlMGFmO1xcbiRkYXJrLWFjY2VudDogIzJlYjE4NTtcXG4kbGluazogJGRhcmstYWNjZW50O1xcbiRmb250OiAnUFQgU2VyaWYnLCBDYW1icmlhLCBDb2NoaW4sIEdlb3JnaWEsIFRpbWVzLCAnVGltZXMgTmV3IFJvbWFuJywgc2VyaWY7XFxuJGJsYWNrLWZvbnQ6ICdNb250c2VycmF0JywgJGZvbnQ7XFxuXFxuJHNtOiA1NzZweDtcXG4kbWQ6IDc2OHB4O1xcbiRsZzogOTkycHg7XFxuJHhsOiAxMjAwcHg7XFxuXFxuJGJyZWFrcG9pbnRzOiAoXFxuICBzbTogJHNtLFxcbiAgbWQ6ICRtZCxcXG4gIGxnOiAkbGcsXFxuICB4bDogJHhsXFxuKTtcXG5cXG5AbWl4aW4gZnJvbSgkbmFtZSkge1xcbiAgQG1lZGlhIChtaW4td2lkdGg6IG1hcC5nZXQoJGJyZWFrcG9pbnRzLCAkbmFtZSkpIHtcXG4gICAgQGNvbnRlbnQ7XFxuICB9XFxufVxcblxcbkBtaXhpbiB0bygkbmFtZSkge1xcbiAgQG1lZGlhIChtYXgtd2lkdGg6IG1hcC5nZXQoJGJyZWFrcG9pbnRzLCAkbmFtZSkpIHtcXG4gICAgQGNvbnRlbnQ7XFxuICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImp1bWJvdHJvblwiOiBcInN0eWxlX2p1bWJvdHJvbl9fOG5xZW9cIixcblx0XCJjb250YWluZXJcIjogXCJzdHlsZV9jb250YWluZXJfXzI3TldDXCIsXG5cdFwidGl0bGVcIjogXCJzdHlsZV90aXRsZV9fM1RBVHFcIixcblx0XCJkYXRlXCI6IFwic3R5bGVfZGF0ZV9fU2xuckdcIixcblx0XCJiYWNrTGVmdFwiOiBcInN0eWxlX2JhY2tMZWZ0X19VdUV1YlwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./components/blog/style.module.scss\n");

/***/ })

})