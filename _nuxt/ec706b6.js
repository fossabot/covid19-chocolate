(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{404:function(e,t){e.exports=function(component,e){var t="function"==typeof component.exports?component.exports.extendOptions:component.options;for(var i in"function"==typeof component.exports&&(t.directives=component.exports.options.directives),t.directives=t.directives||{},e)t.directives[i]=t.directives[i]||e[i]}},438:function(e,t,o){"use strict";var n=o(1);var r={inserted:function(e,t){var o=(t.modifiers||{}).self,r=void 0!==o&&o,l=t.value,c="object"===Object(n.a)(l)&&l.options||{passive:!0},d="function"==typeof l||"handleEvent"in l?l:l.handler,v=r?e:t.arg?document.querySelector(t.arg):window;v&&(v.addEventListener("scroll",d,c),e._onScroll={handler:d,options:c,target:r?void 0:v})},unbind:function(e){if(e._onScroll){var t=e._onScroll,o=t.handler,n=t.options,r=t.target;(void 0===r?e:r).removeEventListener("scroll",o,n),delete e._onScroll}}};t.a=r},858:function(e,t,o){"use strict";o.r(t);var n={data:function(){return{showCardsTab:!1}},methods:{onScroll:function(){this.showCardsTab=!0}},head:function(){return{title:this.$t("市内の最新感染動向")}}},r=o(9),l=o(404),c=o.n(l),d=o(438),component=Object(r.a)(n,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{directives:[{name:"scroll",rawName:"v-scroll",value:e.onScroll,expression:"onScroll"}]},[o("site-top-upper"),e._v(" "),e.$vuetify.breakpoint.smAndUp||e.showCardsTab?o("lazy-cards-tab"):e._e()],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{SiteTopUpper:o(839).default}),c()(component,{Scroll:d.a})}}]);