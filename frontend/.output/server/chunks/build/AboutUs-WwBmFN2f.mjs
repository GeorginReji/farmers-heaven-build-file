import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { _ as _export_sfc, E as ElCarousel, a as ElCarouselItem, b as ElCard, c as ElRate, d as ElDivider } from './server.mjs';
import { ref, mergeProps, unref, withCtx, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import 'vue-bundle-renderer/runtime';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
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

const _imports_0 = "" + buildAssetsURL("male-profile-icon.DM7DaLyT.png");
const _sfc_main = {
  __name: "AboutUs",
  __ssrInlineRender: true,
  setup(__props) {
    const testimonials = ref([
      {
        id: 1,
        name: "Kendrik Lamar",
        rating: 5
      },
      {
        id: 2,
        name: "J Cole",
        rating: 5
      },
      {
        id: 3,
        name: "Tupac",
        rating: 4
      },
      {
        id: 4,
        name: "Eminem",
        rating: 4
      }
    ]);
    const carouselType = ref("card");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_carousel = ElCarousel;
      const _component_el_carousel_item = ElCarouselItem;
      const _component_el_card = ElCard;
      const _component_el_rate = ElRate;
      const _component_el_divider = ElDivider;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "main" }, _attrs))} data-v-8f2cbb04><h1 data-v-8f2cbb04>About Us</h1><div class="container" data-v-8f2cbb04><div class="text-container" data-v-8f2cbb04><h3 data-v-8f2cbb04>Sub Heading 1</h3> Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quos architecto eos qui culpa, nesciunt, accusamus placeat nobis sapiente labore doloremque sed facere vel consequatur quae minus. Vel veniam totam amet quis aut, atque voluptatibus nam sequi laborum cupiditate. Non, facere eaque. Porro quasi iste voluptatibus officiis placeat dignissimos excepturi consectetur aliquam? Magnam voluptatum officia dolore ducimus dicta quos dignissimos quaerat ad, vitae illo? Laudantium quo sed beatae minima et animi ipsum dicta vitae. Voluptatum fugit minus iste similique architecto saepe repellat delectus maxime accusamus, ullam nulla odio laborum nihil, expedita ab autem fugiat dignissimos! Rerum ipsa a quos mollitia. </div><div class="image-container" data-v-8f2cbb04><img src="https://images.unsplash.com/photo-1591801058986-9e28e68670f7?q=80&amp;w=1528&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" data-v-8f2cbb04></div></div><div class="container2" data-v-8f2cbb04><div class="text-container" data-v-8f2cbb04><h3 data-v-8f2cbb04>Sub Heading 2</h3> Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quos architecto eos qui culpa, nesciunt, accusamus placeat nobis sapiente labore doloremque sed facere vel consequatur quae minus. Vel veniam totam amet quis aut, atque voluptatibus nam sequi laborum cupiditate. Non, facere eaque. Porro quasi iste voluptatibus officiis placeat dignissimos excepturi consectetur aliquam? Magnam voluptatum officia dolore ducimus dicta quos dignissimos quaerat ad, vitae illo? Laudantium quo sed beatae minima et animi ipsum dicta vitae. Voluptatum fugit minus iste similique architecto saepe repellat delectus maxime accusamus, ullam nulla odio laborum nihil, expedita ab autem fugiat dignissimos! Rerum ipsa a quos mollitia. </div><div class="image-container" data-v-8f2cbb04><img src="https://images.unsplash.com/photo-1591801058986-9e28e68670f7?q=80&amp;w=1528&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" data-v-8f2cbb04></div></div><div class="container" data-v-8f2cbb04><div class="text-container" data-v-8f2cbb04><h3 data-v-8f2cbb04>Sub Heading 3</h3> Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quos architecto eos qui culpa, nesciunt, accusamus placeat nobis sapiente labore doloremque sed facere vel consequatur quae minus. Vel veniam totam amet quis aut, atque voluptatibus nam sequi laborum cupiditate. Non, facere eaque. Porro quasi iste voluptatibus officiis placeat dignissimos excepturi consectetur aliquam? Magnam voluptatum officia dolore ducimus dicta quos dignissimos quaerat ad, vitae illo? Laudantium quo sed beatae minima et animi ipsum dicta vitae. Voluptatum fugit minus iste similique architecto saepe repellat delectus maxime accusamus, ullam nulla odio laborum nihil, expedita ab autem fugiat dignissimos! Rerum ipsa a quos mollitia. </div><div class="image-container" data-v-8f2cbb04><img src="https://images.unsplash.com/photo-1591801058986-9e28e68670f7?q=80&amp;w=1528&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" data-v-8f2cbb04></div></div><div class="testimonials" data-v-8f2cbb04><h2 data-v-8f2cbb04>Our customers testimonials</h2>`);
      _push(ssrRenderComponent(_component_el_carousel, {
        interval: 4e3,
        type: unref(carouselType)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(testimonials), (item) => {
              _push2(ssrRenderComponent(_component_el_carousel_item, {
                key: item.id
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_el_card, {
                      shadow: "hover",
                      justify: "center"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="profile" data-v-8f2cbb04${_scopeId3}><img${ssrRenderAttr("src", _imports_0)} alt="" data-v-8f2cbb04${_scopeId3}></div><div class="name" data-v-8f2cbb04${_scopeId3}><span data-v-8f2cbb04${_scopeId3}>${ssrInterpolate(item.name)}</span><i class="ri-instagram-fill" data-v-8f2cbb04${_scopeId3}></i></div><div class="rating" data-v-8f2cbb04${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_el_rate, {
                            modelValue: item.rating,
                            "onUpdate:modelValue": ($event) => item.rating = $event,
                            disabled: "",
                            size: "large"
                          }, null, _parent4, _scopeId3));
                          _push4(`</div>`);
                          _push4(ssrRenderComponent(_component_el_divider, null, null, _parent4, _scopeId3));
                          _push4(`<div class="review" data-v-8f2cbb04${_scopeId3}><p data-v-8f2cbb04${_scopeId3}> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum neque tempore pariatur molestiae quod impedit perspiciatis assumenda, laudantium esse enim. Enim repellat, velit aspernatur illo ad ipsam perspiciatis et quam! </p></div>`);
                        } else {
                          return [
                            createVNode("div", { class: "profile" }, [
                              createVNode("img", {
                                src: _imports_0,
                                alt: ""
                              })
                            ]),
                            createVNode("div", { class: "name" }, [
                              createVNode("span", null, toDisplayString(item.name), 1),
                              createVNode("i", { class: "ri-instagram-fill" })
                            ]),
                            createVNode("div", { class: "rating" }, [
                              createVNode(_component_el_rate, {
                                modelValue: item.rating,
                                "onUpdate:modelValue": ($event) => item.rating = $event,
                                disabled: "",
                                size: "large"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            createVNode(_component_el_divider),
                            createVNode("div", { class: "review" }, [
                              createVNode("p", null, " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum neque tempore pariatur molestiae quod impedit perspiciatis assumenda, laudantium esse enim. Enim repellat, velit aspernatur illo ad ipsam perspiciatis et quam! ")
                            ])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_el_card, {
                        shadow: "hover",
                        justify: "center"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "profile" }, [
                            createVNode("img", {
                              src: _imports_0,
                              alt: ""
                            })
                          ]),
                          createVNode("div", { class: "name" }, [
                            createVNode("span", null, toDisplayString(item.name), 1),
                            createVNode("i", { class: "ri-instagram-fill" })
                          ]),
                          createVNode("div", { class: "rating" }, [
                            createVNode(_component_el_rate, {
                              modelValue: item.rating,
                              "onUpdate:modelValue": ($event) => item.rating = $event,
                              disabled: "",
                              size: "large"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          createVNode(_component_el_divider),
                          createVNode("div", { class: "review" }, [
                            createVNode("p", null, " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum neque tempore pariatur molestiae quod impedit perspiciatis assumenda, laudantium esse enim. Enim repellat, velit aspernatur illo ad ipsam perspiciatis et quam! ")
                          ])
                        ]),
                        _: 2
                      }, 1024)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(testimonials), (item) => {
                return openBlock(), createBlock(_component_el_carousel_item, {
                  key: item.id
                }, {
                  default: withCtx(() => [
                    createVNode(_component_el_card, {
                      shadow: "hover",
                      justify: "center"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "profile" }, [
                          createVNode("img", {
                            src: _imports_0,
                            alt: ""
                          })
                        ]),
                        createVNode("div", { class: "name" }, [
                          createVNode("span", null, toDisplayString(item.name), 1),
                          createVNode("i", { class: "ri-instagram-fill" })
                        ]),
                        createVNode("div", { class: "rating" }, [
                          createVNode(_component_el_rate, {
                            modelValue: item.rating,
                            "onUpdate:modelValue": ($event) => item.rating = $event,
                            disabled: "",
                            size: "large"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        createVNode(_component_el_divider),
                        createVNode("div", { class: "review" }, [
                          createVNode("p", null, " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum neque tempore pariatur molestiae quod impedit perspiciatis assumenda, laudantium esse enim. Enim repellat, velit aspernatur illo ad ipsam perspiciatis et quam! ")
                        ])
                      ]),
                      _: 2
                    }, 1024)
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
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/AboutUs.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const AboutUs = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8f2cbb04"]]);

export { AboutUs as default };
//# sourceMappingURL=AboutUs-WwBmFN2f.mjs.map
