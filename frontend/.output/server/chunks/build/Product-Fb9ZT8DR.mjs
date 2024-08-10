import { _ as _export_sfc, u as useRoute, j as ElImage, g as ElButton, p as ElRadioGroup, q as ElRadio, k as ElInputNumber, m as useRuntimeConfig } from './server.mjs';
import { ref, unref, mergeProps, withCtx, createVNode, isRef, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
import { u as useProductStore } from './productStore-CyD2hctc.mjs';
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
  __name: "Product",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRoute();
    const config = useRuntimeConfig();
    useProductStore();
    const productById = ref(null);
    const currImage = ref("");
    const quantityRadio = ref("1");
    const count = ref(1);
    const imageListRef = ref(null);
    router.query.id;
    const imageUrl = (product) => {
      return `${config.public.imageBase + product.download_url}`;
    };
    const scrollNext = () => {
      if (imageListRef.value) {
        imageListRef.value.scrollBy({ left: 200, behavior: "smooth" });
      }
    };
    const scrollPrev = () => {
      if (imageListRef.value) {
        imageListRef.value.scrollBy({ left: -200, behavior: "smooth" });
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_image = ElImage;
      const _component_el_button = ElButton;
      const _component_el_radio_group = ElRadioGroup;
      const _component_el_radio = ElRadio;
      const _component_el_input_number = ElInputNumber;
      if (unref(productById)) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "wrapper" }, _attrs))} data-v-1e2e4cec><div class="images-wrapper" data-v-1e2e4cec><div class="image-container" data-v-1e2e4cec>`);
        _push(ssrRenderComponent(_component_el_image, {
          src: unref(currImage),
          alt: "product image",
          fit: "cover"
        }, null, _parent));
        _push(`</div><div class="image-list-container" data-v-1e2e4cec>`);
        _push(ssrRenderComponent(_component_el_button, {
          onClick: scrollPrev,
          round: "",
          style: { "left": "-20px" }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<i class="ri-arrow-left-line" data-v-1e2e4cec${_scopeId}></i>`);
            } else {
              return [
                createVNode("i", { class: "ri-arrow-left-line" })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<div class="image-list" data-v-1e2e4cec><!--[-->`);
        ssrRenderList(unref(productById).images, (productImg, index) => {
          _push(ssrRenderComponent(_component_el_image, {
            src: imageUrl(productImg),
            alt: "Slide Image",
            style: { "width": "100px", "height": "100px" },
            onClick: () => currImage.value = imageUrl(
              unref(productById).images[index]
            ),
            fit: "cover"
          }, null, _parent));
        });
        _push(`<!--]--></div>`);
        _push(ssrRenderComponent(_component_el_button, {
          onClick: scrollNext,
          round: "",
          style: { "right": "-20px" }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<i class="ri-arrow-right-line" data-v-1e2e4cec${_scopeId}></i>`);
            } else {
              return [
                createVNode("i", { class: "ri-arrow-right-line" })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div><div class="details-container" data-v-1e2e4cec><div class="title" data-v-1e2e4cec><h1 data-v-1e2e4cec>Product title</h1><h3 data-v-1e2e4cec>\u20B9100 - \u20B9700</h3></div><div class="description" data-v-1e2e4cec> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum praesentium tenetur mollitia ratione rem sequi voluptas maiores, dolor eius dicta deleniti quibusdam quas consequuntur, qui ab aperiam, officiis odio accusamus. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum praesentium tenetur mollitia ratione rem sequi voluptas maiores, dolor eius dicta deleniti quibusdam quas consequuntur, qui ab aperiam, officiis odio accusamus. </div>`);
        _push(ssrRenderComponent(_component_el_radio_group, {
          modelValue: unref(quantityRadio),
          "onUpdate:modelValue": ($event) => isRef(quantityRadio) ? quantityRadio.value = $event : null
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_el_radio, {
                value: "1",
                size: "large",
                border: ""
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`200 g`);
                  } else {
                    return [
                      createTextVNode("200 g")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_el_radio, {
                value: "2",
                size: "large",
                border: ""
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`500g`);
                  } else {
                    return [
                      createTextVNode("500g")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_el_radio, {
                value: "3",
                size: "large",
                border: ""
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`1kg`);
                  } else {
                    return [
                      createTextVNode("1kg")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_el_radio, {
                  value: "1",
                  size: "large",
                  border: ""
                }, {
                  default: withCtx(() => [
                    createTextVNode("200 g")
                  ]),
                  _: 1
                }),
                createVNode(_component_el_radio, {
                  value: "2",
                  size: "large",
                  border: ""
                }, {
                  default: withCtx(() => [
                    createTextVNode("500g")
                  ]),
                  _: 1
                }),
                createVNode(_component_el_radio, {
                  value: "3",
                  size: "large",
                  border: ""
                }, {
                  default: withCtx(() => [
                    createTextVNode("1kg")
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<div class="button-wrapper" data-v-1e2e4cec>`);
        _push(ssrRenderComponent(_component_el_input_number, {
          modelValue: unref(count),
          "onUpdate:modelValue": ($event) => isRef(count) ? count.value = $event : null,
          min: 1,
          max: 10
        }, null, _parent));
        _push(ssrRenderComponent(_component_el_button, {
          type: "success",
          class: "button"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Add to <i class="ri-shopping-cart-line" data-v-1e2e4cec${_scopeId}></i>`);
            } else {
              return [
                createTextVNode("Add to "),
                createVNode("i", { class: "ri-shopping-cart-line" })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Product.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Product = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1e2e4cec"]]);

export { Product as default };
//# sourceMappingURL=Product-Fb9ZT8DR.mjs.map
