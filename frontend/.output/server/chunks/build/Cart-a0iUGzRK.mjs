import { b as ElCard, j as ElImage, k as ElInputNumber, g as ElButton, l as ElText, d as ElDivider, m as useRuntimeConfig } from './server.mjs';
import { computed, mergeProps, unref, withCtx, createVNode, toDisplayString, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderList, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
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
import './authStore-ajW-SPS-.mjs';
import './utils-U-D2mQHl.mjs';

const _sfc_main = {
  __name: "Cart",
  __ssrInlineRender: true,
  setup(__props) {
    const config = useRuntimeConfig();
    const cartStore = useCartStore();
    const imageUrl = (productImgUrl) => {
      return `${config.public.imageBase + productImgUrl}`;
    };
    const updateItemCount = (productID, count) => {
      cartStore.updateItemCount(productID, count);
    };
    const subTotal = computed(() => {
      let subtotal = 0;
      cartStore.cartList.forEach((item) => subtotal += item.price * item.count);
      return subtotal;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_card = ElCard;
      const _component_el_image = ElImage;
      const _component_el_input_number = ElInputNumber;
      const _component_el_button = ElButton;
      const _component_el_text = ElText;
      const _component_el_divider = ElDivider;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "cart-wrapper" }, _attrs))}><div class="cart-table"><div class="heading"><h1>Shopping Cart</h1><span><i class="ri-arrow-right-line"></i> Continue Shopping </span></div>`);
      if (unref(cartStore).cartList.length) {
        _push(`<div style="${ssrRenderStyle({ "width": "100%" })}"><!--[-->`);
        ssrRenderList(unref(cartStore).cartList, (product, index) => {
          _push(ssrRenderComponent(_component_el_card, null, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="product-info"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_el_image, {
                  style: { "width": "100px", "height": "100px" },
                  src: imageUrl(product.thumbnail.download_url),
                  alt: "product image",
                  fit: "cover"
                }, null, _parent2, _scopeId));
                _push2(`<div class="name"${_scopeId}><p${_scopeId}>${ssrInterpolate(product.name)}</p><span${_scopeId}>Quantity: 500g</span></div>`);
                _push2(ssrRenderComponent(_component_el_input_number, {
                  modelValue: product.count,
                  "onUpdate:modelValue": [($event) => product.count = $event, ($event) => updateItemCount(product.id, $event)],
                  min: 1,
                  max: 10
                }, null, _parent2, _scopeId));
                _push2(`<h3${_scopeId}>${ssrInterpolate(`\u20B9${product.price * product.count}`)}</h3>`);
                _push2(ssrRenderComponent(_component_el_button, {
                  circle: "",
                  onClick: ($event) => unref(cartStore).removeItem(product.id)
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<i class="ri-delete-bin-line"${_scopeId2}></i>`);
                    } else {
                      return [
                        createVNode("i", { class: "ri-delete-bin-line" })
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`</div>`);
              } else {
                return [
                  createVNode("div", { class: "product-info" }, [
                    createVNode(_component_el_image, {
                      style: { "width": "100px", "height": "100px" },
                      src: imageUrl(product.thumbnail.download_url),
                      alt: "product image",
                      fit: "cover"
                    }, null, 8, ["src"]),
                    createVNode("div", { class: "name" }, [
                      createVNode("p", null, toDisplayString(product.name), 1),
                      createVNode("span", null, "Quantity: 500g")
                    ]),
                    createVNode(_component_el_input_number, {
                      modelValue: product.count,
                      "onUpdate:modelValue": [($event) => product.count = $event, ($event) => updateItemCount(product.id, $event)],
                      min: 1,
                      max: 10
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode("h3", null, toDisplayString(`\u20B9${product.price * product.count}`), 1),
                    createVNode(_component_el_button, {
                      circle: "",
                      onClick: ($event) => unref(cartStore).removeItem(product.id)
                    }, {
                      default: withCtx(() => [
                        createVNode("i", { class: "ri-delete-bin-line" })
                      ]),
                      _: 2
                    }, 1032, ["onClick"])
                  ])
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></div>`);
      } else {
        _push(ssrRenderComponent(_component_el_text, {
          size: "large",
          tag: "b"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Cart is Empty`);
            } else {
              return [
                createTextVNode("Cart is Empty")
              ];
            }
          }),
          _: 1
        }, _parent));
      }
      _push(`</div>`);
      if (unref(cartStore).cartList.length) {
        _push(ssrRenderComponent(_component_el_card, { class: "cart-summary" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<h2${_scopeId}>Order Summary</h2><div class="row"${_scopeId}><p${_scopeId}>Subtotal</p><h3${_scopeId}>${ssrInterpolate(`\u20B9${unref(subTotal)}`)}</h3></div><div class="row"${_scopeId}><p${_scopeId}>Delivery Fee</p><h3${_scopeId}>\u20B9100</h3></div><div class="row"${_scopeId}><p${_scopeId}>GST</p><h3${_scopeId}>\u20B910</h3></div>`);
              _push2(ssrRenderComponent(_component_el_divider, null, null, _parent2, _scopeId));
              _push2(`<div class="row"${_scopeId}><p${_scopeId}>Total</p><h3${_scopeId}>\u20B9810</h3></div>`);
              _push2(ssrRenderComponent(_component_el_button, {
                style: { "margin": "0 auto" },
                type: "success"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Proceed to Checkout`);
                  } else {
                    return [
                      createTextVNode("Proceed to Checkout")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode("h2", null, "Order Summary"),
                createVNode("div", { class: "row" }, [
                  createVNode("p", null, "Subtotal"),
                  createVNode("h3", null, toDisplayString(`\u20B9${unref(subTotal)}`), 1)
                ]),
                createVNode("div", { class: "row" }, [
                  createVNode("p", null, "Delivery Fee"),
                  createVNode("h3", null, "\u20B9100")
                ]),
                createVNode("div", { class: "row" }, [
                  createVNode("p", null, "GST"),
                  createVNode("h3", null, "\u20B910")
                ]),
                createVNode(_component_el_divider),
                createVNode("div", { class: "row" }, [
                  createVNode("p", null, "Total"),
                  createVNode("h3", null, "\u20B9810")
                ]),
                createVNode(_component_el_button, {
                  style: { "margin": "0 auto" },
                  type: "success"
                }, {
                  default: withCtx(() => [
                    createTextVNode("Proceed to Checkout")
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Cart.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Cart-a0iUGzRK.mjs.map
