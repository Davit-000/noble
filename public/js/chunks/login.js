(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/auth/Login.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/auth/Login.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vee_validate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vee-validate */ "./node_modules/vee-validate/dist/vee-validate.esm.js");
/* harmony import */ var _forms_LoginForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/forms/LoginForm */ "./resources/js/forms/LoginForm.js");
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
  name: "Login",
  data: function data() {
    var form = new _forms_LoginForm__WEBPACK_IMPORTED_MODULE_2__["LoginForm"](this.inputs);
    return {
      loading: false,
      show: false,
      form: form
    };
  },
  props: {
    errors: {
      "default": function _default() {
        return {};
      },
      required: true,
      type: Object
    },
    inputs: {
      "default": function _default() {
        return {};
      },
      required: false,
      type: Object
    }
  },
  computed: {
    type: function type() {
      return this.show ? 'text' : 'password';
    },
    icon: function icon() {
      return this.show ? 'mdi-eye-off' : 'mdi-eye';
    }
  },
  components: {
    ValidationProvider: vee_validate__WEBPACK_IMPORTED_MODULE_1__["ValidationProvider"],
    ValidationObserver: vee_validate__WEBPACK_IMPORTED_MODULE_1__["ValidationObserver"]
  },
  methods: {
    submit: function submit() {
      var _this = this;

      this.loading = 'primary';
      this.$refs.form.validate().then(function (valid) {
        return valid ? _this.$refs.login.$el.submit() : undefined;
      })["finally"](function () {
        return _this.loading = false;
      });
    }
  },
  mounted: function mounted() {
    if (!Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"])(this.errors)) this.$refs.form.setErrors(this.errors);
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/auth/Login.vue?vue&type=template&id=46ec553e&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/auth/Login.vue?vue&type=template&id=46ec553e& ***!
  \********************************************************************************************************************************************************************************************************/
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
    "v-container",
    { attrs: { fluid: "", "fill-height": "" } },
    [
      _c(
        "v-row",
        { attrs: { align: "center", justify: "center" } },
        [
          _c(
            "v-col",
            { attrs: { cols: "12", xs: "4", sm: "8", md: "4", lg: "4" } },
            [
              _c(
                "v-card",
                { attrs: { loading: _vm.loading } },
                [
                  _c(
                    "v-toolbar",
                    { attrs: { color: "white", flat: "" } },
                    [
                      _c("v-toolbar-title", { staticClass: "title" }, [
                        _vm._v("Login to Noble")
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("ValidationObserver", {
                    ref: "form",
                    scopedSlots: _vm._u([
                      {
                        key: "default",
                        fn: function(ref) {
                          var invalid = ref.invalid
                          return [
                            _c(
                              "v-form",
                              {
                                ref: "login",
                                attrs: { method: "post", action: "/login" },
                                on: {
                                  submit: function($event) {
                                    $event.preventDefault()
                                    return _vm.submit($event)
                                  }
                                }
                              },
                              [
                                _c("input", {
                                  attrs: { type: "hidden", name: "_token" },
                                  domProps: { value: _vm.$csrf }
                                }),
                                _vm._v(" "),
                                _c(
                                  "v-card-text",
                                  [
                                    _c("ValidationProvider", {
                                      attrs: {
                                        name: "email",
                                        rules: _vm.form.rules.email
                                      },
                                      scopedSlots: _vm._u(
                                        [
                                          {
                                            key: "default",
                                            fn: function(ref) {
                                              var errors = ref.errors
                                              return [
                                                _c("v-text-field", {
                                                  attrs: {
                                                    "error-messages": errors,
                                                    "prepend-inner-icon":
                                                      "mdi-account-check-outline",
                                                    label: "Email",
                                                    name: "email",
                                                    "persistent-hint": "",
                                                    autofocus: "",
                                                    outlined: ""
                                                  },
                                                  model: {
                                                    value: _vm.form.email,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.form,
                                                        "email",
                                                        $$v
                                                      )
                                                    },
                                                    expression: "form.email"
                                                  }
                                                })
                                              ]
                                            }
                                          }
                                        ],
                                        null,
                                        true
                                      )
                                    }),
                                    _vm._v(" "),
                                    _c("ValidationProvider", {
                                      attrs: {
                                        name: "password",
                                        rules: _vm.form.rules.password
                                      },
                                      scopedSlots: _vm._u(
                                        [
                                          {
                                            key: "default",
                                            fn: function(ref) {
                                              var errors = ref.errors
                                              return [
                                                _c("v-text-field", {
                                                  attrs: {
                                                    "error-messages": errors,
                                                    "append-icon": _vm.icon,
                                                    type: _vm.type,
                                                    "prepend-inner-icon":
                                                      "mdi-lock-outline",
                                                    label: "Password",
                                                    name: "password",
                                                    outlined: ""
                                                  },
                                                  on: {
                                                    "click:append": function(
                                                      $event
                                                    ) {
                                                      _vm.show = !_vm.show
                                                    }
                                                  },
                                                  model: {
                                                    value: _vm.form.password,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.form,
                                                        "password",
                                                        $$v
                                                      )
                                                    },
                                                    expression: "form.password"
                                                  }
                                                })
                                              ]
                                            }
                                          }
                                        ],
                                        null,
                                        true
                                      )
                                    }),
                                    _vm._v(" "),
                                    _c("ValidationProvider", {
                                      attrs: {
                                        name: "remember",
                                        rules: "nullOrInteger"
                                      },
                                      scopedSlots: _vm._u(
                                        [
                                          {
                                            key: "default",
                                            fn: function(ref) {
                                              var errors = ref.errors
                                              return [
                                                _c("v-checkbox", {
                                                  attrs: {
                                                    "error-messages": errors,
                                                    "false-value": null,
                                                    "true-value": 1,
                                                    autocomplete: "off",
                                                    label: "Remember Me?",
                                                    type: "checkbox",
                                                    color: "primary",
                                                    name: "remember"
                                                  },
                                                  model: {
                                                    value: _vm.form.remember,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.form,
                                                        "remember",
                                                        $$v
                                                      )
                                                    },
                                                    expression: "form.remember"
                                                  }
                                                })
                                              ]
                                            }
                                          }
                                        ],
                                        null,
                                        true
                                      )
                                    })
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-card-actions",
                                  [
                                    _c("a", { attrs: { href: "/register" } }, [
                                      _vm._v("Create an account?")
                                    ]),
                                    _vm._v(" "),
                                    _c("v-spacer"),
                                    _vm._v(" "),
                                    _c(
                                      "v-btn",
                                      {
                                        attrs: {
                                          type: "submit",
                                          disabled: invalid,
                                          color: "primary"
                                        }
                                      },
                                      [
                                        _vm._v(
                                          "\n                Login\n              "
                                        )
                                      ]
                                    )
                                  ],
                                  1
                                )
                              ],
                              1
                            )
                          ]
                        }
                      }
                    ])
                  })
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

/***/ "./resources/js/forms/LoginForm.js":
/*!*****************************************!*\
  !*** ./resources/js/forms/LoginForm.js ***!
  \*****************************************/
/*! exports provided: LoginForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginForm", function() { return LoginForm; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var LoginForm =
/** @type {string} **/

/** @type {string} **/

/** @type {boolean | null} **/

/**
 * Validation rules
 *
 * @type {{password: {string: boolean, required: boolean}, email: {required: boolean, email: boolean}}}
 */

/**
 * Login Form Constructor
 *
 * @param {{email?: string, password?: string, remember?: boolean | null}} inputs
 */
function LoginForm() {
  var inputs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  _classCallCheck(this, LoginForm);

  _defineProperty(this, "email", '');

  _defineProperty(this, "password", '');

  _defineProperty(this, "remember", false);

  _defineProperty(this, "rules", {
    email: {
      required: true,
      email: true
    },
    password: {
      required: true,
      string: true
    }
  });

  this.email = inputs.email || '';
  this.password = inputs.password || '';
  this.remember = inputs.remember || null;
};

/***/ }),

/***/ "./resources/js/views/auth/Login.vue":
/*!*******************************************!*\
  !*** ./resources/js/views/auth/Login.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Login_vue_vue_type_template_id_46ec553e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Login.vue?vue&type=template&id=46ec553e& */ "./resources/js/views/auth/Login.vue?vue&type=template&id=46ec553e&");
/* harmony import */ var _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Login.vue?vue&type=script&lang=js& */ "./resources/js/views/auth/Login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Login_vue_vue_type_template_id_46ec553e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Login_vue_vue_type_template_id_46ec553e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/auth/Login.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/auth/Login.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/views/auth/Login.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Login.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/auth/Login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/auth/Login.vue?vue&type=template&id=46ec553e&":
/*!**************************************************************************!*\
  !*** ./resources/js/views/auth/Login.vue?vue&type=template&id=46ec553e& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_46ec553e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Login.vue?vue&type=template&id=46ec553e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/auth/Login.vue?vue&type=template&id=46ec553e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_46ec553e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_46ec553e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);