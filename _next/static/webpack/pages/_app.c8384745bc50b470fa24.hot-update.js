webpackHotUpdate_N_E("pages/_app",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./components/blog/style.module.scss":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-3-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-3-2!(webpack)/resolve-url-loader??ref--5-oneOf-3-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-3-4!./components/blog/style.module.scss ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/css-loader/api.js */ \"./node_modules/next/dist/compiled/css-loader/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".style_jumbotron__8nqeo {\\n  padding: 3rem;\\n  background-color: #151615;\\n  margin-bottom: 2rem;\\n  position: relative;\\n  overflow: hidden;\\n}\\n@media (min-width: 768px) {\\n  .style_jumbotron__8nqeo {\\n    padding: 4rem;\\n  }\\n}\\n@media (min-width: 1200px) {\\n  .style_jumbotron__8nqeo {\\n    padding: 6rem;\\n  }\\n}\\n\\n.style_container__27NWC {\\n  width: -webkit-fit-content;\\n  width: -moz-fit-content;\\n  width: fit-content;\\n  position: relative;\\n  z-index: 2;\\n}\\n\\n.style_title__3TATq {\\n  text-align: center;\\n  font-family: \\\"Montserrat\\\", \\\"PT Serif\\\", Cambria, Cochin, Georgia, Times, \\\"Times New Roman\\\", serif;\\n  font-size: 2rem;\\n  line-height: normal;\\n}\\n@media (min-width: 768px) {\\n  .style_title__3TATq {\\n    font-size: 3rem;\\n  }\\n}\\n@media (min-width: 1200px) {\\n  .style_title__3TATq {\\n    font-size: 4rem;\\n  }\\n}\\n\\n.style_date__SlnrG {\\n  text-align: right;\\n  color: #2eb185;\\n}\\n\\n.style_backLeft__UuEub {\\n  -ms-writing-mode: tb-lr;\\n      writing-mode: vertical-lr;\\n  position: absolute;\\n  color: #000;\\n  font-family: \\\"Montserrat\\\", \\\"PT Serif\\\", Cambria, Cochin, Georgia, Times, \\\"Times New Roman\\\", serif;\\n  font-size: 6.5rem;\\n  bottom: -0.1em;\\n  left: 0;\\n  -webkit-user-select: none;\\n     -moz-user-select: none;\\n      -ms-user-select: none;\\n          user-select: none;\\n  transform: rotate(-180deg);\\n  animation: style_backTitle__5N15t 2s;\\n}\\n.style_backLeft__UuEub .style_bold__2sSHX {\\n  font-weight: 700;\\n}\\n@media (min-width: 768px) {\\n  .style_backLeft__UuEub {\\n    font-size: 9rem;\\n  }\\n}\\n@media (min-width: 1200px) {\\n  .style_backLeft__UuEub {\\n    font-size: 10rem;\\n  }\\n}\\n\\n@keyframes style_backTitle__5N15t {\\n  from {\\n    bottom: -5em;\\n    letter-spacing: 0.5em;\\n  }\\n  to {\\n    bottom: -0.1em;\\n    letter-spacing: normal;\\n  }\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://style.module.scss\",\"webpack://../../styles/_variables.scss\"],\"names\":[],\"mappings\":\"AAEA;EACE,aAAA;EACA,yBCCU;EDAV,mBAAA;EACA,kBAAA;EACA,gBAAA;AADF;ACoBE;EDxBF;IAQI,aAAA;EAAF;AACF;ACeE;EDxBF;IAWI,aAAA;EAEF;AACF;;AACA;EACE,0BAAA;EAAA,uBAAA;EAAA,kBAAA;EACA,kBAAA;EACA,UAAA;AAEF;;AACA;EACE,kBAAA;EACA,gGCdW;EDeX,eAAA;EACA,mBAAA;AAEF;ACHE;EDHF;IAOI,eAAA;EAGF;AACF;ACRE;EDHF;IAUI,eAAA;EAKF;AACF;;AAFA;EACE,iBAAA;EACA,cC/BY;ADoCd;;AAFA;EACE,uBAAA;MAAA,yBAAA;EACA,kBAAA;EACA,WCvCM;EDwCN,gGCnCW;EDoCX,iBAAA;EACA,cAAA;EACA,OAAA;EACA,yBAAA;KAAA,sBAAA;MAAA,qBAAA;UAAA,iBAAA;EACA,0BAAA;EACA,oCAAA;AAKF;AAHE;EACE,gBAAA;AAKJ;AClCE;EDgBF;IAiBI,eAAA;EAKF;AACF;ACvCE;EDgBF;IAoBI,gBAAA;EAOF;AACF;;AAJA;EACE;IACE,YAAA;IACA,qBAAA;EAOF;EALA;IACE,cAAA;IACA,sBAAA;EAOF;AACF\",\"sourcesContent\":[\"@use '/styles/variables' as *;\\n\\n.jumbotron {\\n  padding: 3rem;\\n  background-color: $dark-gray;\\n  margin-bottom: 2rem;\\n  position: relative;\\n  overflow: hidden;\\n\\n  @include from(md) {\\n    padding: 4rem;\\n  }\\n  @include from(xl) {\\n    padding: 6rem;\\n  }\\n}\\n\\n.container {\\n  width: fit-content;\\n  position: relative;\\n  z-index: 2;\\n}\\n\\n.title {\\n  text-align: center;\\n  font-family: $black-font;\\n  font-size: 2rem;\\n  line-height: normal;\\n\\n  @include from(md) {\\n    font-size: 3rem;\\n  }\\n  @include from(xl) {\\n    font-size: 4rem;\\n  }\\n}\\n\\n.date {\\n  text-align: right;\\n  color: $dark-accent;\\n}\\n\\n.backLeft {\\n  writing-mode: vertical-lr;\\n  position: absolute;\\n  color: $black;\\n  font-family: $black-font;\\n  font-size: 6.5rem;\\n  bottom: -0.1em;\\n  left: 0;\\n  user-select: none;\\n  transform: rotate(-180deg);\\n  animation: backTitle 2s;\\n\\n  .bold {\\n    font-weight: 700;\\n  }\\n\\n  @include from(md) {\\n    font-size: 9rem;\\n  }\\n  @include from(xl) {\\n    font-size: 10rem;\\n  }\\n}\\n\\n@keyframes backTitle {\\n  from {\\n    bottom: -5em;\\n    letter-spacing: 0.5em;\\n  }\\n  to {\\n    bottom: -0.1em;\\n    letter-spacing: normal;\\n  }\\n}\",\"@use \\\"sass:map\\\";\\n\\n$text: #ddd;\\n$muted: #777d7a;\\n$gray: #2b2c2c;\\n$dark-gray: #151615;\\n$black: #000;\\n$accent: #4de0af;\\n$dark-accent: #2eb185;\\n$link: $dark-accent;\\n$font: 'PT Serif', Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\\n$black-font: 'Montserrat', $font;\\n\\n$sm: 576px;\\n$md: 768px;\\n$lg: 992px;\\n$xl: 1200px;\\n\\n$breakpoints: (\\n  sm: $sm,\\n  md: $md,\\n  lg: $lg,\\n  xl: $xl\\n);\\n\\n@mixin from($name) {\\n  @media (min-width: map.get($breakpoints, $name)) {\\n    @content;\\n  }\\n}\\n\\n@mixin to($name) {\\n  @media (max-width: map.get($breakpoints, $name)) {\\n    @content;\\n  }\\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"jumbotron\": \"style_jumbotron__8nqeo\",\n\t\"container\": \"style_container__27NWC\",\n\t\"title\": \"style_title__3TATq\",\n\t\"date\": \"style_date__SlnrG\",\n\t\"backLeft\": \"style_backLeft__UuEub\",\n\t\"backTitle\": \"style_backTitle__5N15t\",\n\t\"bold\": \"style_bold__2sSHX\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ibG9nL3N0eWxlLm1vZHVsZS5zY3NzPzM3OTMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyxvSEFBeUQ7QUFDbkc7QUFDQTtBQUNBLDhCQUE4QixRQUFTLDRCQUE0QixrQkFBa0IsOEJBQThCLHdCQUF3Qix1QkFBdUIscUJBQXFCLEdBQUcsNkJBQTZCLDZCQUE2QixvQkFBb0IsS0FBSyxHQUFHLDhCQUE4Qiw2QkFBNkIsb0JBQW9CLEtBQUssR0FBRyw2QkFBNkIsK0JBQStCLDRCQUE0Qix1QkFBdUIsdUJBQXVCLGVBQWUsR0FBRyx5QkFBeUIsdUJBQXVCLDJHQUEyRyxvQkFBb0Isd0JBQXdCLEdBQUcsNkJBQTZCLHlCQUF5QixzQkFBc0IsS0FBSyxHQUFHLDhCQUE4Qix5QkFBeUIsc0JBQXNCLEtBQUssR0FBRyx3QkFBd0Isc0JBQXNCLG1CQUFtQixHQUFHLDRCQUE0Qiw0QkFBNEIsa0NBQWtDLHVCQUF1QixnQkFBZ0IsMkdBQTJHLHNCQUFzQixtQkFBbUIsWUFBWSw4QkFBOEIsOEJBQThCLDhCQUE4Qiw4QkFBOEIsK0JBQStCLHlDQUF5QyxHQUFHLDZDQUE2QyxxQkFBcUIsR0FBRyw2QkFBNkIsNEJBQTRCLHNCQUFzQixLQUFLLEdBQUcsOEJBQThCLDRCQUE0Qix1QkFBdUIsS0FBSyxHQUFHLHVDQUF1QyxVQUFVLG1CQUFtQiw0QkFBNEIsS0FBSyxRQUFRLHFCQUFxQiw2QkFBNkIsS0FBSyxHQUFHLE9BQU8sMkhBQTJILFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLE1BQU0sTUFBTSxVQUFVLEtBQUssS0FBSyxLQUFLLE1BQU0sVUFBVSxLQUFLLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsTUFBTSxLQUFLLFdBQVcsV0FBVyxVQUFVLFdBQVcsS0FBSyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssS0FBSyxLQUFLLFVBQVUsS0FBSyxNQUFNLEtBQUssV0FBVyxXQUFXLE9BQU8sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLGFBQWEsWUFBWSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxNQUFNLE1BQU0sV0FBVyxLQUFLLEtBQUssTUFBTSxNQUFNLFlBQVksS0FBSyxNQUFNLEtBQUssS0FBSyxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxLQUFLLHVEQUF1RCxnQkFBZ0Isa0JBQWtCLGlDQUFpQyx3QkFBd0IsdUJBQXVCLHFCQUFxQix5QkFBeUIsb0JBQW9CLEtBQUssdUJBQXVCLG9CQUFvQixLQUFLLEdBQUcsZ0JBQWdCLHVCQUF1Qix1QkFBdUIsZUFBZSxHQUFHLFlBQVksdUJBQXVCLDZCQUE2QixvQkFBb0Isd0JBQXdCLHlCQUF5QixzQkFBc0IsS0FBSyx1QkFBdUIsc0JBQXNCLEtBQUssR0FBRyxXQUFXLHNCQUFzQix3QkFBd0IsR0FBRyxlQUFlLDhCQUE4Qix1QkFBdUIsa0JBQWtCLDZCQUE2QixzQkFBc0IsbUJBQW1CLFlBQVksc0JBQXNCLCtCQUErQiw0QkFBNEIsYUFBYSx1QkFBdUIsS0FBSyx5QkFBeUIsc0JBQXNCLEtBQUssdUJBQXVCLHVCQUF1QixLQUFLLEdBQUcsMEJBQTBCLFVBQVUsbUJBQW1CLDRCQUE0QixLQUFLLFFBQVEscUJBQXFCLDZCQUE2QixLQUFLLEdBQUcscUJBQXFCLGdCQUFnQixrQkFBa0IsaUJBQWlCLHNCQUFzQixlQUFlLG1CQUFtQix3QkFBd0Isc0JBQXNCLCtFQUErRSxtQ0FBbUMsZUFBZSxhQUFhLGFBQWEsY0FBYyxzRUFBc0Usd0JBQXdCLHNEQUFzRCxlQUFlLEtBQUssR0FBRyxzQkFBc0Isc0RBQXNELGVBQWUsS0FBSyxHQUFHLG1CQUFtQjtBQUMzMkk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/IS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/IS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/IS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9zYXNzLWxvYWRlci9janMuanM/IS4vY29tcG9uZW50cy9ibG9nL3N0eWxlLm1vZHVsZS5zY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLnN0eWxlX2p1bWJvdHJvbl9fOG5xZW8ge1xcbiAgcGFkZGluZzogM3JlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxNTE2MTU7XFxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAuc3R5bGVfanVtYm90cm9uX184bnFlbyB7XFxuICAgIHBhZGRpbmc6IDRyZW07XFxuICB9XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcXG4gIC5zdHlsZV9qdW1ib3Ryb25fXzhucWVvIHtcXG4gICAgcGFkZGluZzogNnJlbTtcXG4gIH1cXG59XFxuXFxuLnN0eWxlX2NvbnRhaW5lcl9fMjdOV0Mge1xcbiAgd2lkdGg6IC13ZWJraXQtZml0LWNvbnRlbnQ7XFxuICB3aWR0aDogLW1vei1maXQtY29udGVudDtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHotaW5kZXg6IDI7XFxufVxcblxcbi5zdHlsZV90aXRsZV9fM1RBVHEge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNb250c2VycmF0XFxcIiwgXFxcIlBUIFNlcmlmXFxcIiwgQ2FtYnJpYSwgQ29jaGluLCBHZW9yZ2lhLCBUaW1lcywgXFxcIlRpbWVzIE5ldyBSb21hblxcXCIsIHNlcmlmO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAuc3R5bGVfdGl0bGVfXzNUQVRxIHtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XFxuICAuc3R5bGVfdGl0bGVfXzNUQVRxIHtcXG4gICAgZm9udC1zaXplOiA0cmVtO1xcbiAgfVxcbn1cXG5cXG4uc3R5bGVfZGF0ZV9fU2xuckcge1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICBjb2xvcjogIzJlYjE4NTtcXG59XFxuXFxuLnN0eWxlX2JhY2tMZWZ0X19VdUV1YiB7XFxuICAtbXMtd3JpdGluZy1tb2RlOiB0Yi1scjtcXG4gICAgICB3cml0aW5nLW1vZGU6IHZlcnRpY2FsLWxyO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY29sb3I6ICMwMDA7XFxuICBmb250LWZhbWlseTogXFxcIk1vbnRzZXJyYXRcXFwiLCBcXFwiUFQgU2VyaWZcXFwiLCBDYW1icmlhLCBDb2NoaW4sIEdlb3JnaWEsIFRpbWVzLCBcXFwiVGltZXMgTmV3IFJvbWFuXFxcIiwgc2VyaWY7XFxuICBmb250LXNpemU6IDYuNXJlbTtcXG4gIGJvdHRvbTogLTAuMWVtO1xcbiAgbGVmdDogMDtcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTgwZGVnKTtcXG4gIGFuaW1hdGlvbjogc3R5bGVfYmFja1RpdGxlX181TjE1dCAycztcXG59XFxuLnN0eWxlX2JhY2tMZWZ0X19VdUV1YiAuc3R5bGVfYm9sZF9fMnNTSFgge1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAuc3R5bGVfYmFja0xlZnRfX1V1RXViIHtcXG4gICAgZm9udC1zaXplOiA5cmVtO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XFxuICAuc3R5bGVfYmFja0xlZnRfX1V1RXViIHtcXG4gICAgZm9udC1zaXplOiAxMHJlbTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBzdHlsZV9iYWNrVGl0bGVfXzVOMTV0IHtcXG4gIGZyb20ge1xcbiAgICBib3R0b206IC01ZW07XFxuICAgIGxldHRlci1zcGFjaW5nOiAwLjVlbTtcXG4gIH1cXG4gIHRvIHtcXG4gICAgYm90dG9tOiAtMC4xZW07XFxuICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XFxuICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zdHlsZS5tb2R1bGUuc2Nzc1wiLFwid2VicGFjazovLy4uLy4uL3N0eWxlcy9fdmFyaWFibGVzLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxhQUFBO0VBQ0EseUJDQ1U7RURBVixtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFERjtBQ29CRTtFRHhCRjtJQVFJLGFBQUE7RUFBRjtBQUNGO0FDZUU7RUR4QkY7SUFXSSxhQUFBO0VBRUY7QUFDRjs7QUFDQTtFQUNFLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQUVGOztBQUNBO0VBQ0Usa0JBQUE7RUFDQSxnR0NkVztFRGVYLGVBQUE7RUFDQSxtQkFBQTtBQUVGO0FDSEU7RURIRjtJQU9JLGVBQUE7RUFHRjtBQUNGO0FDUkU7RURIRjtJQVVJLGVBQUE7RUFLRjtBQUNGOztBQUZBO0VBQ0UsaUJBQUE7RUFDQSxjQy9CWTtBRG9DZDs7QUFGQTtFQUNFLHVCQUFBO01BQUEseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdDdkNNO0VEd0NOLGdHQ25DVztFRG9DWCxpQkFBQTtFQUNBLGNBQUE7RUFDQSxPQUFBO0VBQ0EseUJBQUE7S0FBQSxzQkFBQTtNQUFBLHFCQUFBO1VBQUEsaUJBQUE7RUFDQSwwQkFBQTtFQUNBLG9DQUFBO0FBS0Y7QUFIRTtFQUNFLGdCQUFBO0FBS0o7QUNsQ0U7RURnQkY7SUFpQkksZUFBQTtFQUtGO0FBQ0Y7QUN2Q0U7RURnQkY7SUFvQkksZ0JBQUE7RUFPRjtBQUNGOztBQUpBO0VBQ0U7SUFDRSxZQUFBO0lBQ0EscUJBQUE7RUFPRjtFQUxBO0lBQ0UsY0FBQTtJQUNBLHNCQUFBO0VBT0Y7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAdXNlICcvc3R5bGVzL3ZhcmlhYmxlcycgYXMgKjtcXG5cXG4uanVtYm90cm9uIHtcXG4gIHBhZGRpbmc6IDNyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGFyay1ncmF5O1xcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuXFxuICBAaW5jbHVkZSBmcm9tKG1kKSB7XFxuICAgIHBhZGRpbmc6IDRyZW07XFxuICB9XFxuICBAaW5jbHVkZSBmcm9tKHhsKSB7XFxuICAgIHBhZGRpbmc6IDZyZW07XFxuICB9XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgei1pbmRleDogMjtcXG59XFxuXFxuLnRpdGxlIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiAkYmxhY2stZm9udDtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XFxuXFxuICBAaW5jbHVkZSBmcm9tKG1kKSB7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gIH1cXG4gIEBpbmNsdWRlIGZyb20oeGwpIHtcXG4gICAgZm9udC1zaXplOiA0cmVtO1xcbiAgfVxcbn1cXG5cXG4uZGF0ZSB7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG4gIGNvbG9yOiAkZGFyay1hY2NlbnQ7XFxufVxcblxcbi5iYWNrTGVmdCB7XFxuICB3cml0aW5nLW1vZGU6IHZlcnRpY2FsLWxyO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY29sb3I6ICRibGFjaztcXG4gIGZvbnQtZmFtaWx5OiAkYmxhY2stZm9udDtcXG4gIGZvbnQtc2l6ZTogNi41cmVtO1xcbiAgYm90dG9tOiAtMC4xZW07XFxuICBsZWZ0OiAwO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTgwZGVnKTtcXG4gIGFuaW1hdGlvbjogYmFja1RpdGxlIDJzO1xcblxcbiAgLmJvbGQge1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgfVxcblxcbiAgQGluY2x1ZGUgZnJvbShtZCkge1xcbiAgICBmb250LXNpemU6IDlyZW07XFxuICB9XFxuICBAaW5jbHVkZSBmcm9tKHhsKSB7XFxuICAgIGZvbnQtc2l6ZTogMTByZW07XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgYmFja1RpdGxlIHtcXG4gIGZyb20ge1xcbiAgICBib3R0b206IC01ZW07XFxuICAgIGxldHRlci1zcGFjaW5nOiAwLjVlbTtcXG4gIH1cXG4gIHRvIHtcXG4gICAgYm90dG9tOiAtMC4xZW07XFxuICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XFxuICB9XFxufVwiLFwiQHVzZSBcXFwic2FzczptYXBcXFwiO1xcblxcbiR0ZXh0OiAjZGRkO1xcbiRtdXRlZDogIzc3N2Q3YTtcXG4kZ3JheTogIzJiMmMyYztcXG4kZGFyay1ncmF5OiAjMTUxNjE1O1xcbiRibGFjazogIzAwMDtcXG4kYWNjZW50OiAjNGRlMGFmO1xcbiRkYXJrLWFjY2VudDogIzJlYjE4NTtcXG4kbGluazogJGRhcmstYWNjZW50O1xcbiRmb250OiAnUFQgU2VyaWYnLCBDYW1icmlhLCBDb2NoaW4sIEdlb3JnaWEsIFRpbWVzLCAnVGltZXMgTmV3IFJvbWFuJywgc2VyaWY7XFxuJGJsYWNrLWZvbnQ6ICdNb250c2VycmF0JywgJGZvbnQ7XFxuXFxuJHNtOiA1NzZweDtcXG4kbWQ6IDc2OHB4O1xcbiRsZzogOTkycHg7XFxuJHhsOiAxMjAwcHg7XFxuXFxuJGJyZWFrcG9pbnRzOiAoXFxuICBzbTogJHNtLFxcbiAgbWQ6ICRtZCxcXG4gIGxnOiAkbGcsXFxuICB4bDogJHhsXFxuKTtcXG5cXG5AbWl4aW4gZnJvbSgkbmFtZSkge1xcbiAgQG1lZGlhIChtaW4td2lkdGg6IG1hcC5nZXQoJGJyZWFrcG9pbnRzLCAkbmFtZSkpIHtcXG4gICAgQGNvbnRlbnQ7XFxuICB9XFxufVxcblxcbkBtaXhpbiB0bygkbmFtZSkge1xcbiAgQG1lZGlhIChtYXgtd2lkdGg6IG1hcC5nZXQoJGJyZWFrcG9pbnRzLCAkbmFtZSkpIHtcXG4gICAgQGNvbnRlbnQ7XFxuICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImp1bWJvdHJvblwiOiBcInN0eWxlX2p1bWJvdHJvbl9fOG5xZW9cIixcblx0XCJjb250YWluZXJcIjogXCJzdHlsZV9jb250YWluZXJfXzI3TldDXCIsXG5cdFwidGl0bGVcIjogXCJzdHlsZV90aXRsZV9fM1RBVHFcIixcblx0XCJkYXRlXCI6IFwic3R5bGVfZGF0ZV9fU2xuckdcIixcblx0XCJiYWNrTGVmdFwiOiBcInN0eWxlX2JhY2tMZWZ0X19VdUV1YlwiLFxuXHRcImJhY2tUaXRsZVwiOiBcInN0eWxlX2JhY2tUaXRsZV9fNU4xNXRcIixcblx0XCJib2xkXCI6IFwic3R5bGVfYm9sZF9fMnNTSFhcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./components/blog/style.module.scss\n");

/***/ })

})