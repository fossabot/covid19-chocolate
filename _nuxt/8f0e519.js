(window.webpackJsonp=window.webpackJsonp||[]).push([[15,16,17,18,38,46,75],{372:function(t,e,n){var content=n(378);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(31).default)("d3c7a3be",content,!0,{sourceMap:!1})},373:function(t,e,n){var content=n(380);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(31).default)("c3e415e2",content,!0,{sourceMap:!1})},374:function(t,e,n){var content=n(385);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(31).default)("bc739952",content,!0,{sourceMap:!1})},376:function(t,e,n){"use strict";n.r(e);var o=n(0),r=n(85),l=n(381),c=n(382),d=n(134),f=o.default.extend({components:{ExpantionPanel:l.default,Share:c.default,AppLink:r.default},props:{title:{type:String,default:""},titleId:{type:String,default:""},date:{type:String,default:""},headTitle:{type:String,default:""}},head:function(){return this.$route.params.card?{title:this.headTitle?this.headTitle:this.title,meta:[{hid:"og:title",property:"og:title",content:this.headTitle?this.headTitle:this.title},{hid:"description",name:"description",content:this.formattedDateForDisplay},{hid:"og:description",property:"og:description",content:this.formattedDateForDisplay}]}:{}},computed:{formattedDate:function(){return Object(d.c)(this.date)},formattedDateForDisplay:function(){return""!==this.date?this.$d(new Date(this.date),"dateTime"):""},permalink:function(){var t="/cards/".concat(this.titleId);return this.localePath(t)}}}),v=(n(384),n(10)),_=n(62),m=n.n(_),h=n(853),component=Object(v.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"DataView"},[n("div",{staticClass:"DataView-Inner"},[n("div",{staticClass:"DataView-Header",class:t.$slots.dataSetPanel?"with-dataSetPanel":""},[n("h3",{staticClass:"DataView-Title",class:t.$slots.infoPanel?"with-infoPanel":t.$slots.dataSetPanel?"with-dataSetPanel":""},[t._v("\n        "+t._s(t.title)+"\n      ")]),t._v(" "),t.$slots.infoPanel?n("div",{staticClass:"DataView-InfoPanel"},[t._t("infoPanel")],2):t._e(),t._v(" "),t.$slots.dataSetPanel?n("div",{staticClass:"DataView-DataSetPanel"},[t._t("dataSetPanel")],2):t._e()]),t._v(" "),t.$slots.attentionNote?n("div",{staticClass:"DataView-AttentionNote"},[t._t("attentionNote")],2):t._e(),t._v(" "),n("div",{staticClass:"DataView-Description"},[t._t("description")],2),t._v(" "),n("div",[t._t("button")],2),t._v(" "),n("div",{staticClass:"DataView-Content"},[t._t("default")],2),t._v(" "),n("div",{staticClass:"DataView-Description DataView-Description--Additional"},[t._t("additionalDescription")],2),t._v(" "),t.$slots.dataTable?n("expantion-panel",{staticClass:"DataView-ExpantionPanel"},[t._t("dataTable")],2):t._e(),t._v(" "),n("div",{staticClass:"DataView-Space"}),t._v(" "),n("div",{staticClass:"DataView-Footer"},[n("div",[t._t("footer"),t._v(" "),n("div",[n("app-link",{staticClass:"Permalink",attrs:{to:t.permalink}},[n("time",{attrs:{datetime:t.formattedDate}},[t._v("\n              "+t._s(t.$t("{date} 更新",{date:t.formattedDateForDisplay}))+"\n            ")])])],1)],2),t._v(" "),"true"!==t.$route.query.embed?n("share",{staticClass:"Footer-Right",attrs:{title:t.title,"title-id":t.titleId}}):t._e()],1)],1)])}),[],!1,null,null,null);e.default=component.exports;m()(component,{VCard:h.a})},377:function(t,e,n){"use strict";n(372)},378:function(t,e,n){var o=n(30)(!1);o.push([t.i,".v-expansion-panel-header__icon{margin-left:-5px!important}.v-expansion-panel-header__icon .v-icon--left{margin-right:5px}.v-expansion-panel--active .v-expansion-panel-header__icon .v-icon{transform:rotate(90deg)!important}.expansion-panel-text{color:#333;font-size:1.4rem}",""]),t.exports=o},379:function(t,e,n){"use strict";n(373)},380:function(t,e,n){var o=n(30)(!1);o.push([t.i,".DataView-Share-Opener{cursor:pointer;margin:-14px;padding:14px}.DataView-Share-Opener:focus{outline:1px dotted #707070}.DataView-Share-Buttons{position:absolute;padding:8px;right:2rem;bottom:3em;width:260px;border:1px solid #d9d9d9;background:#fff!important;border-radius:8px;text-align:left;z-index:2;font-size:1.6rem}.DataView-Share-Buttons>*{padding:4px 0}.DataView-Share-Buttons .Share-Buttons-header{display:flex;justify-content:space-between;align-items:center;flex-direction:row-reverse}.DataView-Share-Buttons .Close-Button{color:#707070}.DataView-Share-Buttons .Close-Button button{border-radius:50%;border:1px solid #fff}.DataView-Share-Buttons .Close-Button button:focus{border:1px dotted #707070;outline:none}.DataView-Share-Buttons .EmbedCode{position:relative;padding:4px 30px 4px 4px;color:#030303;border:1px solid #eee;border-radius:8px;font-size:1.2rem}.DataView-Share-Buttons .EmbedCode .EmbedCode-Copy{position:absolute;top:.3em;right:.3em;color:#707070}.DataView-Share-Buttons .EmbedCode button{border-radius:50%;border:1px solid #eee}.DataView-Share-Buttons .EmbedCode button:focus{border:1px dotted #707070;outline:none}.DataView-Share-Buttons .Button-list{display:flex;justify-content:space-between}.DataView-Share-Buttons .Button-item{flex:0 0 30%;border-width:1px;border-style:solid;border-radius:4px;margin:4px}.DataView-Share-Buttons .Button-item.line{border-color:#06c755}.DataView-Share-Buttons .Button-item.twitter{border-color:#1da1f2}.DataView-Share-Buttons .Button-item.facebook{border-color:#1877f2}.DataView-Share-Buttons .Button-item .Button{display:flex;flex-direction:column;justify-content:center;align-items:center;padding:16px 8px 8px}.DataView-Share-Buttons .Button-item .Button:focus{border:1px dotted #707070;outline:none}.DataView-Share-Buttons .Button-item .Button-icon{width:32px}.DataView-Share-Buttons .Button-item .Button-text{display:block;line-height:1.2;margin-top:8px;font-size:1rem}.overlay{position:absolute;display:flex;align-items:center;justify-content:center;z-index:1;top:0;left:0;width:100%;height:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;opacity:.8}.overlay>.overlay-text{text-align:center;padding:2em;width:60%;background:#4d4d4d;border-radius:8px;color:#fff!important;font-size:1.6rem}",""]),t.exports=o},381:function(t,e,n){"use strict";n.r(e);var o=n(54),r=n(0),l=n(383),c=r.default.extend({data:function(){return{showDetails:!1,mdiChevronRight:o.e}},mounted:function(){this.showDetails=!0},methods:{toggleDetails:function(){l.a.$emit(l.b,{dataView:this.$parent})}}}),d=(n(377),n(10)),f=n(62),v=n.n(f),_=n(701),m=n(702),h=n(703),w=n(704),x=n(361),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.showDetails?n("v-expansion-panels",{attrs:{flat:""}},[n("v-expansion-panel",[n("v-expansion-panel-header",{style:{transition:"none"},attrs:{"hide-actions":!0},on:{click:t.toggleDetails}},[n("div",{staticClass:"v-expansion-panel-header__icon"},[n("v-icon",{attrs:{left:"",size:"2.4rem"}},[t._v(t._s(t.mdiChevronRight))])],1),t._v(" "),n("span",{staticClass:"expansion-panel-text"},[t._v(t._s(t.$t("テーブルを表示")))])]),t._v(" "),n("v-expansion-panel-content",[t._t("default")],2)],1)],1):[t._t("default")]],2)}),[],!1,null,null,null);e.default=component.exports;v()(component,{VExpansionPanel:_.a,VExpansionPanelContent:m.a,VExpansionPanelHeader:h.a,VExpansionPanels:w.a,VIcon:x.a})},382:function(t,e,n){"use strict";n.r(e);n(67),n(22);var o=n(54),r=n(0).default.extend({props:{title:{type:String,default:""},titleId:{type:String,default:""}},data:function(){return{openGraphEmbed:!1,displayShare:!1,showOverlay:!1,mdiClipboardOutline:o.f,mdiClose:o.g}},computed:{graphEmbedValue:function(){var t='<iframe width="560" height="315" src="'.concat(this.permalink(!0,!0),'" frameborder="0"></iframe>');return t}},watch:{displayShare:function(t){t?document.documentElement.addEventListener("click",this.toggleShareMenu):document.documentElement.removeEventListener("click",this.toggleShareMenu)}},methods:{toggleShareMenu:function(t){t.stopPropagation(),this.displayShare=!this.displayShare},closeShareMenu:function(){this.displayShare=!1,this.$refs.shareOpener.focus()},isCopyAvailable:function(){return!!navigator.clipboard},copyEmbedCode:function(){var t=this;navigator.clipboard.writeText(this.graphEmbedValue).then((function(){t.closeShareMenu(),t.showOverlay=!0,setTimeout((function(){t.showOverlay=!1}),2e3)}))},stopClosingShareMenu:function(t){t.stopPropagation()},permalink:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],embed=arguments.length>1&&void 0!==arguments[1]&&arguments[1],e="/cards/".concat(this.titleId);return embed&&(e="".concat(e,"?embed=true")),e=this.localePath(e),t&&(e="".concat(location.protocol,"//").concat(location.host).concat(e)),e},twitter:function(){var t="https://twitter.com/intent/tweet?text=".concat(this.title," / ").concat(this.$t("東京都")).concat(this.$t("新型コロナウイルス感染症")).concat(this.$t("対策サイト"),"&url=").concat(this.permalink(!0),"&hashtags=StopCovid19JP");window.open(t)},facebook:function(){var t="https://www.facebook.com/sharer.php?u=".concat(this.permalink(!0));window.open(t)},line:function(){var t="https://social-plugins.line.me/lineit/share?url=".concat(this.permalink(!0));window.open(t)}}}),l=(n(379),n(10)),c=n(62),d=n.n(c),f=n(361),v=n(705),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-tooltip",{attrs:{left:"","nudge-right":"20","nudge-bottom":"4"},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("button",t._g({ref:"shareOpener",staticClass:"DataView-Share-Opener",on:{click:t.toggleShareMenu}},o),[n("svg",{attrs:{width:"14",height:"16",viewBox:"0 0 14 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",role:"img","aria-label":t.$t("{title}のグラフをシェア",{title:t.title})}},[n("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M7.59999 3.5H9.5L7 0.5L4.5 3.5H6.39999V11H7.59999V3.5ZM8.5 5.75H11.5C11.9142 5.75 12.25 6.08579 12.25 6.5V13.5C12.25 13.9142 11.9142 14.25 11.5 14.25H2.5C2.08579 14.25 1.75 13.9142 1.75 13.5V6.5C1.75 6.08579 2.08579 5.75 2.5 5.75H5.5V4.5H2.5C1.39543 4.5 0.5 5.39543 0.5 6.5V13.5C0.5 14.6046 1.39543 15.5 2.5 15.5H11.5C12.6046 15.5 13.5 14.6046 13.5 13.5V6.5C13.5 5.39543 12.6046 4.5 11.5 4.5H8.5V5.75Z",fill:"#808080"}})])])]}}])},[t._v(" "),n("span",[t._v(t._s(t.$t("情報をシェアする")))])]),t._v(" "),t.displayShare?n("div",{staticClass:"DataView-Share-Buttons py-2",on:{click:t.stopClosingShareMenu}},[n("div",{staticClass:"Share-Buttons-header"},[n("div",{staticClass:"Close-Button"},[n("v-icon",{attrs:{"aria-label":t.$t("閉じる")},on:{click:t.closeShareMenu}},[t._v("\n          "+t._s(t.mdiClose)+"\n        ")])],1),t._v(" "),n("h4",[t._v(t._s(t.$t("情報をシェア")))])]),t._v(" "),n("section",[n("h5",[t._v(t._s(t.$t("埋め込み用コード")))]),t._v(" "),n("div",{staticClass:"EmbedCode"},[t.isCopyAvailable()?n("v-icon",{staticClass:"EmbedCode-Copy",attrs:{"aria-label":t.$t("クリップボードにコピー")},on:{click:t.copyEmbedCode}},[t._v(t._s(t.mdiClipboardOutline))]):t._e(),t._v("\n        "+t._s(t.graphEmbedValue)+"\n      ")],1)]),t._v(" "),n("section",[n("h5",[t._v(t._s(t.$t("SNSでシェア")))]),t._v(" "),n("ul",{staticClass:"Button-list"},[n("li",{staticClass:"Button-item line"},[n("button",{staticClass:"Button",attrs:{"aria-label":t.$t("LINEで{title}のグラフをシェア",{title:t.title})},on:{click:t.line}},[t._m(0),t._v(" "),n("span",{staticClass:"Button-text"},[t._v(t._s(t.$t("LINEで情報をシェア")))])])]),t._v(" "),n("li",{staticClass:"Button-item twitter"},[n("button",{staticClass:"Button",attrs:{"aria-label":t.$t("Twitterで{title}のグラフをシェア",{title:t.title})},on:{click:t.twitter}},[t._m(1),t._v(" "),n("span",{staticClass:"Button-text"},[t._v(t._s(t.$t("Twitterで情報をシェア")))])])]),t._v(" "),n("li",{staticClass:"Button-item facebook"},[n("button",{staticClass:"Button",attrs:{"aria-label":t.$t("facebookで{title}のグラフをシェア",{title:t.title})},on:{click:t.facebook}},[t._m(2),t._v(" "),n("span",{staticClass:"Button-text"},[t._v(t._s(t.$t("facebookで情報をシェア")))])])])])])]):t._e(),t._v(" "),t.showOverlay?n("div",{staticClass:"overlay"},[n("div",{staticClass:"overlay-text"},[t._v("\n      "+t._s(t.$t("埋め込み用コードをコピーしました"))+"\n    ")])]):t._e()],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("picture",[n("source",{staticClass:"Button-icon",attrs:{srcset:"/line-square.webp",type:"image/webp"}}),t._v(" "),n("img",{staticClass:"Button-icon",attrs:{src:"/line-square.png",alt:"LINE"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("picture",[n("source",{staticClass:"Button-icon",attrs:{srcset:"/twitter-square.webp",type:"image/webp"}}),t._v(" "),n("img",{staticClass:"Button-icon",attrs:{src:"/twitter-square.png",alt:"Twitter"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("picture",[n("source",{staticClass:"Button-icon",attrs:{srcset:"/facebook.webp",type:"image/webp"}}),t._v(" "),n("img",{staticClass:"Button-icon",attrs:{src:"/facebook.png",alt:"facebook"}})])}],!1,null,null,null);e.default=component.exports;d()(component,{VIcon:f.a,VTooltip:v.a})},383:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return r}));var o=new(n(0).default),r="TOGGLE_DETAILS"},384:function(t,e,n){"use strict";n(374)},385:function(t,e,n){var o=n(30)(!1);o.push([t.i,".DataView{height:100%;background-color:#fff;box-shadow:0 0 2px rgba(0,0,0,.15);border:.5px solid #d9d9d9!important;border-radius:4px}.DataView-Header{display:flex;flex-flow:column;align-items:flex-start;padding:0 10px}@media screen and (min-width:769px){.DataView-Header{padding:0 5px}}@media screen and (min-width:1171px){.DataView-Header{flex-flow:row;justify-content:space-between;padding:0}.DataView-Header.with-dataSetPanel{flex-flow:column}}.DataView-Inner{display:flex;flex-flow:column;height:100%;padding:22px}.DataView-Title{width:100%;margin-bottom:10px;font-weight:400;line-height:1.5;color:#4d4d4d;font-size:2rem}.DataView-Title.with-dataSetPanel{margin-bottom:0}@media screen and (min-width:1171px){.DataView-Title{margin-bottom:0}.DataView-Title.with-infoPanel{flex:1 1 50%;margin-right:24px}}.DataView-Title span{display:inline-block}.DataView-InfoPanel{flex:1 1 50%}.DataView-DataSetPanel{flex:1 0 auto;width:100%}.DataView-Content{margin:16px 0}.DataView-Space{margin-top:10px}.DataView-Description{margin-top:10px;color:#707070;font-size:1.2rem}.DataView-Description ul{padding-left:1em;list-style:disc inside}.DataView-Description ul li{margin-left:1.5em;text-indent:-1.5em}.DataView-Description--Additional,.DataView-ExpantionPanel{margin-bottom:10px}.DataView-Footer{display:flex;justify-content:space-between;margin-top:auto;color:#707070;font-size:1.2rem}.DataView-Footer ul{padding:0;list-style-type:none}.DataView-Footer .Permalink{color:#707070!important}.DataView-Footer .Footer-Right{display:flex;align-items:flex-end}.DataView-AttentionNote{padding:12px;margin:10px 0;color:#4d4d4d;background-color:#ffe200;border-radius:4px;font-size:1.2rem}.DataView-AttentionNote p{margin:0}",""]),t.exports=o},394:function(t,e,n){"use strict";var o=n(3);function r(t){t._observe&&(t._observe.observer.unobserve(t),delete t._observe)}var l={inserted:function(t,e){if("undefined"!=typeof window&&"IntersectionObserver"in window){var n=e.modifiers||{},l=e.value,c="object"===Object(o.a)(l)?l:{handler:l,options:{}},d=c.handler,f=c.options,v=new IntersectionObserver((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],o=arguments.length>1?arguments[1]:void 0;if(t._observe){var l=e.some((function(t){return t.isIntersecting}));!d||n.quiet&&!t._observe.init||n.once&&!l&&t._observe.init||d(e,o,l),l&&n.once?r(t):t._observe.init=!0}}),f);t._observe={init:!1,observer:v},v.observe(t)}},unbind:r};e.a=l},400:function(t,e,n){"use strict";n(94);var o=n(16),r=n(0);e.a=r.default.extend({name:"measurable",props:{height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},computed:{measurableStyles:function(){var t={},e=Object(o.e)(this.height),n=Object(o.e)(this.minHeight),r=Object(o.e)(this.minWidth),l=Object(o.e)(this.maxHeight),c=Object(o.e)(this.maxWidth),d=Object(o.e)(this.width);return e&&(t.height=e),n&&(t.minHeight=n),r&&(t.minWidth=r),l&&(t.maxHeight=l),c&&(t.maxWidth=c),d&&(t.width=d),t}}})},412:function(t,e,n){var content=n(456);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(31).default)("5e22af2d",content,!0,{sourceMap:!1})},414:function(t,e,n){"use strict";n(17),n(26),n(33),n(36);var o=n(4),r=(n(94),n(23),n(32),n(68),n(253),n(13),n(35),n(254),n(255),n(256),n(257),n(258),n(259),n(260),n(261),n(262),n(263),n(264),n(265),n(266),n(37),n(47),n(12),n(69),n(267),n(0)),l=n(173),c=n(16);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=["sm","md","lg","xl"],_=v.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),m=v.reduce((function(t,e){return t["offset"+Object(c.B)(e)]={type:[String,Number],default:null},t}),{}),h=v.reduce((function(t,e){return t["order"+Object(c.B)(e)]={type:[String,Number],default:null},t}),{}),w={col:Object.keys(_),offset:Object.keys(m),order:Object.keys(h)};function x(t,e,n){var o=t;if(null!=n&&!1!==n){if(e){var r=e.replace(t,"");o+="-".concat(r)}return"col"!==t||""!==n&&!0!==n?(o+="-".concat(n)).toLowerCase():o.toLowerCase()}}var y=new Map;e.a=r.default.extend({name:"v-col",functional:!0,props:f(f(f(f({cols:{type:[Boolean,String,Number],default:!1}},_),{},{offset:{type:[String,Number],default:null}},m),{},{order:{type:[String,Number],default:null}},h),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,data=e.data,r=e.children,c=(e.parent,"");for(var d in n)c+=String(n[d]);var f=y.get(c);return f||function(){var t,e;for(e in f=[],w)w[e].forEach((function(t){var o=n[t],r=x(e,t,o);r&&f.push(r)}));var r=f.some((function(t){return t.startsWith("col-")}));f.push((t={col:!r||!n.cols},Object(o.a)(t,"col-".concat(n.cols),n.cols),Object(o.a)(t,"offset-".concat(n.offset),n.offset),Object(o.a)(t,"order-".concat(n.order),n.order),Object(o.a)(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),y.set(c,f)}(),t(n.tag,Object(l.a)(data,{class:f}),r)}})},428:function(t,e,n){var content=n(478);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(31).default)("4509a34d",content,!0,{sourceMap:!1})},429:function(t,e,n){var content=n(480);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(31).default)("5f38c72d",content,!0,{sourceMap:!1})},441:function(t,e,n){var content=n(533);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(31).default)("bc065de8",content,!0,{sourceMap:!1})},448:function(t,e,n){"use strict";n.r(e);n(47),n(48);var o=n(0).default.extend({props:{value:{type:String,required:!0},unit:{type:Object,required:!0},bold:{type:Boolean,required:!0}},data:function(){return{currentLocaleCode:this.$root.$i18n.locale}},computed:{translatedUnit:function(){var t=this.unit,text=t.text,e=t.translatable,n=t.except;return e?n&&n.includes(String(this.currentLocaleCode))?null:this.$t(t.text):text}}}),r=n(455),l=n(10);var component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{class:t.$style.parent},[t.bold?n("span",[n("strong",[t._v(t._s(t.value))])]):n("span",[t._v(t._s(t.value))]),t._v(" "),t.translatedUnit?n("span",[t._v(t._s(t.translatedUnit))]):t._e()])}),[],!1,(function(t){this.$style=r.default.locals||r.default}),null,null);e.default=component.exports},455:function(t,e,n){"use strict";var o=n(412),r=n.n(o);n.d(e,"default",(function(){return r.a}))},456:function(t,e,n){var o=n(30)(!1);o.push([t.i,".parent_25AIV{margin-left:10px;text-align:right;white-space:nowrap;flex-shrink:1}",""]),o.locals={parent:"parent_25AIV"},t.exports=o},477:function(t,e,n){"use strict";var o=n(428),r=n.n(o);n.d(e,"default",(function(){return r.a}))},478:function(t,e,n){var o=n(30)(!1);o.push([t.i,'.container_3XjJx{width:100%;color:#085c6c;line-height:1.35;padding-left:0!important}.container_3XjJx,.container_3XjJx *{box-sizing:border-box}.container_3XjJx ul{padding-left:0}.group_1p13o{flex:0 0 auto;padding-left:3px!important;border-top:3px solid #085c6c;border-left:3px solid #085c6c}.content_2oIg7{padding:5px 10px;display:flex;justify-content:space-between;align-items:center;width:100%;border:3px solid #085c6c}.content_2oIg7>span{display:block;font-size:1.4rem}.content_2oIg7>span:first-child{text-align:left;margin-top:1px;flex-shrink:2}.content_2oIg7>span:not(:last-child){word-wrap:break-word}.content_2oIg7 strong{font-size:1.6rem}.content_2oIg7 span.unit_2PKD5{font-size:1.4rem}.box_1PPAr{display:block;margin-top:3px}.box_1PPAr.parent_3YN05{border-top:3px solid #085c6c;border-left:3px solid #085c6c;position:relative;padding-left:29px}.box_1PPAr.parent_3YN05:after{content:"";display:block;position:absolute;left:-1px;bottom:0;width:30px;border-bottom:3px solid #085c6c}.box_1PPAr.parent_3YN05>.content_2oIg7{margin-left:-29px;width:calc(100% + 29px);border-top:none;border-left:none;border-bottom:none}@media screen and (max-width:1263px){.group_1p13o{padding-left:.238vw!important;border-top:.238vw solid #085c6c;border-left:.238vw solid #085c6c}.content_2oIg7{padding:.396vw .792vw;border:.238vw solid #085c6c}.content_2oIg7>span{font-size:1.4rem}.content_2oIg7>span:first-child{margin-top:.08vw}.content_2oIg7 strong{font-size:1.6rem}.content_2oIg7 span.unit_2PKD5{font-size:1.4rem}.box_1PPAr{margin-top:.238vw}.box_1PPAr.parent_3YN05{border-top:.238vw solid #085c6c;border-left:.238vw solid #085c6c;padding-left:2.296vw}.box_1PPAr.parent_3YN05:after{width:2.534vw;border-bottom:.238vw solid #085c6c}.box_1PPAr.parent_3YN05>.content_2oIg7{margin-left:-2.296vw;width:calc(100% + 2.296vw)}}@media screen and (max-width:959px){.group_1p13o{padding-left:.313vw!important;border-top:.313vw solid #085c6c;border-left:.313vw solid #085c6c}.content_2oIg7{padding:.521vw 1.042vw;border:.313vw solid #085c6c}.content_2oIg7>span{font-size:1.4rem}.content_2oIg7>span:first-child{margin-top:.105vw}.content_2oIg7 strong{font-size:1.6rem}.content_2oIg7 span.unit_2PKD5{font-size:1.4rem}.box_1PPAr{margin-top:.313vw}.box_1PPAr.parent_3YN05{border-top:.313vw solid #085c6c;border-left:.313vw solid #085c6c;padding-left:3.02vw}.box_1PPAr.parent_3YN05:after{width:3.334vw;border-bottom:.313vw solid #085c6c}.box_1PPAr.parent_3YN05>.content_2oIg7{margin-left:-3.02vw;width:calc(100% + 3.02vw)}}@media screen and (max-width:600px){.group_1p13o{padding-left:.5vw!important;border-top:.5vw solid #085c6c;border-left:.5vw solid #085c6c}.content_2oIg7{padding:.834vw 1.667vw;border:.5vw solid #085c6c}.content_2oIg7>span{font-size:1.4rem}.content_2oIg7>span:first-child{margin-top:.167vw}.content_2oIg7 strong{font-size:1.6rem}.content_2oIg7 span.unit_2PKD5{font-size:1.4rem}.box_1PPAr{margin-top:.5vw}.box_1PPAr.parent_3YN05{border-top:.5vw solid #085c6c;border-left:.5vw solid #085c6c;padding-left:4.834vw}.box_1PPAr.parent_3YN05:after{width:5.334vw;border-bottom:.5vw solid #085c6c}.box_1PPAr.parent_3YN05>.content_2oIg7{margin-left:-4.834vw;width:calc(100% + 4.834vw)}}',""]),o.locals={container:"container_3XjJx",group:"group_1p13o",content:"content_2oIg7",unit:"unit_2PKD5",box:"box_1PPAr",parent:"parent_3YN05"},t.exports=o},479:function(t,e,n){"use strict";var o=n(429),r=n.n(o);n.d(e,"default",(function(){return r.a}))},480:function(t,e,n){var o=n(30)(!1);o.push([t.i,'.container_z0XXc{width:100%;color:#085c6c;line-height:1.35;padding-left:0!important}.container_z0XXc,.container_z0XXc *{box-sizing:border-box}.container_z0XXc ul{padding-left:0}.group_2pBHl{flex:0 0 auto;padding-left:3px!important;border-top:3px solid #085c6c;border-left:3px solid #085c6c}.content_1kFjt{padding:5px 10px;display:flex;justify-content:space-between;align-items:center;width:100%;border:3px solid #085c6c}.content_1kFjt>span{display:block;font-size:1.4rem}.content_1kFjt>span:first-child{text-align:left;margin-top:1px;flex-shrink:2}.content_1kFjt>span:not(:last-child){word-wrap:break-word}.content_1kFjt strong{font-size:1.6rem}.content_1kFjt span.unit_26rAD{font-size:1.4rem}.box_2T-dp{display:block;margin-top:3px}.box_2T-dp.parent_1ZNHR{border-top:3px solid #085c6c;border-left:3px solid #085c6c;position:relative;padding-left:29px}.box_2T-dp.parent_1ZNHR:after{content:"";display:block;position:absolute;left:-1px;bottom:0;width:30px;border-bottom:3px solid #085c6c}.box_2T-dp.parent_1ZNHR>.content_1kFjt{margin-left:-29px;width:calc(100% + 29px);border-top:none;border-left:none;border-bottom:none}@media screen and (max-width:1263px){.group_2pBHl{padding-left:.238vw!important;border-top:.238vw solid #085c6c;border-left:.238vw solid #085c6c}.content_1kFjt{padding:.396vw .792vw;border:.238vw solid #085c6c}.content_1kFjt>span{font-size:1.4rem}.content_1kFjt>span:first-child{margin-top:.08vw}.content_1kFjt strong{font-size:1.6rem}.content_1kFjt span.unit_26rAD{font-size:1.4rem}.box_2T-dp{margin-top:.238vw}.box_2T-dp.parent_1ZNHR{border-top:.238vw solid #085c6c;border-left:.238vw solid #085c6c;padding-left:2.296vw}.box_2T-dp.parent_1ZNHR:after{width:2.534vw;border-bottom:.238vw solid #085c6c}.box_2T-dp.parent_1ZNHR>.content_1kFjt{margin-left:-2.296vw;width:calc(100% + 2.296vw)}}@media screen and (max-width:959px){.group_2pBHl{padding-left:.313vw!important;border-top:.313vw solid #085c6c;border-left:.313vw solid #085c6c}.content_1kFjt{padding:.521vw 1.042vw;border:.313vw solid #085c6c}.content_1kFjt>span{font-size:1.4rem}.content_1kFjt>span:first-child{margin-top:.105vw}.content_1kFjt strong{font-size:1.6rem}.content_1kFjt span.unit_26rAD{font-size:1.4rem}.box_2T-dp{margin-top:.313vw}.box_2T-dp.parent_1ZNHR{border-top:.313vw solid #085c6c;border-left:.313vw solid #085c6c;padding-left:3.02vw}.box_2T-dp.parent_1ZNHR:after{width:3.334vw;border-bottom:.313vw solid #085c6c}.box_2T-dp.parent_1ZNHR>.content_1kFjt{margin-left:-3.02vw;width:calc(100% + 3.02vw)}}@media screen and (max-width:600px){.group_2pBHl{padding-left:.5vw!important;border-top:.5vw solid #085c6c;border-left:.5vw solid #085c6c}.content_1kFjt{padding:.834vw 1.667vw;border:.5vw solid #085c6c}.content_1kFjt>span{font-size:1.4rem}.content_1kFjt>span:first-child{margin-top:.167vw}.content_1kFjt strong{font-size:1.6rem}.content_1kFjt span.unit_26rAD{font-size:1.4rem}.box_2T-dp{margin-top:.5vw}.box_2T-dp.parent_1ZNHR{border-top:.5vw solid #085c6c;border-left:.5vw solid #085c6c;padding-left:4.834vw}.box_2T-dp.parent_1ZNHR:after{width:5.334vw;border-bottom:.5vw solid #085c6c}.box_2T-dp.parent_1ZNHR>.content_1kFjt{margin-left:-4.834vw;width:calc(100% + 4.834vw)}}',""]),o.locals={container:"container_z0XXc",group:"group_2pBHl",content:"content_1kFjt",unit:"unit_26rAD",box:"box_2T-dp",parent:"parent_1ZNHR"},t.exports=o},506:function(t,e,n){"use strict";n.r(e);var o=n(0),r=n(448),l=o.default.extend({components:{ValueWithTranslatableUnit:r.default},props:{items:{type:Object,required:!0}}}),c=n(477),d=n(10);var component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{class:t.$style.container},[n("li",{class:[t.$style.box,t.$style.parent]},[n("div",{class:t.$style.content},[n("span",[t._v(t._s(t.$t("（１）人口10万人当たりの累積陽性者数")))]),t._v(" "),n("value-with-translatable-unit",{attrs:{value:t.items["人口10万人当たりの累積陽性者数"].value,unit:t.items["人口10万人当たりの累積陽性者数"].unit}})],1),t._v(" "),n("ul",{class:t.$style.group},[n("li",{class:[t.$style.box]},[n("div",{class:t.$style.content},[n("span",[t._v(t._s(t.$t("人口10万人当たりの累積陽性者数（参考値）")))]),t._v(" "),n("span",[t._v(t._s(t.items["人口10万人当たりの累積陽性者数（参考値）"].value))])])])])]),t._v(" "),n("li",{class:[t.$style.box,t.$style.parent]},[n("div",{class:t.$style.content},[n("span",[t._v(t._s(t.$t("（２）陽性患者増加比")))]),t._v(" "),n("value-with-translatable-unit",{attrs:{value:t.items["陽性患者増加比"].value,unit:t.items["陽性患者増加比"].unit}})],1),t._v(" "),n("ul",{class:t.$style.group},[n("li",{class:[t.$style.box]},[n("div",{class:t.$style.content},[n("span",[t._v(t._s(t.$t("陽性患者増加比（参考値）")))]),t._v(" "),n("span",[t._v(t._s(t.items["陽性患者増加比（参考値）"].value))])])])])]),t._v(" "),n("li",{class:[t.$style.box,t.$style.parent]},[n("div",{class:t.$style.content},[n("span",[t._v(t._s(t.$t("（３）感染経路不明者の割合")))]),t._v(" "),n("value-with-translatable-unit",{attrs:{value:t.items["感染経路不明者の割合"].value,unit:t.items["感染経路不明者の割合"].unit}})],1),t._v(" "),n("ul",{class:t.$style.group},[n("li",{class:[t.$style.box]},[n("div",{class:t.$style.content},[n("span",[t._v(t._s(t.$t("感染経路不明者の割合（参考値）")))]),t._v(" "),n("span",[t._v(t._s(t.items["感染経路不明者の割合（参考値）"].value))])])])])])])}),[],!1,(function(t){this.$style=c.default.locals||c.default}),null,null);e.default=component.exports},507:function(t,e,n){"use strict";n.r(e);var o=n(0),r=n(448),l=o.default.extend({components:{ValueWithTranslatableUnit:r.default},props:{items:{type:Object,required:!0}}}),c=n(479),d=n(10);var component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{class:t.$style.container},[n("li",{class:[t.$style.box,t.$style.parent]},[n("div",{class:t.$style.content},[n("span",[t._v(t._s(t.$t("検査体制")))])]),t._v(" "),n("ul",{class:t.$style.group},[n("li",{class:[t.$style.box,t.$style.parent]},[n("div",{class:t.$style.content},[n("span",[t._v(t._s(t.$t("（４）陽性率")))]),t._v(" "),n("value-with-translatable-unit",{attrs:{value:t.items["陽性率"].value,unit:t.items["陽性率"].unit}})],1),t._v(" "),n("ul",{class:t.$style.group},[n("li",{class:[t.$style.box]},[n("div",{class:t.$style.content},[n("span",[t._v(t._s(t.$t("陽性率（参考値）")))]),t._v(" "),n("span",[t._v(t._s(t.items["陽性率（参考値）"].value))])])])])])])]),t._v(" "),n("li",{class:[t.$style.box,t.$style.parent]},[n("div",{class:t.$style.content},[n("span",[t._v(t._s(t.$t("受入体制")))])]),t._v(" "),n("ul",{class:t.$style.group},[n("li",{class:[t.$style.box,t.$style.parent]},[n("div",{class:t.$style.content},[n("span",[t._v(t._s(t.$t("（５）病床の逼迫具合")))]),t._v(" "),n("value-with-translatable-unit",{attrs:{value:t.items["病床の逼迫具合"].value,unit:t.items["病床の逼迫具合"].unit}})],1),t._v(" "),n("ul",{class:t.$style.group},[n("li",{class:[t.$style.box]},[n("div",{class:t.$style.content},[n("span",[t._v(t._s(t.$t("病床の逼迫具合（参考値）")))]),t._v(" "),n("span",[t._v(t._s(t.items["病床の逼迫具合（参考値）"].value))])])])])]),t._v(" "),n("li",{class:[t.$style.box,t.$style.parent]},[n("div",{class:t.$style.content},[n("span",[t._v(t._s(t.$t("（６）重症者用病床の逼迫具合")))]),t._v(" "),n("value-with-translatable-unit",{attrs:{value:t.items["重症者用病床の逼迫具合"].value,unit:t.items["重症者用病床の逼迫具合"].unit}})],1),t._v(" "),n("ul",{class:t.$style.group},[n("li",{class:[t.$style.box]},[n("div",{class:t.$style.content},[n("span",[t._v(t._s(t.$t("重症者用病床の逼迫具合（参考値）")))]),t._v(" "),n("span",[t._v(t._s(t.items["重症者用病床の逼迫具合（参考値）"].value))])])])])]),t._v(" "),n("li",{class:[t.$style.box,t.$style.parent]},[n("div",{class:t.$style.content},[n("span",[t._v(t._s(t.$t("（７）人口10万人当たりの療養者数")))]),t._v(" "),n("value-with-translatable-unit",{attrs:{value:t.items["人口10万人当たりの療養者数"].value,unit:t.items["人口10万人当たりの療養者数"].unit}})],1),t._v(" "),n("ul",{class:t.$style.group},[n("li",{class:[t.$style.box]},[n("div",{class:t.$style.content},[n("span",[t._v(t._s(t.$t("人口10万人当たりの療養者数（参考値）")))]),t._v(" "),n("span",[t._v(t._s(t.items["人口10万人当たりの療養者数（参考値）"].value))])])])])])])])])}),[],!1,(function(t){this.$style=c.default.locals||c.default}),null,null);e.default=component.exports},531:function(t){t.exports=JSON.parse('{"date":"2021/07/27 09:30","updatedate":"2021年7月26日","data":{"人口10万人当たりの累積陽性者数":"40.23","人口10万人当たりの累積陽性者数（参考値）":"15 [25] 人","陽性患者増加比":"1.52","陽性患者増加比（参考値）":"1以上","感染経路不明者の割合":"59.45","感染経路不明者の割合（参考値）":"50%以上","陽性率":"10.93","陽性率（参考値）":"10.0 %","病床の逼迫具合":"34.00","病床の逼迫具合（参考値）":"25 [50] %以上","重症者用病床の逼迫具合":"21.43","重症者用病床の逼迫具合（参考値）":"25 [50] %以上","人口10万人当たりの療養者数":"46.87","人口10万人当たりの療養者数（参考値）":"15 [25] 人"}}')},532:function(t,e,n){"use strict";var o=n(441),r=n.n(o);n.d(e,"default",(function(){return r.a}))},533:function(t,e,n){var o=n(30)(!1);o.push([t.i,".section_3Eksn{margin:0 0 20px}.section_3Eksn:first-child{margin-top:-10px}.section_3Eksn h4{margin:5px 0 10px;font-weight:400;font-size:1.6rem}.button_LXhGM{color:#085c6c!important;padding:4px 8px;font-size:1.4rem;display:inline-block;border-radius:4px;background-color:#fff;border:1px solid #085c6c;color:#085c6c;cursor:pointer}.button_LXhGM:hover{color:#fff!important;background-color:#085c6c;color:#fff}.button_LXhGM:hover>i{color:#fff!important}details[open] .fade_3yEd3{-webkit-animation:fadeIn_1nGWI .7s ease;animation:fadeIn_1nGWI .7s ease}@-webkit-keyframes fadeIn_1nGWI{0%{opacity:0;transform:translateY(-10px)}to{opacity:1;transform:none}}@keyframes fadeIn_1nGWI{0%{opacity:0;transform:translateY(-10px)}to{opacity:1;transform:none}}details[open] summary{color:grey}",""]),o.locals={section:"section_3Eksn",button:"button_LXhGM",fade:"fade_3yEd3",fadeIn:"fadeIn_1nGWI"},t.exports=o},611:function(t,e,n){"use strict";n.r(e);var o=n(28),r=n.n(o),l=n(376),c=n(506),d=n(507),f=n(531),v={components:{DataView:l.default,InfectionStatus:c.default,MedicalSystem:d.default},data:function(){var t,e,n,o=(t=f.data,e={text:"人",translatable:!0},n={text:"%",translatable:!1},{"人口10万人当たりの累積陽性者数":{value:t["人口10万人当たりの累積陽性者数"],unit:e,bold:!0},"人口10万人当たりの累積陽性者数（参考値）":{value:t["人口10万人当たりの累積陽性者数（参考値）"],unit:e,bold:!1},"陽性患者増加比":{value:t["陽性患者増加比"],unit:{text:" ",translatable:!1},bold:!0},"陽性患者増加比（参考値）":{value:t["陽性患者増加比（参考値）"],unit:n,bold:!1},"感染経路不明者の割合":{value:t["感染経路不明者の割合"],unit:n,bold:!0},"感染経路不明者の割合（参考値）":{value:t["感染経路不明者の割合（参考値）"],unit:null,bold:!1},"陽性率":{value:t["陽性率"],unit:n,bold:!0},"陽性率（参考値）":{value:t["陽性率（参考値）"],unit:null,bold:!1},"病床の逼迫具合":{value:t["病床の逼迫具合"],unit:n,bold:!0},"病床の逼迫具合（参考値）":{value:t["病床の逼迫具合（参考値）"],unit:null,bold:!1},"重症者用病床の逼迫具合":{value:t["重症者用病床の逼迫具合"],unit:n,bold:!0},"重症者用病床の逼迫具合（参考値）":{value:t["重症者用病床の逼迫具合（参考値）"],unit:null,bold:!1},"人口10万人当たりの療養者数":{value:t["人口10万人当たりの療養者数"],unit:e,bold:!0},"人口10万人当たりの療養者数（参考値）":{value:t["人口10万人当たりの療養者数（参考値）"],unit:null,bold:!1}});return{monitoringItemsData:f,monitoringItems:o,date:r()(f.date).format("YYYY年MM月DD日")}}},_=n(532),m=n(10),h=n(62),w=n.n(h),x=n(414);var component=Object(m.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-col",{staticClass:"DataCard MonitoringItemsOverviewCard",attrs:{cols:"12",md:"6"}},[n("client-only",[n("data-view",{attrs:{title:t.$t("モニタリング状況（{data}時点）",{data:t.monitoringItemsData.updatedate}),"title-id":"monitoring-items-overview",date:t.monitoringItemsData.date},scopedSlots:t._u([{key:"description",fn:function(){return[n("p",[t._v("\n          "+t._s(t.$t("参考値における [ ] 内の数値は、ステージ4の指標である（ [ ] のついていない参考値は、ステージ3の指標である）"))),n("br"),t._v("\n          "+t._s(t.$t("[ ] のない参考値は、ステージ3,4どちらとも同じ数値であることを示す"))+"\n        ")])]},proxy:!0},{key:"additionalDescription",fn:function(){return[n("span",[t._v(t._s(t.$t("（注）")))]),t._v(" "),n("ul",[n("li",[t._v("\n            "+t._s(t.$t("参考値は、国の新型コロナウィルス感染症対策分科会で示された「今後想定される感染状況と対策について」のステージ1から4までのうち、ステージ3及び4の指標を掲載している"))+"\n          ")]),t._v(" "),n("li",[t._v("\n            "+t._s(t.$t("陽性患者については、報道発表した数値を翌日の数値に反映している"))+"\n          ")]),t._v(" "),n("li",[t._v("\n            "+t._s(t.$t("速報値として公表するものであり、後日修正する場合がある"))+"\n          ")]),t._v(" "),n("details",[n("summary",[t._v("\n              "+t._s(t.$t(" 計算方法（ここをクリックして詳細を確認出来ます）"))+"\n            ")]),t._v(" "),n("div",{staticClass:"fade"},[n("li",[t._v("\n                "+t._s(t.$t("（１）の数値は、｛直近1週間の累積新規陽性患者数/（本市人口/10万人）｝で計算"))+"\n              ")]),t._v(" "),n("li",[t._v("\n                "+t._s(t.$t("（２）の数値は、｛当該週の新規陽性患者数/前週の新規陽性患者数｝で計算"))+"\n              ")]),t._v(" "),n("li",[t._v("\n                "+t._s(t.$t("（３）の数値は、｛直近1週間の感染経路不明者/直近1週間の新規陽性患者数｝で計算"))+"\n              ")]),t._v(" "),n("li",[t._v("\n                "+t._s(t.$t("（４）の数値は、｛直近1週間の新規陽性患者数/市衛生研究所と民間検査機関の検査人数の合計｝で計算"))+"\n              ")]),t._v(" "),n("li",[t._v("\n                "+t._s(t.$t("（５）、（６）の数値は、｛入院者病床/利用可能病床｝で計算"))+"\n              ")]),t._v(" "),n("li",[t._v("\n                "+t._s(t.$t("（７）の数値は、｛療養者数/（本市人口/10万人）｝で計算"))+"\n              ")])])])])]},proxy:!0}])},[t._v(" "),t._v(" "),n("section",{class:t.$style.section},[n("h4",[t._v(t._s(t.$t("感染状況")))]),t._v(" "),n("infection-status",{attrs:{"aria-label":t.$t("感染状況"),items:t.monitoringItems}})],1),t._v(" "),n("section",{class:t.$style.section},[n("h4",[t._v(t._s(t.$t("医療提供体制")))]),t._v(" "),n("medical-system",{attrs:{"aria-label":t.$t("医療提供体制"),items:t.monitoringItems}})],1)])],1)],1)}),[],!1,(function(t){this.$style=_.default.locals||_.default}),null,null);e.default=component.exports;w()(component,{VCol:x.a})}}]);