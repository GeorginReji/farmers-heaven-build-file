import { u as useRoute, h as useRouter, s as storeToRefs, v as vLoading } from './server.mjs';
import { mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrGetDirectiveProps } from 'vue/server-renderer';
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
  __name: "callback",
  __ssrInlineRender: true,
  setup(__props) {
    const authStore = useAuthStore();
    const route = useRoute();
    const router = useRouter();
    const { isLoading } = storeToRefs(authStore);
    console.log("loading state", isLoading.value);
    const init = async () => {
      if (await authStore.autUser(route.query.code)) {
        router.push("/");
      } else {
        router.push("/AuthLogin");
      }
    };
    init();
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_loading = vLoading;
      _push(`<div${ssrRenderAttrs(mergeProps({ style: { "width": "100%", "height": "100vh" } }, _attrs, ssrGetDirectiveProps(_ctx, _directive_loading, unref(isLoading), void 0, {
        fullscreen: true,
        lock: true
      })))}></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/callback.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=callback-Co2hXhyY.mjs.map
