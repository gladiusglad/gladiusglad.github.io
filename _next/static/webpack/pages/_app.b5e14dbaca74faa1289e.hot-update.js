webpackHotUpdate_N_E("pages/_app",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./components/blog/style.module.scss":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-3-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-3-2!(webpack)/resolve-url-loader??ref--5-oneOf-3-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-3-4!./components/blog/style.module.scss ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/css-loader/api.js */ \"./node_modules/next/dist/compiled/css-loader/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".style_jumbotron__8nqeo {\\n  padding: 3rem;\\n  background-color: #151615;\\n  margin-bottom: 2rem;\\n}\\n@media (min-width: 768px) {\\n  .style_jumbotron__8nqeo {\\n    padding: 4rem;\\n  }\\n}\\n@media (min-width: 1200px) {\\n  .style_jumbotron__8nqeo {\\n    padding: 6rem;\\n  }\\n}\\n\\n.style_container__27NWC {\\n  width: -webkit-fit-content;\\n  width: -moz-fit-content;\\n  width: fit-content;\\n}\\n\\n.style_title__3TATq {\\n  text-align: center;\\n  font-family: \\\"Montserrat\\\", \\\"PT Serif\\\", Cambria, Cochin, Georgia, Times, \\\"Times New Roman\\\", serif;\\n  font-size: 2rem;\\n  line-height: normal;\\n}\\n@media (min-width: 768px) {\\n  .style_title__3TATq {\\n    font-size: 3rem;\\n  }\\n}\\n@media (min-width: 1200px) {\\n  .style_title__3TATq {\\n    font-size: 4rem;\\n  }\\n}\\n\\n.style_date__SlnrG {\\n  text-align: right;\\n  color: #2eb185;\\n}\\n\\n.style_backLeft__UuEub {\\n  -ms-writing-mode: sideways-lr;\\n      writing-mode: sideways-lr;\\n  position: absolute;\\n  font-family: \\\"Montserrat\\\", \\\"PT Serif\\\", Cambria, Cochin, Georgia, Times, \\\"Times New Roman\\\", serif;\\n  font-size: 2rem;\\n}\\n@media (min-width: 768px) {\\n  .style_backLeft__UuEub {\\n    font-size: 3rem;\\n  }\\n}\\n@media (min-width: 1200px) {\\n  .style_backLeft__UuEub {\\n    font-size: 4rem;\\n  }\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://style.module.scss\",\"webpack://../../styles/_variables.scss\"],\"names\":[],\"mappings\":\"AAEA;EACE,aAAA;EACA,yBCCU;EDAV,mBAAA;AADF;ACsBE;EDxBF;IAMI,aAAA;EAAF;AACF;ACiBE;EDxBF;IASI,aAAA;EAEF;AACF;;AACA;EACE,0BAAA;EAAA,uBAAA;EAAA,kBAAA;AAEF;;AACA;EACE,kBAAA;EACA,gGCVW;EDWX,eAAA;EACA,mBAAA;AAEF;ACCE;EDPF;IAOI,eAAA;EAGF;AACF;ACJE;EDPF;IAUI,eAAA;EAKF;AACF;;AAFA;EACE,iBAAA;EACA,cC3BY;ADgCd;;AAFA;EACE,6BAAA;MAAA,yBAAA;EACA,kBAAA;EACA,gGC9BW;ED+BX,eAAA;AAKF;ACrBE;EDYF;IAOI,eAAA;EAMF;AACF;AC1BE;EDYF;IAUI,eAAA;EAQF;AACF\",\"sourcesContent\":[\"@use '/styles/variables' as *;\\n\\n.jumbotron {\\n  padding: 3rem;\\n  background-color: $dark-gray;\\n  margin-bottom: 2rem;\\n\\n  @include from(md) {\\n    padding: 4rem;\\n  }\\n  @include from(xl) {\\n    padding: 6rem;\\n  }\\n}\\n\\n.container {\\n  width: fit-content;\\n}\\n\\n.title {\\n  text-align: center;\\n  font-family: $black-font;\\n  font-size: 2rem;\\n  line-height: normal;\\n\\n  @include from(md) {\\n    font-size: 3rem;\\n  }\\n  @include from(xl) {\\n    font-size: 4rem;\\n  }\\n}\\n\\n.date {\\n  text-align: right;\\n  color: $dark-accent;\\n}\\n\\n.backLeft {\\n  writing-mode: sideways-lr;\\n  position: absolute;\\n  font-family: $black-font;\\n  font-size: 2rem;\\n\\n  @include from(md) {\\n    font-size: 3rem;\\n  }\\n  @include from(xl) {\\n    font-size: 4rem;\\n  }\\n}\",\"@use \\\"sass:map\\\";\\n\\n$text: #ddd;\\n$muted: #777d7a;\\n$gray: #2b2c2c;\\n$dark-gray: #151615;\\n$black: #000;\\n$accent: #4de0af;\\n$dark-accent: #2eb185;\\n$link: $dark-accent;\\n$font: 'PT Serif', Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\\n$black-font: 'Montserrat', $font;\\n\\n$sm: 576px;\\n$md: 768px;\\n$lg: 992px;\\n$xl: 1200px;\\n\\n$breakpoints: (\\n  sm: $sm,\\n  md: $md,\\n  lg: $lg,\\n  xl: $xl\\n);\\n\\n@mixin from($name) {\\n  @media (min-width: map.get($breakpoints, $name)) {\\n    @content;\\n  }\\n}\\n\\n@mixin to($name) {\\n  @media (max-width: map.get($breakpoints, $name)) {\\n    @content;\\n  }\\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"jumbotron\": \"style_jumbotron__8nqeo\",\n\t\"container\": \"style_container__27NWC\",\n\t\"title\": \"style_title__3TATq\",\n\t\"date\": \"style_date__SlnrG\",\n\t\"backLeft\": \"style_backLeft__UuEub\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ibG9nL3N0eWxlLm1vZHVsZS5zY3NzPzM3OTMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyxvSEFBeUQ7QUFDbkc7QUFDQTtBQUNBLDhCQUE4QixRQUFTLDRCQUE0QixrQkFBa0IsOEJBQThCLHdCQUF3QixHQUFHLDZCQUE2Qiw2QkFBNkIsb0JBQW9CLEtBQUssR0FBRyw4QkFBOEIsNkJBQTZCLG9CQUFvQixLQUFLLEdBQUcsNkJBQTZCLCtCQUErQiw0QkFBNEIsdUJBQXVCLEdBQUcseUJBQXlCLHVCQUF1QiwyR0FBMkcsb0JBQW9CLHdCQUF3QixHQUFHLDZCQUE2Qix5QkFBeUIsc0JBQXNCLEtBQUssR0FBRyw4QkFBOEIseUJBQXlCLHNCQUFzQixLQUFLLEdBQUcsd0JBQXdCLHNCQUFzQixtQkFBbUIsR0FBRyw0QkFBNEIsa0NBQWtDLGtDQUFrQyx1QkFBdUIsMkdBQTJHLG9CQUFvQixHQUFHLDZCQUE2Qiw0QkFBNEIsc0JBQXNCLEtBQUssR0FBRyw4QkFBOEIsNEJBQTRCLHNCQUFzQixLQUFLLEdBQUcsT0FBTywySEFBMkgsVUFBVSxXQUFXLFdBQVcsS0FBSyxNQUFNLE1BQU0sVUFBVSxLQUFLLEtBQUssTUFBTSxNQUFNLFVBQVUsS0FBSyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxVQUFVLFdBQVcsS0FBSyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssS0FBSyxLQUFLLFVBQVUsS0FBSyxNQUFNLEtBQUssV0FBVyxXQUFXLE9BQU8sS0FBSyxXQUFXLFdBQVcsV0FBVyxZQUFZLFdBQVcsS0FBSyxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssTUFBTSxLQUFLLFVBQVUsS0FBSyx1REFBdUQsZ0JBQWdCLGtCQUFrQixpQ0FBaUMsd0JBQXdCLHlCQUF5QixvQkFBb0IsS0FBSyx1QkFBdUIsb0JBQW9CLEtBQUssR0FBRyxnQkFBZ0IsdUJBQXVCLEdBQUcsWUFBWSx1QkFBdUIsNkJBQTZCLG9CQUFvQix3QkFBd0IseUJBQXlCLHNCQUFzQixLQUFLLHVCQUF1QixzQkFBc0IsS0FBSyxHQUFHLFdBQVcsc0JBQXNCLHdCQUF3QixHQUFHLGVBQWUsOEJBQThCLHVCQUF1Qiw2QkFBNkIsb0JBQW9CLHlCQUF5QixzQkFBc0IsS0FBSyx1QkFBdUIsc0JBQXNCLEtBQUssR0FBRyxxQkFBcUIsZ0JBQWdCLGtCQUFrQixpQkFBaUIsc0JBQXNCLGVBQWUsbUJBQW1CLHdCQUF3QixzQkFBc0IsK0VBQStFLG1DQUFtQyxlQUFlLGFBQWEsYUFBYSxjQUFjLHNFQUFzRSx3QkFBd0Isc0RBQXNELGVBQWUsS0FBSyxHQUFHLHNCQUFzQixzREFBc0QsZUFBZSxLQUFLLEdBQUcsbUJBQW1CO0FBQ3ZyRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPyEuL2NvbXBvbmVudHMvYmxvZy9zdHlsZS5tb2R1bGUuc2Nzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5zdHlsZV9qdW1ib3Ryb25fXzhucWVvIHtcXG4gIHBhZGRpbmc6IDNyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTUxNjE1O1xcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAuc3R5bGVfanVtYm90cm9uX184bnFlbyB7XFxuICAgIHBhZGRpbmc6IDRyZW07XFxuICB9XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcXG4gIC5zdHlsZV9qdW1ib3Ryb25fXzhucWVvIHtcXG4gICAgcGFkZGluZzogNnJlbTtcXG4gIH1cXG59XFxuXFxuLnN0eWxlX2NvbnRhaW5lcl9fMjdOV0Mge1xcbiAgd2lkdGg6IC13ZWJraXQtZml0LWNvbnRlbnQ7XFxuICB3aWR0aDogLW1vei1maXQtY29udGVudDtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG59XFxuXFxuLnN0eWxlX3RpdGxlX18zVEFUcSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LWZhbWlseTogXFxcIk1vbnRzZXJyYXRcXFwiLCBcXFwiUFQgU2VyaWZcXFwiLCBDYW1icmlhLCBDb2NoaW4sIEdlb3JnaWEsIFRpbWVzLCBcXFwiVGltZXMgTmV3IFJvbWFuXFxcIiwgc2VyaWY7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBsaW5lLWhlaWdodDogbm9ybWFsO1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gIC5zdHlsZV90aXRsZV9fM1RBVHEge1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICB9XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcXG4gIC5zdHlsZV90aXRsZV9fM1RBVHEge1xcbiAgICBmb250LXNpemU6IDRyZW07XFxuICB9XFxufVxcblxcbi5zdHlsZV9kYXRlX19TbG5yRyB7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG4gIGNvbG9yOiAjMmViMTg1O1xcbn1cXG5cXG4uc3R5bGVfYmFja0xlZnRfX1V1RXViIHtcXG4gIC1tcy13cml0aW5nLW1vZGU6IHNpZGV3YXlzLWxyO1xcbiAgICAgIHdyaXRpbmctbW9kZTogc2lkZXdheXMtbHI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBmb250LWZhbWlseTogXFxcIk1vbnRzZXJyYXRcXFwiLCBcXFwiUFQgU2VyaWZcXFwiLCBDYW1icmlhLCBDb2NoaW4sIEdlb3JnaWEsIFRpbWVzLCBcXFwiVGltZXMgTmV3IFJvbWFuXFxcIiwgc2VyaWY7XFxuICBmb250LXNpemU6IDJyZW07XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgLnN0eWxlX2JhY2tMZWZ0X19VdUV1YiB7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gIH1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xcbiAgLnN0eWxlX2JhY2tMZWZ0X19VdUV1YiB7XFxuICAgIGZvbnQtc2l6ZTogNHJlbTtcXG4gIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3N0eWxlLm1vZHVsZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi4vLi4vc3R5bGVzL192YXJpYWJsZXMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLGFBQUE7RUFDQSx5QkNDVTtFREFWLG1CQUFBO0FBREY7QUNzQkU7RUR4QkY7SUFNSSxhQUFBO0VBQUY7QUFDRjtBQ2lCRTtFRHhCRjtJQVNJLGFBQUE7RUFFRjtBQUNGOztBQUNBO0VBQ0UsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0FBRUY7O0FBQ0E7RUFDRSxrQkFBQTtFQUNBLGdHQ1ZXO0VEV1gsZUFBQTtFQUNBLG1CQUFBO0FBRUY7QUNDRTtFRFBGO0lBT0ksZUFBQTtFQUdGO0FBQ0Y7QUNKRTtFRFBGO0lBVUksZUFBQTtFQUtGO0FBQ0Y7O0FBRkE7RUFDRSxpQkFBQTtFQUNBLGNDM0JZO0FEZ0NkOztBQUZBO0VBQ0UsNkJBQUE7TUFBQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0dDOUJXO0VEK0JYLGVBQUE7QUFLRjtBQ3JCRTtFRFlGO0lBT0ksZUFBQTtFQU1GO0FBQ0Y7QUMxQkU7RURZRjtJQVVJLGVBQUE7RUFRRjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkB1c2UgJy9zdHlsZXMvdmFyaWFibGVzJyBhcyAqO1xcblxcbi5qdW1ib3Ryb24ge1xcbiAgcGFkZGluZzogM3JlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICRkYXJrLWdyYXk7XFxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xcblxcbiAgQGluY2x1ZGUgZnJvbShtZCkge1xcbiAgICBwYWRkaW5nOiA0cmVtO1xcbiAgfVxcbiAgQGluY2x1ZGUgZnJvbSh4bCkge1xcbiAgICBwYWRkaW5nOiA2cmVtO1xcbiAgfVxcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG59XFxuXFxuLnRpdGxlIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiAkYmxhY2stZm9udDtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XFxuXFxuICBAaW5jbHVkZSBmcm9tKG1kKSB7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gIH1cXG4gIEBpbmNsdWRlIGZyb20oeGwpIHtcXG4gICAgZm9udC1zaXplOiA0cmVtO1xcbiAgfVxcbn1cXG5cXG4uZGF0ZSB7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG4gIGNvbG9yOiAkZGFyay1hY2NlbnQ7XFxufVxcblxcbi5iYWNrTGVmdCB7XFxuICB3cml0aW5nLW1vZGU6IHNpZGV3YXlzLWxyO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZm9udC1mYW1pbHk6ICRibGFjay1mb250O1xcbiAgZm9udC1zaXplOiAycmVtO1xcblxcbiAgQGluY2x1ZGUgZnJvbShtZCkge1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICB9XFxuICBAaW5jbHVkZSBmcm9tKHhsKSB7XFxuICAgIGZvbnQtc2l6ZTogNHJlbTtcXG4gIH1cXG59XCIsXCJAdXNlIFxcXCJzYXNzOm1hcFxcXCI7XFxuXFxuJHRleHQ6ICNkZGQ7XFxuJG11dGVkOiAjNzc3ZDdhO1xcbiRncmF5OiAjMmIyYzJjO1xcbiRkYXJrLWdyYXk6ICMxNTE2MTU7XFxuJGJsYWNrOiAjMDAwO1xcbiRhY2NlbnQ6ICM0ZGUwYWY7XFxuJGRhcmstYWNjZW50OiAjMmViMTg1O1xcbiRsaW5rOiAkZGFyay1hY2NlbnQ7XFxuJGZvbnQ6ICdQVCBTZXJpZicsIENhbWJyaWEsIENvY2hpbiwgR2VvcmdpYSwgVGltZXMsICdUaW1lcyBOZXcgUm9tYW4nLCBzZXJpZjtcXG4kYmxhY2stZm9udDogJ01vbnRzZXJyYXQnLCAkZm9udDtcXG5cXG4kc206IDU3NnB4O1xcbiRtZDogNzY4cHg7XFxuJGxnOiA5OTJweDtcXG4keGw6IDEyMDBweDtcXG5cXG4kYnJlYWtwb2ludHM6IChcXG4gIHNtOiAkc20sXFxuICBtZDogJG1kLFxcbiAgbGc6ICRsZyxcXG4gIHhsOiAkeGxcXG4pO1xcblxcbkBtaXhpbiBmcm9tKCRuYW1lKSB7XFxuICBAbWVkaWEgKG1pbi13aWR0aDogbWFwLmdldCgkYnJlYWtwb2ludHMsICRuYW1lKSkge1xcbiAgICBAY29udGVudDtcXG4gIH1cXG59XFxuXFxuQG1peGluIHRvKCRuYW1lKSB7XFxuICBAbWVkaWEgKG1heC13aWR0aDogbWFwLmdldCgkYnJlYWtwb2ludHMsICRuYW1lKSkge1xcbiAgICBAY29udGVudDtcXG4gIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwianVtYm90cm9uXCI6IFwic3R5bGVfanVtYm90cm9uX184bnFlb1wiLFxuXHRcImNvbnRhaW5lclwiOiBcInN0eWxlX2NvbnRhaW5lcl9fMjdOV0NcIixcblx0XCJ0aXRsZVwiOiBcInN0eWxlX3RpdGxlX18zVEFUcVwiLFxuXHRcImRhdGVcIjogXCJzdHlsZV9kYXRlX19TbG5yR1wiLFxuXHRcImJhY2tMZWZ0XCI6IFwic3R5bGVfYmFja0xlZnRfX1V1RXViXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./components/blog/style.module.scss\n");

/***/ })

})