import { _ as _export_sfc, d as ElDivider, n as ElRow, o as ElCol, E as ElCarousel, a as ElCarouselItem } from './server.mjs';
import { useSSRContext, withCtx, createVNode, mergeProps, openBlock, createBlock, Fragment, renderList } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderList, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _sfc_main$2 } from './el-col-CC7-fP3k.mjs';
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
import './nuxt-link--8nTaV_a.mjs';
import './authStore-ajW-SPS-.mjs';
import './utils-U-D2mQHl.mjs';

const _sfc_main$1 = {
  data() {
    return {
      currentIndex: 0,
      images: [
        "https://images.unsplash.com/photo-1599536884823-1bc4fb5f9dea?q=80&w=1388&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1592457711340-2412dc07b733?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1506368249639-73a05d6f6488?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      ]
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_el_carousel = ElCarousel;
  const _component_el_carousel_item = ElCarouselItem;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "slider-container" }, _attrs))} data-v-a3171c6e><div class="image-slider" data-v-a3171c6e>`);
  _push(ssrRenderComponent(_component_el_carousel, { "indicator-position": "outside" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<!--[-->`);
        ssrRenderList($data.images, (item, index2) => {
          _push2(ssrRenderComponent(_component_el_carousel_item, { key: index2 }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<div style="${ssrRenderStyle({ backgroundImage: `url(${item})` })}" class="carousel-slide" data-v-a3171c6e${_scopeId2}></div>`);
              } else {
                return [
                  createVNode("div", {
                    style: { backgroundImage: `url(${item})` },
                    class: "carousel-slide"
                  }, null, 4)
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
        });
        _push2(`<!--]-->`);
      } else {
        return [
          (openBlock(true), createBlock(Fragment, null, renderList($data.images, (item, index2) => {
            return openBlock(), createBlock(_component_el_carousel_item, { key: index2 }, {
              default: withCtx(() => [
                createVNode("div", {
                  style: { backgroundImage: `url(${item})` },
                  class: "carousel-slide"
                }, null, 4)
              ]),
              _: 2
            }, 1024);
          }), 128))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_el_carousel, { "indicator-position": "outside" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<!--[-->`);
        ssrRenderList($data.images, (item, index2) => {
          _push2(ssrRenderComponent(_component_el_carousel_item, { key: index2 }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<div style="${ssrRenderStyle({ backgroundImage: `url(${item})` })}" class="carousel-slide" data-v-a3171c6e${_scopeId2}></div>`);
              } else {
                return [
                  createVNode("div", {
                    style: { backgroundImage: `url(${item})` },
                    class: "carousel-slide"
                  }, null, 4)
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
        });
        _push2(`<!--]-->`);
      } else {
        return [
          (openBlock(true), createBlock(Fragment, null, renderList($data.images, (item, index2) => {
            return openBlock(), createBlock(_component_el_carousel_item, { key: index2 }, {
              default: withCtx(() => [
                createVNode("div", {
                  style: { backgroundImage: `url(${item})` },
                  class: "carousel-slide"
                }, null, 4)
              ]),
              _: 2
            }, 1024);
          }), 128))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/slider.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-a3171c6e"]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useCartStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_slider = __nuxt_component_0;
      const _component_el_divider = ElDivider;
      const _component_el_row = ElRow;
      const _component_el_col = ElCol;
      const _component_ProductCard = _sfc_main$2;
      _push(`<!--[--><div class="hero-section" data-v-0fa43de1>`);
      _push(ssrRenderComponent(_component_slider, null, null, _parent));
      _push(`</div><div class="product-row" data-v-0fa43de1>`);
      _push(ssrRenderComponent(_component_el_divider, null, null, _parent));
      _push(`<h2 data-v-0fa43de1>Most ordered products</h2>`);
      _push(ssrRenderComponent(_component_el_row, { gutter: 20 }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_el_col, {
              span: 5,
              xs: 12,
              sm: 6,
              md: 6
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ProductCard, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_ProductCard)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_col, {
              span: 5,
              xs: 12,
              sm: 6,
              md: 6
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ProductCard, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_ProductCard)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_col, {
              span: 5,
              xs: 12,
              sm: 6,
              md: 6
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ProductCard, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_ProductCard)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_col, {
              span: 5,
              xs: 12,
              sm: 6,
              md: 6
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ProductCard, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_ProductCard)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_el_col, {
                span: 5,
                xs: 12,
                sm: 6,
                md: 6
              }, {
                default: withCtx(() => [
                  createVNode(_component_ProductCard)
                ]),
                _: 1
              }),
              createVNode(_component_el_col, {
                span: 5,
                xs: 12,
                sm: 6,
                md: 6
              }, {
                default: withCtx(() => [
                  createVNode(_component_ProductCard)
                ]),
                _: 1
              }),
              createVNode(_component_el_col, {
                span: 5,
                xs: 12,
                sm: 6,
                md: 6
              }, {
                default: withCtx(() => [
                  createVNode(_component_ProductCard)
                ]),
                _: 1
              }),
              createVNode(_component_el_col, {
                span: 5,
                xs: 12,
                sm: 6,
                md: 6
              }, {
                default: withCtx(() => [
                  createVNode(_component_ProductCard)
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0fa43de1"]]);

export { index as default };
//# sourceMappingURL=index-C_QxEXNz.mjs.map
