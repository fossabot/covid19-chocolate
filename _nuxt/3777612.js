(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{392:function(t,n,e){"use strict";e.d(n,"a",(function(){return o})),e.d(n,"b",(function(){return r}));var o=new(e(0).default),r="TOGGLE_TAB"},597:function(t,n,e){var content=e(715);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(31).default)("5232a6d6",content,!0,{sourceMap:!1})},714:function(t,n,e){"use strict";e(597)},715:function(t,n,e){var o=e(30)(!1);o.push([t.i,".v-slide-group__content{border-bottom:1px solid #4d4d4d;background:#f8f9fa}.v-tab{top:1px;margin:0 8px;border-style:solid;border-radius:4px 4px 0 0;font-weight:600!important;font-size:1.6rem!important}.v-tab:focus{outline:1px dotted #707070}.v-tab--active{color:#4d4d4d!important;background:#f8f9fa;border-color:#4d4d4d #4d4d4d #f8f9fa;border-width:1px 1px 2px}.v-tab--active:before{background-color:transparent}.v-tab:not(.v-tab--active){color:#085c6c!important;background:#fff;border-color:#085c6c #085c6c #4d4d4d;border-width:1px}.v-tab:not(.v-tab--active):hover{color:#fff!important;background:#085c6c}.v-tab:not(.v-tab--active) .TabIcon{color:inherit!important}.v-tabs-items{background-color:transparent!important}@media screen and (max-width:768px){.v-slide-group__content,.v-tab{width:100%}.v-tab{font-size:2.0833333333vw!important;font-weight:400!important;flex:1 1 auto;padding:0 8px!important}}@media screen and (max-width:600px){.v-tab{font-size:3.3333333333vw!important;padding:0 4px!important}.TabIcon{font-size:4vw!important}}",""]),t.exports=o},863:function(t,n,e){"use strict";e.r(n);e(16),e(33),e(37);var o=e(47),r=e(0),c=e(392),d=function(){return e.e(77).then(e.bind(null,841))},l=function(){return e.e(78).then(e.bind(null,842))},f=r.default.extend({components:{CardsMonitoring:d,CardsReference:l},data:function(){return{tab:null,items:[{label:this.$t("モニタリング項目"),component:d},{label:this.$t("その他 参考指標"),component:l}],mdiChartTimelineVariant:o.d}},methods:{change:function(){c.a.$emit(c.b)}}}),m=(e(714),e(9)),v=e(46),h=e.n(v),x=e(354),w=e(848),_=e(875),k=e(873),T=e(843),V=e(405),I=e.n(V),y=e(409),component=Object(m.a)(f,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-tabs",{attrs:{"hide-slider":""},model:{value:t.tab,callback:function(n){t.tab=n},expression:"tab"}},[t._l(t.items,(function(n,i){return e("v-tab",{directives:[{name:"ripple",rawName:"v-ripple",value:!1,expression:"false"}],key:i,attrs:{href:"#tab-"+i},on:{click:t.change}},[e("v-icon",{staticClass:"TabIcon"},[t._v(t._s(t.mdiChartTimelineVariant))]),t._v("\n    "+t._s(n.label)+"\n  ")],1)})),t._v(" "),e("v-tabs-items",{attrs:{touchless:""},model:{value:t.tab,callback:function(n){t.tab=n},expression:"tab"}},t._l(t.items,(function(t,i){return e("v-tab-item",{key:i,attrs:{value:"tab-"+i}},[e(t.component,{tag:"lazy-component"})],1)})),1)],2)}),[],!1,null,null,null);n.default=component.exports;h()(component,{VIcon:x.a,VTab:w.a,VTabItem:_.a,VTabs:k.a,VTabsItems:T.a}),I()(component,{Ripple:y.a})}}]);