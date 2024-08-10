import { _ as _export_sfc, e as ElTabs, f as ElTabPane, g as ElButton } from './server.mjs';
import { ref, mergeProps, unref, isRef, withCtx, createTextVNode, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from 'vue/server-renderer';
import { u as useAuthStore } from './authStore-ajW-SPS-.mjs';
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
import './utils-U-D2mQHl.mjs';

const _sfc_main = {
  __name: "AuthLogin",
  __ssrInlineRender: true,
  setup(__props) {
    const { authStart } = useAuthStore();
    const activeName = ref("first");
    const handleSignup = async (e) => {
      await authStart();
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_tabs = ElTabs;
      const _component_el_tab_pane = ElTabPane;
      const _component_el_button = ElButton;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "auth-page" }, _attrs))} data-v-d7dba11c><div class="heading" data-v-d7dba11c><h1 class="title" data-v-d7dba11c>Welcome to The Farmers Heaven</h1><h6 class="sub-title" data-v-d7dba11c>Please sign in to continue...</h6></div><div class="login-form" data-v-d7dba11c>`);
      _push(ssrRenderComponent(_component_el_tabs, {
        modelValue: unref(activeName),
        "onUpdate:modelValue": ($event) => isRef(activeName) ? activeName.value = $event : null,
        type: "card",
        class: "demo-tabs"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_el_tab_pane, {
              label: "Login",
              name: "first"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_el_button, {
                    onClick: handleSignup,
                    style: { width: "100%" },
                    type: "primary"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Login With<i style="${ssrRenderStyle({ padding: "10px" })}" class="ri-google-fill" data-v-d7dba11c${_scopeId3}></i>`);
                      } else {
                        return [
                          createTextVNode(" Login With"),
                          createVNode("i", {
                            style: { padding: "10px" },
                            class: "ri-google-fill"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_el_button, {
                      onClick: handleSignup,
                      style: { width: "100%" },
                      type: "primary"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Login With"),
                        createVNode("i", {
                          style: { padding: "10px" },
                          class: "ri-google-fill"
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_tab_pane, {
              label: " Sign-Up",
              name: "second"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_el_button, {
                    onClick: handleSignup,
                    style: { width: "100%" },
                    type: "primary"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Sign-Up<i style="${ssrRenderStyle({ padding: "10px" })}" class="ri-google-fill" data-v-d7dba11c${_scopeId3}></i>`);
                      } else {
                        return [
                          createTextVNode(" Sign-Up"),
                          createVNode("i", {
                            style: { padding: "10px" },
                            class: "ri-google-fill"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_el_button, {
                      onClick: handleSignup,
                      style: { width: "100%" },
                      type: "primary"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Sign-Up"),
                        createVNode("i", {
                          style: { padding: "10px" },
                          class: "ri-google-fill"
                        })
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
              createVNode(_component_el_tab_pane, {
                label: "Login",
                name: "first"
              }, {
                default: withCtx(() => [
                  createVNode(_component_el_button, {
                    onClick: handleSignup,
                    style: { width: "100%" },
                    type: "primary"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Login With"),
                      createVNode("i", {
                        style: { padding: "10px" },
                        class: "ri-google-fill"
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_el_tab_pane, {
                label: " Sign-Up",
                name: "second"
              }, {
                default: withCtx(() => [
                  createVNode(_component_el_button, {
                    onClick: handleSignup,
                    style: { width: "100%" },
                    type: "primary"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Sign-Up"),
                      createVNode("i", {
                        style: { padding: "10px" },
                        class: "ri-google-fill"
                      })
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
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/AuthLogin.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const AuthLogin = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d7dba11c"]]);

export { AuthLogin as default };
//# sourceMappingURL=AuthLogin-DW55cKh-.mjs.map
