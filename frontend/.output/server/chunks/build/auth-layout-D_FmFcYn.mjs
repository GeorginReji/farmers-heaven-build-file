import { _ as _export_sfc, A as ElContainer } from './server.mjs';
import { mergeProps, withCtx, createVNode, renderSlot, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderSlot, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _imports_0 } from './TFH_logo-PR_YcHQm.mjs';
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

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_el_container = ElContainer;
  _push(ssrRenderComponent(_component_el_container, mergeProps({ class: "auth-container" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="auth-content"${_scopeId}><div class="btn-back"${_scopeId}><i class="ri-arrow-left-fill"${_scopeId}></i></div>`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
        _push2(`</div><div class="art-content"${_scopeId}><img${ssrRenderAttr("src", _imports_0)} alt="tgh-logo"${_scopeId}></div>`);
      } else {
        return [
          createVNode("div", { class: "auth-content" }, [
            createVNode("div", {
              onClick: ($event) => _ctx.$router.back(),
              class: "btn-back"
            }, [
              createVNode("i", { class: "ri-arrow-left-fill" })
            ], 8, ["onClick"]),
            renderSlot(_ctx.$slots, "default")
          ]),
          createVNode("div", { class: "art-content" }, [
            createVNode("img", {
              src: _imports_0,
              alt: "tgh-logo"
            })
          ])
        ];
      }
    }),
    _: 3
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/auth-layout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const authLayout = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { authLayout as default };
//# sourceMappingURL=auth-layout-D_FmFcYn.mjs.map
