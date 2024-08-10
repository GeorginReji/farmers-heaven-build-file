import { _ as _export_sfc, s as storeToRefs, C as navigateTo, G as ElDrawer, H as ElMenu, I as ElMenuItem, J as ElBadge, g as ElButton } from './server.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link--8nTaV_a.mjs';
import { u as useAuthStore } from './authStore-ajW-SPS-.mjs';
import { useSSRContext, mergeProps, ref, unref, isRef, withCtx, createVNode, withModifiers, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _imports_0 } from './TFH_logo-PR_YcHQm.mjs';
import { u as useCartStore } from './cartStore-7tJZ7JS6.mjs';
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

const _sfc_main$3 = {
  __name: "topbar",
  __ssrInlineRender: true,
  setup(__props) {
    const cartStore = useCartStore();
    const drawer = ref(false);
    const authStore = useAuthStore();
    const { authenticated } = storeToRefs(authStore);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_drawer = ElDrawer;
      const _component_el_menu = ElMenu;
      const _component_el_menu_item = ElMenuItem;
      const _component_nuxt_link = __nuxt_component_0;
      const _component_el_badge = ElBadge;
      const _component_el_button = ElButton;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "topbar" }, _attrs))}><div class="menu-items"><div class="menu-icon-container"><i class="ri-menu-line"></i></div>`);
      _push(ssrRenderComponent(_component_el_drawer, {
        modelValue: unref(drawer),
        "onUpdate:modelValue": ($event) => isRef(drawer) ? drawer.value = $event : null,
        size: "30%",
        title: "I am the title",
        "with-header": false
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="logo"${_scopeId}><img${ssrRenderAttr("src", _imports_0)} alt=""${_scopeId}></div>`);
            _push2(ssrRenderComponent(_component_el_menu, { router: true }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_el_menu_item, { index: "/ProductsList" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span${_scopeId3}>Our Products</span>`);
                      } else {
                        return [
                          createVNode("span", null, "Our Products")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_menu_item, { index: "/AboutUs" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span${_scopeId3}>About</span>`);
                      } else {
                        return [
                          createVNode("span", null, "About")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_menu_item, { index: "3" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span${_scopeId3}>Gift Hampers</span>`);
                      } else {
                        return [
                          createVNode("span", null, "Gift Hampers")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_menu_item, { index: "4" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span${_scopeId3}>Gallery</span>`);
                      } else {
                        return [
                          createVNode("span", null, "Gallery")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_menu_item, { index: "5" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span${_scopeId3}>Blog</span>`);
                      } else {
                        return [
                          createVNode("span", null, "Blog")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_el_menu_item, {
                    index: "6",
                    disabled: ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span${_scopeId3}>Know your Farmer</span>`);
                      } else {
                        return [
                          createVNode("span", null, "Know your Farmer")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_el_menu_item, { index: "/ProductsList" }, {
                      default: withCtx(() => [
                        createVNode("span", null, "Our Products")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_menu_item, { index: "/AboutUs" }, {
                      default: withCtx(() => [
                        createVNode("span", null, "About")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_menu_item, { index: "3" }, {
                      default: withCtx(() => [
                        createVNode("span", null, "Gift Hampers")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_menu_item, { index: "4" }, {
                      default: withCtx(() => [
                        createVNode("span", null, "Gallery")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_menu_item, { index: "5" }, {
                      default: withCtx(() => [
                        createVNode("span", null, "Blog")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_menu_item, {
                      index: "6",
                      disabled: ""
                    }, {
                      default: withCtx(() => [
                        createVNode("span", null, "Know your Farmer")
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
              createVNode("div", { class: "logo" }, [
                createVNode("img", {
                  src: _imports_0,
                  alt: ""
                })
              ]),
              createVNode(_component_el_menu, { router: true }, {
                default: withCtx(() => [
                  createVNode(_component_el_menu_item, { index: "/ProductsList" }, {
                    default: withCtx(() => [
                      createVNode("span", null, "Our Products")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_el_menu_item, { index: "/AboutUs" }, {
                    default: withCtx(() => [
                      createVNode("span", null, "About")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_el_menu_item, { index: "3" }, {
                    default: withCtx(() => [
                      createVNode("span", null, "Gift Hampers")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_el_menu_item, { index: "4" }, {
                    default: withCtx(() => [
                      createVNode("span", null, "Gallery")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_el_menu_item, { index: "5" }, {
                    default: withCtx(() => [
                      createVNode("span", null, "Blog")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_el_menu_item, {
                    index: "6",
                    disabled: ""
                  }, {
                    default: withCtx(() => [
                      createVNode("span", null, "Know your Farmer")
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
      _push(`</div><div class="social-media"><i class="ri-facebook-fill"></i><i class="ri-twitter-x-line"></i><i class="ri-instagram-line"></i><i class="ri-whatsapp-line"></i></div><div class="login-icons"><div class="sign-in">`);
      if (unref(authenticated)) {
        _push(ssrRenderComponent(_component_nuxt_link, { class: "ar-link" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<i class="ri-user-fill"${_scopeId}>Logout</i>`);
            } else {
              return [
                createVNode("i", {
                  class: "ri-user-fill",
                  onClick: withModifiers(unref(authStore).logout, ["prevent"])
                }, "Logout", 8, ["onClick"])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(ssrRenderComponent(_component_nuxt_link, {
          to: "/AuthLogin",
          class: "ar-link"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<i class="ri-user-fill"${_scopeId}></i>Login/Sign-Up `);
            } else {
              return [
                createVNode("i", { class: "ri-user-fill" }),
                createTextVNode("Login/Sign-Up ")
              ];
            }
          }),
          _: 1
        }, _parent));
      }
      _push(`</div>`);
      _push(ssrRenderComponent(_component_el_badge, {
        class: "item",
        value: unref(cartStore).cartList.length
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_el_button, {
              circle: "",
              onClick: () => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))({ path: "/cart" })
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<i class="ri-shopping-cart-line"${_scopeId2}></i>`);
                } else {
                  return [
                    createVNode("i", { class: "ri-shopping-cart-line" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_el_button, {
                circle: "",
                onClick: () => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))({ path: "/cart" })
              }, {
                default: withCtx(() => [
                  createVNode("i", { class: "ri-shopping-cart-line" })
                ]),
                _: 1
              }, 8, ["onClick"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/topbar.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  const _component_el_menu = ElMenu;
  const _component_el_menu_item = ElMenuItem;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "navbar" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_el_menu, {
    mode: "horizontal",
    router: true,
    ellipsis: false,
    "default-active": "/"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_el_menu_item, { index: "ProductsList" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Our Products`);
            } else {
              return [
                createTextVNode("Our Products")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_el_menu_item, { index: "AboutUs" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`About`);
            } else {
              return [
                createTextVNode("About")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_el_menu_item, { index: "3" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Gift Hampers`);
            } else {
              return [
                createTextVNode("Gift Hampers")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_el_menu_item, { index: "/" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<img${ssrRenderAttr("src", _imports_0)} alt="TFH Logo" fit="cover"${_scopeId2}>`);
            } else {
              return [
                createVNode("img", {
                  src: _imports_0,
                  alt: "TFH Logo",
                  fit: "cover"
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_el_menu_item, { index: "4" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Gallery`);
            } else {
              return [
                createTextVNode("Gallery")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_el_menu_item, { index: "5" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Blog`);
            } else {
              return [
                createTextVNode("Blog")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_el_menu_item, { index: "6" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Know Your Farmer`);
            } else {
              return [
                createTextVNode("Know Your Farmer")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_el_menu_item, { index: "ProductsList" }, {
            default: withCtx(() => [
              createTextVNode("Our Products")
            ]),
            _: 1
          }),
          createVNode(_component_el_menu_item, { index: "AboutUs" }, {
            default: withCtx(() => [
              createTextVNode("About")
            ]),
            _: 1
          }),
          createVNode(_component_el_menu_item, { index: "3" }, {
            default: withCtx(() => [
              createTextVNode("Gift Hampers")
            ]),
            _: 1
          }),
          createVNode(_component_el_menu_item, { index: "/" }, {
            default: withCtx(() => [
              createVNode("img", {
                src: _imports_0,
                alt: "TFH Logo",
                fit: "cover"
              })
            ]),
            _: 1
          }),
          createVNode(_component_el_menu_item, { index: "4" }, {
            default: withCtx(() => [
              createTextVNode("Gallery")
            ]),
            _: 1
          }),
          createVNode(_component_el_menu_item, { index: "5" }, {
            default: withCtx(() => [
              createTextVNode("Blog")
            ]),
            _: 1
          }),
          createVNode(_component_el_menu_item, { index: "6" }, {
            default: withCtx(() => [
              createTextVNode("Know Your Farmer")
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/navbar.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "footer" }, _attrs))} data-v-32537c3f><div class="container" data-v-32537c3f><div class="row" data-v-32537c3f><div class="footer-col" data-v-32537c3f><h4 data-v-32537c3f>company</h4><ul data-v-32537c3f><li data-v-32537c3f><a href="#" data-v-32537c3f>about us</a></li><li data-v-32537c3f><a href="#" data-v-32537c3f>our services</a></li><li data-v-32537c3f><a href="#" data-v-32537c3f>privacy policy</a></li><li data-v-32537c3f><a href="#" data-v-32537c3f>affiliate program</a></li></ul></div><div class="footer-col" data-v-32537c3f><h4 data-v-32537c3f>get help</h4><ul data-v-32537c3f><li data-v-32537c3f><a href="#" data-v-32537c3f>FAQ</a></li><li data-v-32537c3f><a href="#" data-v-32537c3f>shipping</a></li><li data-v-32537c3f><a href="#" data-v-32537c3f>returns</a></li><li data-v-32537c3f><a href="#" data-v-32537c3f>order status</a></li><li data-v-32537c3f><a href="#" data-v-32537c3f>payment options</a></li></ul></div><div class="footer-col" data-v-32537c3f><h4 data-v-32537c3f>online shop</h4><ul data-v-32537c3f><li data-v-32537c3f><a href="#" data-v-32537c3f>Spices</a></li><li data-v-32537c3f><a href="#" data-v-32537c3f>Dry Fruits</a></li><li data-v-32537c3f><a href="#" data-v-32537c3f>Gift Hampers</a></li><li data-v-32537c3f><a href="#" data-v-32537c3f>Honey</a></li></ul></div><div class="footer-col" data-v-32537c3f><h4 data-v-32537c3f>follow us</h4><div class="social-links" data-v-32537c3f><a href="#" data-v-32537c3f><i class="ri-facebook-fill" data-v-32537c3f></i></a><a href="#" data-v-32537c3f><i class="ri-twitter-x-line" data-v-32537c3f></i></a><a href="#" data-v-32537c3f><i class="ri-instagram-line" data-v-32537c3f></i></a><a href="#" data-v-32537c3f><i class="ri-whatsapp-fill" data-v-32537c3f></i></a></div></div></div></div></footer>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/navFooter.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-32537c3f"]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_topbar = _sfc_main$3;
  const _component_navbar = __nuxt_component_1;
  const _component_navFooter = __nuxt_component_2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "layout" }, _attrs))} data-v-78ac33fa><div class="navbar-section" data-v-78ac33fa>`);
  _push(ssrRenderComponent(_component_topbar, null, null, _parent));
  _push(ssrRenderComponent(_component_navbar, null, null, _parent));
  _push(`</div>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`<div class="whats-app-container" data-v-78ac33fa><a href="https://wa.me/8281560102" data-v-78ac33fa><i class="ri-whatsapp-line" data-v-78ac33fa></i></a></div>`);
  _push(ssrRenderComponent(_component_navFooter, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-78ac33fa"]]);

export { _default as default };
//# sourceMappingURL=default-DkG14gHn.mjs.map
