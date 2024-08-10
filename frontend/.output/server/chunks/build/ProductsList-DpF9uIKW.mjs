import { _ as _export_sfc, s as storeToRefs, n as ElRow, o as ElCol } from './server.mjs';
import { _ as _sfc_main$1 } from './el-col-CC7-fP3k.mjs';
import { unref, mergeProps, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'vue';
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
import './nuxt-link--8nTaV_a.mjs';
import './cartStore-7tJZ7JS6.mjs';
import './authStore-ajW-SPS-.mjs';
import './utils-U-D2mQHl.mjs';

const _sfc_main = {
  __name: "ProductsList",
  __ssrInlineRender: true,
  setup(__props) {
    const dataStore = useProductStore();
    const { productsList } = storeToRefs(dataStore);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_row = ElRow;
      const _component_el_col = ElCol;
      const _component_ProductCard = _sfc_main$1;
      if (unref(productsList)) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "product-list-wrapper" }, _attrs))} data-v-b4904a2b>`);
        _push(ssrRenderComponent(_component_el_row, { class: "product-row" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(unref(productsList), (product, index) => {
                _push2(ssrRenderComponent(_component_el_col, {
                  span: 4,
                  xs: 12,
                  sm: 12,
                  md: 6,
                  style: { "padding": "0 10px" },
                  key: product.id
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_ProductCard, { product }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_component_ProductCard, { product }, null, 8, ["product"])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList(unref(productsList), (product, index) => {
                  return openBlock(), createBlock(_component_el_col, {
                    span: 4,
                    xs: 12,
                    sm: 12,
                    md: 6,
                    style: { "padding": "0 10px" },
                    key: product.id
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_ProductCard, { product }, null, 8, ["product"])
                    ]),
                    _: 2
                  }, 1024);
                }), 128))
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<div${ssrRenderAttrs(_attrs)} data-v-b4904a2b><h2 data-v-b4904a2b>productList empty</h2></div>`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/ProductsList.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ProductsList = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b4904a2b"]]);

export { ProductsList as default };
//# sourceMappingURL=ProductsList-DpF9uIKW.mjs.map
