(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{397:function(t,e,n){var content=n(442);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(31).default)("790bc166",content,!0,{sourceMap:!1})},411:function(t,e,n){"use strict";n.r(e);n(47),n(49);var r=n(0).default.extend({props:{value:{type:String,required:!0},unit:{type:Object,required:!0},bold:{type:Boolean,required:!0}},data:function(){return{currentLocaleCode:this.$root.$i18n.locale}},computed:{translatedUnit:function(){var t=this.unit,text=t.text,e=t.translatable,n=t.except;return e?n&&n.includes(String(this.currentLocaleCode))?null:this.$t(t.text):text}}}),l=n(441),o=n(9);var component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{class:t.$style.parent},[t.bold?n("span",[n("strong",[t._v(t._s(t.value))])]):n("span",[t._v(t._s(t.value))]),t._v(" "),t.translatedUnit?n("span",[t._v(t._s(t.translatedUnit))]):t._e()])}),[],!1,(function(t){this.$style=l.default.locals||l.default}),null,null);e.default=component.exports},441:function(t,e,n){"use strict";var r=n(397),l=n.n(r);n.d(e,"default",(function(){return l.a}))},442:function(t,e,n){var r=n(30)(!1);r.push([t.i,".parent_3nElz{margin-left:10px;text-align:right;white-space:nowrap;flex-shrink:1}",""]),r.locals={parent:"parent_3nElz"},t.exports=r}}]);