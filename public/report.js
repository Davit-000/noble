(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["report"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Reports.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Reports.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module '@/components/VReportItem'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Reports",
  components: {
    VReportItem: !(function webpackMissingModule() { var e = new Error("Cannot find module '@/components/VReportItem'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
  },
  data: function data() {
    return {
      reports: [],
      editable: {
        index: null,
        report: null
      }
    };
  },
  methods: {
    addReport: function addReport() {
      this.reports.push({
        id: this.reports.length + 1,
        amount: null
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Reports.vue?vue&type=template&id=0d7aee70&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Reports.vue?vue&type=template&id=0d7aee70& ***!
  \*****************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-card",
    { staticClass: "mx-auto" },
    [
      _c(
        "v-toolbar",
        {
          attrs: { extended: "" },
          scopedSlots: _vm._u([
            {
              key: "extension",
              fn: function() {
                return [
                  _c(
                    "v-btn",
                    {
                      attrs: {
                        color: "pink",
                        fab: "",
                        dark: "",
                        absolute: "",
                        bottom: "",
                        right: ""
                      },
                      on: { click: _vm.addReport }
                    },
                    [_c("v-icon", [_vm._v("mdi-plus")])],
                    1
                  )
                ]
              },
              proxy: true
            }
          ])
        },
        [_c("v-toolbar-title", [_vm._v("Reports")])],
        1
      ),
      _vm._v(" "),
      _c(
        "v-card-text",
        [
          _c(
            "v-list",
            [
              _c(
                "v-slide-y-transition",
                { staticClass: "py-0", attrs: { group: "" } },
                _vm._l(_vm.reports, function(report) {
                  return _c("v-report-item", {
                    key: "report-" + report.id,
                    attrs: { item: report }
                  })
                }),
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/Reports.vue":
/*!****************************************!*\
  !*** ./resources/js/views/Reports.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Reports_vue_vue_type_template_id_0d7aee70___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Reports.vue?vue&type=template&id=0d7aee70& */ "./resources/js/views/Reports.vue?vue&type=template&id=0d7aee70&");
/* harmony import */ var _Reports_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Reports.vue?vue&type=script&lang=js& */ "./resources/js/views/Reports.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Reports_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Reports_vue_vue_type_template_id_0d7aee70___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Reports_vue_vue_type_template_id_0d7aee70___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Reports.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Reports.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./resources/js/views/Reports.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Reports_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Reports.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Reports.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Reports_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Reports.vue?vue&type=template&id=0d7aee70&":
/*!***********************************************************************!*\
  !*** ./resources/js/views/Reports.vue?vue&type=template&id=0d7aee70& ***!
  \***********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Reports_vue_vue_type_template_id_0d7aee70___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Reports.vue?vue&type=template&id=0d7aee70& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Reports.vue?vue&type=template&id=0d7aee70&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Reports_vue_vue_type_template_id_0d7aee70___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Reports_vue_vue_type_template_id_0d7aee70___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);