(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{423:function(t,e,r){"use strict";r(20),r(26),r(32),r(36);var n=r(6),o=(r(92),r(24),r(34),r(63),r(250),r(16),r(33),r(251),r(252),r(253),r(254),r(255),r(256),r(257),r(258),r(259),r(260),r(261),r(262),r(263),r(37),r(54),r(15),r(69),r(264),r(0)),c=r(173),l=r(18);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var O=["sm","md","lg","xl"],y=O.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),j=O.reduce((function(t,e){return t["offset"+Object(l.B)(e)]={type:[String,Number],default:null},t}),{}),v=O.reduce((function(t,e){return t["order"+Object(l.B)(e)]={type:[String,Number],default:null},t}),{}),h={col:Object.keys(y),offset:Object.keys(j),order:Object.keys(v)};function m(t,e,r){var n=t;if(null!=r&&!1!==r){if(e){var o=e.replace(t,"");n+="-".concat(o)}return"col"!==t||""!==r&&!0!==r?(n+="-".concat(r)).toLowerCase():n.toLowerCase()}}var w=new Map;e.a=o.default.extend({name:"v-col",functional:!0,props:d(d(d(d({cols:{type:[Boolean,String,Number],default:!1}},y),{},{offset:{type:[String,Number],default:null}},j),{},{order:{type:[String,Number],default:null}},v),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var r=e.props,data=e.data,o=e.children,l=(e.parent,"");for(var f in r)l+=String(r[f]);var d=w.get(l);return d||function(){var t,e;for(e in d=[],h)h[e].forEach((function(t){var n=r[t],o=m(e,t,n);o&&d.push(o)}));var o=d.some((function(t){return t.startsWith("col-")}));d.push((t={col:!o||!r.cols},Object(n.a)(t,"col-".concat(r.cols),r.cols),Object(n.a)(t,"offset-".concat(r.offset),r.offset),Object(n.a)(t,"order-".concat(r.order),r.order),Object(n.a)(t,"align-self-".concat(r.alignSelf),r.alignSelf),t)),w.set(l,d)}(),t(r.tag,Object(c.a)(data,{class:d}),o)}})},597:function(t,e,r){var content=r(722);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(31).default)("f3138556",content,!0,{sourceMap:!1})},721:function(t,e,r){"use strict";r(597)},722:function(t,e,r){var n=r(30)(!1);n.push([t.i,".Consultation[data-v-11f2114e]{padding:3px 18px;min-height:5.5em}",""]),t.exports=n},873:function(t,e,r){"use strict";r.r(e);r(721);var n=r(9),o=r(46),c=r.n(o),l=r(423),component=Object(n.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-col",{attrs:{cols:"12",md:"6"}},[r("lazy-static-info",{staticClass:"Consultation",attrs:{url:"https://www.fukushihoken.metro.tokyo.lg.jp/iryo/kansen/coronasodan.html",text:t.$t("自分や家族の症状に不安や心配があれば\nまずは電話相談をどうぞ"),"btn-text":t.$t("相談の手順を見る")}})],1)}),[],!1,null,"11f2114e",null);e.default=component.exports;c()(component,{VCol:l.a})}}]);