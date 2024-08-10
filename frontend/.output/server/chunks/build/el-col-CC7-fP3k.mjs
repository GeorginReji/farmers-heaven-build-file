import { m as useRuntimeConfig, b as ElCard, j as ElImage, g as ElButton } from './server.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link--8nTaV_a.mjs';
import { computed, mergeProps, withCtx, unref, createVNode, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { u as useCartStore } from './cartStore-7tJZ7JS6.mjs';

const _sfc_main = {
  __name: "ProductCard",
  __ssrInlineRender: true,
  props: {
    product: Object
  },
  setup(__props) {
    const cartStore = useCartStore();
    const config = useRuntimeConfig();
    const props = __props;
    const imageUrl = computed(() => {
      return `${config.public.imageBase + props.product.thumbnail.download_url}`;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_card = ElCard;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_el_image = ElImage;
      const _component_el_button = ElButton;
      if (props.product) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "product-card-wrapper" }, _attrs))}>`);
        _push(ssrRenderComponent(_component_el_card, { shadow: "hover" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_NuxtLink, {
                to: { name: "Product", query: { id: props.product.id } }
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_el_image, {
                      src: unref(imageUrl),
                      fit: "cover"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_el_image, {
                        src: unref(imageUrl),
                        fit: "cover"
                      }, null, 8, ["src"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<div class="card-content"${_scopeId}><div class="product-details"${_scopeId}><div class="product-name"${_scopeId}><span${_scopeId}>${ssrInterpolate(__props.product.name)}</span></div><p class="description"${_scopeId}>${ssrInterpolate(props.product.description)}</p></div><div class="btn-price"${_scopeId}><span${_scopeId}>\u20B9250</span><div class="bottom"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_el_button, {
                type: "success",
                class: "button",
                onClick: ($event) => unref(cartStore).addItem(props.product, 1)
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`Add to <i class="ri-shopping-cart-line"${_scopeId2}></i>`);
                  } else {
                    return [
                      createTextVNode("Add to "),
                      createVNode("i", { class: "ri-shopping-cart-line" })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div></div></div>`);
            } else {
              return [
                createVNode(_component_NuxtLink, {
                  to: { name: "Product", query: { id: props.product.id } }
                }, {
                  default: withCtx(() => [
                    createVNode(_component_el_image, {
                      src: unref(imageUrl),
                      fit: "cover"
                    }, null, 8, ["src"])
                  ]),
                  _: 1
                }, 8, ["to"]),
                createVNode("div", { class: "card-content" }, [
                  createVNode("div", { class: "product-details" }, [
                    createVNode("div", { class: "product-name" }, [
                      createVNode("span", null, toDisplayString(__props.product.name), 1)
                    ]),
                    createVNode("p", { class: "description" }, toDisplayString(props.product.description), 1)
                  ]),
                  createVNode("div", { class: "btn-price" }, [
                    createVNode("span", null, "\u20B9250"),
                    createVNode("div", { class: "bottom" }, [
                      createVNode(_component_el_button, {
                        type: "success",
                        class: "button",
                        onClick: ($event) => unref(cartStore).addItem(props.product, 1)
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Add to "),
                          createVNode("i", { class: "ri-shopping-cart-line" })
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ])
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProductCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=el-col-CC7-fP3k.mjs.map
