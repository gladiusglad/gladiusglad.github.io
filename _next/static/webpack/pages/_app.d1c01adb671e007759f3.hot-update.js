webpackHotUpdate_N_E("pages/_app",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./components/blog/style.module.scss":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-3-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-3-2!(webpack)/resolve-url-loader??ref--5-oneOf-3-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-3-4!./components/blog/style.module.scss ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/css-loader/api.js */ \"./node_modules/next/dist/compiled/css-loader/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".style_jumbotron__8nqeo {\\n  padding: 3rem;\\n  background-color: #151615;\\n  margin-bottom: 2rem;\\n  position: relative;\\n}\\n@media (min-width: 768px) {\\n  .style_jumbotron__8nqeo {\\n    padding: 4rem;\\n  }\\n}\\n@media (min-width: 1200px) {\\n  .style_jumbotron__8nqeo {\\n    padding: 6rem;\\n  }\\n}\\n\\n.style_container__27NWC {\\n  width: -webkit-fit-content;\\n  width: -moz-fit-content;\\n  width: fit-content;\\n}\\n\\n.style_title__3TATq {\\n  text-align: center;\\n  font-family: \\\"Montserrat\\\", \\\"PT Serif\\\", Cambria, Cochin, Georgia, Times, \\\"Times New Roman\\\", serif;\\n  font-size: 2rem;\\n  line-height: normal;\\n}\\n@media (min-width: 768px) {\\n  .style_title__3TATq {\\n    font-size: 3rem;\\n  }\\n}\\n@media (min-width: 1200px) {\\n  .style_title__3TATq {\\n    font-size: 4rem;\\n  }\\n}\\n\\n.style_date__SlnrG {\\n  text-align: right;\\n  color: #2eb185;\\n}\\n\\n.style_backLeft__UuEub {\\n  -ms-writing-mode: tb-lr;\\n      writing-mode: vertical-lr;\\n  position: absolute;\\n  color: #000;\\n  font-weight: 700;\\n  font-family: \\\"Montserrat\\\", \\\"PT Serif\\\", Cambria, Cochin, Georgia, Times, \\\"Times New Roman\\\", serif;\\n  font-size: 4rem;\\n  bottom: 0;\\n  transform: rotate(-180deg);\\n}\\n@media (min-width: 768px) {\\n  .style_backLeft__UuEub {\\n    font-size: 6rem;\\n  }\\n}\\n@media (min-width: 1200px) {\\n  .style_backLeft__UuEub {\\n    font-size: 10rem;\\n  }\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://style.module.scss\",\"webpack://../../styles/_variables.scss\"],\"names\":[],\"mappings\":\"AAEA;EACE,aAAA;EACA,yBCCU;EDAV,mBAAA;EACA,kBAAA;AADF;ACqBE;EDxBF;IAOI,aAAA;EAAF;AACF;ACgBE;EDxBF;IAUI,aAAA;EAEF;AACF;;AACA;EACE,0BAAA;EAAA,uBAAA;EAAA,kBAAA;AAEF;;AACA;EACE,kBAAA;EACA,gGCXW;EDYX,eAAA;EACA,mBAAA;AAEF;ACAE;EDNF;IAOI,eAAA;EAGF;AACF;ACLE;EDNF;IAUI,eAAA;EAKF;AACF;;AAFA;EACE,iBAAA;EACA,cC5BY;ADiCd;;AAFA;EACE,uBAAA;MAAA,yBAAA;EACA,kBAAA;EACA,WCpCM;EDqCN,gBAAA;EACA,gGCjCW;EDkCX,eAAA;EACA,SAAA;EACA,0BAAA;AAKF;AC1BE;EDaF;IAWI,eAAA;EAMF;AACF;AC/BE;EDaF;IAcI,gBAAA;EAQF;AACF\",\"sourcesContent\":[\"@use '/styles/variables' as *;\\n\\n.jumbotron {\\n  padding: 3rem;\\n  background-color: $dark-gray;\\n  margin-bottom: 2rem;\\n  position: relative;\\n\\n  @include from(md) {\\n    padding: 4rem;\\n  }\\n  @include from(xl) {\\n    padding: 6rem;\\n  }\\n}\\n\\n.container {\\n  width: fit-content;\\n}\\n\\n.title {\\n  text-align: center;\\n  font-family: $black-font;\\n  font-size: 2rem;\\n  line-height: normal;\\n\\n  @include from(md) {\\n    font-size: 3rem;\\n  }\\n  @include from(xl) {\\n    font-size: 4rem;\\n  }\\n}\\n\\n.date {\\n  text-align: right;\\n  color: $dark-accent;\\n}\\n\\n.backLeft {\\n  writing-mode: vertical-lr;\\n  position: absolute;\\n  color: $black;\\n  font-weight: 700;\\n  font-family: $black-font;\\n  font-size: 4rem;\\n  bottom: 0;\\n  transform: rotate(-180deg);\\n\\n  @include from(md) {\\n    font-size: 6rem;\\n  }\\n  @include from(xl) {\\n    font-size: 10rem;\\n  }\\n}\",\"@use \\\"sass:map\\\";\\n\\n$text: #ddd;\\n$muted: #777d7a;\\n$gray: #2b2c2c;\\n$dark-gray: #151615;\\n$black: #000;\\n$accent: #4de0af;\\n$dark-accent: #2eb185;\\n$link: $dark-accent;\\n$font: 'PT Serif', Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\\n$black-font: 'Montserrat', $font;\\n\\n$sm: 576px;\\n$md: 768px;\\n$lg: 992px;\\n$xl: 1200px;\\n\\n$breakpoints: (\\n  sm: $sm,\\n  md: $md,\\n  lg: $lg,\\n  xl: $xl\\n);\\n\\n@mixin from($name) {\\n  @media (min-width: map.get($breakpoints, $name)) {\\n    @content;\\n  }\\n}\\n\\n@mixin to($name) {\\n  @media (max-width: map.get($breakpoints, $name)) {\\n    @content;\\n  }\\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"jumbotron\": \"style_jumbotron__8nqeo\",\n\t\"container\": \"style_container__27NWC\",\n\t\"title\": \"style_title__3TATq\",\n\t\"date\": \"style_date__SlnrG\",\n\t\"backLeft\": \"style_backLeft__UuEub\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ibG9nL3N0eWxlLm1vZHVsZS5zY3NzPzM3OTMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyxvSEFBeUQ7QUFDbkc7QUFDQTtBQUNBLDhCQUE4QixRQUFTLDRCQUE0QixrQkFBa0IsOEJBQThCLHdCQUF3Qix1QkFBdUIsR0FBRyw2QkFBNkIsNkJBQTZCLG9CQUFvQixLQUFLLEdBQUcsOEJBQThCLDZCQUE2QixvQkFBb0IsS0FBSyxHQUFHLDZCQUE2QiwrQkFBK0IsNEJBQTRCLHVCQUF1QixHQUFHLHlCQUF5Qix1QkFBdUIsMkdBQTJHLG9CQUFvQix3QkFBd0IsR0FBRyw2QkFBNkIseUJBQXlCLHNCQUFzQixLQUFLLEdBQUcsOEJBQThCLHlCQUF5QixzQkFBc0IsS0FBSyxHQUFHLHdCQUF3QixzQkFBc0IsbUJBQW1CLEdBQUcsNEJBQTRCLDRCQUE0QixrQ0FBa0MsdUJBQXVCLGdCQUFnQixxQkFBcUIsMkdBQTJHLG9CQUFvQixjQUFjLCtCQUErQixHQUFHLDZCQUE2Qiw0QkFBNEIsc0JBQXNCLEtBQUssR0FBRyw4QkFBOEIsNEJBQTRCLHVCQUF1QixLQUFLLEdBQUcsT0FBTywySEFBMkgsVUFBVSxXQUFXLFdBQVcsV0FBVyxLQUFLLE1BQU0sTUFBTSxVQUFVLEtBQUssS0FBSyxNQUFNLE1BQU0sVUFBVSxLQUFLLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFVBQVUsV0FBVyxLQUFLLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxLQUFLLEtBQUssVUFBVSxLQUFLLE1BQU0sS0FBSyxXQUFXLFdBQVcsT0FBTyxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsWUFBWSxZQUFZLFdBQVcsVUFBVSxXQUFXLEtBQUssTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLE1BQU0sS0FBSyxXQUFXLEtBQUssdURBQXVELGdCQUFnQixrQkFBa0IsaUNBQWlDLHdCQUF3Qix1QkFBdUIseUJBQXlCLG9CQUFvQixLQUFLLHVCQUF1QixvQkFBb0IsS0FBSyxHQUFHLGdCQUFnQix1QkFBdUIsR0FBRyxZQUFZLHVCQUF1Qiw2QkFBNkIsb0JBQW9CLHdCQUF3Qix5QkFBeUIsc0JBQXNCLEtBQUssdUJBQXVCLHNCQUFzQixLQUFLLEdBQUcsV0FBVyxzQkFBc0Isd0JBQXdCLEdBQUcsZUFBZSw4QkFBOEIsdUJBQXVCLGtCQUFrQixxQkFBcUIsNkJBQTZCLG9CQUFvQixjQUFjLCtCQUErQix5QkFBeUIsc0JBQXNCLEtBQUssdUJBQXVCLHVCQUF1QixLQUFLLEdBQUcscUJBQXFCLGdCQUFnQixrQkFBa0IsaUJBQWlCLHNCQUFzQixlQUFlLG1CQUFtQix3QkFBd0Isc0JBQXNCLCtFQUErRSxtQ0FBbUMsZUFBZSxhQUFhLGFBQWEsY0FBYyxzRUFBc0Usd0JBQXdCLHNEQUFzRCxlQUFlLEtBQUssR0FBRyxzQkFBc0Isc0RBQXNELGVBQWUsS0FBSyxHQUFHLG1CQUFtQjtBQUMvN0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Nhc3MtbG9hZGVyL2Nqcy5qcz8hLi9jb21wb25lbnRzL2Jsb2cvc3R5bGUubW9kdWxlLnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuc3R5bGVfanVtYm90cm9uX184bnFlbyB7XFxuICBwYWRkaW5nOiAzcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE1MTYxNTtcXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgLnN0eWxlX2p1bWJvdHJvbl9fOG5xZW8ge1xcbiAgICBwYWRkaW5nOiA0cmVtO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XFxuICAuc3R5bGVfanVtYm90cm9uX184bnFlbyB7XFxuICAgIHBhZGRpbmc6IDZyZW07XFxuICB9XFxufVxcblxcbi5zdHlsZV9jb250YWluZXJfXzI3TldDIHtcXG4gIHdpZHRoOiAtd2Via2l0LWZpdC1jb250ZW50O1xcbiAgd2lkdGg6IC1tb3otZml0LWNvbnRlbnQ7XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxufVxcblxcbi5zdHlsZV90aXRsZV9fM1RBVHEge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNb250c2VycmF0XFxcIiwgXFxcIlBUIFNlcmlmXFxcIiwgQ2FtYnJpYSwgQ29jaGluLCBHZW9yZ2lhLCBUaW1lcywgXFxcIlRpbWVzIE5ldyBSb21hblxcXCIsIHNlcmlmO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAuc3R5bGVfdGl0bGVfXzNUQVRxIHtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XFxuICAuc3R5bGVfdGl0bGVfXzNUQVRxIHtcXG4gICAgZm9udC1zaXplOiA0cmVtO1xcbiAgfVxcbn1cXG5cXG4uc3R5bGVfZGF0ZV9fU2xuckcge1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICBjb2xvcjogIzJlYjE4NTtcXG59XFxuXFxuLnN0eWxlX2JhY2tMZWZ0X19VdUV1YiB7XFxuICAtbXMtd3JpdGluZy1tb2RlOiB0Yi1scjtcXG4gICAgICB3cml0aW5nLW1vZGU6IHZlcnRpY2FsLWxyO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY29sb3I6ICMwMDA7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNb250c2VycmF0XFxcIiwgXFxcIlBUIFNlcmlmXFxcIiwgQ2FtYnJpYSwgQ29jaGluLCBHZW9yZ2lhLCBUaW1lcywgXFxcIlRpbWVzIE5ldyBSb21hblxcXCIsIHNlcmlmO1xcbiAgZm9udC1zaXplOiA0cmVtO1xcbiAgYm90dG9tOiAwO1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTE4MGRlZyk7XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgLnN0eWxlX2JhY2tMZWZ0X19VdUV1YiB7XFxuICAgIGZvbnQtc2l6ZTogNnJlbTtcXG4gIH1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xcbiAgLnN0eWxlX2JhY2tMZWZ0X19VdUV1YiB7XFxuICAgIGZvbnQtc2l6ZTogMTByZW07XFxuICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zdHlsZS5tb2R1bGUuc2Nzc1wiLFwid2VicGFjazovLy4uLy4uL3N0eWxlcy9fdmFyaWFibGVzLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxhQUFBO0VBQ0EseUJDQ1U7RURBVixtQkFBQTtFQUNBLGtCQUFBO0FBREY7QUNxQkU7RUR4QkY7SUFPSSxhQUFBO0VBQUY7QUFDRjtBQ2dCRTtFRHhCRjtJQVVJLGFBQUE7RUFFRjtBQUNGOztBQUNBO0VBQ0UsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0FBRUY7O0FBQ0E7RUFDRSxrQkFBQTtFQUNBLGdHQ1hXO0VEWVgsZUFBQTtFQUNBLG1CQUFBO0FBRUY7QUNBRTtFRE5GO0lBT0ksZUFBQTtFQUdGO0FBQ0Y7QUNMRTtFRE5GO0lBVUksZUFBQTtFQUtGO0FBQ0Y7O0FBRkE7RUFDRSxpQkFBQTtFQUNBLGNDNUJZO0FEaUNkOztBQUZBO0VBQ0UsdUJBQUE7TUFBQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0NwQ007RURxQ04sZ0JBQUE7RUFDQSxnR0NqQ1c7RURrQ1gsZUFBQTtFQUNBLFNBQUE7RUFDQSwwQkFBQTtBQUtGO0FDMUJFO0VEYUY7SUFXSSxlQUFBO0VBTUY7QUFDRjtBQy9CRTtFRGFGO0lBY0ksZ0JBQUE7RUFRRjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkB1c2UgJy9zdHlsZXMvdmFyaWFibGVzJyBhcyAqO1xcblxcbi5qdW1ib3Ryb24ge1xcbiAgcGFkZGluZzogM3JlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICRkYXJrLWdyYXk7XFxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcblxcbiAgQGluY2x1ZGUgZnJvbShtZCkge1xcbiAgICBwYWRkaW5nOiA0cmVtO1xcbiAgfVxcbiAgQGluY2x1ZGUgZnJvbSh4bCkge1xcbiAgICBwYWRkaW5nOiA2cmVtO1xcbiAgfVxcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG59XFxuXFxuLnRpdGxlIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiAkYmxhY2stZm9udDtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XFxuXFxuICBAaW5jbHVkZSBmcm9tKG1kKSB7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gIH1cXG4gIEBpbmNsdWRlIGZyb20oeGwpIHtcXG4gICAgZm9udC1zaXplOiA0cmVtO1xcbiAgfVxcbn1cXG5cXG4uZGF0ZSB7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG4gIGNvbG9yOiAkZGFyay1hY2NlbnQ7XFxufVxcblxcbi5iYWNrTGVmdCB7XFxuICB3cml0aW5nLW1vZGU6IHZlcnRpY2FsLWxyO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY29sb3I6ICRibGFjaztcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBmb250LWZhbWlseTogJGJsYWNrLWZvbnQ7XFxuICBmb250LXNpemU6IDRyZW07XFxuICBib3R0b206IDA7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTgwZGVnKTtcXG5cXG4gIEBpbmNsdWRlIGZyb20obWQpIHtcXG4gICAgZm9udC1zaXplOiA2cmVtO1xcbiAgfVxcbiAgQGluY2x1ZGUgZnJvbSh4bCkge1xcbiAgICBmb250LXNpemU6IDEwcmVtO1xcbiAgfVxcbn1cIixcIkB1c2UgXFxcInNhc3M6bWFwXFxcIjtcXG5cXG4kdGV4dDogI2RkZDtcXG4kbXV0ZWQ6ICM3NzdkN2E7XFxuJGdyYXk6ICMyYjJjMmM7XFxuJGRhcmstZ3JheTogIzE1MTYxNTtcXG4kYmxhY2s6ICMwMDA7XFxuJGFjY2VudDogIzRkZTBhZjtcXG4kZGFyay1hY2NlbnQ6ICMyZWIxODU7XFxuJGxpbms6ICRkYXJrLWFjY2VudDtcXG4kZm9udDogJ1BUIFNlcmlmJywgQ2FtYnJpYSwgQ29jaGluLCBHZW9yZ2lhLCBUaW1lcywgJ1RpbWVzIE5ldyBSb21hbicsIHNlcmlmO1xcbiRibGFjay1mb250OiAnTW9udHNlcnJhdCcsICRmb250O1xcblxcbiRzbTogNTc2cHg7XFxuJG1kOiA3NjhweDtcXG4kbGc6IDk5MnB4O1xcbiR4bDogMTIwMHB4O1xcblxcbiRicmVha3BvaW50czogKFxcbiAgc206ICRzbSxcXG4gIG1kOiAkbWQsXFxuICBsZzogJGxnLFxcbiAgeGw6ICR4bFxcbik7XFxuXFxuQG1peGluIGZyb20oJG5hbWUpIHtcXG4gIEBtZWRpYSAobWluLXdpZHRoOiBtYXAuZ2V0KCRicmVha3BvaW50cywgJG5hbWUpKSB7XFxuICAgIEBjb250ZW50O1xcbiAgfVxcbn1cXG5cXG5AbWl4aW4gdG8oJG5hbWUpIHtcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiBtYXAuZ2V0KCRicmVha3BvaW50cywgJG5hbWUpKSB7XFxuICAgIEBjb250ZW50O1xcbiAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJqdW1ib3Ryb25cIjogXCJzdHlsZV9qdW1ib3Ryb25fXzhucWVvXCIsXG5cdFwiY29udGFpbmVyXCI6IFwic3R5bGVfY29udGFpbmVyX18yN05XQ1wiLFxuXHRcInRpdGxlXCI6IFwic3R5bGVfdGl0bGVfXzNUQVRxXCIsXG5cdFwiZGF0ZVwiOiBcInN0eWxlX2RhdGVfX1NsbnJHXCIsXG5cdFwiYmFja0xlZnRcIjogXCJzdHlsZV9iYWNrTGVmdF9fVXVFdWJcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./components/blog/style.module.scss\n");

/***/ })

})