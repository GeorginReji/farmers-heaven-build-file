import { _ as _export_sfc, w as ElForm, x as ElFormItem, y as ElInput, g as ElButton } from './server.mjs';
import { reactive, mergeProps, unref, withCtx, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@vueuse/core';
import '@vue/shared';
import 'lodash-unified';
import '@popperjs/core';
import '@ctrl/tinycolor';
import 'dayjs';
import 'dayjs/plugin/localeData.js';
import 'dayjs/plugin/customParseFormat.js';
import 'dayjs/plugin/advancedFormat.js';
import 'dayjs/plugin/weekOfYear.js';
import 'dayjs/plugin/weekYear.js';
import 'dayjs/plugin/dayOfYear.js';
import 'dayjs/plugin/isSameOrAfter.js';
import 'dayjs/plugin/isSameOrBefore.js';
import '@vue/reactivity';
import 'async-validator';
import 'memoize-one';
import 'normalize-wheel-es';
import '@floating-ui/dom';

const _sfc_main = {
  __name: "ResetPassword",
  __ssrInlineRender: true,
  setup(__props) {
    const resetModel = reactive({
      email: "",
      password: "",
      confirmPassword: ""
    });
    const validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Please input the password"));
      } else {
        if (resetModel.password !== "") {
          if (!resetModel.value)
            return;
          resetModel.value.validateField("password", () => null);
        }
        callback();
      }
    };
    const validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Please input the password again"));
      } else if (value !== resetModel.password) {
        callback(new Error("Two inputs don't match!"));
      } else {
        callback();
      }
    };
    const resetFormRules = reactive({
      email: [{ required: true, type: "email", message: "Please input correct email address" }],
      password: [{ validator: validatePass, trigger: "blur" }],
      confirmPassword: [{ validator: validatePass2, trigger: "blur" }]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_form = ElForm;
      const _component_el_form_item = ElFormItem;
      const _component_el_input = ElInput;
      const _component_el_button = ElButton;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "auth-layout" }, _attrs))} data-v-5fdf90b6><div class="heading" data-v-5fdf90b6><h1 class="title" data-v-5fdf90b6> Password Reset </h1></div>`);
      _push(ssrRenderComponent(_component_el_form, {
        ref: "resetForm",
        rules: unref(resetFormRules),
        model: unref(resetModel),
        "label-position": "top"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_el_form_item, {
              label: "Email",
              prop: "email"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_el_input, {
                    modelValue: unref(resetModel).email,
                    "onUpdate:modelValue": ($event) => unref(resetModel).email = $event,
                    class: "bg-grey",
                    type: "email",
                    placeholder: "Email Address"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_el_input, {
                      modelValue: unref(resetModel).email,
                      "onUpdate:modelValue": ($event) => unref(resetModel).email = $event,
                      class: "bg-grey",
                      type: "email",
                      placeholder: "Email Address"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_form_item, {
              label: "password",
              prop: "password"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_el_input, {
                    modelValue: unref(resetModel).password,
                    "onUpdate:modelValue": ($event) => unref(resetModel).password = $event,
                    class: "bg-grey",
                    type: "password",
                    placeholder: "Password"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_el_input, {
                      modelValue: unref(resetModel).password,
                      "onUpdate:modelValue": ($event) => unref(resetModel).password = $event,
                      class: "bg-grey",
                      type: "password",
                      placeholder: "Password"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_form_item, {
              label: "confirmPassword",
              prop: "confirmPassword"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_el_input, {
                    modelValue: unref(resetModel).confirmPassword,
                    "onUpdate:modelValue": ($event) => unref(resetModel).confirmPassword = $event,
                    class: "bg-grey",
                    type: "password",
                    placeholder: "Confirm Password"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_el_input, {
                      modelValue: unref(resetModel).confirmPassword,
                      "onUpdate:modelValue": ($event) => unref(resetModel).confirmPassword = $event,
                      class: "bg-grey",
                      type: "password",
                      placeholder: "Confirm Password"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_form_item, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_el_button, {
                    style: { width: "100%" },
                    type: "primary"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Update Password `);
                      } else {
                        return [
                          createTextVNode(" Update Password ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_el_button, {
                      style: { width: "100%" },
                      type: "primary"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Update Password ")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_el_form_item, {
                label: "Email",
                prop: "email"
              }, {
                default: withCtx(() => [
                  createVNode(_component_el_input, {
                    modelValue: unref(resetModel).email,
                    "onUpdate:modelValue": ($event) => unref(resetModel).email = $event,
                    class: "bg-grey",
                    type: "email",
                    placeholder: "Email Address"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(_component_el_form_item, {
                label: "password",
                prop: "password"
              }, {
                default: withCtx(() => [
                  createVNode(_component_el_input, {
                    modelValue: unref(resetModel).password,
                    "onUpdate:modelValue": ($event) => unref(resetModel).password = $event,
                    class: "bg-grey",
                    type: "password",
                    placeholder: "Password"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(_component_el_form_item, {
                label: "confirmPassword",
                prop: "confirmPassword"
              }, {
                default: withCtx(() => [
                  createVNode(_component_el_input, {
                    modelValue: unref(resetModel).confirmPassword,
                    "onUpdate:modelValue": ($event) => unref(resetModel).confirmPassword = $event,
                    class: "bg-grey",
                    type: "password",
                    placeholder: "Confirm Password"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(_component_el_form_item, null, {
                default: withCtx(() => [
                  createVNode(_component_el_button, {
                    style: { width: "100%" },
                    type: "primary"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Update Password ")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/ResetPassword.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ResetPassword = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5fdf90b6"]]);

export { ResetPassword as default };
//# sourceMappingURL=ResetPassword-BL7L2KnS.mjs.map
