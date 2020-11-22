(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["report"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/VReportItem.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/VReportItem.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_Snackbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/Snackbar */ "./resources/js/utils/Snackbar.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
  name: "VReportItem",
  props: {
    item: {
      required: true,
      type: Object
    }
  },
  computed: {
    saveOrEditText: function saveOrEditText() {
      return this.editing ? 'Save' : 'Edit';
    }
  },
  data: function data() {
    var report = _objectSpread({}, this.item);

    return {
      loading: false,
      editing: false,
      report: report
    };
  },
  methods: {
    saveOrEdit: function saveOrEdit() {
      this.editing ? this.saveReport() : this.editReport();
    },
    saveReport: function saveReport() {
      var _this = this;

      this.loading = 'primary';
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.patch("/reports/".concat(this.item.id), Object(lodash__WEBPACK_IMPORTED_MODULE_1__["pick"])(this.report, 'amount')).then(function (res) {
        var _res$data = res.data,
            report = _res$data.report,
            message = _res$data.message;

        _this.$emit('update-report', report);

        _this.editing = false;
        _utils_Snackbar__WEBPACK_IMPORTED_MODULE_2__["Snackbar"].success(message);
      })["catch"](function (err) {
        return _utils_Snackbar__WEBPACK_IMPORTED_MODULE_2__["Snackbar"].error(err.response.data.message);
      })["finally"](function () {
        return _this.loading = false;
      });
    },
    editReport: function editReport() {
      this.editing = true;
    },
    removeReport: function removeReport() {
      this.$emit('remove-report', this.report);
    },
    cancelReport: function cancelReport() {
      this.report = _objectSpread({}, this.item);
      this.editing = false;
    }
  },
  created: function created() {
    this.editing = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["isNull"])(this.item.amount);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Reports.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Reports.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_Snackbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/Snackbar */ "./resources/js/utils/Snackbar.js");
/* harmony import */ var _components_VReportItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/VReportItem */ "./resources/js/components/VReportItem.vue");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
  props: {
    items: {
      required: true,
      type: Array
    }
  },
  components: {
    VReportItem: _components_VReportItem__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  computed: {
    reportItems: function reportItems() {
      switch (this.sort) {
        case 'asc':
          return this.reports.sort(function (a, b) {
            return a.amount - b.amount;
          });

        case 'desc':
          return this.reports.sort(function (a, b) {
            return b.amount - a.amount;
          });

        default:
          return this.reports.sort(function (a, b) {
            return a.id - b.id;
          });
      }
    },
    hasUnsavedReport: function hasUnsavedReport() {
      return this.reports.some(function (report) {
        return !report.amount;
      });
    }
  },
  data: function data() {
    var reports = this.items.map(function (report) {
      return _objectSpread({}, report);
    });
    return {
      deletable: null,
      loading: false,
      dialog: false,
      sort: null,
      reports: reports
    };
  },
  methods: {
    toggleSorting: function toggleSorting() {
      if (this.sort === null) {
        this.sort = 'asc';
      } else if (this.sort === 'asc') {
        this.sort = 'desc';
      } else {
        this.sort = null;
      }
    },
    addReport: function addReport() {
      var _this = this;

      if (this.hasUnsavedReport) {
        _utils_Snackbar__WEBPACK_IMPORTED_MODULE_1__["Snackbar"].error('There is unsaved report.');
        return;
      }

      this.loading = 'primary';
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/reports', {
        amount: null
      }).then(function (res) {
        return _this.reports.push(res.data.report);
      })["catch"](function (err) {
        return _utils_Snackbar__WEBPACK_IMPORTED_MODULE_1__["Snackbar"].error(err.response.data.message);
      })["finally"](function () {
        return _this.loading = false;
      });
    },
    updateReport: function updateReport(report) {
      var i = this.reports.findIndex(function (r) {
        return r.id === report.id;
      });
      this.reports.splice(i, 1, _objectSpread({}, report));
    },
    removeReport: function removeReport(report) {
      this.deletable = _objectSpread({}, report);
      this.dialog = true;
    },
    deleteReport: function deleteReport() {
      var _this2 = this;

      this.loading = 'primary';
      axios__WEBPACK_IMPORTED_MODULE_0___default.a["delete"]("/reports/".concat(this.deletable.id)).then(function (res) {
        return _utils_Snackbar__WEBPACK_IMPORTED_MODULE_1__["Snackbar"].success(res.data.message);
      }).then(function () {
        var i = _this2.reports.findIndex(function (r) {
          return r.id === _this2.deletable.id;
        });

        _this2.reports.splice(i, 1);

        _this2.cancelDelete();
      })["catch"](function (err) {
        return _utils_Snackbar__WEBPACK_IMPORTED_MODULE_1__["Snackbar"].error(err.response.data.message);
      })["finally"](function () {
        return _this2.loading = false;
      });
    },
    cancelDelete: function cancelDelete() {
      this.deletable = null;
      this.dialog = false;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/VReportItem.vue?vue&type=template&id=11c6803c&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/VReportItem.vue?vue&type=template&id=11c6803c&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
    "v-list-item",
    [
      _c(
        "v-list-item-content",
        { staticClass: "pa-0" },
        [
          _c(
            "v-fade-transition",
            { attrs: { "hide-on-leave": "", group: "" } },
            [
              _vm.editing
                ? _c("v-text-field", {
                    key: "input",
                    staticClass: "mx-2 mt-7",
                    attrs: {
                      loading: _vm.loading,
                      "hide-details": "auto",
                      type: "number",
                      counter: "11",
                      step: "0.01",
                      autofocus: "",
                      outlined: "",
                      dense: ""
                    },
                    on: {
                      keypress: function($event) {
                        if (
                          !$event.type.indexOf("key") &&
                          _vm._k(
                            $event.keyCode,
                            "enter",
                            13,
                            $event.key,
                            "Enter"
                          )
                        ) {
                          return null
                        }
                        return _vm.saveReport($event)
                      },
                      keydown: function($event) {
                        if (
                          !$event.type.indexOf("key") &&
                          _vm._k($event.keyCode, "esc", 27, $event.key, [
                            "Esc",
                            "Escape"
                          ])
                        ) {
                          return null
                        }
                        return _vm.cancelReport($event)
                      }
                    },
                    model: {
                      value: _vm.report.amount,
                      callback: function($$v) {
                        _vm.$set(_vm.report, "amount", _vm._n($$v))
                      },
                      expression: "report.amount"
                    }
                  })
                : _c("v-list-item-title", {
                    key: "title",
                    domProps: { textContent: _vm._s(_vm.report.amount) }
                  })
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-list-item-action",
        [
          _c("v-btn", { attrs: { text: "" }, on: { click: _vm.saveOrEdit } }, [
            _vm._v(_vm._s(_vm.saveOrEditText))
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-list-item-action",
        [
          _c(
            "v-btn",
            {
              attrs: { color: "error", text: "" },
              on: { click: _vm.removeReport }
            },
            [_vm._v("Remove")]
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
    { staticClass: "mx-auto", attrs: { loading: _vm.loading, width: "800" } },
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
                        left: ""
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
        [
          _c("v-toolbar-title", [_vm._v("Reports")]),
          _vm._v(" "),
          _c("v-spacer"),
          _vm._v(" "),
          _c(
            "v-btn",
            { attrs: { icon: "" }, on: { click: _vm.toggleSorting } },
            [
              !_vm.sort ? _c("v-icon", [_vm._v("mdi-sort")]) : _vm._e(),
              _vm._v(" "),
              _vm.sort === "asc"
                ? _c("v-icon", [_vm._v("mdi-sort-ascending")])
                : _vm._e(),
              _vm._v(" "),
              _vm.sort === "desc"
                ? _c("v-icon", [_vm._v("mdi-sort-descending")])
                : _vm._e()
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-card-text",
        [
          _c(
            "v-list",
            { attrs: { dense: "" } },
            [
              _c(
                "v-slide-y-transition",
                { staticClass: "py-0", attrs: { group: "" } },
                _vm._l(_vm.reportItems, function(report) {
                  return _c("v-report-item", {
                    key: "report-" + report.id,
                    attrs: { item: report },
                    on: {
                      "update-report": _vm.updateReport,
                      "remove-report": _vm.removeReport
                    }
                  })
                }),
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: { width: "500", persistent: "" },
          model: {
            value: _vm.dialog,
            callback: function($$v) {
              _vm.dialog = $$v
            },
            expression: "dialog"
          }
        },
        [
          _c(
            "v-card",
            [
              _c("v-card-title", { staticClass: "headline grey" }, [
                _vm._v("Are you sure to delete?")
              ]),
              _vm._v(" "),
              _c("v-divider"),
              _vm._v(" "),
              _c(
                "v-card-actions",
                [
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    { attrs: { text: "" }, on: { click: _vm.cancelDelete } },
                    [_vm._v("No")]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "error", text: "" },
                      on: { click: _vm.deleteReport }
                    },
                    [_vm._v("Yes")]
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
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/VReportItem.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/VReportItem.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VReportItem_vue_vue_type_template_id_11c6803c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VReportItem.vue?vue&type=template&id=11c6803c&scoped=true& */ "./resources/js/components/VReportItem.vue?vue&type=template&id=11c6803c&scoped=true&");
/* harmony import */ var _VReportItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VReportItem.vue?vue&type=script&lang=js& */ "./resources/js/components/VReportItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _VReportItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _VReportItem_vue_vue_type_template_id_11c6803c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _VReportItem_vue_vue_type_template_id_11c6803c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "11c6803c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/VReportItem.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/VReportItem.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/VReportItem.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VReportItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./VReportItem.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/VReportItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VReportItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/VReportItem.vue?vue&type=template&id=11c6803c&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/VReportItem.vue?vue&type=template&id=11c6803c&scoped=true& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VReportItem_vue_vue_type_template_id_11c6803c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./VReportItem.vue?vue&type=template&id=11c6803c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/VReportItem.vue?vue&type=template&id=11c6803c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VReportItem_vue_vue_type_template_id_11c6803c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VReportItem_vue_vue_type_template_id_11c6803c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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